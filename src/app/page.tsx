// Gradually re-enable sections to isolate any remaining issues
import HeroSection from "@/components/HeroSection"
import AboutSection from "@/components/AboutSection"
import AcademicsSection from "@/components/AcademicsSection"
import StudentLifeSection from "@/components/StudentLifeSection"
import PlacementsSection from "@/components/PlacementsSection"
import CampusSection from "@/components/CampusSection"
import ContactFooter from "@/components/ContactFooter"
// import AboutSection from "@/components/AboutSection"
// import AcademicsSection from "@/components/AcademicsSection"
// import FacultySection from "@/components/FacultySection"
// import StudentLifeSection from "@/components/StudentLifeSection"
// import PlacementsSection from "@/components/PlacementsSection"
// import ResearchSection from "@/components/ResearchSection"
// import CampusSection from "@/components/CampusSection"
// import ContactFooter from "@/components/ContactFooter"
import { SmoothScroll } from "@/components/ui/smooth-scroll"
import { ScrollAnimation } from "@/components/ui/scroll-animation"

// import { ScrollProgress } from "@/components/ui/scroll-progress-simple"
import SocialMediaSidebar from "@/components/SocialMediaSidebar"

export default function HomePage() {
  return (
    <SmoothScroll>
      {/* <ScrollProgress /> */}
      <SocialMediaSidebar />
      <main className="min-h-screen pt-40">
        <div className="flex flex-col">
          <ScrollAnimation>
            <div id="hero">
              <HeroSection />
            </div>
          </ScrollAnimation>

          <ScrollAnimation delay={0.2}>
            <div id="about">
              <AboutSection />
            </div>
          </ScrollAnimation>

          <ScrollAnimation delay={0.3}>
            <div id="academics">
              <AcademicsSection />
            </div>
          </ScrollAnimation>


          <ScrollAnimation delay={0.5}>
            <div id="student-life">
              <StudentLifeSection />
            </div>
          </ScrollAnimation>

          <ScrollAnimation delay={0.6}>
            <div id="placements">
              <PlacementsSection />
            </div>
          </ScrollAnimation>

          <ScrollAnimation delay={0.7}>
            <div id="campus">
              <CampusSection />
            </div>
          </ScrollAnimation>

          <ScrollAnimation delay={0.8}>
            <div id="contact">
              <ContactFooter />
            </div>
          </ScrollAnimation>
        </div>
      </main>
    </SmoothScroll>
  )
}