import React from 'react';
import { HiSparkles, HiCheckCircle } from 'react-icons/hi';
import { FaUserMd } from 'react-icons/fa';

const PricingPage = () => {
  const plans = [
    {
      name: 'Basic',
      price: 'Free',
      icon: FaUserMd,
      description: 'Perfect for individuals seeking quick medical insights.',
      features: ['AI Symptom Checker', 'Basic Reports', 'Email Support'],
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-indigo-50 to-teal-50 relative overflow-hidden">
      {/* Animated Background Sparkles */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <HiSparkles className="absolute top-20 left-20 text-purple-400 animate-bounce" size={20} />
        <HiSparkles className="absolute top-40 right-32 text-teal-400 animate-pulse delay-300" size={16} />
        <HiSparkles className="absolute bottom-40 left-1/4 text-indigo-400 animate-ping delay-700" size={18} />
        <HiSparkles className="absolute bottom-60 right-1/3 text-purple-300 animate-pulse delay-500" size={14} />
        <HiSparkles className="absolute top-1/2 left-1/2 text-teal-300 animate-bounce delay-1000" size={12} />
      </div>

      {/* Floating Orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-32 left-32 w-48 h-48 bg-gradient-to-br from-purple-200 to-indigo-200 rounded-full blur-3xl opacity-30 animate-pulse"></div>
        <div className="absolute bottom-32 right-32 w-56 h-56 bg-gradient-to-br from-indigo-200 to-teal-200 rounded-full blur-3xl opacity-25 animate-pulse delay-500"></div>
        <div className="absolute top-2/3 left-1/3 w-32 h-32 bg-gradient-to-br from-teal-200 to-purple-200 rounded-full blur-3xl opacity-20 animate-pulse delay-1000"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-24">
        {/* Hero Section */}
        <div className="text-center mb-20">
          <h1 className="text-6xl md:text-7xl font-extrabold mb-6 text-transparent bg-gradient-to-r from-purple-600 via-indigo-600 to-teal-600 bg-clip-text drop-shadow-lg">
            Simple, Transparent Pricing
          </h1>
          <p className="text-xl text-purple-700 max-w-2xl mx-auto">
            Choose a plan that fits your healthcare needs. No hidden fees, just better care.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="flex justify-center">
          <div className="w-full max-w-sm">
            {plans.map((plan, index) => (
              <div key={index} className="group w-full">
                <div className="relative bg-purple-50 rounded-2xl p-8 border-2 border-transparent hover:border-purple-600 hover:bg-white transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-purple-300/50 overflow-hidden">
                  {/* Background Hover Effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-100 via-indigo-50 to-teal-100 opacity-0 group-hover:opacity-30 transition-all duration-700"></div>
                  <div className="absolute top-0 left-0 w-0 h-1 bg-gradient-to-r from-purple-400 to-teal-400 group-hover:w-full transition-all duration-500"></div>

                  {/* Plan Content */}
                  <div className="relative z-10 text-center">
                    <plan.icon className="mx-auto mb-4 text-5xl text-purple-600 group-hover:text-purple-800 group-hover:scale-125 transition-all duration-300" />
                    <h2 className="text-2xl font-bold text-purple-800 mb-2">{plan.name}</h2>
                    <p className="text-purple-600 mb-4">{plan.description}</p>
                    <div className="text-3xl font-extrabold text-indigo-700 mb-6">{plan.price}</div>

                    <ul className="text-left space-y-3 text-purple-700">
                      {plan.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center gap-2">
                          <HiCheckCircle className="text-teal-500" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PricingPage;