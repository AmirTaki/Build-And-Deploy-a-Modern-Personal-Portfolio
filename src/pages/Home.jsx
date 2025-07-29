import Navbar from "@/components/Navbar";
import StartBackground from "@/components/StartBckground";
import { ThemeToggle } from "@/components/ThemeToggle";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import SkillsSection from "@/components/SkillsSection";
import ProjectsSection from "../components/ProjectsSection";
import ContactSection from "../components/ContactSection";
import Footer from "../components/Footer";

const Home = () => {
    return(
        <div className="min-h-screen bg-background text-foreground overflow-x-hidden ">
            {/* Theme Toggle */}
            <ThemeToggle />
            {/* Background Effects */}
            <StartBackground />
            {/* Navbar */}
            <Navbar />
            {/* Main Content */}
            <main>
                <HeroSection />
                <AboutSection/>
                <SkillsSection />
                <ProjectsSection />
                <ContactSection />
            </main>
            {/* Footer */}
            <Footer />
        </div>
    )
}

export default Home;

// https://www.youtube.com/watch?v=ifOJ0R5UQOc
//  https://github.com/machadop1407/beautiful-react-tailwind-portfolio/blob/main/src/index.css