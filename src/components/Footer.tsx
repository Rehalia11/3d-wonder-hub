import { motion } from "framer-motion";
import { MessageCircle, Mail, MapPin } from "lucide-react";
import { WhatsAppButton } from "./ui/whatsapp-button";
import logo from "@/assets/logo.png";
export const Footer = () => {
  return <footer className="py-16 border-t border-border/50 relative">
      <div className="container px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <motion.div initial={{
          opacity: 0,
          y: 20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }}>
            <div className="flex items-center gap-2 mb-4">
              <img src={logo} alt="3D Indier Logo" className="w-8 h-8 object-contain" />
              <span className="font-display font-bold text-xl">3D Indier</span>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed mb-4">
              Transforming digital designs into reality with precision 3D printing services.
            </p>
            <WhatsAppButton variant="primary" size="default" message="Hi! I have a question about your services.">
              Chat With Us
            </WhatsAppButton>
          </motion.div>

          {/* Quick Links */}
          <motion.div initial={{
          opacity: 0,
          y: 20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} transition={{
          delay: 0.1
        }}>
            <h4 className="font-display font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-3">
              {["Services", "How It Works", "Gallery", "Pricing"].map(link => <li key={link}>
                  <a href={`#${link.toLowerCase().replace(" ", "-")}`} className="text-muted-foreground hover:text-primary transition-colors text-sm">
                    {link}
                  </a>
                </li>)}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div initial={{
          opacity: 0,
          y: 20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} transition={{
          delay: 0.2
        }}>
            <h4 className="font-display font-semibold mb-4">Services</h4>
            <ul className="space-y-3">
              {["FDM Printing", "Prototyping", "Hand Painting", "Post-Processing"].map(service => <li key={service}>
                  <span className="text-muted-foreground text-sm">{service}</span>
                </li>)}
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div initial={{
          opacity: 0,
          y: 20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} transition={{
          delay: 0.3
        }}>
            <h4 className="font-display font-semibold mb-4">Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-center gap-3 text-muted-foreground text-sm">
                <MessageCircle className="w-4 h-4 text-primary" />
                <span>+91 9870101365</span>
              </li>
              <li className="flex items-center gap-3 text-muted-foreground text-sm">
                <Mail className="w-4 h-4 text-primary" />
                <span>3dindier@gmail.com</span>
              </li>
              <li className="flex items-start gap-3 text-muted-foreground text-sm">
                <MapPin className="w-4 h-4 text-primary mt-0.5" />
                <span>Available for delivery across India</span>
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-border/50 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-muted-foreground text-sm">© 2026 3D Indier.</p>
          <div className="flex items-center gap-6">
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors text-sm">
              Privacy Policy
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors text-sm">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>;
};