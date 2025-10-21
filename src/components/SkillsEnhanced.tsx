import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Code2, Palette, Wrench, Zap } from "lucide-react";

const SkillsEnhanced = () => {
  const { ref, isVisible } = useScrollReveal();

  const skillCategories = [
    {
      title: "Backend",
      icon: Code2,
      color: "from-blue-500 to-cyan-500",
      skills: [
        { name: "PHP", level: 90 },
        { name: "Laravel", level: 95 },
        { name: "MySQL", level: 85 },
        { name: "RESTful APIs", level: 90 },
        { name: "Eloquent ORM", level: 92 },
      ],
    },
    {
      title: "Frontend",
      icon: Palette,
      color: "from-purple-500 to-pink-500",
      skills: [
        { name: "React.js", level: 88 },
        { name: "TypeScript", level: 85 },
        { name: "JavaScript", level: 90 },
        { name: "Tailwind CSS", level: 92 },
        { name: "Inertia.js", level: 87 },
      ],
    },
    {
      title: "Tools & Others",
      icon: Wrench,
      color: "from-orange-500 to-red-500",
      skills: [
        { name: "Git", level: 90 },
        { name: "API Integration", level: 88 },
        { name: "Responsive Design", level: 93 },
        { name: "Node.js", level: 80 },
        { name: "Version Control", level: 92 },
      ],
    },
    {
      title: "Specializations",
      icon: Zap,
      color: "from-green-500 to-emerald-500",
      skills: [
        { name: "Full-Stack Development", level: 90 },
        { name: "AI Integration", level: 82 },
        { name: "Performance Optimization", level: 85 },
        { name: "Database Design", level: 88 },
        { name: "Clean Architecture", level: 87 },
      ],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
    },
  };

  return (
    <section id="skills" ref={ref} className="py-20 bg-muted/30 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gradient">
            Skills & Expertise
          </h2>
          <p className="text-xl text-muted-foreground">
            My technical proficiency across various domains
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto"
        >
          {skillCategories.map((category, catIndex) => {
            const Icon = category.icon;
            return (
              <motion.div
                key={catIndex}
                variants={itemVariants}
                className="glass-card rounded-2xl p-6 hover:shadow-elevated transition-all duration-300 border border-border/50"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${category.color} flex items-center justify-center shadow-lg`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold">{category.title}</h3>
                </div>

                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex}>
                      <div className="flex justify-between mb-2">
                        <span className="text-sm font-medium">{skill.name}</span>
                        <span className="text-sm text-muted-foreground">{skill.level}%</span>
                      </div>
                      <div className="h-2 bg-muted rounded-full overflow-hidden">
                        <motion.div
                          className={`h-full bg-gradient-to-r ${category.color} rounded-full`}
                          initial={{ width: 0 }}
                          animate={isVisible ? { width: `${skill.level}%` } : { width: 0 }}
                          transition={{
                            duration: 1,
                            delay: catIndex * 0.2 + skillIndex * 0.1,
                            ease: "easeOut",
                          }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Additional Skills Tags */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-12 text-center"
        >
          <h3 className="text-xl font-semibold mb-4">Also Experienced With</h3>
          <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
            {["Docker", "Redis", "WebSockets", "GraphQL", "Jest", "Vite", "Webpack", "CI/CD", "Agile", "Scrum"].map(
              (skill, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isVisible ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                  transition={{ delay: 1 + index * 0.05 }}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                >
                  <Badge
                    variant="outline"
                    className="px-4 py-2 text-sm hover:bg-primary/10 hover:border-primary transition-all cursor-default"
                  >
                    {skill}
                  </Badge>
                </motion.div>
              )
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsEnhanced;
