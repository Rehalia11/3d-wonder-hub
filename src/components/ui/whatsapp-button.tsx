import { cn } from "@/lib/utils";
import { MessageCircle } from "lucide-react";

interface WhatsAppButtonProps {
  className?: string;
  variant?: "primary" | "outline" | "hero";
  size?: "default" | "lg";
  children: React.ReactNode;
  message?: string;
}

const WHATSAPP_NUMBER = "+919870101365";

export const WhatsAppButton = ({
  className,
  variant = "primary",
  size = "default",
  children,
  message = "Hi! I'm interested in your 3D printing services.",
}: WhatsAppButtonProps) => {
  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER.replace(/\+/g, "")}?text=${encodeURIComponent(message)}`;

  const baseStyles = "inline-flex items-center justify-center gap-2 font-semibold transition-all duration-300 rounded-lg";
  
  const variants = {
    primary: "bg-primary text-primary-foreground hover:shadow-[0_0_30px_hsl(var(--primary)/0.5)] hover:scale-105",
    outline: "border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground glow-border",
    hero: "bg-gradient-to-r from-primary to-glow-blue text-primary-foreground hover:shadow-[0_0_40px_hsl(var(--primary)/0.6)] hover:scale-105 font-display tracking-wider uppercase",
  };

  const sizes = {
    default: "px-6 py-3 text-sm",
    lg: "px-8 py-4 text-lg",
  };

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(baseStyles, variants[variant], sizes[size], className)}
    >
      <MessageCircle className={size === "lg" ? "w-6 h-6" : "w-5 h-5"} />
      {children}
    </a>
  );
};
