import { motion } from 'motion/react';
import { 
  Wrench, 
  Sun, 
  Shield, 
  Droplet, 
  Home, 
  Zap, 
  Leaf, 
  Truck,
  Building2,
  Hammer,
  Wind,
  Paintbrush
} from 'lucide-react';

export function IndustriesServed() {
  const industries = [
    {
      icon: <Wrench className="w-8 h-8" />,
      name: 'HVAC',
      description: 'Heating, ventilation, and air conditioning services',
      clients: '120+',
      growth: '+285%',
    },
    {
      icon: <Sun className="w-8 h-8" />,
      name: 'Solar Energy',
      description: 'Solar panel installation and renewable energy',
      clients: '85+',
      growth: '+340%',
    },
    {
      icon: <Shield className="w-8 h-8" />,
      name: 'Security',
      description: 'Home and commercial security systems',
      clients: '95+',
      growth: '+265%',
    },
    {
      icon: <Droplet className="w-8 h-8" />,
      name: 'Plumbing',
      description: 'Residential and commercial plumbing services',
      clients: '110+',
      growth: '+310%',
    },
    {
      icon: <Home className="w-8 h-8" />,
      name: 'Roofing',
      description: 'Roof installation, repair, and maintenance',
      clients: '75+',
      growth: '+245%',
    },
    {
      icon: <Zap className="w-8 h-8" />,
      name: 'Electrical',
      description: 'Licensed electricians and electrical contractors',
      clients: '90+',
      growth: '+275%',
    },
    {
      icon: <Leaf className="w-8 h-8" />,
      name: 'Landscaping',
      description: 'Landscape design and lawn care services',
      clients: '65+',
      growth: '+220%',
    },
    {
      icon: <Truck className="w-8 h-8" />,
      name: 'Moving',
      description: 'Professional moving and storage companies',
      clients: '55+',
      growth: '+195%',
    },
    {
      icon: <Building2 className="w-8 h-8" />,
      name: 'Construction',
      description: 'General contractors and construction firms',
      clients: '80+',
      growth: '+255%',
    },
    {
      icon: <Hammer className="w-8 h-8" />,
      name: 'Remodeling',
      description: 'Home renovation and remodeling contractors',
      clients: '70+',
      growth: '+230%',
    },
    {
      icon: <Wind className="w-8 h-8" />,
      name: 'Cleaning',
      description: 'Commercial and residential cleaning services',
      clients: '100+',
      growth: '+295%',
    },
    {
      icon: <Paintbrush className="w-8 h-8" />,
      name: 'Painting',
      description: 'Professional painting contractors',
      clients: '60+',
      growth: '+210%',
    },
  ];

  return (
    <section className="py-12 md:py-16 lg:py-20 bg-[#1A1A22] relative overflow-hidden">
      {/* Animated circuit lines */}
      <div className="absolute inset-0 opacity-10">
        <svg className="w-full h-full">
          {[...Array(6)].map((_, i) => (
            <motion.line
              key={i}
              x1={`${i * 20}%`}
              y1="0"
              x2={`${i * 20}%`}
              y2="100%"
              stroke="#00D0FF"
              strokeWidth="1"
              strokeDasharray="4 4"
              animate={{
                strokeDashoffset: [0, -20],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: 'linear',
                delay: i * 0.2,
              }}
            />
          ))}
        </svg>
      </div>

      <div className="container mx-auto px-4 md:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-8 md:mb-12 lg:mb-16">
          <motion.div
            className="inline-block mb-3 md:mb-4 px-3 md:px-4 py-1 bg-[#00D0FF]/10 border border-[#00D0FF]/30 rounded-md backdrop-blur-sm"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-[#00D0FF] text-xs md:text-sm font-mono">INDUSTRIES WE SERVE</span>
          </motion.div>
          
          <motion.h2
            className="text-white mb-3 md:mb-4 text-2xl md:text-3xl lg:text-4xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            Specialized Solutions for Every Sector
          </motion.h2>
          
          <motion.p
            className="text-[#C2C2CC] text-base md:text-lg lg:text-xl max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            Proven strategies tailored to your industry's unique challenges
          </motion.p>
        </div>

        {/* Industries Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {industries.map((industry, index) => (
            <motion.div
              key={index}
              className="bg-[#14141A] border border-[#00D0FF]/20 rounded-lg p-6 hover:border-[#75FF00] transition-all duration-300 group relative overflow-hidden"
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ delay: index * 0.05 }}
              whileHover={{ y: -8, scale: 1.02 }}
            >
              {/* Animated background on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#00D0FF]/0 to-[#75FF00]/0 group-hover:from-[#00D0FF]/5 group-hover:to-[#75FF00]/5 transition-all duration-300" />
              
              <div className="relative z-10">
                {/* Icon */}
                <div className="mb-4 text-[#00D0FF] group-hover:text-[#75FF00] transition-colors duration-300">
                  {industry.icon}
                </div>
                
                {/* Industry Name */}
                <h4 className="text-white mb-2">{industry.name}</h4>
                
                {/* Description */}
                <p className="text-[#C2C2CC] text-sm mb-4 leading-relaxed">
                  {industry.description}
                </p>
                
                {/* Stats */}
                <div className="flex items-center justify-between pt-4 border-t border-[#00D0FF]/10">
                  <div>
                    <div className="text-[#75FF00] font-mono text-sm">{industry.clients}</div>
                    <div className="text-[#C2C2CC] text-xs">Clients</div>
                  </div>
                  <div>
                    <div className="text-[#00D0FF] font-mono text-sm">{industry.growth}</div>
                    <div className="text-[#C2C2CC] text-xs">Avg Growth</div>
                  </div>
                </div>
              </div>
              
              {/* Hexagonal pattern overlay */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-5 transition-opacity duration-300 pointer-events-none">
                <div className="w-full h-full hex-pattern" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Stats Bar */}
        <motion.div
          className="mt-12 md:mt-16 bg-gradient-to-r from-[#00D0FF]/10 via-[#75FF00]/10 to-[#00D0FF]/10 border border-[#00D0FF]/20 rounded-lg p-6 md:p-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div>
              <div className="text-[#75FF00] font-mono text-3xl md:text-4xl mb-2">
                1,000+
              </div>
              <div className="text-[#C2C2CC]">Total Projects Delivered</div>
            </div>
            <div>
              <div className="text-[#00D0FF] font-mono text-3xl md:text-4xl mb-2">
                12+
              </div>
              <div className="text-[#C2C2CC]">Industries Served</div>
            </div>
            <div>
              <div className="text-[#75FF00] font-mono text-3xl md:text-4xl mb-2">
                +265%
              </div>
              <div className="text-[#C2C2CC]">Average Client Growth</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
