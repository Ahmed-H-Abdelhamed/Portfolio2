'use client';

import Link from 'next/link';
import { motion, Variants, easeOut } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaCode, FaLaptopCode, FaChartBar, FaRocket } from 'react-icons/fa';
import Image from 'next/image';

export default function ProjectsPage() {
  const projects = [

    {
      name: 'Introduction to Data Science',
      description:
        'Cisco Networking Academy program',
      image: '/Cisco.png', // Placeholder: replace with actual image path
      videoEmbed: '', // If you have a video embed, add here
      github: '', // Add if applicable
      live: 'd', // Add live demo link if available
    },
    
    {
      name: 'Introduction to Python',
      description:
        'DataCamp',
      image: '/Py1.png', // Placeholder: replace with actual image path
      videoEmbed: '', // If you have a video embed, add here
      github: '', // Add if applicable
      live: 'https://www.datacamp.com/completed/statement-of-accomplishment/course/f3fdf55a3886e1baf4c836a55c638cf158d65381?utm_medium=organic_social&utm_campaign=sharewidget&utm_content=soa&utm_source=copylink', // Add live demo link if available
    },
    {
      name: 'Intermediate Python',
      description:
        'DataCamp',
      image: '/Py2.png', // Placeholder: replace with actual image path
      videoEmbed: '', // If you have a video embed, add here
      github: '', // Add if applicable
      live: 'https://www.datacamp.com/completed/statement-of-accomplishment/course/7a3f87a66dd686fa3a7c79c3d7482f058d322299?utm_medium=organic_social&utm_campaign=sharewidget&utm_content=soa&utm_source=copylink', // Add live demo link if available
    },
    
  ];

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: easeOut },
    },
  };

  return (
    <>
      <main className="min-h-screen w-full py-12 px-12 md:px-8 bg-gradient-to-br from-gray-900 to-gray-800 dark:from-gray-900 dark:to-gray-800 ">
        <div className="max-w-6xl mx-auto">
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
                Certifications
              </span>
              <span className="w-12 h-[2px] bg-[#6B76DD] block"></span>
            </h3>
          
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {projects.map((project, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="group bg-gray-800 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden flex flex-col transform hover:-translate-y-2"
              >
                <div className="relative aspect-video rounded-lg overflow-hidden bg-gradient-to-br from-blue-900 to-purple-900">
                  {project.videoEmbed ? (
                    <iframe
                      src={project.videoEmbed}
                      className="w-full h-full"
                      frameBorder="0"
                      allowFullScreen
                      title={project.name}
                    />
                  ) : project.image ? (
                    <Image
                      src={project.image as string}
                      alt={project.name}
                      width={600}
                      height={400}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <FaChartBar className="text-5xl text-[#6B76DD] opacity-30 mx-auto my-auto" />
                  )}
                </div>

                <div className="p-6 flex flex-col flex-1">
                  <h2 className="text-xl font-bold mb-2 text-gray-100 group-hover:text-[#6B76DD] transition-colors">
                    {project.name}
                  </h2>
                  <p className="text-gray-300 mb-4 flex-1">
                    {project.description}
                  </p>

                  <div className="flex gap-3 mt-auto justify-center items-center">
                    {project.github && (
                      <motion.a
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        href={project.github}
                        target="_blank"
                        className="flex items-center justify-center gap-2 bg-gray-700 text-white px-4 py-2 rounded-lg hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-[#6B76DD] transition w-full"
                      >
                        <FaGithub /> Code
                      </motion.a>
                    )}
                    {project.live && (
                      <motion.a
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        href={project.live}
                        className="flex items-center justify-center gap-2 bg-gradient-to-r from-[#6B76DD] to-purple-500 text-white px-4 py-2 rounded-lg hover:shadow-lg transition w-full"
                      >
                        <FaExternalLinkAlt /> Check it out
                      </motion.a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 40 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="text-center p-10 md:p-14 bg-gradient-to-r from-[#6B76DD]/10 to-blue-100/50 dark:from-[#6B76DD]/20 dark:to-gray-700/30 rounded-3xl shadow-lg border border-[#6B76DD]/20 mb-16"
          >
            <h2 className="text-3xl font-bold bg-gradient-to-r from-[#6B76DD] to-purple-500 bg-clip-text text-transparent mb-5 text-center">
              Let&apos;s Work Together
            </h2>
            <p className="text-xl text-gray-700 dark:text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
              I&apos;m always interested in new challenges and opportunities to grow. Whether you
              have a project in mind or just want to connect, feel free to reach out.
            </p>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                href="/contact"
                className="inline-flex items-center gap-3 bg-gradient-to-r from-[#6B76DD] to-purple-500 text-white px-8 py-4 rounded-2xl hover:shadow-2xl transition-all duration-300 shadow-lg text-lg font-medium"
              >
                <FaRocket /> Contact Me
              </Link>
            </motion.div>
          </motion.section>
        </div>

        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="fixed bottom-8 right-8 p-3 bg-[#6B76DD] text-white rounded-full shadow-lg hover:bg-purple-600 transition-all duration-300 z-10"
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
      </main>
    </>
  );
}