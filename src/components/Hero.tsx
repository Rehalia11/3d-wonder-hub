import { motion } from "framer-motion";
import { WhatsAppButton } from "./ui/whatsapp-button";
import { Layers, Printer } from "lucide-react";
import cubeImage from "@/assets/3d-cube.png";

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-grid">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl"
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl"
          animate={{ scale: [1.2, 1, 1.2], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 10, repeat: Infinity }}
        />
      </div>

      {/* Floating 3D shapes */}
      <motion.div
        className="absolute top-1/4 right-1/4 text-primary/30"
        animate={{ y: [-20, 20, -20], rotate: [0, 180, 360] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      >
        <img src={cubeImage} alt="3D Cube" className="w-24 h-24" />
      </motion.div>
      <motion.div
        className="absolute bottom-1/3 left-1/5 text-accent/30"
        animate={{ y: [20, -20, 20], rotate: [360, 180, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      >
        <Layers className="w-20 h-20" />
      </motion.div>
      <motion.div
        className="absolute top-1/3 left-1/4 text-glow-blue/30"
        animate={{ y: [-15, 15, -15], rotate: [0, -180, -360] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
      >
        <Printer className="w-16 h-16" />
      </motion.div>

      {/* Main content */}
      <div className="container relative z-10 px-4">
        <motion.div
          className="text-center max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="inline-block mb-6"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
          >
            <span className="px-4 py-2 rounded-full border border-primary/30 text-primary text-sm font-medium tracking-wider uppercase">
              Premium 3D Printing Services
            </span>
          </motion.div>

          <motion.h1
            className="text-5xl md:text-7xl lg:text-8xl font-display font-bold mb-6 leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <span className="text-foreground">Bring Your</span>
            <br />
            <span className="text-gradient glow-text">Ideas to Life</span>
          </motion.h1>

          <motion.p
            className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            Transform your digital designs into stunning physical objects with our 
            professional 3D printing services. Fast, precise, and affordable.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            <WhatsAppButton variant="hero" size="lg" message="Hi! I want to get a quote for 3D printing.">
              Get a Quote
            </WhatsAppButton>
            <WhatsAppButton variant="outline" size="lg" message="Hi! I want to upload my 3D design for printing.">
              Upload Design
            </WhatsAppButton>
          </motion.div>

          <motion.div
            className="mt-16 grid grid-cols-3 gap-8 max-w-md mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
          >
            {[
              { value: "500+", label: "Projects" },
              { value: "24hr", label: "Turnaround" },
              { value: "100%", label: "Satisfaction" },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-2xl md:text-3xl font-display font-bold text-primary glow-text">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-6 h-10 rounded-full border-2 border-primary/50 flex items-start justify-center p-2">
          <motion.div
            className="w-1.5 h-3 bg-primary rounded-full"
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </div>
      </motion.div>
    </section>
  );
};
