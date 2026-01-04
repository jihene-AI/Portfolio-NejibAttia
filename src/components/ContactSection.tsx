import { motion } from "framer-motion";
import { Mail, MapPin, Phone, Instagram, Facebook } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="py-32">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-sm uppercase tracking-[0.3em] text-primary mb-4 block">
              Contact
            </span>
            <h2 className="font-serif text-4xl md:text-5xl font-bold mb-4">
              Travaillons <span className="text-gradient">ensemble</span>
            </h2>
            <p className="text-muted-foreground max-w-md mx-auto">
              Vous souhaitez réserver une formation ou organiser un événement ? 
              Contactez-moi pour en discuter.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Info */}
            <motion.div
              className="space-y-8"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium mb-1">Email</h4>
                  <a href="mailto:contact@pizzaformation.com" className="text-muted-foreground hover:text-primary transition-colors">
                    contact@pizzaformation.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium mb-1">Téléphone</h4>
                  <a href="tel:+33612345678" className="text-muted-foreground hover:text-primary transition-colors">
                    +33 6 12 34 56 78
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium mb-1">Localisation</h4>
                  <p className="text-muted-foreground">Lyon, France</p>
                  <p className="text-sm text-muted-foreground mt-1">Formations dans toute la France</p>
                </div>
              </div>

              {/* Social links */}
              <div className="flex gap-4 pt-4">
                <a href="#" className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors">
                  <Instagram className="w-5 h-5" />
                </a>
                <a href="#" className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors">
                  <Facebook className="w-5 h-5" />
                </a>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.form
              className="space-y-6"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              onSubmit={(e) => e.preventDefault()}
            >
              <div>
                <input
                  type="text"
                  placeholder="Votre nom"
                  className="w-full px-4 py-3 bg-muted border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all placeholder:text-muted-foreground"
                />
              </div>
              <div>
                <input
                  type="email"
                  placeholder="Votre email"
                  className="w-full px-4 py-3 bg-muted border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all placeholder:text-muted-foreground"
                />
              </div>
              <div>
                <select className="w-full px-4 py-3 bg-muted border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all text-muted-foreground">
                  <option value="">Type de demande</option>
                  <option value="formation-initiation">Formation Initiation</option>
                  <option value="formation-expert">Formation Expert</option>
                  <option value="evenement">Événement privé</option>
                  <option value="autre">Autre</option>
                </select>
              </div>
              <div>
                <textarea
                  rows={4}
                  placeholder="Votre message"
                  className="w-full px-4 py-3 bg-muted border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all placeholder:text-muted-foreground resize-none"
                />
              </div>
              <button
                type="submit"
                className="w-full px-8 py-4 bg-primary text-primary-foreground font-medium rounded-lg glow hover:opacity-90 transition-opacity"
              >
                Envoyer le message
              </button>
            </motion.form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
