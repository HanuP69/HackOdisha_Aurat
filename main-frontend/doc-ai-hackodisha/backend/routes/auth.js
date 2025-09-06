// =============================================
// UPDATED routes/auth.js
// =============================================
import express from "express";
import { 
  signup, 
  login, 
  googleLogin, 
  sendVerification, 
  verifyEmail, 
  resendVerification 
} from "../controllers/authController.js";

const router = express.Router();

// Email verification routes
router.post("/send-verification", sendVerification);
router.post("/verify-email", verifyEmail);
router.post("/resend-verification", resendVerification);

// Auth routes (existing)
router.post("/signup", signup);
router.post("/login", login);
router.post("/google-login", googleLogin);

export default router;