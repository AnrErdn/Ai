"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function ResumePage() {
  const projects = [
    {
      title: "Project One",
      description: "A short description of project one.",
      tech: "Next.js, Tailwind CSS, Framer Motion",
      image: "/images/project1.jpg",
      link: "#",
    },
    {
      title: "Project Two",
      description: "A short description of project two.",
      tech: "React, Tailwind CSS",
      image: "/images/project2.jpg",
      link: "#",
    },
  ];

  const skills = ["JavaScript", "TypeScript", "React", "Next.js", "Tailwind CSS", "Framer Motion"];

  const experiences = [
    {
      role: "Frontend Developer",
      company: "ABC Company",
      period: "2023 - Present",
      description: "Built responsive and interactive web applications.",
    },
    {
      role: "Junior Developer",
      company: "XYZ Startup",
      period: "2021 - 2023",
      description: "Worked on multiple projects using modern JS frameworks.",
    },
  ];

  return (
    <main className="min-h-screen bg-white text-gray-900 p-8 md:p-16 space-y-20">
      
      {/* INTRODUCTION */}
      <section className="text-center space-y-4">
        <motion.h1
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl font-bold"
        >
          Hi, I'm Anar-Erdene
        </motion.h1>
        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto"
        >
          A passionate developer crafting minimalistic, interactive, and engaging web experiences.
        </motion.p>
      </section>

      {/* PROJECTS */}
      <section className="space-y-8">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-3xl font-semibold text-center"
        >
          Projects
        </motion.h2>
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
              className="border rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300"
            >
              <div className="w-full h-64 bg-gray-200 flex items-center justify-center text-gray-500 text-lg">
                Image Placeholder
              </div>
              <div className="p-4 space-y-2">
                <h3 className="text-xl font-bold">{project.title}</h3>
                <p className="text-gray-600">{project.description}</p>
                <p className="text-sm text-gray-400">{project.tech}</p>
                <a
                  href={project.link}
                  target="_blank"
                  className="inline-block mt-2 px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition"
                >
                  View Project
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* SKILLS */}
      <section className="space-y-4">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-3xl font-semibold text-center"
        >
          Skills
        </motion.h2>
        <div className="flex flex-wrap justify-center gap-4">
          {skills.map((skill, idx) => (
            <motion.div
              key={idx}
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-gray-100 px-4 py-2 rounded-full text-sm font-medium hover:bg-gray-200 cursor-pointer transition"
            >
              {skill}
            </motion.div>
          ))}
        </div>
      </section>

      {/* EXPERIENCE */}
      <section className="space-y-8">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-3xl font-semibold text-center"
        >
          Experience & Journey
        </motion.h2>
        <div className="space-y-6 max-w-3xl mx-auto">
          {experiences.map((exp, idx) => (
            <motion.div
              key={idx}
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
              className="border-l-4 border-indigo-500 pl-4 space-y-1"
            >
              <h3 className="font-bold">{exp.role} @ {exp.company}</h3>
              <span className="text-gray-400 text-sm">{exp.period}</span>
              <p className="text-gray-600">{exp.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

    </main>
  );
}
