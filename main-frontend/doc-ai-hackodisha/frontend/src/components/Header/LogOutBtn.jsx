import React from 'react'
import { useNavigate } from 'react-router-dom'
function LogOutBtn({ setAuthStatus, className = "", onLogout }) {
   const navigate = useNavigate();
  return (
    <button
      onClick={() => {
        setAuthStatus(false)
        if (onLogout) onLogout()
          
      }}
      className={`w-full text-left px-4 py-2 rounded-lg text-red-600 hover:bg-red-100 transition font-medium ${className}`}
    >
      Logout
    </button>
  )
}

export default LogOutBtn