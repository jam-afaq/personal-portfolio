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
      skills: ["PHP", "Laravel", "MySQL", "RESTful APIs", "Eloquent ORM"],
    },
    {
      title: "Frontend",
      icon: Palette,
      color: "from-purple-500 to-pink-500",
      skills: ["React.js", "TypeScript", "JavaScript", "Tailwind CSS", "Inertia.js"],
    },
    {
      title: "Tools & Others",
      icon: Wrench,
      color: "from-orange-500 to-red-500",
      skills: ["Git", "API Integration", "Responsive Design", "Node.js", "Version Control"],
    },
    {
      title: "Specializations",
      icon: Zap,
      color: "from-green-500 to-emerald-500",
      skills: [
        "Full-Stack Development",
        "AI Integration",
        "Performance Optimization",
        "Database Design",
        "Clean Architecture",
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
                className="glass-card rounded-2xl p-8 hover:shadow-elevated transition-all duration-300 border border-border/50 group"
              >
                <div className="flex items-center gap-4 mb-8">
                  <div
                    className={`w-14 h-14 rounded-xl bg-gradient-to-br ${category.color} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}
                  >
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold">{category.title}</h3>
                </div>

                <div className="flex flex-wrap gap-3">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skillIndex}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={isVisible ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                      transition={{
                        delay: catIndex * 0.1 + skillIndex * 0.05,
                        type: "spring",
                        stiffness: 100,
                      }}
                      whileHover={{ scale: 1.05 }}
                    >
                      <Badge
                        variant="secondary"
                        className={`px-4 py-2 text-sm font-medium bg-background/50 hover:bg-background border border-border/50 transition-all duration-300 hover:shadow-md`}
                      >
                        {skill}
                      </Badge>
                    </motion.div>
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
          className="mt-16 text-center"
        >
          <h3 className="text-xl font-semibold mb-6">Also Experienced With</h3>
          <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
            {[
              "Docker",
              "Redis",
              "WebSockets",
              "GraphQL",
              "CI/CD",
              "Agile",
              "Scrum",
            ].map((skill, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isVisible ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                transition={{ delay: 1 + index * 0.05 }}
                whileHover={{ scale: 1.1, rotate: 2 }}
              >
                <Badge
                  variant="outline"
                  className="px-4 py-2 text-sm hover:bg-primary/10 hover:border-primary transition-all cursor-default"
                >
                  {skill}
                </Badge>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsEnhanced;
