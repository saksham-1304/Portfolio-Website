import React, { useRef, useState } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Quote, Star } from 'lucide-react';

const TestimonialsSection: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const testimonials = [  
    {
      name: 'Michael Chen',
      role: 'CTO',
      company: 'Digital Innovation Lab',
      image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=400',
      content: 'Exceptional technical skills combined with creative vision. They delivered a web application that perfectly balanced functionality with an incredible user experience. The 3D elements added exactly the wow factor we needed.',
      rating: 5,
    },
    {
      name: 'Emily Rodriguez',
      role: 'Design Director',
      company: 'Creative Agency',
      image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=400',
      content: 'Their ability to translate our design concepts into interactive 3D experiences was remarkable. The collaboration was smooth, and they consistently provided valuable insights that improved the final outcome.',
      rating: 5,
    },
    {
      name: 'David Park',
      role: 'Lead Developer',
      company: 'StartupHub',
      image: 'https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=400',
      content: 'A true professional who delivers clean, maintainable code. Their expertise in React and Three.js helped us create an application that stands out in the market. Highly recommend for any complex web development project.',
      rating: 5,
    },
    {
      name: 'Lisa Thompson',
      role: 'VP of Engineering',
      company: 'Innovation Corp',
      image: 'https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=400',
      content: 'Outstanding problem-solving skills and technical expertise. They tackled challenging performance issues with grace and delivered solutions that improved our application\'s speed by 60%. A valuable team member.',
      rating: 5,
    },
  ];

  // Auto-scroll functionality
  React.useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval);
  }, [isAutoPlaying, testimonials.length]);

  const nextTestimonial = () => {
    setIsAutoPlaying(false); // Stop auto-play when user interacts
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setIsAutoPlaying(false); // Stop auto-play when user interacts
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const goToSlide = (index: number) => {
    setIsAutoPlaying(false); // Stop auto-play when user interacts
    setCurrentIndex(index);
  };

  return (
    <section id="testimonials" className="min-h-screen py-16 md:py-20 px-4 sm:px-6 lg:px-8" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 md:mb-6">
            <span className="bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
              Client Testimonials
            </span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto px-4">
            Don't just take my word for it. Here's what clients and colleagues 
            have to say about working with me.
          </p>
        </motion.div>

        <div className="relative">
          {/* Main Testimonial Display */}
          <div className="relative min-h-[350px] sm:min-h-[400px] md:min-h-[450px] mb-8 overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5 }}
                className="absolute inset-0 flex items-center justify-center p-2 sm:p-4"
              >
                <div className="bg-black/20 backdrop-blur-sm rounded-2xl p-4 sm:p-6 md:p-8 lg:p-10 border border-white/10 max-w-5xl mx-auto w-full">
                  <div className="flex flex-col lg:flex-row items-center gap-4 sm:gap-6 lg:gap-8">
                    <div className="flex-shrink-0 w-full flex justify-center lg:w-auto">
                      <img
                        src={testimonials[currentIndex].image}
                        alt={testimonials[currentIndex].name}
                        className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 rounded-full object-cover border-4 border-yellow-400/30"
                      />
                    </div>
                    
                    <div className="flex-1 text-center lg:text-left">
                      <Quote className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 text-yellow-400 mb-3 sm:mb-4 mx-auto lg:mx-0" />
                      
                      <p className="text-gray-300 text-xs sm:text-sm md:text-base lg:text-lg leading-relaxed mb-4 sm:mb-6 max-w-3xl px-2 sm:px-0">
                        "{testimonials[currentIndex].content}"
                      </p>
                      
                      <div className="flex items-center justify-center lg:justify-start gap-1 mb-3 sm:mb-4">
                        {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                          <Star key={i} size={14} className="text-yellow-400 fill-current sm:w-4 sm:h-4" />
                        ))}
                      </div>
                      
                      <div>
                        <h4 className="text-base sm:text-lg md:text-xl font-semibold text-white mb-1">
                          {testimonials[currentIndex].name}
                        </h4>
                        <p className="text-yellow-400 font-medium text-xs sm:text-sm md:text-base mb-1">
                          {testimonials[currentIndex].role}
                        </p>
                        <p className="text-gray-400 text-xs sm:text-sm">
                          {testimonials[currentIndex].company}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-3 sm:gap-4 mb-6 md:mb-8">
            <motion.button
              onClick={prevTestimonial}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="p-2 sm:p-3 bg-white/5 backdrop-blur-sm rounded-full border border-white/10 hover:border-yellow-400/50 transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={20} className="text-white" />
            </motion.button>
            
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-colors ${
                    index === currentIndex
                      ? 'bg-yellow-400'
                      : 'bg-white/20 hover:bg-white/40'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
            
            <motion.button
              onClick={nextTestimonial}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="p-2 sm:p-3 bg-white/5 backdrop-blur-sm rounded-full border border-white/10 hover:border-yellow-400/50 transition-colors"
              aria-label="Next testimonial"
            >
              <ChevronRight size={20} className="text-white" />
            </motion.button>
          </div>

          {/* Thumbnail Grid */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-wrap justify-center gap-2 sm:gap-3 md:gap-4 max-w-md mx-auto"
          >
            {testimonials.map((testimonial, index) => (
              <motion.button
                key={index}
                onClick={() => goToSlide(index)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`relative rounded-full transition-all duration-200 ${
                  index === currentIndex 
                    ? 'ring-2 ring-yellow-400 ring-offset-2 ring-offset-transparent' 
                    : ''
                }`}
                aria-label={`View ${testimonial.name}'s testimonial`}
              >
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className={`w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-full object-cover transition-opacity ${
                    index === currentIndex 
                      ? 'opacity-100' 
                      : 'opacity-50 hover:opacity-75'
                  }`}
                />
              </motion.button>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;