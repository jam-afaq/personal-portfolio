import { ExternalLink, Github, Eye } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { useState, useRef, useEffect } from "react";
import ProjectModal from "@/components/ProjectModal";

interface Project {
  title: string;
  description: string;
  image: string;
  tech: string[];
  github: string;
  demo: string;
  longDescription?: string;
  features?: string[];
}

const Projects = () => {
  const { ref, isVisible } = useScrollReveal();
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const projects: Project[] = [
    {
      title: "Job Portal System",
      description:
        "A comprehensive Laravel-based job portal connecting employers and job seekers with advanced features including job listings, resume uploads, application tracking, and role-based dashboards.",
      longDescription:
        "A full-featured job portal built with Laravel that streamlines the hiring process. Employers can post jobs, review applications, and manage candidates, while job seekers can create profiles, upload resumes, and track their applications in real-time.",
      features: [
        "Advanced job search with filters and recommendations",
        "Resume builder and parser",
        "Application tracking system",
        "Real-time notifications",
        "Role-based dashboards for employers and job seekers",
        "Secure authentication and authorization"
      ],
      image: "/placeholder.svg",
      tech: ["Laravel", "PHP", "MySQL", "Eloquent ORM", "RESTful APIs", "Authentication"],
      github: "#",
      demo: "#",
    },
    {
      title: "Service Providing Web App",
      description:
        "Full-stack Laravel application connecting service providers with customers, featuring user authentication, service listings, booking management, and real-time notifications.",
      longDescription:
        "A marketplace platform that connects service providers with customers. Features include service discovery, booking management, payment processing, and real-time communication between providers and customers.",
      features: [
        "Service provider profiles and portfolios",
        "Advanced booking system with calendar integration",
        "Payment gateway integration",
        "Rating and review system",
        "Real-time chat and notifications",
        "Admin dashboard for platform management"
      ],
      image: "/placeholder.svg",
      tech: ["Laravel", "PHP", "MySQL", "RESTful APIs", "Real-time Notifications"],
      github: "#",
      demo: "#",
    },
    {
      title: "Hostel Management System",
      description:
        "Comprehensive system for managing hostel operations including room bookings, tenant tracking, payment processing, and admin dashboards with real-time updates.",
      longDescription:
        "An all-in-one hostel management solution that digitizes operations. Manage rooms, tenants, payments, and maintenance requests with ease. Features real-time occupancy tracking and automated billing.",
      features: [
        "Room allocation and availability tracking",
        "Tenant management with digital records",
        "Automated payment reminders and processing",
        "Maintenance request system",
        "Occupancy analytics and reporting",
        "Multi-user access with role permissions"
      ],
      image: "/placeholder.svg",
      tech: ["TypeScript", "Node.js", "Express", "MySQL", "Real-time Updates"],
      github: "#",
      demo: "#",
    },
    {
      title: "Voicera Project",
      description:
        "AI-powered application integrating voice models for transcription and analysis, featuring real-time AI processing, user authentication, and data visualization dashboards.",
      longDescription:
        "An innovative AI-powered platform that leverages voice recognition and natural language processing. Provides accurate transcription, sentiment analysis, and actionable insights from audio data.",
      features: [
        "Real-time voice transcription with high accuracy",
        "AI-powered sentiment and emotion analysis",
        "Multi-language support",
        "Interactive data visualization dashboards",
        "Export and sharing capabilities",
        "API integration for third-party applications"
      ],
      image: "/placeholder.svg",
      tech: ["Laravel", "Inertia.js", "React", "AI Integration", "Data Visualization"],
      github: "#",
      demo: "#",
    },
  ];

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.6,
        ease: "easeOut"
      }
    })
  };

  return (
    <>
      <section id="projects" ref={ref} className="py-20 bg-background relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 right-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
          <div className="absolute bottom-20 left-10 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gradient">Featured Projects</h2>
            <p className="text-xl text-muted-foreground">
              A showcase of my recent work and contributions
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                custom={index}
                initial="hidden"
                animate={isVisible ? "visible" : "hidden"}
                variants={cardVariants as any}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <Card className="overflow-hidden hover-lift group cursor-pointer h-full border-border/50 bg-card/50 backdrop-blur-sm">
                  <div className="relative overflow-hidden h-56 bg-muted">
                    <motion.img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover"
                      loading="lazy"
                      decoding="async"
                      animate={{
                        scale: hoveredIndex === index ? 1.08 : 1,
                      }}
                      transition={{ duration: 0.3 }}
                      style={{ willChange: hoveredIndex === index ? 'transform' : 'auto' }}
                    />
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: hoveredIndex === index ? 1 : 0 }}
                      transition={{ duration: 0.3 }}
                      className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent flex items-center justify-center"
                    >
                      <div className="flex gap-3">
                        <motion.div
                          initial={{ y: 20, opacity: 0 }}
                          animate={{
                            y: hoveredIndex === index ? 0 : 20,
                            opacity: hoveredIndex === index ? 1 : 0
                          }}
                          transition={{ delay: 0.1 }}
                        >
                          <Button
                            size="sm"
                            variant="secondary"
                            className="shadow-smooth"
                            onClick={(e) => {
                              e.stopPropagation();
                              window.open(project.github, '_blank');
                            }}
                          >
                            <Github className="h-4 w-4 mr-2" />
                            Code
                          </Button>
                        </motion.div>
                        <motion.div
                          initial={{ y: 20, opacity: 0 }}
                          animate={{
                            y: hoveredIndex === index ? 0 : 20,
                            opacity: hoveredIndex === index ? 1 : 0
                          }}
                          transition={{ delay: 0.15 }}
                        >
                          <Button
                            size="sm"
                            className="gradient-primary shadow-glow"
                            onClick={(e) => {
                              e.stopPropagation();
                              window.open(project.demo, '_blank');
                            }}
                          >
                            <ExternalLink className="h-4 w-4 mr-2" />
                            Demo
                          </Button>
                        </motion.div>
                        <motion.div
                          initial={{ y: 20, opacity: 0 }}
                          animate={{
                            y: hoveredIndex === index ? 0 : 20,
                            opacity: hoveredIndex === index ? 1 : 0
                          }}
                          transition={{ delay: 0.2 }}
                        >
                          <Button
                            size="sm"
                            variant="outline"
                            onClick={(e) => {
                              e.stopPropagation();
                              setSelectedProject(project);
                            }}
                          >
                            <Eye className="h-4 w-4 mr-2" />
                            Details
                          </Button>
                        </motion.div>
                      </div>
                    </motion.div>
                  </div>

                  <div className="p-6" onClick={() => setSelectedProject(project)}>
                    <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-smooth">
                      {project.title}
                    </h3>
                    <p className="text-muted-foreground mb-4 text-sm leading-relaxed line-clamp-3">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.slice(0, 4).map((tech, techIndex) => (
                        <Badge
                          key={techIndex}
                          variant="secondary"
                          className="text-xs hover:scale-105 transition-transform"
                        >
                          {tech}
                        </Badge>
                      ))}
                      {project.tech.length > 4 && (
                        <Badge variant="outline" className="text-xs">
                          +{project.tech.length - 4} more
                        </Badge>
                      )}
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Project Modal */}
      {selectedProject && (
        <ProjectModal
          isOpen={!!selectedProject}
          onClose={() => setSelectedProject(null)}
          project={selectedProject}
        />
      )}
    </>
  );
};

export default Projects;
