import { motion } from "framer-motion";
import galleryFigurine from "@/assets/gallery-figurine.jpg";
import galleryMechanical from "@/assets/gallery-mechanical.jpg";
import galleryArchitecture from "@/assets/gallery-architecture.jpg";
import galleryPrototype from "@/assets/gallery-prototype.jpg";

const galleryItems = [
  {
    title: "Custom Figurines",
    category: "Art & Collectibles",
    image: galleryFigurine,
  },
  {
    title: "Mechanical Parts",
    category: "Industrial",
    image: galleryMechanical,
  },
  {
    title: "Architectural Models",
    category: "Architecture",
    image: galleryArchitecture,
  },
  {
    title: "Product Prototypes",
    category: "Product Design",
    image: galleryPrototype,
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

        <div className="grid grid-cols-2 gap-4 md:gap-6 max-w-4xl mx-auto">
          {galleryItems.map((item, index) => (
            <motion.div
              key={index}
              className="aspect-square rounded-xl overflow-hidden relative group cursor-pointer"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <img
                src={item.image}
                alt={item.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                loading="lazy"
              />
              
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
