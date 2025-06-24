import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Github, Linkedin, Mail, Download, Code } from 'lucide-react';

const HeroSection: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center px-6 py-20 mt-8">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-6xl mx-auto"
      >
        <motion.div variants={itemVariants} className="mb-12">
          {/* Profile Image and Name Container */}
          <div className="flex flex-col lg:flex-row items-center lg:items-center justify-center lg:justify-center gap-8 lg:gap-16">
            {/* Profile Image */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
              className="flex-shrink-0"
            >
              <div className="relative w-40 h-40 lg:w-48 lg:h-48">
                {/* Gradient Ring */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-400 via-purple-500 to-orange-400 p-1">
                  <div className="w-full h-full rounded-full bg-gray-900"></div>
                </div>
                {/* Profile Image */}
                <motion.img
                  src="https://avatars.githubusercontent.com/u/161701360?v=4"
                  alt="Saksham Singh Rathore"
                  className="absolute inset-1 w-[calc(100%-8px)] h-[calc(100%-8px)] rounded-full object-cover"
                  animate={{ 
                    boxShadow: [
                      "0 0 20px rgba(139, 92, 246, 0.3)",
                      "0 0 40px rgba(6, 182, 212, 0.4)",
                      "0 0 20px rgba(251, 146, 60, 0.3)",
                      "0 0 20px rgba(139, 92, 246, 0.3)"
                    ]
                  }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                  onError={(e) => {
                    e.currentTarget.src = 'https://avatars.githubusercontent.com/u/161701360?v=4';
                  }}
                />
              </div>
            </motion.div>

            {/* Name and Titles */}
            <div className="text-center lg:text-left flex-1 lg:flex-none lg:max-w-2xl">
              <p className="text-xl sm:text-2xl lg:text-2xl mb-3 font-medium bg-gradient-to-r from-cyan-300 to-purple-400 bg-clip-text text-transparent">
                Hi, I'm
              </p>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl font-bold mb-4 leading-tight">
                <span className="bg-gradient-to-r from-cyan-400 via-purple-500 to-orange-400 bg-clip-text text-transparent">
                  Saksham Singh Rathore
                </span>
              </h1>
              <h2 className="text-lg sm:text-xl lg:text-xl text-white/80 font-light mb-4 leading-relaxed">
                B.Tech CSE @ MANIT-Bhopal<br className="sm:hidden" />
                <span className="hidden sm:inline"> | </span>
                B.S. in AI & DS @ IIT Guwahati
              </h2>
              <h3 className="text-base sm:text-lg lg:text-lg text-gray-300 font-medium">
                Full-Stack Developer & AI Enthusiast
              </h3>
            </div>
          </div>
        </motion.div>

        <motion.p
          variants={itemVariants}
          className="text-lg md:text-xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed text-center"
        >
          I'm a tech enthusiast building full-stack apps with MERN stack and
          integrating AI into real-world solutions. Passionate about competitive
          programming and open-source contributions.
        </motion.p>

        <motion.div variants={itemVariants} className="flex flex-col sm:flex-row flex-wrap justify-center gap-3 md:gap-4 mb-12 md:mb-16">
          <motion.a
            href="/resume.pdf"
            download
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center justify-center space-x-2 px-4 md:px-6 py-2.5 md:py-3 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full text-white font-semibold hover:shadow-lg hover:shadow-cyan-500/25 transition-all duration-300 text-sm md:text-base"
          >
            <Download size={18} />
            <span>Download Resume</span>
          </motion.a>
          <motion.button
            onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center justify-center space-x-2 px-4 md:px-6 py-2.5 md:py-3 bg-white/10 backdrop-blur-sm rounded-full text-white font-semibold border border-white/20 hover:border-purple-400/50 transition-all duration-300 text-sm md:text-base"
          >
            <Code size={18} />
            <span>View Projects</span>
          </motion.button>
          <motion.button
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center justify-center space-x-2 px-4 md:px-6 py-2.5 md:py-3 bg-white/10 backdrop-blur-sm rounded-full text-white font-semibold border border-white/20 hover:border-orange-400/50 transition-all duration-300 text-sm md:text-base"
          >
            <Mail size={18} />
            <span>Contact Me</span>
          </motion.button>
        </motion.div>

        <motion.div variants={itemVariants} className="flex justify-center space-x-4 md:space-x-6 mb-12 md:mb-16">
          {[
            { icon: Github, href: 'https://github.com/saksham-1304', label: 'GitHub' },
            { icon: Linkedin, href: 'https://linkedin.com/in/saksham-singh-rathore1304', label: 'LinkedIn' },
            { icon: Mail, href: 'mailto:sakshamsinghrathore1304@gmail.com', label: 'Contact' },
          ].map(({ icon: Icon, href, label }) => (
            <motion.a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="p-4 bg-white/5 backdrop-blur-sm rounded-full border border-white/10 hover:border-cyan-400/50 transition-colors"
              aria-label={label}
            >
              <Icon size={24} className="text-white/70 hover:text-cyan-400 transition-colors" />
            </motion.a>
          ))}
        </motion.div>

        <motion.div variants={itemVariants} className="text-center">
          <motion.button
            onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
            className="flex items-center space-x-2 mx-auto text-cyan-400 hover:text-cyan-300 transition-colors"
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            <span>Explore My Journey</span>
            <ArrowDown size={20} />
          </motion.button>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;