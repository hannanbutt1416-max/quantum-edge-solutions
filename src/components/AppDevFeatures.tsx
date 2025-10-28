import { motion } from 'motion/react';
import { Smartphone, Tablet, Watch, Wifi, Cloud, Lock, Zap, RefreshCcw } from 'lucide-react';

export function AppDevFeatures() {
  const platforms = [
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: 'iOS Development',
      description: 'Native iOS apps built with Swift and SwiftUI for optimal performance',
      features: ['App Store Ready', 'Native Performance', 'iOS 15+ Support'],
    },
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: 'Android Development',
      description: 'Native Android apps using Kotlin and Jetpack Compose',
      features: ['Google Play Ready', 'Material Design', 'Android 11+'],
    },
    {
      icon: <Tablet className="w-8 h-8" />,
      title: 'Cross-Platform',
      description: 'React Native & Flutter for unified codebase across platforms',
      features: ['Single Codebase', 'Fast Development', 'Cost Effective'],
    },
    {
      icon: <Watch className="w-8 h-8" />,
      title: 'Wearables & IoT',
      description: 'Apps for smartwatches, wearables, and IoT devices',
      features: ['Apple Watch', 'Wear OS', 'IoT Integration'],
    },
  ];

  const appFeatures = [
    {
      icon: <Wifi className="w-6 h-6" />,
      title: 'Real-Time Sync',
      description: 'Live data synchronization across devices with WebSocket and Firebase',
    },
    {
      icon: <Cloud className="w-6 h-6" />,
      title: 'Cloud Integration',
      description: 'Seamless integration with AWS, Azure, and Google Cloud services',
    },
    {
      icon: <Lock className="w-6 h-6" />,
      title: 'Security First',
      description: 'End-to-end encryption, secure authentication, and data protection',
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: 'Performance Optimized',
      description: 'Optimized for battery life, speed, and minimal resource usage',
    },
    {
      icon: <RefreshCcw className="w-6 h-6" />,
      title: 'Auto Updates',
      description: 'Over-the-air updates and continuous deployment pipelines',
    },
  ];

  return (
    <section className="py-12 md:py-16 lg:py-20 bg-[#1A1A22] relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 opacity-30">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-[#00D0FF] rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              scale: [1, 2, 1],
              opacity: [0.3, 0.8, 0.3],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 md:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-8 md:mb-12 lg:mb-16">
          <motion.div
            className="inline-block mb-3 md:mb-4 px-3 md:px-4 py-1 bg-[#75FF00]/10 border border-[#75FF00]/30 rounded-md backdrop-blur-sm"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-[#75FF00] text-xs md:text-sm font-mono">MOBILE EXCELLENCE</span>
          </motion.div>
          
          <motion.h2
            className="text-white mb-3 md:mb-4 text-2xl md:text-3xl lg:text-4xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            Native & Cross-Platform Apps
          </motion.h2>
          
          <motion.p
            className="text-[#C2C2CC] text-base md:text-lg lg:text-xl max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            Build powerful mobile experiences that users love on any platform
          </motion.p>
        </div>

        {/* Platform Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12 md:mb-16">
          {platforms.map((platform, index) => (
            <motion.div
              key={index}
              className="bg-[#14141A] border border-[#00D0FF]/20 rounded-lg p-6 hover:border-[#75FF00] transition-all duration-300 group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -8, scale: 1.02 }}
            >
              <div className="text-[#00D0FF] mb-4 group-hover:text-[#75FF00] transition-colors">
                {platform.icon}
              </div>
              <h4 className="text-white mb-2">{platform.title}</h4>
              <p className="text-[#C2C2CC] text-sm mb-4">{platform.description}</p>
              <div className="space-y-2">
                {platform.features.map((feature, idx) => (
                  <div key={idx} className="flex items-center space-x-2">
                    <div className="w-1 h-1 bg-[#75FF00] rounded-full" />
                    <span className="text-[#C2C2CC] text-xs">{feature}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* App Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {appFeatures.map((feature, index) => (
            <motion.div
              key={index}
              className="bg-[#14141A] border border-[#00D0FF]/20 rounded-lg p-6 text-center hover:border-[#00D0FF] transition-all duration-300"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
            >
              <div className="flex justify-center mb-3 text-[#00D0FF]">
                {feature.icon}
              </div>
              <h5 className="text-white text-sm mb-2">{feature.title}</h5>
              <p className="text-[#C2C2CC] text-xs">{feature.description}</p>
            </motion.div>
          ))}
        </div>

        {/* App Success Metrics */}
        <div className="mt-12 md:mt-16 bg-gradient-to-br from-[#00D0FF]/10 to-[#75FF00]/10 border border-[#00D0FF]/20 rounded-lg p-8 md:p-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {[
              { value: '50+', label: 'Apps Launched' },
              { value: '5M+', label: 'Total Downloads' },
              { value: '4.8★', label: 'Average Rating' },
              { value: '99.9%', label: 'Uptime SLA' },
            ].map((metric, index) => (
              <motion.div
                key={index}
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="text-[#75FF00] font-mono text-3xl md:text-4xl mb-2">
                  {metric.value}
                </div>
                <div className="text-[#C2C2CC] text-sm">{metric.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
