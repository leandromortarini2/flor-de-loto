import { About } from "./components/About/About";
import { Hero } from "./components/Hero/Hero";
import { Navbar } from "./components/Navbar/Navbar";
import Image from "next/image";
import rectangleHero from "../../public/assets/rectangleHero.png";
import { Footer } from "./components/Footer/Footer";
import { Products } from "./components/Products/Products";
import { WhatsappButton } from "./components/WhatsappButton/WhatsappButton";
export default function Home() {
  return (
    <>
      <div className="w-full min-h-screen md:h-screen  bg-portada bg-cover">
        <div className="w-full p-0 min-h-[630px] md:min-h-screen bg-black/80 absolute inset-0 z-0"></div>

        <div
          id="hero"
          className="w-full min-h-screen relative z-10 text-center  "
        >
          <Navbar />
          <div className="w-full  flex justify-center items-start xl:items-center lg:overflow-y-hidden relative  ">
            <Hero />
            <div className=" w-full z-10 bottom-0 lg:bottom-20 absolute ">
              <Image
                src={rectangleHero}
                alt="hero"
                className="w-full h-full lg:h-auto object-cover  "
              />
            </div>
          </div>
          <About />
          <Products />
          <WhatsappButton />
          <Footer />
        </div>
      </div>
    </>
  );
}
