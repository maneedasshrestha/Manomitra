"use client"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Presentation, MessageSquare, BookOpen, Shield } from "lucide-react"
import React, { useEffect, useRef, useState } from "react"

export function ServicesSection() {
  const [animateCards, setAnimateCards] = useState(false)
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new window.IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setAnimateCards(true)
        }
      },
      { threshold: 0.9 }
    )
    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }
    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current)
    }
  }, [])

  const services = [
    {
      icon: Presentation,
      title: "Awareness Workshops",
      description:
        "Interactive sessions in schools, colleges, and communities to educate about mental health, reduce stigma, and promote understanding.",
      features: ["School presentations", "Community talks", "Interactive activities", "Q&A sessions"],
    },
    {
      icon: MessageSquare,
      title: "Peer Support Groups",
      description:
        "Safe spaces where young people can share their experiences, challenges, and support each other in a judgment-free environment.",
      features: ["Weekly meetups", "Online support groups", "Confidential sharing", "Peer mentorship"],
    },
    {
      icon: BookOpen,
      title: "Resource Access",
      description:
        "Connecting youth with professional counseling services, self-help resources, and mental health information tailored for Nepal.",
      features: ["Counselor referrals", "Self-help guides", "Crisis helplines", "Educational materials"],
    },
    {
      icon: Shield,
      title: "Stigma Reduction",
      description:
        "Community campaigns and advocacy efforts to change attitudes toward mental health and create more accepting environments.",
      features: ["Social media campaigns", "Community events", "Storytelling initiatives", "Advocacy programs"],
    },
  ]

  return (
    <section id="services" ref={sectionRef} className="relative py-20 px-4 sm:px-8 lg:px-16 min-h-[70vh] flex items-center justify-center overflow-hidden">
      {/* Animated gradient blob background for cohesion with hero/story sections */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="w-[60vw] h-[60vw] max-w-2xl max-h-2xl bg-gradient-to-tr from-[#ec9608]/30 via-[#ec9608]/10 to-[#ec9608]/40 rounded-full blur-3xl opacity-30 absolute top-0 left-1/2 -translate-x-1/2 animate-blob2" />
        <div className="w-[40vw] h-[40vw] max-w-xl max-h-xl bg-gradient-to-br from-[#ec9608]/20 via-[#ec9608]/5 to-[#ec9608]/30 rounded-full blur-2xl opacity-20 absolute bottom-0 right-1/3 animate-blob3" />
      </div>
      <div className="relative z-10 max-w-7xl w-full mx-auto flex flex-col items-center text-center">
        <div className="mb-12">
          <h2 className="text-4xl md:text-5xl font-extrabold text-[#ec9608] mb-4 animate-fade-in">What We Do</h2>
          <div className="flex justify-center mb-6 animate-fade-in">
            <span className="inline-block w-24 h-1 rounded-full bg-gradient-to-r from-[#ec9608] to-[#ec9608]/70"></span>
          </div>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed animate-fade-in">
            Our four core focus areas work together to create comprehensive mental health support and awareness in Nepal's youth communities.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {services.map((service, index) => (
            <Card
              key={index}
              className="rounded-3xl border-[#ec9608]/20 shadow-xl hover:border-[#ec9608]/40 transition-colors duration-300 bg-white/70 dark:bg-black/40 animate-fade-in flex flex-col h-full items-center cursor-pointer overflow-hidden relative"
            >
              {/* Animated accent background blob */}
              <div className="absolute inset-0 z-0 pointer-events-none">
                <div className={`w-32 h-32 bg-gradient-to-tr from-[#ec9608]/30 via-[#ec9608]/10 to-[#ec9608]/40 rounded-full blur-2xl opacity-40 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transition-opacity duration-500 ${animateCards ? 'opacity-0' : ''}`} />
              </div>
              <CardHeader className="flex flex-col items-center justify-center pb-0 z-10">
                <div className={`bg-[#ec9608]/10 rounded-full p-4 mb-4 flex items-center justify-center ${!animateCards ? 'animate-pulse' : ''}`}> 
                  <service.icon className="h-8 w-8 text-[#ec9608]" />
                </div>
                <CardTitle className="text-xl text-[#ec9608] font-bold text-center mb-2">{service.title}</CardTitle>
              </CardHeader>
              <CardContent
                className={`flex flex-col flex-1 justify-center pt-0 pb-8 px-8 w-full items-center transition-all duration-1500 max-h-0 ${animateCards ? 'max-h-[500px] opacity-100' : 'opacity-0'} z-10`}
                style={{ pointerEvents: 'none' }}
              >
                <p className="text-muted-foreground mb-6 leading-relaxed text-center max-w-xs">{service.description}</p>
                <ul className="grid grid-cols-1 gap-3 w-full">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-2 bg-[#ec9608]/10 rounded-lg px-3 py-2">
                      <div className="w-2 h-2 bg-[#ec9608] rounded-full flex-shrink-0"></div>
                      <span className="text-sm text-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
