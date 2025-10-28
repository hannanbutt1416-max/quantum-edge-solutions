import logoImage from 'figma:asset/5e0d02ed83eda21d85c18f21937b9d38924d7a9a.png';

interface BrandLogoProps {
  className?: string;
  variant?: 'default' | 'large' | 'small';
}

export function BrandLogo({ className = "", variant = 'default' }: BrandLogoProps) {
  const sizeClasses = {
    small: 'w-32',
    default: 'w-48',
    large: 'w-64',
  };

  return (
    <div className={`${sizeClasses[variant]} ${className}`}>
      <img 
        src={logoImage} 
        alt="Quantom Edge Solutions" 
        className="w-full h-auto"
      />
    </div>
  );
}

// For hero sections and key branding moments
export function BrandLogoHero({ className = "" }: { className?: string }) {
  return (
    <div className={`relative ${className}`}>
      <img 
        src={logoImage} 
        alt="Quantom Edge Solutions" 
        className="w-full h-auto glow-cyan"
      />
    </div>
  );
}
