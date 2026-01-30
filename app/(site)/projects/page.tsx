"use client";

import React, { useEffect, useState, Suspense } from "react";
import { useRouter, useSearchParams } from "next/navigation";

function ProjectsContent() {
  // ✅ ALL HOOKS AT THE TOP
  const router = useRouter();
  const searchParams = useSearchParams();

  const locale = searchParams.get("locale") || "en";

  const [translations, setTranslations] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [selectedTopic, setSelectedTopic] = useState<string>("all");

  // ✅ Dynamic import (client-safe)
  useEffect(() => {
    setLoading(true);

    import(`../../locales/${locale}.json`)
      .then((data) => setTranslations(data))
      .catch((err) =>
        console.error(`Error loading locale ${locale}`, err)
      )
      .finally(() => setLoading(false));
  }, [locale]);

  // ✅ Conditional return AFTER all hooks
  if (loading || !translations) {
    return <p className="text-center mt-10">Loading projects...</p>;
  }

  const allProjects = [
    {
      id: "sap1",
      topic: "VLSI",
      title: translations.projects.projectTitles.sap1,
      description: translations.projects.projectSummaries.sap1,
    },
    {
      id: "hospital",
      topic: "Web Development",
      title: translations.projects.projectTitles.hospital,
      description: translations.projects.projectSummaries.hospital,
    },
    {
      id: "lighting",
      topic: "Automation / IOT",
      title: translations.projects.projectTitles.lighting,
      description: translations.projects.projectSummaries.lighting,
    },
    {
      id: "handwash",
      topic: "Automation / IOT",
      title: translations.projects.projectTitles.handwash,
      description: translations.projects.projectSummaries.handwash,
    },
    {
      id: "retinopathy",
      topic: "AI/ ML",
      title: translations.projects.projectTitles.retinopathy,
      description: translations.projects.projectSummaries.retinopathy,
    },
    {
      id: "sleep",
      topic: "AI/ ML",
      title: translations.projects.projectTitles.sleep,
      description: translations.projects.projectSummaries.sleep,
    },
    {
      id: "speech",
      topic: "AI/ ML",
      title: translations.projects.projectTitles.speech,
      description: translations.projects.projectSummaries.speech,
    },
  ];

  const filteredProjects =
    selectedTopic === "all"
      ? allProjects
      : allProjects.filter((p) => p.topic === selectedTopic);

  return (
    <div className="container mx-auto py-20 px-6">
      <h1 className="text-3xl md:text-4xl text-navy font-bold mb-8 text-center">
        {translations.projects.title}
      </h1>

      <div className="flex flex-wrap gap-3 justify-center mb-12">
        {[
          { key: "all", label: translations.projects.showAll },
          { key: "VLSI", label: "VLSI" },
          { key: "Web Development", label: "Web Development" },
          { key: "Automation / IOT", label: "Automation / IOT" },
          { key: "AI/ ML", label: "AI / ML" },
        ].map((item) => (
          <button
            key={item.key}
            onClick={() => setSelectedTopic(item.key)}
            className={`px-5 py-2 rounded-full text-sm font-medium transition
              ${
                selectedTopic === item.key
                  ? "bg-navy text-white"
                  : "bg-ash-light text-navy hover:bg-navy hover:text-white"
              }`}
          >
            {item.label}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {filteredProjects.map((project) => (
          <div
            key={project.id}
            className="p-6 bg-ash-light rounded-xl shadow-sm hover:shadow-md"
          >
            <h2 className="text-xl font-bold text-navy mb-2">
              {project.title}
            </h2>
            <p className="text-sm text-ash-dark">
              {project.description}
            </p>

            <button
              onClick={() =>
                router.push(`/projects/${project.id}?locale=${locale}`)
              }
              className="mt-5 px-5 py-2 bg-accent text-white rounded-lg hover:bg-accent-light"
            >
              {translations.projects.detailsButton}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

// ✅ Suspense wrapper (correct usage)
export default function Projects() {
  return (
    <Suspense fallback={<p className="text-center mt-10">Loading page...</p>}>
      <ProjectsContent />
    </Suspense>
  );
}
