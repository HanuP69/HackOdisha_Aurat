import React, { useState } from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom"

export default function SignupPage({ setAuthStatus, setUser }) {
  const [username, setUsername] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const [gender, setGender] = useState("")
  const [verificationCode, setVerificationCode] = useState("")
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const [agreeTerms, setAgreeTerms] = useState(false)

  const [emailSent, setEmailSent] = useState(false)
  const [emailVerified, setEmailVerified] = useState(false)
  const [isVerifying, setIsVerifying] = useState(false)
  const [isSendingEmail, setIsSendingEmail] = useState(false)
  const [isSigningUp, setIsSigningUp] = useState(false)

  const navigate = useNavigate()

  // Step 1: Send verification email
  const sendVerificationEmail = async () => {
    if (!username || !email || !gender) {
      alert("Please fill in username, email, and gender first!")
      return
    }
    setIsSendingEmail(true)
    try {
      await axios.post("http://localhost:5000/api/auth/send-verification", {
        username,
        email,
        gender,
      })
      setEmailSent(true)
      alert("Verification code sent to your email!")
    } catch (err) {
      console.error(err)
      alert(err.response?.data?.message || "Failed to send verification email")
    }
    setIsSendingEmail(false)
  }

  // Step 2: Verify email with code
  const verifyEmail = async () => {
    if (!verificationCode) {
      alert("Please enter the verification code!")
      return
    }
    setIsVerifying(true)
    try {
      await axios.post("http://localhost:5000/api/auth/verify-email", {
        email,
        code: verificationCode,
      })
      setEmailVerified(true)
      alert("Email verified successfully! You can now set your password.")
    } catch (err) {
      console.error(err)
      alert(err.response?.data?.message || "Invalid verification code")
    }
    setIsVerifying(false)
  }

  // Step 3: Complete signup
  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!emailVerified) {
      alert("Please verify your email first!")
      return
    }
    if (password !== confirmPassword) {
      alert("Passwords do not match!")
      return
    }
    if (!agreeTerms) {
      alert("You must agree to the Terms & Conditions.")
      return
    }
    setIsSigningUp(true)
    try {
      const res = await axios.post("http://localhost:5000/api/auth/signup", {
        username,
        email,
        password,
        gender,
      })
      const { token, user } = res.data
      localStorage.setItem("token", token)
      setAuthStatus(true)
      setUser(user)
      alert("Account created successfully!")
      navigate("/")
    } catch (err) {
      console.error(err)
      alert(err.response?.data?.message || "Signup failed")
    }
    setIsSigningUp(false)
  }

  return (
    <div className="min-h-screen flex items-center bg-cover bg-center bg-no-repeat justify-center p-4 bg-gradient-to-br from-purple-50 via-blue-50 to-white" style={{ backgroundImage: "url('/images/auth-bg.png')" }}>
      <div className="w-full max-w-md bg-white bg-opacity-80 backdrop-blur-sm rounded-2xl shadow-xl border border-white border-opacity-20 p-8 relative">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
            Care. Connect. Cure.
          </h1>
          <p className="text-gray-600 text-sm">Create your healthcare account</p>
        </div>

        <div className="space-y-5">
          {/* Username */}
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            disabled={emailSent}
            placeholder="Choose a username"
            className={`block w-full px-3 py-3 border rounded-lg ${
              emailSent ? "opacity-50 cursor-not-allowed" : ""
            }`}
          />

          {/* Email */}
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            disabled={emailSent}
            placeholder="Enter your email"
            className={`block w-full px-3 py-3 border rounded-lg ${
              emailSent ? "opacity-50 cursor-not-allowed" : ""
            }`}
          />

          {/* Gender */}
          <select
            value={gender}
            onChange={(e) => setGender(e.target.value)}
            disabled={emailSent}
            className={`block w-full px-3 py-3 border rounded-lg ${
              emailSent ? "opacity-50 cursor-not-allowed" : ""
            }`}
          >
            <option value="">Select your gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>

          {/* Step 1 button */}
          {!emailSent && (
            <button
              onClick={sendVerificationEmail}
              disabled={isSendingEmail}
              className="w-full bg-gradient-to-r from-blue-500 to-purple-500 text-white py-3 rounded-lg"
            >
              {isSendingEmail ? "Sending..." : "Send Verification Email"}
            </button>
          )}

          {/* Step 2: Verify code */}
          {emailSent && !emailVerified && (
            <div className="space-y-3">
              <input
                type="text"
                value={verificationCode}
                onChange={(e) => setVerificationCode(e.target.value)}
                placeholder="Enter verification code"
                maxLength="6"
                className="block w-full px-3 py-3 border rounded-lg text-center"
              />
              <div className="flex gap-2">
                <button
                  onClick={verifyEmail}
                  disabled={isVerifying}
                  className="flex-1 bg-green-500 text-white py-3 rounded-lg"
                >
                  {isVerifying ? "Verifying..." : "Verify"}
                </button>
                <button
                  onClick={sendVerificationEmail}
                  disabled={isSendingEmail}
                  className="flex-1 bg-gray-500 text-white py-3 rounded-lg"
                >
                  {isSendingEmail ? "Sending..." : "Resend"}
                </button>
              </div>
            </div>
          )}

          {/* Step 3: Passwords */}
          {emailVerified && (
            <>
              <input
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Create a password"
                className="block w-full px-3 py-3 border rounded-lg"
              />
              <input
                type={showConfirmPassword ? "text" : "password"}
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                placeholder="Confirm password"
                className="block w-full px-3 py-3 border rounded-lg"
              />
              <label className="flex items-center gap-2 text-sm">
                <input
                  type="checkbox"
                  checked={agreeTerms}
                  onChange={() => setAgreeTerms(!agreeTerms)}
                />
                I agree to the Terms & Conditions
              </label>
              <button
                onClick={handleSubmit}
                disabled={isSigningUp}
                className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white py-3 rounded-lg"
              >
                {isSigningUp ? "Signing Up..." : "Sign Up"}
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  )
}