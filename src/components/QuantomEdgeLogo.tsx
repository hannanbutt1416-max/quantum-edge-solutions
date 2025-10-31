import logo from "figma:asset/626d2521e963881892f1c9edfe1908ce56f6a834.png";

interface QuantomEdgeLogoProps {
  className?: string;
  size?: "sm" | "md" | "lg";
}

export function QuantomEdgeLogo({ className = "", size = "md" }: QuantomEdgeLogoProps) {
  const sizeClasses = {
    sm: "w-10 h-10",
    md: "w-16 h-16",
    lg: "w-24 h-24",
  };

  return (
    <img
      src={logo}
      alt="Quantum Edge Solutions"
      className={`${sizeClasses[size]} ${className} object-contain`}
    />
  );
}
