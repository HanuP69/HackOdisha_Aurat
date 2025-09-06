import React from 'react';
import { HiSparkles, HiLightBulb, HiHeart, HiShieldCheck } from 'react-icons/hi';
import { FaStethoscope, FaBrain, FaUsers, FaAward } from 'react-icons/fa';

const AboutPage = () => {
  const stats = [
    { number: '10M+', label: 'Patients Helped', icon: FaUsers },
    { number: '500+', label: 'Healthcare Partners', icon: FaStethoscope },
    { number: '99.9%', label: 'Accuracy Rate', icon: FaAward },
    { number: '24/7', label: 'AI Support', icon: FaBrain }
  ];

  const values = [
    {
      icon: HiHeart,
      title: 'Compassionate Care',
      description: 'We believe healthcare should be delivered with empathy and understanding, putting patients first in everything we do.'
    },
    {
      icon: HiLightBulb,
      title: 'Innovation First',
      description: 'Pushing the boundaries of medical technology to create solutions that were once thought impossible.'
    },
    {
      icon: HiShieldCheck,
      title: 'Trust & Security',
      description: 'Your health data is sacred. We maintain the highest standards of privacy and security in everything we build.'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-indigo-50 to-teal-50 relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-100/40 via-indigo-100/30 to-teal-100/40 animate-pulse"></div>
      
      {/* Enhanced floating sparkles */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <HiSparkles className="absolute top-20 left-20 text-purple-400 animate-bounce" size={20} />
        <HiSparkles className="absolute top-40 right-32 text-teal-400 animate-pulse delay-300" size={16} />
        <HiSparkles className="absolute bottom-40 left-1/4 text-indigo-400 animate-ping delay-700" size={18} />
        <HiSparkles className="absolute bottom-60 right-1/3 text-purple-300 animate-pulse delay-500" size={14} />
        <HiSparkles className="absolute top-1/2 left-1/2 text-teal-300 animate-bounce delay-1000" size={12} />
      </div>

      {/* Floating orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-32 left-32 w-48 h-48 bg-gradient-to-br from-purple-200 to-indigo-200 rounded-full blur-3xl opacity-30 animate-pulse"></div>
        <div className="absolute bottom-32 right-32 w-56 h-56 bg-gradient-to-br from-indigo-200 to-teal-200 rounded-full blur-3xl opacity-25 animate-pulse delay-500"></div>
        <div className="absolute top-2/3 left-1/3 w-32 h-32 bg-gradient-to-br from-teal-200 to-purple-200 rounded-full blur-3xl opacity-20 animate-pulse delay-1000"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-24">
        {/* Hero Section */}
        <div className="text-center mb-20 transform hover:scale-105 transition-all duration-500">
          <h1 className="text-6xl md:text-7xl font-extrabold mb-8 text-transparent bg-gradient-to-r from-purple-600 via-indigo-600 to-teal-600 bg-clip-text drop-shadow-lg">
            About DOC-AI
          </h1>
          <p className="text-2xl text-purple-700 max-w-4xl mx-auto leading-relaxed mb-8 hover:text-purple-800 transition-all duration-300">
            We're revolutionizing healthcare through artificial intelligence, making quality medical care accessible, accurate, and available to everyone, everywhere.
          </p>
          <div className="flex justify-center gap-3 text-lg font-semibold">
            <span className="text-purple-700">Care.</span>
            <span className="text-indigo-700">Connect.</span>
            <span className="text-teal-700">Cure.</span>
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {stats.map((stat, index) => (
            <div key={index} className="group">
              <div className="relative bg-purple-50 rounded-xl p-8 border-2 border-transparent hover:border-purple-600 hover:bg-white transition-all duration-500 hover:scale-110 hover:shadow-2xl hover:shadow-purple-300/50 overflow-hidden">
                {/* Animated background gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-purple-100 via-indigo-50 to-teal-100 opacity-0 group-hover:opacity-30 transition-all duration-700"></div>
                
                {/* Sliding border effect */}
                <div className="absolute top-0 left-0 w-0 h-1 bg-gradient-to-r from-purple-400 to-teal-400 group-hover:w-full transition-all duration-500"></div>
                
                <div className="relative z-10 text-center">
                  <div className="mb-4 flex justify-center">
                    <stat.icon className="text-4xl text-purple-600 group-hover:text-purple-800 group-hover:scale-125 transition-all duration-300" />
                  </div>
                  <div className="text-3xl font-bold text-purple-800 mb-2 group-hover:scale-110 transition-all duration-300">
                    {stat.number}
                  </div>
                  <div className="text-purple-700 font-medium group-hover:text-purple-800 transition-all duration-300">
                    {stat.label}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Our Story Section */}
        <div className="mb-20">
          <div className="relative bg-purple-50 rounded-2xl p-12 border-2 border-transparent hover:border-purple-600 hover:bg-white transition-all duration-500 hover:shadow-2xl hover:shadow-purple-300/50 group overflow-hidden">
            {/* Background effects */}
            <div className="absolute inset-0 bg-gradient-to-br from-purple-100 via-indigo-50 to-teal-100 opacity-0 group-hover:opacity-30 transition-all duration-700"></div>
            <div className="absolute top-0 left-0 w-0 h-2 bg-gradient-to-r from-purple-400 to-teal-400 group-hover:w-full transition-all duration-700"></div>
            
            <div className="relative z-10">
              <h2 className="text-4xl font-bold text-purple-800 mb-8 text-center group-hover:scale-105 transition-all duration-300">
                Our Story
              </h2>
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                  <p className="text-lg text-purple-700 leading-relaxed group-hover:text-purple-800 transition-all duration-300">
                    Initiated in 2025 by a team of CSE 2nd year students, DOC-AI was born from a simple yet powerful vision: democratize healthcare through intelligent technology.
                  </p>
                  <p className="text-lg text-purple-700 leading-relaxed group-hover:text-purple-800 transition-all duration-300">
                    We witnessed firsthand how geographical barriers, cost constraints, and limited specialist availability prevented millions from receiving timely medical care. This drove us to create an AI-powered platform that bridges these gaps.
                  </p>
                  <p className="text-lg text-purple-700 leading-relaxed group-hover:text-purple-800 transition-all duration-300">
                    Today, our platform serves millions of users worldwide, providing accurate medical insights, connecting patients with specialists, and enabling healthcare providers to deliver better care.
                  </p>
                </div>
                <div className="relative group/image">
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-300 to-teal-300 rounded-xl blur-lg opacity-30 group-hover/image:opacity-60 group-hover/image:scale-110 transition-all duration-500"></div>
                  <img 
                    src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=600&h=400&fit=crop" 
                    alt="Healthcare technology"
                    className="relative z-10 w-full h-80 object-cover rounded-xl shadow-lg group-hover/image:scale-105 transition-all duration-500"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Values Section */}
        <div className="mb-20">
          <h2 className="text-4xl font-bold text-purple-800 mb-12 text-center hover:scale-105 transition-all duration-300">
            Our Values
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div key={index} className="group">
                <div className="relative bg-purple-50 rounded-xl p-8 border-2 border-transparent hover:border-purple-600 hover:bg-white transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-purple-300/50 overflow-hidden h-full">
                  {/* Background effects */}
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-100 via-indigo-50 to-teal-100 opacity-0 group-hover:opacity-30 transition-all duration-700"></div>
                  <div className="absolute top-0 left-0 w-0 h-1 bg-gradient-to-r from-purple-400 to-teal-400 group-hover:w-full transition-all duration-500"></div>
                  
                  <div className="relative z-10">
                    <div className="mb-6 flex justify-center">
                      <value.icon className="text-5xl text-purple-600 group-hover:text-purple-800 group-hover:scale-125 group-hover:rotate-12 transition-all duration-300" />
                    </div>
                    <h3 className="text-xl font-bold text-purple-800 mb-4 text-center group-hover:scale-105 transition-all duration-300">
                      {value.title}
                    </h3>
                    <p className="text-purple-700 leading-relaxed text-center group-hover:text-purple-800 transition-all duration-300">
                      {value.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Mission Statement */}
        <div className="text-center">
          <div className="relative bg-purple-50 rounded-2xl p-12 border-2 border-transparent hover:border-purple-600 hover:bg-white transition-all duration-500 hover:shadow-2xl hover:shadow-purple-300/50 group overflow-hidden">
            {/* Background effects */}
            <div className="absolute inset-0 bg-gradient-to-br from-purple-100 via-indigo-50 to-teal-100 opacity-0 group-hover:opacity-30 transition-all duration-700"></div>
            <div className="absolute top-0 left-0 w-0 h-2 bg-gradient-to-r from-purple-400 to-teal-400 group-hover:w-full transition-all duration-700"></div>
            
            <div className="relative z-10">
              <h2 className="text-4xl font-bold text-purple-800 mb-8 group-hover:scale-105 transition-all duration-300">
                Our Mission
              </h2>
              <p className="text-2xl text-purple-700 leading-relaxed max-w-4xl mx-auto group-hover:text-purple-800 transition-all duration-300">
                To make quality healthcare accessible to everyone, everywhere, by harnessing the power of artificial intelligence 
                to deliver personalized, accurate, and compassionate medical care.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;