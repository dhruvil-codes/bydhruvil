"use client";

import React from "react";
import { Crosshairs } from "@/components/ui/crosshairs";

interface EducationItem {
  name: string;
  location: string;
  graduation: string;
  gpa: string;
  url: string;
}

const education: EducationItem[] = [
  {
    name: "MCT Rajiv Gandhi Institute of Technology",
    location: "Mumbai, India",
    graduation: "2026",
    gpa: "7.00/10 CGPA",
    url: "https://www.mctrgit.ac.in",
  },
  {
    name: "Thakur Polytechnic",
    location: "Mumbai, India",
    graduation: "2023",
    gpa: "3rd Rank in Department",
    url: "https://www.tpoly.org.in",
  },
];

export default function Education() {
  return (
    <section id="education" className="relative border-x border-edge screen-line-before screen-line-after">
      <Crosshairs top={true} bottom={true} />
      <header className="screen-line-after px-4 py-3 sm:px-6">
        <h2 className="font-semibold tracking-tight text-foreground text-xl">Education</h2>
      </header>
      <div className="p-4 sm:p-6 space-y-8">
        {education.map((school) => (
          <article
            key={school.name}
            className="first:mt-0"
            itemScope
            itemType="https://schema.org/EducationalOrganization"
          >
            <div className="flex flex-col sm:flex-row sm:justify-between">
              <h3 className="text-base font-semibold">
                <a
                  href={school.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  itemProp="name"
                  className="hover:text-foreground/80 transition-colors"
                >
                  {school.name}
                </a>
              </h3>
              <p
                className="text-base font-semibold"
                itemProp="address"
                itemScope
                itemType="https://schema.org/PostalAddress"
              >
                <span itemProp="addressLocality">{school.location}</span>
              </p>
            </div>
            <div className="flex flex-col sm:flex-row sm:justify-between">
              <p className="mt-2 text-sm sm:text-base font-medium leading-6 text-muted-foreground">
                <span itemProp="award">{school.gpa}</span>
              </p>
              <p className="mt-2 text-sm sm:text-base font-medium leading-6 text-muted-foreground">
                {school.graduation.startsWith("Expected") ? "" : "Graduated: "}
                <span>{school.graduation}</span>
              </p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
