import { motion } from "framer-motion";

const galleryItems = [
  {
    title: "Custom Figurines",
    category: "Art & Collectibles",
    gradient: "from-primary/20 to-accent/20",
  },
  {
    title: "Mechanical Parts",
    category: "Industrial",
    gradient: "from-accent/20 to-glow-blue/20",
  },
  {
    title: "Architectural Models",
    category: "Architecture",
    gradient: "from-glow-blue/20 to-primary/20",
  },
  {
    title: "Product Prototypes",
    category: "Product Design",
    gradient: "from-primary/20 to-glow-blue/20",
  },
  {
    title: "Custom Enclosures",
    category: "Electronics",
    gradient: "from-accent/20 to-primary/20",
  },
  {
    title: "Jewelry & Accessories",
    category: "Fashion",
    gradient: "from-glow-blue/20 to-accent/20",
  },
];

export const Gallery = () => {
  return (
    <section id="gallery" className="py-24 relative">
      <div className="container px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="text-primary font-medium tracking-wider uppercase text-sm">
            Our Work
          </span>
          <h2 className="text-4xl md:text-5xl font-display font-bold mt-4 mb-6">
            Project <span className="text-gradient">Gallery</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Explore our diverse portfolio of 3D printed creations across various industries.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {galleryItems.map((item, index) => (
            <motion.div
              key={index}
              className={`aspect-square rounded-xl overflow-hidden relative group cursor-pointer ${
                index === 0 || index === 3 ? "lg:col-span-1 lg:row-span-1" : ""
              }`}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient} group-hover:opacity-80 transition-opacity`} />
              <div className="absolute inset-0 bg-secondary/50" />
              
              {/* 3D cube animation placeholder */}
              <div className="absolute inset-0 flex items-center justify-center">
                <motion.div
                  className="w-24 h-24 border-2 border-primary/30 rounded-lg"
                  animate={{ rotateY: [0, 360] }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  style={{ transformStyle: "preserve-3d" }}
                />
              </div>
              
              {/* Overlay content */}
              <div className="absolute inset-0 flex flex-col justify-end p-4 md:p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-t from-background/90 to-transparent">
                <span className="text-primary text-xs font-medium tracking-wider uppercase mb-1">
                  {item.category}
                </span>
                <h3 className="text-lg md:text-xl font-display font-semibold">{item.title}</h3>
              </div>
              
              {/* Border glow on hover */}
              <div className="absolute inset-0 border border-primary/0 group-hover:border-primary/50 rounded-xl transition-colors duration-300" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
