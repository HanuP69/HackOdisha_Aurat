import React, { useState } from 'react'
import { FaLinkedinIn, FaTwitter, FaGithub, FaEnvelope } from 'react-icons/fa'
import { HiSparkles, HiLocationMarker, HiAcademicCap } from 'react-icons/hi'
import { MdStar } from 'react-icons/md'

const MeetOurTeam = () => {
  const [hoveredMember, setHoveredMember] = useState(null)

  const teamMembers = [
    {
      id: 1,
      name: "Aditi Raj",
      department: "Computer Science And Engineering",
      location: "Jamshedpur, India",
      education: "B.Tech 2nd Year",
      avatar: "/images/aditi.jpg",   // ✅ put in public/images/
      gradient: "from-purple-500 to-indigo-600",
      hoverGradient: "from-purple-600 to-indigo-700"
    },
    {
      id: 2,
      name: "Utkarsh Singh",
      department: "Computer Science And Engineering",
      location: "Jamshedpur, India",
      education: "B.Tech 2nd Year",
      avatar: "/images/utkarsh.jpg", 
      gradient: "from-teal-500 to-emerald-600",
      hoverGradient: "from-teal-600 to-emerald-700"
    },
    {
      id: 3,
      name: "Ruchika Sinha",
      department: "Computer Science And Engineering",
      location: "Jamshedpur, India",
      education: "B.Tech 2nd Year",
      avatar: "/images/ruchika.jpg",
      gradient: "from-indigo-500 to-teal-600",
      hoverGradient: "from-indigo-600 to-teal-700"
    },
    {
      id: 4,
      name: "Adarsh Kumar",
      department: "Computer Science And Engineering",
      location: "Jamshedpur, India",
      education: "B.Tech 2nd Year",
      avatar: "/images/adarsh_new.jpg",
      gradient: "from-emerald-500 to-cyan-600",
      hoverGradient: "from-emerald-600 to-cyan-700"
    },
    {
      id: 5,
      name: "Tanishk S Pandey",
      department: "Computer Science And Engineering",
      location: "Jamshedpur, India",
      education: "B.Tech 2nd Year",
      avatar: "/images/tp.jpg",
      gradient: "from-cyan-500 to-purple-600",
      hoverGradient: "from-cyan-600 to-purple-700"
    }
  ]

  return (
    <div className="relative bg-gradient-to-br from-purple-50 via-indigo-50 to-teal-50 min-h-screen overflow-hidden">
      {/* Background animation */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-100/40 via-indigo-100/30 to-teal-100/40 animate-pulse"></div>

      {/* Sparkles */}
      <div className="absolute inset-0 opacity-20">
        <HiSparkles className="absolute top-10 left-10 text-purple-400 animate-bounce" size={24} />
        <HiSparkles className="absolute top-32 right-20 text-teal-400 animate-pulse delay-300" size={20} />
        <HiSparkles className="absolute bottom-20 left-1/4 text-indigo-400 animate-ping delay-700" size={22} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-16">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-extrabold text-transparent bg-gradient-to-r from-purple-600 via-indigo-600 to-teal-600 bg-clip-text mb-4">
            Meet Our Team
          </h1>
          <p className="text-xl text-purple-700 max-w-3xl mx-auto leading-relaxed">
            The brilliant minds behind DOC-AI, dedicated to revolutionizing healthcare through innovative AI solutions.
          </p>
          <div className="mt-6 flex justify-center items-center gap-3 text-purple-600">
            <MdStar className="animate-pulse" size={20} />
            <span className="font-semibold">Passionate • Innovative • Dedicated</span>
            <MdStar className="animate-pulse delay-500" size={20} />
          </div>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member) => (
            <div
              key={member.id}
              className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500"
              onMouseEnter={() => setHoveredMember(member.id)}
              onMouseLeave={() => setHoveredMember(null)}
            >
              {/* Avatar */}
              <div className="flex justify-center mb-6">
                <div className="relative">
                  {member.avatar.endsWith(".jpg") ? (
                    <img
                      src={member.avatar}
                      alt={member.name}
                      className="w-24 h-24 rounded-full border-4 border-white shadow-xl object-cover group-hover:scale-110 transition-all duration-500"
                    />
                  ) : (
                    <div
                      className={`w-24 h-24 flex items-center justify-center rounded-full text-white text-2xl font-bold border-4 border-white shadow-xl bg-gradient-to-br ${member.gradient}`}
                    >
                      {member.avatar}
                    </div>
                  )}
                </div>
              </div>

              {/* Info */}
              <div className="text-center mb-4">
                <h3 className="text-2xl font-bold text-purple-800">{member.name}</h3>
                <p className="text-sm text-purple-600">{member.department}</p>
              </div>

              <div className="space-y-2 mb-6 text-sm text-purple-700">
                <div className="flex items-center justify-center gap-2">
                  <HiLocationMarker size={16} className="text-purple-600" />
                  <span>{member.location}</span>
                </div>
                <div className="flex items-center justify-center gap-2">
                  <HiAcademicCap size={16} className="text-purple-600" />
                  <span>{member.education}</span>
                </div>
              </div>

              {/* Socials */}
              <div className="flex justify-center gap-3">
                {[FaLinkedinIn, FaTwitter, FaGithub, FaEnvelope].map((Icon, idx) => (
                  <button
                    key={idx}
                    className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center hover:bg-purple-200 transition"
                  >
                    <Icon size={16} className="text-purple-700" />
                  </button>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default MeetOurTeam