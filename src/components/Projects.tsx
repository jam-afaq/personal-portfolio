import { ExternalLink, Github } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const Projects = () => {
  const projects = [
    {
      title: "Job Portal System",
      description:
        "A comprehensive Laravel-based job portal connecting employers and job seekers with advanced features including job listings, resume uploads, application tracking, and role-based dashboards.",
      image: "/placeholder.svg",
      tech: ["Laravel", "PHP", "MySQL", "Eloquent ORM", "RESTful APIs", "Authentication"],
      github: "#",
      demo: "#",
    },
    {
      title: "Service Providing Web App",
      description:
        "Full-stack Laravel application connecting service providers with customers, featuring user authentication, service listings, booking management, and real-time notifications.",
      image: "/placeholder.svg",
      tech: ["Laravel", "PHP", "MySQL", "RESTful APIs", "Real-time Notifications"],
      github: "#",
      demo: "#",
    },
    {
      title: "Hostel Management System",
      description:
        "Comprehensive system for managing hostel operations including room bookings, tenant tracking, payment processing, and admin dashboards with real-time updates.",
      image: "/placeholder.svg",
      tech: ["TypeScript", "Node.js", "Express", "MySQL", "Real-time Updates"],
      github: "#",
      demo: "#",
    },
    {
      title: "Voicera Project",
      description:
        "AI-powered application integrating voice models for transcription and analysis, featuring real-time AI processing, user authentication, and data visualization dashboards.",
      image: "/placeholder.svg",
      tech: ["Laravel", "Inertia.js", "React", "AI Integration", "Data Visualization"],
      github: "#",
      demo: "#",
    },
  ];

  return (
    <section id="projects" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Featured Projects</h2>
          <p className="text-xl text-muted-foreground">
            A showcase of my recent work and contributions
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="overflow-hidden hover:shadow-elevated transition-smooth animate-scale-in group"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="relative overflow-hidden h-48 bg-muted">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-smooth"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent opacity-0 group-hover:opacity-100 transition-smooth flex items-end p-6">
                  <div className="flex gap-3">
                    <Button
                      size="sm"
                      variant="secondary"
                      className="shadow-smooth"
                      asChild
                    >
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <Github className="h-4 w-4 mr-2" />
                        Code
                      </a>
                    </Button>
                    <Button
                      size="sm"
                      className="gradient-primary shadow-glow"
                      asChild
                    >
                      <a href={project.demo} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-4 w-4 mr-2" />
                        Demo
                      </a>
                    </Button>
                  </div>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold mb-3">{project.title}</h3>
                <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, techIndex) => (
                    <Badge
                      key={techIndex}
                      variant="secondary"
                      className="text-xs"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
