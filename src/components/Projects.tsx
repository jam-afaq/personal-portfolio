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
      title: "School Management System",
      description:
        "Comprehensive school administration platform for managing students, teachers, classes, attendance, and academic records with real-time updates and reporting.",
      longDescription:
        "A complete school management solution that streamlines academic and administrative operations. Manage student enrollments, teacher assignments, class schedules, and generate detailed reports. Features role-based access control and real-time notifications.\n\nDemo Login Credentials:\n- Email: admin@admin.com\n- Password: 12345678",
      features: [
        "Student and staff management",
        "Class and subject management",
        "Attendance tracking",
        "Gradebook and report cards",
        "Timetable management",
        "Fee collection and receipts"
      ],
      image: "/images/projects/school-management-system.png",
      tech: ["Laravel", "PHP", "MySQL", "JavaScript", "Bootstrap", "jQuery"],
      github: "#",
      demo: "https://school-management-system.digitalrozgars.com/",
    },
    {
      title: "Digital Rozgars - Client Site",
      description:
        "Professional website for Digital Rozgars, showcasing their services, portfolio, and client solutions with a modern and responsive design.",
      longDescription:
        "A professional business website built to represent Digital Rozgars' brand and services. Features service showcases, portfolio display, client testimonials, and contact forms. The site is built with modern web technologies for optimal performance and user experience.",
      features: [
        "Responsive and modern UI/UX design",
        "Service and portfolio showcase",
        "Client testimonials section",
        "Contact and inquiry forms",
        "SEO optimized pages",
        "Fast loading performance"
      ],
      image: "/images/projects/digital-rozgars.png",
      tech: ["Laravel", "PHP", "MySQL", "Bootstrap 5", "JavaScript", "jQuery"],
      github: "#",
      demo: "http://digitalrozgars.com/",
    },
    {
      title: "Hostel Management System",
      description:
        "Comprehensive system for managing hostel operations including room bookings, tenant tracking, payment processing, and admin dashboards with real-time updates.",
      longDescription:
        "An all-in-one hostel management solution that digitizes operations. Manage rooms, tenants, payments, and maintenance requests with ease. Features real-time occupancy tracking and automated billing.\n\nDemo Login Credentials:\n- Email: test@admin.com\n- Password: 12345678",
      features: [
        "Room allocation and availability tracking",
        "Tenant management with digital records",
        "Automated payment reminders and processing",
        "Maintenance request system",
        "Occupancy analytics and reporting",
        "Multi-user access with role permissions"
      ],
      image: "/images/projects/hostel-management-system.png",
      tech: ["TypeScript", "Node.js", "Express", "MySQL", "Real-time Updates"],
      github: "#",
      demo: "https://hostel-management-system.digitalrozgars.com/",
    },
    {
      title: "Uni Guide Consultant CRM",
      description:
        "A comprehensive CRM system for educational consultants to manage student applications, university partnerships, and communication workflows.",
      longDescription:
        "A full-featured CRM solution built for educational consultants to streamline student application processes, manage university partnerships, and track communications. Features include application tracking, document management, email integration, and reporting dashboards.\n\nDemo Login Credentials:\n- Email: admin@example.com\n- Password: password",
      features: [
        "Student application management",
        "University and course database",
        "Document upload and management",
        "Email and communication tracking",
        "Application status tracking",
        "Analytics and reporting dashboard"
      ],
      image: "/images/projects/crm-uni-guide.png",
      tech: ["Laravel", "React", "TypeScript", "MySQL", "Inertia.js", "Tailwind CSS"],
      github: "#",
      demo: "https://crm-uniguide.testcamp.uk/",
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
          
          <div className="text-center mt-12">
            <p className="text-muted-foreground">
              Additional projects and case studies available upon request. Let's discuss how I can help with your next project.
            </p>
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
