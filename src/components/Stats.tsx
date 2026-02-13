import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import { Users, Target, Trophy, TrendingUp } from 'lucide-react';

const Stats = () => {
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

  const stats = [
    {
      icon: Users,
      value: counts.clients,
      label: 'Happy Clients',
      suffix: '+',
      color: 'from-blue-500 to-cyan-500',
    },
    {
      icon: Target,
      value: counts.projects,
      label: 'Projects Completed',
      suffix: '+',
      color: 'from-purple-500 to-pink-500',
    },
    {
      icon: Trophy,
      value: counts.campaigns,
      label: 'Campaigns Launched',
      suffix: '+',
      color: 'from-yellow-500 to-orange-500',
    },
    {
      icon: TrendingUp,
      value: counts.growth,
      label: 'Avg Growth Rate',
      suffix: '%',
      color: 'from-green-500 to-emerald-500',
    },
  ];

  return (
    <section className="py-16 bg-gray-800 relative overflow-hidden" ref={ref}>
      <div className="absolute inset-0 bg-gradient-to-r from-purple-900/10 via-transparent to-blue-900/10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
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
                <p className="text-gray-400 text-sm font-medium">{stat.label}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
