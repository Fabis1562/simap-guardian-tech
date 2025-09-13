import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import SolutionSection from "@/components/SolutionSection";
import MonitoringSection from "@/components/MonitoringSection";
import SIMAPBandSection from "@/components/SIMAPBandSection";
import LoginSection from "@/components/LoginSection";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <SolutionSection />
      <MonitoringSection />
      <SIMAPBandSection />
      <LoginSection />
    </div>
  );
};

export default Index;
