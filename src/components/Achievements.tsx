import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Award, BookOpen, Zap, Users, Target, Rocket } from 'lucide-react';

const Achievements = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const achievements = [
    {
      icon: Award,
      title: 'Digital Marketing Certification',
      issuer: 'Zephyr Technologi',
      color: 'from-yellow-400 to-orange-500',
    },
    {
      icon: BookOpen,
      title: 'Advanced SEO Specialist',
      issuer: 'Industry Certification Board',
      color: 'from-blue-400 to-cyan-500',
    },
    {
      icon: Zap,
      title: 'Google Ads Certified',
      issuer: 'Google',
      color: 'from-red-400 to-pink-500',
    },
    {
      icon: Users,
      title: 'Social Media Mastery Badge',
      issuer: 'Meta Business Partner',
      color: 'from-purple-400 to-pink-500',
    },
    {
      icon: Target,
      title: 'Content Marketing Expert',
      issuer: 'HubSpot Academy',
      color: 'from-green-400 to-emerald-500',
    },
    {
      icon: Rocket,
      title: 'Startup Founder Badge',
      issuer: '3C Cloth Cleaning Centre',
      color: 'from-cyan-400 to-blue-500',
    },
  ];

  return (
    <section className="py-20 bg-gray-900 relative overflow-hidden" ref={ref}>
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-96 h-96 bg-yellow-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl" />
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
            Achievements &{' '}
            <span className="bg-gradient-to-r from-yellow-400 to-purple-500 bg-clip-text text-transparent">
              Certifications
            </span>
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
            Industry recognized qualifications and professional milestones
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {achievements.map((achievement, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1 * index, duration: 0.5 }}
              whileHover={{ scale: 1.05, y: -10 }}
              className="group relative"
            >
              <motion.div
                className={`absolute -inset-1 bg-gradient-to-r ${achievement.color} rounded-3xl blur opacity-0 group-hover:opacity-50 transition-all duration-300`}
              />

              <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 hover:bg-white/10 hover:border-white/20 transition-all duration-300 h-full flex flex-col">
                <motion.div
                  whileHover={{ rotate: 360, scale: 1.2 }}
                  transition={{ duration: 0.6 }}
                  className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${achievement.color} flex items-center justify-center mb-6 shadow-lg`}
                >
                  <achievement.icon className="w-8 h-8 text-white" />
                </motion.div>

                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-yellow-400 group-hover:to-purple-500 group-hover:bg-clip-text transition-all duration-300">
                  {achievement.title}
                </h3>

                <p className="text-gray-400 text-sm mb-4">{achievement.issuer}</p>

               

                <motion.div
                  className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${achievement.color} rounded-b-3xl`}
                  initial={{ scaleX: 0 }}
                  whileHover={{ scaleX: 1 }}
                  transition={{ duration: 0.3 }}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
