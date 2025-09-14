"use client"

import type React from "react"
import React, { useEffect, useState } from "react";
import Confetti from "react-confetti";

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { UserPlus, Handshake, Calendar, Mail } from "lucide-react"
import { Dialog } from "@/components/ui/dialog"
import { X } from "lucide-react"

export function GetInvolvedSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    interest: "",
    message: "",
  })

  const [openVolunteer, setOpenVolunteer] = useState(false);
  const [openPartner, setOpenPartner] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);
  const [showNotification, setShowNotification] = useState(false);
  const [fadeConfetti, setFadeConfetti] = useState(false);
  const [fadeNotification, setFadeNotification] = useState(false);
  const [isSubmittingVolunteer, setIsSubmittingVolunteer] = useState(false);
  const [isSubmittingPartner, setIsSubmittingPartner] = useState(false);

  useEffect(() => {
    if (openVolunteer || openPartner) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, [openVolunteer, openPartner]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log("Form submitted:", formData)
    alert("Thank you for your interest! We'll get back to you soon.")
    setFormData({ name: "", email: "", phone: "", interest: "", message: "" })
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  // Show confetti and notification for a longer duration
  useEffect(() => {
    if (showConfetti) {
      setShowNotification(true);
      setFadeConfetti(false);
      setFadeNotification(false);
      const fadeTimer = setTimeout(() => {
        setFadeConfetti(true);
        setFadeNotification(true);
      }, 3000); // Start fading after 3s
      const timer = setTimeout(() => {
        setShowConfetti(false);
        setShowNotification(false);
        setFadeConfetti(false);
        setFadeNotification(false);
      }, 4000); // Fully remove after 4s
      return () => {
        clearTimeout(timer);
        clearTimeout(fadeTimer);
      };
    }
  }, [showConfetti]);

  const handleVolunteerSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmittingVolunteer(true);
    try {
      const res = await fetch('/api/volunteer', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          interest: formData.interest,
          message: formData.message,
        }),
      });
      if (res.ok) {
        setOpenVolunteer(false);
        setShowConfetti(true);
        setFormData({ name: "", email: "", phone: "", interest: "", message: "" });
      } else {
        alert("Failed to send application. Please try again.");
      }
    } catch {
      alert("Failed to send application. Please try again.");
    }
    setIsSubmittingVolunteer(false);
  };

  const handlePartnerSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmittingPartner(true);
    const form = e.target as HTMLFormElement;
    try {
      const res = await fetch('/api/partner', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          org: form.org.value,
          contact: form.contact.value,
          email: form.email.value,
          phone: form.phone.value,
          message: form.message.value,
        }),
      });
      if (res.ok) {
        setOpenPartner(false);
        setShowConfetti(true);
        form.reset();
      } else {
        alert("Failed to send partnership request. Please try again.");
      }
    } catch {
      alert("Failed to send partnership request. Please try again.");
    }
    setIsSubmittingPartner(false);
  };

  const ways = [
    {
      icon: UserPlus,
      title: "Become a Volunteer",
      description:
        "Join our team of passionate youth advocates. Help facilitate workshops, support peers, and spread awareness in your community.",
      action: "Sign Up to Volunteer",
    },
    {
      icon: Handshake,
      title: "Partner with Us",
      description:
        "Schools, organizations, and community groups can collaborate with us to bring mental health awareness to their members.",
      action: "Explore Partnerships",
    },
    {
      icon: Calendar,
      title: "Attend Events",
      description:
        "Participate in our workshops, support groups, and community events. Every participant helps reduce stigma and build awareness.",
      action: "View Upcoming Events",
    },
  ]

  return (
    <section id="get-involved" className="relative py-20 px-4 sm:px-8 lg:px-16 min-h-[70vh] flex items-center justify-center overflow-hidden">
      {/* Animated gradient blob background for cohesion with other sections */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="w-[60vw] h-[60vw] max-w-2xl max-h-2xl bg-gradient-to-tr from-[#ec9608]/30 via-[#ec9608]/10 to-[#ec9608]/40 rounded-full blur-3xl opacity-30 absolute top-0 left-1/2 -translate-x-1/2 animate-blob2" />
        <div className="w-[40vw] h-[40vw] max-w-xl max-h-xl bg-gradient-to-br from-[#ec9608]/20 via-[#ec9608]/5 to-[#ec9608]/30 rounded-full blur-2xl opacity-20 absolute bottom-0 right-1/3 animate-blob3" />
      </div>
      <div className="relative z-0 max-w-7xl w-full mx-auto flex flex-col items-center text-center">
        <div className="mb-12">
          <h2 className="text-4xl md:text-5xl font-extrabold text-[#ec9608] mb-4 animate-fade-in">Get Involved</h2>
          <div className="flex justify-center mb-6 animate-fade-in">
            <span className="inline-block w-24 h-1 rounded-full bg-gradient-to-r from-[#ec9608] to-[#ec9608]/70"></span>
          </div>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed animate-fade-in">
            There are many ways to support our mission of creating mental health awareness in Nepal. Whether you want to volunteer, partner with us, or simply attend our events, every contribution matters.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-16">
          {ways.map((way, index) => (
            <Card
              key={index}
              className="rounded-3xl border-[#ec9608]/20 hover:border-[#ec9608]/40 transition-colors duration-300 text-center shadow-xl bg-white/60 dark:bg-black/40 animate-fade-in"
            >
              <CardHeader>
                <div className="bg-[#ec9608]/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <way.icon className="h-8 w-8 text-[#ec9608]" />
                </div>
                <CardTitle className="text-xl text-[#ec9608] font-bold">{way.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-6 leading-relaxed">{way.description}</p>
                {way.title === "Become a Volunteer" ? (
                  <Button variant="outline" className="w-full bg-transparent border border-[#ec9608] text-[#ec9608]" onClick={() => setOpenVolunteer(true)}>
                    {way.action}
                  </Button>
                ) : way.title === "Partner with Us" ? (
                  <Button variant="outline" className="w-full bg-transparent border border-[#ec9608] text-[#ec9608]" onClick={() => setOpenPartner(true)}>
                    {way.action}
                  </Button>
                ) : (
                  <Button
                    variant="outline"
                    className="w-full bg-transparent border border-[#ec9608] text-[#ec9608]"
                    onClick={() => window.open("https://www.instagram.com/manomitra___/", "_blank")}
                  >
                    {way.action}
                  </Button>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
        {/* Confetti and notification always rendered above all content */}
        {showConfetti && (
          <div
            style={{
              transition: 'opacity 1s',
              opacity: fadeConfetti ? 0 : 1,
              pointerEvents: 'none',
              position: 'fixed',
              inset: 0,
              zIndex: 120,
            }}
          >
            <Confetti width={window.innerWidth} height={window.innerHeight} numberOfPieces={200} recycle={false} />
          </div>
        )}
        {showNotification && (
          <div
            style={{
              transition: 'opacity 1s',
              opacity: fadeNotification ? 0 : 1,
              pointerEvents: 'none',
              marginLeft: '12px', // Add left margin
            }}
            className="fixed bottom-8 right-8 z-[9999999] bg-[#ec9608] text-white px-6 py-3 rounded-xl shadow-lg text-lg font-semibold animate-fade-in"
          >
            Submitted successfully!
          </div>
        )}
      </div>
      {openVolunteer && (
        <div className="fixed inset-0 z-[99999] flex items-center justify-center bg-black/40">
          <Card className="relative rounded-3xl border-[#ec9608]/20 shadow-xl animate-fade-in bg-white dark:bg-black max-w-2xl mx-auto z-[100000]">
            <button
              type="button"
              className="absolute top-10 right-3 text-red-600 hover:text-red-800 text-2xl font-bold z-[110]"
              onClick={() => setOpenVolunteer(false)}
              aria-label="Close"
            >
              <X className="h-6 w-6" />
            </button>
            <CardHeader>
              <div className="text-center">
                <Mail className="h-12 w-12 text-[#ec9608] mx-auto mb-4" />
                <CardTitle className="text-2xl text-[#ec9608] font-bold">Volunteer Application</CardTitle>
                <p className="text-muted-foreground mt-2">
                  Ready to make a difference? Fill out this form and we'll get in touch with you about volunteer opportunities.
                </p>
              </div>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleVolunteerSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="name">Full Name *</Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="mt-1"
                    />
                  </div>
                  <div>
                    <Label htmlFor="email">Email Address *</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="mt-1"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="phone">Phone Number *</Label>
                    <Input id="phone" name="phone" value={formData.phone} onChange={handleChange} required className="mt-1" />
                  </div>
                  <div>
                    <Label htmlFor="interest">Area of Interest *</Label>
                    <Input
                      id="interest"
                      name="interest"
                      placeholder="e.g., Workshop facilitation, Peer support, Digital outreach"
                      value={formData.interest}
                      onChange={handleChange}
                      required
                      className="mt-1"
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="message">Why do you want to volunteer with Manomitra? *</Label>
                  <Textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="mt-1"
                    placeholder="Tell us about your motivation and any relevant experience..."
                  />
                </div>

                <Button type="submit" className="w-full bg-[#ec9608] text-white" size="lg" disabled={isSubmittingVolunteer}>
                  {isSubmittingVolunteer ? "Submitting..." : "Submit Application"}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      )}
      {openPartner && (
        <div className="fixed inset-0 z-[99999] flex items-center justify-center bg-black/40">
          <Card className="relative rounded-3xl border-[#ec9608]/20 shadow-xl animate-fade-in bg-white dark:bg-black max-w-2xl mx-auto z-[100000]">
            <button
              type="button"
              className="absolute top-10 right-3 text-red-600 hover:text-red-800 text-2xl font-bold z-[110]"
              onClick={() => setOpenPartner(false)}
              aria-label="Close"
            >
              <X className="h-6 w-6" />
            </button>
            <CardHeader>
              <div className="text-center">
                <Handshake className="h-12 w-12 text-[#ec9608] mx-auto mb-4" />
                <CardTitle className="text-2xl text-[#ec9608] font-bold">Partnership Application</CardTitle>
                <p className="text-muted-foreground mt-2">
                  Interested in partnering with Manomitra? Fill out this form and we'll get in touch with you about collaboration opportunities.
                </p>
              </div>
            </CardHeader>
            <CardContent>
              <form onSubmit={handlePartnerSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="org">Organization Name *</Label>
                    <Input id="org" name="org" required className="mt-1" />
                  </div>
                  <div>
                    <Label htmlFor="contact">Contact Person *</Label>
                    <Input id="contact" name="contact" required className="mt-1" />
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="email">Email Address *</Label>
                    <Input id="email" name="email" type="email" required className="mt-1" />
                  </div>
                  <div>
                    <Label htmlFor="phone">Phone Number *</Label>
                    <Input id="phone" name="phone" required className="mt-1" />
                  </div>
                </div>
                <div>
                  <Label htmlFor="message">How would you like to partner with Manomitra? *</Label>
                  <Textarea id="message" name="message" rows={4} required className="mt-1" placeholder="Describe your partnership idea or area of collaboration..." />
                </div>
                <Button type="submit" className="w-full bg-[#ec9608] text-white" size="lg" disabled={isSubmittingPartner}>
                  {isSubmittingPartner ? "Submitting..." : "Submit Partnership Request"}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      )}
    </section>
  )
}
