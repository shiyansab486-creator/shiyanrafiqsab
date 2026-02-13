import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import { Lightbulb, Search, Share2, Globe, TrendingUp, ArrowRight, Users, Target, Trophy } from 'lucide-react';

const Services = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [counts, setCounts] = useState({ clients: 0, projects: 0, campaigns: 0, growth: 0 });

  useEffect(() => {
    if (!isInView) return;

    const targets = { clients: 50, projects: 25, campaigns: 100, growth: 300 };
    const duration = 2000;
    const startTime = Date.now();

    const interval = setInterval(() => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);

      setCounts({
        clients: Math.floor(targets.clients * progress),
        projects: Math.floor(targets.projects * progress),
        campaigns: Math.floor(targets.campaigns * progress),
        growth: Math.floor(targets.growth * progress),
      });

      if (progress === 1) clearInterval(interval);
    }, 16);

    return () => clearInterval(interval);
  }, [isInView]);

  const services = [
    {
      icon: Lightbulb,
      title: 'Digital Marketing Strategy',
      description: 'Comprehensive digital marketing strategies tailored to your business goals, including market research, competitor analysis, and actionable roadmaps.',
      features: ['Market Analysis', 'Strategic Planning', 'Goal Setting', 'Performance Metrics'],
      gradient: 'from-yellow-400 to-orange-500',
    },
    {
      icon: Search,
      title: 'SEO Optimization',
      description: 'Boost your online visibility with advanced SEO techniques, keyword optimization, and content strategies that drive organic traffic.',
      features: ['Keyword Research', 'On-Page SEO', 'Technical SEO', 'Link Building'],
      gradient: 'from-green-400 to-emerald-500',
    },
    {
      icon: Share2,
      title: 'Social Media Management',
      description: 'Build and engage your audience across social platforms with creative content, consistent posting, and community management.',
      features: ['Content Creation', 'Community Management', 'Analytics', 'Paid Campaigns'],
      gradient: 'from-blue-400 to-cyan-500',
    },
    {
      icon: Globe,
      title: 'Website & Brand Promotion',
      description: 'Elevate your brand presence online with strategic website optimization and multi-channel promotional campaigns.',
      features: ['Brand Identity', 'Web Optimization', 'Campaign Management', 'Conversion Optimization'],
      gradient: 'from-purple-400 to-pink-500',
    },
    {
      icon: TrendingUp,
      title: 'Online Business Growth',
      description: 'Scale your online business with data-driven strategies, conversion optimization, and revenue-focused marketing approaches.',
      features: ['Growth Hacking', 'Revenue Optimization', 'Funnel Development', 'A/B Testing'],
      gradient: 'from-red-400 to-rose-500',
    },
  ];

  const stats = [
    {
      icon: Users,
      value: counts.clients,
      label: 'Happy Clients',
      suffix: '+',
      color: 'from-purple-500 to-blue-500',
    },
    {
      icon: Target,
      value: counts.projects,
      label: 'Projects Completed',
      suffix: '+',
      color: 'from-purple-500 to-blue-500',
    },
    {
      icon: Trophy,
      value: counts.campaigns,
      label: 'Campaigns Launched',
      suffix: '+',
      color: 'from-purple-500 to-blue-500',
    },
    {
      icon: TrendingUp,
      value: counts.growth,
      label: 'Avg Growth Rate',
      suffix: '%',
      color: 'from-purple-500 to-blue-500',
    },
  ];

  return (
    <section id="services" className="py-20 bg-gradient-to-b from-gray-800 to-gray-900 relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-purple-900/20 to-transparent" />
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
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold text-white mb-4"
          >
            My <span className="bg-gradient-to-r from-yellow-400 to-purple-500 bg-clip-text text-transparent">Services</span>
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
            Comprehensive digital marketing solutions to grow your business
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1 * index, duration: 0.5 }}
              whileHover={{ y: -15 }}
              className="group relative"
            >
              <motion.div
                className={`absolute -inset-1 bg-gradient-to-r ${service.gradient} rounded-3xl blur opacity-0 group-hover:opacity-75 transition-all duration-500`}
                whileHover={{ scale: 1.02 }}
              />

              <div className="relative bg-gray-900 border border-white/10 rounded-3xl p-8 hover:border-white/20 transition-all duration-300 h-full">
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ duration: 0.3 }}
                  className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.gradient} flex items-center justify-center mb-6 shadow-xl`}
                >
                  <service.icon className="w-8 h-8 text-white" />
                </motion.div>

                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-yellow-400 group-hover:to-purple-500 group-hover:bg-clip-text transition-all duration-300">
                  {service.title}
                </h3>

                <p className="text-gray-400 mb-6 leading-relaxed">
                  {service.description}
                </p>

                <div className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <motion.div
                      key={featureIndex}
                      initial={{ opacity: 0, x: -20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ delay: 0.2 + featureIndex * 0.1 }}
                      className="flex items-center gap-2"
                    >
                      <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${service.gradient}`} />
                      <span className="text-sm text-gray-300">{feature}</span>
                    </motion.div>
                  ))}
                </div>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full flex items-center justify-center gap-2 py-3 bg-white/5 border border-white/10 rounded-xl text-white font-semibold hover:bg-white/10 hover:border-purple-500/50 transition-all duration-300 group/button"
                >
                  Learn More
                  <ArrowRight className="w-4 h-4 group-hover/button:translate-x-1 transition-transform" />
                </motion.button>

                <motion.div
                  className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${service.gradient} rounded-b-3xl`}
                  initial={{ scaleX: 0 }}
                  whileHover={{ scaleX: 1 }}
                  transition={{ duration: 0.3 }}
                />
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="group relative"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${stat.color} rounded-2xl blur opacity-0 group-hover:opacity-40 transition-opacity duration-300`} />

              <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 text-center hover:bg-white/10 hover:border-white/20 transition-all duration-300 h-full flex flex-col items-center justify-center">
                <motion.div
                  whileHover={{ rotate: 360, scale: 1.2 }}
                  transition={{ duration: 0.6 }}
                  className={`w-12 h-12 rounded-xl bg-gradient-to-br ${stat.color} flex items-center justify-center mb-3 shadow-lg`}
                >
                  <stat.icon className="w-6 h-6 text-white" />
                </motion.div>

                <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-yellow-400 to-purple-500 bg-clip-text text-transparent mb-2">
                  {counts.clients !== undefined ? (
                    <>
                      {stat.value}
                      <span className="text-xl">{stat.suffix}</span>
                    </>
                  ) : (
                    '0'
                  )}
                </div>

                <p className="text-gray-400 font-medium">{stat.label}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
