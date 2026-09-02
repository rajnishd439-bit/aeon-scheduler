import Navbar from "./components/layout/Navbar";
import HeroSection from "./components/sections/HeroSection";
import CalendarConnectedSection from "./components/sections/CalendarConnectedSection";
import SmarterScheduling from "./components/sections/SmarterScheduling";
import ScheduleAnywhereSection from "./components/sections/ScheduleAnywhereSection";
import BuiltForTeamsSection from "./components/sections/BuiltForTeamsSection";
import CalendarSteps from "./components/sections/CalendarSteps";
import SeeScheduleSection from "./components/sections/SeeScheduleSection";
import IntegrationSection from "./components/sections/IntegrationSection";
import FAQSection from "./components/sections/FAQSection";
import CalendarCTASection from "./components/sections/CalendarCTASection";
import GetStartedSection from "./components/sections/GetStartedSection";
import TestimonialsSection from "./components/sections/TestimonialsSection";
import PricingSection from "./components/sections/PricingSection";
import SchedulingSimpleSection from "./components/sections/SchedulingSimpleSection";
import WhyManageCalendarsSection from "./components/sections/WhyManageCalendarsSection";
import Footer from "./components/layout/Footer";

function App() {
  return (
    <>
      <Navbar />

      <main>
        <HeroSection />
        <CalendarConnectedSection />
        <SmarterScheduling />
        <ScheduleAnywhereSection />
        <CalendarSteps />
        <SeeScheduleSection />
        <BuiltForTeamsSection />
        <SchedulingSimpleSection />
        <WhyManageCalendarsSection />
        <IntegrationSection />
        <PricingSection />
        <CalendarCTASection />
        <FAQSection />
        <TestimonialsSection />
        <GetStartedSection />
      </main>

      <Footer />
    </>
  );
}

export default App;