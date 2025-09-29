import AboutUs from "@/components/aboutUs";
import Footer from "@/components/footer";
import HeroSection from "@/components/heroSection";
import MenuSection from "@/components/menuSection";
import Navbar from "@/components/navbar";
import OurChefs from "@/components/ourChefs";
import ParallaxSection from "@/components/parallaxSection";
import Services from "@/components/services";
import Image from "next/image";
import { client } from "@/lib/sanity";
import { 
  heroSectionQuery, 
  aboutUsSectionQuery, 
  parallaxSectionQuery, 
  servicesSectionQuery, 
  ourChefsSectionQuery, 
  footerSectionQuery 
} from "@/lib/queries";

export default async function Home() {

  const heroData = await client.fetch(heroSectionQuery);
  const aboutData = await client.fetch(aboutUsSectionQuery);
  const parallaxData = await client.fetch(parallaxSectionQuery);
  const servicesData = await client.fetch(servicesSectionQuery);
  const chefsData = await client.fetch(ourChefsSectionQuery);
  const footerData = await client.fetch(footerSectionQuery);
  return (
    <div>
     <Navbar />
      <HeroSection data={heroData} />
      <AboutUs data={aboutData} />
      <ParallaxSection data={parallaxData} />
      <Services data={servicesData} />
      <MenuSection /> {/* Menü section’ını CMS’e bağladıysak burada da prop geçebiliriz */}
      <OurChefs data={chefsData} />
   {/*    <Footer data={footerData} /> */}
     
    </div>
  );
}

// hero eklendi. navbar üstüne bindirmek için prompt yazdın. ordan devam.