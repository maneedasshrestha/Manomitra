"use client"

import { useState } from "react"
import { useActiveSection } from "@/hooks/use-active-section"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import Image from "next/image"

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  const navItems = [
    { name: "Home", href: "#home" },
    { name: "Our Story", href: "#story" },
    { name: "What We Do", href: "#services" },
    { name: "Events", href: "#events" },
    { name: "Team", href: "#team" },
    { name: "Get Involved", href: "#get-involved" },
    { name: "Resources", href: "#resources" },
    { name: "Contact", href: "#contact" },
  ]

  const activeSection = useActiveSection(navItems)

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-3">
            {/* <Image
              src="/images/logo_small.jpg"
              alt="Manomitra Logo"
              width={300}
              height={80}
              className="rounded-lg"
            /> */}
            <span className="text-xl font-bold text-primary">MANOMITRA</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className={`text-sm font-medium transition-colors duration-200 px-2 py-1 rounded-md ${activeSection === item.href ? "text-accent font-bold" : "text-foreground hover:text-primary"}`}
              >
                {item.name}
              </a>
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button variant="ghost" size="sm" onClick={() => setIsOpen(!isOpen)} className="p-2">
              {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-background border-t border-border">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className={`block px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${activeSection === item.href ? "text-accent font-bold" : "text-foreground hover:text-primary"}`}
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
