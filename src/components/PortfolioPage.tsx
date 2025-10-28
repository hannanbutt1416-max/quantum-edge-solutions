import { useState } from 'react';
import { TrendingUp, DollarSign, Clock, Users, ArrowRight } from 'lucide-react';
import { Card, CardContent } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { CircuitBackground } from './CircuitBackground';
import { LogoDecorative } from './Logo';

interface PortfolioPageProps {
  onNavigate: (page: string) => void;
}

export function PortfolioPage({ onNavigate }: PortfolioPageProps) {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const caseStudies = [
    {
      id: 1,
      category: 'saas',
      title: 'Enterprise CRM Platform Migration',
      client: 'TechCorp Global',
      industry: 'Technology',
      challenge: 'Legacy CRM system unable to scale with 10x growth',
      solution: 'Built microservices-based SaaS platform with real-time analytics',
      results: [
        { metric: 'System Performance', value: '+340%', icon: <TrendingUp size={16} /> },
        { metric: 'Cost Reduction', value: '-65%', icon: <DollarSign size={16} /> },
        { metric: 'Deploy Time', value: '10x Faster', icon: <Clock size={16} /> },
      ],
      technologies: ['React', 'Node.js', 'PostgreSQL', 'AWS', 'Docker'],
      image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    },
    {
      id: 2,
      category: 'automation',
      title: 'Marketing Automation Suite',
      client: 'FinanceFlow Inc',
      industry: 'Financial Services',
      challenge: 'Manual lead nurturing consuming 40+ hours weekly',
      solution: 'AI-powered automation with predictive lead scoring',
      results: [
        { metric: 'Time Saved', value: '35hrs/wk', icon: <Clock size={16} /> },
        { metric: 'Conversion Rate', value: '+127%', icon: <TrendingUp size={16} /> },
        { metric: 'Lead Quality', value: '+89%', icon: <Users size={16} /> },
      ],
      technologies: ['Python', 'TensorFlow', 'Redis', 'GraphQL', 'Kafka'],
      image: 'https://images.pexels.com/photos/5473958/pexels-photo-5473958.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    },
    {
      id: 3,
      category: 'marketing',
      title: 'Multi-Channel Attribution System',
      client: 'RetailMax',
      industry: 'E-commerce',
      challenge: 'Unable to track customer journey across 12+ channels',
      solution: 'Custom attribution platform with ML-powered insights',
      results: [
        { metric: 'ROI Visibility', value: '+420%', icon: <DollarSign size={16} /> },
        { metric: 'Ad Spend Efficiency', value: '+156%', icon: <TrendingUp size={16} /> },
        { metric: 'Revenue Growth', value: '+$2.4M', icon: <DollarSign size={16} /> },
      ],
      technologies: ['Python', 'BigQuery', 'React', 'D3.js', 'FastAPI'],
      image: 'https://images.pexels.com/photos/5905709/pexels-photo-5905709.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    },
    {
      id: 4,
      category: 'saas',
      title: 'Real-Time Analytics Dashboard',
      client: 'DataDrive Analytics',
      industry: 'SaaS',
      challenge: 'Batch processing causing 24hr data delays',
      solution: 'Real-time streaming analytics with sub-second latency',
      results: [
        { metric: 'Data Latency', value: '<100ms', icon: <Clock size={16} /> },
        { metric: 'Query Performance', value: '+890%', icon: <TrendingUp size={16} /> },
        { metric: 'User Adoption', value: '+215%', icon: <Users size={16} /> },
      ],
      technologies: ['Apache Kafka', 'ClickHouse', 'WebSocket', 'React', 'Grafana'],
      image: 'https://images.pexels.com/photos/3184296/pexels-photo-3184296.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    },
    {
      id: 5,
      category: 'automation',
      title: 'Enterprise Email Orchestration',
      client: 'GlobalReach Marketing',
      industry: 'Marketing Agency',
      challenge: 'Managing 500K+ contacts across fragmented systems',
      solution: 'Unified email automation with AI personalization',
      results: [
        { metric: 'Email Volume', value: '10M+/mo', icon: <TrendingUp size={16} /> },
        { metric: 'Open Rate', value: '+68%', icon: <Users size={16} /> },
        { metric: 'Deliverability', value: '99.4%', icon: <TrendingUp size={16} /> },
      ],
      technologies: ['SendGrid API', 'Redis', 'PostgreSQL', 'Python', 'Celery'],
      image: 'https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    },
    {
      id: 6,
      category: 'marketing',
      title: 'Predictive Lead Scoring Model',
      client: 'SaaSify Platform',
      industry: 'B2B SaaS',
      challenge: 'Sales team unable to prioritize 10K+ monthly leads',
      solution: 'ML-based lead scoring with behavioral analysis',
      results: [
        { metric: 'Sales Efficiency', value: '+310%', icon: <TrendingUp size={16} /> },
        { metric: 'Close Rate', value: '+145%', icon: <DollarSign size={16} /> },
        { metric: 'Sales Cycle', value: '-40%', icon: <Clock size={16} /> },
      ],
      technologies: ['Python', 'scikit-learn', 'XGBoost', 'PostgreSQL', 'FastAPI'],
      image: 'https://images.pexels.com/photos/3184613/pexels-photo-3184613.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    },
  ];

  const categories = [
    { id: 'all', label: 'All Cases' },
    { id: 'saas', label: 'SaaS' },
    { id: 'automation', label: 'Automation' },
    { id: 'marketing', label: 'Marketing' },
  ];

  const filteredCases = selectedCategory === 'all' 
    ? caseStudies 
    : caseStudies.filter(cs => cs.category === selectedCategory);

  return (
    <div className="min-h-screen bg-[#14141A]">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden hex-pattern">
        <CircuitBackground />
        <div className="container mx-auto px-4 relative z-10 text-center">
          <div className="inline-block mb-6 px-4 py-2 bg-[#00D0FF]/10 border border-[#00D0FF]/30 rounded-md">
            <span className="text-[#00D0FF] text-sm font-mono">CASE STUDIES</span>
          </div>
          <h1 className="text-white mb-6 text-5xl font-bold">Proven Results</h1>
          <p className="text-[#C2C2CC] text-xl max-w-3xl mx-auto">
            Real enterprise solutions delivering measurable impact across industries
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-[#1A1A22] border-y border-[#00D0FF]/20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-[#75FF00] font-mono text-4xl mb-2 metric-glow">500+</div>
              <div className="text-[#C2C2CC] text-sm">Projects Completed</div>
            </div>
            <div>
              <div className="text-[#75FF00] font-mono text-4xl mb-2 metric-glow">$50M+</div>
              <div className="text-[#C2C2CC] text-sm">Revenue Generated</div>
            </div>
            <div>
              <div className="text-[#75FF00] font-mono text-4xl mb-2 metric-glow">98%</div>
              <div className="text-[#C2C2CC] text-sm">Client Retention</div>
            </div>
            <div>
              <div className="text-[#75FF00] font-mono text-4xl mb-2 metric-glow">24/7</div>
              <div className="text-[#C2C2CC] text-sm">Support Uptime</div>
            </div>
          </div>
        </div>
      </section>

      {/* Filter & Case Studies */}
      <section className="py-20 bg-[#14141A] relative">
        <LogoDecorative position="top-left" className="w-48 h-48 opacity-20" />
        <LogoDecorative position="bottom-right" className="w-56 h-56 opacity-20" />
        <div className="container mx-auto px-4">
          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <Button
                key={category.id}
                variant={selectedCategory === category.id ? 'default' : 'outline'}
                onClick={() => setSelectedCategory(category.id)}
                className={
                  selectedCategory === category.id 
                    ? 'bg-[#75FF00] text-[#14141A] hover:bg-[#75FF00]/90 font-medium' 
                    : 'border-[#00D0FF]/30 text-[#00D0FF] hover:bg-[#00D0FF]/10'
                }
              >
                {category.label}
              </Button>
            ))}
          </div>

          {/* Case Studies Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredCases.map((study) => (
              <Card 
                key={study.id} 
                className="bg-[#1A1A22] border-[#00D0FF]/20 hover:border-[#00D0FF] transition-all overflow-hidden group shadow-lg hover:shadow-2xl hover:glow-cyan"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={study.image}
                    alt={study.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A22] via-transparent to-transparent opacity-80" />
                  <div className="absolute bottom-4 left-4 text-[#00D0FF] opacity-30 group-hover:opacity-60 transition-opacity">
                    <TrendingUp size={48} />
                  </div>
                </div>
                <CardContent className="pt-6">
                  <div className="flex flex-wrap gap-2 mb-3">
                    <Badge className="bg-[#00D0FF]/10 text-[#00D0FF] border-[#00D0FF]/30 text-xs">
                      {study.industry}
                    </Badge>
                  </div>
                  <h3 className="text-white mb-2 text-lg font-semibold group-hover:text-[#00D0FF] transition-colors">
                    {study.title}
                  </h3>
                  <p className="text-[#C2C2CC] text-sm mb-1 font-mono">{study.client}</p>
                  
                  <div className="my-4 pt-4 border-t border-[#00D0FF]/10">
                    <p className="text-[#C2C2CC] text-xs mb-2 font-semibold">CHALLENGE</p>
                    <p className="text-[#C2C2CC] text-sm mb-4 line-clamp-2">{study.challenge}</p>
                    <p className="text-[#C2C2CC] text-xs mb-2 font-semibold">SOLUTION</p>
                    <p className="text-[#C2C2CC] text-sm line-clamp-2">{study.solution}</p>
                  </div>
                  
                  <div className="space-y-3 mb-6 pt-4 border-t border-[#00D0FF]/10">
                    {study.results.map((result, idx) => (
                      <div key={idx} className="flex justify-between items-center">
                        <div className="flex items-center gap-2">
                          <div className="text-[#00D0FF]">{result.icon}</div>
                          <span className="text-[#C2C2CC] text-xs">{result.metric}</span>
                        </div>
                        <span className="text-[#75FF00] font-mono text-sm font-bold">{result.value}</span>
                      </div>
                    ))}
                  </div>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {study.technologies.slice(0, 3).map((tech, idx) => (
                      <span 
                        key={idx} 
                        className="text-[#00D0FF] text-xs font-mono bg-[#00D0FF]/5 px-2 py-1 rounded border border-[#00D0FF]/20"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <Button 
                    variant="outline" 
                    className="w-full border-[#00D0FF]/30 text-[#00D0FF] hover:bg-[#00D0FF]/10 hover:text-white transition-all"
                  >
                    View Full Case Study
                    <ArrowRight className="ml-2" size={16} />
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
          <h2 className="text-white mb-4 text-4xl font-bold">Ready to Scale Your Operations?</h2>
          <p className="text-[#C2C2CC] text-xl mb-8 max-w-2xl mx-auto">
            Let's discuss how we can deliver similar results for your organization
          </p>
          <Button 
            size="lg" 
            className="bg-[#75FF00] text-[#14141A] hover:bg-[#75FF00]/90 glow-lime font-semibold px-8"
            onClick={() => onNavigate('contact')}
          >
            Start Your Project
            <ArrowRight className="ml-2" size={20} />
          </Button>
        </div>
      </section>
    </div>
  );
}