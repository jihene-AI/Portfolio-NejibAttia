import { motion } from "framer-motion";
import { Calendar, Check, Clock, Users } from "lucide-react";
import formation1 from "@/assets/formation-1.png";
import formation2 from "@/assets/formation-2.png";

const formations = [
  {
    title: "Formation Initiation",
    duration: "2 jours",
    participants: "6-8 personnes",
    price: "590€",
    image: formation1,
    features: [
      "Les bases de la pâte napolitaine",
      "Techniques d'étalage à la main",
      "Gestion du four à bois",
      "5 recettes classiques",
      "Certificat de formation",
    ],
  },
  {
    title: "Formation Expert",
    duration: "5 jours",
    participants: "4-6 personnes",
    price: "1490€",
    image: formation2,
    features: [
      "Maîtrise du levain naturel",
      "Fermentation longue (72h+)",
      "Pizzas gastronomiques",
      "Création de recettes signature",
      "Gestion d'une pizzeria",
      "Accompagnement post-formation",
    ],
  },
];

const FormationsSection = () => {
  return (
    <section id="formations" className="py-32 bg-secondary/30">
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="text-sm uppercase tracking-[0.3em] text-primary mb-4 block">
            Formations
          </span>
          <h2 className="font-serif text-4xl md:text-5xl font-bold">
            Devenez <span className="text-gradient">pizzaïolo</span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-lg mx-auto">
            Des formations complètes pour maîtriser l'art de la pizza italienne, 
            du débutant passionné au professionnel confirmé.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {formations.map((formation, index) => (
            <motion.div
              key={formation.title}
              className="bg-card border border-border rounded-2xl overflow-hidden group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
            >
              {/* Image */}
              <div className="relative h-56 overflow-hidden">
                <img
                  src={formation.image}
                  alt={formation.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 flex justify-between items-end">
                  <h3 className="font-serif text-2xl font-bold">{formation.title}</h3>
                  <span className="text-2xl font-bold text-primary">{formation.price}</span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                {/* Meta info */}
                <div className="flex gap-4 mb-6 text-sm text-muted-foreground">
                  <span className="flex items-center gap-1">
                    <Clock className="w-4 h-4 text-primary" />
                    {formation.duration}
                  </span>
                  <span className="flex items-center gap-1">
                    <Users className="w-4 h-4 text-primary" />
                    {formation.participants}
                  </span>
                </div>

                {/* Features */}
                <ul className="space-y-3 mb-6">
                  {formation.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2 text-sm">
                      <Check className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <a
                  href="#contact"
                  className="w-full px-6 py-3 bg-primary text-primary-foreground font-medium rounded-lg glow hover:opacity-90 transition-opacity flex items-center justify-center gap-2"
                >
                  <Calendar className="w-4 h-4" />
                  Réserver cette formation
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional info */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <p className="text-muted-foreground">
            Formations également disponibles en <span className="text-primary">entreprise</span> et <span className="text-primary">sur mesure</span>.
          </p>
          <p className="text-sm text-muted-foreground mt-2">
            Contactez-moi pour un devis personnalisé.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default FormationsSection;
