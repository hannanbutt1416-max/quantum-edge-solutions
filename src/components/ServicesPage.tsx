import { BarChart, Zap, Server, CheckCircle, Code, Database, Cpu, Network, LineChart, Target, TrendingUp, Mail, Clock, Shield } from 'lucide-react';
import { Button } from './ui/button';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { CircuitBackground } from './CircuitBackground';
import { LogoDecorative } from './Logo';
import { motion, useInView } from 'framer-motion';
import Tilt from 'react-parallax-tilt';
import CountUp from 'react-countup';
import { useRef } from 'react';

interface ServicesPageProps {
  onNavigate: (page: string) => void;
}

export function ServicesPage({ onNavigate }: ServicesPageProps) {
  const services = [
    {
      id: 'marketing',
      icon: <BarChart className="w-12 h-12" />,
      title: 'Digital Marketing',
      tagline: 'Data-Driven Performance Marketing',
      description: 'Precision-targeted campaigns powered by advanced analytics and AI optimization',
      features: [
        { name: 'Performance Analytics', icon: <LineChart size={16} /> },
        { name: 'SEO & SEM Automation', icon: <Target size={16} /> },
        { name: 'Conversion Optimization', icon: <TrendingUp size={16} /> },
        { name: 'Multi-Channel Attribution', icon: <Network size={16} /> },
        { name: 'Predictive Modeling', icon: <Cpu size={16} /> },
        { name: 'Real-time Reporting', icon: <BarChart size={16} /> },
      ],
      metrics: [
        { label: 'Avg ROI Increase', value: 42, suffix: '%', target: 42 },
        { label: 'Conversion Lift', value: 127, suffix: '%', target: 127 },
        { label: 'Cost Reduction', value: 35, suffix: '%', target: 35 },
      ],
    },
    {
      id: 'automation',
      icon: <Zap className="w-12 h-12" />,
      title: 'Marketing Automation',
      tagline: 'Intelligent Workflow Optimization',
      description: 'End-to-end automation systems that maximize efficiency and scale operations',
      features: [
        { name: 'Workflow Automation', icon: <Zap size={16} /> },
        { name: 'Lead Scoring & Nurturing', icon: <Target size={16} /> },
        { name: 'Email Automation', icon: <Mail size={16} /> },
        { name: 'CRM Integration', icon: <Database size={16} /> },
        { name: 'API Orchestration', icon: <Network size={16} /> },
        { name: 'Task Scheduling', icon: <Clock size={16} /> },
      ],
      metrics: [
        { label: 'Time Saved', value: 20, suffix: 'hrs/wk', target: 20 },
        { label: 'Process Efficiency', value: 85, suffix: '%', target: 85 },
        { label: 'Error Reduction', value: 92, suffix: '%', target: 92 },
      ],
    },
    {
      id: 'saas',
      icon: <Server className="w-12 h-12" />,
      title: 'SaaS Solutions',
      tagline: 'Enterprise-Grade Platform Development',
      description: 'Custom SaaS platforms built for scalability, performance, and security',
      features: [
        { name: 'Cloud Architecture', icon: <Server size={16} /> },
        { name: 'Microservices Design', icon: <Network size={16} /> },
        { name: 'API Development', icon: <Code size={16} /> },
        { name: 'Database Optimization', icon: <Database size={16} /> },
        { name: 'Security & Compliance', icon: <Shield size={16} /> },
        { name: 'Performance Monitoring', icon: <Cpu size={16} /> },
      ],
      metrics: [
        { label: 'Uptime SLA', value: 99.9, suffix: '%', target: 99.9 },
        { label: 'Deploy Speed', value: 10, suffix: 'x Faster', target: 10 },
        { label: 'Scalability', value: 100, suffix: '%', target: 100 },
      ],
    },
  ];

  const packages = [
    {
      name: 'Growth',
      price: '$5,000',
      period: '/month',
      description: 'For scaling startups and mid-market companies',
      features: [
        'Full marketing automation',
        'Advanced analytics dashboard',
        'Multi-channel campaigns',
        'Monthly strategy sessions',
        'Dedicated account manager',
      ],
    },
    {
      name: 'Enterprise',
      price: '$15,000',
      period: '/month',
      description: 'For enterprise organizations at scale',
      features: [
        'Everything in Growth',
        'Custom SaaS development',
        'API integration suite',
        'White-glove support',
        'Dedicated dev team',
        'Priority deployment',
      ],
      featured: true,
    },
    {
      name: 'Custom',
      price: 'Custom',
      period: '',
      description: 'Tailored solutions for unique requirements',
      features: [
        'Everything in Enterprise',
        'Custom architecture design',
        'Unlimited integrations',
        '24/7 support',
        'On-premise options',
        'SLA guarantees',
      ],
    },
  ];

  // Reusable Enhanced Service Component
  const EnhancedService = ({ service, index }: { service: typeof services[0]; index: number }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });
    const isOdd = index % 2 === 1;

    return (
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 80 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, delay: index * 0.15 }}
        className={`grid lg:grid-cols-2 gap-12 lg:gap-20 items-center ${isOdd ? 'lg:grid-flow-dense' : ''}`}
      >
        {/* Content */}
        <motion.div
          className={isOdd ? 'lg:col-start-2' : ''}
          whileHover={{ x: isOdd ? -8 : 8 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <div className="text-[#00D0FF] mb-6 p-3 w-fit rounded-xl bg-gradient-to-br from-[#00D0FF]/20 to-transparent border border-[#00D0FF]/40 backdrop-blur-sm">
            {service.icon}
          </div>
          <div className="inline-block mb-4 px-4 py-1.5 bg-gradient-to-r from-[#00D0FF]/20 to-[#75FF00]/20 border border-[#00D0FF]/40 rounded-full">
            <span className="text-[#00D0FF] text-xs font-mono tracking-wider">{service.tagline}</span>
          </div>
          <h2 className="text-white mb-5 text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-[#C2C2CC]">
            {service.title}
          </h2>
          <p className="text-[#C2C2CC] text-lg mb-10 leading-relaxed max-w-xl">
            {service.description}
          </p>

          <div className="grid grid-cols-2 gap-5 mb-10">
            {service.features.map((feature, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: idx * 0.05 + 0.3 }}
                className="flex items-center space-x-3 p-3 rounded-lg bg-[#1A1A22]/50 backdrop-blur border border-[#00D0FF]/20 hover:border-[#00D0FF]/50 transition-all group"
              >
                <div className="text-[#00D0FF] group-hover:scale-110 transition-transform">
                  {feature.icon}
                </div>
                <span className="text-[#C2C2CC] text-sm font-medium">{feature.name}</span>
              </motion.div>
            ))}
          </div>

          <Button
            onClick={() => onNavigate('contact')}
            className="relative overflow-hidden bg-gradient-to-r from-[#75FF00] to-[#00D0FF] text-[#14141A] font-bold text-lg px-8 py-6 rounded-xl shadow-xl hover:shadow-[#75FF00]/50 transition-all group"
          >
            <span className="relative z-10">Explore {service.title.split(' ')[0]}</span>
            <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity"></div>
          </Button>
        </motion.div>

        {/* Metrics Card */}
        <div className={isOdd ? 'lg:col-start-1 lg:row-start-1' : ''}>
          <Tilt
            glareEnable
            glareMaxOpacity={0.3}
            glareColor="#00D0FF"
            glarePosition="all"
            tiltMaxAngleX={10}
            tiltMaxAngleY={10}
            perspective={1000}
            className="h-full"
          >
            <Card className="bg-gradient-to-br from-[#1A1A22]/90 to-[#14141A]/90 border border-[#00D0FF]/40 backdrop-blur-xl shadow-2xl overflow-hidden">
              <CardContent className="p-8">
                <div className="mb-8">
                  <h3 className="text-[#00D0FF] font-mono text-sm tracking-widest uppercase">Impact Metrics</h3>
                  <div className="h-1 w-20 bg-gradient-to-r from-[#00D0FF] to-[#75FF00] mt-2 rounded-full"></div>
                </div>

                {service.metrics.map((metric: any, idx) => {
                  const countRef = useRef(null);
                  const countInView = useInView(countRef, { once: true });

                  return (
                    <motion.div
                      key={idx}
                      ref={countRef}
                      initial={{ opacity: 0, x: -50 }}
                      animate={countInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ delay: idx * 0.15 }}
                      className="mb-8 last:mb-0"
                    >
                      <div className="flex justify-between items-end mb-3">
                        <span className="text-[#C2C2CC] text-sm font-medium">{metric.label}</span>
                        <span className="text-[#75FF00] font-bold text-3xl font-mono">
                          {countInView && (
                            <CountUp
                              start={0}
                              end={metric.target}
                              duration={2.5}
                              decimals={metric.suffix.includes('.') ? 1 : 0}
                              suffix={metric.suffix.replace(/[0-9]/g, '')}
                            />
                          )}
                          {metric.suffix.includes('x') && 'x'}
                        </span>
                      </div>
                      <div className="h-2 bg-[#14141A] rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={countInView ? { width: `${Math.min(metric.target, 100)}%` } : {}}
                          transition={{ duration: 1.5, ease: "easeOut" }}
                          className="h-full bg-gradient-to-r from-[#00D0FF] via-[#75FF00] to-[#00D0FF] rounded-full shadow-glow"
                        />
                      </div>
                    </motion.div>
                  );
                })}
              </CardContent>
            </Card>
          </Tilt>
        </div>
      </motion.div>
    );
  };

  return (
    <div className="min-h-screen bg-[#14141A]">
      {/* Hero Section - UNCHANGED */}
      <section className="relative py-20 overflow-hidden hex-pattern">
        <CircuitBackground />
        <div className="container mx-auto px-4 relative z-10 text-center">
          <div className="inline-block mb-6 px-4 py-2 bg-[#00D0FF]/10 border border-[#00D0FF]/30 rounded-md">
            <span className="text-[#00D0FF] text-sm font-mono">OUR SERVICES</span>
          </div>
          <h1 className="text-white mb-6 text-5xl">Enterprise Solutions</h1>
          <p className="text-[#C2C2CC] text-xl max-w-3xl mx-auto">
            Full-stack digital services engineered for performance, precision, and measurable growth
          </p>
        </div>
      </section>

      {/* Services Detail - ALL THREE ENHANCED */}
      <section className="py-20 bg-[#14141A] relative">
        <LogoDecorative position="top-right" className="w-48 h-48" />
        <LogoDecorative position="bottom-left" className="w-40 h-40" />
        <div className="container mx-auto px-4 space-y-32">
          {services.map((service, index) => (
            <EnhancedService key={service.id} service={service} index={index} />
          ))}
        </div>
      </section>

      {/* Pricing Packages - UNCHANGED */}
      <section className="py-20 bg-[#1A1A22]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-block mb-4 px-4 py-1 bg-[#00D0FF]/10 border border-[#00D0FF]/30 rounded-md">
              <span className="text-[#00D0FF] text-sm font-mono">PRICING</span>
            </div>
            <h2 className="text-white mb-4 text-4xl">Investment Packages</h2>
            <p className="text-[#C2C2CC] text-xl">
              Scalable solutions designed for your growth stage
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {packages.map((pkg, index) => (
              <Card 
                key={index} 
                className={`bg-[#14141A] border-[#00D0FF]/20 hover:border-[#00D0FF] transition-all ${
                  pkg.featured ? 'border-[#75FF00] glow-lime scale-105' : ''
                }`}
              >
                <CardHeader>
                  {pkg.featured && (
                    <div className="text-[#75FF00] text-xs font-mono mb-2">RECOMMENDED</div>
                  )}
                  <CardTitle className="text-white">{pkg.name}</CardTitle>
                  <div className="mt-4">
                    <span className="text-[#75FF00] font-mono text-3xl">{pkg.price}</span>
                    <span className="text-[#C2C2CC]">{pkg.period}</span>
                  </div>
                  <p className="text-[#C2C2CC] text-sm mt-2">{pkg.description}</p>
                </CardHeader>
                <CardContent>
                  <div className="h-px bg-[#00D0FF]/20 mb-6"></div>
                  <ul className="space-y-3 mb-6">
                    {pkg.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start space-x-2">
                        <CheckCircle className="text-[#00D0FF] flex-shrink-0 mt-0.5" size={16} />
                        <span className="text-[#C2C2CC] text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button 
                    className={`w-full ${
                      pkg.featured 
                        ? 'bg-[#75FF00] text-[#14141A] hover:bg-[#75FF00]/90' 
                        : 'bg-[#00D0FF]/10 text-[#00D0FF] border border-[#00D0FF]/30 hover:bg-[#00D0FF]/20'
                    }`}
                    onClick={() => onNavigate('contact')}
                  >
                    Get Started
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section - UNCHANGED */}
      <section className="py-20 bg-gradient-to-br from-[#00D0FF]/10 to-[#75FF00]/10 border-y border-[#00D0FF]/20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-white mb-4 text-4xl">Ready to Optimize Your Operations?</h2>
          <p className="text-[#C2C2CC] text-xl mb-8 max-w-2xl mx-auto">
            Schedule a technical consultation to discuss your requirements
          </p>
          <Button 
            size="lg" 
            className="bg-[#75FF00] text-[#14141A] hover:bg-[#75FF00]/90 glow-lime font-semibold"
            onClick={() => onNavigate('contact')}
          >
            Schedule Consultation
          </Button>
        </div>
      </section>
    </div>
  );
}