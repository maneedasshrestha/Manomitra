"use client";
import { Card, CardContent } from "@/components/ui/card"
import { Heart, Star, Users } from "lucide-react"
import { useState, useEffect, useRef } from "react"

export function TeamSection() {
  const teamMembers = [
    {
      name: "Puja Khanal",
      role: "Youth Advocate & Founder",
      bio: "Psychology student passionate about breaking mental health stigma in Nepal. Started Manomitra after experiencing the lack of youth-friendly mental health resources.",
      image: "/young-nepali-woman-smiling-confident-psychology-st.jpg",
    },
    {
      name: "lorem",
      role: "Co-founder",
      bio: "Social work student who believes in the power of peer connections. Leads our support groups and trains new volunteers in active listening.",
      image: "/young-nepali-man-friendly-approachable-social-work.jpg",
    },
    {
      name: "lorem",
      role: "Advisor/Mentor",
      bio: "Education major with experience in community outreach. Designs and leads our awareness workshops in schools and colleges across Nepal.",
      image: "/young-nepali-woman-teacher-educator-workshop-facil.jpg",
    },
    {
      name: "Prerana Magar",
      role: "Research Officer",
      bio: "Computer science student managing our online presence and digital campaigns. Creates content that resonates with young people across Nepal.",
      image: "/team/prerana.jpg",
    },
    {
      name: "lorem",
      role: "IT Officer",
      bio: "Public health student focused on creating accessible mental health resources. Works on connecting youth with professional counseling services.",
      image: "/young-nepali-woman-public-health-student-caring-pr.jpg",
    },
    {
      name: "Kusum Bhusal",
      role: "Volunteer Lead",
      bio: "Sociology student building bridges between Manomitra and local communities. Organizes community events and awareness campaigns.",
      image: "/young-nepali-man-community-organizer-sociology-stu.jpg",
    },
    {
      name: "Dila KC",
      role: "Social Media Lead",
      bio: "Sociology student building bridges between Manomitra and local communities. Organizes community events and awareness campaigns.",
      image: "/team/dila.jpg",
    },
    {
      name: "Pragya Chaudhary",
      role: "Content & Engagement Lead",
      bio: "Sociology student building bridges between Manomitra and local communities. Organizes community events and awareness campaigns.",
      image: "/young-nepali-man-community-organizer-sociology-stu.jpg",
    },
  ]

  const [liked, setLiked] = useState(Array(teamMembers.length).fill(false));
  const handleLike = (idx: number) => {
    setLiked((prev) => {
      const updated = [...prev];
      updated[idx] = !updated[idx];
      return updated;
    });
  };

  function useCountUp(target: number, duration: number = 1200) {
    const [count, setCount] = useState(0);
    const ref = useRef<number>(0);
    useEffect(() => {
      let start = 0;
      let end = target;
      let increment = end / (duration / 16);
      function step() {
        start += increment;
        if (start < end) {
          setCount(Math.floor(start));
          ref.current = requestAnimationFrame(step);
        } else {
          setCount(end);
          cancelAnimationFrame(ref.current);
        }
      }
      step();
      return () => cancelAnimationFrame(ref.current);
    }, [target, duration]);
    return count;
  }

  function useCountUpWhenVisible(target: number, ref: React.RefObject<HTMLDivElement>, duration: number = 1200) {
    const [count, setCount] = useState(0);
    const [started, setStarted] = useState(false);
    useEffect(() => {
      if (!ref.current) return;
      const observer = new window.IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting && !started) {
            setStarted(true);
          }
        },
        { threshold: 0.3 }
      );
      observer.observe(ref.current);
      return () => observer.disconnect();
    }, [ref, started]);
    useEffect(() => {
      if (!started) return;
      let start = 0;
      let end = target;
      let increment = end / (duration / 16);
      let frame: number;
      function step() {
        start += increment;
        if (start < end) {
          setCount(Math.floor(start));
          frame = requestAnimationFrame(step);
        } else {
          setCount(end);
          cancelAnimationFrame(frame);
        }
      }
      step();
      return () => cancelAnimationFrame(frame);
    }, [started, target, duration]);
    return count;
  }

  const joinRef = useRef<HTMLDivElement>(null);
  const volunteers = useCountUpWhenVisible(25, joinRef);
  const years = useCountUpWhenVisible(2, joinRef);
  const lives = useCountUpWhenVisible(1000, joinRef);

  return (
    <section id="team" className="relative py-20 px-4 sm:px-8 lg:px-16 min-h-[70vh] flex items-center justify-center overflow-hidden">
      {/* Animated gradient blob background for cohesion with other sections */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="w-[60vw] h-[60vw] max-w-2xl max-h-2xl bg-gradient-to-tr from-[#ec9608]/30 via-[#ec9608]/10 to-[#ec9608]/40 rounded-full blur-3xl opacity-30 absolute top-0 left-1/2 -translate-x-1/2 animate-blob2" />
        <div className="w-[40vw] h-[40vw] max-w-xl max-h-xl bg-gradient-to-br from-[#ec9608]/20 via-[#ec9608]/5 to-[#ec9608]/30 rounded-full blur-2xl opacity-20 absolute bottom-0 right-1/3 animate-blob3" />
      </div>
      <div className="relative z-10 max-w-7xl w-full mx-auto flex flex-col items-center text-center">
        <div className="mb-12">
          <h2 className="text-4xl md:text-5xl font-extrabold text-[#ec9608] mb-4 animate-fade-in">Meet Our Team</h2>
          <div className="flex justify-center mb-6 animate-fade-in">
            <span className="inline-block w-24 h-1 rounded-full bg-gradient-to-r from-[#ec9608] to-[#ec9608]/70"></span>
          </div>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed animate-fade-in">
            The passionate young volunteers behind Manomitra. Each team member brings their unique perspective and dedication to creating positive change in Nepal's mental health landscape.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mb-12">
          {teamMembers.map((member, index) => (
            <Card key={index} className="rounded-3xl border-[#ec9608]/20 hover:border-[#ec9608]/40 transition-colors duration-300 shadow-xl bg-white/60 dark:bg-black/40 animate-fade-in">
              <CardContent className="p-8">
                <div className="text-center">
                  <div className="relative mb-4 flex justify-center items-center">
                    <img
                      src={member.image || "/placeholder.svg"}
                      alt={member.name}
                      className="w-40 h-40 rounded-full mx-auto object-cover border-4 border-[#ec9608]/30 shadow-lg"
                    />
                    <button
                      type="button"
                      className={`absolute -bottom-2 -right-2 rounded-full p-2 shadow-md transition-colors ${liked[index] ? 'bg-[#ec9608]' : 'bg-white border border-[#ec9608]'}`}
                      aria-label={`Like ${member.name}`}
                      onClick={() => handleLike(index)}
                    >
                      <Heart className={`h-4 w-4 ${liked[index] ? 'fill-[#ec9608] text-white' : 'text-[#ec9608]'}`} />
                    </button>
                  </div>
                  <h3 className="text-lg font-bold text-[#ec9608] mb-1">{member.name}</h3>
                  <p className="text-[#ec9608] font-medium mb-3">{member.role}</p>
                  <p className="text-sm text-muted-foreground leading-relaxed">{member.bio}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        <div ref={joinRef} className="w-full">
          <div className="bg-white/60 dark:bg-black/40 rounded-3xl p-10 text-center shadow-xl animate-fade-in border border-[#ec9608]/20 relative overflow-hidden">
            {/* Animated blob accent */}
            <div className="absolute left-1/2 top-0 -translate-x-1/2 w-full h-32 bg-gradient-to-r from-[#ec9608]/20 via-[#ec9608]/10 to-[#ec9608]/30 rounded-b-full blur-xl opacity-40" />
            <div className="flex justify-center space-x-8 mb-6 relative z-10">
              <div className="text-center">
                <div className="bg-[#ec9608]/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-2">
                  <Users className="h-8 w-8 text-[#ec9608]" />
                </div>
                <p className="text-2xl font-bold text-[#ec9608]">{volunteers}+</p>
                <p className="text-sm text-muted-foreground">Active Volunteers</p>
              </div>
              <div className="text-center">
                <div className="bg-[#ec9608]/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-2">
                  <Star className="h-8 w-8 text-[#ec9608]" />
                </div>
                <p className="text-2xl font-bold text-[#ec9608]">{years}+</p>
                <p className="text-sm text-muted-foreground">Years Active</p>
              </div>
              <div className="text-center">
                <div className="bg-[#ec9608]/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-2">
                  <Heart className="h-8 w-8 text-[#ec9608]" />
                </div>
                <p className="text-2xl font-bold text-[#ec9608]">{lives}+</p>
                <p className="text-sm text-muted-foreground">Lives Touched</p>
              </div>
            </div>
            <h3 className="text-xl font-bold text-[#ec9608] mb-3 relative z-10">Join Our Growing Team</h3>
            <div className="flex justify-center mb-6 relative z-10">
              <span className="inline-block w-16 h-1 rounded-full bg-gradient-to-r from-[#ec9608] to-[#ec9608]/70"></span>
            </div>
            <p className="text-muted-foreground max-w-2xl mx-auto relative z-10">
              We're always looking for passionate young people who want to make a difference in their communities. No prior experience needed - just a caring heart and willingness to learn.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
