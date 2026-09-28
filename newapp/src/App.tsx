import Header from "./components/homepage/Header"
import HeroSection from "./components/homepage/HeroSection"
import Footer from "./components/homepage/Footer"
import LocationsSection from "./components/homepage/LocationsSection"
import GoogleReviewsSection from "./components/homepage/GoogleReviewsSection"
import FaqSection from "./components/homepage/FaqSection"
import IndustrialPartners from "./components/homepage/IndustrialPartners"
import ServicesSection from "./components/homepage/ServicesSection"
import ProjectsSection from "./components/homepage/ProjectsSection"
import AutomationSection from "./components/homepage/AutomationSection"
import CtaSection from "./components/homepage/CtaSection"
import CoreServicesSection from "./components/homepage/CoreServicesSection"
import ScheduleConsultationSection from "./components/homepage/ScheduleConsultationSection"
import VisionMissionValues from "./components/homepage/VissionMissionValues"
import BlogsSection from "./components/homepage/BlogsSection"
import StatsCounterSection from "./components/homepage/StatsCounterSection"
import FloatingActions from "./components/homepage/FloatingActions"
import TrustedBy from "./components/homepage/TrustedBy"

function App() {
  return (
    <div>
      <Header />
      <FloatingActions />
      <HeroSection />
      <CoreServicesSection />
      <TrustedBy />
      <ServicesSection />
      <IndustrialPartners />
      <AutomationSection />
      <ProjectsSection />
      <VisionMissionValues />
      <GoogleReviewsSection />
      <ScheduleConsultationSection />
      <CtaSection />
      <BlogsSection />
      <StatsCounterSection />
      <FaqSection />
      <LocationsSection />
      
      <Footer />
    </div>
  )
}

export default App