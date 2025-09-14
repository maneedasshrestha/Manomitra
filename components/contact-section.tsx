"use client"

import React, { useState } from "react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Mail, Phone, MapPin } from "lucide-react"
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [copied, setCopied] = useState<string | null>(null)
  const [sending, setSending] = useState(false)
  const [sent, setSent] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setSending(true)
    setError(null)
    setSent(false)
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      })
      if (res.ok) {
        setSent(true)
        setFormData({ name: "", email: "", subject: "", message: "" })
      } else {
        const data = await res.json()
        setError(data.error || "Failed to send message")
      }
    } catch {
      setError("Failed to send message")
    }
    setSending(false)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  const handleCopy = (value: string) => {
    navigator.clipboard.writeText(value)
    setCopied(value)
    setTimeout(() => setCopied(null), 1200)
  }

  return (
    <section id="contact" className="relative py-20 px-4 sm:px-8 lg:px-16 min-h-[70vh] flex items-center justify-center overflow-hidden">
      {/* Animated accent background for cohesion */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="w-[60vw] h-[60vw] max-w-2xl max-h-2xl bg-gradient-to-tr from-[#ec9608]/30 via-[#ec9608]/10 to-[#ec9608]/40 rounded-full blur-3xl opacity-30 absolute top-0 left-1/2 -translate-x-1/2 animate-blob2" />
        <div className="w-[40vw] h-[40vw] max-w-xl max-h-xl bg-gradient-to-br from-[#ec9608]/20 via-[#ec9608]/5 to-[#ec9608]/30 rounded-full blur-2xl opacity-20 absolute bottom-0 right-1/3 animate-blob3" />
      </div>
      <div className="relative z-10 max-w-7xl w-full mx-auto flex flex-col items-center">
        <div className="mb-12 w-full flex flex-col items-center justify-center">
          <h2 className="text-4xl md:text-5xl font-extrabold text-[#ec9608] mb-4 animate-fade-in text-center">Contact Us</h2>
          <div className="flex justify-center mb-6 animate-fade-in">
            <span className="inline-block w-24 h-1 rounded-full bg-gradient-to-r from-[#ec9608] to-[#ec9608]/70"></span>
          </div>
          <p className="text-lg text-muted-foreground max-w-3xl leading-relaxed animate-fade-in text-center">
            Have questions, want to collaborate, or need support? We'd love to hear from you. Our team typically responds within 24 hours.
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 w-full">
          {/* Contact Information */}
          <Card className="rounded-3xl border-[#ec9608]/20 shadow-xl bg-white/60 dark:bg-black/40 animate-fade-in text-left h-full">
            <CardHeader>
              <CardTitle className="text-2xl text-[#ec9608] font-bold mb-2 text-left">Get in Touch</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4 mb-4">
                <div className="flex items-start space-x-4">
                  <div className="bg-[#ec9608]/10 rounded-lg p-3 flex items-center justify-center">
                    <Mail className="h-6 w-6 text-[#ec9608]" />
                  </div>
                  <div>
                    <h4 className="font-medium text-foreground mb-1 text-left">Email</h4>
                    <div className="flex items-center space-x-2">
                      <button
                        type="button"
                        className="text-[#ec9608] font-mono text-left underline hover:text-[#ec9608]/80 focus:outline-none"
                        onClick={() => handleCopy("manomitra024@gmail.com")}
                      >
                        manomitra024@gmail.com
                        {copied === "manomitra024@gmail.com" && (
                          <span className="block mt-1 text-xs bg-green-50 text-green-600 rounded px-2 py-0.5 opacity-80">Copied!</span>
                        )}
                      </button>
                    </div>
                    <p className="text-sm text-muted-foreground text-left">For general inquiries and partnerships</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-[#ec9608]/10 rounded-lg p-3 flex items-center justify-center">
                    <MapPin className="h-6 w-6 text-[#ec9608]" />
                  </div>
                  <div>
                    <h4 className="font-medium text-foreground mb-1 text-left">Location</h4>
                    <p className="text-[#ec9608] font-mono text-left">Kathmandu, Nepal</p>
                    <p className="text-sm text-muted-foreground text-left">Serving communities across Nepal</p>
                  </div>
                </div>
              </div>
              <div>
                <h4 className="font-medium text-foreground mb-4 text-left">Follow Us</h4>
                <div className="flex space-x-4">
                  <Button
                    variant="outline"
                    size="sm"
                    className="border-[#ec9608] text-[#ec9608] hover:bg-[#ec9608]/10"
                    asChild
                  >
                    <a href="https://www.instagram.com/manomitra___/" target="_blank" rel="noopener noreferrer">
                      <FaInstagram className="h-7 w-7" />
                    </a>
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    className="border-[#ec9608] text-[#ec9608] hover:bg-[#ec9608]/10"
                    asChild
                  >
                    <a href="https://www.facebook.com/profile.php?id=61566246874056&mibextid=LQQJ4d" target="_blank" rel="noopener noreferrer">
                      <FaFacebookF className="h-7 w-7" />
                    </a>
                  </Button>
                  
                  <Button
                    variant="outline"
                    size="sm"
                    className="border-[#ec9608] text-[#ec9608] hover:bg-[#ec9608]/10"
                    asChild
                  >
                    <a href="https://www.linkedin.com/in/manomitra/" target="_blank" rel="noopener noreferrer">
                      <FaLinkedinIn className="h-7 w-7" />
                    </a>
                  </Button>
                </div>
                <p className="text-sm text-muted-foreground mt-2 text-left">Stay updated with our latest events and mental health resources</p>
              </div>
            </CardContent>
          </Card>
          {/* Contact Form */}
          <Card className="rounded-3xl border-[#ec9608]/20 shadow-xl bg-white/60 dark:bg-black/40 animate-fade-in text-left h-full flex flex-col justify-between">
            <CardHeader>
              <CardTitle className="text-xl text-[#ec9608] text-left">Send us a Message</CardTitle>
              <p className="text-muted-foreground text-left">Whether you have questions, want to collaborate, or need support, we're here to help.</p>
            </CardHeader>
            <CardContent className="flex-1 flex flex-col justify-center">
              <form onSubmit={handleSubmit} className="space-y-6 text-left">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="contact-name" className="text-left">Name *</Label>
                    <Input
                      id="contact-name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="mt-1 text-left border-2 border-[#ec9608]/40 focus:border-[#ec9608] focus:ring-[#ec9608]/20 rounded-xl"
                    />
                  </div>
                  <div>
                    <Label htmlFor="contact-email" className="text-left">Email *</Label>
                    <Input
                      id="contact-email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="mt-1 text-left border-2 border-[#ec9608]/40 focus:border-[#ec9608] focus:ring-[#ec9608]/20 rounded-xl"
                    />
                  </div>
                </div>
                <div>
                  <Label htmlFor="contact-subject" className="text-left">Subject</Label>
                  <Input
                    id="contact-subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="mt-1 text-left border-2 border-[#ec9608]/40 focus:border-[#ec9608] focus:ring-[#ec9608]/20 rounded-xl"
                    placeholder="What's this about?"
                  />
                </div>
                <div>
                  <Label htmlFor="contact-message" className="text-left">Message *</Label>
                  <Textarea
                    id="contact-message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="mt-1 text-left border-2 border-[#ec9608]/40 focus:border-[#ec9608] focus:ring-[#ec9608]/20 rounded-xl min-h-[80px]"
                    placeholder="Tell us how we can help you..."
                  />
                </div>
                <Button type="submit" className="w-full bg-[#ec9608] hover:bg-[#ec9608]/90 text-white text-lg font-semibold py-3 rounded-xl transition-colors duration-200 flex items-center justify-center gap-2" size="lg" disabled={sending}>
                  <Mail className="mr-2 h-5 w-5" />
                  {sending ? "Sending..." : "Send Message"}
                </Button>
                {sent && (
                  <p className="mt-2 text-green-600 text-sm">Message sent! We'll get back to you soon.</p>
                )}
                {error && (
                  <p className="mt-2 text-red-600 text-sm">{error}</p>
                )}
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
