import { motion } from "framer-motion";
import chefImage from "@/assets/chef-hero.png";
import { ChefHat, Flame, Users } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_hsl(var(--tomato)/0.1),_transparent_70%)]" />
      
      {/* Decorative fire particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 rounded-full bg-primary/40"
            style={{
              left: `${20 + i * 15}%`,
              bottom: '10%',
            }}
            animate={{
              y: [-10, -100, -10],
              opacity: [0, 1, 0],
              scale: [0.5, 1, 0.5],
            }}
            transition={{
              duration: 3 + i * 0.5,
              repeat: Infinity,
              delay: i * 0.3,
            }}
          />
        ))}
      </div>
      
      <div className="container mx-auto px-6 py-20 flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
        {/* Text Content */}
        <motion.div 
          className="flex-1 text-center lg:text-left"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.span 
            className="inline-flex items-center gap-2 text-sm uppercase tracking-[0.3em] text-muted-foreground mb-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <Flame className="w-4 h-4 text-primary" />
            Chef Pizzaïolo & Formateur
          </motion.span>
          
          <motion.h1 
            className="font-serif text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            L'art de la
            <span className="text-gradient block">pizza italienne</span>
            authentique
          </motion.h1>
          
          <motion.p 
            className="text-lg text-muted-foreground max-w-md mx-auto lg:mx-0 mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            Maître pizzaïolo avec plus de 15 ans d'expérience. Je crée des pizzas 
            d'exception et forme la nouvelle génération de chefs passionnés.
          </motion.p>
          
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
          >
            <a 
              href="#creations" 
              className="px-8 py-4 bg-primary text-primary-foreground font-medium rounded-lg glow hover:opacity-90 transition-opacity flex items-center justify-center gap-2"
            >
              <ChefHat className="w-5 h-5" />
              Mes créations
            </a>
            <a 
              href="#formations" 
              className="px-8 py-4 border border-border text-foreground font-medium rounded-lg hover:bg-secondary transition-colors flex items-center justify-center gap-2"
            >
              <Users className="w-5 h-5" />
              Mes formations
            </a>
          </motion.div>

          {/* Stats */}
          <motion.div 
            className="flex gap-8 mt-12 justify-center lg:justify-start"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9 }}
          >
            <div className="text-center">
              <span className="text-3xl font-serif font-bold text-primary">15+</span>
              <p className="text-sm text-muted-foreground">Années d'expérience</p>
            </div>
            <div className="text-center">
              <span className="text-3xl font-serif font-bold text-primary">500+</span>
              <p className="text-sm text-muted-foreground">Élèves formés</p>
            </div>
            <div className="text-center">
              <span className="text-3xl font-serif font-bold text-primary">50+</span>
              <p className="text-sm text-muted-foreground">Recettes signature</p>
            </div>
          </motion.div>
        </motion.div>
        
        {/* Chef Image */}
        <motion.div 
          className="flex-1 flex justify-center"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
        >
          <div className="relative">
            <div className="absolute -inset-4 bg-[radial-gradient(ellipse_at_center,_hsl(var(--tomato)/0.3),_transparent_70%)] blur-2xl animate-glow-pulse" />
            <img 
              src={chefImage} 
              alt="Chef Pizzaïolo" 
              className="relative w-80 h-80 md:w-[450px] md:h-[450px] object-cover rounded-2xl border-2 border-primary/20"
            />
            {/* Decorative badge */}
            <motion.div 
              className="absolute -bottom-4 -right-4 bg-card border border-border rounded-xl p-4 shadow-lg"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1 }}
            >
              <Flame className="w-8 h-8 text-primary mb-1" />
              <p className="text-xs font-medium">Four à bois</p>
              <p className="text-xs text-muted-foreground">Tradition italienne</p>
            </motion.div>
          </div>
        </motion.div>
      </div>
      
      {/* Scroll indicator */}
      <motion.div 
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
      >
        <div className="w-6 h-10 border-2 border-muted-foreground rounded-full flex justify-center">
          <motion.div 
            className="w-1.5 h-3 bg-primary rounded-full mt-2"
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          />
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
