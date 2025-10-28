import { motion } from 'motion/react';
import { Monitor, Smartphone, Zap, Code2, Palette, Rocket, Shield, BarChart3 } from 'lucide-react';

export function WebDevShowcase() {
  const features = [
    {
      icon: <Monitor className="w-6 h-6" />,
      title: 'Responsive Design',
      description: 'Pixel-perfect interfaces that adapt seamlessly across all devices',
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: 'Lightning Fast',
      description: 'Optimized for speed with <2s load times and 95+ PageSpeed scores',
    },
    {
      icon: <Code2 className="w-6 h-6" />,
      title: 'Clean Code',
      description: 'Maintainable, scalable architecture using modern frameworks',
    },
    {
      icon: <Palette className="w-6 h-6" />,
      title: 'Custom Design',
      description: 'Unique, brand-focused designs that convert visitors to customers',
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: 'Security First',
      description: 'Enterprise-grade security with SSL, encryption, and data protection',
    },
    {
      icon: <BarChart3 className="w-6 h-6" />,
      title: 'SEO Optimized',
      description: 'Built-in SEO best practices for maximum search visibility',
    },
  ];

  const techStacks = {
    frontend: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Vue.js'],
    backend: ['Node.js', 'Python', 'PostgreSQL', 'MongoDB', 'Redis'],
    mobile: ['React Native', 'Flutter', 'iOS/Swift', 'Android/Kotlin'],
    devops: ['AWS', 'Docker', 'Kubernetes', 'CI/CD', 'CloudFlare'],
  };

  return (
    <section className="py-12 md:py-16 lg:py-20 bg-[#14141A] relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#00D0FF]/5 to-transparent pointer-events-none" />
      
      <div className="container mx-auto px-4 md:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-8 md:mb-12 lg:mb-16">
          <motion.div
            className="inline-block mb-3 md:mb-4 px-3 md:px-4 py-1 bg-[#00D0FF]/10 border border-[#00D0FF]/30 rounded-md backdrop-blur-sm"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-[#00D0FF] text-xs md:text-sm font-mono">DEVELOPMENT SERVICES</span>
          </motion.div>
          
          <motion.h2
            className="text-white mb-3 md:mb-4 text-2xl md:text-3xl lg:text-4xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            Website & App Development
          </motion.h2>
          
          <motion.p
            className="text-[#C2C2CC] text-base md:text-lg lg:text-xl max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            Custom web and mobile applications engineered for performance, scalability, and growth
          </motion.p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mb-12 md:mb-16">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="bg-[#1A1A22] border border-[#00D0FF]/20 rounded-lg p-6 hover:border-[#00D0FF] transition-all duration-300 group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
            >
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-[#00D0FF]/10 border border-[#00D0FF]/30 rounded-lg flex items-center justify-center text-[#00D0FF] group-hover:bg-[#00D0FF]/20 transition-all">
                  {feature.icon}
                </div>
                <div>
                  <h4 className="text-white mb-2">{feature.title}</h4>
                  <p className="text-[#C2C2CC] text-sm">{feature.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Technology Stacks */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {Object.entries(techStacks).map(([category, technologies], categoryIndex) => (
            <motion.div
              key={category}
              className="bg-[#1A1A22] border border-[#00D0FF]/20 rounded-lg p-6"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: categoryIndex * 0.1 }}
            >
              <div className="flex items-center space-x-2 mb-4">
                {category === 'frontend' && <Monitor className="w-5 h-5 text-[#00D0FF]" />}
                {category === 'backend' && <Code2 className="w-5 h-5 text-[#00D0FF]" />}
                {category === 'mobile' && <Smartphone className="w-5 h-5 text-[#00D0FF]" />}
                {category === 'devops' && <Rocket className="w-5 h-5 text-[#00D0FF]" />}
                <h4 className="text-white uppercase text-sm font-mono">{category}</h4>
              </div>
              <div className="space-y-2">
                {technologies.map((tech, index) => (
                  <motion.div
                    key={index}
                    className="flex items-center space-x-2"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: categoryIndex * 0.1 + index * 0.05 }}
                  >
                    <div className="w-1.5 h-1.5 bg-[#75FF00] rounded-full" />
                    <span className="text-[#C2C2CC] text-sm">{tech}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Development Process Timeline */}
        <div className="mt-12 md:mt-16">
          <motion.h3
            className="text-white text-2xl md:text-3xl text-center mb-8 md:mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Development Process
          </motion.h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { step: '01', title: 'Discovery & Planning', desc: 'Requirements analysis and technical architecture design' },
              { step: '02', title: 'Design & Prototyping', desc: 'UI/UX design with interactive prototypes and user testing' },
              { step: '03', title: 'Development & Testing', desc: 'Agile development with continuous integration and QA' },
              { step: '04', title: 'Launch & Support', desc: 'Deployment, monitoring, and ongoing maintenance' },
            ].map((phase, index) => (
              <motion.div
                key={index}
                className="relative"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
              >
                <div className="bg-[#1A1A22] border border-[#00D0FF]/20 rounded-lg p-6 h-full hover:border-[#75FF00] transition-all duration-300">
                  <div className="text-[#75FF00] font-mono text-3xl mb-3 opacity-50">{phase.step}</div>
                  <h4 className="text-white mb-2">{phase.title}</h4>
                  <p className="text-[#C2C2CC] text-sm">{phase.desc}</p>
                </div>
                {index < 3 && (
                  <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-0.5 bg-gradient-to-r from-[#00D0FF] to-transparent" />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
