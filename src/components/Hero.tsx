import { ArrowRight, Github, Linkedin, Mail, Phone, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import profilePhoto from "@/assets/programmerz.gif";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const Hero = () => {
    const { ref, isVisible } = useScrollReveal();
    
    const scrollToSection = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
    };

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.3,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6, ease: [0.4, 0, 0.2, 1] },
        },
    };

    return (
        <section
            id="home"
            ref={ref}
            className="relative min-h-screen gradient-mesh flex items-center pt-20 overflow-hidden"
        >
            {/* Animated gradient orbs - optimized */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
                <motion.div
                    animate={{
                        scale: [1, 1.15, 1],
                        opacity: [0.2, 0.35, 0.2],
                    }}
                    transition={{
                        duration: 10,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                    className="absolute top-1/4 left-1/4 w-80 h-80 bg-primary/15 rounded-full blur-3xl"
                    style={{ willChange: 'transform, opacity' }}
                />
                <motion.div
                    animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.15, 0.3, 0.15],
                    }}
                    transition={{
                        duration: 12,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: 1,
                    }}
                    className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/15 rounded-full blur-3xl"
                    style={{ willChange: 'transform, opacity' }}
                />
            </div>

            <div className="container mx-auto px-4 py-20 relative z-10">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        animate={isVisible ? "visible" : "hidden"}
                        className="space-y-6"
                    >
                        <motion.div variants={itemVariants} className="space-y-2">
                            <div className="flex items-center gap-2">
                                <Sparkles className="w-5 h-5 text-primary animate-pulse" />
                                <p className="text-primary font-semibold text-lg">Hello, I'm</p>
                            </div>
                            <h1 className="text-5xl md:text-7xl mb-3 font-bold text-gradient leading-tight">
                                Mohammad Afaq
                            </h1>
                            <div className="text-2xl md:text-4xl font-semibold text-foreground/80 h-16">
                                <TypeAnimation
                                    sequence={[
                                        'Full-Stack Developer',
                                        2000,
                                        'Laravel Expert',
                                        2000,
                                        'React Enthusiast',
                                        2000,
                                        'Problem Solver',
                                        2000,
                                    ]}
                                    wrapper="span"
                                    speed={50}
                                    repeat={Infinity}
                                />
                            </div>
                        </motion.div>

                        <motion.p
                            variants={itemVariants}
                            className="text-lg text-muted-foreground leading-relaxed"
                        >
                            Passionate web developer dedicated to crafting reliable, scalable, and
                            maintainable web solutions. Skilled in modern development practices with
                            a strong focus on clean code, performance-driven design, and integrating
                            AI models and modern frontend frameworks.
                        </motion.p>

                        <motion.div variants={itemVariants} className="flex flex-wrap gap-4">
                            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                                <Button
                                    onClick={() => scrollToSection("projects")}
                                    className="gradient-primary text-primary-foreground shadow-colored hover:shadow-glow transition-all group"
                                >
                                    View My Work
                                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-smooth" />
                                </Button>
                            </motion.div>

                            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                                <Button
                                    variant="outline"
                                    onClick={() => scrollToSection("contact")}
                                    className="border-primary/20 hover:border-primary hover:bg-primary/5 transition-all"
                                >
                                    Get In Touch
                                </Button>
                            </motion.div>
                        </motion.div>

                        <motion.div variants={itemVariants} className="flex flex-wrap gap-6 pt-4">
                            <motion.a
                                whileHover={{ x: 5 }}
                                href="mailto:m.afaq.dev@gmail.com"
                                className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-smooth"
                            >
                                <Mail className="h-4 w-4" />
                                <span className="text-sm">m.afaq.dev@gmail.com</span>
                            </motion.a>
                            <motion.a
                                whileHover={{ x: 5 }}
                                href="tel:+923013436510"
                                className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-smooth"
                            >
                                <Phone className="h-4 w-4" />
                                <span className="text-sm">+923013436510</span>
                            </motion.a>
                        </motion.div>

                        <motion.div variants={itemVariants} className="flex gap-4 pt-2">
                            <motion.a
                                whileHover={{ scale: 1.2, rotate: 5 }}
                                whileTap={{ scale: 0.9 }}
                                href="https://linkedin.com/in/mohammad-afaq"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-muted-foreground hover:text-primary transition-smooth"
                            >
                                <Linkedin className="h-6 w-6" />
                            </motion.a>
                            <motion.a
                                whileHover={{ scale: 1.2, rotate: -5 }}
                                whileTap={{ scale: 0.9 }}
                                href="https://github.com/jam-afaq"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-muted-foreground hover:text-primary transition-smooth"
                            >
                                <Github className="h-6 w-6" />
                            </motion.a>
                        </motion.div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={isVisible ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                        transition={{ duration: 0.8, delay: 0.5 }}
                        className="flex justify-center"
                    >
                        <motion.div
                            whileHover={{ scale: 1.03 }}
                            className="relative group"
                        >
                            <motion.div
                                animate={{
                                    scale: [1, 1.08, 1],
                                    opacity: [0.3, 0.5, 0.3],
                                }}
                                transition={{
                                    duration: 5,
                                    repeat: Infinity,
                                    ease: "easeInOut",
                                }}
                                className="absolute inset-0 gradient-primary rounded-full blur-3xl"
                                style={{ willChange: 'transform, opacity' }}
                            />
                            <motion.div
                                animate={{ rotate: 360 }}
                                transition={{
                                    duration: 25,
                                    repeat: Infinity,
                                    ease: "linear",
                                }}
                                className="absolute -inset-4 rounded-full border-2 border-dashed border-primary/30"
                                style={{ willChange: 'transform' }}
                            />
                            <div className="relative w-72 h-72 md:w-96 md:h-96 rounded-full overflow-hidden shadow-elevated border-4 border-card/50 backdrop-blur-sm transition-all duration-300 group-hover:shadow-colored group-hover:border-primary/50">
                                <img
                                    src={profilePhoto}
                                    alt="Mohammad Afaq - Full-Stack Developer"
                                    className="w-full h-full object-cover scale-125 group-hover:scale-130 transition-transform duration-700 ease-out"
                                    loading="eager"
                                    decoding="async"
                                />
                            </div>
                        </motion.div>
                    </motion.div>
                </div>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1 }}
                    className="mt-16 flex justify-center"
                >
                    <motion.button
                        onClick={() => scrollToSection("about")}
                        className="text-muted-foreground hover:text-primary transition-smooth"
                        animate={{ y: [0, 10, 0] }}
                        transition={{ duration: 2, repeat: Infinity }}
                    >
                        <svg
                            className="w-6 h-6"
                            fill="none"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
                        </svg>
                    </motion.button>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
