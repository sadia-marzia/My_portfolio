"use client";

import { useSearchParams } from "next/navigation";
import en from "../locales/en.json";
import bn from "../locales/bn.json";

import Link from "next/link";
import {
  FaUser,
  FaGraduationCap,
  FaProjectDiagram,
  FaEnvelope,
} from "react-icons/fa";
import { AiOutlineFileSearch } from "react-icons/ai";
const translationsMap: Record<string, any> = {
  en,
  bn,
};

export default function HomePage() {
  const params = useSearchParams();
  const locale = params.get("locale") || "en";
  const translations = require(`../locales/${locale}.json`);
  const { welcome, intro, about2, skills2, education2, experience2, contact2 } = translations;

  return (
    <div className="container mx-auto px-6 py-16 max-w-6xl space-y-20">

      {/* ===== HERO ===== */}
      <section className="text-center px-4">
        <h1
          className="font-extrabold text-navy leading-tight"
          style={{
            fontSize: "clamp(1.5rem, 6vw, 3rem)", // Minimum 2.5rem, maximum 4rem, scales with viewport width
          }}
        >
          {welcome}
        </h1>
        <p className="mt-6 text-gray-700 max-w-3xl mx-auto text-justify text-base md:text-lg lg:text-xl">
          {intro}
        </p>
      </section>


      {/* ===== ABOUT ME ===== */}
      <section id="about" className="space-y-6 px-4 md:px-0">
        {/* Responsive Heading */}
        <h2
          className="font-bold text-navy mb-4 text-center"
          style={{ fontSize: "clamp(1.8rem, 5vw, 2.5rem)" }} // scales smoothly
        >
          {about2.heading}
        </h2>

        {/* Paragraphs */}
        <div className="text-gray-700 text-justify space-y-4"
            style={{ fontSize: "clamp(1rem, 2.5vw, 1.125rem)", lineHeight: "1.7" }}>
          <p>{about2.paragraph1}</p>
          <p>{about2.paragraph2}</p>
          <p>{about2.paragraph3}</p>
        </div>

        {/* Button */}
        <div className="text-center mt-6">
          <Link
            href="/about"
            className="px-6 py-2 bg-navy text-white rounded-lg hover:bg-navy-dark transition"
          >
            Learn More About Me
          </Link>
        </div>
      </section>

      {/* ===== SKILLS ===== */}
      <section id="skills" className="space-y-6">
        <h2 className="text-3xl font-bold text-navy mb-8 text-center">{skills2.heading}</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {skills2.groups.map((group: any, idx: number) => (
            <div key={idx} className="p-6 bg-ash-light rounded-xl shadow-sm hover:shadow-md transition-all duration-200">
              <h3 className="font-semibold text-navy mb-3">{group.title}</h3>
              <ul className="list-disc list-inside text-gray-700 space-y-1">
                {group.items.map((item: string, i: number) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="text-center mt-6">
          <Link href="/about#skills" className="px-6 py-2 bg-navy text-white rounded-lg hover:bg-navy-dark transition">
            View All Skills
          </Link>
        </div>
      </section>

      {/* ===== EDUCATION ===== */}
      <section id="education" className="space-y-6">
        <h2 className="text-3xl font-bold text-navy mb-6 text-center">{education2.heading}</h2>
        <ul className="space-y-4">
          {education2.list.map((edu: any, idx: number) => (
            <li key={idx} className="p-6 bg-ash-light rounded-xl shadow-sm hover:shadow-md transition-all duration-200">
              <h3 className="text-xl font-bold text-navy">{edu.institution}</h3>
              <p className="text-gray-700 font-medium">{edu.degree}</p>
              {edu.result && <p className="text-gray-600 text-sm mt-1">{edu.result}</p>}
              <div className="flex flex-col sm:flex-row sm:justify-between text-gray-500 text-sm mt-2">
                <span>{edu.year}</span>
                {edu.location && <span>{edu.location}</span>}
              </div>
            </li>
          ))}
        </ul>
        <div className="text-center mt-6">
          <Link href="/about#education" className="px-6 py-2 bg-navy text-white rounded-lg hover:bg-navy-dark transition">
            View Details
          </Link>
        </div>
      </section>

      {/* ===== EXPERIENCE ===== */}
      <section id="experience" className="space-y-6">
        <h2 className="text-3xl font-bold text-navy mb-6 text-center">{experience2.heading}</h2>
        <ul className="space-y-4">
          {experience2.list.map((exp: any, idx: number) => (
            <li key={idx} className="p-6 bg-ash-light rounded-xl shadow-sm hover:shadow-md transition-all duration-200">
              <h3 className="text-xl font-bold text-navy">{exp.position}</h3>
              <p className="text-gray-700">{exp.company}</p>
              <div className="flex justify-between text-gray-500 text-sm mt-1">
                <span>{exp.period}</span>
                <span>{exp.location}</span>
              </div>
              <p className="text-gray-600 text-sm mt-2">{exp.description}</p>
            </li>
          ))}
        </ul>
        <div className="text-center mt-6">
          <Link href="/experience" className="px-6 py-2 bg-navy text-white rounded-lg hover:bg-navy-dark transition">
            View Full Experience
          </Link>
        </div>
      </section>

      {/* ===== CONTACT ===== */}
      <section id="contact" className="space-y-6">
        <h2 className="text-3xl font-bold text-navy mb-6 text-center">{contact2.heading}</h2>
        <p className="text-gray-700 text-justify max-w-3xl mx-auto">{contact2.description}</p>
        <div className="grid sm:grid-cols-2 gap-6 mt-6 ">
          {contact2.links.map((link: any, idx: number) => (
            <a
              key={idx}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center p-6 bg-ash-light rounded-xl shadow-sm hover:shadow-md transition-all duration-200"
            >
              <span className="text-2xl text-navy mr-3">📌</span>
              <div>
                <h3 className="text-lg font-semibold text-navy">{link.title}</h3>
                <p className="text-gray-600 text-sm break-all">{link.label}</p>
              </div>
            </a>
          ))}
        </div>
        <div className="text-center mt-6">
          <Link href="/contact" className="px-6 py-2 bg-navy text-white rounded-lg hover:bg-navy-dark transition">
            View Details
          </Link>
        </div>
      </section>
    </div>
  );
}
