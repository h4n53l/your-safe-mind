import HeroSection from "@/components/home/HeroSection";
import ServicesSection from "@/components/home/ServicesSection";
import FAQSection from "@/components/home/FAQSection";
import HowItWorks from "@/components/home/HowItWorks";
import BookingForm from "@/components/home/BookingForm";


export default function Home() {
  return (
    <>
    <HeroSection />
    <ServicesSection />
    <HowItWorks />
    <BookingForm/>
    <FAQSection />
    </>
  );
}
