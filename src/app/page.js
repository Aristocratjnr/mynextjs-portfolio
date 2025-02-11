import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import AboutSection from "./components/AboutSection";
import ProjectsSection from "./components/ProjectsSection";
import EmailSection from "./components/EmailSection";
import Footer from "./components/Footer";
import AchievementsSection from "./components/AchievementsSection";
import BlogSection from "./components/BlogSection";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-white text-gray-900 dark:bg-[#121212] dark:text-gray-100 transition-colors duration-300">
      <Navbar />
      <div className="container mt-24 mx-auto px-6 md:px-12 lg:px-16 py-8">
        <HeroSection />
        <AchievementsSection />
        <AboutSection />
        <BlogSection />
        <ProjectsSection />
        <EmailSection />
      </div>
      <Footer />
    </main>
  );
}
