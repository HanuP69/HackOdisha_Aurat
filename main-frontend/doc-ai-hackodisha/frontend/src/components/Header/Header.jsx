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
    <header className="relative bg-purple-50 border-b-2 border-purple-600 shadow-2xl shadow-purple-200/30 z-[100]">
      {/* Background orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-5 left-10 w-24 h-24 bg-purple-200 rounded-full blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute top-3 right-20 w-32 h-32 bg-indigo-200 rounded-full blur-3xl opacity-15 animate-pulse delay-500"></div>
        <div className="absolute top-8 right-1/3 w-20 h-20 bg-teal-200 rounded-full blur-3xl opacity-25 animate-pulse delay-1000"></div>
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
                <div className="absolute inset-0 bg-purple-200 rounded-full blur-2xl opacity-20 group-hover:opacity-60 transition-all duration-700"></div>
                <div className="absolute inset-0 bg-indigo-200 rounded-full blur-xl opacity-0 group-hover:opacity-40 transition-all duration-1000"></div>
                <div className="absolute inset-0 bg-purple-200 rounded-full blur-lg opacity-30 group-hover:opacity-50 transition-opacity"></div>

                <Logo width="50px" className="relative z-10 group-hover:animate-pulse group-hover:drop-shadow-lg" />
              </div>
              <div className="flex flex-col">
                <span className="text-2xl font-bold text-purple-800 group-hover:text-purple-600 transition-all duration-500">
                  DOC-AI
                </span>
                <div className="text-xs font-semibold text-purple-600 tracking-wider opacity-80">
                  <span className="text-purple-700">Care.</span>
                  <span className="text-indigo-700 ml-1">Connect.</span>
                  <span className="text-teal-700 ml-1">Cure.</span>
                </div>
              </div>
            </Link>
            <div className="hidden sm:block w-px h-8 bg-purple-400/30 animate-pulse"></div>
            <span className="hidden sm:block text-purple-700 text-sm font-medium group-hover:text-purple-800 transition-all duration-300">
              AI Healthcare Solutions
            </span>
          </div>

          {/* Navigation */}
          <nav className="hidden lg:flex items-center ml-auto gap-4">
            {navigationItems.map((item, index) => (
              <button
                key={index}
                onClick={() => navigate(item.path)}
                className="px-5 py-2.5 rounded-lg bg-purple-50 border-2 border-transparent text-purple-800 font-medium hover:border-purple-600 hover:bg-white hover:shadow-xl hover:shadow-purple-300/50 transition-all duration-500 hover:scale-110"
              >
                {item.name}
              </button>
            ))}

            {authStatus && (
              <button
                onClick={() => setAuthStatus(false)}
                className="px-5 py-2.5 rounded-lg bg-purple-50 border-2 border-transparent text-purple-800 font-medium hover:border-purple-600 hover:bg-white hover:shadow-xl hover:shadow-purple-300/50 transition-all duration-500 hover:scale-110"
              >
                Logout
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
                  className="px-6 py-2.5 bg-purple-50 border-2 border-transparent rounded-lg text-purple-800 font-medium hover:border-purple-600 hover:bg-white hover:shadow-xl hover:shadow-purple-300/50 transition-all duration-500 hover:scale-110"
                >
                  Login
                </button>

                <button
                  onClick={() => navigate('/signup')}
                  className="px-6 py-2.5 bg-purple-600 border-2 border-purple-600 rounded-lg text-white font-medium hover:bg-purple-700 hover:border-purple-700 hover:shadow-xl hover:shadow-purple-400/50 transition-all duration-500 hover:scale-110"
                >
                  Get Started
                </button>
              </div>
            ) : (
              <div className="flex items-center gap-4">
                {/* Notifications */}
                <button className="relative p-2.5 bg-purple-50 border-2 border-transparent rounded-lg text-purple-800 hover:border-purple-600 hover:bg-white hover:shadow-xl hover:shadow-purple-300/50 transition-all duration-500 hover:scale-110">
                  <FaBell size={18} className="text-purple-600 hover:text-purple-800 transition-all duration-300" />
                  <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-400 rounded-full animate-pulse"></span>
                </button>

                {/* User Menu */}
                <div className="relative z-[99999]" ref={userMenuRef}>
                  <button
                    onClick={() => setShowUserMenu(!showUserMenu)}
                    className={`flex items-center gap-3 px-4 py-2.5 bg-purple-50 border-2 rounded-lg text-purple-800 transition-all duration-500 ${
                      showUserMenu 
                        ? 'border-purple-600 bg-white shadow-xl shadow-purple-300/50 scale-110' 
                        : 'border-transparent hover:border-purple-600 hover:bg-white hover:shadow-xl hover:shadow-purple-300/50 hover:scale-110'
                    }`}
                  >
                    <div className="relative z-10 flex items-center gap-3">
                      <div className="relative">
                        <img
                          src={user?.avatar ? user.avatar : `https://i.pravatar.cc/40?u=103`}
                          alt="Profile"
                          className="w-8 h-8 rounded-full border-2 border-purple-300 hover:border-purple-600 hover:scale-110 transition-all duration-300 shadow"
                          onError={(e) => {
                            e.target.src = `https://ui-avatars.com/api/?name=${user?.username || 'User'}&background=9333ea&color=fff&size=40`
                          }}
                        />
                        <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-teal-400 border-2 border-white rounded-full animate-pulse"></div>
                      </div>
                      <span className="font-medium hidden sm:block">{user?.username || 'User'}</span>
                      <svg 
                        className={`w-4 h-4 transition-transform duration-300 ${showUserMenu ? 'rotate-180' : ''}`} 
                        fill="none" stroke="currentColor" viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </button>

                  {/* Dropdown Menu */}
                  {showUserMenu && (
                    <>
                      <div 
                        className="fixed inset-0 bg-black/20 backdrop-blur-sm z-[99998] lg:hidden"
                        onClick={() => setShowUserMenu(false)}
                      ></div>
                      
                      <div 
                        className="absolute right-0 top-full mt-2 w-64 bg-white border-2 border-purple-600 rounded-xl shadow-2xl shadow-purple-400/50 py-2 z-[99999]"
                      >
                        {/* User Info */}
                        <div className="relative z-10 px-4 py-3 border-b border-purple-200/50 bg-purple-100">
                          <div className="flex items-center gap-3 mb-2">
                            <img
                              src={user?.avatar ? user.avatar : `https://i.pravatar.cc/50?u=103`}
                              alt="Profile"
                              className="w-12 h-12 rounded-full border-2 border-purple-300 shadow-lg"
                              onError={(e) => {
                                e.target.src = `https://ui-avatars.com/api/?name=${user?.username || 'User'}&background=9333ea&color=fff&size=50`
                              }}
                            />
                            <div>
                              <p className="text-purple-900 font-semibold text-lg">{user?.username || 'User'}</p>
                              <p className="text-purple-600 text-sm">{user?.email || 'example@email.com'}</p>
                            </div>
                          </div>
                          <div className="flex items-center gap-2">
                            <div className="w-2 h-2 bg-teal-400 rounded-full animate-pulse"></div>
                            <span className="text-purple-700 text-xs font-medium">Online</span>
                          </div>
                        </div>
                        
                        {/* Menu Items */}
                        <div className="relative z-10 py-2">
                          <div className="lg:hidden border-t border-purple-200/50 mt-2 pt-2">
                            <button onClick={() => { navigate('/'); setShowUserMenu(false) }}
                              className="w-full px-4 py-3 text-left text-purple-800 hover:bg-purple-50 transition-all duration-200 flex items-center gap-3"
                            >
                              Home
                            </button>
                          </div>
                        </div>
                        
                        {/* Logout */}
                        <div className="relative z-10 border-t border-purple-200/50 pt-2">
                          <div className="px-4 py-2">
                            <LogOutBtn setAuthStatus={setAuthStatus} 
                              className="w-full flex items-center gap-3 px-4 py-3 text-left text-red-700 hover:bg-red-50 transition-all duration-200 rounded-lg"
                            />
                          </div>
                        </div>
                      </div>
                    </>
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