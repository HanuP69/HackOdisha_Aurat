import { Routes, Route } from "react-router-dom"
import { useState } from "react"
import Header from "./components/header/Header"
import Footer from "./components/Footer/Footer"
import Home from "./pages/Home"
import Login from "./pages/Login"
import Signup from "./pages/SignUp"
import LogOutBtn from "./components/Header/LogOutBtn"
import HelpCenter from "./pages/HelpCenter"
import Documentation from "./pages/Documentation"
import ApiReference from "./pages/ApiReference"
import Community from "./pages/Community"
import Contact from "./pages/Contact"
import PrivacyPolicy from "./pages/PrivacyPolicy"
import TermsOfService from "./pages/TermsOfService"
import CookiePolicy from "./pages/CookiePolicy"
import GDPRCompliance from "./pages/GDPRCompliance"
import Licensing from "./pages/Licensing"
import MeetOurTeam from "./pages/MeetOurTeam"
import FeaturesPage from "./pages/FeaturesPage"
import PricingPage from "./pages/PricingPage"
import CareersPage from "./pages/CareersPage"
import PressPage from "./pages/PressPage"
import AboutPage from "./pages/AboutPage"

function App() {
  const [user, setUser] = useState(null)
  const [authStatus, setAuthStatus] = useState(false)

  return (
    <div>
      {/* Pass authStatus + setAuthStatus to Header */}
      <Header authStatus={authStatus} setAuthStatus={setAuthStatus} user={user}  />

      <main>
        <Routes>
          <Route path="/" element={<Home authStatus={authStatus} />} />
          <Route path="/login" element={<Login setAuthStatus={setAuthStatus}  setUser={setUser}  />} />
          <Route path="/signup" element={<Signup setAuthStatus={setAuthStatus} setUser={setUser}/>} />
          <Route path="/logout" element={<LogOutBtn setAuthStatus={setAuthStatus} />} />
          <Route path="/help" element={<HelpCenter />} />
          <Route path="/docs" element={<Documentation />} />
          <Route path="/api-docs" element={<ApiReference />} />
          <Route path="/community" element={<Community />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/privacy" element={<PrivacyPolicy />} />
          <Route path="/terms" element={<TermsOfService />} />
          <Route path="/cookies" element={<CookiePolicy />} />
          <Route path="/gdpr" element={<GDPRCompliance />} />
          <Route path="/licensing" element={<Licensing />} />
          <Route path="/team" element={<MeetOurTeam />} />
          <Route path="/features" element={<FeaturesPage/>}/>
          <Route path="/pricing" element={<PricingPage/>}/>
          <Route path="/careers" element={<CareersPage/>}/>
          <Route path="/press" element={<PressPage/>}/>
          <Route path="/about" element={<AboutPage/>}/>
        </Routes>
      </main>

      <Footer />
    </div>
  )
}

export default App