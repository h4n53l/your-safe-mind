import HeroSection from "@/components/home/HeroSection";
import FeaturesSection from "@/components/home/FeaturesSection";
import FAQSection from "@/components/home/FAQSection";
import HowItWorks from "@/components/home/HowItWorks";
import BookingForm from "@/components/home/BookingForm";


export default function Home() {
  return (
    <>
    <HeroSection />
    <FeaturesSection />
    <HowItWorks />
    <BookingForm/>
    <FAQSection />
    </>
  );
}
