import { useState } from 'react';
import { Calendar, Clock, ArrowRight, Code, Zap, TrendingUp, Mail } from 'lucide-react';
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
      icon: <Code className="w-12 h-12" />,
      image: 'https://images.pexels.com/photos/1181271/pexels-photo-1181271.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    },
    {
      title: 'Real-Time Data Processing at Scale: Kafka to ClickHouse Pipeline',
      excerpt: 'How we process 10M+ events per hour with sub-second latency.',
      author: 'David Kim',
      date: 'October 18, 2025',
      readTime: '15 min read',
      category: 'Data Engineering',
      icon: <TrendingUp className="w-12 h-12" />,
      image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    },
    {
      title: 'Predictive Lead Scoring with Machine Learning',
      excerpt: 'Using XGBoost and behavioral signals to improve sales efficiency by 300%.',
      author: 'Dr. Alex Chen',
      date: 'October 15, 2025',
      readTime: '10 min read',
      category: 'Machine Learning',
      icon: <Zap className="w-12 h-12" />,
      image: 'https://images.pexels.com/photos/5473958/pexels-photo-5473958.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    },
    {
      title: 'Container Orchestration: Kubernetes in Production',
      excerpt: 'Lessons learned running 500+ microservices on Kubernetes at scale.',
      author: 'Sarah Martinez',
      date: 'October 12, 2025',
      readTime: '11 min read',
      category: 'DevOps',
      icon: <Code className="w-12 h-12" />,
      image: 'https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    },
    {
      title: 'Multi-Channel Attribution: Beyond Last-Click',
      excerpt: 'Advanced attribution models for understanding true customer journey ROI.',
      author: 'Dr. Emily Roberts',
      date: 'October 8, 2025',
      readTime: '9 min read',
      category: 'Analytics',
      icon: <TrendingUp className="w-12 h-12" />,
      image: 'https://images.pexels.com/photos/5905709/pexels-photo-5905709.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    },
    {
      title: 'GraphQL Performance Optimization Techniques',
      excerpt: 'How we reduced API response times by 85% with smart caching and batching.',
      author: 'David Kim',
      date: 'October 5, 2025',
      readTime: '13 min read',
      category: 'Engineering',
      icon: <Code className="w-12 h-12" />,
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
      {/* === HERO SECTION - UNCHANGED === */}
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

      {/* === FEATURED POST - Clean & Professional === */}
      <section className="py-16 bg-[#14141A]">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <Card className="bg-[#1A1A22] border border-[#00D0FF]/20 overflow-hidden rounded-xl shadow-xl">
              <div className="grid md:grid-cols-2">
                <div className="relative h-64 md:h-full overflow-hidden">
                  <img
                    src={featuredPost.image}
                    alt={featuredPost.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#14141A]/80 via-[#14141A]/20 to-transparent" />
                </div>
                <div className="p-8 md:p-10 flex flex-col justify-center">
                  <Badge className="w-fit mb-4 bg-[#75FF00] text-[#14141A] font-medium text-xs">
                    FEATURED ARTICLE
                  </Badge>
                  <h2 className="text-white text-2xl md:text-3xl font-bold mb-4 leading-tight">
                    {featuredPost.title}
                  </h2>
                  <p className="text-[#C2C2CC] text-base mb-6 leading-relaxed">
                    {featuredPost.excerpt}
                  </p>
                  <div className="flex items-center gap-4 text-sm text-[#C2C2CC] mb-6 font-mono">
                    <div className="flex items-center gap-1">
                      <Calendar size={14} className="text-[#00D0FF]" />
                      <span>{featuredPost.date}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock size={14} className="text-[#00D0FF]" />
                      <span>{featuredPost.readTime}</span>
                    </div>
                  </div>
                  <Button className="w-fit bg-[#75FF00] text-[#14141A] hover:bg-[#75FF00]/90 font-medium px-6">
                    Read Full Article
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* === CATEGORY FILTER - Subtle & Clean === */}
      <section className="py-8 bg-[#1A1A22] border-y border-[#00D0FF]/10">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? 'default' : 'ghost'}
                size="sm"
                onClick={() => setSelectedCategory(category)}
                className={
                  selectedCategory === category
                    ? 'bg-[#00D0FF] text-[#14141A] hover:bg-[#00D0FF]/90 font-medium text-xs'
                    : 'text-[#00D0FF] hover:bg-[#00D0FF]/10 hover:text-white border border-[#00D0FF]/20 font-medium text-xs'
                }
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* === BLOG GRID - Professional Cards === */}
      <section className="py-20 bg-[#14141A] relative">
        <LogoDecorative position="top-right" className="absolute top-10 right-10 w-40 h-40 opacity-10 pointer-events-none" />
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts
              .filter((post) => selectedCategory === 'All Posts' || post.category === selectedCategory)
              .map((post, index) => (
                <Card
                  key={index}
                  className="bg-[#1A1A22] border border-[#00D0FF]/10 rounded-xl overflow-hidden hover:border-[#00D0FF]/30 transition-all duration-300 hover:shadow-xl group"
                >
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A22]/90 via-[#1A1A22]/30 to-transparent" />
                    <div className="absolute bottom-4 left-4 text-[#75FF00] opacity-90 group-hover:opacity-100 transition-opacity">
                      {post.icon}
                    </div>
                  </div>

                  <CardHeader className="pt-5 pb-3">
                    <Badge className="w-fit mb-2 bg-[#00D0FF]/10 text-[#00D0FF] border border-[#00D0FF]/20 text-xs font-medium">
                      {post.category}
                    </Badge>
                    <h3 className="text-white text-lg font-semibold leading-tight line-clamp-2 group-hover:text-[#00D0FF] transition-colors">
                      {post.title}
                    </h3>
                  </CardHeader>

                  <CardContent className="pb-6">
                    <p className="text-[#C2C2CC] text-sm mb-4 line-clamp-2 leading-relaxed">
                      {post.excerpt}
                    </p>

                    <div className="flex items-center gap-3 text-xs text-[#C2C2CC] mb-4 font-mono">
                      <div className="flex items-center gap-1">
                        <Calendar size={12} className="text-[#00D0FF]" />
                        <span>{post.date}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock size={12} className="text-[#00D0FF]" />
                        <span>{post.readTime}</span>
                      </div>
                    </div>

                    <p className="text-[#C2C2CC]/70 text-xs font-mono mb-4">
                      By {post.author}
                    </p>

                    <Button
                      variant="ghost"
                      className="w-full text-[#00D0FF] hover:bg-[#00D0FF]/10 hover:text-white border border-[#00D0FF]/20 font-medium text-sm"
                    >
                      Read Article
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                  </CardContent>
                </Card>
              ))}
          </div>

          {/* Load More */}
          <div className="text-center mt-12">
            <Button
              size="lg"
              variant="outline"
              className="border-[#00D0FF]/20 text-[#00D0FF] hover:bg-[#00D0FF]/10 hover:text-white px-8 font-medium"
            >
              Load More Articles
            </Button>
          </div>
        </div>
      </section>

      {/* === NEWSLETTER - Clean & Focused === */}
      <section className="py-20 bg-[#1A1A22]">
        <div className="container mx-auto px-4">
          <Card className="max-w-2xl mx-auto bg-[#14141A] border border-[#00D0FF]/20 rounded-xl p-8 md:p-10">
            <CardContent className="text-center space-y-6">
              <Mail className="w-12 h-12 mx-auto text-[#00D0FF]" />
              <div>
                <h2 className="text-white text-2xl md:text-3xl font-bold mb-3">
                  Technical Newsletter
                </h2>
                <p className="text-[#C2C2CC] text-base max-w-md mx-auto leading-relaxed">
                  Weekly insights on engineering, data science, and digital marketing — delivered straight to your inbox.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="your@email.com"
                  className="flex-grow px-5 py-3 rounded-lg bg-[#1A1A22] border border-[#00D0FF]/20 text-white placeholder-[#C2C2CC]/50 focus:outline-none focus:border-[#00D0FF] transition-colors text-sm"
                />
                <Button className="bg-[#75FF00] text-[#14141A] hover:bg-[#75FF00]/90 font-medium px-6">
                  Subscribe
                </Button>
              </div>
              <p className="text-[#C2C2CC]/70 text-sm font-mono">
                Join 10,000+ engineering leaders and data professionals
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* === POPULAR TOPICS - Pill Style === */}
      <section className="py-20 bg-[#14141A]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <div className="inline-block px-4 py-1 bg-[#00D0FF]/10 border border-[#00D0FF]/20 rounded-md mb-4">
              <span className="text-[#00D0FF] text-xs font-mono">EXPLORE TOPICS</span>
            </div>
            <h2 className="text-white text-3xl md:text-4xl font-bold">
              Popular Topics
            </h2>
          </div>
          <div className="flex flex-wrap justify-center gap-3 max-w-5xl mx-auto">
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
            ].map((topic) => (
              <div
                key={topic}
                className="px-4 py-2 bg-[#1A1A22] border border-[#00D0FF]/10 rounded-full hover:border-[#00D0FF]/30 hover:bg-[#00D0FF]/5 transition-all cursor-pointer"
              >
                <span className="text-[#C2C2CC] font-mono text-xs">{topic}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}