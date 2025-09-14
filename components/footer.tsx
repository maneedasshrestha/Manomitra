import { Heart, Mail, Phone, MapPin } from "lucide-react"
import Image from "next/image"
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa"

export function Footer() {
  return (
    <footer className="bg-foreground text-background py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Mission */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              
              <span className="text-xl font-bold text-[#ec9608]">MANOMITRA</span>
            </div>
            <p className="text-background/80 leading-relaxed mb-4">
              A youth-led initiative creating safe spaces for mental health awareness and peer support in Nepal's
              communities. Together, we're breaking stigma and building hope.
            </p>
            <div className="flex items-center space-x-2 text-sm text-white/60">
              <Heart className="h-4 w-4 text-[#ec9608]" />
              <span>Made with love by young volunteers in Nepal</span>
            </div>
            <div className="flex items-center space-x-2 mt-6">
              
              <a href="https://www.instagram.com/manomitra___/" target="_blank" rel="noopener noreferrer" className="hover:text-[#ec9608]">
                <FaInstagram className="h-5 w-5" />
              </a>
              <a href="https://www.linkedin.com/in/manomitra/" target="_blank" rel="noopener noreferrer" className="hover:text-[#ec9608]">
                <FaLinkedinIn className="h-5 w-5" />
              </a>
              <a href="https://www.facebook.com/profile.php?id=61566246874056&mibextid=LQQJ4d" target="_blank" rel="noopener noreferrer" className="hover:text-[#ec9608]">
                <FaFacebookF className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-background mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#home" className="text-background/80 hover:text-[#ec9608] transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#story" className="text-background/80 hover:text-[#ec9608] transition-colors">
                  Our Story
                </a>
              </li>
              <li>
                <a href="#services" className="text-background/80 hover:text-[#ec9608] transition-colors">
                  What We Do
                </a>
              </li>
              <li>
                <a href="#events" className="text-background/80 hover:text-[#ec9608] transition-colors">
                  Events
                </a>
              </li>
              <li>
                <a href="#team" className="text-background/80 hover:text-[#ec9608] transition-colors">
                  Team
                </a>
              </li>
              <li>
                <a href="#get-involved" className="text-background/80 hover:text-[#ec9608] transition-colors">
                  Get Involved
                </a>
              </li>
              <li>
                <a href="#resources" className="text-background/80 hover:text-[#ec9608] transition-colors">
                  Resources
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-bold text-background mb-4">Contact</h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-[#ec9608]" />
                <span className="text-background/80">hello@manomitra.org</span>
              </div>
              
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4 text-[#ec9608]" />
                <span className="text-background/80">Kathmandu, Nepal</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-background/20 mt-8 pt-8 text-center">
          <p className="text-background/60 text-sm">
            © 2024 Manomitra. All rights reserved. |
            <span className="text-background/80">
              {" "}
              Building mental health awareness across Nepal, one conversation at a time.
            </span>
          </p>
        </div>
      </div>
    </footer>
  )
}
