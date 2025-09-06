
import React from "react"

function GDPRCompliance() {
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-sky-50 via-indigo-50 to-purple-50 py-16 px-6">
      {/* Container */}
      <div className="max-w-4xl mx-auto bg-white/80 backdrop-blur-md p-10 rounded-2xl shadow-xl border border-sky-200">
        {/* Title */}
        <h1 className="text-4xl font-extrabold text-center mb-8 bg-gradient-to-r from-sky-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent drop-shadow-lg">
          GDPR Compliance
        </h1>
        <p className="text-gray-700 text-center mb-12">
          At <span className="font-semibold text-indigo-700">Doc-AI</span>, we are committed to protecting your personal data and privacy.  
          This GDPR Compliance Policy explains your rights under the{" "}
          <span className="font-medium">General Data Protection Regulation (GDPR)</span>.
        </p>

        {/* Sections */}
        <div className="space-y-10 text-gray-800 leading-relaxed">
          <section>
            <h2 className="text-2xl font-bold text-sky-700 mb-3">1. Data We Collect</h2>
            <p>
              We may collect personal data such as name, email address, medical queries, and usage data.  
              This information is used only to provide better healthcare assistance and improve our services.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-indigo-700 mb-3">2. Purpose of Processing</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Provide AI-powered healthcare responses.</li>
              <li>Improve accuracy and performance of Doc-AI.</li>
              <li>Ensure secure authentication and prevent fraud.</li>
              <li>Comply with legal obligations.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-purple-700 mb-3">3. Your GDPR Rights</h2>
            <p>You have the following rights under GDPR:</p>
            <ul className="list-disc pl-6 space-y-2 mt-2">
              <li><span className="font-medium">Right to Access:</span> Request a copy of your personal data.</li>
              <li><span className="font-medium">Right to Rectification:</span> Correct inaccurate or incomplete data.</li>
              <li><span className="font-medium">Right to Erasure:</span> Request deletion of your data ("Right to be Forgotten").</li>
              <li><span className="font-medium">Right to Restriction:</span> Limit processing of your personal data.</li>
              <li><span className="font-medium">Right to Data Portability:</span> Request transfer of your data to another provider.</li>
              <li><span className="font-medium">Right to Object:</span> Opt out of processing for specific purposes.</li>
              <li><span className="font-medium">Rights Related to Automated Decision-Making:</span> Request human review of automated decisions.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-teal-700 mb-3">4. Data Retention</h2>
            <p>
              We retain your personal data only as long as necessary to provide services,  
              comply with legal obligations, or resolve disputes. Once no longer needed, data is securely deleted.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-sky-700 mb-3">5. Data Security</h2>
            <p>
              We implement strong technical and organizational measures, including encryption and secure servers,  
              to protect your personal data from unauthorized access, misuse, or loss.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-indigo-700 mb-3">6. International Transfers</h2>
            <p>
              If your data is transferred outside the EU/EEA, we ensure it is protected through standard contractual clauses  
              or other GDPR-approved safeguards.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-purple-700 mb-3">7. Contact Us</h2>
            <p>
              To exercise your GDPR rights or ask questions, please contact us:
            </p>
            <ul className="mt-3 space-y-2">
              <li>Email: <span className="text-indigo-700 font-medium">privacy@doc-ai.com</span></li>
              <li>Phone: <span className="text-indigo-700 font-medium">+91 98765 43210</span></li>
              <li>Address: <span className="text-indigo-700 font-medium">Bengaluru, India</span></li>
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

export default GDPRCompliance