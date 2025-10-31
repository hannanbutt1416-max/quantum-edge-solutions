import { Linkedin, Twitter, Github, Mail, Phone, MapPin } from "lucide-react";

interface FooterProps {
  onNavigate: (page: string) => void;
}

export function Footer({ onNavigate }: FooterProps) {
  return (
    <footer className="bg-[#14141A] text-[#C2C2CC] border-t border-[#00D0FF]/20 relative overflow-hidden w-full">
      <div className="container mx-auto px-4 py-12 relative z-10 max-w-7xl w-full">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-12 h-12 bg-gradient-to-br from-[#00D0FF] to-[#75FF00] rounded-lg flex items-center justify-center">
                <span className="text-[#14141A] font-bold text-xl">QE</span>
              </div>
              <div className="flex flex-col">
                <span className="text-white font-bold leading-tight">
                  QUANTOM
                </span>
                <span className="text-[#75FF00] font-bold leading-tight">
                  EDGE
                </span>
              </div>
            </div>
            <p className="text-[#C2C2CC]/80 mb-4 text-sm">
              Full-stack digital marketing, automation, and SaaS solutions for
              B2B enterprises.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-[#C2C2CC] hover:text-[#00D0FF] transition-colors"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="#"
                className="text-[#C2C2CC] hover:text-[#00D0FF] transition-colors"
              >
                <Twitter size={20} />
              </a>
              <a
                href="#"
                className="text-[#C2C2CC] hover:text-[#00D0FF] transition-colors"
              >
                <Github size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white mb-4 font-semibold">Navigation</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <button
                  onClick={() => onNavigate("home")}
                  className="text-[#C2C2CC] hover:text-[#00D0FF] transition-colors"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate("services")}
                  className="text-[#C2C2CC] hover:text-[#00D0FF] transition-colors"
                >
                  Services
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate("about")}
                  className="text-[#C2C2CC] hover:text-[#00D0FF] transition-colors"
                >
                  Solutions
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate("portfolio")}
                  className="text-[#C2C2CC] hover:text-[#00D0FF] transition-colors"
                >
                  Case Studies
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate("blog")}
                  className="text-[#C2C2CC] hover:text-[#00D0FF] transition-colors"
                >
                  Insights
                </button>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white mb-4 font-semibold">Services</h4>
            <ul className="space-y-2 text-sm text-[#C2C2CC]/80">
              <li>SEO & Local SEO</li>
              <li>Google My Business</li>
              <li>Digital Marketing Strategy</li>
              <li>Marketing Automation</li>
              <li>SaaS Development</li>
              <li>Data Analytics</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white mb-4 font-semibold">Contact</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start space-x-2">
                <MapPin
                  size={16}
                  className="flex-shrink-0 mt-1 text-[#00D0FF]"
                />
                <span className="text-[#C2C2CC]/80">
                  7838 Malton Ln
                  <br />
                  Worthington, OH 43085, USA
                </span>
              </li>
              <li className="flex items-center space-x-2">
                <Phone size={16} className="flex-shrink-0 text-[#00D0FF]" />
                <a
                  href="tel:+16144055814"
                  className="text-[#C2C2CC]/80 hover:text-[#00D0FF] transition-colors"
                >
                  +1 (614) 405-5814
                </a>
              </li>
              <li className="flex items-center space-x-2">
                <Mail size={16} className="flex-shrink-0 text-[#00D0FF]" />
                <a
                  href="mailto:contact@quantomedge.io"
                  className="text-[#C2C2CC]/80 hover:text-[#00D0FF] transition-colors"
                >
                  contact@quantomedge.io
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-[#00D0FF]/10 pt-8 flex flex-col md:flex-row justify-between items-center text-sm">
          <p className="text-[#C2C2CC]/60 mb-4 md:mb-0">
            &copy; 2025 Quantom Edge Solutions. All rights reserved.
          </p>
          <div className="flex space-x-6 text-[#C2C2CC]/60">
            <button className="hover:text-[#00D0FF] transition-colors">
              Privacy Policy
            </button>
            <button className="hover:text-[#00D0FF] transition-colors">
              Terms of Service
            </button>
            <button
              onClick={() => onNavigate("admin")}
              className="hover:text-[#00D0FF] transition-colors opacity-50 hover:opacity-100"
              title="Admin Access"
            >
              Admin
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
