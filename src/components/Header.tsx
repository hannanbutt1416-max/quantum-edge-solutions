import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from './ui/button';

interface HeaderProps {
  currentPage: string;
  onNavigate: (page: string) => void;
}

export function Header({ currentPage, onNavigate }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { name: 'Home', path: 'home' },
    { name: 'Services', path: 'services' },
    { name: 'Solutions', path: 'about' },
    { name: 'Case Studies', path: 'portfolio' },
    { name: 'Insights', path: 'blog' },
    { name: 'Contact', path: 'contact' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-[#14141A] border-b border-[#00D0FF]/20 backdrop-blur-sm">
      <div className="container mx-auto px-4 py-4">
        <nav className="flex items-center justify-between">
          {/* Logo - Placeholder for client logo */}
          <button 
            onClick={() => onNavigate('home')}
            className="flex items-center space-x-3 group transition-all hover:scale-105"
          >
            <div className="w-12 h-12 bg-gradient-to-br from-[#00D0FF] to-[#75FF00] rounded-lg flex items-center justify-center">
              <span className="text-[#14141A] font-bold text-xl">QE</span>
            </div>
            <div className="hidden sm:flex flex-col items-start">
              <span className="text-white font-bold text-lg leading-tight tracking-tight">
                QUANTOM
              </span>
              <span className="text-[#75FF00] font-bold text-lg leading-tight tracking-tight">
                EDGE
              </span>
            </div>
          </button>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {navItems.map((item) => (
              <button
                key={item.path}
                onClick={() => onNavigate(item.path)}
                className={`px-4 py-2 rounded-md transition-all duration-300 ${
                  currentPage === item.path
                    ? 'text-[#00D0FF] bg-[#00D0FF]/10 glow-cyan'
                    : 'text-[#C2C2CC] hover:text-[#00D0FF] hover:bg-[#00D0FF]/5'
                }`}
              >
                {item.name}
              </button>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <Button 
              onClick={() => onNavigate('contact')}
              className="bg-[#75FF00] text-[#14141A] hover:bg-[#75FF00]/90 glow-lime font-semibold"
            >
              Start Project
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-[#00D0FF]"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-4 pb-4 space-y-2 border-t border-[#00D0FF]/20 pt-4 animate-in slide-in-from-top">
            {navItems.map((item) => (
              <button
                key={item.path}
                onClick={() => {
                  onNavigate(item.path);
                  setMobileMenuOpen(false);
                }}
                className={`block w-full text-left py-3 px-4 rounded-md transition-all ${
                  currentPage === item.path
                    ? 'text-[#00D0FF] bg-[#00D0FF]/10 border-l-2 border-[#00D0FF]'
                    : 'text-[#C2C2CC] hover:text-[#00D0FF] hover:bg-[#00D0FF]/5'
                }`}
              >
                {item.name}
              </button>
            ))}
            <Button 
              className="w-full bg-[#75FF00] text-[#14141A] hover:bg-[#75FF00]/90 mt-4"
              onClick={() => {
                onNavigate('contact');
                setMobileMenuOpen(false);
              }}
            >
              Start Project
            </Button>
          </div>
        )}
      </div>
    </header>
  );
}
