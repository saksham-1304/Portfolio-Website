import React from 'react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Code, Palette, Rocket, Users, GraduationCap, Award } from 'lucide-react';

const AboutSection: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const skills = [
    {
      category: 'Programming Languages',
      items: [
        { name: 'JavaScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg', level: 90 },
        { name: 'TypeScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg', level: 85 },
        { name: 'Python', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg', level: 80 },
        { name: 'C++', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg', level: 85 },
        { name: 'C', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg', level: 80 },
        { name: 'Java', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg', level: 75 }
      ]
    },
    {
      category: 'Frontend Technologies',
      items: [
        { name: 'React', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg', level: 95 },
        { name: 'HTML/CSS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg', level: 90 },
        { name: 'Tailwind CSS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg', level: 85 },
        { name: 'Bootstrap', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg', level: 80 }
      ]
    },
    {
      category: 'Backend & Database',
      items: [
        { name: 'Node.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg', level: 85 },
        { name: 'Express', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg', level: 80 },
        { name: 'MongoDB', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg', level: 85 },
        { name: 'MySQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg', level: 75 },
        { name: 'PostgreSQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg', level: 70 }
      ]
    },
    {
      category: 'Tools & Others',
      items: [
        { name: 'Git', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg', level: 90 },
        { name: 'VS Code', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg', level: 95 },
        { name: 'Docker', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg', level: 65 },
        { name: 'AWS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original.svg', level: 60 }
      ]
    }
  ];

  const highlights = [
    {
      icon: Code,
      title: 'Full-Stack Development',
      description: 'Building scalable MERN stack applications with modern best practices and clean architecture.',
    },
    {
      icon: Palette,
      title: 'AI Integration',
      description: 'Integrating machine learning and AI solutions into real-world applications and projects.',
    },
    {
      icon: Rocket,
      title: 'Competitive Programming',
      description: 'Active on LeetCode, CodeChef, and Codeforces with strong problem-solving skills.',
    },
    {
      icon: Users,
      title: 'Open Source Contributor',
      description: 'Contributing to open-source projects through GirlScript and Hacktoberfest initiatives.',
    },
  ];

  const education = [
    {
      degree: 'B.Tech in Computer Science and Engineering',
      institution: 'MANIT Bhopal',
      period: '2023 - 2027',
      grade: 'CGPA: 9.16',
      icon: GraduationCap
    },
    /*
    {
      degree: 'B.S. in Data Science and AI',
      institution: 'IIT Guwahati',
      period: '2023 - 2027',
      grade: 'CPI: 8.28',
      icon: Award
    }*/
  ];

  return (
    <section id="about" className="min-h-screen py-20 px-6" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
              About Me
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            I'm currently pursuing — B.Tech in CSE at MANIT Bhopal {/*and B.S. in Data Science & AI at IIT Guwahati*/}.
            I'm passionate about software development, machine learning, and competitive programming. I've contributed to
            open-source projects via GirlScript and Hacktoberfest, and actively build intelligent web applications.
          </p>
        </motion.div>

        {/* Education */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-12 md:mb-16"
        >
          <h3 className="text-xl md:text-2xl font-bold text-white mb-6 md:mb-8 text-center">Education</h3>
          <div className="grid md:grid-cols-2 gap-6 md:gap-8">
            {education.map((edu, index) => (
              <motion.div
                key={edu.degree}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
                className="p-4 md:p-6 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 hover:border-purple-400/50 transition-colors"
              >
                <edu.icon className="w-6 h-6 md:w-8 md:h-8 text-purple-400 mb-3 md:mb-4" />
                <h4 className="text-base md:text-lg font-semibold text-white mb-2">{edu.degree}</h4>
                <p className="text-purple-400 font-medium mb-1 text-sm md:text-base">{edu.institution}</p>
                <p className="text-gray-400 text-xs md:text-sm mb-2">{edu.period}</p>
                <p className="text-green-400 font-semibold text-sm md:text-base">{edu.grade}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Highlights */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8 mb-12 md:mb-16">
          {highlights.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="p-4 md:p-6 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 hover:border-purple-400/50 transition-colors"
            >
              <item.icon className="w-8 h-8 md:w-12 md:h-12 text-purple-400 mb-3 md:mb-4" />
              <h3 className="text-lg md:text-xl font-semibold text-white mb-2">{item.title}</h3>
              <p className="text-gray-400 text-xs md:text-sm leading-relaxed">{item.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Skills */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="bg-black/20 backdrop-blur-sm rounded-2xl p-4 md:p-8 border border-white/10"
        >
          <h3 className="text-xl md:text-2xl font-bold text-white mb-6 md:mb-8 text-center">Technical Skills</h3>
          <div className="grid lg:grid-cols-2 gap-6 md:gap-8">
            {skills.map((skillGroup, categoryIndex) => (
              <div key={skillGroup.category} className="space-y-4 md:space-y-6">
                <h4 className="text-base md:text-lg font-semibold text-cyan-400 mb-3 md:mb-4">{skillGroup.category}</h4>
                <div className="space-y-3 md:space-y-4">
                  {skillGroup.items.map((skill, skillIndex) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, x: -20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                      transition={{ duration: 0.4, delay: categoryIndex * 0.1 + skillIndex * 0.05 + 0.5 }}
                      className="space-y-2"
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-2 md:space-x-3">
                          <img
                            src={skill.icon}
                            alt={skill.name}
                            className="w-4 h-4 md:w-6 md:h-6"
                            onError={(e) => {
                              e.currentTarget.style.display = 'none';
                            }}
                          />
                          <span className="text-gray-300 text-xs md:text-sm font-medium">{skill.name}</span>
                        </div>
                        <span className="text-cyan-400 text-xs md:text-sm font-semibold">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-gray-700/50 rounded-full h-1.5 md:h-2">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={isInView ? { width: `${skill.level}%` } : { width: 0 }}
                          transition={{ duration: 1, delay: categoryIndex * 0.1 + skillIndex * 0.05 + 0.8 }}
                          className="bg-gradient-to-r from-cyan-400 to-purple-400 h-1.5 md:h-2 rounded-full"
                        />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;