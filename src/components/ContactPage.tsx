import { useState } from 'react';
import { Mail, Phone, MapPin, Clock, Send, CheckCircle, MessageSquare } from 'lucide-react';
import { Button } from './ui/button';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { Label } from './ui/label';
import { CircuitBackground } from './CircuitBackground';

export function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    budget: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        service: '',
        budget: '',
        message: '',
      });
    }, 3000);
  };

  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" />,
      title: 'Email',
      details: ['contact@quantomedge.io', 'enterprise@quantomedge.io'],
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: 'Phone',
      details: ['Main: +1 (614) 405-5814', 'Support: Available 24/7'],
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: 'Office',
      details: ['7838 Malton Ln', 'Worthington, OH 43085, USA'],
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: 'Hours',
      details: ['Monday - Friday: 9am - 6pm EST', '24/7 Enterprise Support'],
    },
  ];

  return (
    <div className="min-h-screen bg-[#14141A]">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden hex-pattern">
        <CircuitBackground />
        <div className="container mx-auto px-4 relative z-10 text-center">
          <div className="inline-block mb-6 px-4 py-2 bg-[#00D0FF]/10 border border-[#00D0FF]/30 rounded-md">
            <span className="text-[#00D0FF] text-sm font-mono">GET IN TOUCH</span>
          </div>
          <h1 className="text-white mb-6 text-5xl">Start Your Project</h1>
          <p className="text-[#C2C2CC] text-xl max-w-3xl mx-auto">
            Schedule a technical consultation to discuss your digital transformation needs
          </p>
        </div>
      </section>

      {/* Contact Form & Info Section */}
      <section className="py-20 bg-[#14141A] relative">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <Card className="bg-[#1A1A22] border-[#00D0FF]/30">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <MessageSquare className="w-6 h-6 text-[#00D0FF]" />
                    <CardTitle className="text-white">Send Technical Inquiry</CardTitle>
                  </div>
                  <p className="text-[#C2C2CC]">
                    Fill out the form and our team will respond within 24 hours
                  </p>
                </CardHeader>
                <CardContent>
                  {submitted ? (
                    <div className="text-center py-12">
                      <CheckCircle className="w-16 h-16 text-[#75FF00] mx-auto mb-4 glow-lime" />
                      <h3 className="text-white mb-2">Request Submitted</h3>
                      <p className="text-[#C2C2CC]">
                        Your inquiry has been received. Our team will contact you shortly.
                      </p>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <Label htmlFor="name" className="text-[#C2C2CC]">Full Name *</Label>
                          <Input
                            id="name"
                            type="text"
                            placeholder="John Doe"
                            value={formData.name}
                            onChange={(e) => handleChange('name', e.target.value)}
                            className="bg-[#14141A] border-[#00D0FF]/30 text-white placeholder-[#C2C2CC]/50 focus:border-[#00D0FF]"
                            required
                          />
                        </div>
                        <div>
                          <Label htmlFor="email" className="text-[#C2C2CC]">Email Address *</Label>
                          <Input
                            id="email"
                            type="email"
                            placeholder="john@company.com"
                            value={formData.email}
                            onChange={(e) => handleChange('email', e.target.value)}
                            className="bg-[#14141A] border-[#00D0FF]/30 text-white placeholder-[#C2C2CC]/50 focus:border-[#00D0FF]"
                            required
                          />
                        </div>
                      </div>

                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <Label htmlFor="phone" className="text-[#C2C2CC]">Phone Number</Label>
                          <Input
                            id="phone"
                            type="tel"
                            placeholder="+1 (614) 405-5814"
                            value={formData.phone}
                            onChange={(e) => handleChange('phone', e.target.value)}
                            className="bg-[#14141A] border-[#00D0FF]/30 text-white placeholder-[#C2C2CC]/50 focus:border-[#00D0FF]"
                          />
                        </div>
                        <div>
                          <Label htmlFor="company" className="text-[#C2C2CC]">Company Name *</Label>
                          <Input
                            id="company"
                            type="text"
                            placeholder="Your Company"
                            value={formData.company}
                            onChange={(e) => handleChange('company', e.target.value)}
                            className="bg-[#14141A] border-[#00D0FF]/30 text-white placeholder-[#C2C2CC]/50 focus:border-[#00D0FF]"
                            required
                          />
                        </div>
                      </div>

                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <Label htmlFor="service" className="text-[#C2C2CC]">Service Interest *</Label>
                          <Select onValueChange={(value) => handleChange('service', value)} required>
                            <SelectTrigger 
                              id="service"
                              className="bg-[#14141A] border-[#00D0FF]/30 text-white focus:border-[#00D0FF]"
                            >
                              <SelectValue placeholder="Select service" />
                            </SelectTrigger>
                            <SelectContent className="bg-[#1A1A22] border-[#00D0FF]/30">
                              <SelectItem value="marketing">Digital Marketing</SelectItem>
                              <SelectItem value="automation">Marketing Automation</SelectItem>
                              <SelectItem value="saas">SaaS Development</SelectItem>
                              <SelectItem value="data">Data Analytics</SelectItem>
                              <SelectItem value="consulting">Technical Consulting</SelectItem>
                              <SelectItem value="other">Other / Not Sure</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                        <div>
                          <Label htmlFor="budget" className="text-[#C2C2CC]">Project Budget</Label>
                          <Select onValueChange={(value) => handleChange('budget', value)}>
                            <SelectTrigger 
                              id="budget"
                              className="bg-[#14141A] border-[#00D0FF]/30 text-white focus:border-[#00D0FF]"
                            >
                              <SelectValue placeholder="Select range" />
                            </SelectTrigger>
                            <SelectContent className="bg-[#1A1A22] border-[#00D0FF]/30">
                              <SelectItem value="under10k">Under $10,000</SelectItem>
                              <SelectItem value="10k-50k">$10,000 - $50,000</SelectItem>
                              <SelectItem value="50k-100k">$50,000 - $100,000</SelectItem>
                              <SelectItem value="100k-500k">$100,000 - $500,000</SelectItem>
                              <SelectItem value="500k+">$500,000+</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>

                      <div>
                        <Label htmlFor="message" className="text-[#C2C2CC]">Project Details *</Label>
                        <Textarea
                          id="message"
                          placeholder="Tell us about your technical requirements, goals, and timeline..."
                          rows={6}
                          value={formData.message}
                          onChange={(e) => handleChange('message', e.target.value)}
                          className="bg-[#14141A] border-[#00D0FF]/30 text-white placeholder-[#C2C2CC]/50 focus:border-[#00D0FF]"
                          required
                        />
                      </div>

                      <Button 
                        type="submit" 
                        size="lg" 
                        className="w-full md:w-auto bg-[#75FF00] text-[#14141A] hover:bg-[#75FF00]/90 glow-lime font-semibold"
                      >
                        Submit Inquiry
                        <Send className="ml-2" size={16} />
                      </Button>
                    </form>
                  )}
                </CardContent>
              </Card>
            </div>

            {/* Contact Info Sidebar */}
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <Card key={index} className="bg-[#1A1A22] border-[#00D0FF]/20 hover:border-[#00D0FF] transition-all">
                  <CardContent className="pt-6">
                    <div className="flex items-start space-x-4">
                      <div className="text-[#00D0FF] flex-shrink-0 p-3 bg-[#00D0FF]/10 rounded-lg border border-[#00D0FF]/30">
                        {info.icon}
                      </div>
                      <div>
                        <h4 className="text-white mb-2 font-mono">{info.title}</h4>
                        {info.details.map((detail, idx) => (
                          <p key={idx} className="text-[#C2C2CC] text-sm mb-1">
                            {detail}
                          </p>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}

              {/* Response Time Card */}
              <Card className="bg-gradient-to-br from-[#00D0FF]/10 to-[#75FF00]/10 border-[#00D0FF]/30 glow-cyan">
                <CardContent className="pt-6">
                  <h4 className="text-white mb-2">Response Time</h4>
                  <p className="text-[#C2C2CC] text-sm mb-4">
                    We respond to all enterprise inquiries within 24 hours. For urgent technical support, call our hotline.
                  </p>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-[#75FF00] rounded-full animate-pulse"></div>
                    <span className="text-[#75FF00] text-sm font-mono">AVAILABLE NOW</span>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-[#1A1A22]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-block mb-4 px-4 py-1 bg-[#00D0FF]/10 border border-[#00D0FF]/30 rounded-md">
              <span className="text-[#00D0FF] text-sm font-mono">FAQ</span>
            </div>
            <h2 className="text-white mb-4 text-4xl">Common Questions</h2>
            <p className="text-[#C2C2CC] text-xl">
              Quick answers to help you get started
            </p>
          </div>
          <div className="max-w-3xl mx-auto space-y-6">
            {[
              {
                q: 'What is your typical project timeline?',
                a: 'Timelines vary by complexity. Simple automation projects: 4-6 weeks. Custom SaaS platforms: 3-6 months. We provide detailed timelines during initial consultation.',
              },
              {
                q: 'Do you offer ongoing support and maintenance?',
                a: 'Yes. All enterprise clients receive 24/7 support, regular updates, and proactive monitoring. Support SLAs are customized based on your requirements.',
              },
              {
                q: 'What industries do you specialize in?',
                a: 'We work with B2B enterprises across technology, finance, healthcare, and professional services. Our solutions are industry-agnostic and highly customizable.',
              },
              {
                q: 'How do you ensure data security and compliance?',
                a: 'We are SOC 2 Type II and ISO 27001 certified. All solutions include enterprise-grade encryption, access controls, and compliance frameworks (GDPR, HIPAA, etc.).',
              },
              {
                q: 'What is the minimum engagement size?',
                a: 'We typically work with projects starting at $10,000. For enterprise contracts, we offer customized pricing and long-term partnership models.',
              },
            ].map((faq, index) => (
              <Card key={index} className="bg-[#14141A] border-[#00D0FF]/20 hover:border-[#00D0FF] transition-all">
                <CardContent className="pt-6">
                  <h4 className="text-white mb-2">{faq.q}</h4>
                  <p className="text-[#C2C2CC]">{faq.a}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Location Map Placeholder */}
      <section className="h-96 bg-gradient-to-br from-[#00D0FF]/5 to-[#75FF00]/5 relative overflow-hidden border-y border-[#00D0FF]/20">
        <div className="absolute inset-0 hex-pattern opacity-30"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <MapPin className="w-16 h-16 text-[#00D0FF] mx-auto mb-4 glow-cyan" />
            <p className="text-[#C2C2CC] font-mono">QUANTOM EDGE HEADQUARTERS</p>
            <p className="text-[#C2C2CC]/80 text-sm">7838 Malton Ln, Worthington, OH 43085, USA</p>
          </div>
        </div>
      </section>
    </div>
  );
}
