import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Calendar, MapPin, Briefcase } from 'lucide-react';

const ExperienceSection: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const experiences = [{

    title: 'Senior Full-Stack Developer',
    company: 'TechCorp Solutions',
    logo: 'https://camo.githubusercontent.com/3cdfc0143106da3f5470ab1031efaa374015868a8f24151a92269a733d572388/68747470733a2f2f6d656469612e6c6963646e2e636f6d2f646d732f696d6167652f76322f43353130424151455254745f683371594372672f636f6d70616e792d6c6f676f5f3230305f3230302f636f6d70616e792d6c6f676f5f3230305f3230302f302f313633303537323231373332352f7a656e6974685f7468655f70726f6772616d6d696e675f636c75625f6f665f6d616e69745f6c6f676f3f653d3137353333313532303026763d6265746126743d2d4775635332305075572d7263753646596c30696a7176675172755267786b726f704f4d5835717a515159',
    location: 'San Francisco, CA',
    period: '2022 - Present',
    description: 'Leading development of enterprise web applications serving 100K+ users. Architected microservices infrastructure and mentored junior developers.',
    achievements: [
      'Reduced application load time by 60% through optimization',
      'Led a team of 6 developers on major product releases',
      'Implemented CI/CD pipeline reducing deployment time by 80%',
    ],
    technologies: [
      { name: 'React', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
      { name: 'Node.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
      { name: 'AWS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original.svg' },
      { name: 'PostgreSQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg' },
      { name: 'Docker', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg' }
    ],
  },
  ];

  const PositionOfResponsibility = [{
    title: 'Core Team Member',
    organization: 'Zenith - The Programming Club of MANIT',
    logo: 'https://camo.githubusercontent.com/3cdfc0143106da3f5470ab1031efaa374015868a8f24151a92269a733d572388/68747470733a2f2f6d656469612e6c6963646e2e636f6d2f646d732f696d6167652f76322f43353130424151455254745f683371594372672f636f6d70616e792d6c6f676f5f3230305f3230302f636f6d70616e792d6c6f676f5f3230305f3230302f302f313633303537323231373332352f7a656e6974685f7468655f70726f6772616d6d696e675f636c75625f6f665f6d616e69745f6c6f676f3f653d3137353333313532303026763d6265746126743d2d4775635332305075572d7263753646596c30696a7176675172755267786b726f704f4d5835717a515159',
    location: 'Bhopal, Madhya Pradesh, India',
    period: '2025 - Present',
    type: '',
    description: 'Active core team member of the programming club, contributing to competitive programming initiatives, technical events, and fostering programming culture at MANIT.',
    achievements: [
      'Leading coding competitions and hackathons organization',
      'Mentoring junior students in competitive programming and DSA',
      'Contributing to club activities and technical workshops',
      'Organizing programming contests and technical events'
    ],
    technologies: [
      { name: 'C++', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg' },
      { name: 'Data Structures', icon: '🏗️' },
      { name: 'Algorithms', icon: '🧮' },
      { name: 'Competitive Programming', icon: '🏆' },
      { name: 'Leadership', icon: '👥' }
    ]
  }];



  return (
    <section id="experience" className="min-h-screen py-20 px-6" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
              Experience & Position of Responsibility
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            My journey through innovative companies, building impactful
            products, leading development teams, and contributing to open source.
          </p>
        </motion.div>

        {/* Open Source Experience */}
        <div className="mb-12 md:mb-16">
          *<h3 className="text-xl md:text-2xl font-bold text-white mb-6 md:mb-8 text-center">Work Experience</h3>
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-4 md:left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-green-400 to-blue-400 hidden md:block" />

            <div className="space-y-8 md:space-y-12">
              {experiences.map((exp, index) => (
                <motion.div
                  key={exp.title + exp.company}
                  initial={{ opacity: 0, x: -50 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className="relative md:ml-16"
                >
                  {/* Timeline Dot */}
                  <div className="absolute -left-12 md:-left-20 top-4 md:top-6 w-3 h-3 md:w-4 md:h-4 bg-green-400 rounded-full border-2 md:border-4 border-gray-900 hidden md:block" />

                  <div className="bg-black/20 backdrop-blur-sm rounded-xl p-4 md:p-8 border border-white/10 hover:border-green-400/50 transition-colors">
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4 md:mb-6">
                      <div className="flex items-start space-x-4 mb-3 md:mb-0">
                        <div className="flex-shrink-0">
                          <img
                            src={exp.logo}
                            alt={`${exp.company} logo`}
                            className="w-12 h-12 md:w-16 md:h-16 rounded-lg object-cover border-2 border-green-400/20"
                            onError={(e) => {
                              e.currentTarget.src = 'https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?auto=format&fit=crop&w=100&q=80';
                            }}
                          />
                        </div>
                        <div>
                          <h3 className="text-xl md:text-2xl font-bold text-white mb-2">{exp.title}</h3>
                          <div className="flex items-center text-green-400 mb-2">
                            <Briefcase size={16} className="mr-2" />
                            <span className="font-semibold text-sm md:text-base">{exp.company}</span>
                          </div>
                        </div>
                      </div>

                      <div className="text-left md:text-right">
                        <div className="flex items-center text-gray-300 mb-1">
                          <Calendar size={14} className="mr-2" />
                          <span className="text-sm md:text-base">{exp.period}</span>
                        </div>
                        <div className="flex items-center text-gray-400">
                          <MapPin size={14} className="mr-2" />
                          <span className="text-sm md:text-base">{exp.location}</span>
                        </div>
                      </div>
                    </div>

                    <p className="text-gray-300 mb-4 md:mb-6 leading-relaxed text-sm md:text-base">
                      {exp.description}
                    </p>

                    <div className="mb-4 md:mb-6">
                      <h4 className="text-base md:text-lg font-semibold text-white mb-3">Key Achievements:</h4>
                      <ul className="space-y-2">
                        {exp.achievements.map((achievement, i) => (
                          <li key={i} className="flex items-start text-gray-300 text-sm md:text-base">
                            <span className="w-1.5 h-1.5 md:w-2 md:h-2 bg-green-400 rounded-full mt-2 mr-3 flex-shrink-0" />
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="flex flex-wrap gap-1.5 md:gap-2">
                      {exp.technologies.map((tech) => (
                        <span
                          key={tech.name}
                          className="inline-flex items-center space-x-2 px-3 py-1 text-xs bg-green-400/10 text-green-400 rounded-full border border-green-400/20"
                        >
                          {tech.icon.startsWith('http') ? (
                            <img
                              src={tech.icon}
                              alt={tech.name}
                              className="w-4 h-4"
                              onError={(e) => {
                                e.currentTarget.style.display = 'none';
                              }}
                            />
                          ) : (
                            <span className="text-sm">{tech.icon}</span>
                          )}
                          <span>{tech.name}</span>
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Position of Responsibility */}
        <div className="mb-12 md:mb-16">
          <h3 className="text-xl md:text-2xl font-bold text-white mb-6 md:mb-8 text-center">Position of Responsibility</h3>
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-4 md:left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-400 to-purple-400 hidden md:block" />

            <div className="space-y-8 md:space-y-12">
              {PositionOfResponsibility.map((pos, index) => (
                <motion.div
                  key={pos.title + pos.organization}
                  initial={{ opacity: 0, x: -50 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className="relative md:ml-16"
                >
                  {/* Timeline Dot */}
                  <div className="absolute -left-12 md:-left-20 top-4 md:top-6 w-3 h-3 md:w-4 md:h-4 bg-blue-400 rounded-full border-2 md:border-4 border-gray-900 hidden md:block" />

                  <div className="bg-black/20 backdrop-blur-sm rounded-xl p-4 md:p-8 border border-white/10 hover:border-blue-400/50 transition-colors">
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4 md:mb-6">
                      <div className="flex items-start space-x-4 mb-3 md:mb-0">
                        <div className="flex-shrink-0">
                          <img
                            src={pos.logo}
                            alt={`${pos.organization} logo`}
                            className="w-12 h-12 md:w-16 md:h-16 rounded-lg object-cover border-2 border-blue-400/20"
                            onError={(e) => {
                              e.currentTarget.src = 'https://camo.githubusercontent.com/3cdfc0143106da3f5470ab1031efaa374015868a8f24151a92269a733d572388/68747470733a2f2f6d656469612e6c6963646e2e636f6d2f646d732f696d6167652f76322f43353130424151455254745f683371594372672f636f6d70616e792d6c6f676f5f3230305f3230302f636f6d70616e792d6c6f676f5f3230305f3230302f302f313633303537323231373332352f7a656e6974685f7468655f70726f6772616d6d696e675f636c75625f6f665f6d616e69745f6c6f676f3f653d3137353333313532303026763d6265746126743d2d4775635332305075572d7263753646596c30696a7176675172755267786b726f704f4d5835717a515159' + pos.organization.charAt(0);
                            }}
                          />
                        </div>
                        <div>
                          <h3 className="text-xl md:text-2xl font-bold text-white mb-2">{pos.title}</h3>
                          <div className="flex items-center text-blue-400 mb-2">
                            <Briefcase size={16} className="mr-2" />
                            <span className="font-semibold text-sm md:text-base">{pos.organization} · {pos.type}</span>
                          </div>
                        </div>
                      </div>

                      <div className="text-left md:text-right">
                        <div className="flex items-center text-gray-300 mb-1">
                          <Calendar size={14} className="mr-2" />
                          <span className="text-sm md:text-base">{pos.period}</span>
                        </div>
                        <div className="flex items-center text-gray-400">
                          <MapPin size={14} className="mr-2" />
                          <span className="text-sm md:text-base">{pos.location}</span>
                        </div>
                      </div>
                    </div>

                    <p className="text-gray-300 mb-4 md:mb-6 leading-relaxed text-sm md:text-base">
                      {pos.description}
                    </p>

                    <div className="mb-4 md:mb-6">
                      <h4 className="text-base md:text-lg font-semibold text-white mb-3">Key Contributions:</h4>
                      <ul className="space-y-2">
                        {pos.achievements.map((achievement, i) => (
                          <li key={i} className="flex items-start text-gray-300 text-sm md:text-base">
                            <span className="w-1.5 h-1.5 md:w-2 md:h-2 bg-blue-400 rounded-full mt-2 mr-3 flex-shrink-0" />
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="flex flex-wrap gap-1.5 md:gap-2">
                      {pos.technologies.map((tech) => (
                        <span
                          key={tech.name}
                          className="inline-flex items-center space-x-2 px-3 py-1 text-xs bg-blue-400/10 text-blue-400 rounded-full border border-blue-400/20"
                        >
                          {tech.icon.startsWith('http') ? (
                            <img
                              src={tech.icon}
                              alt={tech.name}
                              className="w-4 h-4"
                              onError={(e) => {
                                e.currentTarget.style.display = 'none';
                              }}
                            />
                          ) : (
                            <span className="text-sm">{tech.icon}</span>
                          )}
                          <span>{tech.name}</span>
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>


      </div>
    </section>
  );
};

export default ExperienceSection;