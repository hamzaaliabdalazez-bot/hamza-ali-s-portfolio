import { motion } from "framer-motion";
import { Code2, Zap, Palette } from "lucide-react";

const highlights = [
  { icon: Code2, title: "Clean Code", desc: "Writing maintainable, scalable code with modern best practices." },
  { icon: Zap, title: "Performance", desc: "Optimizing for speed, accessibility, and seamless UX." },
  { icon: Palette, title: "Design Eye", desc: "Turning creative designs into pixel-perfect interfaces." },
];

const AboutSection = () => {
  return (
    <section id="about" className="section-padding">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm font-medium uppercase tracking-wider">About Me</span>
          <h2 className="font-display text-3xl md:text-5xl font-bold mt-3">
            Passionate about building the <span className="gradient-text">modern web</span>
          </h2>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-muted-foreground text-center max-w-3xl mx-auto text-lg mb-16 leading-relaxed"
        >
          I'm a dedicated Front-End Developer specializing in React, Next.js, and modern JavaScript ecosystems. 
          I build responsive, accessible, and high-performance web applications that deliver exceptional user experiences. 
          My goal is to create digital products that are both beautiful and functional.
        </motion.p>

        <div className="grid md:grid-cols-3 gap-6">
          {highlights.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="glass-card rounded-xl p-8 text-center group hover:border-primary/20 transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-5 group-hover:bg-primary/20 transition-colors">
                <item.icon size={24} className="text-primary" />
              </div>
              <h3 className="font-display text-lg font-semibold mb-2">{item.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
