import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { ExternalLink, TrendingUp } from 'lucide-react';

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const projects = [
    {
      title: 'Organic Skincare Brand – Market, SWOT & PESTEL Analysis',
      description:
        'A complete academic project analyzing the organic skincare industry, including market size growth from $10.5 billion (2022) to $21 billion (2030), consumer behavior, market segmentation, competitive analysis, SWOT, PESTEL, and buyer persona (Nisha Verma – The Conscious Skincare Seeker).',
      tools: ['Market Research', 'SWOT', 'PESTEL', 'Segmentation', 'Buyer Persona'],
      gradient: 'from-pink-500 to-rose-500',
      image: '/1.jpg',
    },
    {
      title: 'Existing Brand Analysis – Apple iPhone',
      description:
        'An academic analysis of Apple iPhone as an existing global brand, covering strengths, weaknesses, opportunities, threats, and a complete PESTEL analysis.',
      tools: ['Brand Analysis', 'SWOT', 'PESTEL', 'Competitive Analysis'],
      gradient: 'from-green-500 to-emerald-500',
      image: '/2.jpg',
    },
    {
      title: 'Luxury Perfume Brand – Market Research & Buyer Persona',
      description:
        'A detailed study of the luxury perfume industry including global market size, growth rate, luxury consumer behavior, competitive challenges, SWOT, PESTEL, and buyer persona.',
      tools: ['Market Research', 'Luxury Branding', 'SWOT', 'PESTEL'],
      gradient: 'from-purple-500 to-blue-500',
      image: '/3.jpg',
    },
    {
      title: 'Affordable Everyday Shoe Brand – Market Segmentation Strategy',
      description:
        'An academic segmentation project focusing on demographic, geographic, psychographic, and behavioral segmentation with customization and loyalty strategies.',
      tools: ['Segmentation', 'Targeting', 'Consumer Behavior'],
      gradient: 'from-yellow-500 to-orange-500',
      image: '/4.jpg',
    },
    {
      title: 'Laundry Business SEO Project – Keyword & Content Strategy',
      description:
        'A complete SEO project covering keyword research, intent grouping, clustering, SERP analysis, page mapping, content planning, and optimization.',
      tools: ['SEO', 'Keyword Research', 'SERP', 'Content Strategy'],
      gradient: 'from-cyan-500 to-blue-500',
      image: '/5.jpg',
    },
  ];

  return (
    <section id="projects" className="py-20 bg-gray-900 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0">
        <div className="absolute top-40 right-20 w-96 h-96 bg-yellow-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-40 left-20 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl" />
      </div>

      <div
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10"
        ref={ref}
      >
        {/* Header */}
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
            Academic & Practical{' '}
            <span className="bg-gradient-to-r from-yellow-400 to-purple-500 bg-clip-text text-transparent">
              Projects
            </span>
          </motion.h2>

          <motion.div
            initial={{ scaleX: 0 }}
            animate={isInView ? { scaleX: 1 } : {}}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="w-24 h-1 bg-gradient-to-r from-yellow-400 to-purple-500 mx-auto rounded-full"
          />
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1 * index, duration: 0.5 }}
              whileHover={{ y: -10 }}
              className="group relative"
            >
              <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl overflow-hidden hover:border-white/20 transition-all duration-300 h-full">

                {/* IMAGE SECTION */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover scale-100 group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/50 group-hover:bg-black/65 transition-all duration-300 flex items-center justify-center">
                    <ExternalLink className="w-8 h-8 text-white" />
                  </div>
                  <div className="absolute top-4 right-4">
                    <TrendingUp className="w-6 h-6 text-white" />
                  </div>
                </div>

                {/* CONTENT */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-yellow-400 group-hover:to-purple-500 group-hover:bg-clip-text transition-all duration-300">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tools.map((tool, toolIndex) => (
                      <span
                        key={toolIndex}
                        className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs text-gray-300 hover:bg-white/10 hover:border-purple-500/50 transition-all duration-200"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>

                {/* PREMIUM HOVER GRADIENT LINE */}
                <motion.div
                  className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${project.gradient}`}
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

export default Projects;
