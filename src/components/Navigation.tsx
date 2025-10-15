import {useState, useEffect} from "react";
import {Moon, Sun, Menu, X} from "lucide-react";
import {Button} from "@/components/ui/button";
import logo from "@/assets/logo.png";

const Navigation = () => {
    const [isDark, setIsDark] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
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
            <nav
                className={`fixed top-0 left-0 right-0 z-50 transition-smooth ${
                    isScrolled
                        ? "bg-card/95 backdrop-blur-lg shadow-card"
                        : "bg-transparent"
                }`}
            >
                <div className="container mx-auto px-4 py-4">
                    <div className="flex items-center justify-between">
                        <a href="#home" className="flex items-center space-x-2">
                            <img
                                src={logo}
                                alt="Logo"
                                className="h-10 w-auto animate-shine"
                            />
                        </a>

                        <div className="hidden md:flex items-center gap-8">
                            {navItems.map((item) => (
                                <button
                                    key={item.label}
                                    onClick={() => scrollToSection(item.href)}
                                    className="text-foreground/80 hover:text-primary transition-smooth font-medium"
                                >
                                    {item.label}
                                </button>
                            ))}
                            <Button
                                variant="ghost"
                                size="icon"
                                onClick={toggleTheme}
                                className="transition-smooth"
                            >
                                {isDark ? (
                                    <Sun className="h-5 w-5"/>
                                ) : (
                                    <Moon className="h-5 w-5"/>
                                )}
                            </Button>
                        </div>

                        {/* Mobile Menu Button */}
                        <div className="flex md:hidden items-center gap-2">
                            <Button
                                variant="ghost"
                                size="icon"
                                onClick={toggleTheme}
                                className="transition-smooth"
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
            </nav>

            {/* Mobile Menu */}
            {isMobileMenuOpen && (
                <div className="fixed inset-0 z-40 bg-background/95 backdrop-blur-lg md:hidden">
                    <div className="flex flex-col items-center justify-center h-full gap-6">
                        {navItems.map((item) => (
                            <button
                                key={item.label}
                                onClick={() => scrollToSection(item.href)}
                                className="text-2xl font-medium text-foreground/80 hover:text-primary transition-smooth"
                            >
                                {item.label}
                            </button>
                        ))}
                    </div>
                </div>
            )}
        </>
    );
};

export default Navigation;
