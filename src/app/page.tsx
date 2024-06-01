import FeaturedCourses from "@/components/FeaturedCourses";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import Instructors from "@/components/Instructors";
import TestimonialCards from "@/components/TestimonialCards";
import UpcomingWebinars from "@/components/UpcomingWebinars";
import WhyChooseUs from "@/components/WhyChooseUs";


export default function Home() {
  return (
    <div className="w-full overflow-x-hidden">
      <HeroSection/>
      <FeaturedCourses />
      <WhyChooseUs/>
      <TestimonialCards/>
      <UpcomingWebinars/>
      <Instructors/>
      <Footer/>
    </div>
  );
}
