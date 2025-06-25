import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Briefcase, Calendar, MapPin } from 'lucide-react';

const OpenSourceSection: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="opensource" ref={ref} className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Open Source Experience */}
      <div className="mb-16">
      <h2 className="text-4xl md:text-5xl font-bold mb-6 text-center">
            <span className="bg-gradient-to-r from-orange-400 to-pink-400 bg-clip-text text-transparent">
              Open Source Contributions
            </span>
          </h2>

        {/* Hacktoberfest 2024 Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
          className="bg-black/20 backdrop-blur-sm rounded-xl p-8 border border-white/10 hover:border-orange-400/50 transition-colors mb-8"
        >
          <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-6">
            <div className="flex items-center mb-4 md:mb-0">
              <img
                src="https://raw.githubusercontent.com/github/explore/e838e6d3526495c83c195ed234acf109cb781f00/topics/hacktoberfest/hacktoberfest.png"
                alt="Hacktoberfest"
                className="w-12 h-12 mr-4"
              />
              <div>
                <h3 className="text-2xl font-bold text-white mb-2">Open Source Contributor</h3>
                <div className="flex items-center text-orange-400 mb-2">
                  <Briefcase size={18} className="mr-2" />
                  <span className="font-semibold">Hacktoberfest · Full-time</span>
                </div>
              </div>
            </div>

            <div className="text-right">
              <div className="flex items-center text-gray-300 mb-1">
                <Calendar size={16} className="mr-2" />
                <span>Oct 2024 - Oct 2024 · 1 mo</span>
              </div>
              <div className="flex items-center text-gray-400">
                <MapPin size={16} className="mr-2" />
                <span>Remote</span>
              </div>
            </div>
          </div>

          <p className="text-gray-300 mb-6 leading-relaxed">
            Actively contributed to the open-source community as a participant in Hacktoberfest 2024, collaborating with developers worldwide.
          </p>

          {/* Pull Requests Section */}
          <div className="mb-6">
            <h4 className="text-lg font-semibold text-white mb-4">Contributions:</h4>

            {/* awesome-github-profiles */}
            <div className="mb-6 p-4 bg-gray-800/50 rounded-lg border border-gray-700/50">
              <h5 className="text-white font-semibold mb-3 flex items-center">
                <span className="w-3 h-3 bg-green-400 rounded-full mr-3"></span>
                awesome-github-profiles
              </h5>
              <div className="flex flex-wrap gap-2 mb-3">
                <a href="https://github.com/recodehive/awesome-github-profiles/pull/1050" target="_blank" rel="noopener noreferrer" className="inline-flex items-center px-3 py-1 bg-green-600/20 text-green-400 rounded-full text-sm hover:bg-green-600/30 transition-colors">
                  PR #1050
                </a>
                <a href="https://github.com/recodehive/awesome-github-profiles/pull/1135" target="_blank" rel="noopener noreferrer" className="inline-flex items-center px-3 py-1 bg-green-600/20 text-green-400 rounded-full text-sm hover:bg-green-600/30 transition-colors">
                  PR #1135
                </a>
                <a href="https://github.com/recodehive/awesome-github-profiles/pull/1156" target="_blank" rel="noopener noreferrer" className="inline-flex items-center px-3 py-1 bg-green-600/20 text-green-400 rounded-full text-sm hover:bg-green-600/30 transition-colors">
                  PR #1156
                </a>
              </div>
              <p className="text-gray-400 text-sm">
                Fixed critical UI bugs including Twitter logo visibility, dark-mode link disappearance, and mobile toggle functionality issues.
              </p>
            </div>

            {/* Postman-Challenge */}
            <div className="mb-4 p-4 bg-gray-800/50 rounded-lg border border-gray-700/50">
              <h5 className="text-white font-semibold mb-3 flex items-center">
                <span className="w-3 h-3 bg-blue-400 rounded-full mr-3"></span>
                Postman-Challenge (GSSoC'24)
              </h5>
              <div className="flex flex-wrap gap-2 mb-3">
                <a href="https://github.com/GSSoC24/Postman-Challenge/pull/2305" target="_blank" rel="noopener noreferrer" className="inline-flex items-center px-3 py-1 bg-blue-600/20 text-blue-400 rounded-full text-sm hover:bg-blue-600/30 transition-colors">
                  PR #2305
                </a>
              </div>
              <p className="text-gray-400 text-sm">Improved community-driven resources and enhanced project functionality during GSSoC'24.</p>
            </div>
          </div>

          <div className="mb-6">
            <h4 className="text-lg font-semibold text-white mb-3">Key Achievements:</h4>
            <ul className="space-y-2">
              <li className="flex items-start text-gray-300">
                <span className="w-2 h-2 bg-orange-400 rounded-full mt-2 mr-3 flex-shrink-0" />
                Made successful Pull Requests to multiple repositories
              </li>
              <li className="flex items-start text-gray-300">
                <span className="w-2 h-2 bg-orange-400 rounded-full mt-2 mr-3 flex-shrink-0" />
                Gained hands-on experience with Git, GitHub workflow, and open-source collaboration
              </li>
              <li className="flex items-start text-gray-300">
                <span className="w-2 h-2 bg-orange-400 rounded-full mt-2 mr-3 flex-shrink-0" />
                Strengthened skills in version control, issue tracking, and pull request management
              </li>
            </ul>
          </div>

          <div className="flex flex-wrap gap-2">
            {[
              { name: 'React.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
              { name: 'JavaScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
              { name: 'HTML5', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
              { name: 'CSS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },
              { name: 'Git', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
              { name: 'GitHub', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg' },
              { name: 'Version Control', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
              { name: 'Open-Source Development', icon: '🔓' },
              { name: 'Pull Request Management', icon: '🔄' },
              { name: 'Issue Tracking', icon: '🐛' },
              { name: 'Front-End Development', icon: '💻' },
              { name: 'Responsive Design', icon: '📱' },
              { name: 'Problem Solving', icon: '🧩' },
              { name: 'Collaboration', icon: '🤝' },
              { name: 'Community Contribution', icon: '🌟' }
            ].map((tech) => (
              <span
                key={tech.name}
                className="inline-flex items-center space-x-2 px-3 py-1 text-xs bg-orange-400/10 text-orange-400 rounded-full border border-orange-400/20"
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
        </motion.div>
      </div>
    </section>
  );
};

export default OpenSourceSection;