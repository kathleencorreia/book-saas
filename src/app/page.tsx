import Footer from "@/components/Footer";
import Functionality from "@/components/Functionality";
import HeaderServer from "@/components/HeaderServer";
import Hero from "@/components/Hero";
import Info from "@/components/Info";
import Price from "@/components/Price";

export default function Home() {
  return (
    <div>
      <HeaderServer />
      <Hero />
      <Functionality />
      <Price />
      <Info />
      <Footer/>
    </div>
  );
}
