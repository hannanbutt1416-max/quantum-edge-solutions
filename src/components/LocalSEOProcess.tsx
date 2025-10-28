import { motion } from 'motion/react';
import { Search, MapPin, BarChart, Target, CheckCircle } from 'lucide-react';

export function LocalSEOProcess() {
  const steps = [
    {
      number: '01',
      icon: <Search className="w-8 h-8" />,
      title: 'Audit & Analysis',
      description: 'Comprehensive audit of your current local presence, citations, and competitors',
      deliverables: ['NAP Audit', 'Citation Analysis', 'Competitor Research']
    },
    {
      number: '02',
      icon: <MapPin className="w-8 h-8" />,
      title: 'GMB Optimization',
      description: 'Complete Google My Business setup, verification, and optimization',
      deliverables: ['Profile Setup', 'Category Selection', 'Review Strategy']
    },
    {
      number: '03',
      icon: <Target className="w-8 h-8" />,
      title: 'Local Citations',
      description: 'Build and optimize citations across top local directories',
      deliverables: ['Directory Listings', 'NAP Consistency', 'Schema Markup']
    },
    {
      number: '04',
      icon: <BarChart className="w-8 h-8" />,
      title: 'Track & Optimize',
      description: 'Continuous monitoring, reporting, and optimization for sustained growth',
      deliverables: ['Ranking Reports', 'Performance Metrics', 'Monthly Updates']
    },
  ];

  return (
    <section className="py-20 bg-[#14141A] relative hex-pattern">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="inline-block mb-4 px-4 py-1 bg-[#75FF00]/10 border border-[#75FF00]/30 rounded-md">
            <span className="text-[#75FF00] text-sm font-mono">OUR PROCESS</span>
          </div>
          <h2 className="text-white mb-4 text-4xl md:text-5xl">
            Local SEO Implementation <span className="text-[#75FF00]">Roadmap</span>
          </h2>
          <p className="text-[#C2C2CC] text-xl max-w-3xl mx-auto">
            A systematic approach to dominating local search results
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              className="relative"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
            >
              {/* Connector Line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-16 left-full w-full h-0.5 bg-gradient-to-r from-[#00D0FF] to-transparent z-0" />
              )}

              <div className="bg-[#1A1A22] border border-[#00D0FF]/20 rounded-lg p-6 hover:border-[#75FF00] transition-all group relative z-10 h-full">
                {/* Step Number */}
                <div className="text-[#00D0FF]/30 font-mono text-5xl mb-4 group-hover:text-[#75FF00]/30 transition-colors">
                  {step.number}
                </div>

                {/* Icon */}
                <motion.div
                  className="text-[#00D0FF] mb-4"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  {step.icon}
                </motion.div>

                {/* Title & Description */}
                <h3 className="text-white mb-3 text-xl">{step.title}</h3>
                <p className="text-[#C2C2CC] text-sm mb-6">{step.description}</p>

                {/* Deliverables */}
                <div className="space-y-2">
                  {step.deliverables.map((item, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-[#75FF00]" />
                      <span className="text-[#C2C2CC] text-xs">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="text-[#C2C2CC] mb-6 text-lg">
            Ready to dominate your local market?
          </p>
          <motion.button
            className="px-8 py-4 bg-[#75FF00] text-[#14141A] rounded-lg font-semibold hover:bg-[#75FF00]/90 transition-all"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Get Your Free SEO Audit
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
