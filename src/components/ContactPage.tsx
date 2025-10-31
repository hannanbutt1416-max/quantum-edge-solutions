"use client";

import { useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
  CheckCircle,
  MessageSquare,
  Zap,
  Loader2,
  AlertCircle,
} from "lucide-react";
import { Button } from "./ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { Label } from "./ui/label";
import { CircuitBackground } from "./CircuitBackground";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";
import { projectId, publicAnonKey } from "../utils/supabase/info";

export function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    service: "",
    budget: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError("");

    try {
      const response = await fetch(
        `https://${projectId}.supabase.co/functions/v1/make-server-398bae6f/contact`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${publicAnonKey}`,
          },
          body: JSON.stringify(formData),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Failed to submit form");
      }

      console.log("Contact form submitted successfully:", data);
      setSubmitted(true);

      // Reset form after 3 seconds
      setTimeout(() => {
        setSubmitted(false);
        setFormData({
          name: "",
          email: "",
          phone: "",
          company: "",
          service: "",
          budget: "",
          message: "",
        });
      }, 3000);
    } catch (err: any) {
      console.error("Error submitting contact form:", err);
      setError(err.message || "Failed to submit form. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email",
      details: ["contact@quantomedge.io", "enterprise@quantomedge.io"],
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Phone",
      details: ["Main: +1 (614) 405-5814", "Support: Available 24/7"],
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Office",
      details: ["7838 Malton Ln", "Worthington, OH 43085, USA"],
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Hours",
      details: ["Monday - Friday: 9am - 6pm EST", "24/7 Enterprise Support"],
    },
  ];

  const faqs = [
    {
      q: "What is your typical project timeline?",
      a: "Timelines vary by complexity. Simple automation projects: 4-6 weeks. Custom SaaS platforms: 3-6 months. We provide detailed timelines during initial consultation.",
    },
    {
      q: "Do you offer ongoing support and maintenance?",
      a: "Yes. All enterprise clients receive 24/7 support, regular updates, and proactive monitoring. Support SLAs are customized based on your requirements.",
    },
    {
      q: "What industries do you specialize in?",
      a: "We work with B2B enterprises across technology, finance, healthcare, and professional services. Our solutions are industry-agnostic and highly customizable.",
    },
    {
      q: "How do you ensure data security and compliance?",
      a: "We are SOC 2 Type II and ISO 27001 certified. All solutions include enterprise-grade encryption, access controls, and compliance frameworks (GDPR, HIPAA, etc.).",
    },
    {
      q: "What is the minimum engagement size?",
      a: "We typically work with projects starting at $10,000. For enterprise contracts, we offer customized pricing and long-term partnership models.",
    },
  ];

  return (
    <div className="min-h-screen bg-[#14141A] font-['Poppins']">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden hex-pattern">
        <CircuitBackground />
        <div className="container mx-auto px-4 relative z-10 text-center">
          <div className="inline-block mb-6 px-4 py-2 bg-[#00D0FF]/10 border border-[#00D0FF]/30 rounded-md backdrop-blur-sm animate-fade-in">
            <span className="text-[#00D0FF] text-sm font-mono tracking-wider">
              GET IN TOUCH
            </span>
          </div>
          <h1 className="text-white mb-6 text-5xl md:text-6xl animate-fade-in">
            Start Your Project
          </h1>
          <p className="text-[#C2C2CC] text-xl max-w-3xl mx-auto animate-fade-in">
            Schedule a technical consultation to discuss your digital
            transformation needs
          </p>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20 bg-[#0F0F14] relative">
        <div className="container mx-auto px-4 grid lg:grid-cols-3 gap-10">
          {/* Form - 2 columns */}
          <div className="lg:col-span-2">
            <Card className="bg-[#14141A]/80 backdrop-blur-xl border border-[#00D0FF]/30 shadow-2xl shadow-[#00D0FF]/10 rounded-2xl transition-all duration-500 hover:shadow-[#00D0FF]/20 hover:border-[#00D0FF]/50">
              <CardHeader className="pb-8 border-b border-[#00D0FF]/10">
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-3 bg-gradient-to-br from-[#00D0FF]/20 to-[#75FF00]/20 rounded-xl border border-[#00D0FF]/40 shadow-lg shadow-[#00D0FF]/20">
                    <MessageSquare className="w-6 h-6 text-[#00D0FF]" />
                  </div>
                  <CardTitle className="text-2xl text-white">
                    Technical Consultation Request
                  </CardTitle>
                </div>
                <p className="text-[#A1A1AA] text-sm font-mono">
                  Expect a detailed response within{" "}
                  <span className="text-[#75FF00]">24 hours</span>
                </p>
              </CardHeader>

              <CardContent className="pt-8">
                {submitted ? (
                  <div className="text-center py-16 animate-fade-in">
                    <div className="relative inline-block mb-6">
                      <div className="absolute inset-0 bg-[#75FF00]/20 rounded-full blur-2xl animate-pulse"></div>
                      <CheckCircle className="w-20 h-20 text-[#75FF00] mx-auto relative animate-bounce-once" />
                    </div>
                    <h3 className="text-3xl text-white mb-3">
                      Inquiry Received
                    </h3>
                    <p className="text-[#A1A1AA] max-w-md mx-auto text-lg">
                      Thank you. A senior engineer will contact you shortly.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-7">
                    {error && (
                      <div className="flex items-start gap-3 p-4 bg-red-500/10 border border-red-500/30 rounded-xl animate-fade-in backdrop-blur-sm">
                        <AlertCircle className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
                        <p className="text-red-400 text-sm">{error}</p>
                      </div>
                    )}

                    {/* Form Fields */}
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label
                          htmlFor="name"
                          className="text-[#C2C2CC] flex items-center gap-1"
                        >
                          Full Name{" "}
                          <span className="text-[#75FF00] ml-1">*</span>
                        </Label>
                        <Input
                          id="name"
                          type="text"
                          placeholder="John Doe"
                          value={formData.name}
                          onChange={(e) => handleChange("name", e.target.value)}
                          className="bg-[#0A0A0D]/70 border-[#00D0FF]/30 text-white h-12 rounded-xl focus:border-[#00D0FF] focus:ring-2 focus:ring-[#00D0FF]/30 transition-all duration-300 hover:border-[#00D0FF]/50 backdrop-blur-sm"
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label
                          htmlFor="email"
                          className="text-[#C2C2CC] flex items-center gap-1"
                        >
                          Email Address{" "}
                          <span className="text-[#75FF00] ml-1">*</span>
                        </Label>
                        <Input
                          id="email"
                          type="email"
                          placeholder="john@company.com"
                          value={formData.email}
                          onChange={(e) =>
                            handleChange("email", e.target.value)
                          }
                          className="bg-[#0A0A0D]/70 border-[#00D0FF]/30 text-white h-12 rounded-xl focus:border-[#00D0FF] focus:ring-2 focus:ring-[#00D0FF]/30 transition-all duration-300 hover:border-[#00D0FF]/50 backdrop-blur-sm"
                          required
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label
                          htmlFor="phone"
                          className="text-[#C2C2CC] flex items-center gap-1"
                        >
                          Phone Number
                        </Label>
                        <Input
                          id="phone"
                          type="tel"
                          placeholder="+1 (614) 405-5814"
                          value={formData.phone}
                          onChange={(e) =>
                            handleChange("phone", e.target.value)
                          }
                          className="bg-[#0A0A0D]/70 border-[#00D0FF]/30 text-white h-12 rounded-xl focus:border-[#00D0FF] focus:ring-2 focus:ring-[#00D0FF]/30 transition-all duration-300 hover:border-[#00D0FF]/50 backdrop-blur-sm"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label
                          htmlFor="company"
                          className="text-[#C2C2CC] flex items-center gap-1"
                        >
                          Company{" "}
                          <span className="text-[#75FF00] ml-1">*</span>
                        </Label>
                        <Input
                          id="company"
                          type="text"
                          placeholder="Acme Corp"
                          value={formData.company}
                          onChange={(e) =>
                            handleChange("company", e.target.value)
                          }
                          className="bg-[#0A0A0D]/70 border-[#00D0FF]/30 text-white h-12 rounded-xl focus:border-[#00D0FF] focus:ring-2 focus:ring-[#00D0FF]/30 transition-all duration-300 hover:border-[#00D0FF]/50 backdrop-blur-sm"
                          required
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label
                          htmlFor="service"
                          className="text-[#C2C2CC] flex items-center gap-1"
                        >
                          Service Interest{" "}
                          <span className="text-[#75FF00] ml-1">*</span>
                        </Label>
                        <Select
                          onValueChange={(v) => handleChange("service", v)}
                          value={formData.service}
                          required
                        >
                          <SelectTrigger className="bg-[#0A0A0D]/70 border-[#00D0FF]/30 text-white h-12 rounded-xl focus:border-[#00D0FF] focus:ring-2 focus:ring-[#00D0FF]/30 transition-all duration-300 hover:border-[#00D0FF]/50 backdrop-blur-sm">
                            <SelectValue placeholder="Choose a service" />
                          </SelectTrigger>
                          <SelectContent className="bg-[#14141A] border-[#00D0FF]/40 backdrop-blur-xl">
                            {[
                              "Digital Marketing",
                              "Marketing Automation",
                              "SaaS Development",
                              "Data Analytics",
                              "Technical Consulting",
                              "Other",
                            ].map((s) => (
                              <SelectItem
                                key={s}
                                value={s.toLowerCase().replace(/\s+/g, "-")}
                                className="text-white hover:bg-[#00D0FF]/10 focus:bg-[#00D0FF]/10 cursor-pointer"
                              >
                                {s}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="space-y-2">
                        <Label
                          htmlFor="budget"
                          className="text-[#C2C2CC] flex items-center gap-1"
                        >
                          Budget Range
                        </Label>
                        <Select
                          onValueChange={(v) => handleChange("budget", v)}
                          value={formData.budget}
                        >
                          <SelectTrigger className="bg-[#0A0A0D]/70 border-[#00D0FF]/30 text-white h-12 rounded-xl focus:border-[#00D0FF] focus:ring-2 focus:ring-[#00D0FF]/30 transition-all duration-300 hover:border-[#00D0FF]/50 backdrop-blur-sm">
                            <SelectValue placeholder="Select range" />
                          </SelectTrigger>
                          <SelectContent className="bg-[#14141A] border-[#00D0FF]/40 backdrop-blur-xl">
                            {[
                              "Under $10K",
                              "$10K–$50K",
                              "$50K–$100K",
                              "$100K–$500K",
                              "$500K+",
                            ].map((b) => (
                              <SelectItem
                                key={b}
                                value={b.toLowerCase().replace(/[^a-z0-9]/g, "-")}
                                className="text-white hover:bg-[#00D0FF]/10 focus:bg-[#00D0FF]/10 cursor-pointer"
                              >
                                {b}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label
                        htmlFor="message"
                        className="text-[#C2C2CC] flex items-center gap-1"
                      >
                        Project Details{" "}
                        <span className="text-[#75FF00] ml-1">*</span>
                      </Label>
                      <Textarea
                        id="message"
                        placeholder="Describe your technical goals, timeline, integrations, and success metrics..."
                        rows={5}
                        value={formData.message}
                        onChange={(e) =>
                          handleChange("message", e.target.value)
                        }
                        className="bg-[#0A0A0D]/70 border-[#00D0FF]/30 text-white placeholder-[#6B7280] focus:border-[#00D0FF] focus:ring-2 focus:ring-[#00D0FF]/30 rounded-xl resize-none transition-all duration-300 hover:border-[#00D0FF]/50 backdrop-blur-sm"
                        required
                      />
                    </div>

                    <div className="pt-6">
                      <Button
                        type="submit"
                        disabled={isSubmitting}
                        size="lg"
                        className="relative w-full md:w-auto h-16 px-10 rounded-xl text-base text-white bg-gradient-to-r from-[#00FF88] via-[#75FF00] to-[#B6FF00]
                        shadow-[0_4px_20px_rgba(117,255,0,0.3)] hover:shadow-[0_6px_30px_rgba(117,255,0,0.5)]
                        hover:from-[#00EE7A] hover:via-[#6AFF00] hover:to-[#A5FF00]
                        transition-all duration-300 ease-out flex items-center justify-center gap-3
                        hover:scale-[1.03] active:scale-[0.97] backdrop-blur-sm border border-white/10 overflow-hidden group
                        disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
                      >
                        {isSubmitting ? (
                          <>
                            <Loader2 className="w-5 h-5 animate-spin" />
                            Submitting...
                          </>
                        ) : (
                          <>
                            Submit Secure Inquiry
                            <Send className="w-5 h-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-0.5" />
                          </>
                        )}
                      </Button>
                    </div>
                  </form>
                )}
              </CardContent>
            </Card>
          </div>

          {/* Contact Sidebar - 1 column */}
          <div className="space-y-6">
            {contactInfo.map((info, i) => (
              <Card
                key={i}
                className="bg-[#14141A]/70 backdrop-blur-md border border-[#00D0FF]/20 hover:border-[#00D0FF]/60 hover:scale-[1.02] hover:shadow-lg hover:shadow-[#00D0FF]/20 transition-all duration-300 rounded-2xl group cursor-pointer"
              >
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-gradient-to-br from-[#00D0FF]/20 to-[#00D0FF]/10 rounded-xl border border-[#00D0FF]/40 shadow-lg shadow-[#00D0FF]/10 group-hover:shadow-[#00D0FF]/30 transition-all duration-300">
                      <div className="text-[#00D0FF]">{info.icon}</div>
                    </div>
                    <div>
                      <h4 className="text-white font-mono text-sm uppercase tracking-wider mb-2">
                        {info.title}
                      </h4>
                      {info.details.map((d, idx) => (
                        <p
                          key={idx}
                          className="text-[#A1A1AA] text-sm leading-relaxed"
                        >
                          {d}
                        </p>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}

            <Card className="bg-gradient-to-br from-[#00D0FF]/10 via-[#75FF00]/5 to-transparent border border-[#00D0FF]/40 rounded-2xl shadow-lg shadow-[#00D0FF]/10 hover:shadow-[#00D0FF]/20 transition-all duration-300">
              <CardContent className="pt-6">
                <div className="flex items-center gap-3 mb-3">
                  <Zap className="w-6 h-6 text-[#75FF00]" />
                  <h4 className="text-white">24/7 Response</h4>
                </div>
                <p className="text-[#A1A1AA] text-sm mb-4 leading-relaxed">
                  Enterprise inquiries are prioritized. Call our hotline for
                  immediate technical triage.
                </p>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-[#75FF00] rounded-full animate-pulse shadow-lg shadow-[#75FF00]/50"></div>
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
            <div className="inline-block mb-4 px-4 py-1 bg-[#00D0FF]/10 border border-[#00D0FF]/30 rounded-md backdrop-blur-sm">
              <span className="text-[#00D0FF] text-sm font-mono tracking-wider">
                FAQ
              </span>
            </div>
            <h2 className="text-white mb-4 text-4xl md:text-5xl">
              Common Questions
            </h2>
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
                  className="bg-[#14141A] border border-[#00D0FF]/20 rounded-xl overflow-hidden transition-all hover:border-[#00D0FF]/60 hover:shadow-lg hover:shadow-[#00D0FF]/10 backdrop-blur-sm"
                >
                  <AccordionTrigger className="px-8 py-6 text-left text-white hover:text-[#00D0FF] transition-colors [&[data-state=open]]:text-[#00D0FF] focus-visible:ring-0 hover:no-underline">
                    <span className="pr-4">{faq.q}</span>
                  </AccordionTrigger>
                  <AccordionContent className="px-8 pb-6 pt-2">
                    <p className="text-[#C2C2CC] leading-relaxed">
                      {faq.a}
                    </p>
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
        <div className="absolute inset-0 backdrop-blur-sm"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <div className="relative inline-block mb-6">
              <div className="absolute inset-0 bg-[#00D0FF]/20 rounded-full blur-3xl animate-pulse"></div>
              <MapPin className="w-16 h-16 text-[#00D0FF] mx-auto relative drop-shadow-[0_0_20px_rgba(0,208,255,0.6)]" />
            </div>
            <p className="text-[#C2C2CC] font-mono tracking-wider text-lg mb-2">
              QUANTOM EDGE HEADQUARTERS
            </p>
            <p className="text-[#C2C2CC]/80">
              7838 Malton Ln, Worthington, OH 43085, USA
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
