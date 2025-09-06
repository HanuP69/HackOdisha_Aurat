import React from "react"

function CookiePolicy() {
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-teal-50 py-16 px-6">
      {/* Container */}
      <div className="max-w-4xl mx-auto bg-white/80 backdrop-blur-md p-10 rounded-2xl shadow-xl border border-indigo-200">
        {/* Title */}
        <h1 className="text-4xl font-extrabold text-center mb-8 bg-gradient-to-r from-indigo-600 via-purple-600 to-teal-600 bg-clip-text text-transparent drop-shadow-lg">
          Cookie Policy
        </h1>
        <p className="text-gray-700 text-center mb-12">
          This Cookie Policy explains how <span className="font-semibold text-purple-700">Doc-AI</span>  
          uses cookies and similar technologies to improve your experience.
        </p>

        {/* Sections */}
        <div className="space-y-10 text-gray-800 leading-relaxed">
          <section>
            <h2 className="text-2xl font-bold text-indigo-700 mb-3">1. What Are Cookies?</h2>
            <p>
              Cookies are small text files stored on your device when you visit a website.  
              They help websites function properly, remember preferences, and enhance user experience.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-purple-700 mb-3">2. How We Use Cookies</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li><span className="font-medium">Essential Cookies:</span> Required for the platform to work properly.</li>
              <li><span className="font-medium">Performance Cookies:</span> Help us understand usage patterns and improve services.</li>
              <li><span className="font-medium">Functional Cookies:</span> Store your preferences for a personalized experience.</li>
              <li><span className="font-medium">Analytics Cookies:</span> Collect anonymous data to analyze and optimize Doc-AI.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-teal-700 mb-3">3. Third-Party Cookies</h2>
            <p>
              We may use trusted third-party services like Google Analytics or authentication providers  
              that place their own cookies to track usage, improve performance, and provide secure login.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-indigo-700 mb-3">4. Managing Cookies</h2>
            <p>
              You can control or disable cookies through your browser settings.  
              However, some features of Doc-AI may not function properly if cookies are disabled.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-purple-700 mb-3">5. Updates to This Policy</h2>
            <p>
              We may update this Cookie Policy from time to time. Any changes will be reflected here with a new "Last Updated" date.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-teal-700 mb-3">6. Contact Us</h2>
            <p>
              If you have questions about this Cookie Policy, contact us at:
            </p>
            <ul className="mt-3 space-y-2">
              <li>Email: <span className="text-purple-700 font-medium">support@doc-ai.com</span></li>
              <li>Phone: <span className="text-purple-700 font-medium">+91 98765 43210</span></li>
              <li>Address: <span className="text-purple-700 font-medium">Bengaluru, India</span></li>
            </ul>
          </section>
        </div>

        {/* Footer Note */}
        <p className="mt-12 text-sm text-gray-500 text-center">
          Last updated: {new Date().toLocaleDateString()}
        </p>
      </div>
    </div>
  )
}

export default CookiePolicy