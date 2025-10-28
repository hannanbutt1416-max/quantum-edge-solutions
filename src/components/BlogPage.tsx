import { Calendar, Clock, ArrowRight, TrendingUp, Code, Zap } from 'lucide-react';
import { Card, CardContent, CardHeader } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { CircuitBackground } from './CircuitBackground';
import { LogoDecorative } from './Logo';

export function BlogPage() {
  const featuredPost = {
    title: 'The Future of Marketing Automation: AI-Powered Optimization in 2025',
    excerpt: 'How machine learning is revolutionizing marketing workflows and delivering unprecedented ROI at scale.',
    author: 'Dr. Alex Chen',
    date: 'October 25, 2025',
    readTime: '8 min read',
    category: 'AI & Automation',
  };

  const blogPosts = [
    {
      title: 'Building Scalable SaaS Architecture: Microservices Best Practices',
      excerpt: 'Architectural patterns and design principles for enterprise-grade SaaS platforms.',
      author: 'Sarah Martinez',
      date: 'October 20, 2025',
      readTime: '12 min read',
      category: 'Engineering',
      icon: <Code className="w-16 h-16" />,
    },
    {
      title: 'Real-Time Data Processing at Scale: Kafka to ClickHouse Pipeline',
      excerpt: 'How we process 10M+ events per hour with sub-second latency.',
      author: 'David Kim',
      date: 'October 18, 2025',
      readTime: '15 min read',
      category: 'Data Engineering',
      icon: <TrendingUp className="w-16 h-16" />,
    },
    {
      title: 'Predictive Lead Scoring with Machine Learning',
      excerpt: 'Using XGBoost and behavioral signals to improve sales efficiency by 300%.',
      author: 'Dr. Alex Chen',
      date: 'October 15, 2025',
      readTime: '10 min read',
      category: 'Machine Learning',
      icon: <Zap className="w-16 h-16" />,
    },
    {
      title: 'Container Orchestration: Kubernetes in Production',
      excerpt: 'Lessons learned running 500+ microservices on Kubernetes at scale.',
      author: 'Sarah Martinez',
      date: 'October 12, 2025',
      readTime: '11 min read',
      category: 'DevOps',
      icon: <Code className="w-16 h-16" />,
    },
    {
      title: 'Multi-Channel Attribution: Beyond Last-Click',
      excerpt: 'Advanced attribution models for understanding true customer journey ROI.',
      author: 'Dr. Emily Roberts',
      date: 'October 8, 2025',
      readTime: '9 min read',
      category: 'Analytics',
      icon: <TrendingUp className="w-16 h-16" />,
    },
    {
      title: 'GraphQL Performance Optimization Techniques',
      excerpt: 'How we reduced API response times by 85% with smart caching and batching.',
      author: 'David Kim',
      date: 'October 5, 2025',
      readTime: '13 min read',
      category: 'Engineering',
      icon: <Code className="w-16 h-16" />,
    },
  ];

  const categories = [
    'All Posts',
    'AI & Automation',
    'Engineering',
    'Data Engineering',
    'Machine Learning',
    'DevOps',
    'Analytics',
  ];

  return (
    <div className="min-h-screen bg-[#14141A]">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden hex-pattern">
        <CircuitBackground />
        <div className="container mx-auto px-4 relative z-10 text-center">
          <div className="inline-block mb-6 px-4 py-2 bg-[#00D0FF]/10 border border-[#00D0FF]/30 rounded-md">
            <span className="text-[#00D0FF] text-sm font-mono">INSIGHTS & RESEARCH</span>
          </div>
          <h1 className="text-white mb-6 text-5xl">Technical Insights</h1>
          <p className="text-[#C2C2CC] text-xl max-w-3xl mx-auto">
            Deep dives into engineering, data science, and digital marketing innovation
          </p>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-12 bg-[#14141A]">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <Card className="bg-[#1A1A22] border-[#00D0FF]/30 overflow-hidden glow-cyan">
              <div className="grid md:grid-cols-2 gap-0">
                <div className="relative bg-gradient-to-br from-[#00D0FF]/20 to-[#75FF00]/20 flex items-center justify-center p-12">
                  <TrendingUp className="w-32 h-32 text-[#00D0FF] opacity-40" />
                </div>
                <div className="p-8 flex flex-col justify-center">
                  <Badge className="w-fit mb-4 bg-[#75FF00] text-[#14141A]">
                    FEATURED
                  </Badge>
                  <h2 className="text-white mb-4">{featuredPost.title}</h2>
                  <p className="text-[#C2C2CC] mb-6">{featuredPost.excerpt}</p>
                  <div className="flex items-center text-sm text-[#C2C2CC] mb-6 font-mono">
                    <Calendar size={14} className="mr-2 text-[#00D0FF]" />
                    <span className="mr-4">{featuredPost.date}</span>
                    <Clock size={14} className="mr-2 text-[#00D0FF]" />
                    <span>{featuredPost.readTime}</span>
                  </div>
                  <Button className="bg-[#75FF00] text-[#14141A] hover:bg-[#75FF00]/90">
                    Read Article
                    <ArrowRight className="ml-2" size={16} />
                  </Button>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Categories Filter */}
      <section className="py-8 bg-[#1A1A22] border-y border-[#00D0FF]/20">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category, index) => (
              <Button
                key={index}
                variant={index === 0 ? 'default' : 'outline'}
                size="sm"
                className={index === 0 
                  ? 'bg-[#00D0FF] text-[#14141A] hover:bg-[#00D0FF]/90' 
                  : 'border-[#00D0FF]/30 text-[#00D0FF] hover:bg-[#00D0FF]/10'
                }
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-20 bg-[#14141A] hex-pattern relative">
        <LogoDecorative position="top-right" className="w-44 h-44" />
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <Card 
                key={index} 
                className="bg-[#1A1A22] border-[#00D0FF]/20 hover:border-[#00D0FF] transition-all overflow-hidden group"
              >
                <div className="relative h-48 bg-gradient-to-br from-[#00D0FF]/10 to-[#75FF00]/10 flex items-center justify-center">
                  <div className="text-[#00D0FF] opacity-30 group-hover:opacity-50 transition-opacity">
                    {post.icon}
                  </div>
                </div>
                <CardHeader>
                  <Badge className="w-fit mb-2 bg-[#00D0FF]/10 text-[#00D0FF] border-[#00D0FF]/30">
                    {post.category}
                  </Badge>
                  <h3 className="text-white mb-2 leading-tight">{post.title}</h3>
                </CardHeader>
                <CardContent>
                  <p className="text-[#C2C2CC] mb-4 text-sm">{post.excerpt}</p>
                  <div className="flex items-center text-xs text-[#C2C2CC] mb-4 font-mono">
                    <Calendar size={12} className="mr-2 text-[#00D0FF]" />
                    <span className="mr-4">{post.date}</span>
                    <Clock size={12} className="mr-2 text-[#00D0FF]" />
                    <span>{post.readTime}</span>
                  </div>
                  <div className="border-t border-[#00D0FF]/10 pt-4 mb-4">
                    <p className="text-[#C2C2CC] text-xs">BY {post.author.toUpperCase()}</p>
                  </div>
                  <Button 
                    variant="outline" 
                    className="w-full border-[#00D0FF]/30 text-[#00D0FF] hover:bg-[#00D0FF]/10"
                  >
                    Read More
                    <ArrowRight className="ml-2" size={16} />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Load More Button */}
          <div className="text-center mt-12">
            <Button 
              size="lg" 
              variant="outline"
              className="border-[#00D0FF]/30 text-[#00D0FF] hover:bg-[#00D0FF]/10"
            >
              Load More Articles
            </Button>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 bg-[#1A1A22]">
        <div className="container mx-auto px-4">
          <Card className="max-w-2xl mx-auto bg-gradient-to-br from-[#00D0FF]/10 to-[#75FF00]/10 border-[#00D0FF]/30 glow-cyan">
            <CardContent className="pt-8 text-center">
              <Code className="w-12 h-12 mx-auto mb-4 text-[#00D0FF]" />
              <h2 className="text-white mb-4">Technical Newsletter</h2>
              <p className="text-[#C2C2CC] mb-6">
                Get weekly insights on engineering, data science, and digital marketing delivered to your inbox
              </p>
              <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-grow px-4 py-3 rounded-md bg-[#14141A] border border-[#00D0FF]/30 text-white placeholder-[#C2C2CC]/50 focus:outline-none focus:border-[#00D0FF]"
                />
                <Button className="bg-[#75FF00] text-[#14141A] hover:bg-[#75FF00]/90 px-8">
                  Subscribe
                </Button>
              </div>
              <p className="text-[#C2C2CC] text-sm mt-4 font-mono">
                Join 10,000+ tech professionals
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Popular Topics */}
      <section className="py-20 bg-[#14141A]">
        <div className="container mx-auto px-4">
          <div className="inline-block mb-8 px-4 py-1 bg-[#00D0FF]/10 border border-[#00D0FF]/30 rounded-md mx-auto block w-fit">
            <span className="text-[#00D0FF] text-sm font-mono">TOPICS</span>
          </div>
          <h2 className="text-white mb-12 text-center text-4xl">Popular Topics</h2>
          <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
            {[
              'Machine Learning',
              'Kubernetes',
              'React',
              'Data Engineering',
              'Marketing Automation',
              'API Design',
              'Cloud Architecture',
              'Performance Optimization',
              'Microservices',
              'Real-time Analytics',
              'DevOps',
              'SaaS Development',
            ].map((topic, index) => (
              <div
                key={index}
                className="px-4 py-2 bg-[#1A1A22] border border-[#00D0FF]/30 rounded-md hover:border-[#00D0FF] hover:glow-cyan transition-all cursor-pointer"
              >
                <span className="text-[#C2C2CC] font-mono text-sm">{topic}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
