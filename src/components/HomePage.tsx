import { ArrowRight, TrendingUp, Zap, BarChart, Server, Database, Cpu, Network, Search, MapPin, Users, Globe, FileText, Smartphone } from 'lucide-react';
import { motion } from 'motion/react';
import { Button } from './ui/button';
import { Card, CardContent } from './ui/card';
import { CircuitBackground } from './CircuitBackground';
import { DataFlowGraphic } from './DataFlowGraphic';
import { TypewriterText } from './TypewriterText';
import { AnimatedHeroMetrics } from './AnimatedHeroMetrics';
import { DataStreamVisualizer } from './DataStreamVisualizer';
import { LiveStatsBar } from './LiveStatsBar';
import { ScrollIndicator } from './ScrollIndicator';
import { SEOServices } from './SEOServices';
import { GMBShowcase } from './GMBShowcase';
import { LocalSEOProcess } from './LocalSEOProcess';
import { ParticleField } from './ParticleField';
import { GlitchText } from './GlitchText';
import { AnimatedGrid } from './AnimatedGrid';
import { MouseFollowParallax } from './MouseFollowParallax';
import { ScanlineEffect } from './ScanlineEffect';
import { RevealText } from './RevealText';
import { MagneticButton } from './MagneticButton';
import { HolographicPanel } from './HolographicPanel';
import { FloatingCard3D } from './FloatingCard3D';
import { CursorTrail } from './CursorTrail';
import { Holographic3DText } from './Holographic3DText';
import { ExplosiveEntrance } from './ExplosiveEntrance';
import { MobileOptimizedWrapper } from './MobileOptimizedWrapper';
import { SimplifiedBackground } from './SimplifiedBackground';
import { MobileCard } from './MobileCard';
import { HeroCarousel } from './HeroCarousel';
import { WebDevShowcase } from './WebDevShowcase';
import { AppDevFeatures } from './AppDevFeatures';
import { ClientTestimonials } from './ClientTestimonials';
import { IndustriesServed } from './IndustriesServed';

interface HomePageProps {
  onNavigate: (page: string) => void;
}

