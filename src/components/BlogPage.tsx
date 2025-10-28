import { useState } from 'react';
import { Calendar, Clock, ArrowRight, TrendingUp, Code, Zap } from 'lucide-react';
import { Card, CardContent, CardHeader } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { CircuitBackground } from './CircuitBackground';
import { LogoDecorative } from './Logo';

export function BlogPage() {
  const [selectedCategory, setSelectedCategory] = useState('All Posts');

  const featuredPost = {
    title: 'The Future of Marketing Automation: AI-Powered Optimization in 2025',
    excerpt: 'How machine learning is revolutionizing marketing workflows and delivering unprecedented ROI at scale.',
    author: 'Dr. Alex Chen',
    date: 'October 25, 2025',
    readTime: '8 min read',
    category: 'AI & Automation',
    image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
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
      image: 'https://images.pexels.com/photos/1181271/pexels-photo-1181271.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    },
    {
      title: 'Real-Time Data Processing at Scale: Kafka to ClickHouse Pipeline',
      excerpt: 'How we process 10M+ events per hour with sub-second latency.',
      author: 'David Kim',
      date: 'October 18, 2025',
      readTime: '15 min read',
      category: 'Data Engineering',
      icon: <TrendingUp className="w-16 h-16" />,
      image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    },
    {
      title: 'Predictive Lead Scoring with Machine Learning',
      excerpt: 'Using XGBoost and behavioral signals to improve sales efficiency by 300%.',
      author: 'Dr. Alex Chen',
      date: 'October 15, 2025',
      readTime: '10 min read',
      category: 'Machine Learning',
      icon: <Zap className="w-16 h-16" />,
      image: 'https://images.pexels.com/photos/5473958/pexels-photo-5473958.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    },
    {
      title: 'Container Orchestration: Kubernetes in Production',
      excerpt: 'Lessons learned running 500+ microservices on Kubernetes at scale.',
      author: 'Sarah Martinez',
      date: 'October 12, 2025',
      readTime: '11 min read',
      category: 'DevOps',
      icon: <Code className="w-16 h-16" />,
      image: 'https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    },
    {
      title: 'Multi-Channel Attribution: Beyond Last-Click',
      excerpt: 'Advanced attribution models for understanding true customer journey ROI.',
      author: 'Dr. Emily Roberts',
      date: 'October 8, 2025',
      readTime: '9 min read',
      category: 'Analytics',
      icon: <TrendingUp className="w-16 h-16" />,
      image: 'https://images.pexels.com/photos/5905709/pexels-photo-5905709.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    },
    {
      title: 'GraphQL Performance Optimization Techniques',
      excerpt: 'How we reduced API response times by 85% with smart caching and batching.',
      author: 'David Kim',
      date: 'October 5, 2025',
      readTime: '13 min read',
      category: 'Engineering',
      icon: <Code className="w-16 h-16" />,
      image: 'https://images.pexels.com/photos/11035380/pexels-photo-11035380.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
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
            <Card className="bg-[#1A1A22] border-[#00D0FF]/30 overflow-hidden glow-cyan shadow-2xl">
              <div className="grid md:grid-cols-2 gap-0">
                <div className="relative overflow-hidden">
                  <img
                    src={featuredPost.image}
                    alt={featuredPost.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#14141A] via-transparent to-transparent" />
                </div>
                <div className="p-8 flex flex-col justify-center">
                  <Badge className="w-fit mb-4 bg-[#75FF00] text-[#14141A]">
                    FEATURED
                  </Badge>
                  <h2 className="text-white mb-4 text-2xl font-bold">{featuredPost.title}</h2>
                  <p className="text-[#C2C2CC] mb-6">{featuredPost.excerpt}</p>
                  <div className="flex items-center text-sm text-[#C2C2CC] mb-6 font-mono">
                    <Calendar size={14} className="mr-2 text-[#00D0FF]" />
                    <span className="mr-4">{featuredPost.date}</span>
                    <Clock size={14} className="mr-2 text-[#00D0FF]" />
                    <span>{featuredPost.readTime}</span>
                  </div>
                  <Button className="bg-[#75FF00] text-[#14141A] hover:bg-[#75FF00]/90 w-fit">
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
                variant={selectedCategory === category ? 'default' : 'outline'}
                size="sm"
                onClick={() => setSelectedCategory(category)}
                className={
                  selectedCategory === category
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
        <LogoDecorative position="top-right" className="w-44 h-44 opacity-20" />
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts
              .filter(post => selectedCategory === 'All Posts' || post.category === selectedCategory)
              .map((post, index) => (
                <Card
                  key={index}
                  className="bg-[#1A1A22] border-[#00D0FF]/20 hover:border-[#00D0FF] transition-all overflow-hidden group shadow-lg hover:shadow-2xl hover:glow-cyan"
                >
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A22] via-transparent to-transparent opacity-70" />
                    <div className="absolute bottom-3 left-3 opacity-80 group-hover:opacity-100 transition-opacity">
                      {post.icon}
                    </div>
                  </div>
                  <CardHeader className="pt-4">
                    <Badge className="w-fit mb-2 bg-[#00D0FF]/10 text-[#00D0FF] border-[#00D0FF]/30 text-xs">
                      {post.category}
                    </Badge>
                    <h3 className="text-white mb-2 leading-tight text-lg font-semibold group-hover:text-[#00D0FF] transition-colors">
                      {post.title}
                    </h3>
                  </CardHeader>
                  <CardContent>
                    <p className="text-[#C2C2CC] mb-4 text-sm line-clamp-2">{post.excerpt}</p>
                    <div className="flex items-center text-xs text-[#C2C2CC] mb-4 font-mono">
                      <Calendar size={12} className="mr-2 text-[#00D0FF]" />
                      <span className="mr-4">{post.date}</span>
                      <Clock size={12} className="mr-2 text-[#00D0FF]" />
                      <span>{post.readTime}</span>
                    </div>
                    <div className="border-t border-[#00D0FF]/10 pt-3 mb-4">
                      <p className="text-[#C2C2CC] text-xs font-mono">BY {post.author.toUpperCase()}</p>
                    </div>
                    <Button
                      variant="outline"
                      className="w-full border-[#00D0FF]/30 text-[#00D0FF] hover:bg-[#00D0FF]/10 hover:text-white transition-all"
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
              className="border-[#00D0FF]/30 text-[#00D0FF] hover:bg-[#00D0FF]/10 px-8"
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
              <h2 className="text-white mb-4 text-2xl font-bold">Technical Newsletter</h2>
              <p className="text-[#C2C2CC] mb-6 max-w-md mx-auto">
                Get weekly insights on engineering, data science, and digital marketing delivered to your inbox
              </p>
              <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-grow px-4 py-3 rounded-md bg-[#14141A] border border-[#00D0FF]/30 text-white placeholder-[#C2C2CC]/50 focus:outline-none focus:border-[#00D0FF] transition-colors"
                />
                <Button className="bg-[#75FF00] text-[#14141A] hover:bg-[#75FF00]/90 px-8 font-medium">
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
          <h2 className="text-white mb-12 text-center text-4xl font-bold">Popular Topics</h2>
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
                className="px-4 py-2 bg-[#1A1A22] border border-[#00D0FF]/30 rounded-md hover:border-[#00D0FF] hover:bg-[#00D0FF]/5 hover:glow-cyan transition-all cursor-pointer"
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