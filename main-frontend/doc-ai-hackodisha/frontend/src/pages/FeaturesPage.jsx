import React, { useState } from 'react'
import {
  Sparkles, Brain, MessageCircle, UserCheck, Camera,
  TrendingUp, ClipboardList, Smartphone, Cloud,
  Lock, Clock, Bell, BarChart3
} from 'lucide-react'

const FeaturesPage = () => {
  const [activeFeature, setActiveFeature] = useState(0)

  const mainFeatures = [
    {
      icon: Brain,
      title: 'AI-Powered Diagnosis',
      description: 'Advanced machine learning algorithms analyze symptoms and medical history to provide accurate preliminary diagnoses.',
      details: 'Our AI has been trained on millions of medical cases and achieves 99.2% accuracy in symptom analysis.',
      color: 'purple'
    },
    {
      icon: MessageCircle,
      title: 'Smart Medical Assistant',
      description: 'Interactive AI chatbot that understands natural language and provides personalized health advice 24/7.',
      details: 'Get instant responses to health questions, medication reminders, and lifestyle recommendations.',
      color: 'indigo'
    },
    {
      icon: UserCheck,
      title: 'Specialist Matching',
      description: 'Connect with the right medical specialists based on your condition and location preferences.',
      details: 'Access to over 10,000 verified healthcare professionals across 50+ specialties.',
      color: 'teal'
    },
    {
      icon: Camera,
      title: 'Visual Diagnosis',
      description: 'Upload photos of skin conditions, injuries, or medical reports for AI-powered visual analysis.',
      details: 'Dermatological analysis, wound assessment, and medical document interpretation.',
      color: 'purple'
    },
    {
      icon: TrendingUp,
      title: 'Health Analytics',
      description: 'Comprehensive health tracking and predictive analytics for preventive care.',
      details: 'Track vitals, predict health risks, and get personalized prevention strategies.',
      color: 'indigo'
    },
    {
      icon: ClipboardList,
      title: 'Medical Records',
      description: 'Secure, centralized storage of all your medical information with easy sharing capabilities.',
      details: 'HIPAA-compliant storage with blockchain security and instant access from anywhere.',
      color: 'teal'
    }
  ]

  const additionalFeatures = [
    { icon: Smartphone, title: 'Mobile First', description: 'Optimized for smartphones and tablets' },
    { icon: Cloud, title: 'Cloud Sync', description: 'Access your data from any device' },
    { icon: Lock, title: 'End-to-End Encryption', description: 'Military-grade security' },
    { icon: Clock, title: '24/7 Availability', description: 'Round-the-clock AI assistance' },
    { icon: Bell, title: 'Smart Alerts', description: 'Proactive health notifications' },
    { icon: BarChart3, title: 'Predictive Analytics', description: 'AI-powered health predictions' }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-indigo-50 to-teal-50 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-100/40 via-indigo-100/30 to-teal-100/40 animate-pulse"></div>

      {/* Sparkles */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <Sparkles className="absolute top-20 left-20 text-purple-400 animate-bounce" size={20} />
        <Sparkles className="absolute top-40 right-32 text-teal-400 animate-pulse delay-300" size={16} />
        <Sparkles className="absolute bottom-40 left-1/4 text-indigo-400 animate-ping delay-700" size={18} />
        <Sparkles className="absolute bottom-60 right-1/3 text-purple-300 animate-pulse delay-500" size={14} />
        <Sparkles className="absolute top-1/2 left-1/2 text-teal-300 animate-bounce delay-1000" size={12} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-24">
        {/* Hero */}
        <div className="text-center mb-20">
          <h1 className="text-6xl md:text-7xl font-extrabold mb-8 text-transparent bg-gradient-to-r from-purple-600 via-indigo-600 to-teal-600 bg-clip-text drop-shadow-lg">
            Features
          </h1>
          <p className="text-2xl text-purple-700 max-w-4xl mx-auto leading-relaxed">
            Discover the powerful AI-driven features that make healthcare accessible, accurate, and personalized for everyone.
          </p>
        </div>

        {/* Main Features */}
        <div className="mb-20">
          <h2 className="text-4xl font-bold text-purple-800 mb-12 text-center">Core Features</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {mainFeatures.map((feature, index) => (
              <div key={index} className="group cursor-pointer" onClick={() => setActiveFeature(index)}>
                <div
                  className={`relative bg-purple-50 rounded-xl p-8 border-2 transition-all duration-500 
                    hover:scale-105 hover:shadow-2xl overflow-hidden h-full 
                    ${activeFeature === index
                      ? 'border-purple-600 bg-white shadow-xl shadow-purple-300/50'
                      : 'border-transparent hover:border-purple-600 hover:bg-white hover:shadow-purple-300/50'
                    }`}
                >
                  {/* Background */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-br from-purple-100 via-indigo-50 to-teal-100 opacity-0 
                      group-hover:opacity-30 transition-all duration-700 
                      ${activeFeature === index ? 'opacity-30' : ''}`}
                  ></div>
                  <div
                    className={`absolute top-0 left-0 w-0 h-1 bg-gradient-to-r from-purple-400 to-teal-400 
                      group-hover:w-full transition-all duration-500 
                      ${activeFeature === index ? 'w-full' : ''}`}
                  ></div>

                  {/* Content */}
                  <div className="relative z-10">
                    <div className="mb-6 flex justify-center">
                      <feature.icon className="text-5xl text-purple-600 group-hover:text-purple-800 transition-all duration-300" />
                    </div>
                    <h3 className="text-xl font-bold text-purple-800 mb-4 text-center">{feature.title}</h3>
                    <p className="text-purple-700 leading-relaxed text-center mb-4">{feature.description}</p>
                    <div
                      className={`text-sm text-purple-600 text-center opacity-0 transition-all duration-300 
                        ${activeFeature === index ? 'opacity-100' : 'group-hover:opacity-100'}`}
                    >
                      {feature.details}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Additional Features */}
        <div className="mb-20">
          <h2 className="text-4xl font-bold text-purple-800 mb-12 text-center">Additional Features</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {additionalFeatures.map((feature, index) => (
              <div key={index} className="group">
                <div className="relative bg-purple-50 rounded-lg p-6 border-2 border-transparent hover:border-purple-600 hover:bg-white transition-all duration-500 hover:scale-110 hover:shadow-xl hover:shadow-purple-300/50 overflow-hidden text-center">
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-100 to-indigo-100 opacity-0 group-hover:opacity-30 transition-all duration-700"></div>
                  <div className="absolute top-0 left-0 w-0 h-1 bg-gradient-to-r from-purple-400 to-teal-400 group-hover:w-full transition-all duration-500"></div>

                  <div className="relative z-10">
                    <feature.icon className="text-3xl text-purple-600 group-hover:text-purple-800 mx-auto mb-3" />
                    <h4 className="text-sm font-bold text-purple-800 mb-2">{feature.title}</h4>
                    <p className="text-xs text-purple-700">{feature.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default FeaturesPage