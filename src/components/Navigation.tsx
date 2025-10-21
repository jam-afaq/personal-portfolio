import {useState, useEffect} from "react";
import {Moon, Sun, Menu, X} from "lucide-react";
import {Button} from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import logo from "@/assets/logo.png";

const Navigation = () => {
    const [isDark, setIsDark] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState("home");

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
            
            // Update active section based on scroll position
            const sections = ["home", "about", "skills", "experience", "projects", "contact"];
            const current = sections.find(section => {
                const element = document.getElementById(section);
                if (element) {
                    const rect = element.getBoundingClientRect();
                    return rect.top <= 100 && rect.bottom >= 100;
                }
                return false;
            });
            if (current) setActiveSection(current);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const toggleTheme = () => {
        setIsDark(!isDark);
        document.documentElement.classList.toggle("dark");
    };

    const navItems = [
        {label: "Home", href: "#home"},
        {label: "About", href: "#about"},
        {label: "Skills", href: "#skills"},
        {label: "Experience", href: "#experience"},
        {label: "Projects", href: "#projects"},
        {label: "Contact", href: "#contact"},
    ];

    const scrollToSection = (href: string) => {
        const element = document.querySelector(href);
        if (element) {
            element.scrollIntoView({behavior: "smooth"});
            setIsMobileMenuOpen(false);
        }
    };

    return (
        <>
            <motion.nav
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.5 }}
                className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
                    isScrolled
                        ? "glass-card shadow-elevated border-b border-border/50"
                        : "bg-transparent"
                }`}
            >
                <div className="container mx-auto px-4 py-4">
                    <div className="flex items-center justify-between">
                        <motion.a
                            href="#home"
                            className="flex items-center space-x-2"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <img
                                src={logo}
                                alt="Logo"
                                className="h-10 w-auto"
                            />
                        </motion.a>

                        <div className="hidden md:flex items-center gap-1">
                            {navItems.map((item) => (
                                <motion.button
                                    key={item.label}
                                    onClick={() => scrollToSection(item.href)}
                                    className={`relative px-4 py-2 font-medium transition-colors ${
                                        activeSection === item.href.substring(1)
                                            ? "text-primary"
                                            : "text-foreground/70 hover:text-primary"
                                    }`}
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    {item.label}
                                    {activeSection === item.href.substring(1) && (
                                        <motion.div
                                            layoutId="activeSection"
                                            className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-primary to-accent"
                                            transition={{ type: "spring", stiffness: 380, damping: 30 }}
                                        />
                                    )}
                                </motion.button>
                            ))}
                            <motion.div whileHover={{ rotate: 180 }} transition={{ duration: 0.3 }}>
                                <Button
                                    variant="ghost"
                                    size="icon"
                                    onClick={toggleTheme}
                                    className="ml-2"
                                >
                                    {isDark ? (
                                        <Sun className="h-5 w-5"/>
                                    ) : (
                                        <Moon className="h-5 w-5"/>
                                    )}
                                </Button>
                            </motion.div>
                        </div>

                        {/* Mobile Menu Button */}
                        <div className="flex md:hidden items-center gap-2">
                            <Button
                                variant="ghost"
                                size="icon"
                                onClick={toggleTheme}
                            >
                                {isDark ? (
                                    <Sun className="h-5 w-5"/>
                                ) : (
                                    <Moon className="h-5 w-5"/>
                                )}
                            </Button>
                            <Button
                                variant="ghost"
                                size="icon"
                                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            >
                                {isMobileMenuOpen ? (
                                    <X className="h-5 w-5"/>
                                ) : (
                                    <Menu className="h-5 w-5"/>
                                )}
                            </Button>
                        </div>
                    </div>
                </div>
            </motion.nav>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-40 glass-dark md:hidden"
                    >
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.9 }}
                            className="flex flex-col items-center justify-center h-full gap-8"
                        >
                            {navItems.map((item, index) => (
                                <motion.button
                                    key={item.label}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: 20 }}
                                    transition={{ delay: index * 0.1 }}
                                    onClick={() => scrollToSection(item.href)}
                                    className="text-3xl font-bold text-foreground hover:text-primary transition-colors"
                                >
                                    {item.label}
                                </motion.button>
                            ))}
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default Navigation;
