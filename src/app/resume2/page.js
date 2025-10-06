'use client';

import { motion } from 'framer-motion';
import { Mail, Briefcase, Code, Terminal, Zap, ExternalLink } from 'lucide-react';
import { useState } from 'react';

// --- Configuration & Placeholder Data ---

const ACCENT_COLOR = 'indigo'; // Tailwind color: indigo-500, indigo-600, etc.

const ME_DATA = {
  name: "Anar-Erdene",
  title: "Full-Stack Developer & UI/UX Enthusiast",
  bio: "I'm a passionate and goal-oriented developer focused on building modern, performant, and highly engaging user experiences. I thrive on transforming complex problems into elegant, minimalist solutions using cutting-edge technologies like Next.js and Tailwind CSS.",
  image: "/placeholder-profile.jpg", // Replace with a real path if available
  email: "anar.erdene@example.com"
};

const PROJECTS = [
  {
    title: "E-Commerce Platform Redesign",
    description: "A complete overhaul of an existing e-commerce site, resulting in a 40% increase in conversion rates. Focused on performance optimization and mobile-first design.",
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "Stripe API"],
    link: "#"
  },
  {
    title: "AI-Powered Content Generator",
    description: "A SaaS application providing marketers with unique, SEO-optimized content based on user prompts. Implemented a custom API for natural language processing.",
    stack: ["React", "Node.js", "Express", "MongoDB", "Framer Motion"],
    link: "#"
  },
  {
    title: "Personal Finance Tracker (Mobile)",
    description: "A clean, intuitive mobile application for tracking daily expenses and managing budgets. Designed with a focus on data visualization and ease of use.",
    stack: ["React Native", "Firebase", "Redux"],
    link: "#"
  }
];

const SKILLS = [
  { name: "JavaScript", level: "Expert", icon: <Code size={18} /> },
  { name: "React / Next.js", level: "Expert", icon: <Terminal size={18} /> },
  { name: "Tailwind CSS", level: "Expert", icon: <Zap size={18} /> },
  { name: "Framer Motion", level: "Intermediate", icon: <Briefcase size={18} /> },
  { name: "TypeScript", level: "Intermediate", icon: <Code size={18} /> },
  { name: "Node.js / Express", level: "Intermediate", icon: <Terminal size={18} /> },
];

const EXPERIENCE = [
  {
    role: "Senior Frontend Developer",
    company: "Innovatech Solutions",
    period: "2021 - Present",
    description: "Led a team of three developers in migrating legacy applications to the Next.js framework, improving performance by over 60%. Established best practices for component-based architecture and state management.",
    side: "left"
  },
  {
    role: "UI/UX Designer & Developer",
    company: "Creative Digital Agency",
    period: "2018 - 2021",
    description: "Designed and developed over 15 client websites from concept to deployment. Specializing in creating highly engaging, animated user interfaces using modern CSS and React libraries.",
    side: "right"
  },
  {
    role: "Junior Web Developer",
    company: "Local Startup Hub",
    period: "2017 - 2018",
    description: "Assisted senior developers with bug fixes and feature implementation. Focused on learning core web technologies: HTML, CSS, and basic JavaScript frameworks.",
    side: "left"
  }
];

// --- Framer Motion Variants ---

const staggerContainer = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const slideIn = (direction) => ({
  hidden: { opacity: 0, x: direction === 'left' ? -100 : 100 },
  show: { opacity: 1, x: 0, transition: { duration: 0.8 } }
});

// --- Helper Components ---

const SectionTitle = ({ children }) => (
  <motion.h2
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.3 }}
    transition={{ duration: 0.7 }}
    className={`text-4xl font-extrabold mb-12 border-b-4 border-${ACCENT_COLOR}-500 pb-2 text-gray-800 dark:text-gray-100`}
  >
    {children}
  </motion.h2>
);

