import { motion } from "framer-motion";

const skills = [
  { name: "HTML5", level: 95, color: "hsl(12 77% 52%)" },
  { name: "CSS3", level: 90, color: "hsl(205 82% 45%)" },
  { name: "JavaScript ES6", level: 88, color: "hsl(48 89% 50%)" },
  { name: "React 19", level: 92, color: "hsl(193 95% 55%)" },
  { name: "Vite", level: 85, color: "hsl(258 73% 58%)" },
  { name: "Next.js 13", level: 80, color: "hsl(0 0% 70%)" },
  { name: "Framer Motion", level: 78, color: "hsl(330 80% 60%)" },
  { name: "Tailwind CSS", level: 93, color: "hsl(188 78% 46%)" },
];

const SkillsSection = () => {
  return (
    <section id="skills" className="section-padding">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm font-medium uppercase tracking-wider">Skills</span>
          <h2 className="font-display text-3xl md:text-5xl font-bold mt-3">
            My <span className="gradient-text">Tech Stack</span>
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {skills.map((skill, i) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              whileHover={{ y: -5, scale: 1.02 }}
              className="glass-card rounded-xl p-6 group hover:border-primary/20 transition-all duration-300"
            >
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-display font-semibold text-sm">{skill.name}</h3>
                <span className="text-xs text-muted-foreground font-medium">{skill.level}%</span>
              </div>
              <div className="h-2 rounded-full bg-secondary overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: i * 0.08 + 0.3, ease: "easeOut" }}
                  className="h-full rounded-full"
                  style={{ background: `linear-gradient(90deg, ${skill.color}, hsl(var(--primary)))` }}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
