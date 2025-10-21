import { useState, useEffect, lazy, Suspense } from "react";
import { AnimatePresence } from "framer-motion";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import LoadingScreen from "@/components/LoadingScreen";
import AnimatedBackground from "@/components/AnimatedBackground";

// Lazy load components that are below the fold
const About = lazy(() => import("@/components/About"));
const SkillsEnhanced = lazy(() => import("@/components/SkillsEnhanced"));
const Experience = lazy(() => import("@/components/Experience"));
const Projects = lazy(() => import("@/components/Projects"));
const Education = lazy(() => import("@/components/Education"));
const Contact = lazy(() => import("@/components/Contact"));
const Footer = lazy(() => import("@/components/Footer"));

const Index = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate initial load
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <AnimatePresence mode="wait">
        {isLoading && (
          <LoadingScreen onLoadingComplete={() => setIsLoading(false)} />
        )}
      </AnimatePresence>

      {!isLoading && (
        <div className="min-h-screen relative">
          <AnimatedBackground />
          <Navigation />
          <Hero />
          <Suspense fallback={<div className="min-h-screen" />}>
            <About />
            <SkillsEnhanced />
            <Experience />
            <Projects />
            <Education />
            <Contact />
            <Footer />
          </Suspense>
        </div>
      )}
    </>
  );
};

export default Index;
