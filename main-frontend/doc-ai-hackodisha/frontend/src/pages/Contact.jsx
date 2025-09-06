import React from "react"
import { FaDiscord, FaTwitter, FaGithub } from "react-icons/fa"
import { HiSparkles } from "react-icons/hi"
import { MdForum } from "react-icons/md"

function Community() {
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-teal-50 text-gray-900 overflow-hidden">
      {/* Background layers */}
      <div className="absolute inset-0 bg-gradient-to-r from-indigo-100/40 via-purple-100/30 to-teal-100/40 animate-pulse"></div>

      {/* Floating sparkles */}
      <div className="absolute inset-0 opacity-20">
        <HiSparkles className="absolute top-16 left-20 text-purple-400 animate-bounce" size={20} />
        <HiSparkles className="absolute top-32 right-32 text-indigo-400 animate-pulse delay-300" size={18} />
        <HiSparkles className="absolute bottom-32 left-1/3 text-teal-400 animate-ping delay-700" size={22} />
      </div>

      {/* Floating orbs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-28 left-16 w-32 h-32 bg-gradient-to-br from-purple-200 to-indigo-200 rounded-full blur-3xl opacity-30 animate-pulse"></div>
        <div className="absolute bottom-28 right-24 w-40 h-40 bg-gradient-to-br from-indigo-200 to-teal-200 rounded-full blur-3xl opacity-25 animate-pulse delay-500"></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-16">
        {/* Hero */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-extrabold bg-gradient-to-r from-indigo-600 via-purple-600 to-teal-600 bg-clip-text text-transparent drop-shadow-lg">
            Join the Doc-AI Community
          </h1>
          <p className="mt-4 text-lg text-gray-700 font-medium">
            Connect, share knowledge, and help build the future of healthcare AI.
          </p>
        </div>

        {/* Community Links */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Forum */}
          <div className="bg-white/70 backdrop-blur-sm rounded-2xl shadow-lg p-6 border border-indigo-200 hover:shadow-xl transition-all duration-300 text-center">
            <MdForum className="text-indigo-600 mx-auto mb-4" size={40} />
            <h3 className="text-xl font-semibold text-indigo-700">Forum</h3>
            <p className="text-gray-600 mt-2 mb-4">Ask questions, share solutions, and learn from others.</p>
            <a
              href="#"
              className="inline-block px-4 py-2 rounded-full bg-indigo-600 text-white font-medium hover:bg-indigo-500 transition-colors"
            >
              Visit Forum
            </a>
          </div>

          {/* Discord */}
          <div className="bg-white/70 backdrop-blur-sm rounded-2xl shadow-lg p-6 border border-purple-200 hover:shadow-xl transition-all duration-300 text-center">
            <FaDiscord className="text-purple-600 mx-auto mb-4" size={40} />
            <h3 className="text-xl font-semibold text-purple-700">Discord</h3>
            <p className="text-gray-600 mt-2 mb-4">Chat in real-time with developers and contributors.</p>
            <a
              href="#"
              className="inline-block px-4 py-2 rounded-full bg-purple-600 text-white font-medium hover:bg-purple-500 transition-colors"
            >
              Join Discord
            </a>
          </div>

          {/* GitHub */}
          <div className="bg-white/70 backdrop-blur-sm rounded-2xl shadow-lg p-6 border border-gray-300 hover:shadow-xl transition-all duration-300 text-center">
            <FaGithub className="text-gray-800 mx-auto mb-4" size={40} />
            <h3 className="text-xl font-semibold text-gray-800">GitHub</h3>
            <p className="text-gray-600 mt-2 mb-4">Contribute, report issues, and explore open source code.</p>
            <a
              href="#"
              className="inline-block px-4 py-2 rounded-full bg-gray-800 text-white font-medium hover:bg-gray-700 transition-colors"
            >
              Explore GitHub
            </a>
          </div>

          {/* Twitter / X */}
          <div className="bg-white/70 backdrop-blur-sm rounded-2xl shadow-lg p-6 border border-teal-200 hover:shadow-xl transition-all duration-300 text-center">
            <FaTwitter className="text-teal-500 mx-auto mb-4" size={40} />
            <h3 className="text-xl font-semibold text-teal-700">Twitter / X</h3>
            <p className="text-gray-600 mt-2 mb-4">Follow updates, product releases, and announcements.</p>
            <a
              href="#"
              className="inline-block px-4 py-2 rounded-full bg-teal-600 text-white font-medium hover:bg-teal-500 transition-colors"
            >
              Follow Us
            </a>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mt-20 bg-white/70 backdrop-blur-sm rounded-2xl shadow-lg p-8 border border-indigo-200">
          <h2 className="text-3xl font-bold text-indigo-700 mb-6 text-center">Frequently Asked Questions</h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-800">Is Doc-AI free to use?</h3>
              <p className="text-gray-600">We offer a free tier with limited requests and premium plans for advanced usage.</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-800">How do I contribute to Doc-AI?</h3>
              <p className="text-gray-600">Join our GitHub repo and check the <code>CONTRIBUTING.md</code> guide for details.</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-800">Where can I get quick help?</h3>
              <p className="text-gray-600">Our Discord server and forum are the best places to get help from the community.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Community