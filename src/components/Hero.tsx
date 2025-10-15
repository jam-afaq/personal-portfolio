import { ArrowRight, Github, Linkedin, Mail, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import profilePhoto from "@/assets/profile-photo.jpg";

const Hero = () => {
    const scrollToSection = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <section
            id="home"
            className="relative min-h-screen gradient-hero flex items-center pt-20 overflow-hidden"
        >
            {/* ✨ Floating Particles Background */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-1/4 left-1/3 w-3 h-3 bg-primary/40 rounded-full blur-md animate-float-particle"></div>
                <div
                    className="absolute top-1/2 right-1/4 w-2 h-2 bg-secondary/50 rounded-full blur-md animate-float-particle"
                    style={{ animationDelay: "2s" }}
                ></div>
                <div
                    className="absolute bottom-1/3 left-1/2 w-4 h-4 bg-primary/30 rounded-full blur-lg animate-float-particle"
                    style={{ animationDelay: "4s" }}
                ></div>
            </div>

            <div className="container mx-auto px-4 py-20 relative z-10">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div className="space-y-6 animate-fade-in-up">
                        <div className="space-y-2">
                            <p className="text-primary font-semibold text-lg">Hello, I'm</p>
                            <h1 className="text-5xl md:text-6xl mb-3 font-bold bg-clip-text text-primary">
                                Mohammad Afaq
                            </h1>
                            <h2 className="text-2xl md:text-3xl font-semibold bg-clip-text text-secondary gradient-primary animate-text-shine mt-2 rounded px-2">
                                Full-Stack Developer
                            </h2>
                        </div>

                        <p className="text-lg text-muted-foreground leading-relaxed">
                            Passionate web developer dedicated to crafting reliable, scalable, and
                            maintainable web solutions. Skilled in modern development practices with
                            a strong focus on clean code, performance-driven design, and integrating
                            AI models and modern frontend frameworks.
                        </p>

                        <div className="flex flex-wrap gap-4">
                            <Button
                                onClick={() => scrollToSection("projects")}
                                className="gradient-primary text-primary-foreground shadow-glow hover:scale-105 transition-bounce group"
                            >
                                View My Work
                                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-smooth" />
                            </Button>

                            <Button
                                variant="outline"
                                onClick={() => scrollToSection("contact")}
                                className="border-primary/20 hover:border-primary transition-smooth"
                            >
                                Get In Touch
                            </Button>
                        </div>

                        <div className="flex flex-wrap gap-6 pt-4">
                            <a
                                href="mailto:afaqkalwarapl@gmail.com"
                                className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-smooth"
                            >
                                <Mail className="h-4 w-4" />
                                <span className="text-sm">afaqkalwarapl@gmail.com</span>
                            </a>
                            <a
                                href="tel:+923013436510"
                                className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-smooth"
                            >
                                <Phone className="h-4 w-4" />
                                <span className="text-sm">+923013436510</span>
                            </a>
                        </div>

                        <div className="flex gap-4 pt-2">
                            <a
                                href="https://linkedin.com/in/mohammad-afaq"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-muted-foreground hover:text-primary transition-smooth"
                            >
                                <Linkedin className="h-6 w-6" />
                            </a>
                            <a
                                href="https://github.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-muted-foreground hover:text-primary transition-smooth"
                            >
                                <Github className="h-6 w-6" />
                            </a>
                        </div>
                    </div>

                    <div className="flex justify-center animate-scale-in">
                        <div className="relative">
                            <div className="absolute inset-0 gradient-primary rounded-full blur-3xl opacity-40 animate-soft-glow"></div>
                            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden shadow-elevated border-4 border-card">
                                <img
                                    src={profilePhoto}
                                    alt="Mohammad Afaq - Full-Stack Developer"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mt-16 flex justify-center animate-float">
                    <button
                        onClick={() => scrollToSection("about")}
                        className="text-muted-foreground hover:text-primary transition-smooth"
                    >
                        <svg
                            className="w-6 h-6 animate-bounce"
                            fill="none"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
                        </svg>
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Hero;
