import React from "react"
import { redirect, useNavigate } from "react-router-dom"
import { HiSparkles, HiChat, HiLogin } from "react-icons/hi"
import { FaRobot, FaStethoscope, FaHeartbeat } from "react-icons/fa"

function Home({ authStatus }) {
  const navigate = useNavigate()

  return (
    <>
     <div className="min-h-screen flex flex-col relative overflow-hidden z-10">
      {/* Background Image Section - Responsive */}
      <div className="flex-1 relative">
        {/* Background with proper responsive handling */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('/images/white and blue minimalist good doctor youtube thumbnail.png')",
            backgroundPosition: "center center",
            backgroundSize: "cover",
          }}
        >
          {/* Overlay for better text readability */}
          <div className="absolute inset-0 bg-gradient-to-b from-white/20 via-transparent to-white/40"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-purple-50/30 via-transparent to-indigo-50/30"></div>
        </div>

        {/* Floating decorative elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-10 left-10 w-16 h-16 bg-gradient-to-br from-purple-200/30 to-indigo-200/30 rounded-full blur-2xl animate-pulse"></div>
          <div className="absolute top-20 right-16 w-20 h-20 bg-gradient-to-br from-teal-200/30 to-purple-200/30 rounded-full blur-3xl animate-pulse delay-500"></div>
          <div className="absolute bottom-20 left-20 w-12 h-12 bg-gradient-to-br from-indigo-200/30 to-teal-200/30 rounded-full blur-2xl animate-pulse delay-1000"></div>
        </div>

        {/* Animated sparkles */}
        <div className="absolute inset-0 opacity-30">
          <HiSparkles className="absolute top-16 left-1/4 text-purple-400 animate-bounce text-lg" />
          <HiSparkles className="absolute top-32 right-1/3 text-teal-400 animate-pulse delay-300 text-sm" />
          <HiSparkles className="absolute bottom-40 left-1/3 text-indigo-400 animate-ping delay-700 text-base" />
          <FaStethoscope className="absolute top-1/4 right-1/4 text-purple-300 animate-pulse delay-500 text-xl" />
          <FaHeartbeat className="absolute bottom-1/3 right-1/3 text-teal-300 animate-bounce delay-1200 text-lg" />
        </div>
      </div>
      </div>

      {/* Separate Action Section */}
      <div className="relative bg-gradient-to-br from-purple-50 via-indigo-50 to-teal-50 border-t-2 border-purple-200 z-10">
        {/* Background pattern */}
        <div className="absolute inset-0 bg-gradient-to-r from-purple-100/20 via-indigo-100/20 to-teal-100/20"></div>
        
        {/* Floating orbs */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-4 left-10 w-24 h-24 bg-gradient-to-br from-purple-200/40 to-indigo-200/40 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute top-2 right-12 w-32 h-32 bg-gradient-to-br from-indigo-200/30 to-teal-200/30 rounded-full blur-3xl animate-pulse delay-700"></div>
        </div>

        <div className="relative z-20 px-6 py-12 flex items-center justify-center min-h-full">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            {/* Title Section */}
            <div className="space-y-4">
              <div className="flex items-center justify-center gap-3 mb-4">
                <FaRobot className="text-4xl text-purple-600 animate-bounce" />
                <h1 className="text-4xl md:text-6xl font-bold text-transparent bg-gradient-to-r from-purple-600 via-indigo-600 to-teal-600 bg-clip-text">
                  DOC-AI
                </h1>
                <FaStethoscope className="text-4xl text-teal-600 animate-pulse" />
              </div>
              
              <p className="text-lg md:text-xl text-purple-800 max-w-2xl mx-auto leading-relaxed">
                Your intelligent healthcare companion powered by advanced AI. 
                Experience personalized medical assistance like never before.
              </p>
              
              {/* Feature highlights */}
              <div className="flex flex-wrap justify-center gap-4 mt-6">
                <span className="px-4 py-2 bg-purple-100 text-purple-700 rounded-full text-sm font-medium border border-purple-200">
                  🩺 AI Diagnosis
                </span>
                <span className="px-4 py-2 bg-indigo-100 text-indigo-700 rounded-full text-sm font-medium border border-indigo-200">
                  💬 24/7 Support
                </span>
                <span className="px-4 py-2 bg-teal-100 text-teal-700 rounded-full text-sm font-medium border border-teal-200">
                  🔒 Secure & Private
                </span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="space-y-4">
              {!authStatus ? (
                <div className="space-y-4">
                  {/* Primary CTA */}
                  <button
                    onClick={() => navigate("/login")}
                    className="group relative inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white font-semibold text-lg rounded-2xl shadow-xl hover:shadow-2xl hover:shadow-purple-500/25 transition-all duration-500 transform hover:scale-105 overflow-hidden"
                  >
                    {/* Animated background */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                    
                    {/* Button content */}
                    <HiLogin className="text-2xl group-hover:rotate-12 transition-transform duration-300" />
                    <span className="relative z-10">Login to Start Conversation</span>
                    
                    {/* Glow effect */}
                    <div className="absolute inset-0 rounded-2xl bg-purple-400 opacity-0 group-hover:opacity-20 group-hover:animate-pulse transition-all duration-300"></div>
                  </button>

                  {/* Secondary info */}
                  <p className="text-sm text-purple-600">
                    New to DOC-AI? 
                    <button 
                      onClick={() => navigate("/signup")}
                      className="ml-2 text-indigo-600 hover:text-indigo-800 font-semibold underline hover:no-underline transition-all duration-300"
                    >
                      Create an account
                    </button>
                  </p>
                </div>
              ) : (
                <div className="space-y-4">
                  {/* Welcome back message */}
                  <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 border-2 border-purple-200 shadow-lg">
                    <h2 className="text-2xl font-bold text-purple-800 mb-2">Welcome Back!</h2>
                    <p className="text-purple-600 mb-4">Ready to continue your healthcare journey?</p>
                    
                    <button
                      onClick={() => window.location.href = "http://localhost:3000"}
                      className="group relative inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white font-semibold text-lg rounded-2xl shadow-xl hover:shadow-2xl hover:shadow-emerald-500/25 transition-all duration-500 transform hover:scale-105 overflow-hidden"
                    >
                      {/* Animated background */}
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                      
                      {/* Button content */}
                      <HiChat className="text-2xl group-hover:scale-125 transition-transform duration-300" />
                      <span className="relative z-10">Start Conversation</span>
                      
                      {/* Glow effect */}
                      <div className="absolute inset-0 rounded-2xl bg-emerald-400 opacity-0 group-hover:opacity-20 group-hover:animate-pulse transition-all duration-300"></div>
                    </button>
                  </div>

                  {/* Quick stats */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
                    <div className="bg-white/60 backdrop-blur-sm rounded-lg p-4 border border-purple-200 text-center">
                      <div className="text-2xl font-bold text-purple-600">24/7</div>
                      <div className="text-sm text-purple-700">Available</div>
                    </div>
                    <div className="bg-white/60 backdrop-blur-sm rounded-lg p-4 border border-indigo-200 text-center">
                      <div className="text-2xl font-bold text-indigo-600">AI-Powered</div>
                      <div className="text-sm text-indigo-700">Diagnosis</div>
                    </div>
                    <div className="bg-white/60 backdrop-blur-sm rounded-lg p-4 border border-teal-200 text-center">
                      <div className="text-2xl font-bold text-teal-600">Secure</div>
                      <div className="text-sm text-teal-700">& Private</div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
    
  )
}

export default Home