const CTAButton = ({ children, href, primary = true }) => (
  <motion.a
    href={href}
    target={href.startsWith('mailto') ? '_self' : '_blank'}
    rel={href.startsWith('mailto') ? '' : 'noopener noreferrer'}
    className={`px-8 py-3 text-lg font-semibold rounded-full shadow-lg transition duration-300 ease-in-out transform flex items-center justify-center space-x-2 
      ${primary
        ? `bg-${ACCENT_COLOR}-600 text-white hover:bg-${ACCENT_COLOR}-700 hover:scale-[1.03] active:scale-[0.98]`
        : `bg-white text-${ACCENT_COLOR}-600 border-2 border-${ACCENT_COLOR}-600 hover:bg-${ACCENT_COLOR}-50 hover:scale-[1.03] active:scale-[0.98]`
      }
    `}
    whileHover={{ scale: 1.05, boxShadow: '0 10px 20px rgba(0, 0, 0, 0.1)' }}
    whileTap={{ scale: 0.98 }}
    variants={fadeIn}
  >
    {children}
  </motion.a>
);

// --- Section Components ---

/**
 * 1. Hero / About Me Section
 */
const HeroSection = () => {
  return (
    <section id="about" className="min-h-screen flex items-center justify-center bg-white dark:bg-gray-900 pt-24 pb-12">
      <motion.div
        className="text-center max-w-4xl px-6"
        initial="hidden"
        animate="show"
        variants={staggerContainer}
      >
        {/* Profile Image (Optional) */}
        {/* Placeholder: remove if no image is available */}
        <motion.div variants={fadeIn} className="mb-8">
          <motion.div
            className="w-40 h-40 mx-auto rounded-full overflow-hidden border-4 border-${ACCENT_COLOR}-500 shadow-xl"
            whileHover={{ scale: 1.05, rotate: 2 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            {/* Replace with an actual image tag */}
            <div className={`w-full h-full bg-${ACCENT_COLOR}-100 flex items-center justify-center text-${ACCENT_COLOR}-600 text-6xl font-bold`}>
              A-E
            </div>
            {/* <img src={ME_DATA.image} alt="Profile" className="w-full h-full object-cover" /> */}
          </motion.div>
        </motion.div>

        {/* Animated Main Heading */}
        <motion.h1 className="text-6xl md:text-8xl font-black mb-4 text-gray-900 dark:text-gray-50 overflow-hidden">
          {ME_DATA.name.split('').map((char, index) => (
            <motion.span
              key={index}
              variants={{
                hidden: { opacity: 0, y: '100%' },
                show: { opacity: 1, y: '0%', transition: { type: 'spring', stiffness: 100, damping: 12, delay: index * 0.05 } }
              }}
              className="inline-block"
            >
              {char === ' ' ? '\u00A0' : char}
            </motion.span>
          ))}
        </motion.h1>

        <motion.h2 variants={fadeIn} className={`text-2xl md:text-3xl font-light mb-8 text-${ACCENT_COLOR}-600 dark:text-${ACCENT_COLOR}-400`}>
          {ME_DATA.title}
        </motion.h2>

        {/* Short, impactful paragraph */}
        <motion.p variants={fadeIn} className="text-xl md:text-2xl mb-12 text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          {ME_DATA.bio}
        </motion.p>

        {/* CTA Buttons */}
        <div className="flex justify-center space-x-4">
          <CTAButton href="#projects" primary={true}>
            <Briefcase size={20} />
            <span>View Projects</span>
          </CTAButton>
          <CTAButton href="#contact" primary={false}>
            <Mail size={20} />
            <span>Contact Me</span>
          </CTAButton>
        </div>
      </motion.div>
    </section>
  );
};


/**
 * 2. Projects / Portfolio Section
 */
const ProjectCard = ({ project, index }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg border-t-4 border-${ACCENT_COLOR}-500 cursor-pointer"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.7, delay: index * 0.1 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      whileHover={{ scale: 1.02, boxShadow: "0 20px 40px rgba(0, 0, 0, 0.15)" }}
    >
      <h3 className="text-2xl font-bold mb-3 text-gray-900 dark:text-gray-50">{project.title}</h3>
      <p className="text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>
      
      <div className="flex flex-wrap gap-2 mb-6">
        {project.stack.map((tech) => (
          <span key={tech} className={`px-3 py-1 text-sm font-semibold rounded-full bg-${ACCENT_COLOR}-100 text-${ACCENT_COLOR}-700 dark:bg-${ACCENT_COLOR}-900 dark:text-${ACCENT_COLOR}-300`}>
            {tech}
          </span>
        ))}
      </div>

      <motion.a
        href={project.link}
        target="_blank"
        rel="noopener noreferrer"
        className={`inline-flex items-center space-x-2 text-${ACCENT_COLOR}-600 font-semibold hover:text-${ACCENT_COLOR}-800 transition duration-300`}
        animate={{ x: isHovered ? 5 : 0 }} // Subtle motion on hover
      >
        <span>View Project</span>
        <ExternalLink size={16} />
      </motion.a>
    </motion.div>
  );
};

const ProjectsSection = () => (
  <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-950 px-6">
    <div className="max-w-6xl mx-auto">
      <SectionTitle>Featured Projects</SectionTitle>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
        {PROJECTS.map((project, index) => (
          <ProjectCard key={index} project={project} index={index} />
        ))}
      </div>
    </div>
  </section>
);



/**
 * 3. Skills Section
 */
const SkillBadge = ({ skill, index }) => {
  const levelClass = (level) => {
    switch (level) {
      case 'Expert': return `bg-red-500`;
      case 'Intermediate': return `bg-yellow-500`;
      case 'Beginner': return `bg-green-500`;
      default: return `bg-gray-500`;
    }
  };

  return (
    <motion.div
      className={`relative p-4 rounded-xl shadow-md border-b-4 border-${ACCENT_COLOR}-500 bg-white dark:bg-gray-800`}
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      whileHover={{ scale: 1.05, boxShadow: "0 10px 20px rgba(0, 0, 0, 0.1)" }}
    >
      <div className="flex items-center space-x-3 text-gray-800 dark:text-gray-50">
        {skill.icon}
        <span className="text-lg font-semibold">{skill.name}</span>
      </div>
      <div className={`absolute top-0 right-0 m-[-8px] px-3 py-1 text-xs font-bold text-white rounded-full ${levelClass(skill.level)} shadow-lg`}>
        {skill.level}
      </div>
    </motion.div>
  );
};

const SkillsSection = () => (
  <section id="skills" className="py-20 bg-white dark:bg-gray-900 px-6">
    <div className="max-w-6xl mx-auto">
      <SectionTitle>Tech Stack & Skills</SectionTitle>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
        {SKILLS.map((skill, index) => (
          <SkillBadge key={index} skill={skill} index={index} />
        ))}
      </div>
    </div>
  </section>
);



/**
 * 4. Experience & Journey Section (Timeline)
 */
const TimelineItem = ({ entry, index }) => (
  <div className="relative mb-8 first:mt-8">
    <div className={`hidden md:block absolute top-0 w-8 h-8 rounded-full z-10 ${entry.side === 'left' ? 'left-[-46px]' : 'right-[-46px]'}`}>
      <motion.div
        className={`w-full h-full rounded-full bg-${ACCENT_COLOR}-500 border-4 border-${ACCENT_COLOR}-200`}
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: index * 0.2 }}
      />
    </div>

    <motion.div
      className={`bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg border-t-4 border-${ACCENT_COLOR}-500 md:w-[45%] mx-auto md:mx-0 ${entry.side === 'right' ? 'md:ml-auto' : 'md:mr-auto'}`}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.5 }}
      variants={slideIn(entry.side)}
      whileHover={{ scale: 1.01, boxShadow: "0 15px 30px rgba(0, 0, 0, 0.1)" }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
    >
      <div className={`text-sm font-bold uppercase mb-1 text-${ACCENT_COLOR}-600 dark:text-${ACCENT_COLOR}-400`}>{entry.period}</div>
      <h3 className="text-xl font-bold text-gray-900 dark:text-gray-50">{entry.role}</h3>
      <p className="text-lg font-semibold mb-3 text-gray-700 dark:text-gray-300">{entry.company}</p>
      <p className="text-gray-600 dark:text-gray-400">{entry.description}</p>
    </motion.div>
  </div>
);

