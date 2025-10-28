import { motion } from 'motion/react';
import { Search, MapPin, Building2, TrendingUp, LineChart, Globe, Target, Users, Star, CheckCircle } from 'lucide-react';
import { Card, CardContent } from './ui/card';

export function SEOServices() {
  const seoServices = [
    {
      icon: <Search className="w-8 h-8" />,
      title: 'Technical SEO',
      description: 'Site architecture optimization, schema markup, and core web vitals',
      features: ['Site Speed Optimization', 'Mobile-First Indexing', 'XML Sitemaps'],
      color: '#00D0FF'
    },
    {
      icon: <MapPin className="w-8 h-8" />,
      title: 'Local SEO',
      description: 'Dominate local search results and drive foot traffic to your business',
      features: ['Local Pack Rankings', 'Citation Building', 'Local Link Building'],
      color: '#75FF00'
    },
    {
      icon: <Building2 className="w-8 h-8" />,
      title: 'GMB Optimization',
      description: 'Complete Google My Business management and optimization',
      features: ['GMB Setup & Verification', 'Review Management', 'Post Optimization'],
      color: '#00D0FF'
    },
  ];

  const seoMetrics = [
    { value: '+287%', label: 'Organic Traffic Growth', icon: <TrendingUp className="w-5 h-5" /> },
    { value: '1st Page', label: 'Ranking Guarantee', icon: <Target className="w-5 h-5" /> },
    { value: '4.8★', label: 'Avg GMB Rating', icon: <Star className="w-5 h-5" /> },
    { value: '3x', label: 'Local Visibility Increase', icon: <MapPin className="w-5 h-5" /> },
  ];

  const localSEOFeatures = [
    'NAP Consistency Audit',
    'Google Maps Optimization',
    'Local Business Schema',
    'Geo-Targeted Content',
    'Local Directory Submissions',
    'Voice Search Optimization',
  ];

  return (
    <section className="py-20 bg-[#14141A] relative">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="inline-block mb-4 px-4 py-1 bg-[#75FF00]/10 border border-[#75FF00]/30 rounded-md">
            <span className="text-[#75FF00] text-sm font-mono">SEO • LOCAL SEO • GMB</span>
          </div>
          <h2 className="text-white mb-4 text-4xl md:text-5xl">
            Dominate <span className="text-[#75FF00]">Local Search Results</span>
          </h2>
          <p className="text-[#C2C2CC] text-xl max-w-3xl mx-auto">
            Advanced SEO strategies powered by data intelligence to increase visibility, drive qualified traffic, and dominate your local market
          </p>
        </motion.div>

        {/* SEO Services Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {seoServices.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <Card className="bg-[#1A1A22] border-[#00D0FF]/20 hover:border-[#75FF00] transition-all duration-300 group h-full">
                <CardContent className="pt-6">
                  <motion.div
                    className="mb-4"
                    style={{ color: service.color }}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    {service.icon}
                  </motion.div>
                  <h3 className="text-white mb-3 text-xl">{service.title}</h3>
                  <p className="text-[#C2C2CC] mb-6">{service.description}</p>
                  <div className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-[#75FF00]" />
                        <span className="text-[#C2C2CC] text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* SEO Metrics */}
        <motion.div
          className="bg-[#1A1A22] border border-[#00D0FF]/20 rounded-lg p-8 mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {seoMetrics.map((metric, index) => (
              <motion.div
                key={index}
                className="text-center"
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="flex justify-center mb-3 text-[#00D0FF]">
                  {metric.icon}
                </div>
                <div className="text-[#75FF00] font-mono text-3xl mb-2">
                  {metric.value}
                </div>
                <div className="text-[#C2C2CC] text-sm">{metric.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Local SEO Features */}
        <motion.div
          className="grid md:grid-cols-2 gap-8 items-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <div>
            <h3 className="text-white mb-6 text-3xl">
              Complete <span className="text-[#75FF00]">Local SEO</span> Solution
            </h3>
            <p className="text-[#C2C2CC] mb-8 leading-relaxed">
              Our comprehensive local SEO service ensures your business appears in local search results, Google Maps, and drives qualified local traffic. We optimize every aspect of your local presence.
            </p>
            <div className="grid grid-cols-2 gap-4">
              {localSEOFeatures.map((feature, index) => (
                <motion.div
                  key={index}
                  className="flex items-center gap-2"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="w-2 h-2 bg-[#75FF00] rounded-full"></div>
                  <span className="text-[#C2C2CC] text-sm">{feature}</span>
                </motion.div>
              ))}
            </div>
          </div>

          {/* GMB Optimization Visual */}
          <motion.div
            className="bg-[#1A1A22] border border-[#00D0FF]/20 rounded-lg p-8"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="space-y-6">
              <div className="flex items-center gap-4 p-4 bg-[#14141A] border border-[#75FF00]/20 rounded">
                <Building2 className="w-8 h-8 text-[#75FF00]" />
                <div>
                  <div className="text-white font-semibold">Google My Business</div>
                  <div className="text-[#C2C2CC] text-sm">Full Profile Optimization</div>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 bg-[#14141A] border border-[#00D0FF]/20 rounded">
                <Star className="w-8 h-8 text-[#00D0FF]" />
                <div>
                  <div className="text-white font-semibold">Review Management</div>
                  <div className="text-[#C2C2CC] text-sm">5-Star Reputation Building</div>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 bg-[#14141A] border border-[#75FF00]/20 rounded">
                <MapPin className="w-8 h-8 text-[#75FF00]" />
                <div>
                  <div className="text-white font-semibold">Local Pack Dominance</div>
                  <div className="text-[#C2C2CC] text-sm">Top 3 Local Rankings</div>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 bg-[#14141A] border border-[#00D0FF]/20 rounded">
                <LineChart className="w-8 h-8 text-[#00D0FF]" />
                <div>
                  <div className="text-white font-semibold">Analytics & Reporting</div>
                  <div className="text-[#C2C2CC] text-sm">Real-time Performance Tracking</div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
