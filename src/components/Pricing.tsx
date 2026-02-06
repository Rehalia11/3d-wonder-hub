import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { WhatsAppButton } from "./ui/whatsapp-button";

const pricingPlans = [
  {
    name: "Basic",
    description: "Perfect for small projects",
    features: [
      "Single color prints",
      "Standard materials (PLA)",
      "5-7 days turnaround",
      "Basic cleanup",
      "WhatsApp support",
    ],
    popular: false,
  },
  {
    name: "Professional",
    description: "Most popular choice",
    features: [
      "Choice of filament colors",
      "Premium materials",
      "2-3 days turnaround",
      "Sanding & smoothing",
      "Priority support",
      "Design consultation",
    ],
    popular: true,
  },
  {
    name: "Premium",
    description: "Full custom finish",
    features: [
      "Any filament color",
      "Hand-painted finishing",
      "24-hour express option",
      "Premium detailing",
      "Multiple revisions",
      "Volume discounts",
      "Custom solutions",
    ],
    popular: false,
  },
];

export const Pricing = () => {
  return (
    <section id="pricing" className="py-24 relative">
      <div className="absolute inset-0 bg-grid opacity-30" />
      
      <div className="container relative z-10 px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="text-primary font-medium tracking-wider uppercase text-sm">
            Flexible Pricing
          </span>
          <h2 className="text-4xl md:text-5xl font-display font-bold mt-4 mb-6">
            Custom <span className="text-gradient">Quotes</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Every project is unique. Contact us on WhatsApp for a personalized quote 
            based on your specific requirements.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8 max-w-5xl mx-auto">
          {pricingPlans.map((plan, index) => (
            <motion.div
              key={index}
              className={`relative rounded-2xl p-8 transition-all duration-500 ${
                plan.popular
                  ? "bg-gradient-to-b from-primary/10 to-accent/5 border-2 border-primary/50 shadow-[0_0_40px_hsl(var(--primary)/0.2)]"
                  : "card-glow"
              }`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-primary text-primary-foreground text-sm font-semibold rounded-full">
                  Most Popular
                </div>
              )}
              
              <div className="text-center mb-8">
                <h3 className="text-2xl font-display font-bold mb-2">{plan.name}</h3>
                <p className="text-muted-foreground text-sm">{plan.description}</p>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                      <Check className="w-3 h-3 text-primary" />
                    </div>
                    <span className="text-sm text-foreground/80">{feature}</span>
                  </li>
                ))}
              </ul>

              <WhatsAppButton
                variant={plan.popular ? "hero" : "outline"}
                className="w-full"
                message={`Hi! I'm interested in your ${plan.name} 3D printing package.`}
              >
                Get Quote
              </WhatsAppButton>
            </motion.div>
          ))}
        </div>

        <motion.p
          className="text-center text-muted-foreground mt-12 text-sm"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          Pricing varies based on size, material, complexity, and quantity. 
          Contact us for an accurate quote.
        </motion.p>
      </div>
    </section>
  );
};
