import { motion } from "framer-motion";
import pizza1 from "@/assets/pizza-1.png";
import pizza2 from "@/assets/pizza-2.png";
import pizza3 from "@/assets/pizza-3.png";

const pizzas = [
  {
    title: "Margherita Classica",
    category: "Tradition Napolitaine",
    image: pizza1,
    description: "Sauce tomate San Marzano, mozzarella di bufala, basilic frais, huile d'olive extra vierge",
  },
  {
    title: "Truffe Noire",
    category: "Création Signature",
    image: pizza2,
    description: "Crème de truffe, mozzarella fior di latte, roquette, copeaux de parmesan, huile de truffe",
  },
  {
    title: "Frutti di Mare",
    category: "Spécialité Mer",
    image: pizza3,
    description: "Sauce marinara, crevettes, calamars, moules, persil frais, citron confit",
  },
];

const ProjectsSection = () => {
  return (
    <section id="creations" className="py-32">
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="text-sm uppercase tracking-[0.3em] text-primary mb-4 block">
            Mes Créations
          </span>
          <h2 className="font-serif text-4xl md:text-5xl font-bold">
            Pizzas <span className="text-gradient">d'exception</span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-md mx-auto">
            Chaque pizza est une œuvre d'art, préparée avec des ingrédients premium 
            et cuite au four à bois traditionnel.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {pizzas.map((pizza, index) => (
            <motion.article
              key={pizza.title}
              className="group cursor-pointer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
            >
              <div className="relative overflow-hidden rounded-xl mb-4">
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />
                <img
                  src={pizza.image}
                  alt={pizza.title}
                  className="w-full aspect-video object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute bottom-4 left-4 right-4 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <span className="inline-block px-3 py-1 text-xs uppercase tracking-wider bg-primary text-primary-foreground rounded-full">
                    Découvrir
                  </span>
                </div>
              </div>
              <span className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
                {pizza.category}
              </span>
              <h3 className="font-serif text-xl font-semibold mt-1 group-hover:text-primary transition-colors">
                {pizza.title}
              </h3>
              <p className="text-sm text-muted-foreground mt-2">
                {pizza.description}
              </p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
