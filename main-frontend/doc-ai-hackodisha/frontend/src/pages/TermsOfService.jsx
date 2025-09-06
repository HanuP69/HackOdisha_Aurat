import React from "react"

function TermsOfService() {
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-teal-50 py-16 px-6">
      {/* Container */}
      <div className="max-w-4xl mx-auto bg-white/80 backdrop-blur-md p-10 rounded-2xl shadow-xl border border-indigo-200">
        {/* Title */}
        <h1 className="text-4xl font-extrabold text-center mb-8 bg-gradient-to-r from-indigo-600 via-purple-600 to-teal-600 bg-clip-text text-transparent drop-shadow-lg">
          Terms of Service
        </h1>
        <p className="text-gray-700 text-center mb-12">
          Welcome to <span className="font-semibold text-purple-700">Doc-AI</span>.  
          By accessing or using our services, you agree to comply with these Terms of Service.  
          Please read them carefully.
        </p>

        {/* Sections */}
        <div className="space-y-10 text-gray-800 leading-relaxed">
          <section>
            <h2 className="text-2xl font-bold text-indigo-700 mb-3">1. Acceptance of Terms</h2>
            <p>
              By using our platform, you agree to these Terms of Service and our Privacy Policy.  
              If you do not agree, you must not use our services.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-purple-700 mb-3">2. Use of Services</h2>
            <p>
              Doc-AI provides AI-powered healthcare support and related tools.  
              Our services are intended for informational purposes only and should not replace professional medical advice.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-teal-700 mb-3">3. User Responsibilities</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Provide accurate and truthful information when using our platform</li>
              <li>Maintain the confidentiality of your account credentials</li>
              <li>Comply with all applicable laws and regulations</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-indigo-700 mb-3">4. Prohibited Activities</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Using the platform for unlawful purposes</li>
              <li>Attempting to hack, disrupt, or damage the system</li>
              <li>Sharing false, harmful, or misleading information</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-purple-700 mb-3">5. Disclaimer of Warranties</h2>
            <p>
              Our services are provided "as is" without warranties of any kind.  
              Doc-AI does not guarantee accuracy, reliability, or completeness of the information provided.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-teal-700 mb-3">6. Limitation of Liability</h2>
            <p>
              Doc-AI shall not be held liable for any direct, indirect, incidental, or consequential damages  
              arising from the use of our services. Always consult a qualified healthcare professional  
              for medical advice.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-indigo-700 mb-3">7. Termination</h2>
            <p>
              We reserve the right to suspend or terminate accounts that violate these Terms or misuse our platform.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-purple-700 mb-3">8. Governing Law</h2>
            <p>
              These Terms shall be governed by and interpreted in accordance with the laws of India.  
              Any disputes will be subject to the jurisdiction of the courts in Bengaluru, India.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-teal-700 mb-3">9. Contact Us</h2>
            <p>
              For questions regarding these Terms of Service, contact us at:
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

export default TermsOfService