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
      {/* caja para darle la opacidad al fondo en movile */}
      <div className="absolute inset-0 bg-black/50 lg:hidden"></div>
      {/* w-full  h-screen bg-bgHeroMovile lg:bg-portada  bg-cover */}
      <div
        className={`w-full  h-screen  bg-bgHeroMovile lg:bg-bgHero  bg-cover`}
      >
        <div className="hidden lg:block w-full p-0 xs:min-h-[700px] sm:min-h-[630px] md:min-h-screen lg:bg-black/80 absolute inset-0 z-0"></div>

        <div
          id="hero"
          className="w-full min-h-screen relative z-20 text-center  "
        >
          <Navbar />
          <div className="w-full h-screen  md:h-auto  flex justify-center items-start xl:items-center lg:overflow-y-hidden relative  ">
            <Hero />
            <div className="hidden lg:block w-full z-10 bottom-0 lg:bottom-20 absolute ">
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
