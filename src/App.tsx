import { useEffect, useState } from "react";
import {
    AnimatePresence,
    type Variants,
    motion,
    useReducedMotion,
} from "framer-motion";
import Navbar from "./components/Navbar";
import About from "./sections/About";
import Contact from "./sections/Contact";
import Hero from "./sections/Hero";
import Projects from "./sections/Projects";
import Skills from "./sections/Skills";

const reveal: Variants = {
    hidden: { opacity: 0, y: 60 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.7,
            ease: "easeOut" as const,
        },
    },
};

function SectionReveal({ children }: { children: React.ReactNode }) {
    const shouldReduceMotion = useReducedMotion();

    if (shouldReduceMotion) {
        return <>{children}</>;
    }

    return (
        <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={reveal}
        >
            {children}
        </motion.div>
    );
}

function App() {
    const shouldReduceMotion = useReducedMotion();
    const [showBackToTop, setShowBackToTop] = useState(false);

    useEffect(() => {
        const updateVisibility = () => setShowBackToTop(window.scrollY > 300);

        updateVisibility();
        window.addEventListener("scroll", updateVisibility, { passive: true });

        return () => window.removeEventListener("scroll", updateVisibility);
    }, []);

    return (
        <div className="min-h-screen bg-[#0a0a0a] text-white">
            <a className="skip-link" href="#main-content">
                Skip to main content
            </a>
            <Navbar />
            <main id="main-content" tabIndex={-1}>
                <SectionReveal>
                    <Hero />
                </SectionReveal>
                <SectionReveal>
                    <About />
                </SectionReveal>
                <SectionReveal>
                    <Skills />
                </SectionReveal>
                <SectionReveal>
                    <Projects />
                </SectionReveal>
                <SectionReveal>
                    <Contact />
                </SectionReveal>
            </main>
            <AnimatePresence>
                {showBackToTop && (
                    <motion.button
                        type="button"
                        aria-label="Back to top"
                        title="Back to top"
                        initial={shouldReduceMotion ? false : { opacity: 0, y: 12, scale: 0.9 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={shouldReduceMotion ? undefined : { opacity: 0, y: 8, scale: 0.95 }}
                        whileHover={shouldReduceMotion ? undefined : { scale: 1.06, y: -2 }}
                        whileTap={shouldReduceMotion ? undefined : { scale: 0.96 }}
                        transition={{ duration: shouldReduceMotion ? 0 : 0.2 }}
                        onClick={() =>
                            window.scrollTo({
                                top: 0,
                                behavior: shouldReduceMotion ? "auto" : "smooth",
                            })
                        }
                        className="fixed bottom-6 right-6 z-40 grid size-12 cursor-pointer place-items-center rounded-full border border-white/15 bg-[#b5f36b] text-[#10150b] shadow-lg transition-colors hover:bg-[#c7fb89] active:bg-[#a9e65f] focus-visible:bg-[#a9e65f] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#d4ffac] focus-visible:ring-offset-2 focus-visible:ring-offset-[#080b09]"
                    >
                        <svg
                            aria-hidden="true"
                            viewBox="0 0 24 24"
                            fill="none"
                            className="size-5"
                        >
                            <path
                                d="m6 14 6-6 6 6"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </svg>
                    </motion.button>
                )}
            </AnimatePresence>
        </div>
    );
}

export default App;
