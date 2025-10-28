import { motion } from 'motion/react';
import { MapPin, Star, Phone, Clock, Camera, MessageSquare, TrendingUp, Users } from 'lucide-react';

export function GMBShowcase() {
  const gmbFeatures = [
    {
      icon: <MapPin className="w-6 h-6" />,
      title: 'Local Map Rankings',
      description: 'Get your business in the top 3 Google Maps results',
      stat: 'Top 3 Position'
    },
    {
      icon: <Star className="w-6 h-6" />,
      title: 'Review Generation',
      description: 'Automated system to collect authentic 5-star reviews',
      stat: '4.8+ Rating'
    },
    {
      icon: <Camera className="w-6 h-6" />,
      title: 'Visual Optimization',
      description: 'Professional photos and virtual tours',
      stat: '+156% Engagement'
    },
    {
      icon: <MessageSquare className="w-6 h-6" />,
      title: 'GMB Posts & Updates',
      description: 'Regular content updates to boost visibility',
      stat: 'Weekly Updates'
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: 'Hours & Attributes',
      description: 'Accurate business information optimization',
      stat: '100% Accuracy'
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: 'Insights & Analytics',
      description: 'Track performance and customer actions',
      stat: 'Real-time Data'
    },
  ];

  return (
    <section className="py-20 bg-[#1A1A22]">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="inline-block mb-4 px-4 py-1 bg-[#00D0FF]/10 border border-[#00D0FF]/30 rounded-md">
            <span className="text-[#00D0FF] text-sm font-mono">GOOGLE MY BUSINESS</span>
          </div>
          <h2 className="text-white mb-4 text-4xl md:text-5xl">
            Complete <span className="text-[#00D0FF]">GMB Management</span>
          </h2>
          <p className="text-[#C2C2CC] text-xl max-w-3xl mx-auto">
            Your Google My Business profile is often the first impression customers have. We optimize every element to drive calls, visits, and conversions.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {gmbFeatures.map((feature, index) => (
            <motion.div
              key={index}
              className="bg-[#14141A] border border-[#00D0FF]/20 rounded-lg p-6 hover:border-[#00D0FF] transition-all group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="flex items-start gap-4">
                <motion.div
                  className="text-[#00D0FF] bg-[#00D0FF]/10 p-3 rounded-lg"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  {feature.icon}
                </motion.div>
                <div className="flex-1">
                  <h3 className="text-white mb-2">{feature.title}</h3>
                  <p className="text-[#C2C2CC] text-sm mb-3">{feature.description}</p>
                  <div className="text-[#75FF00] font-mono text-sm">{feature.stat}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* GMB Impact Stats */}
        <motion.div
          className="bg-gradient-to-r from-[#00D0FF]/10 to-[#75FF00]/10 border border-[#00D0FF]/30 rounded-lg p-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <Phone className="w-8 h-8 text-[#00D0FF] mx-auto mb-3" />
              <div className="text-[#75FF00] font-mono text-3xl mb-2">+245%</div>
              <div className="text-[#C2C2CC] text-sm">Phone Calls</div>
            </div>
            <div>
              <MapPin className="w-8 h-8 text-[#75FF00] mx-auto mb-3" />
              <div className="text-[#00D0FF] font-mono text-3xl mb-2">+189%</div>
              <div className="text-[#C2C2CC] text-sm">Direction Requests</div>
            </div>
            <div>
              <Users className="w-8 h-8 text-[#00D0FF] mx-auto mb-3" />
              <div className="text-[#75FF00] font-mono text-3xl mb-2">+312%</div>
              <div className="text-[#C2C2CC] text-sm">Profile Views</div>
            </div>
            <div>
              <Star className="w-8 h-8 text-[#75FF00] mx-auto mb-3" />
              <div className="text-[#00D0FF] font-mono text-3xl mb-2">4.9★</div>
              <div className="text-[#C2C2CC] text-sm">Average Rating</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
