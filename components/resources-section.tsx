"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Phone,
  BookOpen,
  Heart,
  ExternalLink,
} from "lucide-react";
import React, { useState } from "react";

export function ResourcesSection() {
  const [expandedSections, setExpandedSections] = useState<{ [key: number]: boolean }>({});

  const handleShowMore = (index: number) => {
    setExpandedSections((prev) => ({ ...prev, [index]: true }));
  };

  const resources = [
    {
      category: "Crisis Support",
      icon: Phone,
      items: [
        {
          name: "Nepal Mental Health Helpline",
          contact: "1660-01-77777",
          description: "24/7 crisis support in Nepali",
          link: "https://nepalmentalhealth.com/"
        },
        {
          name: "Transcultural Psychosocial Organization (TPO)",
          contact: "01-4102037",
          description: "Professional counseling services",
          link: "https://www.tponepal.org/"
        },
        {
          name: "Center for Mental Health and Counselling (CMC)",
          contact: "01-4169090",
          description: "Mental health support and therapy",
          link: "https://cmcnepal.org.np/"
        },
        {
          name: "KOSHISH National Mental Health Organization",
          contact: "01-5910465",
          description: "Advocacy and support for mental health",
          link: "https://koshish.org.np/"
        },
      ],
    },
    {
      category: "Self-Help Resources",
      icon: BookOpen,
      items: [
        {
          name: "Mental Health First Aid (USA)",
          link: "https://www.thenationalcouncil.org/our-work/mental-health-first-aid/",
          description: "How to help someone experiencing a mental health crisis (USA)"
        },
        {
          name: "Mental Health First Aid (Australia)",
          link: "https://www.mhfa.com.au/",
          description: "How to help someone experiencing a mental health crisis (Australia)"
        },
        {
          name: "Psychological First Aid (TPO Nepal)",
          link: "https://www.tponepal.org/psychological-first-aid-pfa/",
          description: "Psychological first aid resources from TPO Nepal"
        },
        {
          name: "Stress Management Techniques (Mayo Clinic)",
          link: "https://www.mayoclinic.org/healthy-lifestyle/stress-management/in-depth/stress-relievers/art-20047257",
          description: "Practical strategies for managing daily stress (Mayo Clinic)"
        },
        {
          name: "Stress Management Techniques (CMC Nepal PDF)",
          link: "https://www.cmcnepal.org.np/wp-content/uploads/2016/03/Stress-Mgmt.pdf",
          description: "Stress management guide from CMC Nepal (PDF)"
        },
        {
          name: "Stress Management (St. Xavier's College Nepal)",
          link: "https://www.sxc.edu.np/extensions/counselling-well-being/stress-management",
          description: "Stress management resources from St. Xavier's College"
        },
        {
          name: "Mindfulness Exercises (Calm Blog)",
          link: "https://www.calm.com/blog/mindfulness-exercises",
          description: "Simple meditation and breathing exercises (Calm Blog)"
        },
        {
          name: "Mindfulness Exercises (Healthline)",
          link: "https://www.healthline.com/health/mind-body/mindfulness-activities",
          description: "Mindfulness activities and exercises (Healthline)"
        },
        {
          name: "Antarman App (KOSHISH)",
          link: "https://koshish.org.np/mentalHealth",
          description: "Self-care resources and personality quiz from KOSHISH's Antarman app"
        },
      ],
    },
    {
      category: "Professional Support",
      icon: Heart,
      items: [
        {
          name: "Counselor Directory",
          link: "https://nepalmentalhealth.com/category/mentalhealthprofessionals/",
          description: "List of qualified mental health professionals in Nepal",
        },
        {
          name: "Support Group Locations (KOSHISH)",
          link: "https://koshish.org.np/",
          description: "Contact KOSHISH for peer support programs"
        },
        {
          name: "Support Group Locations (TPO Nepal)",
          link: "https://www.tponepal.org/",
          description: "Community-based psychosocial support from TPO Nepal"
        },
        {
          name: "Support Group Locations (CMC Nepal)",
          link: "https://cmcnepal.org.np/",
          description: "Group therapy and community-based support from CMC Nepal"
        },
        {
          name: "Mental Health Screening (KOSHISH Antarman App)",
          link: "https://koshish.org.np/mentalHealth",
          description: "Personality quiz and screening via KOSHISH's Antarman app"
        },
        {
          name: "Mental Health Screening (CMC Nepal)",
          link: "https://cmcnepal.org.np/",
          description: "Assessments and screenings from CMC Nepal"
        },
        {
          name: "Mental Health Screening (Nepal Mental Health)",
          link: "https://nepalmentalhealth.com/",
          description: "Information and screening tools from Nepal Mental Health"
        },
      ],
    },
  ];

  return (
    <section
      id="resources"
      className="relative py-20 px-4 sm:px-8 lg:px-16 min-h-[70vh] flex items-center justify-center overflow-hidden"
    >
      <div className="relative z-10 max-w-7xl w-full mx-auto flex flex-col items-center text-center">
        <div className="mb-12">
          <h2 className="text-4xl md:text-5xl font-extrabold text-[#ec9608] mb-4 animate-fade-in">
            Support & Resources
          </h2>
          <div className="flex justify-center mb-6 animate-fade-in">
            <span className="inline-block w-24 h-1 rounded-full bg-gradient-to-r from-[#ec9608] to-[#ec9608]/70"></span>
          </div>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed animate-fade-in">
            Access mental health resources, crisis support, and professional
            help. Remember, seeking help is a sign of strength, not weakness.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 mb-12">
          {resources.map((category, index) => {
            const isExpanded = expandedSections[index];
            const itemsToShow = isExpanded ? category.items : category.items.slice(0, 4);
            return (
              <Card
                key={index}
                className="rounded-xl border border-[#ec9608]/20 bg-white/95 dark:bg-black/40 shadow-sm"
              >
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <div className="bg-[#ec9608]/10 rounded-full p-2 flex items-center justify-center">
                      <category.icon className="h-6 w-6 text-[#ec9608]" />
                    </div>
                    <CardTitle className="text-lg text-[#ec9608] font-semibold text-left">
                      {category.category}
                    </CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-4">
                    {itemsToShow.map((item, itemIndex) => (
                      <li
                        key={itemIndex}
                        className="flex flex-col gap-2 bg-transparent rounded-md p-3 border-l-2 border-[#ec9608]/10"
                      >
                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                          <span className="font-semibold text-foreground text-base text-left">
                            {item.name}
                          </span>
                          {"link" in item && item.link && (
                            <a
                              href={item.link}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-[#ec9608] hover:text-[#ec9608]/80 text-lg flex items-center gap-1 sm:ml-2 sm:self-end"
                            >
                              <ExternalLink className="inline h-6 w-6" />
                            </a>
                          )}
                        </div>
                        {"contact" in item && item.contact && (
                          <div className="flex items-center gap-2 text-[#ec9608] font-mono text-base text-left">
                            <Phone className="inline h-5 w-5" />
                            <span>{String(item.contact)}</span>
                          </div>
                        )}
                        <span className="text-base text-muted-foreground text-left">
                          {item.description}
                        </span>
                      </li>
                    ))}
                  </ul>
                  {!isExpanded && category.items.length > 4 && (
                    <button
                      className="mt-4 text-[#ec9608] font-semibold hover:underline"
                      onClick={() => handleShowMore(index)}
                    >
                      Show More
                    </button>
                  )}
                </CardContent>
              </Card>
            );
          })}

        </div>
      </div>
    </section>
  );
}
