import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Smartphone, MapPin, Sparkles, TrendingUp, DollarSign, Users } from 'lucide-react';

const Brand = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const features = [
    {
      icon: Smartphone,
      title: 'Mobile App Based',
      description: 'Seamless booking and tracking through our user-friendly mobile application',
    },
    {
      icon: MapPin,
      title: 'Doorstep Service',
      description: 'Convenient pickup and delivery right at your doorstep',
    },
    {
      icon: Sparkles,
      title: 'Professional Care',
      description: 'Affordable, hygienic, and professional laundry services',
    },
    {
      icon: Users,
      title: 'Franchise Model',
      description: 'Complete franchise setup support with proven business model',
    },
  ];

  const stats = [
    { number: '100+', label: 'Happy Customers', icon: Users },
    { number: '30%', label: 'Profit Sharing', icon: DollarSign },
    { number: '24/7', label: 'Service Available', icon: Smartphone },
    { number: '98%', label: 'Satisfaction Rate', icon: TrendingUp },
  ];

  return (
    <section id="brand" className="py-20 bg-gray-900 relative overflow-hidden">
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
          }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-cyan-500/20 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.5, 0.3, 0.5],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-4xl md:text-6xl font-bold text-white mb-4"
          >
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              3C
            </span>{' '}
            Cloth Cleaning Centre
          </motion.h2>
          <motion.div
            initial={{ scaleX: 0 }}
            animate={isInView ? { scaleX: 1 } : {}}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto rounded-full"
          />
          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="mt-6 text-gray-400 text-xl max-w-3xl mx-auto leading-relaxed"
          >
            India's premier mobile-app-based laundry franchise model revolutionizing
            convenience, hygiene, and technology in garment care
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="relative"
          >
            <div className="relative bg-gradient-to-br from-cyan-500/20 to-blue-500/20 backdrop-blur-xl border border-white/10 rounded-3xl p-12 overflow-hidden group hover:border-cyan-500/50 transition-all duration-500">
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-blue-500/10"
                animate={{
                  backgroundPosition: ['0% 0%', '100% 100%'],
                }}
                transition={{
                  duration: 20,
                  repeat: Infinity,
                  repeatType: 'reverse',
                }}
              />

              <div className="relative z-10">
                <div className="w-32 h-32 mx-auto mb-8 rounded-full bg-gradient-to-br from-cyan-400 to-blue-500 flex items-center justify-center text-white text-5xl font-bold shadow-2xl shadow-cyan-500/50">
                  3C
                </div>

                <h3 className="text-3xl font-bold text-white text-center mb-6">
                  The Future of Laundry Services
                </h3>

                <p className="text-gray-300 text-center leading-relaxed mb-8">
                  Experience the convenience of professional laundry services at your fingertips.
                  Our innovative franchise model combines cutting-edge technology with traditional
                  care, offering entrepreneurs a proven path to success.
                </p>

                <div className="grid grid-cols-2 gap-4">
                  {features.map((feature, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={isInView ? { opacity: 1, y: 0 } : {}}
                      transition={{ delay: 0.6 + index * 0.1 }}
                      className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-4 hover:bg-white/10 hover:border-cyan-500/50 transition-all duration-300"
                    >
                      <feature.icon className="w-8 h-8 text-cyan-400 mb-2" />
                      <h4 className="text-sm font-semibold text-white mb-1">{feature.title}</h4>
                      <p className="text-xs text-gray-400">{feature.description}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="space-y-6"
          >
            <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 hover:border-cyan-500/50 transition-all duration-500">
              <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                <TrendingUp className="w-8 h-8 text-cyan-400" />
                Business Opportunity
              </h3>
              <p className="text-gray-300 leading-relaxed mb-6">
                Join India's fastest-growing laundry franchise network. With comprehensive
                setup support and a 30% profit-sharing model, 3C offers entrepreneurs a
                turnkey solution to enter the booming service industry.
              </p>
              <ul className="space-y-3">
                {[
                  'Complete franchise setup assistance',
                  'Proven business model with high ROI',
                  '30% profit-sharing structure',
                  'Technology-powered operations',
                  'Marketing and branding support',
                  'Ongoing training and guidance',
                ].map((item, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.8 + index * 0.1 }}
                    className="flex items-center gap-3 text-gray-300"
                  >
                    <div className="w-2 h-2 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500" />
                    {item}
                  </motion.li>
                ))}
              </ul>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: 1 + index * 0.1 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="bg-gradient-to-br from-cyan-500/10 to-blue-500/10 backdrop-blur-xl border border-white/10 rounded-2xl p-6 text-center hover:border-cyan-500/50 hover:shadow-lg hover:shadow-cyan-500/20 transition-all duration-300"
                >
                  <stat.icon className="w-8 h-8 text-cyan-400 mx-auto mb-2" />
                  <div className="text-3xl font-bold text-white mb-1">{stat.number}</div>
                  <div className="text-sm text-gray-400">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1.2, duration: 0.6 }}
          className="text-center"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-gradient-to-r from-cyan-400 to-blue-500 text-white font-bold rounded-full shadow-lg shadow-cyan-500/50 hover:shadow-2xl hover:shadow-cyan-500/70 transition-all duration-300"
          >
            Explore Franchise Opportunities
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Brand;
