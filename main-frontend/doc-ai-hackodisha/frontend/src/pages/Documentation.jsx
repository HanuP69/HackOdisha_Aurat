import React, { useState } from "react"
import { HiSparkles } from "react-icons/hi"
import { FileText, BookOpen, Code, Settings, Server, Shield } from "lucide-react"

function Documentation() {
  const [activeSection, setActiveSection] = useState("getting-started")

  const sections = [
    {
      id: "getting-started",
      title: "Getting Started",
      icon: <BookOpen className="w-5 h-5 text-purple-600" />,
      content: (
        <>
          <p>
            Welcome to the <span className="font-semibold">Doc-AI Documentation</span>!  
            Follow this guide to set up your environment and start using Doc-AI.
          </p>
          <ul className="list-disc list-inside mt-3 space-y-1 text-purple-700">
            <li>Install the SDK with <code className="bg-purple-100 px-2 py-1 rounded">npm install doc-ai</code></li>
            <li>Import the library in your project</li>
            <li>Initialize with your API key</li>
          </ul>
        </>
      )
    },
    {
      id: "api-reference",
      title: "API Reference",
      icon: <Code className="w-5 h-5 text-indigo-600" />,
      content: (
        <>
          <p>Doc-AI provides a clean REST API for integration. Example:</p>
          <pre className="bg-gray-900 text-green-400 rounded-lg p-4 mt-3 text-sm overflow-x-auto">
{`POST https://api.doc-ai.com/v1/analyze
Headers: {
  Authorization: Bearer <API_KEY>
}
Body: {
  "input": "Patient symptoms here"
}`}
          </pre>
        </>
      )
    },
    {
      id: "configuration",
      title: "Configuration",
      icon: <Settings className="w-5 h-5 text-teal-600" />,
      content: (
        <>
          <p>Customize Doc-AI settings to fit your use case:</p>
          <ul className="list-disc list-inside mt-3 space-y-1 text-teal-700">
            <li>Set language preferences</li>
            <li>Enable/disable AI explanations</li>
            <li>Configure logging & monitoring</li>
          </ul>
        </>
      )
    },
    {
      id: "deployment",
      title: "Deployment",
      icon: <Server className="w-5 h-5 text-purple-700" />,
      content: (
        <>
          <p>Deploy Doc-AI on your servers or use our cloud-hosted version.</p>
          <ul className="list-disc list-inside mt-3 space-y-1 text-purple-700">
            <li>Docker images available</li>
            <li>Kubernetes Helm charts supported</li>
            <li>Works on AWS, GCP, Azure</li>
          </ul>
        </>
      )
    },
    {
      id: "security",
      title: "Security",
      icon: <Shield className="w-5 h-5 text-indigo-700" />,
      content: (
        <>
          <p>
            Security is our top priority. Doc-AI is fully HIPAA and GDPR compliant.
          </p>
          <ul className="list-disc list-inside mt-3 space-y-1 text-indigo-700">
            <li>Data encryption in transit & at rest</li>
            <li>Role-based access control (RBAC)</li>
            <li>Audit logging enabled</li>
          </ul>
        </>
      )
    }
  ]

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-purple-50 via-indigo-50 to-teal-50 text-gray-900 overflow-hidden">
      {/* Background layers */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-100/40 via-indigo-100/30 to-teal-100/40 animate-pulse"></div>

      {/* Floating sparkles */}
      <div className="absolute inset-0 opacity-20">
        <HiSparkles className="absolute top-12 left-16 text-purple-400 animate-bounce" size={20} />
        <HiSparkles className="absolute top-24 right-24 text-indigo-400 animate-pulse delay-300" size={16} />
        <HiSparkles className="absolute bottom-24 left-1/3 text-teal-400 animate-ping delay-700" size={18} />
        <HiSparkles className="absolute bottom-32 right-1/3 text-purple-300 animate-pulse delay-500" size={14} />
      </div>

      {/* Floating orbs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-20 w-32 h-32 bg-gradient-to-br from-purple-200 to-indigo-200 rounded-full blur-3xl opacity-30 animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-40 h-40 bg-gradient-to-br from-indigo-200 to-teal-200 rounded-full blur-3xl opacity-25 animate-pulse delay-500"></div>
        <div className="absolute top-1/2 left-1/2 w-24 h-24 bg-gradient-to-br from-teal-200 to-purple-200 rounded-full blur-3xl opacity-20 animate-pulse delay-1000"></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-16">
        {/* Hero */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-extrabold bg-gradient-to-r from-purple-600 via-indigo-600 to-teal-600 bg-clip-text text-transparent drop-shadow-lg">
            Doc-AI Documentation
          </h1>
          <p className="mt-4 text-lg text-gray-700 font-medium">
            Learn how to integrate, configure, and deploy Doc-AI in your apps.
          </p>
        </div>

        {/* Layout */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Sidebar */}
          <aside className="md:col-span-1 space-y-4">
            {sections.map((section) => (
              <button
                key={section.id}
                onClick={() => setActiveSection(section.id)}
                className={`flex items-center gap-3 w-full px-4 py-3 rounded-xl font-medium transition-all duration-300 ${
                  activeSection === section.id
                    ? "bg-gradient-to-r from-purple-600 to-indigo-600 text-white shadow-lg scale-105"
                    : "bg-white/70 text-purple-800 hover:bg-white hover:shadow-md"
                }`}
              >
                {section.icon}
                {section.title}
              </button>
            ))}
          </aside>

          {/* Content */}
          <main className="md:col-span-3 bg-white/70 backdrop-blur-sm rounded-2xl shadow-lg p-8 border border-purple-200 hover:shadow-xl hover:scale-[1.01] transition-all duration-300">
            <h2 className="text-2xl font-bold text-purple-700 mb-4">
              {sections.find((s) => s.id === activeSection)?.title}
            </h2>
            <div className="text-gray-700 space-y-4">
              {sections.find((s) => s.id === activeSection)?.content}
            </div>
          </main>
        </div>
      </div>
    </div>
  )
}

export default Documentation