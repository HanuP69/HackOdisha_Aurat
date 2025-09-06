import React from "react"

function PrivacyPolicy() {
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-teal-50 py-16 px-6">
      {/* Container */}
      <div className="max-w-4xl mx-auto bg-white/80 backdrop-blur-md p-10 rounded-2xl shadow-xl border border-indigo-200">
        {/* Title */}
        <h1 className="text-4xl font-extrabold text-center mb-8 bg-gradient-to-r from-indigo-600 via-purple-600 to-teal-600 bg-clip-text text-transparent drop-shadow-lg">
          Privacy Policy
        </h1>
        <p className="text-gray-700 text-center mb-12">
          Your privacy is important to us at <span className="font-semibold text-purple-700">Doc-AI</span>.  
          This policy explains how we collect, use, and protect your personal information.
        </p>

        {/* Sections */}
        <div className="space-y-10 text-gray-800 leading-relaxed">
          <section>
            <h2 className="text-2xl font-bold text-indigo-700 mb-3">1. Information We Collect</h2>
            <p>
              We may collect personal information such as your name, email address, contact details, and medical-related queries
              that you voluntarily provide when using our platform. Additionally, we may collect technical data like IP address,
              browser type, and usage statistics through cookies.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-purple-700 mb-3">2. How We Use Your Information</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>To provide and improve our AI healthcare services</li>
              <li>To personalize your user experience</li>
              <li>To send important updates, notifications, and security alerts</li>
              <li>To comply with legal obligations</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-teal-700 mb-3">3. Data Security</h2>
            <p>
              We implement advanced security measures to protect your information. However, please note that no method of data
              transmission over the Internet is 100% secure, and we cannot guarantee absolute security.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-indigo-700 mb-3">4. Your Rights</h2>
            <p>
              You have the right to access, update, or delete your personal information. You may also opt out of receiving
              marketing communications. To exercise these rights, please contact us at{" "}
              <span className="font-medium text-purple-700">privacy@doc-ai.com</span>.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-purple-700 mb-3">5. Third-Party Services</h2>
            <p>
              Our platform may include links to third-party websites and services. We are not responsible for the privacy
              practices or content of these third-party services.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-teal-700 mb-3">6. Changes to This Policy</h2>
            <p>
              We may update this Privacy Policy from time to time. Changes will be posted on this page with an updated revision
              date. Please review it periodically to stay informed about how we protect your data.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-indigo-700 mb-3">7. Contact Us</h2>
            <p>
              If you have any questions about this Privacy Policy or our data practices, you can contact us at:
            </p>
            <ul className="mt-3 space-y-2">
              <li>Email: <span className="text-purple-700 font-medium">privacy@doc-ai.com</span></li>
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

export default PrivacyPolicy