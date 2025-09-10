'use client';
import { useRef, useState, useEffect, RefObject } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

import {
  FaLaptopCode,
  FaBrain,
  FaBook,
  FaGraduationCap,
  FaLightbulb,
  FaRocket,
  FaArrowUp,
  FaCode,
  FaUsers,
  FaTasks,
} from 'react-icons/fa';

interface Section {
  id: string;
  ref: RefObject<HTMLDivElement | null>;
}

export default function AboutPage() {
  const [activeSection, setActiveSection] = useState('summary');
  const [isScrolled, setIsScrolled] = useState(false);
  const [showScrollToTop, setShowScrollToTop] = useState(false);

  const summaryRef = useRef<HTMLDivElement>(null);
  const educationRef = useRef<HTMLDivElement>(null);
  const uspRef = useRef<HTMLDivElement>(null);
  const experienceRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      setShowScrollToTop(window.scrollY > 300);

      const sections: Section[] = [
        { id: 'summary', ref: summaryRef },
        { id: 'education', ref: educationRef },
        { id: 'unique-selling-point', ref: uspRef },
        { id: 'experience', ref: experienceRef },
        { id: 'contact', ref: contactRef },
      ];

      const currentSection = sections.find((section) => {
        if (section.ref.current) {
          const rect = section.ref.current.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });

      if (currentSection) {
        setActiveSection(currentSection.id);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const sectionMap: Record<string, RefObject<HTMLDivElement | null>> = {
      summary: summaryRef,
      education: educationRef,
      'unique-selling-point': uspRef,
      experience: experienceRef,
      contact: contactRef,
    };

    const ref = sectionMap[sectionId];
    if (ref && ref.current) {
      ref.current.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(sectionId);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <main className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-900 dark:to-gray-800 overflow-hidden">
        <div className="fixed inset-0 overflow-hidden pointer-events-none">
          <motion.div
            className="absolute top-1/4 left-1/4 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"
            animate={{
              scale: [1, 1.2, 1],
              x: [0, 30, 0],
              y: [0, -30, 0],
            }}
            transition={{ duration: 15, repeat: Infinity, repeatType: 'reverse' }}
          />
          <motion.div
            className="absolute top-1/3 right-1/4 w-72 h-72 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"
            animate={{
              scale: [1, 1.3, 1],
              x: [0, -20, 0],
              y: [0, 40, 0],
            }}
            transition={{ duration: 18, repeat: Infinity, repeatType: 'reverse', delay: 1 }}
          />
          <motion.div
            className="absolute bottom-1/4 left-1/3 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"
            animate={{
              scale: [1, 1.1, 1],
              x: [0, 25, 0],
              y: [0, -40, 0],
            }}
            transition={{ duration: 20, repeat: Infinity, repeatType: 'reverse', delay: 2 }}
          />
        </div>

        <motion.nav
          initial={{ y: -100 }}
          animate={{ y: 0 }}
          className={`sticky top-4 z-50 mb-8 transition-all duration-300 ${
            isScrolled
              ? 'bg-white/90 dark:bg-gray-900/90 shadow-xl'
              : 'bg-white/80 dark:bg-gray-800/80'
          } backdrop-blur-md rounded-xl p-3 max-w-2xl mx-auto`}
        >
          <div className="flex flex-wrap justify-center gap-2 md:gap-4">
            {['summary', 'education', 'unique-selling-point', 'experience', 'contact'].map((section) => (
              <motion.button
                key={section}
                onClick={() => scrollToSection(section)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                  activeSection === section
                    ? 'bg-gradient-to-r from-[#6B76DD] to-[#8A6BDD] text-white shadow-md'
                    : 'text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
                }`}
              >
                {section.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}
              </motion.button>
            ))}
          </div>
        </motion.nav>

        <div className="max-w-6xl mx-auto relative z-10">
          <motion.section
            ref={summaryRef}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="mb-16 p-8 md:p-12 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500"
          >
            <div className="text-center">
              <motion.h1
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-5xl md:text-6xl font-bold mb-6 text-gray-800 dark:text-gray-100"
              >
                About{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#6B76DD] to-[#8A6BDD]">
                  Me
                </span>
              </motion.h1>

              <motion.div
                initial={{ width: 0 }}
                animate={{ width: 100 }}
                transition={{ delay: 0.4, duration: 0.8 }}
                className="h-1 bg-gradient-to-r from-[#6B76DD] to-[#8A6BDD] mx-auto mb-8 rounded-full"
              ></motion.div>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
                className="text-xl text-gray-700 dark:text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed"
              >
                Hello, I&apos;m {' '}
                <span className="font-semibold text-[#6B76DD]">
                  Ahmed Hesham
                </span>{' '}
                , a Junior Electronics and Communication Engineering student at Helwan
                University,
                passionate about transforming raw data into actionable insights. I specialize in building intelligent data solutions and crafting impactful dashboards using Power BI, and Excel.
                I am focused on delivering clear, data-driven narratives that solve real-world problems and empower decision-making.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
                className="flex justify-center gap-4 mt-10"
              >
                <Link
                  href="/projects"
                  className="px-6 py-3 bg-gradient-to-r from-[#6B76DD] to-[#8A6BDD] text-white rounded-xl hover:shadow-lg transition-all duration-300 flex items-center gap-2"
                >
                  <FaCode className="text-sm" /> View My Work
                </Link>
                <button
                  onClick={() => scrollToSection('contact')}
                  className="px-6 py-3 bg-transparent border-2 border-[#6B76DD] text-[#6B76DD] dark:text-gray-100 rounded-xl hover:bg-[#6B76DD] hover:text-white transition-all duration-300"
                >
                  Get In Touch
                </button>
              </motion.div>
            </div>
          </motion.section>

          <motion.section
            ref={educationRef}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mb-16 p-8 md:p-12 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500"
          >
            <div className="flex items-center gap-4 mb-8">
              <div className="p-3 bg-gradient-to-r from-[#6B76DD] to-[#8A6BDD] rounded-full">
                <FaGraduationCap className="text-white text-xl" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#6B76DD] to-[#8A6BDD]">
                Education
              </h2>
            </div>

            <div className="bg-gradient-to-r from-[#6B76DD]/10 to-blue-100/50 dark:from-[#6B76DD]/20 dark:to-gray-700/30 p-8 rounded-2xl mb-8 border border-[#6B76DD]/20">
              <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-100 mb-3">
                Faculty of Engineering — Helwan University
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-2 text-lg">
                Bachelor of Electronics and Communication Engineering
              </p>
              <p className="text-gray-500 dark:text-gray-400">2023 – 2028 (Expected)</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              
            </div>
          </motion.section>

          <motion.section
            ref={uspRef}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mb-16 p-8 md:p-12 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500"
          >
            <div className="flex items-center gap-4 mb-8">
              <div className="p-3 bg-gradient-to-r from-[#6B76DD] to-[#8A6BDD] rounded-full">
                <FaLightbulb className="text-white text-xl" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#6B76DD] to-[#8A6BDD]">
                Unique Selling Point
              </h2>
            </div>

            <div className="bg-gradient-to-r from-[#6B76DD]/10 to-blue-100/50 dark:from-[#6B76DD]/20 dark:to-gray-700/30 p-8 rounded-2xl border border-[#6B76DD]/20">
              <p className="text-xl text-gray-700 dark:text-gray-300 leading-relaxed">
                As a Data Analytics Expert proficient in Excel and Power BI, I transform your complex, raw data into crystal-clear, actionable insights. My expertise in creating dynamic dashboards and conducting in-depth analyses empowers businesses to make confident, data-driven decisions and achieve measurable growth.
              </p>
            </div>
          </motion.section>

          <motion.section
            ref={experienceRef}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="mb-16 p-8 md:p-12 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500"
          >
            <div className="flex items-center gap-4 mb-8">
              <div className="p-3 bg-gradient-to-r from-[#6B76DD] to-[#8A6BDD] rounded-full">
                <FaRocket className="text-white text-xl" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#6B76DD] to-[#8A6BDD]">
                Experience
              </h2>
            </div>

            <div className="grid grid-cols-1 gap-6">
              <div className="bg-gradient-to-r from-[#6B76DD]/10 to-blue-100/50 dark:from-[#6B76DD]/20 dark:to-gray-700/30 p-8 rounded-2xl border border-[#6B76DD]/20">
                <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-100 mb-3">
                  Data Analytics - Microsoft Power BI Trainee
                </h3>
                <p className="text-blue-500 dark:text-blue-00 mb-2 text-lg">
                  Digital Egypt Pioneers Initiative (DEPI)
                </p>
                <p className="text-gray-600 dark:text-gray-300 mb-2 text-lg">
                  Collected, analyzed, and visualized data from various sources using Power BI, Tableau, and Azure services to uncover insights and support business decisions.
                <div className="bg-gradient-to-r from-[#6B76DD]/10 to-blue-100/50 dark:from-[#6B76DD]/20 dark:to-gray-700/30 p-8 rounded-2xl border border-[#6B76DD]/20">
  <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-100 mb-3">
    Data Analytics - Microsoft Power BI Trainee
  </h3>
  <p className="text-blue-500 dark:text-blue-00 mb-2 text-lg">
    Digital Egypt Pioneers Initiative (DEPI)
  </p>
  <p className="text-gray-600 dark:text-gray-300 mb-2 text-lg">
    Collected, analyzed, and visualized data from various sources using Power BI, Tableau, and Azure services to uncover insights and support business decisions.
    <ul className="space-y-2 mt-2">
      <li className="text-gray-600 dark:text-gray-300 flex items-start">
        <span className="text-blue-500 mt-1">•</span>
        Developed interactive dashboards and reports to visualize key trends.
      </li>
      <li className="text-gray-600 dark:text-gray-300 flex items-start">
        <span className="text-blue-500 mt-1">•</span>
        Collaborated with stakeholders to translate business needs into technical requirements.
      </li>
      <li className="text-gray-600 dark:text-gray-300 flex items-start">
        <span className="text-blue-500 mt-1">•</span>
        Ensured data integrity by identifying and resolving data quality issues.
      </li>
    </ul>
  </p>
  <p className="text-gray-500 dark:text-gray-400">Jun 2025 – Dec 2025</p>
</div>
                </p>
                <p className="text-gray-500 dark:text-gray-400">Jun 2025 – Dec 2025</p>
              </div>

              <div className="bg-gradient-to-r from-[#6B76DD]/10 to-blue-100/50 dark:from-[#6B76DD]/20 dark:to-gray-700/30 p-8 rounded-2xl border border-[#6B76DD]/20">
                <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-100 mb-3">
                  R&D member
                </h3>
                <p className="text-blue-500 dark:text-blue-00 mb-2 text-lg">
                  IEEE || HSC
                </p>
                <p className="text-gray-600 dark:text-gray-300 mb-2 text-lg">
                  Bridged the gap between technical innovation and chapter excellence. Researched and developed emerging technology prototypes while simultaneously analyzing chapter operations to implement strategic improvements, boost member engagement, and strengthen our community impact.
                </p>
                <p className="text-gray-500 dark:text-gray-400">Feb 2025 – Oct 2025</p>
              </div>
            </div>
          </motion.section>

          <motion.section
            ref={contactRef}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="text-center p-10 md:p-14 bg-gradient-to-r from-[#6B76DD]/10 to-blue-100/50 dark:from-[#6B76DD]/20 dark:to-gray-700/30 rounded-3xl shadow-lg border border-[#6B76DD]/20 mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-gray-100 mb-6">
              Let&apos;s Work Together
            </h2>
            <p className="text-xl text-gray-700 dark:text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
              I&apos;m always interested in new challenges and opportunities to grow. Whether you
              have a project in mind or just want to connect, feel free to reach out.
            </p>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                href="/contact"
                className="inline-flex items-center gap-3 bg-gradient-to-r from-[#6B76DD] to-[#8A6BDD] text-white px-8 py-4 rounded-2xl hover:shadow-2xl transition-all duration-300 shadow-lg text-lg font-medium"
              >
                <FaRocket /> Contact Me
              </Link>
            </motion.div>
          </motion.section>
        </div>

        <motion.button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 bg-gradient-to-r from-[#6B76DD] to-[#8A6BDD] text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all z-50"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: showScrollToTop ? 1 : 0, scale: showScrollToTop ? 1 : 0.5 }}
          transition={{ duration: 0.3 }}
        >
          <FaArrowUp />
        </motion.button>
      </main>
    </>
  );
}