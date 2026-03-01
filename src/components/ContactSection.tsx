import { motion } from "framer-motion";
import { Mail, Phone, Linkedin, ExternalLink, Send } from "lucide-react";

const contacts = [
  {
    icon: Mail,
    label: "Email",
    value: "hamzaaliabdalazez@gmail.com",
    href: "mailto:hamzaaliabdalazez@gmail.com",
  },
  {
    icon: Phone,
    label: "WhatsApp",
    value: "01023531656",
    href: "https://wa.me/201023531656",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "Hamza Ali",
    href: "https://www.linkedin.com/in/hamza-ali-794375380/",
  },
  {
    icon: ExternalLink,
    label: "Khamsat",
    value: "hamza_ali_abd_alazez",
    href: "https://khamsat.com/user/hamza_ali_abd_alazez",
  },
];

const ContactSection = () => {
  return (
    <section id="contact" className="section-padding">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm font-medium uppercase tracking-wider">Contact</span>
          <h2 className="font-display text-3xl md:text-5xl font-bold mt-3">
            Let's <span className="gradient-text">Connect</span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-lg mx-auto">
            Have a project in mind? I'd love to hear from you. Reach out through any of the channels below.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-5">
          {contacts.map((item, i) => (
            <motion.a
              key={item.label}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              whileHover={{ y: -3 }}
              className="glass-card rounded-xl p-6 flex items-center gap-4 group hover:border-primary/20 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors shrink-0">
                <item.icon size={20} className="text-primary" />
              </div>
              <div className="min-w-0">
                <p className="text-xs text-muted-foreground uppercase tracking-wider mb-0.5">{item.label}</p>
                <p className="font-medium text-sm truncate">{item.value}</p>
              </div>
              <Send size={14} className="ml-auto text-muted-foreground group-hover:text-primary transition-colors shrink-0" />
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
