// components/ContactPage.tsx
"use client";

import { useState } from 'react';
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
  CheckCircle,
  MessageSquare,
  Zap,
} from 'lucide-react';
import { Button } from './ui/button';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from './ui/select';
import { Label } from './ui/label';
import { CircuitBackground } from './CircuitBackground';

// Import Radix Accordion
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from './ui/accordion';

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
    setFormData((prev) => ({ ...prev, [field]: value }));
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

  const faqs = [
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

      {/* Contact Form & Info */}
      <section className="py-20 bg-[#0F0F14] relative">
        <div className="container mx-auto px-4 grid lg:grid-cols-3 gap-10">
          {/* Form */}
          <div className="lg:col-span-2">
            <Card className="bg-[#14141A]/80 backdrop-blur-xl border border-[#00D0FF]/30 shadow-lg shadow-[#00D0FF]/10 rounded-2xl">
              <CardHeader className="pb-8">
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-3 bg-gradient-to-br from-[#00D0FF]/20 to-[#75FF00]/20 rounded-xl border border-[#00D0FF]/40">
                    <MessageSquare className="w-6 h-6 text-[#00D0FF]" />
                  </div>
                  <CardTitle className="text-2xl text-white font-bold">
                    Technical Consultation Request
                  </CardTitle>
                </div>
                <p className="text-[#A1A1AA] text-sm">
                  Expect a detailed response within{' '}
                  <span className="text-[#75FF00] font-semibold">24 hours</span>.
                </p>
              </CardHeader>

              <CardContent>
                {submitted ? (
                  <div className="text-center py-16 animate-fade-in">
                    <CheckCircle className="w-20 h-20 text-[#75FF00] mx-auto mb-5 animate-bounce-once" />
                    <h3 className="text-2xl font-bold text-white mb-3">
                      Inquiry Received
                    </h3>
                    <p className="text-[#A1A1AA] max-w-md mx-auto">
                      Thank you. A senior engineer will contact you shortly.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-7">
                    {/* Form Fields */}
                    <div className="grid md:grid-cols-2 gap-6 mb-3">
                      <div>
                        <Label htmlFor="name" className="text-[#C2C2CC] mb-2 block">
                          Full Name <span className="text-[#75FF00]">*</span>
                        </Label>
                        <Input
                          id="name"
                          type="text"
                          placeholder="John Doe"
                          value={formData.name}
                          onChange={(e) => handleChange('name', e.target.value)}
                          className="bg-[#0A0A0D] border border-[#00D0FF]/30 text-white h-12 rounded-xl focus:border-[#00D0FF] focus:ring-[#00D0FF]/30"
                          required
                        />
                      </div>
                      <div>
                        <Label htmlFor="email" className="text-[#C2C2CC] mb-2 block">
                          Email Address <span className="text-[#75FF00]">*</span>
                        </Label>
                        <Input
                          id="email"
                          type="email"
                          placeholder="john@company.com"
                          value={formData.email}
                          onChange={(e) => handleChange('email', e.target.value)}
                          className="bg-[#0A0A0D] border border-[#00D0FF]/30 text-white h-12 rounded-xl focus:border-[#00D0FF] focus:ring-[#00D0FF]/30"
                          required
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6 mb-3">
                      <div>
                        <Label htmlFor="phone" className="text-[#C2C2CC] mb-2 block">
                          Phone Number
                        </Label>
                        <Input
                          id="phone"
                          type="tel"
                          placeholder="+1 (614) 405-5814"
                          value={formData.phone}
                          onChange={(e) => handleChange('phone', e.target.value)}
                          className="bg-[#0A0A0D] border border-[#00D0FF]/30 text-white h-12 rounded-xl focus:border-[#00D0FF] focus:ring-[#00D0FF]/30"
                        />
                      </div>
                      <div>
                        <Label htmlFor="company" className="text-[#C2C2CC] mb-2 block">
                          Company <span className="text-[#75FF00]">*</span>
                        </Label>
                        <Input
                          id="company"
                          type="text"
                          placeholder="Acme Corp"
                          value={formData.company}
                          onChange={(e) => handleChange('company', e.target.value)}
                          className="bg-[#0A0A0D] border border-[#00D0FF]/30 text-white h-12 rounded-xl focus:border-[#00D0FF] focus:ring-[#00D0FF]/30"
                          required
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6 mb-3">
                      <div>
                        <Label htmlFor="service" className="text-[#C2C2CC] mb-2 block">
                          Service Interest <span className="text-[#75FF00]">*</span>
                        </Label>
                        <Select
                          onValueChange={(v) => handleChange('service', v)}
                          required
                        >
                          <SelectTrigger className="bg-[#0A0A0D] border border-[#00D0FF]/30 text-white h-12 rounded-xl">
                            <SelectValue placeholder="Choose a service" />
                          </SelectTrigger>
                          <SelectContent className="bg-[#14141A] border-[#00D0FF]/40">
                            {[
                              'Digital Marketing',
                              'Marketing Automation',
                              'SaaS Development',
                              'Data Analytics',
                              'Technical Consulting',
                              'Other',
                            ].map((s) => (
                              <SelectItem
                                key={s}
                                value={s.toLowerCase().replace(/\s+/g, '')}
                              >
                                {s}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                      <div>
                        <Label htmlFor="budget" className="text-[#C2C2CC] mb-2 block">
                          Budget Range
                        </Label>
                        <Select onValueChange={(v) => handleChange('budget', v)}>
                          <SelectTrigger className="bg-[#0A0A0D] border border-[#00D0FF]/30 text-white h-12 rounded-xl">
                            <SelectValue placeholder="Select range" />
                          </SelectTrigger>
                          <SelectContent className="bg-[#14141A] border-[#00D0FF]/40">
                            {[
                              'Under $10K',
                              '$10K–$50K',
                              '$50K–$100K',
                              '$100K–$500K',
                              '$500K+',
                            ].map((b) => (
                              <SelectItem
                                key={b}
                                value={b.toLowerCase().replace(/[^a-z0-9]/g, '')}
                              >
                                {b}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="message" className="text-[#C2C2CC] mb-2 block">
                        Project Details <span className="text-[#75FF00]">*</span>
                      </Label>
                      <Textarea
                        id="message"
                        placeholder="Describe your technical goals, timeline, integrations, and success metrics..."
                        rows={5}
                        value={formData.message}
                        onChange={(e) => handleChange('message', e.target.value)}
                        className="bg-[#0A0A0D] border border-[#00D0FF]/30 text-white placeholder-[#6B7280] focus:border-[#00D0FF] focus:ring-[#00D0FF]/30 rounded-xl resize-none"
                        required
                      />
                    </div>

                    <div className="pt-6">
                      <Button
                        type="submit"
                        size="lg"
                        className="relative w-full md:w-auto h-16 px-10 rounded-xl font-semibold text-base text-white bg-gradient-to-r from-[#00FF88] via-[#75FF00] to-[#B6FF00]
                        shadow-[0_4px_20px_rgba(117,255,0,0.3)] hover:shadow-[0_6px_25px_rgba(117,255,0,0.45)]
                        hover:from-[#00EE7A] hover:via-[#6AFF00] hover:to-[#A5FF00]
                        transition-all duration-300 ease-out flex items-center justify-center gap-3
                        hover:scale-[1.03] active:scale-[0.97] backdrop-blur-sm border border-white/10 overflow-hidden group"
                      >
                        Submit Secure Inquiry
                        <Send className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                      </Button>
                    </div>
                  </form>
                )}
              </CardContent>
            </Card>
          </div>

          {/* Contact Sidebar */}
          <div className="space-y-6">
            {contactInfo.map((info, i) => (
              <Card
                key={i}
                className="bg-[#14141A]/70 backdrop-blur-md border border-[#00D0FF]/20 hover:border-[#00D0FF]/60 hover:scale-[1.02] transition-all rounded-2xl"
              >
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-gradient-to-br from-[#00D0FF]/20 to-[#00D0FF]/10 rounded-xl border border-[#00D0FF]/40">
                      <div className="text-[#00D0FF]">{info.icon}</div>
                    </div>
                    <div>
                      <h4 className="text-white font-mono text-sm uppercase tracking-wider mb-2">
                        {info.title}
                      </h4>
                      {info.details.map((d, idx) => (
                        <p key={idx} className="text-[#A1A1AA] text-sm leading-relaxed">
                          {d}
                        </p>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}

            <Card className="bg-gradient-to-br from-[#00D0FF]/10 via-[#75FF00]/5 to-transparent border border-[#00D0FF]/40 rounded-2xl">
              <CardContent className="pt-6">
                <div className="flex items-center gap-3 mb-3">
                  <Zap className="w-6 h-6 text-[#75FF00]" />
                  <h4 className="text-white font-bold">24/7 Response</h4>
                </div>
                <p className="text-[#A1A1AA] text-sm mb-4">
                  Enterprise inquiries are prioritized. Call our hotline for immediate
                  technical triage.
                </p>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-[#75FF00] rounded-full animate-pulse"></div>
                  <span className="text-[#75FF00] font-mono text-sm tracking-wider">
                    ONLINE NOW
                  </span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ Section – Using Radix UI Accordion */}
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

          <div className="max-w-5xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
<AccordionItem
  key={index}
  value={`item-${index}`}
  className="bg-[#14141A] border border-[#00D0FF]/20 rounded-md overflow-hidden transition-all hover:border-[#00D0FF]/60"
>
  <AccordionTrigger className="px-8 py-6 text-left text-white font-medium hover:text-[#00D0FF] transition-colors [&[data-state=open]>svg]:rotate-180 focus-visible:ring-0">
    {faq.q}
  </AccordionTrigger>
  <AccordionContent className="px-6 pb-5 pt-2">
    <p className="text-[#C2C2CC] text-sm leading-relaxed">{faq.a}</p>
  </AccordionContent>
</AccordionItem>

              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* Map Placeholder */}
      <section className="h-96 bg-gradient-to-br from-[#00D0FF]/5 to-[#75FF00]/5 relative overflow-hidden border-y border-[#00D0FF]/20">
        <div className="absolute inset-0 hex-pattern opacity-30"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <MapPin className="w-16 h-16 text-[#00D0FF] mx-auto mb-4 glow-cyan" />
            <p className="text-[#C2C2CC] font-mono">
              QUANTOM EDGE HEADQUARTERS
            </p>
            <p className="text-[#C2C2CC]/80 text-sm">
              7838 Malton Ln, Worthington, OH 43085, USA
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}