const ExperienceSection = () => (
  <section id="experience" className="py-20 bg-gray-50 dark:bg-gray-950 px-6">
    <div className="max-w-6xl mx-auto">
      <SectionTitle>My Professional Journey</SectionTitle>
      
      {/* Timeline Container - Hidden on mobile, shown on desktop */}
      <div className="relative border-l-4 border-${ACCENT_COLOR}-200 ml-5 md:ml-0">
        <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-gray-200 dark:bg-gray-700 hidden md:block" />
        {EXPERIENCE.map((entry, index) => (
          <TimelineItem key={index} entry={entry} index={index} />
        ))}
      </div>
      
      {/* Fallback for Mobile (Simple Card List) */}
      <div className="md:hidden space-y-8">
        {EXPERIENCE.map((entry, index) => (
          <TimelineItem key={index} entry={entry} index={index} />
        ))}
      </div>
    </div>
  </section>
);

/**
 * 5. Contact / Footer Section
 */
const ContactSection = () => (
  <footer id="contact" className="py-20 bg-white dark:bg-gray-900 px-6">
    <div className="max-w-4xl mx-auto text-center">
      <SectionTitle>Get in Touch</SectionTitle>
      
      <motion.p
        className="text-xl text-gray-600 dark:text-gray-300 mb-8"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        I'm currently open to new opportunities and exciting collaborations. Whether you have a project in mind or just want to say hello, feel free to drop me an email!
      </motion.p>

      <CTAButton href={`mailto:${ME_DATA.email}`} primary={true}>
        <Mail size={24} />
        <span>Email Me Directly</span>
      </CTAButton>
      
      <motion.p
        className="mt-12 text-gray-500 dark:text-gray-400"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.5 }}
      >
        &copy; {new Date().getFullYear()} {ME_DATA.name}. Built with Next.js, Tailwind CSS, and Framer Motion.
      </motion.p>
    </div>
  </footer>
);

