import React from 'react';
import { HiSparkles } from 'react-icons/hi';
import { FaLaptopCode } from 'react-icons/fa';

const CareersPage = () => {
  const roles = [
    {
      title: 'Front‑End Engineer',
      type: 'Full-time',
      icon: FaLaptopCode,
      location: 'Remote / India',
      description: 'Build responsive UI components for patient dashboards and features.',
    },
    {
      title: 'Machine Learning Engineer',
      type: 'Full-time',
      icon: FaLaptopCode,
      location: 'Remote / Global',
      description: 'Develop AI models to enhance diagnostic accuracy and patient outcomes.',
    },
    {
      title: 'Product Designer',
      type: 'Contract',
      icon: FaLaptopCode,
      location: 'Remote / India',
      description: 'Design intuitive interfaces and visual assets across the platform.',
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-indigo-50 to-teal-50 relative overflow-hidden">
      {/* Animated Background Sparkles */}
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

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-6xl md:text-7xl font-extrabold mb-6 text-transparent bg-gradient-to-r from-purple-600 via-indigo-600 to-teal-600 bg-clip-text drop-shadow-lg">
            Join Our Team
          </h1>
          <p className="text-xl text-purple-700 max-w-2xl mx-auto">
            Empower a global community with innovative AI-powered healthcare solutions.
          </p>
        </div>

        {/* Roles Listings */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
          {roles.map((role, index) => (
            <div key={index} className="group w-full max-w-md">
              <div className="relative bg-purple-50 rounded-2xl p-8 border-2 border-transparent hover:border-purple-600 hover:bg-white transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-purple-300/50 overflow-hidden">
                {/* Background effects */}
                <div className="absolute inset-0 bg-gradient-to-br from-purple-100 via-indigo-50 to-teal-100 opacity-0 group-hover:opacity-30 transition-all duration-700"></div>
                <div className="absolute top-0 left-0 w-0 h-1 bg-gradient-to-r from-purple-400 to-teal-400 group-hover:w-full transition-all duration-500"></div>

                {/* Content */}
                <div className="relative z-10 text-center">
                  <role.icon className="mx-auto mb-4 text-5xl text-purple-600 group-hover:text-purple-800 group-hover:scale-125 transition-all duration-300" />
                  <h3 className="text-2xl font-bold text-purple-800 mb-2">{role.title}</h3>
                  <p className="text-purple-600 mb-1">{role.type} • {role.location}</p>
                  <p className="text-purple-700 mb-4">{role.description}</p>
                  <button className="mt-4 px-5 py-2 bg-gradient-to-r from-purple-600 to-teal-600 text-white font-semibold rounded-xl hover:scale-105 transition-all duration-300">
                    Apply Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action Footer */}
        <div className="mt-20 text-center">
          <div className="relative bg-purple-50 rounded-2xl p-12 border-2 border-transparent hover:border-purple-600 hover:bg-white transition-all duration-500 hover:shadow-2xl hover:shadow-purple-300/50 group overflow-hidden max-w-3xl mx-auto">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-100 via-indigo-50 to-teal-100 opacity-0 group-hover:opacity-30 transition-all duration-700"></div>
            <div className="absolute top-0 left-0 w-0 h-2 bg-gradient-to-r from-purple-400 to-teal-400 group-hover:w-full transition-all duration-700"></div>
            <h2 className="text-4xl font-bold text-purple-800 mb-4 group-hover:scale-105 transition-all duration-300">
              Can’t find a role that fits?
            </h2>
            <p className="text-lg text-purple-700 mb-6 group-hover:text-purple-800 transition-all duration-300">
              Send your resume and we'll reach out when a match arises.
            </p>
            <button className="px-6 py-3 bg-gradient-to-r from-purple-600 to-teal-600 text-white font-semibold rounded-xl shadow-lg hover:scale-105 transition-all duration-300">
              Send Resume
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CareersPage;