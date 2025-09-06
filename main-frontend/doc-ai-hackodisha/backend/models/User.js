import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  username: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String }, // only for manual users
  googleId: { type: String }, // only for Google auth
  avatar: { type: String, default: "" },
  gender: { 
    type: String, 
    enum: ['male', 'female', 'other'],
    required: function() {
      return !this.googleId; // Required for manual signup only
    }
  },
  
  // Email verification fields
  emailVerified: { type: Boolean, default: false },
  verificationCode: { type: String },
  verificationCodeExpires: { type: Date },
  
  // Timestamps
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now }
});

// Generate verification code
userSchema.methods.generateVerificationCode = function() {
  const code = Math.floor(100000 + Math.random() * 900000).toString();
  this.verificationCode = code;
  this.verificationCodeExpires = new Date(Date.now() + 10 * 60 * 1000); // 10 minutes
  return code;
};

// Check if verification code is valid
userSchema.methods.isVerificationCodeValid = function(code) {
  return this.verificationCode === code && 
         this.verificationCodeExpires && 
         this.verificationCodeExpires > new Date();
};

export default mongoose.model("User", userSchema);