// --- Main Page Component ---

export default function Home() {
  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-sm shadow-sm dark:bg-gray-900/90`}>
        <nav className="max-w-6xl mx-auto px-6 py-4 flex justify-center space-x-6 text-lg font-medium">
          <a href="#about" className={`text-gray-700 hover:text-${ACCENT_COLOR}-600 dark:text-gray-300 dark:hover:text-${ACCENT_COLOR}-400 transition-colors`}>About</a>
          <a href="#projects" className={`text-gray-700 hover:text-${ACCENT_COLOR}-600 dark:text-gray-300 dark:hover:text-${ACCENT_COLOR}-400 transition-colors`}>Projects</a>
          <a href="#skills" className={`text-gray-700 hover:text-${ACCENT_COLOR}-600 dark:text-gray-300 dark:hover:text-${ACCENT_COLOR}-400 transition-colors`}>Skills</a>
          <a href="#experience" className={`text-gray-700 hover:text-${ACCENT_COLOR}-600 dark:text-gray-300 dark:hover:text-${ACCENT_COLOR}-400 transition-colors`}>Experience</a>
          <a href="#contact" className={`text-gray-700 hover:text-${ACCENT_COLOR}-600 dark:text-gray-300 dark:hover:text-${ACCENT_COLOR}-400 transition-colors`}>Contact</a>
        </nav>
      </header>

      <main className="pt-16"> {/* Add padding for the fixed header */}
        <HeroSection />
        <ProjectsSection />
        <SkillsSection />
        <ExperienceSection />
        <ContactSection />
      </main>
    </>
  );
}