export function HomePage({ onNavigate }: HomePageProps) {
  const services = [
    {
      icon: <Search className="w-10 h-10" />,
      title: 'SEO & Local SEO',
      description: 'Dominate search rankings with technical SEO, local optimization, and Google My Business management.',
      metrics: ['+287% Organic Traffic', '1st Page Rankings'],
    },
    {
      icon: <Users className="w-10 h-10" />,
      title: 'Social Media Marketing',
      description: 'Strategic social media campaigns that build brand awareness and drive engagement.',
      metrics: ['+320% Engagement', '5x ROAS'],
    },
    {
      icon: <FileText className="w-10 h-10" />,
      title: 'Content Marketing',
      description: 'High-quality content that ranks, converts, and establishes thought leadership.',
      metrics: ['2.5x Lead Generation', '+165% Traffic'],
    },
    {
      icon: <Globe className="w-10 h-10" />,
      title: 'Website Development',
      description: 'High-performance websites with responsive design, blazing-fast load times, and conversion optimization.',
      metrics: ['<2s Load Time', '95+ PageSpeed', 'Mobile-First'],
    },
    {
      icon: <Smartphone className="w-10 h-10" />,
      title: 'App Development',
      description: 'Native and cross-platform mobile apps built with React Native, Flutter, and cutting-edge frameworks.',
      metrics: ['iOS & Android', 'Cross-Platform', '99.9% Uptime'],
    },
    {
      icon: <Zap className="w-10 h-10" />,
      title: 'Marketing Automation',
      description: 'Intelligent automation systems that optimize workflows and maximize efficiency.',
      metrics: ['20hrs Saved/Week', '85% Time Reduction'],
    },
    {
      icon: <Server className="w-10 h-10" />,
      title: 'SaaS Solutions',
      description: 'Custom SaaS platforms built for scalability and performance.',
      metrics: ['99.9% Uptime', '10x ROI'],
    },
  ];

  const metrics = [
    { value: '500+', label: 'Enterprise Clients', icon: <Database className="w-6 h-6" /> },
    { value: '98%', label: 'Client Retention', icon: <TrendingUp className="w-6 h-6" /> },
    { value: '$50M+', label: 'Revenue Generated', icon: <BarChart className="w-6 h-6" /> },
    { value: '24/7', label: 'System Uptime', icon: <Cpu className="w-6 h-6" /> },
  ];

  const technologies = [
    'React', 'Node.js', 'Python', 'TensorFlow', 'AWS', 'Docker', 
    'Kubernetes', 'PostgreSQL', 'Redis', 'GraphQL', 'WebSocket', 'AI/ML'
  ];

  return (
    <div className="min-h-screen bg-[#14141A] overflow-x-hidden w-full">
      {/* Cursor Trail - Desktop Only */}
      <MobileOptimizedWrapper>
        <CursorTrail />
      </MobileOptimizedWrapper>
      
      {/* HERO SECTION - Clean, Smooth & Stunning */}
      <section className="relative py-16 md:py-32 overflow-hidden w-full">
        {/* Clean Background Stack */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#14141A] via-[#1A1A22] to-[#14141A] opacity-90" />
        
        {/* Subtle Noise Texture */}
        <div 
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100' height='100' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
          }}
        />

        {/* Lightweight Effects Only */}
        <MobileOptimizedWrapper fallback={<SimplifiedBackground />}>
          <>
            <CircuitBackground />
            <AnimatedGrid />
            <ParticleField />
          </>
        </MobileOptimizedWrapper>

        {/* Scanline Effect - Subtle */}
        <ScanlineEffect opacity={0.03} speed={20} />

        {/* Smooth Gradient Overlay for Depth */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#14141A]/80 via-transparent to-[#14141A]/40 pointer-events-none" />

        <div className="container mx-auto px-4 md:px-6 lg:px-8 relative z-10 max-w-7xl w-full">
          {/* Hero Carousel */}
          <div className="max-w-5xl mx-auto w-full">
            <HeroCarousel onNavigate={onNavigate} />
          </div>

          {/* Mobile Hero Metrics */}
          <div className="mt-10 lg:hidden">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
            >
              <AnimatedHeroMetrics />
            </motion.div>
          </div>

          {/* Scroll Indicator */}
          <div className="flex justify-center mt-12 md:mt-16">
            <ScrollIndicator />
          </div>
        </div>
      </section>

      {/* Live Stats Bar - Desktop */}
      <section className="hidden lg:block py-6 bg-[#14141A] border-b border-[#00D0FF]/20">
        <div className="container mx-auto px-4">
          <LiveStatsBar />
        </div>
      </section>

      {/* Metrics Section */}
      <section className="py-8 md:py-10 lg:py-12 bg-[#1A1A22] border-y border-[#00D0FF]/20 relative overflow-hidden">
        <MobileOptimizedWrapper>
          <div className="absolute inset-0 bg-gradient-to-br from-[#00D0FF]/5 to-[#75FF00]/5" />
        </MobileOptimizedWrapper>
        <div className="container mx-auto px-4 md:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 lg:gap-8">
            {metrics.map((metric, index) => (
              <MobileOptimizedWrapper
                key={index}
                fallback={
                  <motion.div 
                    className="text-center"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-30px" }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <div className="flex justify-center mb-2 md:mb-3 text-[#00D0FF]">
                      {metric.icon}
                    </div>
                    <div className="text-[#75FF00] font-mono text-2xl md:text-3xl lg:text-4xl mb-1 md:mb-2 metric-glow">
                      {metric.value}
                    </div>
                    <div className="text-[#C2C2CC] text-xs md:text-sm px-1">{metric.label}</div>
                  </motion.div>
                }
              >
                <ExplosiveEntrance delay={index * 0.15}>
                  <motion.div 
                    className="text-center"
                    whileHover={{ 
                      scale: 1.1,
                      transition: { type: 'spring', stiffness: 300 }
                    }}
                  >
                    <motion.div 
                      className="flex justify-center mb-3 text-[#00D0FF]"
                      animate={{ 
                        y: [0, -5, 0],
                        rotate: [0, 5, -5, 0],
                      }}
                      transition={{ 
                        duration: 3,
                        repeat: Infinity,
                        delay: index * 0.2
                      }}
                    >
                      {metric.icon}
                    </motion.div>
                    <motion.div 
                      className="text-[#75FF00] font-mono text-3xl md:text-4xl mb-2 metric-glow"
                      animate={{
                        textShadow: [
                          '0 0 20px rgba(117, 255, 0, 0.5)',
                          '0 0 30px rgba(117, 255, 0, 0.8)',
                          '0 0 20px rgba(117, 255, 0, 0.5)',
                        ]
                      }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      {metric.value}
                    </motion.div>
                    <div className="text-[#C2C2CC] text-sm">{metric.label}</div>
                  </motion.div>
                </ExplosiveEntrance>
              </MobileOptimizedWrapper>
            ))}
          </div>
        </div>
      </section>

      {/* Service Pillars */}
      <section className="py-12 md:py-16 lg:py-20 bg-[#14141A] relative overflow-hidden">
        <div className="container mx-auto px-4 md:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-8 md:mb-12 lg:mb-16">
            <MobileOptimizedWrapper
              fallback={
                <motion.div 
                  className="inline-block mb-3 md:mb-4 px-3 md:px-4 py-1 bg-[#00D0FF]/10 border border-[#00D0FF]/30 rounded-md backdrop-blur-sm"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                >
                  <span className="text-[#00D0FF] text-xs md:text-sm font-mono">CORE SERVICES</span>
                </motion.div>
              }
            >
              <ExplosiveEntrance delay={0.2}>
                <div className="inline-block mb-4 px-4 py-1 bg-[#00D0FF]/10 border border-[#00D0FF]/30 rounded-md backdrop-blur-sm">
                  <span className="text-[#00D0FF] text-sm font-mono">CORE SERVICES</span>
                </div>
              </ExplosiveEntrance>
            </MobileOptimizedWrapper>
            
            <MobileOptimizedWrapper
              fallback={
                <motion.h2 
                  className="text-white mb-3 md:mb-4 text-2xl md:text-3xl lg:text-4xl"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                >
                  Service Pillars
                </motion.h2>
              }
            >
              <Holographic3DText delay={0.4}>
                <h2 className="text-white mb-4 text-4xl">Service Pillars</h2>
              </Holographic3DText>
            </MobileOptimizedWrapper>
            
            <motion.p 
              className="text-[#C2C2CC] text-base md:text-lg lg:text-xl max-w-3xl mx-auto px-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              Comprehensive digital marketing solutions focused on SEO, content, and growth
            </motion.p>
          </div>
          
          {/* Primary SEO/Marketing Services (75%) - 3 Column Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8 mb-8">
            {services.slice(0, 3).map((service, index) => (
              <MobileOptimizedWrapper
                key={`primary-${index}`}
                fallback={
                  <MobileCard delay={index * 0.1}>
                    <Card className="bg-[#1A1A22] border-[#00D0FF]/20 hover:border-[#00D0FF] transition-all duration-300 group cursor-pointer overflow-hidden relative h-full backdrop-blur-sm">
                      <CardContent className="pt-6">
                        <motion.div 
                          className="text-[#00D0FF] mb-4"
                          whileHover={{ scale: 1.2, rotate: 360 }}
                          transition={{ type: "spring", stiffness: 300, duration: 0.6 }}
                        >
                          {service.icon}
                        </motion.div>
                        <h3 className="text-white mb-3 text-xl">{service.title}</h3>
                        <p className="text-[#C2C2CC] mb-6">{service.description}</p>
                        <div className="border-t border-[#00D0FF]/10 pt-4 space-y-2">
                          {service.metrics.map((metric, idx) => (
                            <motion.div 
                              key={idx} 
                              className="flex items-center justify-between"
                              initial={{ opacity: 0, x: -20 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              viewport={{ once: true }}
                              transition={{ delay: index * 0.2 + idx * 0.1 }}
                            >
                              <span className="text-[#75FF00] font-mono text-sm">{metric}</span>
                              <div className="flex-grow mx-3 h-px bg-gradient-to-r from-[#00D0FF]/50 to-transparent"></div>
                            </motion.div>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  </MobileCard>
                }
              >
                <FloatingCard3D delay={index * 0.15}>
                  <ExplosiveEntrance delay={index * 0.1}>
                    <Card className="bg-[#1A1A22] border-[#00D0FF]/20 hover:border-[#00D0FF] transition-all duration-300 group cursor-pointer overflow-hidden relative h-full backdrop-blur-sm">
                      <CardContent className="pt-6">
                        <motion.div 
                          className="text-[#00D0FF] mb-4"
                          whileHover={{ scale: 1.2, rotate: 360 }}
                          transition={{ type: "spring", stiffness: 300, duration: 0.6 }}
                        >
                          {service.icon}
                        </motion.div>
                        <h3 className="text-white mb-3 text-xl">{service.title}</h3>
                        <p className="text-[#C2C2CC] mb-6">{service.description}</p>
                        <div className="border-t border-[#00D0FF]/10 pt-4 space-y-2">
                          {service.metrics.map((metric, idx) => (
                            <motion.div 
                              key={idx} 
                              className="flex items-center justify-between"
                              initial={{ opacity: 0, x: -20 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              viewport={{ once: true }}
                              transition={{ delay: index * 0.2 + idx * 0.1 }}
                            >
                              <span className="text-[#75FF00] font-mono text-sm">{metric}</span>
                              <div className="flex-grow mx-3 h-px bg-gradient-to-r from-[#00D0FF]/50 to-transparent"></div>
                            </motion.div>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  </ExplosiveEntrance>
                </FloatingCard3D>
              </MobileOptimizedWrapper>
            ))}
          </div>

          {/* Additional Services (25%) */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
            {services.slice(3).map((service, index) => (
              <MobileOptimizedWrapper
                key={`additional-${index}`}
                fallback={
                  <MobileCard delay={index * 0.1}>
                    <Card className="bg-[#1A1A22] border-[#00D0FF]/20 hover:border-[#00D0FF] transition-all duration-300 group cursor-pointer overflow-hidden relative h-full backdrop-blur-sm">
                      <CardContent className="pt-6">
                        <motion.div 
                          className="text-[#00D0FF] mb-4"
                          whileHover={{ scale: 1.2, rotate: 360 }}
                          transition={{ type: "spring", stiffness: 300, duration: 0.6 }}
                        >
                          {service.icon}
                        </motion.div>
                        <h3 className="text-white mb-3 text-xl">{service.title}</h3>
                        <p className="text-[#C2C2CC] mb-6">{service.description}</p>
                        <div className="border-t border-[#00D0FF]/10 pt-4 space-y-2">
                          {service.metrics.map((metric, idx) => (
                            <motion.div 
                              key={idx} 
                              className="flex items-center justify-between"
                              initial={{ opacity: 0, x: -20 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              viewport={{ once: true }}
                              transition={{ delay: index * 0.2 + idx * 0.1 }}
                            >
                              <span className="text-[#75FF00] font-mono text-sm">{metric}</span>
                              <div className="flex-grow mx-3 h-px bg-[#00D0FF]/50"></div>
                            </motion.div>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  </MobileCard>
                }
              >
                <FloatingCard3D delay={(index + 3) * 0.15}>
                  <ExplosiveEntrance delay={(index + 3) * 0.1}>
                    <Card className="bg-[#1A1A22] border-[#00D0FF]/20 hover:border-[#00D0FF] transition-all duration-300 group cursor-pointer overflow-hidden relative h-full backdrop-blur-sm">
                      <CardContent className="pt-6">
                        <motion.div 
                          className="text-[#00D0FF] mb-4"
                          whileHover={{ scale: 1.2, rotate: 360 }}
                          transition={{ type: "spring", stiffness: 300, duration: 0.6 }}
                        >
                          {service.icon}
                        </motion.div>
                        <h3 className="text-white mb-3 text-xl">{service.title}</h3>
                        <p className="text-[#C2C2CC] mb-6">{service.description}</p>
                        <div className="border-t border-[#00D0FF]/10 pt-4 space-y-2">
                          {service.metrics.map((metric, idx) => (
                            <motion.div 
                              key={idx} 
                              className="flex items-center justify-between"
                              initial={{ opacity: 0, x: -20 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              viewport={{ once: true }}
                              transition={{ delay: index * 0.2 + idx * 0.1 }}
                            >
                              <span className="text-[#75FF00] font-mono text-sm">{metric}</span>
                              <div className="flex-grow mx-3 h-px bg-[#00D0FF]/50"></div>
                            </motion.div>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  </ExplosiveEntrance>
                </FloatingCard3D>
              </MobileOptimizedWrapper>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Stack */}
      <section className="py-12 md:py-16 lg:py-20 bg-[#1A1A22]">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="text-center mb-8 md:mb-10 lg:mb-12">
            <motion.div 
              className="inline-block mb-3 md:mb-4 px-3 md:px-4 py-1 bg-[#00D0FF]/10 border border-[#00D0FF]/30 rounded-md"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-[#00D0FF] text-xs md:text-sm font-mono">TECHNOLOGY STACK</span>
            </motion.div>
            <motion.h2 
              className="text-white mb-3 md:mb-4 text-2xl md:text-3xl lg:text-4xl px-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              Built on Modern Infrastructure
            </motion.h2>
          </div>
          <div className="flex flex-wrap justify-center gap-2 md:gap-3 lg:gap-4 max-w-4xl mx-auto">
            {technologies.map((tech, index) => (
              <motion.div
                key={index}
                className="px-3 md:px-4 py-1.5 md:py-2 bg-[#14141A] border border-[#00D0FF]/30 rounded-md hover:border-[#00D0FF] hover:glow-cyan transition-all cursor-default backdrop-blur-sm"
                initial={{ opacity: 0, scale: 0, rotate: -180 }}
                whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ 
                  delay: index * 0.03,
                  type: 'spring',
                  stiffness: 200,
                  damping: 15
                }}
                whileHover={{ 
                  scale: 1.05,
                  y: -3,
                  transition: { duration: 0.2 }
                }}
              >
                <span className="text-[#C2C2CC] font-mono text-xs md:text-sm">{tech}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Remaining Sections (Unchanged) */}
      <WebDevShowcase />
      <AppDevFeatures />
      <SEOServices />
      <GMBShowcase />
      <LocalSEOProcess />
      <IndustriesServed />
      <ClientTestimonials />

      {/* Why Choose Us Section */}
      <section className="py-20 bg-[#14141A] relative">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block mb-6 px-4 py-1 bg-[#00D0FF]/10 border border-[#00D0FF]/30 rounded-md">
                <span className="text-[#00D0FF] text-sm font-mono">COMPETITIVE EDGE</span>
              </div>
              <h2 className="text-white mb-6 text-4xl">Data-Driven Excellence</h2>
              <p className="text-[#C2C2CC] mb-8 text-lg">
                We combine advanced analytics, AI-powered automation, and enterprise-grade infrastructure to deliver solutions that scale.
              </p>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-[#00D0FF]/10 border border-[#00D0FF]/30 rounded-lg flex items-center justify-center">
                    <TrendingUp className="text-[#00D0FF]" size={24} />
                  </div>
                  <div>
                    <h4 className="text-white mb-2">Measurable Results</h4>
                    <p className="text-[#C2C2CC]">Every decision backed by data. Average 42% ROI increase across all clients.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-[#00D0FF]/10 border border-[#00D0FF]/30 rounded-lg flex items-center justify-center">
                    <Cpu className="text-[#00D0FF]" size={24} />
                  </div>
                  <div>
                    <h4 className="text-white mb-2">AI-Powered Optimization</h4>
                    <p className="text-[#C2C2CC]">Machine learning algorithms continuously optimize performance in real-time.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-[#00D0FF]/10 border border-[#00D0FF]/30 rounded-lg flex items-center justify-center">
                    <Network className="text-[#00D0FF]" size={24} />
                  </div>
                  <div>
                    <h4 className="text-white mb-2">Enterprise Integration</h4>
                    <p className="text-[#C2C2CC]">Seamless integration with your existing tech stack and workflows.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="bg-[#1A1A22] border border-[#00D0FF]/30 rounded-lg p-8 glow-cyan relative overflow-hidden">
                <div className="space-y-4 relative z-10">
                  <div className="flex justify-between items-center pb-3 border-b border-[#00D0FF]/20">
                    <span className="text-[#C2C2CC] font-mono text-sm">System Performance</span>
                    <span className="text-[#75FF00] font-mono">OPTIMAL</span>
                  </div>
                  {[
                    { label: 'Processing Speed', value: 98 },
                    { label: 'Automation Rate', value: 95 },
                    { label: 'Data Accuracy', value: 99 },
                    { label: 'Client Satisfaction', value: 97 },
                  ].map((item, idx) => (
                    <div key={idx}>
                      <div className="flex justify-between mb-2">
                        <span className="text-[#C2C2CC] text-sm">{item.label}</span>
                        <span className="text-[#75FF00] font-mono text-sm">{item.value}%</span>
                      </div>
                      <div className="h-2 bg-[#14141A] rounded-full overflow-hidden">
                        <div 
                          className="h-full bg-gradient-to-r from-[#00D0FF] to-[#75FF00] rounded-full transition-all duration-1000"
                          style={{ width: `${item.value}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-[#00D0FF]/10 to-[#75FF00]/10 border-y border-[#00D0FF]/20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-white mb-4 text-4xl">Ready to Scale Your Operations?</h2>
          <p className="text-[#C2C2CC] text-xl mb-8 max-w-2xl mx-auto">
            Get a comprehensive automation audit and discover optimization opportunities
          </p>
          <Button 
            size="lg" 
            className="bg-[#75FF00] text-[#14141A] hover:bg-[#75FF00]/90 glow-lime font-semibold text-lg"
            onClick={() => onNavigate('contact')}
          >
            Start Automation Audit
            <ArrowRight className="ml-2" size={20} />
          </Button>
        </div>
      </section>
    </div>
  );
}