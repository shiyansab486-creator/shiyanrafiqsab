import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

const Testimonials = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [current, setCurrent] = useState(0);

  const testimonials = [
    {
      name: 'Rajesh Kumar',
      role: 'Founder, TechStart Solutions',
      image: 'RK',
      text: 'Shiyan\'s digital marketing expertise transformed our online presence. The campaigns he designed increased our leads by 250% in just 3 months.',
      rating: 5,
      color: 'from-blue-400 to-cyan-400',
    },
    {
      name: 'Priya Sharma',
      role: 'E-commerce Manager, Fashion Hub',
      image: 'PS',
      text: 'Exceptional SEO strategy and social media management. Shiyan truly understands the digital landscape and delivers measurable results.',
      rating: 5,
      color: 'from-purple-400 to-pink-400',
    },
    {
      name: 'Amit Patel',
      role: 'CEO, Digital Growth Co.',
      image: 'AP',
      text: 'Working with Shiyan on our brand strategy was transformative. His creative approach combined with data-driven insights is unmatched.',
      rating: 5,
      color: 'from-yellow-400 to-orange-400',
    },
    {
      name: 'Neha Singh',
      role: 'Marketing Director, StartUp Hub',
      image: 'NS',
      text: 'Shiyan\'s ability to combine strategy with creativity is remarkable. He helped us build a brand identity that resonates with our audience.',
      rating: 5,
      color: 'from-green-400 to-emerald-400',
    },
  ];

  const next = () => setCurrent((current + 1) % testimonials.length);
  const prev = () => setCurrent((current - 1 + testimonials.length) % testimonials.length);

  return (
    <section id="testimonials" className="py-20 bg-gradient-to-b from-gray-800 to-gray-900 relative overflow-hidden" ref={ref}>
      <div className="absolute inset-0">
        <div className="absolute top-1/2 right-0 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-cyan-500/20 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold text-white mb-4"
          >
            Client <span className="bg-gradient-to-r from-yellow-400 to-purple-500 bg-clip-text text-transparent">Testimonials</span>
          </motion.h2>
          <motion.div
            initial={{ scaleX: 0 }}
            animate={isInView ? { scaleX: 1 } : {}}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="w-24 h-1 bg-gradient-to-r from-yellow-400 to-purple-500 mx-auto rounded-full"
          />
          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="mt-6 text-gray-400 text-lg max-w-2xl mx-auto"
          >
            What amazing clients have to say about working together
          </motion.p>
        </motion.div>

        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              className="relative"
            >
              <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 md:p-12 hover:border-white/20 transition-all duration-300">
                <div className="flex flex-col md:flex-row gap-8 items-center">
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    className={`w-24 h-24 rounded-2xl bg-gradient-to-br ${testimonials[current].color} flex items-center justify-center text-white text-2xl font-bold shadow-xl flex-shrink-0`}
                  >
                    {testimonials[current].image}
                  </motion.div>

                  <div className="flex-1">
                    <div className="flex gap-1 mb-4">
                      {[...Array(testimonials[current].rating)].map((_, i) => (
                        <motion.div
                          key={i}
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{ delay: i * 0.1 }}
                        >
                          <Star className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                        </motion.div>
                      ))}
                    </div>

                    <motion.p
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.3 }}
                      className="text-gray-300 text-lg leading-relaxed mb-6 italic"
                    >
                      "{testimonials[current].text}"
                    </motion.p>

                    <div>
                      <h4 className="text-white font-bold text-lg">{testimonials[current].name}</h4>
                      <p className="text-gray-400">{testimonials[current].role}</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="flex gap-4 justify-center mt-8">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={prev}
              className="w-12 h-12 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-white hover:bg-white/20 hover:border-purple-500/50 transition-all duration-300"
            >
              <ChevronLeft className="w-6 h-6" />
            </motion.button>

            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <motion.button
                  key={index}
                  onClick={() => setCurrent(index)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    index === current ? 'w-8 bg-gradient-to-r from-yellow-400 to-purple-500' : 'w-2 bg-white/20'
                  }`}
                  whileHover={{ scale: 1.2 }}
                />
              ))}
            </div>

            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={next}
              className="w-12 h-12 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-white hover:bg-white/20 hover:border-purple-500/50 transition-all duration-300"
            >
              <ChevronRight className="w-6 h-6" />
            </motion.button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
