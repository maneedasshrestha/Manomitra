import { Navigation } from "@/components/navigation"
import { HeroSection } from "@/components/hero-section"
import { StorySection } from "@/components/story-section"
import { ServicesSection } from "@/components/services-section"
import { EventsSection } from "@/components/events-section"
import { TeamSection } from "@/components/team-section"
import { GetInvolvedSection } from "@/components/get-involved-section"
import { ResourcesSection } from "@/components/resources-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <HeroSection />
      <StorySection />
      <ServicesSection />
      <EventsSection />
      <TeamSection />
      <GetInvolvedSection />
      <ResourcesSection />
      <ContactSection />
      <Footer />
    </main>
  )
}
