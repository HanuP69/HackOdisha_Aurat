import React, { useState } from "react"
import { HiSparkles } from "react-icons/hi"
import { ChevronDown } from "lucide-react"

function HelpCenter() {
  const [openIndex, setOpenIndex] = useState(null)

  const faqs = [
    {
      q: "How do I reset my password?",
      a: "Go to the login page, click 'Forgot Password', and follow the instructions sent to your email."
    },
    {
      q: "How do I contact support?",
      a: "You can reach our support team via the 'Contact Support' button below or email us at support@doc-ai.com."
    },
    {
      q: "Is my data secure?",
      a: "Yes. We use encryption and strict security practices to keep your data safe."
    }
  ]

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-purple-50 via-indigo-50 to-teal-50 text-gray-900 overflow-hidden">
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-100/40 via-indigo-100/30 to-teal-100/40 animate-pulse"></div>

      {/* Floating sparkles */}
      <div className="absolute inset-0 opacity-20">
        <HiSparkles className="absolute top-10 left-10 text-purple-400 animate-bounce" size={20} />
        <HiSparkles className="absolute top-32 right-20 text-teal-400 animate-pulse delay-300" size={16} />
        <HiSparkles className="absolute bottom-20 left-1/4 text-indigo-400 animate-ping delay-700" size={18} />
        <HiSparkles className="absolute bottom-32 right-1/3 text-purple-300 animate-pulse delay-500" size={14} />
      </div>

      {/* Floating Orbs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-20 w-32 h-32 bg-gradient-to-br from-purple-200 to-indigo-200 rounded-full blur-3xl opacity-30 animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-40 h-40 bg-gradient-to-br from-indigo-200 to-teal-200 rounded-full blur-3xl opacity-25 animate-pulse delay-500"></div>
        <div className="absolute top-1/2 left-1/2 w-24 h-24 bg-gradient-to-br from-teal-200 to-purple-200 rounded-full blur-3xl opacity-20 animate-pulse delay-1000"></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 py-16">
        {/* Hero */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-extrabold bg-gradient-to-r from-purple-600 via-indigo-600 to-teal-600 bg-clip-text text-transparent drop-shadow-lg">
            Help Center
          </h1>
          <p className="mt-4 text-lg text-gray-700 font-medium">
            Find answers to common questions or reach out for support.
          </p>
        </div>

        {/* Search */}
        <div className="mb-12 flex justify-center">
          <input
            type="text"
            placeholder="Search for help..."
            className="w-full md:w-2/3 px-5 py-3 rounded-xl border-2 border-purple-300 shadow-md 
            focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500 
            transition-all duration-300 hover:border-purple-400"
          />
        </div>

        {/* FAQ Section */}
        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white/70 backdrop-blur-sm p-6 rounded-2xl shadow-lg border border-purple-200 
              hover:shadow-xl hover:scale-[1.02] transition-all duration-300"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="flex justify-between items-center w-full text-left"
              >
                <span className="font-semibold text-purple-800">{faq.q}</span>
                <ChevronDown
                  className={`w-5 h-5 text-purple-600 transform transition-transform ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>
              {openIndex === index && (
                <p className="mt-3 text-gray-700">{faq.a}</p>
              )}
            </div>
          ))}
        </div>

        {/* Contact Support */}
        <div className="mt-16 text-center">
          <h2 className="text-2xl font-bold text-purple-700 mb-4">Still need help?</h2>
          <button className="relative px-8 py-3 bg-gradient-to-r from-purple-600 to-teal-600 rounded-lg 
            text-white font-semibold shadow-md hover:shadow-xl transition-all duration-300 
            hover:scale-105 overflow-hidden">
            Contact Support
          </button>
        </div>
      </div>
    </div>
  )
}

export default HelpCenter