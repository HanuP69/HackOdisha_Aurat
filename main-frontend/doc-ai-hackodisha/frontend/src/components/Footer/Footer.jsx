import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../../Logo'
import { FaTwitter, FaFacebookF, FaLinkedinIn, FaInstagram, FaYoutube } from 'react-icons/fa'
import { MdEmail, MdPhone, MdLocationOn } from 'react-icons/md'
import { HiSparkles } from 'react-icons/hi'

function Footer() {
  // Define navigation sections with proper links
  const navigationSections = [
    {
      title: 'Company',
      items: [
        { name: 'About Us', link: '/about', type: 'internal' },
        { name: 'Features', link: '/features', type: 'internal' },
        { name: 'Pricing', link: '/pricing', type: 'internal' },
        { name: 'Careers', link: '/careers', type: 'internal' },
        { name: 'Press Kit', link: '/press', type: 'internal' }
      ]
    },
    {
      title: 'Support',
      items: [
        { name: 'Help Center', link: '/help', type: 'internal' },
        { name: 'Documentation', link: '/docs', type: 'internal' },
        { name: 'API Reference', link: '/api-docs', type: 'internal' },
        { name: 'Community', link: '/community', type: 'internal' },
        { name: 'Contact Us', link: '/contact', type: 'internal' }
      ]
    },
    {
      title: 'Legal',
      items: [
        { name: 'Privacy Policy', link: '/privacy', type: 'internal' },
        { name: 'Terms of Service', link: '/terms', type: 'internal' },
        { name: 'Cookie Policy', link: '/cookies', type: 'internal' },
        { name: 'GDPR Compliance', link: '/gdpr', type: 'internal' },
        { name: 'Licensing', link: '/licensing', type: 'internal' }
      ]
    }
  ];

  // Social media links
  const socialLinks = [
    { Icon: FaTwitter, href: 'https://twitter.com/docai', label: 'Twitter' },
    { Icon: FaFacebookF, href: 'https://facebook.com/docai', label: 'Facebook' },
    { Icon: FaLinkedinIn, href: 'https://linkedin.com/company/docai', label: 'LinkedIn' },
    { Icon: FaInstagram, href: 'https://instagram.com/docai', label: 'Instagram' },
    { Icon: FaYoutube, href: 'https://youtube.com/docai', label: 'YouTube' }
  ];

  return (
    <footer className="relative bg-gradient-to-br from-purple-50 via-indigo-50 to-teal-50 text-gray-900 border-t-2 border-purple-600 overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-100/40 via-indigo-100/30 to-teal-100/40 animate-pulse"></div>
      
      {/* Enhanced floating sparkles with more animation */}
      <div className="absolute inset-0 opacity-20">
        <HiSparkles className="absolute top-10 left-10 text-purple-400 animate-bounce" size={20} />
        <HiSparkles className="absolute top-32 right-20 text-teal-400 animate-pulse delay-300" size={16} />
        <HiSparkles className="absolute bottom-20 left-1/4 text-indigo-400 animate-ping delay-700" size={18} />
        <HiSparkles className="absolute bottom-32 right-1/3 text-purple-300 animate-pulse delay-500" size={14} />
        <HiSparkles className="absolute top-1/2 left-1/3 text-teal-300 animate-bounce delay-1000" size={12} />
        <HiSparkles className="absolute top-3/4 right-1/4 text-indigo-300 animate-pulse delay-1200" size={16} />
      </div>

      {/* Floating orbs for ambient effect */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-20 w-32 h-32 bg-gradient-to-br from-purple-200 to-indigo-200 rounded-full blur-3xl opacity-30 animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-40 h-40 bg-gradient-to-br from-indigo-200 to-teal-200 rounded-full blur-3xl opacity-25 animate-pulse delay-500"></div>
        <div className="absolute top-1/2 left-1/2 w-24 h-24 bg-gradient-to-br from-teal-200 to-purple-200 rounded-full blur-3xl opacity-20 animate-pulse delay-1000"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-16">
        {/* Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 mb-12">
          {/* Logo & Info */}
          <div className="lg:col-span-1 space-y-6 transform hover:scale-105 transition-all duration-500">
            <div className="group">
              <div className="flex items-center gap-4 mb-4">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-300 to-teal-300 rounded-full blur-xl opacity-30 group-hover:opacity-70 group-hover:scale-150 transition-all duration-700"></div>
                  <div className="absolute inset-0 bg-gradient-to-br from-indigo-200 to-teal-200 rounded-full blur-2xl opacity-0 group-hover:opacity-40 group-hover:animate-spin transition-all duration-1000"></div>
                  <div className="absolute inset-0 bg-purple-200 rounded-full blur-lg opacity-30 group-hover:opacity-50 transition-opacity"></div>
                  <Logo width="60px" className="relative z-10 group-hover:animate-pulse" />
                </div>
                <div className="flex flex-col">
                  <span className="text-3xl font-extrabold text-purple-800 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-purple-600 group-hover:to-teal-600 group-hover:bg-clip-text transition-all duration-300 group-hover:drop-shadow-lg">
                    DOC-AI
                  </span>
                  <div className="text-xs font-semibold tracking-wider opacity-80">
                    <span className="text-purple-700">Care.</span>
                    <span className="text-indigo-700 ml-1">Connect.</span>
                    <span className="text-teal-700 ml-1">Cure.</span>
                  </div>
                </div>
              </div>
              <p className="text-purple-700 text-base leading-relaxed max-w-sm group-hover:text-purple-800 transition-all duration-300">
                Revolutionizing healthcare with cutting-edge AI technology. 
                Your trusted partner in smart medical solutions.
              </p>
            </div>

            {/* Contact with enhanced animations */}
            <div className="space-y-3">
              <a 
                href="mailto:contact@doc-ai.com"
                className="flex items-center gap-3 text-purple-700 hover:text-purple-800 transition-all duration-300 hover:translate-x-2 hover:drop-shadow-md group"
              >
                <MdEmail className="text-purple-600 group-hover:text-purple-800 group-hover:scale-125 group-hover:rotate-12 transition-all duration-300" size={18} />
                <span className="text-sm font-medium group-hover:font-semibold transition-all duration-300">contact@doc-ai.com</span>
              </a>
              <a 
                href="tel:+919526437361"
                className="flex items-center gap-3 text-purple-700 hover:text-purple-800 transition-all duration-300 hover:translate-x-2 hover:drop-shadow-md group"
              >
                <MdPhone className="text-purple-600 group-hover:text-purple-800 group-hover:scale-125 group-hover:rotate-12 transition-all duration-300" size={18} />
                <span className="text-sm font-medium group-hover:font-semibold transition-all duration-300">+91 9526437361</span>
              </a>
              <div className="flex items-center gap-3 text-purple-700 hover:text-purple-800 transition-all duration-300 hover:translate-x-2 hover:drop-shadow-md group">
                <MdLocationOn className="text-purple-600 group-hover:text-purple-800 group-hover:scale-125 group-hover:bounce transition-all duration-300" size={18} />
                <span className="text-sm font-medium group-hover:font-semibold transition-all duration-300">Jamshedpur, India</span>
              </div>
            </div>

            {/* Meet Our Team Button */}
            <div className="pt-4 mb-4">
              <Link
                to="/team"
                className="relative inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-purple-600 to-indigo-600 border-2 border-purple-600 rounded-lg text-white font-semibold hover:from-purple-700 hover:to-indigo-700 hover:border-purple-700 transition-all duration-300 hover:shadow-xl hover:shadow-purple-400/50 hover:scale-105 group/btn overflow-hidden"
              >
                {/* Button ripple effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-purple-700 to-indigo-600 opacity-0 group-hover/btn:opacity-100 transition-all duration-300"></div>
                
                {/* Team icon */}
                <svg className="relative z-10 w-5 h-5 group-hover/btn:scale-110 transition-all duration-300" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z"/>
                </svg>
                
                <span className="relative z-10 group-hover/btn:font-bold transition-all duration-300">Meet Our Team</span>
                
                {/* Button glow */}
                <div className="absolute inset-0 bg-white opacity-0 group-hover/btn:opacity-10 group-hover/btn:animate-pulse transition-all duration-300"></div>
              </Link>
            </div>

            {/* Enhanced Social with impressive animations */}
            <div className="flex gap-4 pt-2">
              {socialLinks.map((social, idx) => (
                <a
                  key={idx}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="relative w-12 h-12 bg-purple-50 rounded-full flex items-center justify-center border-2 border-transparent hover:border-purple-600 hover:bg-white transition-all duration-500 text-purple-700 hover:text-purple-800 group overflow-hidden"
                >
                  {/* Ripple effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-200 to-indigo-200 rounded-full scale-0 group-hover:scale-150 opacity-0 group-hover:opacity-30 transition-all duration-700"></div>
                  <div className="absolute inset-0 bg-gradient-to-r from-indigo-300 to-teal-200 rounded-full scale-0 group-hover:scale-100 opacity-0 group-hover:opacity-20 transition-all duration-500 delay-100"></div>
                  
                  <social.Icon 
                    size={20} 
                    className="relative z-10 group-hover:scale-125 group-hover:rotate-12 transition-all duration-300 drop-shadow-md group-hover:drop-shadow-lg" 
                    style={{
                      filter: 'drop-shadow(0 0 8px rgba(0,0,0,0.1))'
                    }}
                  />
                  
                  {/* Glow effect */}
                  <div className="absolute inset-0 rounded-full bg-purple-300 opacity-0 group-hover:opacity-40 group-hover:animate-ping transition-all duration-500"></div>
                </a>
              ))}
            </div>
          </div>

          {/* Navigation with impressive card effects */}
          <div className="lg:col-span-3 grid grid-cols-1 md:grid-cols-3 gap-8">
            {navigationSections.map((section, idx) => (
              <div key={idx} className="group">
                <div className="relative bg-purple-50 rounded-lg p-6 border-2 border-transparent hover:border-purple-600 hover:bg-white transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-purple-300/50 overflow-hidden">
                  {/* Animated background gradient on hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-100 via-indigo-50 to-teal-100 opacity-0 group-hover:opacity-30 transition-all duration-700"></div>
                  
                  {/* Sliding border effect */}
                  <div className="absolute top-0 left-0 w-0 h-1 bg-gradient-to-r from-purple-400 to-teal-400 group-hover:w-full transition-all duration-500"></div>
                  <div className="absolute bottom-0 right-0 w-0 h-1 bg-gradient-to-l from-indigo-400 to-purple-400 group-hover:w-full transition-all duration-500 delay-100"></div>
                  
                  <div className="relative z-10">
                    <h3 className="mb-6 text-lg font-bold text-purple-800 uppercase tracking-wider group-hover:text-purple-700 group-hover:scale-105 transition-all duration-300 drop-shadow-sm">
                      {section.title}
                    </h3>
                    <ul className="space-y-3">
                      {section.items.map((item, index) => (
                        <li key={index} className="transform transition-all duration-300 hover:translate-x-3">
                          {item.type === 'internal' ? (
                            <Link
                              to={item.link}
                              className="text-purple-700 hover:text-purple-800 transition-all duration-300 flex items-center gap-2 group/link relative overflow-hidden py-1"
                            >
                              {/* Expanding underline */}
                              <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-purple-600 group-hover/link:w-full transition-all duration-300"></div>
                              
                              {/* Animated dot */}
                              <span className="w-1 h-1 bg-purple-600 rounded-full opacity-0 group-hover/link:opacity-100 group-hover/link:scale-150 group-hover/link:bg-purple-800 transition-all duration-300"></span>
                              
                              <span className="group-hover/link:font-semibold group-hover/link:drop-shadow-sm transition-all duration-300">
                                {item.name}
                              </span>
                              
                              {/* Hover glow effect */}
                              <div className="absolute inset-0 bg-purple-200 opacity-0 group-hover/link:opacity-20 rounded transition-all duration-300"></div>
                            </Link>
                          ) : (
                            <a
                              href={item.link}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-purple-700 hover:text-purple-800 transition-all duration-300 flex items-center gap-2 group/link relative overflow-hidden py-1"
                            >
                              {/* Expanding underline */}
                              <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-purple-600 group-hover/link:w-full transition-all duration-300"></div>
                              
                              {/* Animated dot */}
                              <span className="w-1 h-1 bg-purple-600 rounded-full opacity-0 group-hover/link:opacity-100 group-hover/link:scale-150 group-hover/link:bg-purple-800 transition-all duration-300"></span>
                              
                              <span className="group-hover/link:font-semibold group-hover/link:drop-shadow-sm transition-all duration-300">
                                {item.name}
                              </span>
                              
                              {/* External link indicator */}
                              <svg className="w-3 h-3 opacity-0 group-hover/link:opacity-100 transition-all duration-300" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M4.25 5.5a.75.75 0 00-.75.75v8.5c0 .414.336.75.75.75h8.5a.75.75 0 00.75-.75v-4a.75.75 0 011.5 0v4A2.25 2.25 0 0112.75 17h-8.5A2.25 2.25 0 012 14.75v-8.5A2.25 2.25 0 014.25 4h5a.75.75 0 010 1.5h-5z" clipRule="evenodd" />
                                <path fillRule="evenodd" d="M6.194 12.753a.75.75 0 001.06.053L16.5 4.44v2.81a.75.75 0 001.5 0v-4.5a.75.75 0 00-.75-.75h-4.5a.75.75 0 000 1.5h2.553l-9.056 8.194a.75.75 0 00-.053 1.06z" clipRule="evenodd" />
                              </svg>
                              
                              {/* Hover glow effect */}
                              <div className="absolute inset-0 bg-purple-200 opacity-0 group-hover/link:opacity-20 rounded transition-all duration-300"></div>
                            </a>
                          )}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Enhanced Newsletter with impressive animations */}
        <div className="border-t-2 border-purple-400 pt-8 mb-8">
          <div className="relative bg-purple-50 rounded-lg p-8 border-2 border-transparent hover:border-purple-600 hover:bg-white transition-all duration-500 hover:shadow-2xl hover:shadow-purple-300/50 group overflow-hidden">
            {/* Animated background patterns */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-all duration-700">
              <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-purple-200 via-indigo-100 to-teal-100 animate-pulse"></div>
            </div>
            
            {/* Floating elements */}
            <div className="absolute top-4 right-4 w-2 h-2 bg-purple-300 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-bounce transition-all duration-500 delay-200"></div>
            <div className="absolute bottom-4 left-4 w-3 h-3 bg-teal-200 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-pulse transition-all duration-500 delay-400"></div>
            
            <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-6">
              <div className="text-center lg:text-left group-hover:transform group-hover:scale-105 transition-all duration-300">
                <h3 className="text-2xl font-bold text-purple-800 mb-2 group-hover:drop-shadow-lg transition-all duration-300">
                  Stay Updated
                </h3>
                <p className="text-purple-700 group-hover:text-purple-800 transition-all duration-300">
                  Subscribe to our newsletter for the latest AI healthcare innovations.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-3 w-full lg:w-auto">
                <input 
                  type="email" 
                  placeholder="Enter your email"
                  className="px-4 py-3 bg-white border-2 border-purple-300 rounded-lg text-gray-900 placeholder-purple-500 focus:outline-none focus:border-purple-600 focus:shadow-lg focus:shadow-purple-200/50 focus:scale-105 transition-all duration-300 min-w-[300px] hover:border-purple-400 hover:shadow-md"
                />
                <button className="relative px-6 py-3 bg-gradient-to-r from-purple-600 to-teal-600 border-2 border-purple-600 rounded-lg text-white font-semibold hover:from-purple-700 hover:to-teal-700 hover:border-purple-700 transition-all duration-300 hover:shadow-xl hover:shadow-purple-400/50 whitespace-nowrap hover:scale-110 group/btn overflow-hidden">
                  {/* Button ripple effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-700 to-indigo-600 opacity-0 group-hover/btn:opacity-100 transition-all duration-300"></div>
                  <span className="relative z-10">Subscribe</span>
                  
                  {/* Button glow */}
                  <div className="absolute inset-0 bg-white opacity-0 group-hover/btn:opacity-10 group-hover/btn:animate-pulse transition-all duration-300"></div>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced Bottom section */}
        <div className="border-t-2 border-purple-400 pt-8">
          <div className="flex flex-col lg:flex-row justify-between items-center gap-4 hover:transform hover:scale-[1.02] transition-all duration-500">
            <div className="flex flex-col sm:flex-row items-center gap-4 text-purple-700 text-sm hover:text-purple-800 transition-all duration-300">
              <span className="hover:font-semibold hover:drop-shadow-md transition-all duration-300">&copy; {new Date().getFullYear()} DOC-AI. All rights reserved.</span>
              <div className="hidden sm:block w-1 h-1 bg-purple-600 rounded-full animate-pulse"></div>
              <span className="hover:font-semibold hover:drop-shadow-md transition-all duration-300">Designed with ❤ for AI-powered healthcare</span>
            </div>
            <div className="flex items-center gap-6 text-sm text-purple-700 hover:text-purple-800 transition-all duration-300">
              <span className="flex items-center gap-2 hover:scale-110 transition-all duration-300">
                <span className="w-2 h-2 bg-gradient-to-r from-teal-400 to-emerald-400 rounded-full animate-pulse hover:animate-bounce"></span>
                <span className="hover:font-semibold transition-all duration-300">All systems operational</span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer