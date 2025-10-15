import { Code, Rocket, Users, Award } from "lucide-react";
import { Card } from "@/components/ui/card";

const About = () => {
  const highlights = [
    {
      icon: Code,
      title: "Clean Code",
      description: "Writing maintainable and scalable solutions",
    },
    {
      icon: Rocket,
      title: "Performance",
      description: "Optimized and efficient applications",
    },
    {
      icon: Users,
      title: "Collaboration",
      description: "Strong team player and communicator",
    },
    {
      icon: Award,
      title: "Excellence",
      description: "Committed to delivering quality work",
    },
  ];

  return (
    <section id="about" className="py-20 bg-card">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">About Me</h2>
          <p className="text-xl text-muted-foreground">
            Passionate about building the web
          </p>
        </div>

        <div className="max-w-3xl mx-auto mb-12 animate-fade-in-up">
          <p className="text-lg text-muted-foreground leading-relaxed mb-6">
            I'm a dedicated full-stack developer based in Lahore, Pakistan, with a
            strong foundation in PHP, Laravel, and modern JavaScript frameworks. My
            journey in web development has led me to work on diverse projects ranging
            from enterprise applications to innovative AI-powered solutions.
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed">
            I believe in continuous learning and staying up-to-date with the latest
            technologies. My goal is to create web applications that not only meet
            technical requirements but also provide exceptional user experiences.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map((item, index) => {
            const Icon = item.icon;
            return (
              <Card
                key={index}
                className="p-6 hover:shadow-elevated transition-smooth animate-scale-in bg-card border-border/50"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="gradient-primary w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <Icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-muted-foreground text-sm">{item.description}</p>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default About;
