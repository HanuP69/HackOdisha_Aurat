import React, { useState, useEffect, useRef } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Logo from '../../Logo'
import LogOutBtn from '../Header/LogOutBtn'
import { HiSparkles } from 'react-icons/hi'
import { FaBell } from 'react-icons/fa'

function Header({ authStatus, setAuthStatus, user }) {
  const navigate = useNavigate()
  const [showUserMenu, setShowUserMenu] = useState(false)
  const userMenuRef = useRef(null)

  const navigationItems = [{ name: 'Home', path: '/' }]

  // Close user menu when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (userMenuRef.current && !userMenuRef.current.contains(event.target)) {
        setShowUserMenu(false)
      }
    }

    if (showUserMenu) {
      document.addEventListener('mousedown', handleClickOutside)
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [showUserMenu])

  return (
    <header className="relative bg-gradient-to-br from-purple-50 via-indigo-50 to-teal-50 border-b-2 border-purple-600 shadow-2xl shadow-purple-200/30 overflow-hidden z-40">
      {/* Background gradient & floating orbs */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-100/40 via-indigo-100/30 to-teal-100/40 animate-pulse"></div>
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-5 left-10 w-24 h-24 bg-gradient-to-br from-purple-200 to-indigo-200 rounded-full blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute top-3 right-20 w-32 h-32 bg-gradient-to-br from-indigo-200 to-teal-200 rounded-full blur-3xl opacity-15 animate-pulse delay-500"></div>
        <div className="absolute top-8 right-1/3 w-20 h-20 bg-gradient-to-br from-teal-200 to-purple-200 rounded-full blur-3xl opacity-25 animate-pulse delay-1000"></div>
      </div>

      {/* Sparkles */}
      <div className="absolute inset-0 opacity-20">
        <HiSparkles className="absolute top-4 left-20 text-purple-400 animate-bounce" size={16} />
        <HiSparkles className="absolute top-6 right-32 text-teal-400 animate-pulse delay-300" size={12} />
        <HiSparkles className="absolute top-8 left-1/2 text-indigo-400 animate-ping delay-700" size={14} />
        <HiSparkles className="absolute top-3 right-1/4 text-purple-300 animate-pulse delay-500" size={10} />
        <HiSparkles className="absolute top-2 left-1/3 text-teal-300 animate-bounce delay-1000" size={8} />
        <HiSparkles className="absolute top-5 right-1/5 text-indigo-300 animate-pulse delay-1200" size={12} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <div className="flex items-center gap-4 group hover:scale-105 transition-all duration-500">
            <Link to="/" className="flex items-center gap-4">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-300 to-teal-300 rounded-full blur-2xl opacity-20 group-hover:opacity-60 group-hover:scale-150 transition-all duration-700"></div>
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-200 to-teal-200 rounded-full blur-xl opacity-0 group-hover:opacity-40 group-hover:animate-spin transition-all duration-1000"></div>
                <div className="absolute inset-0 bg-purple-200 rounded-full blur-lg opacity-30 group-hover:opacity-50 transition-opacity"></div>

                <Logo width="50px" className="relative z-10 group-hover:animate-pulse group-hover:drop-shadow-lg" />

                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 group-hover:animate-spin transition-all duration-1000">
                  <div className="absolute top-0 left-1/2 w-2 h-2 bg-gradient-to-r from-purple-400 to-teal-400 rounded-full transform -translate-x-1/2"></div>
                  <div className="absolute bottom-0 left-1/2 w-2 h-2 bg-gradient-to-r from-indigo-400 to-purple-400 rounded-full transform -translate-x-1/2"></div>
                </div>
              </div>
              <div className="flex flex-col">
                <span className="text-2xl font-bold text-purple-800 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-purple-600 group-hover:to-teal-600 group-hover:bg-clip-text group-hover:drop-shadow-lg transition-all duration-500">
                  DOC-AI
                </span>
                <div className="text-xs font-semibold text-purple-600 tracking-wider opacity-80">
                  <span className="text-purple-700">Care.</span>
                  <span className="text-indigo-700 ml-1">Connect.</span>
                  <span className="text-teal-700 ml-1">Cure.</span>
                </div>
              </div>
            </Link>
            <div className="hidden sm:block w-px h-8 bg-gradient-to-b from-transparent via-purple-400/30 to-transparent animate-pulse"></div>
            <span className="hidden sm:block text-purple-700 text-sm font-medium group-hover:text-purple-800 group-hover:font-bold group-hover:drop-shadow-sm transition-all duration-300">
              AI Healthcare Solutions
            </span>
          </div>

          {/* Navigation */}
          <nav className="hidden lg:flex items-center ml-auto gap-4">
            {navigationItems.map((item, index) => (
              <button
                key={index}
                onClick={() => navigate(item.path)}
                className="group relative px-5 py-2.5 rounded-lg bg-purple-50 border-2 border-transparent text-purple-800 font-medium hover:border-purple-600 hover:bg-white hover:shadow-xl hover:shadow-purple-300/50 transition-all duration-500 hover:scale-110 overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-purple-100 to-teal-100 opacity-0 group-hover:opacity-30 transition-all duration-300"></div>
                <span className="relative z-10 group-hover:font-bold group-hover:drop-shadow-sm transition-all duration-300">{item.name}</span>
              </button>
            ))}

            {authStatus && (
              <button
                onClick={() => setAuthStatus(false)}
                className="group relative px-5 py-2.5 rounded-lg bg-purple-50 border-2 border-transparent text-purple-800 font-medium hover:border-purple-600 hover:bg-white hover:shadow-xl hover:shadow-purple-300/50 transition-all duration-500 hover:scale-110 overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-red-100 to-pink-100 opacity-0 group-hover:opacity-30 transition-all duration-300"></div>
                <span className="relative z-10 group-hover:font-bold transition-all duration-300">Logout</span>
              </button>
            )}
          </nav>

          {/* Right Side */}
          <div className="flex items-center gap-4 ml-3">
            {!authStatus ? (
              <div className="flex items-center gap-3">
                {/* Login Button */}
                <button
                  onClick={() => navigate('/login')}
                  className="relative px-6 py-2.5 bg-purple-50 border-2 border-transparent rounded-lg text-purple-800 font-medium hover:border-purple-600 hover:bg-white hover:shadow-xl hover:shadow-purple-300/50 transition-all duration-500 hover:scale-110 group overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-200 to-indigo-200 opacity-0 group-hover:opacity-40 transition-all duration-300"></div>
                  <span className="relative z-10 group-hover:font-bold group-hover:drop-shadow-sm transition-all duration-300">Login</span>
                </button>

                <button
                  onClick={() => navigate('/signup')}
                  className="relative px-6 py-2.5 bg-gradient-to-r from-purple-600 to-teal-600 border-2 border-purple-600 rounded-lg text-white font-medium hover:from-purple-700 hover:to-teal-700 hover:border-purple-700 hover:shadow-xl hover:shadow-purple-400/50 transition-all duration-500 hover:scale-110 group overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                  <span className="relative z-10 group-hover:font-bold group-hover:drop-shadow-lg transition-all duration-300">Get Started</span>
                </button>
              </div>
            ) : (
              <div className="flex items-center gap-4">
                {/* Notifications */}
                <button className="relative p-2.5 bg-purple-50 border-2 border-transparent rounded-lg text-purple-800 hover:border-purple-600 hover:bg-white hover:shadow-xl hover:shadow-purple-300/50 transition-all duration-500 hover:scale-110 group overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-100 to-indigo-100 opacity-0 group-hover:opacity-30 transition-all duration-300"></div>
                  <FaBell size={18} className="relative z-10 text-purple-600 group-hover:text-purple-800 group-hover:animate-bounce transition-all duration-300" />
                  <span className="absolute -top-1 -right-1 w-3 h-3 bg-gradient-to-r from-red-400 to-pink-400 rounded-full animate-pulse group-hover:animate-bounce group-hover:scale-125"></span>
                </button>

                {/* User Menu */}
                <div className="relative" ref={userMenuRef}>
                  <button
                    onClick={() => setShowUserMenu(!showUserMenu)}
                    className="flex items-center gap-3 px-4 py-2.5 bg-purple-50 border-2 border-transparent rounded-lg text-purple-800 hover:border-purple-600 hover:bg-white hover:shadow-xl hover:shadow-purple-300/50 transition-all duration-500 hover:scale-110 group overflow-hidden"
                  >
                    <div className="relative">
                      <img
                        src={
                          user?.avatar
                            ? user.avatar
                            : `https://i.pravatar.cc/40?u=103`
                        }
                        alt="Profile"
                        className="w-8 h-8 rounded-full border-2 border-purple-300 group-hover:border-purple-600 group-hover:scale-110 transition-all duration-300 group-hover:shadow-lg"
                        onError={(e) => {
                          e.target.src = `https://ui-avatars.com/api/?name=${user?.username || 'User'}&background=9333ea&color=fff&size=40`
                        }}
                      />
                      <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-gradient-to-r from-teal-400 to-emerald-400 border-2 border-white rounded-full animate-pulse group-hover:animate-bounce group-hover:scale-125"></div>
                    </div>
                    <span className="font-medium hidden sm:block">{user?.username || 'User'}</span>
                  </button>

                  {showUserMenu && (
                    <div className="absolute right-0 top-full mt-2 w-56 bg-white border-2 border-purple-600 rounded-lg shadow-2xl shadow-purple-400/30 py-2 z-[60] animate-in slide-in-from-top-2 duration-300">
                      <div className="px-4 py-3 border-b border-purple-200">
                        <p className="text-purple-900 font-medium">{user?.username || 'User'}</p>
                        <p className="text-purple-600 text-sm">{user?.email || 'example@email.com'}</p>
                      </div>
                      <div className="py-2">
                        <button className="w-full px-4 py-2 text-left text-purple-800 hover:bg-purple-50 transition-colors duration-200">
                          Profile Settings
                        </button>
                        <button className="w-full px-4 py-2 text-left text-purple-800 hover:bg-purple-50 transition-colors duration-200">
                          My Appointments
                        </button>
                        <button className="w-full px-4 py-2 text-left text-purple-800 hover:bg-purple-50 transition-colors duration-200">
                          Medical History
                        </button>
                        {/* Home button for mobile */}
                        <div className="lg:hidden">
                          <button 
                            onClick={() => {
                              navigate('/')
                              setShowUserMenu(false)
                            }}
                            className="w-full px-4 py-2 text-left text-purple-800 hover:bg-purple-50 transition-colors duration-200 border-t border-purple-200"
                          >
                            🏠 Home
                          </button>
                        </div>
                      </div>
                      <div className="border-t border-purple-200 pt-2">
                        <LogOutBtn setAuthStatus={setAuthStatus} />
                      </div>
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header