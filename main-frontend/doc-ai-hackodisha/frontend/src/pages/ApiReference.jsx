import React from "react"
import { HiSparkles } from "react-icons/hi"
import { Copy } from "lucide-react"

function ApiReference() {
  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text)
    alert("Copied to clipboard ✅")
  }

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-purple-50 via-indigo-50 to-teal-50 text-gray-900 overflow-hidden">
      {/* Background layers */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-100/40 via-indigo-100/30 to-teal-100/40 animate-pulse"></div>

      {/* Floating sparkles */}
      <div className="absolute inset-0 opacity-20">
        <HiSparkles className="absolute top-12 left-16 text-purple-400 animate-bounce" size={20} />
        <HiSparkles className="absolute top-24 right-24 text-indigo-400 animate-pulse delay-300" size={16} />
        <HiSparkles className="absolute bottom-24 left-1/3 text-teal-400 animate-ping delay-700" size={18} />
      </div>

      {/* Floating orbs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-20 w-32 h-32 bg-gradient-to-br from-purple-200 to-indigo-200 rounded-full blur-3xl opacity-30 animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-40 h-40 bg-gradient-to-br from-indigo-200 to-teal-200 rounded-full blur-3xl opacity-25 animate-pulse delay-500"></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-extrabold bg-gradient-to-r from-purple-600 via-indigo-600 to-teal-600 bg-clip-text text-transparent drop-shadow-lg">
            API Reference
          </h1>
          <p className="mt-4 text-lg text-gray-700 font-medium">
            Full details on how to integrate with the <span className="font-semibold">Doc-AI API</span>.
          </p>
        </div>

        {/* Authentication Section */}
        <section className="mb-16 bg-white/70 backdrop-blur-sm rounded-2xl shadow-lg p-8 border border-purple-200 hover:shadow-xl transition-all duration-300">
          <h2 className="text-2xl font-bold text-purple-700 mb-4">Authentication</h2>
          <p className="mb-4 text-gray-700">
            All requests to the Doc-AI API require an API key. You can generate an API key in your dashboard.
          </p>
          <pre className="bg-gray-900 text-green-400 rounded-lg p-4 relative overflow-x-auto text-sm">
            <code>{`Authorization: Bearer <YOUR_API_KEY>`}</code>
            <button
              onClick={() => copyToClipboard("Authorization: Bearer <YOUR_API_KEY>")}
              className="absolute top-2 right-2 text-gray-400 hover:text-white"
            >
              <Copy size={16} />
            </button>
          </pre>
        </section>

        {/* Analyze Endpoint */}
        <section className="mb-16 bg-white/70 backdrop-blur-sm rounded-2xl shadow-lg p-8 border border-indigo-200 hover:shadow-xl transition-all duration-300">
          <h2 className="text-2xl font-bold text-indigo-700 mb-4">POST /v1/analyze</h2>
          <p className="mb-4 text-gray-700">
            Submit patient symptoms or medical questions to get AI-powered analysis.
          </p>

          <h3 className="text-lg font-semibold text-gray-800 mb-2">Request</h3>
          <pre className="bg-gray-900 text-green-400 rounded-lg p-4 relative overflow-x-auto text-sm">
{`POST https://api.doc-ai.com/v1/analyze
Headers: {
  "Authorization": "Bearer <API_KEY>",
  "Content-Type": "application/json"
}
Body: {
  "input": "Patient reports headache and fever for 2 days"
}`}
            <button
              onClick={() =>
                copyToClipboard(`POST https://api.doc-ai.com/v1/analyze
Headers: {
  "Authorization": "Bearer <API_KEY>",
  "Content-Type": "application/json"
}
Body: {
  "input": "Patient reports headache and fever for 2 days"
}`)
              }
              className="absolute top-2 right-2 text-gray-400 hover:text-white"
            >
              <Copy size={16} />
            </button>
          </pre>

          <h3 className="text-lg font-semibold text-gray-800 mt-6 mb-2">Response</h3>
          <pre className="bg-gray-900 text-blue-300 rounded-lg p-4 overflow-x-auto text-sm">
{`{
  "id": "res_12345",
  "status": "success",
  "analysis": {
    "condition": "Migraine (likely)",
    "recommendation": "Rest, hydration, consult physician if persists"
  },
  "confidence": 0.87
}`}
          </pre>
        </section>

        {/* Symptoms Suggestion Endpoint */}
        <section className="mb-16 bg-white/70 backdrop-blur-sm rounded-2xl shadow-lg p-8 border border-teal-200 hover:shadow-xl transition-all duration-300">
          <h2 className="text-2xl font-bold text-teal-700 mb-4">GET /v1/suggestions</h2>
          <p className="mb-4 text-gray-700">
            Get a list of common medical symptoms or conditions supported by Doc-AI.
          </p>

          <h3 className="text-lg font-semibold text-gray-800 mb-2">Request</h3>
          <pre className="bg-gray-900 text-green-400 rounded-lg p-4 relative overflow-x-auto text-sm">
{`GET https://api.doc-ai.com/v1/suggestions
Headers: {
  "Authorization": "Bearer <API_KEY>"
}`}
            <button
              onClick={() =>
                copyToClipboard(`GET https://api.doc-ai.com/v1/suggestions
Headers: {
  "Authorization": "Bearer <API_KEY>"
}`)
              }
              className="absolute top-2 right-2 text-gray-400 hover:text-white"
            >
              <Copy size={16} />
            </button>
          </pre>

          <h3 className="text-lg font-semibold text-gray-800 mt-6 mb-2">Response</h3>
          <pre className="bg-gray-900 text-blue-300 rounded-lg p-4 overflow-x-auto text-sm">
{`{
  "symptoms": [
    "Headache",
    "Fever",
    "Cough",
    "Fatigue",
    "Shortness of breath"
  ]
}`}
          </pre>
        </section>
      </div>
    </div>
  )
}

export default ApiReference