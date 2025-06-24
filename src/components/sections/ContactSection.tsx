import React, { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import {
  FaGithub,
  FaLinkedin,
  FaInstagram
} from 'react-icons/fa';
import { FaXTwitter } from "react-icons/fa6";
import {
  SiLeetcode,
  SiCodechef,
  SiCodeforces,
  SiStackoverflow,
  SiGeeksforgeeks
} from 'react-icons/si';
import { sendEmail, initEmailJS } from '../../utils/emailService';

const ContactSection: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [emailCopied, setEmailCopied] = useState(false);

  // Initialize EmailJS on component mount
  React.useEffect(() => {
    initEmailJS();
  }, []);

  const copyEmailToClipboard = async () => {
    try {
      await navigator.clipboard.writeText('sakshamsinghrathore1304@gmail.com');
      setEmailCopied(true);
      setTimeout(() => setEmailCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy email:', err);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // Reset status when user starts typing
    if (submitStatus !== 'idle') {
      setSubmitStatus('idle');
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const success = await sendEmail(formData);

      if (success) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactMethods = [
    {
      icon: Mail,
      label: 'Email',
      value: 'sakshamsinghrathore1304@gmail.com',
      href: 'mailto:sakshamsinghrathore1304@gmail.com',
      clickToCopy: true,
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Bhopal, India',
      href: '#',
      clickToCopy: false,
    },
    {
      icon: Phone,
      label: 'Phone-No',
      value: '+93939333',
      href: '#',
      clickToCopy: false,
    },
  ];

  const socialLinks = [
    { icon: FaGithub, href: 'https://github.com/saksham-1304', label: 'GitHub' },
    { icon: FaLinkedin, href: 'https://linkedin.com/in/saksham-singh-rathore1304', label: 'LinkedIn' },
    { icon: FaXTwitter, href: 'https://twitter.com/saksham_1304', label: 'X' },
    { icon: FaInstagram, href: 'https://instagram.com/saksham_1304', label: 'Instagram' },
    { icon: SiLeetcode, href: 'https://leetcode.com/u/saksham_1304', label: 'LeetCode' },
    { icon: SiCodechef, href: 'https://www.codechef.com/users/saksham_1304', label: 'CodeChef' },
    { icon: SiCodeforces, href: 'https://codeforces.com/profile/saksham_1304', label: 'Codeforces' },
    { icon: SiStackoverflow, href: 'https://stackoverflow.com/users/your-stackoverflow-id', label: 'Stack Overflow' },
    { icon: SiGeeksforgeeks, href: 'https://www.geeksforgeeks.org/user/saksham1304', label: 'GeeksforGeeks' },
  ];

  return (
    <section id="contact" className="min-h-screen pt-20 pb-5 px-4 sm:px-6 lg:px-8" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 md:mb-6">
            <span className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
              Get In Touch
            </span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto px-4">
            Ready to bring your ideas to life? Let's discuss your next project
            and create something amazing together.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6 md:space-y-8"
          >
            <div>
              <h3 className="text-xl md:text-2xl font-bold text-white mb-4 md:mb-6">
                Let's Connect
              </h3>
              <p className="text-gray-300 mb-6 md:mb-8 leading-relaxed text-sm md:text-base">
                I'm always excited to work on new projects and collaborate with
                talented individuals. Whether you have a specific project in mind
                or just want to say hello, I'd love to hear from you.
              </p>
            </div>

            {/* Contact Methods */}
            <div className="space-y-4 md:space-y-6">
              {contactMethods.map((method, index) => (
                <motion.div
                  key={method.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.5, delay: index * 0.1 + 0.4 }}
                  className={`flex items-center space-x-3 md:space-x-4 p-3 md:p-4 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 hover:border-emerald-400/50 transition-colors group ${method.clickToCopy ? 'cursor-pointer' : ''
                    }`}
                  onClick={method.clickToCopy ? copyEmailToClipboard : undefined}
                >
                  <div className="flex-shrink-0 p-2 md:p-3 bg-emerald-400/10 rounded-full group-hover:bg-emerald-400/20 transition-colors">
                    <method.icon size={20} className="text-emerald-400" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-xs md:text-sm text-gray-400 truncate">
                      {method.label}
                      {method.clickToCopy && (
                        <span className="ml-2 text-emerald-400 text-xs hidden sm:inline">
                          (Click to copy)
                        </span>
                      )}
                    </p>
                    <p className="text-white font-medium text-sm md:text-base truncate">
                      {method.value}
                    </p>
                  </div>
                  {method.clickToCopy && emailCopied && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.8 }}
                      className="text-green-400 text-xs font-medium flex-shrink-0"
                    >
                      ✓ Copied!
                    </motion.div>
                  )}
                </motion.div>
              ))}
            </div>

            {/* Social Links */}
            <div>
              <h4 className="text-base md:text-lg font-semibold text-white mb-3 md:mb-4">
                Follow Me
              </h4>
              <div className="flex flex-wrap gap-3 md:gap-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, scale: 0 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 + 0.6 }}
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="p-3 bg-white/5 backdrop-blur-sm rounded-full border border-white/10 hover:border-emerald-400/50 transition-colors"
                    aria-label={social.label}
                  >
                    <social.icon size={20} className="text-white/70 hover:text-emerald-400 transition-colors" />
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="bg-black/20 backdrop-blur-sm rounded-2xl p-4 sm:p-6 md:p-8 border border-white/10"
          >
            <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
                <div>
                  <label htmlFor="name" className="block text-xs md:text-sm font-medium text-gray-300 mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-3 md:px-4 py-2 md:py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-400 focus:border-emerald-400/50 focus:outline-none transition-colors text-sm md:text-base"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-xs md:text-sm font-medium text-gray-300 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-3 md:px-4 py-2 md:py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-400 focus:border-emerald-400/50 focus:outline-none transition-colors text-sm md:text-base"
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-xs md:text-sm font-medium text-gray-300 mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  required
                  className="w-full px-3 md:px-4 py-2 md:py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-400 focus:border-emerald-400/50 focus:outline-none transition-colors text-sm md:text-base"
                  placeholder="Project Inquiry"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-xs md:text-sm font-medium text-gray-300 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={4}
                  className="w-full px-3 md:px-4 py-2 md:py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-400 focus:border-emerald-400/50 focus:outline-none transition-colors resize-none text-sm md:text-base"
                  placeholder="Tell me about your project..."
                />
              </div>

              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full flex items-center justify-center space-x-2 px-6 md:px-8 py-3 md:py-4 bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-lg text-white font-semibold hover:shadow-lg hover:shadow-emerald-500/25 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed text-sm md:text-base"
              >
                {isSubmitting ? (
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                    className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full"
                  />
                ) : (
                  <>
                    <Send size={20} />
                    <span>Send Message</span>
                  </>
                )}
              </motion.button>

              {/* Status Messages */}
              {submitStatus === 'success' && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="p-4 bg-green-500/10 border border-green-500/30 rounded-lg text-green-400 text-center text-sm"
                >
                  ✅ Message sent successfully! I'll get back to you soon.
                </motion.div>
              )}

              {submitStatus === 'error' && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="p-4 bg-red-500/10 border border-red-500/30 rounded-lg text-red-400 text-center text-sm"
                >
                  ❌ Failed to send message. Please try again or contact me directly.
                </motion.div>
              )}
            </form>

            {/* Email Copy Notification */}
            {emailCopied && (
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="fixed top-6 left-1/2 transform -translate-x-1/2 z-50 bg-green-500/90 backdrop-blur-sm text-white px-4 py-2 rounded-lg shadow-lg text-sm"
              >
                📧 Email copied to clipboard!
              </motion.div>
            )}
          </motion.div>
        </div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-12 md:mt-16 pt-6 md:pt-8 border-t border-white/10"
        >
          <p className="text-gray-400 mb-4 text-xs sm:text-sm px-4">
            © 2025 Saksham Singh Rathore. Built with React, Three.js, and passion for coding ⚡
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;