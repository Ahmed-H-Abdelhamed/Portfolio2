'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useMemo } from 'react';
import {
  FaChartBar,
  FaDatabase,
  FaServer,
  FaBrain,
  FaRobot,
  FaLaptopCode,
  FaPython,
  FaJsSquare,
} from 'react-icons/fa';
import { SiCplusplus } from 'react-icons/si';

const SECTIONS = [
  {
    title: 'Business Intelligence',
    icon: <FaChartBar />,
    gradient: 'from-purple-500/10 to-pink-600/10',
    borderGradient: 'from-purple-500 to-pink-600',
    items: [
      { name: 'Data Analysis', level: 65, icon: <FaChartBar className="text-green-500" /> },
      { name: 'Power BI', level: 75, icon: <FaChartBar className="text-purple-500" /> },
      { name: 'SQL', level: 15, icon: <FaDatabase className="text-blue-500" /> },
      { name: 'ETL', level: 90, icon: <FaServer className="text-yellow-500" /> },
      { name: 'Tableau', level: 65, icon: <FaChartBar className="text-orange-500" /> },
      { name: 'Excel', level: 85, icon: <FaChartBar className="text-red-500" /> },
    ],
  },
  {
    title: 'Programming',
    icon: <FaLaptopCode />,
    gradient: 'from-green-500/10 to-emerald-600/10',
    borderGradient: 'from-green-500 to-emerald-600',
    items: [
      { name: 'C++', level: 85, icon: <SiCplusplus className="text-blue-500" /> },
      { name: 'Python', level: 60, icon: <FaPython className="text-yellow-500" /> },
    ],
  },
];

export default function SkillsSection() {
  const filteredSections = useMemo(() => SECTIONS, []);

  return (
    <>
      <section
        id="skills"
        className="m-3 w-full py-16 px-4 md:px-8 relative overflow-hidden bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-900 dark:to-gray-800"
      >
        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
          <div className="absolute top-10 left-10 w-72 h-72 bg-purple-600 rounded-full mix-blend-soft-light filter blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-72 h-72 bg-cyan-600 rounded-full mix-blend-soft-light filter blur-3xl"></div>
        </div>

        <div className="mx-auto max-w-7xl relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h3 className="flex items-center justify-center gap-4 text-[#6B76DD] font-semibold">
              <span className="w-12 h-[2px] bg-[#6B76DD] block"></span>
              <span className="text-2xl md:text-5xl font-bold text-gray-900 dark:text-gray-100">
                Technical Skills
              </span>
              <span className="w-12 h-[2px] bg-[#6B76DD] block"></span>
            </h3>
            <p className="text-md mt-3 max-w-5xl mx-auto text-gray-700 dark:text-gray-300">
              My technical proficiency across various domains of software development, continuously
              evolving with new technologies and best practices.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <AnimatePresence>
              {filteredSections.map((sec, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className={`rounded-xl p-6 shadow-lg border border-gray-300 dark:border-gray-700 hover:shadow-xl transition-all duration-300 bg-gradient-to-br ${sec.gradient} backdrop-blur-sm relative overflow-hidden group`}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent dark:from-black/5 rounded-xl pointer-events-none"></div>

                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 pointer-events-none"></div>

                  <div className="flex items-center gap-3 mb-5 relative z-10">
                    <div className="text-[#6B76DD] bg-white/80 dark:bg-gray-800/80 rounded-full p-3 text-lg shadow-md backdrop-blur-sm group-hover:scale-110 transition-transform duration-300">
                      {sec.icon}
                    </div>
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
                      {sec.title}
                    </h4>
                  </div>

                  <div className="flex flex-col gap-4 relative z-10">
                    {sec.items.map((skill, idx) => (
                      <motion.div
                        key={idx}
                        className="flex items-center gap-3 group/skill"
                        whileHover={{ x: 5 }}
                        transition={{ type: 'spring', stiffness: 300 }}
                      >
                        <div className="text-lg opacity-80 group-hover/skill:scale-110 transition-transform duration-300">
                          {skill.icon}
                        </div>

                        <div className="w-28 md:w-36 text-sm font-medium text-gray-800 dark:text-gray-200">
                          {skill.name}
                        </div>

                        <div className="flex-1">
                          <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5 overflow-hidden">
                            <motion.div
                              initial={{ width: 0 }}
                              whileInView={{ width: `${skill.level}%` }}
                              transition={{
                                duration: 1.2,
                                ease: 'easeOut',
                                delay: 0.2 + idx * 0.1,
                              }}
                              className="h-full bg-gradient-to-r from-[#6B76DD] to-[#8A98F5] rounded-full relative"
                            >
                              <motion.div
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                transition={{ delay: 1.2 + idx * 0.1 }}
                                className="absolute inset-0 bg-white/20 animate-pulse rounded-full"
                              />
                            </motion.div>
                          </div>
                        </div>

                        <div className="w-10 text-xs font-medium text-gray-600 dark:text-gray-300 text-right">
                          {skill.level}%
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          <AnimatePresence>
            {filteredSections.length === 0 && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="text-center mt-12 p-8 rounded-xl bg-gray-100/50 dark:bg-gray-800/50 backdrop-blur-sm"
              >
                <div className="text-4xl mb-4">🔍</div>
                <h4 className="text-lg font-medium text-gray-800 dark:text-gray-200 mb-2">
                  No skills found
                </h4>
                <p className="text-gray-600 dark:text-gray-400">
                  Try adjusting your search or filter criteria
                </p>
              </motion.div>
            )}
          </AnimatePresence>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            viewport={{ once: true }}
            className="text-center mt-10 text-xs text-gray-500 dark:text-gray-400"
          >
            <p>Always learning and expanding my skill set with new technologies</p>
          </motion.div>
        </div>
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="fixed bottom-8 right-8 p-3 bg-[#6B76DD] text-white rounded-full shadow-lg hover:bg-[#5a65c9] transition-all duration-300 z-10"
          aria-label="Back to top"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 10l7-7m0 0l7 7m-7-7v18"
            />
          </svg>
        </button>
      </section>
    </>
  );
}