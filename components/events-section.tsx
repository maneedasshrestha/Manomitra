import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Calendar, MapPin, Users, Camera } from "lucide-react"

export function EventsSection() {
  const events = [
    {
      title: "Mental Health Awareness Week",
      date: "October 2024",
      location: "Kathmandu Valley Schools",
      participants: "500+ students",
      description:
        "A week-long series of workshops and activities across multiple schools in Kathmandu, focusing on stress management and peer support.",
      image: "/young-people-in-workshop-discussion-mental-health-.jpg",
    },
    {
      title: "Peer Support Training",
      date: "September 2024",
      location: "Community Center, Pokhara",
      participants: "30 volunteers",
      description:
        "Training session for new volunteers on how to provide effective peer support and create safe spaces for mental health conversations.",
      image: "/youth-volunteers-training-session-peer-support-nep.jpg",
    },
    {
      title: "Breaking Stigma Campaign",
      date: "August 2024",
      location: "Social Media & Communities",
      participants: "1000+ reached",
      description:
        "Digital and community campaign sharing stories of recovery and resilience to reduce mental health stigma in Nepali society.",
      image: "/community-gathering-mental-health-campaign-nepal-y.jpg",
    },
    {
      title: "Mindfulness Workshop",
      date: "July 2024",
      location: "Lalitpur College",
      participants: "80 students",
      description:
        "Interactive workshop teaching mindfulness techniques and stress reduction strategies specifically designed for Nepali students.",
      image: "/students-meditation-mindfulness-workshop-nepal-col.jpg",
    },
  ]

  return (
    <section id="events" className="relative py-20 px-4 sm:px-8 lg:px-16 min-h-[70vh] flex items-center justify-center overflow-hidden">
      {/* Animated gradient blob background for cohesion with other sections */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="w-[60vw] h-[60vw] max-w-2xl max-h-2xl bg-gradient-to-tr from-[#ec9608]/30 via-[#ec9608]/10 to-[#ec9608]/40 rounded-full blur-3xl opacity-30 absolute top-0 left-1/2 -translate-x-1/2 animate-blob2" />
        <div className="w-[40vw] h-[40vw] max-w-xl max-h-xl bg-gradient-to-br from-[#ec9608]/20 via-[#ec9608]/5 to-[#ec9608]/30 rounded-full blur-2xl opacity-20 absolute bottom-0 right-1/3 animate-blob3" />
      </div>
      <div className="relative z-10 max-w-7xl w-full mx-auto flex flex-col items-center text-center">
        <div className="mb-12">
          <h2 className="text-4xl md:text-5xl font-extrabold text-[#ec9608] mb-4 animate-fade-in">Events & Activities</h2>
          <div className="flex justify-center mb-6 animate-fade-in">
            <span className="inline-block w-24 h-1 rounded-full bg-gradient-to-r from-[#ec9608] to-[#ec9608]/70"></span>
          </div>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed animate-fade-in">
            Take a look at some of our recent events and community activities. Each gathering brings us closer to our goal of creating mental health awareness across Nepal.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {events.map((event, index) => (
            <Card
              key={index}
              className="rounded-3xl overflow-hidden border-[#ec9608]/20 hover:border-[#ec9608]/40 transition-colors duration-300 shadow-xl bg-white/60 dark:bg-black/40 animate-fade-in"
            >
              <div className="aspect-video relative overflow-hidden">
                <img src={event.image || "/placeholder.svg"} alt={event.title} className="w-full h-full object-cover" />
                <div className="absolute top-4 right-4 bg-[#ec9608] text-white px-3 py-1 rounded-full text-sm font-medium shadow-md">
                  <Camera className="inline h-4 w-4 mr-1" />
                  Event
                </div>
              </div>
              <CardHeader>
                <CardTitle className="text-xl text-[#ec9608] font-bold">{event.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3 mb-4">
                  <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                    <Calendar className="h-4 w-4 text-[#ec9608]" />
                    <span>{event.date}</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                    <MapPin className="h-4 w-4 text-[#ec9608]" />
                    <span>{event.location}</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                    <Users className="h-4 w-4 text-[#ec9608]" />
                    <span>{event.participants}</span>
                  </div>
                </div>
                <p className="text-foreground leading-relaxed">{event.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="text-center mt-12 animate-fade-in">
          <p className="text-muted-foreground mb-4">Want to see more of our community activities?</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#contact" className="text-[#ec9608] hover:text-[#ec9608]/80 font-medium">
              Follow us on social media →
            </a>
            <a href="#get-involved" className="text-[#ec9608] hover:text-[#ec9608]/80 font-medium">
              Join our next event →
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
