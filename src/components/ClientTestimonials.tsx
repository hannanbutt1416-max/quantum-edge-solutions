import { motion } from 'motion/react';
import { Star, Quote, TrendingUp, MapPin, Shield, Zap, Wrench, Sun } from 'lucide-react';
import { Card, CardContent } from './ui/card';

export function ClientTestimonials() {
  const testimonials = [
    {
      name: 'Michael Chen',
      role: 'Owner',
      company: 'Elite HVAC Solutions',
      industry: 'HVAC',
      icon: <Wrench className="w-5 h-5" />,
      location: 'Phoenix, AZ',
      quote: 'Quantom Edge transformed our digital presence. We went from 3 leads per week to 45+ qualified leads monthly. Their local SEO strategy put us on the map - literally.',
      results: [
        { metric: '+287%', label: 'Lead Increase' },
        { metric: '#1', label: 'Google Ranking' },
      ],
      rating: 5,
      color: '#00D0FF',
    },
    {
      name: 'Sarah Rodriguez',
      role: 'Marketing Director',
      company: 'SunPower Innovations',
      industry: 'Solar Energy',
      icon: <Sun className="w-5 h-5" />,
      location: 'Austin, TX',
      quote: 'The custom web app they built handles our entire sales funnel. Installation bookings increased 340% and our customer management became seamless. Best ROI we\'ve ever seen.',
      results: [
        { metric: '+340%', label: 'Bookings' },
        { metric: '12x', label: 'ROI' },
      ],
      rating: 5,
      color: '#75FF00',
    },
    {
      name: 'James Patterson',
      role: 'CEO',
      company: 'SecureGuard Systems',
      industry: 'Security Services',
      icon: <Shield className="w-5 h-5" />,
      location: 'Miami, FL',
      quote: 'Their marketing automation platform cut our response time from hours to minutes. We now handle 3x more inquiries with the same team size. The app they developed is enterprise-grade.',
      results: [
        { metric: '90%', label: 'Time Saved' },
        { metric: '3x', label: 'More Leads' },
      ],
      rating: 5,
      color: '#00D0FF',
    },
    {
      name: 'Linda Martinez',
      role: 'Director of Operations',
      company: 'EcoClean Pro Services',
      industry: 'Cleaning Services',
      icon: <Zap className="w-5 h-5" />,
      location: 'Seattle, WA',
      quote: 'From zero online presence to dominating our local market. Their SEO work is phenomenal - we\'re now ranking for over 150 keywords and getting 200+ organic visits daily.',
      results: [
        { metric: '+520%', label: 'Traffic' },
        { metric: '150+', label: 'Keywords' },
      ],
      rating: 5,
      color: '#75FF00',
    },
    {
      name: 'Robert Kim',
      role: 'Founder',
      company: 'Summit Roofing Contractors',
      industry: 'Roofing',
      icon: <TrendingUp className="w-5 h-5" />,
      location: 'Denver, CO',
      quote: 'The mobile app they created revolutionized our field operations. Crew scheduling, job tracking, and customer communication all in one place. Our efficiency jumped 85%.',
      results: [
        { metric: '+85%', label: 'Efficiency' },
        { metric: '$2.5M', label: 'Added Revenue' },
      ],
      rating: 5,
      color: '#00D0FF',
    },
    {
      name: 'Amanda Torres',
      role: 'VP of Marketing',
      company: 'PurePipe Plumbing',
      industry: 'Plumbing',
      icon: <Wrench className="w-5 h-5" />,
      location: 'Las Vegas, NV',
      quote: 'Their Google My Business optimization was a game-changer. Emergency calls tripled and we\'re now the go-to plumber in our area. The social media campaigns drive constant engagement.',
      results: [
        { metric: '+310%', label: 'Calls' },
        { metric: '4.9★', label: 'Google Rating' },
      ],
      rating: 5,
      color: '#75FF00',
    },
  ];

  return (
    <section className="py-12 md:py-16 lg:py-20 bg-[#14141A] relative overflow-hidden hex-pattern">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#00D0FF]/5 to-transparent pointer-events-none" />
      
      <div className="container mx-auto px-4 md:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-8 md:mb-12 lg:mb-16">
          <motion.div
            className="inline-block mb-3 md:mb-4 px-3 md:px-4 py-1 bg-[#75FF00]/10 border border-[#75FF00]/30 rounded-md backdrop-blur-sm"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-[#75FF00] text-xs md:text-sm font-mono">CLIENT SUCCESS</span>
          </motion.div>
          
          <motion.h2
            className="text-white mb-3 md:mb-4 text-2xl md:text-3xl lg:text-4xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            Trusted by Industry Leaders
          </motion.h2>
          
          <motion.p
            className="text-[#C2C2CC] text-base md:text-lg lg:text-xl max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            Real results from real businesses across HVAC, Solar, Security, and more
          </motion.p>
        </div>

        {/* Overall Stats */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-12 md:mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          {[
            { value: '500+', label: 'Happy Clients' },
            { value: '98%', label: 'Retention Rate' },
            { value: '4.9★', label: 'Avg. Rating' },
            { value: '+287%', label: 'Avg. Growth' },
          ].map((stat, index) => (
            <motion.div
              key={index}
              className="bg-[#1A1A22] border border-[#00D0FF]/20 rounded-lg p-4 md:p-6 text-center hover:border-[#75FF00] transition-all duration-300"
              whileHover={{ y: -5, scale: 1.02 }}
            >
              <div className="text-[#75FF00] font-mono text-2xl md:text-3xl mb-2">
                {stat.value}
              </div>
              <div className="text-[#C2C2CC] text-sm">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="bg-[#1A1A22] border-[#00D0FF]/20 hover:border-[#00D0FF] transition-all duration-300 h-full group relative overflow-hidden">
                {/* Hover gradient effect */}
                <div 
                  className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-300 pointer-events-none"
                  style={{
                    background: `linear-gradient(135deg, ${testimonial.color}20, transparent)`,
                  }}
                />
                
                <CardContent className="pt-6 relative z-10">
                  {/* Industry Badge & Quote Icon */}
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center space-x-2">
                      <div 
                        className="w-10 h-10 rounded-lg flex items-center justify-center border"
                        style={{
                          borderColor: `${testimonial.color}40`,
                          backgroundColor: `${testimonial.color}10`,
                          color: testimonial.color,
                        }}
                      >
                        {testimonial.icon}
                      </div>
                      <div>
                        <div className="text-[#C2C2CC] text-xs font-mono">{testimonial.industry}</div>
                      </div>
                    </div>
                    <Quote className="w-8 h-8 text-[#00D0FF]/20" />
                  </div>

                  {/* Rating */}
                  <div className="flex items-center space-x-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-4 h-4 fill-[#75FF00] text-[#75FF00]"
                      />
                    ))}
                  </div>

                  {/* Quote */}
                  <p className="text-[#C2C2CC] text-sm mb-6 leading-relaxed">
                    "{testimonial.quote}"
                  </p>

                  {/* Results Metrics */}
                  <div className="grid grid-cols-2 gap-3 mb-6 pb-6 border-b border-[#00D0FF]/10">
                    {testimonial.results.map((result, idx) => (
                      <div key={idx} className="text-center">
                        <div 
                          className="font-mono text-lg mb-1"
                          style={{ color: testimonial.color }}
                        >
                          {result.metric}
                        </div>
                        <div className="text-[#C2C2CC] text-xs">{result.label}</div>
                      </div>
                    ))}
                  </div>

                  {/* Client Info */}
                  <div>
                    <div className="text-white mb-1">{testimonial.name}</div>
                    <div className="text-[#C2C2CC] text-sm mb-2">
                      {testimonial.role}, {testimonial.company}
                    </div>
                    <div className="flex items-center space-x-1 text-[#00D0FF] text-xs">
                      <MapPin className="w-3 h-3" />
                      <span>{testimonial.location}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          className="mt-12 md:mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="inline-block bg-[#1A1A22] border border-[#00D0FF]/20 rounded-lg px-6 py-4">
            <p className="text-[#C2C2CC] mb-2">
              Join 500+ businesses growing with Quantom Edge
            </p>
            <div className="flex items-center justify-center space-x-2 text-[#75FF00] text-sm font-mono">
              <TrendingUp className="w-4 h-4" />
              <span>Average 287% growth in first 6 months</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
