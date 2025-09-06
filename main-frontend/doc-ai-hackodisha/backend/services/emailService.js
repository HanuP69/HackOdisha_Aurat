import nodemailer from 'nodemailer';

// Create transporter (using Gmail as example)
const createTransporter = () => {
  return nodemailer.createTransport
  ({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS // Use App Password for Gmail
    }
  });
};

// Send verification email
export const sendVerificationEmail = async (email, username, verificationCode) => {
  const transporter = createTransporter();
  
  const mailOptions = {
    from: `"Healthcare App" <${process.env.EMAIL_USER}>`,
    to: email,
    subject: 'Verify Your Email Address',
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
        <div style="text-align: center; margin-bottom: 30px;">
          <h1 style="color: #8B5CF6; margin: 0;">Care. Connect. Cure.</h1>
        </div>
        
        <div style="background: linear-gradient(135deg, #8B5CF6, #3B82F6); padding: 30px; border-radius: 12px; color: white; text-align: center; margin-bottom: 30px;">
          <h2 style="margin: 0 0 10px 0;">Welcome ${username}!</h2>
          <p style="margin: 0; opacity: 0.9;">Please verify your email to complete your registration</p>
        </div>
        
        <div style="background: #f8f9fa; padding: 30px; border-radius: 12px; text-align: center; margin-bottom: 30px;">
          <p style="color: #666; margin-bottom: 20px;">Your verification code is:</p>
          <div style="background: white; padding: 20px; border-radius: 8px; border: 2px solid #8B5CF6; display: inline-block;">
            <span style="font-size: 32px; font-weight: bold; color: #8B5CF6; letter-spacing: 5px;">${verificationCode}</span>
          </div>
          <p style="color: #666; margin-top: 20px; font-size: 14px;">This code will expire in 10 minutes</p>
        </div>
        
        <div style="text-align: center; color: #666; font-size: 14px;">
          <p>If you didn't request this verification, please ignore this email.</p>
        </div>
      </div>
    `
  };

  await transporter.sendMail(mailOptions);
};


// Send welcome email
export const sendWelcomeEmail = async (email, username) => {
  const transporter = createTransporter();
  
  const mailOptions = {
    from: `"Healthcare App" <${process.env.EMAIL_USER}>`,
    to: email,
    subject: 'Welcome to Healthcare App!',
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
        <div style="text-align: center; margin-bottom: 30px;">
          <h1 style="color: #8B5CF6; margin: 0;">Care. Connect. Cure.</h1>
        </div>
        
        <div style="background: linear-gradient(135deg, #8B5CF6, #3B82F6); padding: 30px; border-radius: 12px; color: white; text-align: center; margin-bottom: 30px;">
          <h2 style="margin: 0 0 10px 0;">Welcome aboard, ${username}! 🎉</h2>
          <p style="margin: 0; opacity: 0.9;">Your healthcare journey starts now</p>
        </div>
        
        <div style="padding: 30px 0;">
          <h3 style="color: #333; margin-bottom: 20px;">What's next?</h3>
          <ul style="color: #666; line-height: 1.6;">
            <li>Complete your profile setup</li>
            <li>Book your first appointment</li>
            <li>Connect with healthcare providers</li>
            <li>Access your medical records</li>
          </ul>
        </div>
        
        <div style="text-align: center; color: #666; font-size: 14px; margin-top: 30px;">
          <p>Questions? We're here to help!</p>
        </div>
      </div>
    `
  };

  await transporter.sendMail(mailOptions)}