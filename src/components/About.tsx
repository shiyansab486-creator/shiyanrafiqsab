import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { MapPin, GraduationCap, Briefcase, Heart } from 'lucide-react';

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const highlights = [
    {
      icon: MapPin,
      title: 'Location',
      description: 'Honnaver, Tonka',
    },
    {
      icon: GraduationCap,
      title: 'Education',
      description: 'Digital Marketing at Zephyr Technologi, Mangaluru',
    },
    {
      icon: Briefcase,
      title: 'Expertise',
      description: 'Digital Growth & Branding',
    },
    {
      icon: Heart,
      title: 'Passion',
      description: 'Online Business Models',
    },
  ];

  return (
    <section id="about" className="py-20 bg-gray-900 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-purple-900/20 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10" ref={ref}>
        {/* Heading */}
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
            About{" "}
            <span className="bg-gradient-to-r from-yellow-400 to-purple-500 bg-clip-text text-transparent">
              Me
            </span>
          </motion.h2>
          <motion.div
            initial={{ scaleX: 0 }}
            animate={isInView ? { scaleX: 1 } : {}}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="w-24 h-1 bg-gradient-to-r from-yellow-400 to-purple-500 mx-auto rounded-full"
          />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* IMAGE SECTION */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="relative"
          >
            <div className="relative w-full aspect-square rounded-3xl overflow-hidden">
              <img
                src="/shiyansab.jpeg"
                alt="Shiyan Sab"
                loading="lazy"
                decoding="async"
                className="
                  w-full h-full object-cover rounded-3xl
                  transition-all duration-700 ease-out
                  hover:scale-105 hover:-translate-y-2
                  hover:shadow-2xl hover:shadow-black/40
                "
              />
            </div>
          </motion.div>

          {/* TEXT SECTION */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="space-y-6"
          >
            <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 shadow-2xl shadow-purple-500/10">
              <h3 className="text-2xl font-bold text-white mb-4">Shiyan Sab</h3>
              <p className="text-gray-300 leading-relaxed mb-6">
                Currently studying Digital Marketing at Zephyr Technologi, Mangaluru.
                I'm passionate about digital growth, branding, and online business models.
                My journey combines strategic thinking with creative execution to build
                powerful digital brands that make an impact.
              </p>
              <p className="text-gray-300 leading-relaxed">
                From Honnaver, Tonka, I bring a unique perspective to digital marketing,
                focusing on innovative strategies and technology-driven solutions that
                drive real results for businesses and brands.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {highlights.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.7 + index * 0.1, duration: 0.5 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-4 hover:bg-white/10 hover:border-purple-500/50 hover:shadow-lg hover:shadow-purple-500/20 transition-all duration-300 group"
                >
                  <item.icon className="w-8 h-8 text-yellow-400 mb-2 group-hover:scale-110 transition-transform" />
                  <h4 className="text-sm font-semibold text-white mb-1">
                    {item.title}
                  </h4>
                  <p className="text-xs text-gray-400">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;

