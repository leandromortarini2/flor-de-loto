"use client";
import { About } from "./components/About/About";
import { Hero } from "./components/Hero/Hero";
import { Navbar } from "./components/Navbar/Navbar";
import { Footer } from "./components/Footer/Footer";
import { Products } from "./components/Products/Products";
import { WhatsappButton } from "./components/WhatsappButton/WhatsappButton";
import { useRotate } from "./hooks/useRotate";
import Image from "next/image";
export default function Home() {
  const rotateScreen = useRotate();

  return (
    <div
      className={`w-full bg-bgHeroMovile lg:bg-bgHero  bg-cover    relative  ${
        rotateScreen ? "h-auto" : "h-screen"
      }`}
    >
      <div className="absolute inset-0 z-0 h-full bg-black/50"></div>
      <div className="absolute inset-0 bottom-0 z-10 items-end justify-end hidden w-full lg:flex h-1/3">
        <Image
          src={"/assets/rectangleHero.png"}
          alt="hero-rectangle"
          width={500}
          height={200}
          className="w-full h-2/3"
        />
      </div>
      <div id="hero" className="relative z-10 w-full min-h-screen text-center ">
        <Navbar />
        <div
          className={`w-full  md:h-auto  flex justify-center  items-start xl:items-center lg:overflow-y-hidden  ${
            rotateScreen ? "h-auto" : "h-screen"
          }`}
        >
          <Hero />
        </div>

        <About />
        <Products />
        <WhatsappButton />
        <Footer />
      </div>
    </div>
  );
}
