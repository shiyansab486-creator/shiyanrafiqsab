import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Briefcase, GraduationCap, Rocket, Award } from 'lucide-react';

const Experience = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const experiences = [
    {
      icon: GraduationCap,
      title: 'Digital Marketing Student',
      company: 'Zephyr Technologi, Mangaluru',
      period: '2023 - Present',
      description: 'Currently pursuing comprehensive digital marketing education, focusing on SEO, social media strategies, content marketing, and data analytics.',
      highlights: [
        'Mastered fundamentals of digital marketing',
        'Practical experience with industry tools',
        'Real-world campaign development',
      ],
      color: 'from-blue-500 to-cyan-500',
    },
    {
      icon: Rocket,
      title: 'Founder & Brand Developer',
      company: '3C - Cloth Cleaning Centre',
      period: '2024 - Present',
      description: 'Founded and developed a mobile-app-based laundry franchise model, managing brand strategy, marketing, and business development.',
      highlights: [
        'Built franchise model from ground up',
        'Developed complete brand identity',
        'Implemented digital-first approach',
      ],
      color: 'from-purple-500 to-pink-500',
    },
    {
      icon: Briefcase,
      title: 'Freelance Digital Marketer',
      company: 'Various Clients',
      period: '2023 - Present',
      description: 'Delivered comprehensive digital marketing solutions for diverse clients, including SEO optimization, social media management, and content strategy.',
      highlights: [
        'Managed multiple client campaigns',
        'Achieved measurable growth results',
        'Built strong client relationships',
      ],
      color: 'from-yellow-500 to-orange-500',
    },
    {
      icon: Award,
      title: 'Campaign Projects & Achievements',
      company: 'Academic & Professional',
      period: '2023 - 2024',
      description: 'Successfully executed various digital marketing campaigns and projects, demonstrating proficiency in strategy development and execution.',
      highlights: [
        'Increased engagement by 300%+',
        'Delivered 4x ROI on ad campaigns',
        'Created viral social content',
      ],
      color: 'from-green-500 to-emerald-500',
    },
  ];

  return (
    <section id="experience" className="py-20 bg-gradient-to-b from-gray-900 to-gray-800 relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-40 left-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-0 w-80 h-80 bg-yellow-500/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10" ref={ref}>
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
            My <span className="bg-gradient-to-r from-yellow-400 to-purple-500 bg-clip-text text-transparent">Journey</span>
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
            A timeline of growth, learning, and achievements
          </motion.p>
        </motion.div>

        <div className="relative">
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-yellow-400 via-purple-500 to-blue-500" />

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.2 * index, duration: 0.5 }}
                className={`relative flex items-center ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                <div className={`w-full md:w-1/2 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}`}>
                  <motion.div
                    whileHover={{ scale: 1.02, y: -5 }}
                    className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-6 hover:bg-white/10 hover:border-white/20 hover:shadow-2xl hover:shadow-purple-500/20 transition-all duration-300"
                  >
                    <div className="flex items-start gap-4 mb-4">
                      <motion.div
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.6 }}
                        className={`w-12 h-12 rounded-xl bg-gradient-to-br ${exp.color} flex items-center justify-center flex-shrink-0 shadow-lg`}
                      >
                        <exp.icon className="w-6 h-6 text-white" />
                      </motion.div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-white mb-1">{exp.title}</h3>
                        <p className="text-purple-400 font-medium mb-1">{exp.company}</p>
                        <p className="text-sm text-gray-500">{exp.period}</p>
                      </div>
                    </div>

                    <p className="text-gray-300 leading-relaxed mb-4">
                      {exp.description}
                    </p>

                    <div className="space-y-2">
                      {exp.highlights.map((highlight, hIndex) => (
                        <motion.div
                          key={hIndex}
                          initial={{ opacity: 0, x: -20 }}
                          animate={isInView ? { opacity: 1, x: 0 } : {}}
                          transition={{ delay: 0.3 + index * 0.2 + hIndex * 0.1 }}
                          className="flex items-center gap-2"
                        >
                          <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${exp.color}`} />
                          <span className="text-sm text-gray-400">{highlight}</span>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                </div>

                <motion.div
                  whileHover={{ scale: 1.2 }}
                  className="absolute left-8 md:left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-white border-4 border-gray-900 shadow-lg shadow-purple-500/50 z-10"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
