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
    <header className="sticky top-0 z-50 bg-[#14141A]/95 backdrop-blur-md border-b border-[#2A2A33] transition-all">
      <div className="container mx-auto px-4 py-4">
        <nav className="flex items-center justify-between">
          {/* Logo */}
          <button
            onClick={() => onNavigate('home')}
            className="flex items-center space-x-3 group transition-all hover:opacity-90"
          >
            <div className="w-12 h-12 bg-gradient-to-br from-[#00D0FF] to-[#75FF00] rounded-lg flex items-center justify-center">
              <span className="text-[#14141A] font-bold text-xl">QE</span>
            </div>
            <div className="hidden sm:flex flex-col items-start leading-tight">
              <span className="text-white font-bold text-lg tracking-tight">
                QUANTOM
              </span>
              <span className="text-[#00D0FF] font-semibold text-lg tracking-tight">
                EDGE
              </span>
            </div>
          </button>

          {/* Desktop Nav */}
          <ul className="hidden lg:flex items-center space-x-2">
            {navItems.map((item) => (
              <li key={item.path}>
                <button
                  onClick={() => onNavigate(item.path)}
                  className={`px-4 py-2 rounded-md text-sm font-medium transition-all duration-200
                    ${
                      currentPage === item.path
                        ? 'text-[#00D0FF] bg-[#00D0FF]/10 '
                        : 'text-[#C2C2CC] hover:text-[#00D0FF] hover:bg-[#1F1F24]'
                    }`}
                >
                  {item.name}
                </button>
              </li>
            ))}
          </ul>

          {/* CTA */}
          <div className="hidden lg:block">
            <Button
              onClick={() => onNavigate('contact')}
              className="bg-[#75FF00] text-[#14141A] hover:bg-[#00B8E0] font-semibold px-6 py-2 rounded-md transition-colors"
            >
              Start Project
            </Button>
          </div>

          {/* Mobile Menu Icon */}
          <button
            className="lg:hidden text-[#00D0FF]"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-4 pb-4 space-y-2 border-t border-[#2A2A33] pt-4 animate-in slide-in-from-top">
            {navItems.map((item) => (
              <button
                key={item.path}
                onClick={() => {
                  onNavigate(item.path);
                  setMobileMenuOpen(false);
                }}
                className={`block w-full text-left py-3 px-4 rounded-md text-sm font-medium transition-all
                  ${
                    currentPage === item.path
                      ? 'text-[#00D0FF] bg-[#1F1F24] border-l-2 border-[#00D0FF]'
                      : 'text-[#C2C2CC] hover:text-[#00D0FF] hover:bg-[#1A1A1F]'
                  }`}
              >
                {item.name}
              </button>
            ))}
            <Button
              className="w-full bg-[#75FF00] text-[#14141A] hover:bg-[#75FF00] mt-4 font-semibold rounded-md"
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
