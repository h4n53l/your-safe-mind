import HeroSection from "@/components/home/HeroSection";
import ServicesSection from "@/components/home/ServicesSection";
import FAQSection from "@/components/home/FAQSection";
import HowItWorks from "@/components/home/HowItWorks";
import BookingForm from "@/components/home/BookingForm";
import CookieFloater from "@/components/layout/CookieFloater";


export default function Home() {
  return (
    <>
    <HeroSection />
    <CookieFloater />
    <ServicesSection />
    <HowItWorks />
    <BookingForm/>
    <FAQSection />
    </>
  );
}
