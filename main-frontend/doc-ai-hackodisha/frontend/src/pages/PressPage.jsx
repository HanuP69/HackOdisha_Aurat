import React from 'react';
import { HiSparkles, HiExternalLink } from 'react-icons/hi';

const pressMentions = [
  {
    title: 'DOC-AI Featured in Forbes',
    description: 'Forbes explores how DOC-AI is revolutionizing diagnostics using cutting-edge artificial intelligence.',
    link: 'https://forbes.com',
    date: 'August 2025',
    outlet: 'Forbes',
  },
  {
    title: 'TechCrunch Interviews Our CEO',
    description: 'Our CEO shares insights on AI, healthcare, and DOC-AI’s future impact in this TechCrunch exclusive.',
    link: 'https://techcrunch.com',
    date: 'July 2025',
    outlet: 'TechCrunch',
  },
  {
    title: 'Harvard Health Review Highlights DOC-AI',
    description: 'Harvard Health Review praises DOC-AI for improving patient accessibility through AI-driven tools.',
    link: 'https://health.harvard.edu',
    date: 'June 2025',
    outlet: 'Harvard Health Review',
  },
];

const PressPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-indigo-50 to-teal-50 relative overflow-hidden">
      {/* Background Sparkles */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <HiSparkles className="absolute top-16 left-16 text-purple-400 animate-bounce" size={20} />
        <HiSparkles className="absolute top-40 right-28 text-teal-400 animate-pulse delay-300" size={16} />
        <HiSparkles className="absolute bottom-36 left-1/3 text-indigo-400 animate-ping delay-700" size={18} />
        <HiSparkles className="absolute bottom-56 right-1/4 text-purple-300 animate-pulse delay-500" size={14} />
      </div>

      {/* Floating Orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-28 left-28 w-48 h-48 bg-gradient-to-br from-purple-200 to-indigo-200 rounded-full blur-3xl opacity-30 animate-pulse"></div>
        <div className="absolute bottom-28 right-28 w-56 h-56 bg-gradient-to-br from-indigo-200 to-teal-200 rounded-full blur-3xl opacity-25 animate-pulse delay-500"></div>
        <div className="absolute top-2/3 left-1/3 w-32 h-32 bg-gradient-to-br from-teal-200 to-purple-200 rounded-full blur-3xl opacity-20 animate-pulse delay-1000"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-24">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-6xl md:text-7xl font-extrabold mb-6 text-transparent bg-gradient-to-r from-purple-600 via-indigo-600 to-teal-600 bg-clip-text drop-shadow-lg">
            In the Press
          </h1>
          <p className="text-xl text-purple-700 max-w-2xl mx-auto">
            See what the media is saying about DOC-AI and how we're transforming digital healthcare.
          </p>
        </div>

        {/* Press Mentions */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 justify-items-center">
          {pressMentions.map((item, index) => (
            <a
              key={index}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group w-full max-w-md transition-transform transform hover:scale-105"
            >
              <div className="relative bg-purple-50 rounded-2xl p-8 border-2 border-transparent hover:border-purple-600 hover:bg-white transition-all duration-500 hover:shadow-2xl hover:shadow-purple-300/50 overflow-hidden h-full">
                {/* Hover Background */}
                <div className="absolute inset-0 bg-gradient-to-br from-purple-100 via-indigo-50 to-teal-100 opacity-0 group-hover:opacity-30 transition-all duration-700"></div>
                <div className="absolute top-0 left-0 w-0 h-1 bg-gradient-to-r from-purple-400 to-teal-400 group-hover:w-full transition-all duration-500"></div>

                {/* Card Content */}
                <div className="relative z-10">
                  <p className="text-sm text-teal-600 uppercase font-semibold mb-2">{item.outlet}</p>
                  <h3 className="text-2xl font-bold text-purple-800 mb-3 group-hover:text-purple-900 transition-colors duration-300">{item.title}</h3>
                  <p className="text-purple-700 mb-4">{item.description}</p>
                  <div className="flex items-center text-indigo-600 font-semibold gap-2 group-hover:underline">
                    <span>Read More</span>
                    <HiExternalLink />
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-24 text-center">
          <div className="relative bg-purple-50 rounded-2xl p-12 border-2 border-transparent hover:border-purple-600 hover:bg-white transition-all duration-500 hover:shadow-2xl hover:shadow-purple-300/50 group overflow-hidden max-w-3xl mx-auto">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-100 via-indigo-50 to-teal-100 opacity-0 group-hover:opacity-30 transition-all duration-700"></div>
            <div className="absolute top-0 left-0 w-0 h-2 bg-gradient-to-r from-purple-400 to-teal-400 group-hover:w-full transition-all duration-700"></div>

            <h2 className="text-4xl font-bold text-purple-800 mb-4 group-hover:scale-105 transition-all duration-300">
              Press Inquiries
            </h2>
            <p className="text-lg text-purple-700 mb-6 group-hover:text-purple-800 transition-all duration-300">
              For media kits, interviews, or speaking engagements, please contact our PR team.
            </p>
            <a
              href="mailto:press@doc-ai.com"
              className="px-6 py-3 bg-gradient-to-r from-purple-600 to-teal-600 text-white font-semibold rounded-xl shadow-lg hover:scale-105 transition-all duration-300"
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PressPage;