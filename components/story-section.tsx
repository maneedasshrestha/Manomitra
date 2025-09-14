import { Card, CardContent } from "@/components/ui/card"
import { Target, Heart, Users, Lightbulb } from "lucide-react"

export function StorySection() {
  return (
    <section id="story" className="relative py-20 px-4 sm:px-8 lg:px-16 min-h-[70vh] flex items-center justify-center overflow-hidden">
      {/* Animated gradient blob background for cohesion with hero section */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="w-[60vw] h-[60vw] max-w-2xl max-h-2xl bg-gradient-to-tr from-[#ec9608]/30 via-[#ec9608]/10 to-[#ec9608]/40 rounded-full blur-3xl opacity-30 absolute top-0 left-1/2 -translate-x-1/2 animate-blob2" />
        <div className="w-[40vw] h-[40vw] max-w-xl max-h-xl bg-gradient-to-br from-[#ec9608]/20 via-[#ec9608]/5 to-[#ec9608]/30 rounded-full blur-2xl opacity-20 absolute bottom-0 right-1/3 animate-blob3" />
      </div>
      <div className="relative z-10 max-w-5xl w-full mx-auto flex flex-col items-center text-center">
        <div className="mb-12">
          <h2 className="text-4xl md:text-5xl font-extrabold text-[#ec9608] mb-4 animate-fade-in">Our Story</h2>
          <div className="flex justify-center mb-6 animate-fade-in">
            <span className="inline-block w-24 h-1 rounded-full bg-gradient-to-r from-[#ec9608] to-[#ec9608]/70"></span>
          </div>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed animate-fade-in">
            Mental health challenges among youth in Nepal often go unaddressed due to stigma, lack of awareness, and limited access to support systems. We started Manomitra to change this narrative.
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="rounded-3xl bg-white/60 dark:bg-black/40 shadow-xl p-8 border border-[#ec9608]/20 animate-fade-in h-full min-h-[340px] flex flex-col justify-between">
            <h3 className="text-2xl font-bold text-[#ec9608] mb-6">Why We Started</h3>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <Target className="h-8 w-8 text-[#ec9608] mt-1 flex-shrink-0" />
                <p className="text-foreground leading-relaxed text-justify">
                  <strong>Breaking Silence:</strong> Too many young people in Nepal suffer in silence, afraid to speak about their mental health struggles due to societal stigma.
                </p>
              </div>
              <div className="flex items-start space-x-4">
                <Heart className="h-8 w-8 text-[#ec9608] mt-1 flex-shrink-0" />
                <p className="text-foreground leading-relaxed text-justify">
                  <strong>Peer Understanding:</strong> We believe that young people can best support each other because we share similar experiences and challenges.
                </p>
              </div>
              <div className="flex items-start space-x-4">
                <Users className="h-8 w-8 text-[#ec9608] mt-1 flex-shrink-0" />
                <p className="text-foreground leading-relaxed text-justify">
                  <strong>Community Impact:</strong> By starting conversations in our communities, we can create lasting change in how mental health is perceived and addressed.
                </p>
              </div>
            </div>
          </div>
          <div className="h-full min-h-[340px] flex flex-col justify-between">
            <Card className="rounded-3xl border-[#ec9608]/20 shadow-xl animate-fade-in h-full flex flex-col justify-between">
              <CardContent className="p-10 h-full flex flex-col justify-between">
                <div className="text-center">
                  <Lightbulb className="h-12 w-12 text-[#ec9608] mx-auto mb-4" />
                  <h4 className="text-2xl font-bold text-[#ec9608] mb-4">Our Vision</h4>
                  <p className="text-muted-foreground leading-relaxed">
                    "A Nepal where every young person feels <strong style={{ color: '#ec9608' }}>safe to talk about their mental health</strong>, where seeking help is seen as a sign of strength, and where <strong style={{ color: '#ec9608' }}>communities actively support the wellbeing of their youth.</strong>"
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
