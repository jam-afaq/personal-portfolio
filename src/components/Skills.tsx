import { Badge } from "@/components/ui/badge";

const Skills = () => {
  const skillCategories = [
    {
      title: "Backend",
      skills: ["PHP", "Laravel", "MySQL", "RESTful APIs", "Eloquent ORM"],
    },
    {
      title: "Frontend",
      skills: ["React.js", "Inertia.js", "TypeScript", "JavaScript", "jQuery", "HTML", "CSS", "Bootstrap"],
    },
    {
      title: "Tools & Others",
      skills: ["Git", "Version Control", "API Integration", "Responsive Design", "Node.js"],
    },
  ];

  return (
    <section id="skills" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Skills & Technologies</h2>
          <p className="text-xl text-muted-foreground">
            My technical expertise and tools I work with
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-8">
          {skillCategories.map((category, catIndex) => (
            <div
              key={catIndex}
              className="animate-fade-in-up"
              style={{ animationDelay: `${catIndex * 100}ms` }}
            >
              <h3 className="text-2xl font-semibold mb-4 text-primary">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, skillIndex) => (
                  <Badge
                    key={skillIndex}
                    variant="secondary"
                    className="px-4 py-2 text-base hover:scale-105 transition-bounce cursor-default shadow-smooth"
                    style={{ animationDelay: `${(catIndex * 100) + (skillIndex * 50)}ms` }}
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
