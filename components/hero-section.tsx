"use client";
import { Button } from "@/components/ui/button";
import { Heart, Users, MessageCircle } from "lucide-react";
import Image from "next/image";

export function HeroSection() {
  return (
    <section
      id="home"
      className="relative pt-24 pb-20 px-4 sm:px-8 lg:px-16 min-h-[80vh] flex items-center justify-center bg-gradient-to-br from-[#ec9608]/10 via-background to-[#ec9608]/30 overflow-hidden"
    >
      <div className="absolute inset-0 pointer-events-none z-0">
        {/* Animated gradient blobs */}
        <div className="w-96 h-96 bg-gradient-to-tr from-[#ec9608]/40 via-[#ec9608]/20 to-[#ec9608]/60 rounded-full blur-3xl opacity-40 absolute top-0 left-1/2 -translate-x-1/2 animate-blob1" />
        <div className="w-72 h-72 bg-gradient-to-br from-[#ec9608]/30 via-[#ec9608]/10 to-[#ec9608]/50 rounded-full blur-2xl opacity-30 absolute bottom-0 right-1/3 animate-blob2" />
        <div className="w-64 h-64 bg-gradient-to-tl from-[#ec9608]/30 via-[#ec9608]/10 to-[#ec9608]/50 rounded-full blur-2xl opacity-20 absolute top-1/3 left-1/4 animate-blob3" />
      </div>
      <div className="relative z-10 max-w-5xl w-full mx-auto flex flex-col items-center text-center">
        {/* Subtle animated blob background for main content */}
        <div className="absolute -z-10 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[60%] bg-gradient-to-br from-[#ec9608]/10 via-[#ec9608]/20 to-[#ec9608]/5 rounded-full blur-2xl opacity-30 animate-blob2" />
        <div className="backdrop-blur-xl bg-white/60 dark:bg-black/40 rounded-3xl shadow-2xl p-10 border border-[#ec9608]/20 w-full">
          <div className="relative flex justify-center items-center mb-6">
            <span className="absolute w-[240px] h-[240px] rounded-full bg-gradient-to-tr from-[#ec9608] via-[#ec9608] to-[#ec9608] opacity-40 blur-2xl animate-pulse" />
            <span className="absolute w-[180px] h-[180px] rounded-full border-4 border-[#ec9608]/30 animate-spin-slow" />
            <Image
              src="/images/logo.jpg"
              alt="Manomitra Logo"
              width={200}
              height={200}
              className="relative mx-auto rounded-full shadow-xl z-10 animate-fade-in"
            />
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-[#ec9608] mb-2 animate-fade-in">
            Welcome to Manomitra
          </h1>
          <div className="flex justify-center mb-6 animate-fade-in">
            <span className="inline-block w-24 h-1 rounded-full bg-gradient-to-r from-[#ec9608] to-[#ec9608]/70"></span>
          </div>
          <p className="text-xl md:text-2xl text-muted-foreground mb-6 max-w-2xl mx-auto animate-fade-in">
            A Safe Space for Mental Health Awareness in Nepal's Communities
          </p>
          {/* <p className="text-lg text-foreground mb-10 max-w-3xl mx-auto leading-relaxed animate-fade-in">
            We are a youth-led initiative dedicated to breaking the stigma around mental health in Nepal. Through peer support, community workshops, and accessible resources, we're creating a movement where young people can openly discuss mental health and support each other.
          </p> */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 animate-fade-in">
            <Button
              size="lg"
              className="px-8 bg-[#ec9608] py-3 text-lg font-semibold shadow-md border-2 border-[#ec9608]"
              onClick={() => {
                const el = document.getElementById('get-involved');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              <Users className="mr-2 h-5 w-5" />
              Join as a Volunteer
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="px-8 py-3 text-lg bg-transparent font-semibold border border-[#ec9608] text-[#ec9608]"
              onClick={() => {
                const el = document.getElementById('contact');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              <Heart className="mr-2 h-5 w-5 text-[#ec9608]" />
              Find Support
            </Button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="bg-[#ec9608]/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 animate-fade-in">
                <Users className="h-8 w-8 text-[#ec9608]" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Youth-Led</h3>
              <p className="text-muted-foreground text-sm">
                By young people, for young people - understanding the unique
                challenges we face
              </p>
            </div>
            <div className="text-center">
              <div className="bg-[#ec9608]/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 animate-fade-in">
                <MessageCircle className="h-8 w-8 text-[#ec9608]" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Peer Support</h3>
              <p className="text-muted-foreground text-sm">
                Safe spaces for honest conversations and mutual support among
                peers
              </p>
            </div>
            <div className="text-center">
              <div className="bg-[#ec9608]/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 animate-fade-in">
                <Heart className="h-8 w-8 text-[#ec9608]" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Community Focus</h3>
              <p className="text-muted-foreground text-sm">
                Building awareness and breaking stigma within Nepal's
                communities
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
