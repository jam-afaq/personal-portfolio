import {Briefcase, Calendar, MapPin} from "lucide-react";
import { Card } from "@/components/ui/card";

const Experience = () => {
  const experiences = [
    {
      title: "Full Stack Developer",
      company: "Blue Horn Technologies",
      location: "Lahore, Pakistan",
      period: "Aug 2025 - Present",
      description:
        "Leading full-stack development of enterprise applications using Laravel, Inertia.js, React, and AI integrations. Focused on scalable architectures, API optimizations, and collaborative deployments with CI/CD.",
      highlights: [
        "Enterprise application development with Laravel and React",
        "AI model integration and implementation",
        "Scalable architecture design and API optimization",
        "CI/CD implementation and collaborative deployments",
      ],
    },
    {
      title: "PHP Laravel Developer",
      company: "3Amigos",
      location: "Lahore, Pakistan",
      period: "01/2025 - Aug 2025",
      description:
        "Leading the development of dynamic Laravel applications tailored to client needs. Focused on modular code, third-party API integration, and improving application workflows.",
      highlights: [
        "Dynamic Laravel application development",
        "Third-party API integration and optimization",
        "Client communication and project coordination",
        "Code reviews and CI/CD implementation",
      ],
    },
    {
      title: "PHP Laravel Developer",
      company: "Brown Tech Int.",
      location: "Lahore, Pakistan",
      period: "05/2023 - 01/2025",
      description:
        "Developed secure, scalable Laravel applications and RESTful APIs, ensuring smooth integration and performance. Collaborated with teams to deliver robust, enterprise-level solutions.",
      highlights: [
        "Secure and scalable Laravel application development",
        "RESTful API design and implementation",
        "Team collaboration and code reviews",
        "Enterprise-level solution delivery",
      ],
    },
    {
      title: "Web Developer Intern",
      company: "Hello World Technologies",
      location: "Rahim Yar Khan, Pakistan",
      period: "01/2023 - 03/2023",
      description:
        "Assisted in developing and maintaining web applications. Contributed to UI design using HTML, CSS, and JavaScript.",
      highlights: [
        "Web application development and maintenance",
        "UI design with HTML, CSS, and JavaScript",
        "Version control and code reviews",
        "Team collaboration and learning",
      ],
    },
  ];

  return (
    <section id="experience" className="py-20 bg-card">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Work Experience</h2>
          <p className="text-xl text-muted-foreground">
            My professional journey and contributions
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-6">
          {experiences.map((exp, index) => (
            <Card
              key={index}
              className="p-6 hover:shadow-elevated transition-smooth animate-fade-in-up border-l-4 border-l-primary"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-foreground mb-1">
                    {exp.title}
                  </h3>
                  <div className="flex items-center gap-2 text-primary font-medium mb-2">
                    <Briefcase className="h-4 w-4" />
                    <span>{exp.company}</span>
                  </div>
                </div>
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                    <div className="flex-1">
                        <div className="flex items-center gap-2 text-foreground font-medium mb-2">
                            <Calendar className="h-4 w-4" />
                            <span>{exp.period}</span>
                        </div>
                        <div className="flex items-center gap-2 text-primary font-medium mb-2">
                            <MapPin className="h-4 w-4" />
                            <span>{exp.location}</span>
                        </div>
                    </div>
                </div>
              </div>

              <p className="text-muted-foreground mb-4">{exp.description}</p>

              <ul className="space-y-2">
                {exp.highlights.map((highlight, hIndex) => (
                  <li
                    key={hIndex}
                    className="flex items-start gap-2 text-sm text-muted-foreground"
                  >
                    <span className="text-primary mt-1">•</span>
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
