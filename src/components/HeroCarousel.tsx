import { useState, useEffect } from "react";
import {
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  Search,
  MapPin,
  TrendingUp,
  Star,
} from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { Button } from "./ui/button";
import { TypewriterText } from "./TypewriterText";
import { AnimatedHeroMetrics } from "./AnimatedHeroMetrics";
import { DataStreamVisualizer } from "./DataStreamVisualizer";
import { GlitchText } from "./GlitchText";
import { Holographic3DText } from "./Holographic3DText";
import { HolographicPanel } from "./HolographicPanel";
import { FloatingCard3D } from "./FloatingCard3D";
import { MagneticButton } from "./MagneticButton";
import { ExplosiveEntrance } from "./ExplosiveEntrance";
import { MobileOptimizedWrapper } from "./MobileOptimizedWrapper";
import { MouseFollowParallax } from "./MouseFollowParallax";

interface HeroCarouselProps {
  onNavigate: (page: string) => void;
}

export function HeroCarousel({ onNavigate }: HeroCarouselProps) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = 2;

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % totalSlides);
    }, 8000); // Auto-advance every 8 seconds

    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  return (
    <div className="relative">
      <AnimatePresence mode="wait">
        {currentSlide === 0 && (
          <motion.div
            key="slide-1"
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5 }}
            className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center"
          >
            {/* Slide 1: Main Hero - Digital Marketing & Automation */}
            <div>
              {/* Mobile: Simple entrance, Desktop: Explosive */}
              <MobileOptimizedWrapper
                fallback={
                  <motion.div
                    className="inline-block mb-4 md:mb-6 px-3 md:px-4 py-2 bg-[#00D0FF]/10 border border-[#00D0FF]/30 rounded-md backdrop-blur-sm"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                  >
                    <span className="text-[#00D0FF] text-xs md:text-sm font-mono">
                      PERFORMANCE • PRECISION • GROWTH
                    </span>
                  </motion.div>
                }
              >
                <ExplosiveEntrance delay={0.2}>
                  <motion.div
                    className="inline-block mb-6 px-4 py-2 bg-[#00D0FF]/10 border border-[#00D0FF]/30 rounded-md backdrop-blur-sm"
                    whileHover={{ scale: 1.05 }}
                  >
                    <motion.span className="text-[#00D0FF] text-sm font-mono">
                      <GlitchText text="PERFORMANCE • PRECISION • GROWTH" />
                    </motion.span>
                  </motion.div>
                </ExplosiveEntrance>
              </MobileOptimizedWrapper>

              {/* Mobile: Regular text, Desktop: Holographic */}
              <MobileOptimizedWrapper
                fallback={
                  <motion.h1
                    className="text-white mb-4 md:mb-6 text-3xl md:text-4xl lg:text-6xl leading-tight"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                  >
                    Unlock{" "}
                    <span className="text-[#75FF00]">
                      <TypewriterText
                        words={[
                          "SEO Dominance",
                          "Digital Growth",
                          "Marketing Automation",
                          "Data Intelligence",
                        ]}
                      />
                    </span>
                    <br />
                    for Modern Businesses
                  </motion.h1>
                }
              >
                <motion.h1
                  className="text-white mb-6 text-4xl md:text-5xl lg:text-6xl leading-tight"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                >
                  Unlock{" "}
                  <span className="text-[#75FF00]">
                    <TypewriterText
                      words={[
                        "SEO Dominance",
                        "Digital Growth",
                        "Marketing Automation",
                        "Data Intelligence",
                      ]}
                    />
                  </span>
                  <br />
                  for Modern Businesses
                </motion.h1>
              </MobileOptimizedWrapper>

              <motion.p
                className="text-[#C2C2CC] text-base md:text-lg lg:text-xl mb-6 md:mb-8 leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
              >
                Full-stack digital marketing, SEO optimization, and automation
                solutions powered by data intelligence and cutting-edge
                technology.
              </motion.p>

              <motion.div
                className="flex flex-col sm:flex-row gap-3 md:gap-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 }}
              >
                {/* Mobile: Regular buttons, Desktop: Magnetic */}
                <MobileOptimizedWrapper
                  fallback={
                    <Button
                      size="lg"
                      className="bg-[#75FF00] text-[#14141A] hover:bg-[#75FF00]/90 glow-lime group w-full sm:w-auto"
                      onClick={() => onNavigate("contact")}
                    >
                      Get Free SEO Audit
                      <ArrowRight
                        className="ml-2 group-hover:translate-x-1 transition-transform"
                        size={20}
                      />
                    </Button>
                  }
                >
                  <MagneticButton strength={0.2}>
                    <Button
                      size="lg"
                      className="bg-[#75FF00] text-[#14141A] hover:bg-[#75FF00]/90 glow-lime group"
                      onClick={() => onNavigate("contact")}
                    >
                      Get Free SEO Audit
                      <ArrowRight
                        className="ml-2 group-hover:translate-x-1 transition-transform"
                        size={20}
                      />
                    </Button>
                  </MagneticButton>
                </MobileOptimizedWrapper>

                <MobileOptimizedWrapper
                  fallback={
                    <Button
                      size="lg"
                      variant="outline"
                      className="border-[#00D0FF] text-[#00D0FF] hover:bg-[#00D0FF]/10 w-full sm:w-auto"
                      onClick={() => onNavigate("portfolio")}
                    >
                      View Case Studies
                    </Button>
                  }
                >
                  <MagneticButton strength={0.2}>
                    <Button
                      size="lg"
                      variant="outline"
                      className="border-[#00D0FF] text-[#00D0FF] hover:bg-[#00D0FF]/10"
                      onClick={() => onNavigate("portfolio")}
                    >
                      View Case Studies
                    </Button>
                  </MagneticButton>
                </MobileOptimizedWrapper>
              </motion.div>

              <motion.div
                className="mt-6 md:mt-8 flex flex-wrap items-center gap-3 md:gap-4 lg:gap-6 text-xs md:text-sm"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.9 }}
              >
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-[#75FF00] rounded-full" />
                  <span className="text-[#C2C2CC]">
                    287% Organic Traffic Increase
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-[#00D0FF] rounded-full" />
                  <span className="text-[#C2C2CC]">
                    1st Page Google Rankings
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-[#75FF00] rounded-full" />
                  <span className="text-[#C2C2CC]">98% Client Retention</span>
                </div>
              </motion.div>
            </div>

            {/* Right Column - 3D Floating Cards */}
            <div className="hidden lg:block">
              <MouseFollowParallax strength={15}>
                <div className="space-y-6">
                  {/* Animated Metrics with 3D Float */}
                  <FloatingCard3D delay={0.6}>
                    <HolographicPanel delay={0.6}>
                      <AnimatedHeroMetrics />
                    </HolographicPanel>
                  </FloatingCard3D>

                  {/* Data Stream Visualizer with 3D Float */}
                  <FloatingCard3D delay={0.8}>
                    <HolographicPanel delay={0.8}>
                      <div className="mt-8 bg-[#1A1A22] border border-[#00D0FF]/20 rounded-lg p-4 relative overflow-hidden backdrop-blur-sm">
                        <div className="absolute top-2 left-2 text-[#00D0FF] font-mono text-xs opacity-70">
                          LIVE DATA STREAM
                        </div>
                        <DataStreamVisualizer />
                      </div>
                    </HolographicPanel>
                  </FloatingCard3D>
                </div>
              </MouseFollowParallax>
            </div>
          </motion.div>
        )}

        {currentSlide === 1 && (
          <motion.div
            key="slide-2"
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5 }}
            className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center"
          >
            {/* Slide 2: Local SEO Focus */}
            <div>
              <motion.div
                className="inline-block mb-4 md:mb-6 px-3 md:px-4 py-2 bg-[#75FF00]/10 border border-[#75FF00]/30 rounded-md backdrop-blur-sm"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                <span className="text-[#75FF00] text-xs md:text-sm font-mono">
                  LOCAL SEO MASTERY
                </span>
              </motion.div>

              <motion.h1
                className="text-white mb-4 md:mb-6 text-3xl md:text-4xl lg:text-6xl leading-tight"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                Dominate <span className="text-[#75FF00]">Local Search</span>
                <br />
                <span className="text-[#00D0FF]">Own Your Market</span>
              </motion.h1>

              <motion.p
                className="text-[#C2C2CC] text-base md:text-lg lg:text-xl mb-6 md:mb-8 leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
              >
                Advanced local SEO strategies that put your business on the map.
                From Google My Business optimization to local citations and
                review management.
              </motion.p>

              {/* Local SEO Features Grid */}
              <motion.div
                className="grid grid-cols-2 gap-3 md:gap-4 mb-6 md:mb-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
              >
                <div className="bg-[#1A1A22] border border-[#00D0FF]/20 rounded-lg p-4 backdrop-blur-sm">
                  <MapPin className="text-[#00D0FF] mb-2" size={24} />
                  <div className="text-[#75FF00] font-mono text-xl mb-1">
                    300%
                  </div>
                  <div className="text-[#C2C2CC] text-sm">
                    Map Pack Visibility
                  </div>
                </div>
                <div className="bg-[#1A1A22] border border-[#75FF00]/20 rounded-lg p-4 backdrop-blur-sm">
                  <Star className="text-[#75FF00] mb-2" size={24} />
                  <div className="text-[#00D0FF] font-mono text-xl mb-1">
                    4.8★
                  </div>
                  <div className="text-[#C2C2CC] text-sm">
                    Avg Client Rating
                  </div>
                </div>
                <div className="bg-[#1A1A22] border border-[#00D0FF]/20 rounded-lg p-4 backdrop-blur-sm">
                  <Search className="text-[#00D0FF] mb-2" size={24} />
                  <div className="text-[#75FF00] font-mono text-xl mb-1">
                    Top 3
                  </div>
                  <div className="text-[#C2C2CC] text-sm">Local Rankings</div>
                </div>
                <div className="bg-[#1A1A22] border border-[#75FF00]/20 rounded-lg p-4 backdrop-blur-sm">
                  <TrendingUp className="text-[#75FF00] mb-2" size={24} />
                  <div className="text-[#00D0FF] font-mono text-xl mb-1">
                    450%
                  </div>
                  <div className="text-[#C2C2CC] text-sm">
                    Call Volume Increase
                  </div>
                </div>
              </motion.div>

              <motion.div
                className="flex flex-col sm:flex-row gap-3 md:gap-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 }}
              >
                <Button
                  size="lg"
                  className="bg-[#75FF00] text-[#14141A] hover:bg-[#75FF00]/90 glow-lime group w-full sm:w-auto"
                  onClick={() => onNavigate("contact")}
                >
                  Get Local SEO Audit
                  <ArrowRight
                    className="ml-2 group-hover:translate-x-1 transition-transform"
                    size={20}
                  />
                </Button>

                <Button
                  size="lg"
                  variant="outline"
                  className="border-[#00D0FF] text-[#00D0FF] hover:bg-[#00D0FF]/10 w-full sm:w-auto"
                  onClick={() => onNavigate("services")}
                >
                  View Local SEO Services
                </Button>
              </motion.div>
            </div>

            {/* Right Column - Local SEO Visual */}
            <div className="hidden lg:block">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.4 }}
                className="bg-[#1A1A22] border border-[#00D0FF]/30 rounded-lg p-8 glow-cyan backdrop-blur-sm"
              >
                <div className="text-center mb-6">
                  <div className="inline-block px-4 py-2 bg-[#75FF00]/10 border border-[#75FF00]/30 rounded-md mb-4">
                    <span className="text-[#75FF00] text-sm font-mono">
                      GOOGLE MY BUSINESS
                    </span>
                  </div>
                  <h3 className="text-white text-2xl mb-2">
                    Verified Business Profile
                  </h3>
                  <p className="text-[#C2C2CC]">
                    Optimized for Maximum Visibility
                  </p>
                </div>

                {/* GMB Stats */}
                <div className="space-y-4">
                  {[
                    {
                      label: "Profile Views",
                      value: "+543%",
                      color: "#00D0FF",
                    },
                    {
                      label: "Website Clicks",
                      value: "+387%",
                      color: "#75FF00",
                    },
                    {
                      label: "Direction Requests",
                      value: "+298%",
                      color: "#00D0FF",
                    },
                    { label: "Phone Calls", value: "+421%", color: "#75FF00" },
                  ].map((stat, idx) => (
                    <div key={idx}>
                      <div className="flex justify-between mb-2">
                        <span className="text-[#C2C2CC] text-sm">
                          {stat.label}
                        </span>
                        <span
                          className="font-mono text-sm"
                          style={{ color: stat.color }}
                        >
                          {stat.value}
                        </span>
                      </div>
                      <div className="h-2 bg-[#14141A] rounded-full overflow-hidden">
                        <motion.div
                          className="h-full rounded-full"
                          style={{ backgroundColor: stat.color }}
                          initial={{ width: 0 }}
                          animate={{ width: "85%" }}
                          transition={{ delay: 0.5 + idx * 0.1, duration: 1 }}
                        />
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-6 pt-6 border-t border-[#00D0FF]/20 text-center">
                  <div className="flex items-center justify-center gap-2 text-[#75FF00]">
                    <Star className="fill-[#75FF00]" size={20} />
                    <Star className="fill-[#75FF00]" size={20} />
                    <Star className="fill-[#75FF00]" size={20} />
                    <Star className="fill-[#75FF00]" size={20} />
                    <Star className="fill-[#75FF00]" size={20} />
                  </div>
                  <p className="text-[#C2C2CC] text-sm mt-2">
                    Average Client Rating
                  </p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Navigation Arrows */}
      <div className="absolute top-1/2 -translate-y-1/2 left-0 right-0 flex justify-between pointer-events-none z-20">
        <button
          onClick={prevSlide}
          className="pointer-events-auto ml-2 lg:-ml-12 w-10 h-10 md:w-12 md:h-12 bg-[#1A1A22]/80 border border-[#00D0FF]/30 rounded-full flex items-center justify-center hover:bg-[#00D0FF]/10 hover:border-[#00D0FF] transition-all backdrop-blur-sm"
        >
          <ChevronLeft className="text-[#00D0FF]" size={24} />
        </button>
        <button
          onClick={nextSlide}
          className="pointer-events-auto mr-2 lg:-mr-12 w-10 h-10 md:w-12 md:h-12 bg-[#1A1A22]/80 border border-[#00D0FF]/30 rounded-full flex items-center justify-center hover:bg-[#00D0FF]/10 hover:border-[#00D0FF] transition-all backdrop-blur-sm"
        >
          <ChevronRight className="text-[#00D0FF]" size={24} />
        </button>
      </div>

      {/* Slide Indicators */}
      <div className="flex justify-center gap-2 mt-8">
        {Array.from({ length: totalSlides }).map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-2 h-2 rounded-full transition-all ${
              currentSlide === index ? "bg-[#75FF00] w-8" : "bg-[#C2C2CC]/30"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
