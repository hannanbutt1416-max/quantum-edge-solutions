import { BarChart, Zap, Server, CheckCircle, Code, Database, Cpu, Network, LineChart, Target, TrendingUp, Mail, Clock, Shield } from 'lucide-react';
import { Button } from './ui/button';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { CircuitBackground } from './CircuitBackground';
import { LogoDecorative } from './Logo';

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
        { label: 'Avg ROI Increase', value: '+42%' },
        { label: 'Conversion Lift', value: '+127%' },
        { label: 'Cost Reduction', value: '-35%' },
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
        { label: 'Time Saved', value: '20hrs/wk' },
        { label: 'Process Efficiency', value: '+85%' },
        { label: 'Error Reduction', value: '-92%' },
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
        { label: 'Uptime SLA', value: '99.9%' },
        { label: 'Deploy Speed', value: '10x Faster' },
        { label: 'Scalability', value: 'Unlimited' },
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

  return (
    <div className="min-h-screen bg-[#14141A]">
      {/* Hero Section */}
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

      {/* Services Detail */}
      <section className="py-20 bg-[#14141A] relative">
        <LogoDecorative position="top-right" className="w-48 h-48" />
        <LogoDecorative position="bottom-left" className="w-40 h-40" />
        <div className="container mx-auto px-4 space-y-20">
          {services.map((service, index) => (
            <div key={service.id} className={`grid lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:grid-flow-dense' : ''}`}>
              <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                <div className="text-[#00D0FF] mb-4">{service.icon}</div>
                <div className="inline-block mb-4 px-3 py-1 bg-[#00D0FF]/10 border border-[#00D0FF]/30 rounded-md">
                  <span className="text-[#00D0FF] text-xs font-mono">{service.tagline}</span>
                </div>
                <h2 className="text-white mb-4 text-4xl">{service.title}</h2>
                <p className="text-[#C2C2CC] text-lg mb-8">{service.description}</p>
                
                <div className="grid grid-cols-2 gap-4 mb-8">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center space-x-2">
                      <div className="text-[#00D0FF]">{feature.icon}</div>
                      <span className="text-[#C2C2CC] text-sm">{feature.name}</span>
                    </div>
                  ))}
                </div>
                
                <Button 
                  onClick={() => onNavigate('contact')}
                  className="bg-[#75FF00] text-[#14141A] hover:bg-[#75FF00]/90 glow-lime"
                >
                  Learn More
                </Button>
              </div>
              
              <div className={index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}>
                <Card className="bg-[#1A1A22] border-[#00D0FF]/30 glow-cyan">
                  <CardContent className="pt-6">
                    <div className="mb-6">
                      <div className="text-[#C2C2CC] mb-4 font-mono text-sm">PERFORMANCE METRICS</div>
                      <div className="h-px bg-gradient-to-r from-[#00D0FF] to-transparent mb-6"></div>
                    </div>
                    {service.metrics.map((metric, idx) => (
                      <div key={idx} className="mb-6 last:mb-0">
                        <div className="flex justify-between items-center mb-2">
                          <span className="text-[#C2C2CC] text-sm">{metric.label}</span>
                          <span className="text-[#75FF00] font-mono text-2xl metric-glow">{metric.value}</span>
                        </div>
                        <div className="h-1 bg-[#14141A] rounded-full overflow-hidden">
                          <div className="h-full bg-gradient-to-r from-[#00D0FF] to-[#75FF00] w-full rounded-full"></div>
                        </div>
                      </div>
                    ))}
                  </CardContent>
                </Card>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing Packages */}
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

      {/* CTA Section */}
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
