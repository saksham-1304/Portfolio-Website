import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import {
    Trophy,
    Award,
    Star,
    Code2,
    Target,
    GitBranch,
    ExternalLink,
    Calendar,
    Medal,
    GraduationCap
} from 'lucide-react';

const AchievementsSection: React.FC = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    interface Achievement {
        title: string;
        description: string;
        date: string;
        icon: any;
        highlight: boolean;
        link?: string;
    }

    interface AchievementCategory {
        category: string;
        icon: any;
        color: string;
        items: Achievement[];
    }    const achievements: AchievementCategory[] = [
        {
            category: 'Competitions & Rankings',
            icon: Trophy,
            color: 'from-yellow-400 via-orange-400 to-red-400',
            items: [
                {
                    title: 'Goldman Sachs India Hackathon 2025',
                    description: 'Achieved All India Rank 206 among thousands of participants in the prestigious Goldman Sachs India Hackathon',
                    date: 'May 2025',
                    icon: Trophy,
                    highlight: true
                },
                {
                    title: 'JEE 2023 - AIR 5180',
                    description: 'Secured All India Rank 5180 among 1.2 million candidates with 99.565059 percentile in Joint Entrance Examination',
                    date: '2023',
                    icon: Medal,
                    highlight: true
                }
            ]
        },
        {
            category: 'Academic Excellence',
            icon: Award,
            color: 'from-yellow-400 to-orange-400',
            items: [
                {
                    title: 'CGPA 9.16/10',
                    description: 'B.Tech CSE at MANIT Bhopal',
                    date: '2023-2027',
                    icon: GraduationCap,
                    highlight: true
                },
                /*{
                  title: 'CPI 8.28/10',
                  description: 'B.S. Data Science & AI at IIT Guwahati',
                  date: '2023-2027',
                  icon: GraduationCap,
                  highlight: true
                }*/
            ]
        }
    ]; const stats = [
        { number: 'AIR 206', label: 'Goldman Sachs Hackathon 2025', icon: Trophy },
        { number: '99.56%', label: 'AIR-5180 JEE@23', icon: Medal },
        { number: '200+', label: 'LeetCode Problems', icon: Target },
        { number: '4', label: 'Open Source Contributions', icon: GitBranch }
    ];
    const competitiveProgramming = [
        {
            platform: 'LeetCode',
            username: 'saksham_0413',
            maxRating: '1515',
            url: 'https://leetcode.com/u/saksham_0413/',
            color: 'from-yellow-400 to-orange-400',
            icon: Code2,
        },
        {
            platform: 'CodeChef',
            username: 'saksham_0413',
            maxRating: '1462',
            url: 'https://www.codechef.com/users/saksham_0413',
            color: 'from-amber-400 to-yellow-400',
            icon: Trophy,
        },
        {
            platform: 'Codeforces',
            username: 'saksham_1304',
            maxRating: '1220',
            url: 'https://codeforces.com/profile/saksham_1304#',
            color: 'from-blue-400 to-cyan-400',
            icon: Star,
        },
    ];

    return (
        <section id="achievements" className="min-h-screen py-20 px-6" ref={ref}>
            <div className="max-w-6xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-6">
                        <span className="bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
                            Achievements & Recognition
                        </span>
                    </h2>
                    <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                        A collection of my academic, competitive programming, and project milestones
                        that showcase dedication to excellence and continuous learning.
                    </p>
                </motion.div>                {/* Stats Grid */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-16 max-w-5xl mx-auto"
                >
                    {stats.map((stat, index) => (
                        <motion.div
                            key={stat.label}
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                            transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                            className="bg-black/20 backdrop-blur-sm rounded-xl p-4 md:p-6 border border-white/10 text-center hover:border-yellow-400/30 transition-all duration-300"
                        >
                            <stat.icon className="w-6 h-6 md:w-8 md:h-8 mx-auto mb-3 text-yellow-400" />
                            <div className="text-xl md:text-2xl lg:text-3xl font-bold text-white mb-2">
                                {stat.number}
                            </div>
                            <div className="text-xs md:text-sm text-gray-300 leading-tight">
                                {stat.label}
                            </div>
                        </motion.div>
                    ))}
                </motion.div>{/* Achievements Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8 max-w-6xl mx-auto">
                    {achievements.map((category, categoryIndex) => (
                        <motion.div
                            key={category.category}
                            initial={{ opacity: 0, y: 30 }}
                            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                            transition={{ duration: 0.6, delay: 0.4 + categoryIndex * 0.1 }}
                            className="bg-black/20 backdrop-blur-sm rounded-xl p-6 border border-white/10"
                        >
                            <div className="flex items-center justify-center mb-6">
                                <div className={`p-3 rounded-full bg-gradient-to-r ${category.color} mr-4`}>
                                    <category.icon className="w-6 h-6 text-white" />
                                </div>
                                <h3 className="text-xl md:text-2xl font-bold text-white text-center">
                                    {category.category}
                                </h3>
                            </div>

                            <div className="space-y-4">
                                {category.items.map((achievement, index) => (
                                    <motion.div
                                        key={achievement.title}
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                                        transition={{ duration: 0.5, delay: 0.5 + categoryIndex * 0.1 + index * 0.05 }}
                                        className={`p-4 rounded-lg border transition-all duration-300 text-center ${achievement.highlight
                                            ? 'bg-white/5 border-white/20 hover:border-yellow-400/50'
                                            : 'bg-white/5 border-white/10 hover:border-white/20'
                                            }`}
                                    >
                                        <div className="flex flex-col items-center">
                                            <div className="flex items-center justify-center mb-3">
                                                <achievement.icon className="w-5 h-5 text-yellow-400 mr-2" />
                                                <h4 className="font-semibold text-white text-base md:text-lg">
                                                    {achievement.title}
                                                </h4>
                                            </div>
                                            <p className="text-gray-300 text-sm md:text-base mb-3 leading-relaxed max-w-md">
                                                {achievement.description}
                                            </p>
                                            <div className="flex items-center justify-center text-xs md:text-sm text-gray-400">
                                                <Calendar className="w-4 h-4 mr-1" />
                                                {achievement.date}
                                            </div>
                                            {achievement.link && (
                                                <motion.a
                                                    href={achievement.link}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    whileHover={{ scale: 1.1 }}
                                                    whileTap={{ scale: 0.9 }}
                                                    className="mt-3 p-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors"
                                                >
                                                    <ExternalLink className="w-4 h-4 text-white/70" />
                                                </motion.a>
                                            )}
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>{/* Competitive Programming */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="mt-16"
                >
                    <h3 className="text-2xl md:text-3xl font-bold text-white mb-8 text-center">
                        <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                            Competitive Programming
                        </span>
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-5xl mx-auto">
                        {competitiveProgramming.map((platform, index) => (
                            <motion.a
                                key={platform.platform}
                                href={platform.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                initial={{ opacity: 0, y: 30 }}
                                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                                transition={{ duration: 0.6, delay: index * 0.1 + 0.5 }}
                                whileHover={{ scale: 1.05, y: -5 }}
                                whileTap={{ scale: 0.95 }}
                                className="group bg-black/20 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-blue-400/50 transition-all duration-300 text-center"
                            >
                                <div className="flex items-center justify-center mb-4">
                                    <div className={`p-3 rounded-full bg-gradient-to-r ${platform.color} mr-3`}>
                                        <platform.icon className="w-6 h-6 text-white" />
                                    </div>
                                    <div className={`text-2xl md:text-3xl font-bold bg-gradient-to-r ${platform.color} bg-clip-text text-transparent`}>
                                        {platform.maxRating}
                                    </div>
                                </div>

                                <h4 className="text-lg md:text-xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">
                                    {platform.platform}
                                </h4>

                                <p className="text-gray-400 text-sm mb-3">
                                    Max Rating: <span className="text-white font-semibold">{platform.maxRating}</span>
                                </p>

                                <p className="text-gray-500 text-xs group-hover:text-gray-400 transition-colors">
                                    @{platform.username}
                                </p>

                                <div className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    <div className="w-full h-px bg-gradient-to-r from-transparent via-blue-400/50 to-transparent"></div>
                                </div>
                            </motion.a>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default AchievementsSection;
