import { motion } from "framer-motion";
import { Award, Clock, Flame, Heart } from "lucide-react";

const skills = [
  { name: "Pizza Napoletana", level: 100 },
  { name: "Pâte au levain", level: 95 },
  { name: "Pizzas créatives", level: 90 },
  { name: "Gestion du four à bois", level: 98 },
];

const highlights = [
  { icon: Flame, label: "Four à bois", value: "Authentique" },
  { icon: Clock, label: "Fermentation", value: "72h min" },
  { icon: Award, label: "Certifié", value: "AVPN" },
  { icon: Heart, label: "Passion", value: "Depuis 2009" },
];

const AboutSection = () => {
  return (
    <section id="about" className="py-32 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* About Text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-sm uppercase tracking-[0.3em] text-primary mb-4 block">
              À propos
            </span>
            <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6">
              Passion pour la <span className="text-gradient">pizza</span> depuis l'enfance
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Né dans une famille napolitaine, j'ai appris les secrets de la vraie pizza 
                italienne dès mon plus jeune âge. Après avoir perfectionné mon art dans les 
                meilleures pizzerias de Naples, j'ai décidé de partager ma passion.
              </p>
              <p>
                Aujourd'hui, je combine mon expertise de chef pizzaïolo avec ma vocation 
                de formateur pour transmettre cet artisanat à ceux qui partagent cette 
                même passion pour l'excellence culinaire.
              </p>
            </div>

            {/* Highlights */}
            <div className="grid grid-cols-2 gap-4 mt-8">
              {highlights.map((item, index) => (
                <motion.div
                  key={item.label}
                  className="flex items-center gap-3 p-4 bg-card rounded-xl border border-border"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <item.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">{item.label}</p>
                    <p className="font-medium">{item.value}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Skills */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            <h3 className="font-serif text-2xl font-semibold mb-8">Mes spécialités</h3>
            {skills.map((skill, index) => (
              <div key={skill.name}>
                <div className="flex justify-between mb-2">
                  <span className="font-medium">{skill.name}</span>
                  <span className="text-muted-foreground">{skill.level}%</span>
                </div>
                <div className="h-2 bg-muted rounded-full overflow-hidden">
                  <motion.div
                    className="h-full bg-gradient-to-r from-tomato-dark via-primary to-gold rounded-full"
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.3 + index * 0.1 }}
                  />
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
