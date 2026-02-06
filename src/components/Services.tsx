import { motion } from "framer-motion";
import { Printer, Palette, Cog, Zap, Shield, Award } from "lucide-react";

const services = [
  {
    icon: Printer,
    title: "FDM Printing",
    description: "High-quality Fused Deposition Modeling for prototypes and functional parts.",
  },
  {
    icon: Palette,
    title: "Multi-Color Prints",
    description: "Vibrant multi-color 3D prints that bring your designs to life.",
  },
  {
    icon: Cog,
    title: "Prototyping",
    description: "Rapid prototyping services to test and iterate your product designs.",
  },
  {
    icon: Zap,
    title: "Express Service",
    description: "Rush orders available for time-sensitive projects with 24-hour turnaround.",
  },
  {
    icon: Shield,
    title: "Post-Processing",
    description: "Professional finishing including sanding, painting, and coating.",
  },
  {
    icon: Award,
    title: "Custom Projects",
    description: "Unique custom solutions for architectural models, art pieces, and more.",
  },
];

export const Services = () => {
  return (
    <section id="services" className="py-24 relative">
      <div className="absolute inset-0 bg-grid opacity-50" />
      
      <div className="container relative z-10 px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="text-primary font-medium tracking-wider uppercase text-sm">
            What We Offer
          </span>
          <h2 className="text-4xl md:text-5xl font-display font-bold mt-4 mb-6">
            Our <span className="text-gradient">Services</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            From concept to creation, we provide comprehensive 3D printing solutions 
            tailored to your specific needs.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="card-glow rounded-xl p-8 transition-all duration-500 group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                <service.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-xl font-display font-semibold mb-3">{service.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
