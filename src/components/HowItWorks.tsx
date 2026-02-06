import { motion } from "framer-motion";
import { Upload, MessageSquare, Printer, Package } from "lucide-react";
import { WhatsAppButton } from "./ui/whatsapp-button";

const steps = [
  {
    icon: Upload,
    step: "01",
    title: "Share Your Design",
    description: "Send us your 3D model file (STL, OBJ, or other formats) via WhatsApp.",
  },
  {
    icon: MessageSquare,
    step: "02",
    title: "Get a Quote",
    description: "We'll review your design and provide a detailed quote within hours.",
  },
  {
    icon: Printer,
    step: "03",
    title: "We Print",
    description: "Your design is printed with precision using premium materials.",
  },
  {
    icon: Package,
    step: "04",
    title: "Delivery",
    description: "Receive your finished product, carefully packaged and ready to use.",
  },
];

export const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-24 relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
      
      <div className="container relative z-10 px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="text-primary font-medium tracking-wider uppercase text-sm">
            Simple Process
          </span>
          <h2 className="text-4xl md:text-5xl font-display font-bold mt-4 mb-6">
            How It <span className="text-gradient">Works</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Getting your 3D print is as easy as sending a message. 
            No complicated forms, just direct communication.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              className="relative text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
            >
              {/* Connector line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-10 left-[60%] w-[80%] h-px bg-gradient-to-r from-primary/50 to-transparent" />
              )}
              
              <div className="relative inline-flex items-center justify-center mb-6">
                <div className="w-20 h-20 rounded-full bg-secondary border border-primary/30 flex items-center justify-center group-hover:glow-border transition-all">
                  <step.icon className="w-8 h-8 text-primary" />
                </div>
                <span className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-primary text-primary-foreground text-sm font-display font-bold flex items-center justify-center">
                  {step.step}
                </span>
              </div>
              
              <h3 className="text-lg font-display font-semibold mb-2">{step.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{step.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          <WhatsAppButton variant="hero" size="lg" message="Hi! I want to start a 3D printing project.">
            Start Your Project
          </WhatsAppButton>
        </motion.div>
      </div>
    </section>
  );
};
