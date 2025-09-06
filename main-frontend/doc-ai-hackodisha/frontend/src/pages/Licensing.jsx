import React from "react"

function Licensing() {
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-sky-50 py-16 px-6">
      {/* Container */}
      <div className="max-w-4xl mx-auto bg-white/80 backdrop-blur-md p-10 rounded-2xl shadow-xl border border-indigo-200">
        {/* Title */}
        <h1 className="text-4xl font-extrabold text-center mb-8 bg-gradient-to-r from-indigo-600 via-purple-600 to-sky-600 bg-clip-text text-transparent drop-shadow-lg">
          Licensing
        </h1>
        <p className="text-gray-700 text-center mb-12">
          The following terms apply to the use of{" "}
          <span className="font-semibold text-indigo-700">Doc-AI</span> software, content, and
          intellectual property.
        </p>

        {/* Sections */}
        <div className="space-y-10 text-gray-800 leading-relaxed">
          <section>
            <h2 className="text-2xl font-bold text-indigo-700 mb-3">1. Open-Source Components</h2>
            <p>
              Doc-AI uses various open-source frameworks, libraries, and tools under their respective
              licenses (MIT, Apache 2.0, GPL, etc.). Each open-source component remains licensed
              under its original terms.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-purple-700 mb-3">2. Proprietary Rights</h2>
            <p>
              Unless otherwise stated, all original code, design, branding, and content created by{" "}
              <span className="font-medium">Doc-AI</span> are proprietary and protected under
              copyright law. Unauthorized copying, resale, or distribution is strictly prohibited.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-sky-700 mb-3">3. Permitted Use</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Use the software for personal, research, or educational purposes.</li>
              <li>Integrate Doc-AI APIs into applications with proper attribution.</li>
              <li>Modify open-source components under their respective licenses.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-indigo-700 mb-3">4. Restricted Use</h2>
            <p>The following are not permitted:</p>
            <ul className="list-disc pl-6 space-y-2 mt-2">
              <li>Commercial resale or redistribution without a valid license.</li>
              <li>Removing copyright notices or license headers.</li>
              <li>Using the software for unlawful, harmful, or malicious purposes.</li>
              <li>Reverse-engineering proprietary algorithms or AI models.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-purple-700 mb-3">5. API & Data Licensing</h2>
            <p>
              The <span className="font-medium">Doc-AI API</span> may be used under a{" "}
              <span className="font-medium">fair usage policy</span>. Excessive or abusive use may
              result in suspension. Data returned by the API is licensed only for end-user
              applications and may not be resold.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-sky-700 mb-3">6. Attribution</h2>
            <p>
              Proper credit must be given when using Doc-AI outputs in publications, research, or
              third-party applications. Suggested attribution:{" "}
              <span className="italic">"Powered by Doc-AI"</span>.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-indigo-700 mb-3">7. License Termination</h2>
            <p>
              Violation of these terms may result in immediate termination of your license and access
              to Doc-AI services, without refund or liability.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-purple-700 mb-3">8. Contact</h2>
            <p>
              For licensing inquiries, please contact us:
            </p>
            <ul className="mt-3 space-y-2">
              <li>Email: <span className="text-indigo-700 font-medium">licensing@doc-ai.com</span></li>
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

export default Licensing