import { Target, Zap, Database, Shield, Award, TrendingUp, Users, Code } from 'lucide-react';
import { Card, CardContent } from './ui/card';
import { CircuitBackground } from './CircuitBackground';
import { LogoDecorative } from './Logo';

export function AboutPage() {
  const values = [
    {
      icon: <Target className="w-8 h-8" />,
      title: 'Performance',
      description: 'Every solution optimized for maximum efficiency and measurable ROI.',
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: 'Precision',
      description: 'Data-driven decisions backed by advanced analytics and AI insights.',
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: 'Scalability',
      description: 'Infrastructure built to grow with your business, from startup to enterprise.',
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: 'Security',
      description: 'Enterprise-grade security and compliance at every layer of the stack.',
    },
  ];

  const team = [
    {
      name: 'Dr. Alex Chen',
      role: 'Chief Technology Officer',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop',
      bio: 'PhD in Machine Learning • Former Google AI Lead',
      expertise: 'AI/ML, System Architecture',
    },
    {
      name: 'Sarah Martinez',
      role: 'VP of Engineering',
      image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=300&h=300&fit=crop',
      bio: 'Ex-Amazon Principal Engineer • 15+ years experience',
      expertise: 'Cloud Infrastructure, DevOps',
    },
    {
      name: 'David Kim',
      role: 'Head of Data Science',
      image: 'https://images.unsplash.com/photo-1519345182560-3f2917c472ef?w=300&h=300&fit=crop',
      bio: 'MIT Graduate • Ex-Tesla Data Lead',
      expertise: 'Predictive Analytics, Automation',
    },
    {
      name: 'Dr. Emily Roberts',
      role: 'Director of Product',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=300&h=300&fit=crop',
      bio: 'Stanford CS • Product Strategy Expert',
      expertise: 'UX Research, Product Development',
    },
  ];

  const certifications = [
    'AWS Advanced Consulting Partner',
    'Google Cloud Premier Partner',
    'Microsoft Azure Expert MSP',
    'SOC 2 Type II Certified',
    'ISO 27001 Certified',
    'GDPR Compliant',
  ];

  return (
    <div className="min-h-screen bg-[#14141A]">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden hex-pattern">
        <CircuitBackground />
        <div className="container mx-auto px-4 relative z-10 text-center">
          <div className="inline-block mb-6 px-4 py-2 bg-[#00D0FF]/10 border border-[#00D0FF]/30 rounded-md">
            <span className="text-[#00D0FF] text-sm font-mono">ABOUT US</span>
          </div>
          <h1 className="text-white mb-6 text-5xl">Enterprise Solutions</h1>
          <p className="text-[#C2C2CC] text-xl max-w-3xl mx-auto">
            Building the future of digital marketing and automation with cutting-edge technology and data intelligence
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-[#14141A] relative">
        <LogoDecorative position="top-left" className="w-52 h-52" />
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div>
              <div className="inline-block mb-6 px-4 py-1 bg-[#00D0FF]/10 border border-[#00D0FF]/30 rounded-md">
                <span className="text-[#00D0FF] text-sm font-mono">OUR MISSION</span>
              </div>
              <h2 className="text-white mb-6 text-4xl">Algorithmic Growth at Scale</h2>
              <p className="text-[#C2C2CC] mb-4 text-lg">
                Founded in 2018, Quantom Edge Solutions emerged from a simple observation: enterprise marketing and operations were drowning in manual processes and fragmented data.
              </p>
              <p className="text-[#C2C2CC] mb-4 text-lg">
                We built a solution combining advanced AI, full-stack development expertise, and deep marketing intelligence to automate and optimize every aspect of digital growth.
              </p>
              <p className="text-[#C2C2CC] text-lg">
                Today, we power marketing operations for over 500 enterprise clients, processing billions of data points monthly to drive measurable business outcomes.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <Card className="bg-[#1A1A22] border-[#00D0FF]/30">
                <CardContent className="pt-6 text-center">
                  <TrendingUp className="w-8 h-8 text-[#00D0FF] mx-auto mb-3" />
                  <div className="text-[#75FF00] font-mono text-3xl mb-2">$50M+</div>
                  <div className="text-[#C2C2CC] text-sm">Revenue Generated</div>
                </CardContent>
              </Card>
              <Card className="bg-[#1A1A22] border-[#00D0FF]/30">
                <CardContent className="pt-6 text-center">
                  <Users className="w-8 h-8 text-[#00D0FF] mx-auto mb-3" />
                  <div className="text-[#75FF00] font-mono text-3xl mb-2">500+</div>
                  <div className="text-[#C2C2CC] text-sm">Enterprise Clients</div>
                </CardContent>
              </Card>
              <Card className="bg-[#1A1A22] border-[#00D0FF]/30">
                <CardContent className="pt-6 text-center">
                  <Code className="w-8 h-8 text-[#00D0FF] mx-auto mb-3" />
                  <div className="text-[#75FF00] font-mono text-3xl mb-2">50+</div>
                  <div className="text-[#C2C2CC] text-sm">Engineers</div>
                </CardContent>
              </Card>
              <Card className="bg-[#1A1A22] border-[#00D0FF]/30">
                <CardContent className="pt-6 text-center">
                  <Award className="w-8 h-8 text-[#00D0FF] mx-auto mb-3" />
                  <div className="text-[#75FF00] font-mono text-3xl mb-2">99.9%</div>
                  <div className="text-[#C2C2CC] text-sm">Uptime SLA</div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-[#1A1A22]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-block mb-4 px-4 py-1 bg-[#00D0FF]/10 border border-[#00D0FF]/30 rounded-md">
              <span className="text-[#00D0FF] text-sm font-mono">CORE VALUES</span>
            </div>
            <h2 className="text-white mb-4 text-4xl">Built on Principles</h2>
            <p className="text-[#C2C2CC] text-xl">
              The foundation of everything we build
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="bg-[#14141A] border-[#00D0FF]/20 hover:border-[#00D0FF] transition-all group">
                <CardContent className="pt-6 text-center">
                  <div className="text-[#00D0FF] mb-4 flex justify-center group-hover:scale-110 transition-transform">
                    {value.icon}
                  </div>
                  <h3 className="text-white mb-2">{value.title}</h3>
                  <p className="text-[#C2C2CC] text-sm">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-[#14141A] hex-pattern relative">
        <LogoDecorative position="bottom-right" className="w-44 h-44" />
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-block mb-4 px-4 py-1 bg-[#00D0FF]/10 border border-[#00D0FF]/30 rounded-md">
              <span className="text-[#00D0FF] text-sm font-mono">LEADERSHIP</span>
            </div>
            <h2 className="text-white mb-4 text-4xl">Executive Team</h2>
            <p className="text-[#C2C2CC] text-xl">
              Industry veterans from leading tech companies
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <Card key={index} className="bg-[#1A1A22] border-[#00D0FF]/20 hover:border-[#00D0FF] transition-all overflow-hidden group">
                <CardContent className="pt-6 text-center">
                  <div className="relative mb-4 overflow-hidden rounded-lg">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#14141A] to-transparent opacity-50"></div>
                  </div>
                  <h3 className="text-white mb-1">{member.name}</h3>
                  <p className="text-[#00D0FF] mb-2 text-sm font-mono">{member.role}</p>
                  <p className="text-[#C2C2CC] text-xs mb-3">{member.bio}</p>
                  <div className="pt-3 border-t border-[#00D0FF]/20">
                    <p className="text-[#75FF00] text-xs font-mono">{member.expertise}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Stack */}
      <section className="py-20 bg-[#1A1A22]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-block mb-4 px-4 py-1 bg-[#00D0FF]/10 border border-[#00D0FF]/30 rounded-md">
              <span className="text-[#00D0FF] text-sm font-mono">TECHNOLOGY</span>
            </div>
            <h2 className="text-white mb-4 text-4xl">Enterprise Infrastructure</h2>
            <p className="text-[#C2C2CC] text-xl">
              Built on modern, scalable technology
            </p>
          </div>
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-3 gap-6">
              <Card className="bg-[#14141A] border-[#00D0FF]/30">
                <CardContent className="pt-6">
                  <Database className="w-8 h-8 text-[#00D0FF] mb-4" />
                  <h4 className="text-white mb-3">Data Layer</h4>
                  <ul className="space-y-2 text-sm text-[#C2C2CC]">
                    <li className="font-mono">PostgreSQL</li>
                    <li className="font-mono">Redis</li>
                    <li className="font-mono">Elasticsearch</li>
                    <li className="font-mono">Apache Kafka</li>
                  </ul>
                </CardContent>
              </Card>
              <Card className="bg-[#14141A] border-[#00D0FF]/30">
                <CardContent className="pt-6">
                  <Code className="w-8 h-8 text-[#00D0FF] mb-4" />
                  <h4 className="text-white mb-3">Application</h4>
                  <ul className="space-y-2 text-sm text-[#C2C2CC]">
                    <li className="font-mono">React / Node.js</li>
                    <li className="font-mono">Python / FastAPI</li>
                    <li className="font-mono">GraphQL</li>
                    <li className="font-mono">TensorFlow</li>
                  </ul>
                </CardContent>
              </Card>
              <Card className="bg-[#14141A] border-[#00D0FF]/30">
                <CardContent className="pt-6">
                  <Shield className="w-8 h-8 text-[#00D0FF] mb-4" />
                  <h4 className="text-white mb-3">Infrastructure</h4>
                  <ul className="space-y-2 text-sm text-[#C2C2CC]">
                    <li className="font-mono">AWS / GCP</li>
                    <li className="font-mono">Kubernetes</li>
                    <li className="font-mono">Docker</li>
                    <li className="font-mono">Terraform</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-20 bg-[#14141A]">
        <div className="container mx-auto px-4 text-center">
          <div className="inline-block mb-8 px-4 py-1 bg-[#00D0FF]/10 border border-[#00D0FF]/30 rounded-md">
            <span className="text-[#00D0FF] text-sm font-mono">CERTIFICATIONS & COMPLIANCE</span>
          </div>
          <h2 className="text-white mb-12 text-4xl">Trusted & Certified</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 max-w-5xl mx-auto">
            {certifications.map((cert, index) => (
              <div
                key={index}
                className="bg-[#1A1A22] border border-[#00D0FF]/20 hover:border-[#00D0FF] rounded-lg p-4 transition-all hover:glow-cyan cursor-default"
              >
                <p className="text-[#C2C2CC] text-xs font-mono text-center">{cert}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
