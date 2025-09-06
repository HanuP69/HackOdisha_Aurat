import User from "../models/User.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import admin from "../firebaseAdmin.js";
import { sendVerificationEmail, sendWelcomeEmail } from "../services/emailService.js";

// Helper: Generate JWT
const generateToken = (user) => {
  return jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: "7d" });
};

// Helper: Validate email format
const validateEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

// --- Send Verification Email ---
export const sendVerification = async (req, res) => {
  try {
    const { username, email, gender } = req.body;

    // Validation
    if (!username || !email || !gender) {
      return res.status(400).json({ 
        message: 'Username, email, and gender are required' 
      });
    }

    if (!validateEmail(email)) {
      return res.status(400).json({ 
        message: 'Please provide a valid email address' 
      });
    }

    if (username.length < 3 || username.length > 30) {
      return res.status(400).json({ 
        message: 'Username must be between 3 and 30 characters' 
      });
    }

    if (!['male', 'female', 'other'].includes(gender)) {
      return res.status(400).json({ 
        message: 'Gender must be male, female, or other' 
      });
    }

    // Check if user already exists and is verified
    const existingUser = await User.findOne({ 
      $or: [{ email }, { username }] 
    });

    if (existingUser && existingUser.emailVerified) {
      return res.status(400).json({ 
        message: 'User with this email or username already exists' 
      });
    }

    let user = existingUser;

    if (!user) {
      // Create new user (without password)
      user = new User({
        username,
        email,
        gender,
        avatar: "",
        emailVerified: false
      });
    } else {
      // Update existing unverified user
      user.username = username;
      user.gender = gender;
    }

    // Generate verification code
    const verificationCode = user.generateVerificationCode();
    await user.save();

    // Send verification email
    await sendVerificationEmail(email, username, verificationCode);

    res.status(200).json({
      message: 'Verification code sent to your email',
      email: email
    });

  } catch (error) {
    console.error('Send verification error:', error);
    res.status(500).json({ 
      message: 'Failed to send verification email. Please try again.' 
    });
  }
};

// --- Verify Email ---
export const verifyEmail = async (req, res) => {
  try {
    const { email, code } = req.body;

    if (!email || !code) {
      return res.status(400).json({ 
        message: 'Email and verification code are required' 
      });
    }

    const user = await User.findOne({ email });

    if (!user) {
      return res.status(404).json({ 
        message: 'User not found' 
      });
    }

    if (user.emailVerified) {
      return res.status(400).json({ 
        message: 'Email is already verified' 
      });
    }

    if (!user.isVerificationCodeValid(code)) {
      return res.status(400).json({ 
        message: 'Invalid or expired verification code' 
      });
    }

    // Mark email as verified
    user.emailVerified = true;
    user.verificationCode = null;
    user.verificationCodeExpires = null;
    await user.save();

    res.status(200).json({
      message: 'Email verified successfully',
      emailVerified: true
    });

  } catch (error) {
    console.error('Email verification error:', error);
    res.status(500).json({ 
      message: 'Failed to verify email. Please try again.' 
    });
  }
};

// --- Updated Manual Signup (after email verification) ---
export const signup = async (req, res) => {
  try {
    const { username, email, password, gender } = req.body;

    // Validation
    if (!username || !email || !password || !gender) {
      return res.status(400).json({ 
        message: 'All fields are required' 
      });
    }

    if (password.length < 6) {
      return res.status(400).json({ 
        message: 'Password must be at least 6 characters long' 
      });
    }

    const user = await User.findOne({ email });

    if (!user) {
      return res.status(404).json({ 
        message: 'User not found. Please start the registration process again.' 
      });
    }

    if (!user.emailVerified) {
      return res.status(400).json({ 
        message: 'Please verify your email first' 
      });
    }

    if (user.password) {
      return res.status(400).json({ 
        message: 'User already has a password set' 
      });
    }

    // Set password and complete registration
    const hashed = await bcrypt.hash(password, 10);
    user.password = hashed;
    await user.save();

    // Generate JWT token
    const token = generateToken(user);

    // Send welcome email
    try {
      await sendWelcomeEmail(user.email, user.username);
    } catch (emailError) {
      console.error('Welcome email error:', emailError);
      // Don't fail signup if welcome email fails
    }

    res.status(201).json({
      message: 'Account created successfully',
      token,
      user: {
        id: user._id,
        username: user.username,
        email: user.email,
        gender: user.gender,
        avatar: user.avatar,
        emailVerified: user.emailVerified
      }
    });

  } catch (error) {
    console.error('Signup completion error:', error);
    res.status(500).json({ 
      message: 'Failed to complete signup. Please try again.' 
    });
  }
};

// --- Updated Manual Login ---
export const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ 
        message: 'Email and password are required' 
      });
    }

    const user = await User.findOne({ email });
    if (!user || !user.password) {
      return res.status(401).json({ 
        message: 'Invalid credentials' 
      });
    }

    // Check if email is verified for manual signup users
    if (!user.googleId && !user.emailVerified) {
      return res.status(401).json({ 
        message: 'Please verify your email before logging in' 
      });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).json({ 
        message: 'Invalid credentials' 
      });
    }

    const token = generateToken(user);
    
    res.json({ 
      message: 'Login successful',
      token, 
      user: {
        id: user._id,
        username: user.username,
        email: user.email,
        gender: user.gender,
        avatar: user.avatar,
        emailVerified: user.emailVerified,
        googleId: user.googleId
      }
    });

  } catch (err) {
    console.error('Login error:', err);
    res.status(500).json({ 
      message: "Login failed. Please try again." 
    });
  }
};

// --- Updated Google Login ---
export const googleLogin = async (req, res) => {
  try {
    const { idToken } = req.body;
    if (!idToken) return res.status(400).json({ message: "Missing idToken" });

    const decoded = await admin.auth().verifyIdToken(idToken);
    const { uid, email, name, picture } = decoded;

    let user = await User.findOne({ email });
    if (!user) {
      user = new User({
        email,
        username: name || email.split("@")[0],
        googleId: uid,
        avatar: picture || "",
        emailVerified: true, // Google emails are pre-verified
      });
      await user.save();

      // Send welcome email for new Google users
      try {
        await sendWelcomeEmail(user.email, user.username);
      } catch (emailError) {
        console.error('Welcome email error:', emailError);
      }
    }

    const token = generateToken(user);
    
    res.json({ 
      message: 'Google login successful',
      token, 
      user: {
        id: user._id,
        username: user.username,
        email: user.email,
        gender: user.gender,
        avatar: user.avatar,
        emailVerified: user.emailVerified,
        googleId: user.googleId
      }
    });

  } catch (err) {
    console.error('Google login error:', err);
    res.status(500).json({ 
      message: "Google login failed. Please try again." 
    });
  }
};

// --- Resend Verification Email ---
export const resendVerification = async (req, res) => {
  try {
    const { email } = req.body;

    if (!email) {
      return res.status(400).json({ 
        message: 'Email is required' 
      });
    }

    const user = await User.findOne({ email });

    if (!user) {
      return res.status(404).json({ 
        message: 'User not found' 
      });
    }

    if (user.emailVerified) {
      return res.status(400).json({ 
        message: 'Email is already verified' 
      });
    }

    // Generate new verification code
    const verificationCode = user.generateVerificationCode();
    await user.save();

    // Send verification email
    await sendVerificationEmail(email, user.username, verificationCode);

    res.status(200).json({
      message: 'Verification code resent to your email'
    });

  } catch (error) {
    console.error('Resend verification error:', error);
    res.status(500).json({ 
      message: 'Failed to resend verification email. Please try again.' 
    });
  }
};

