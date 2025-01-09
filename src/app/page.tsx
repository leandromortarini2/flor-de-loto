import { About } from "./components/About/About";
import { Hero } from "./components/Hero/Hero";
import { Navbar } from "./components/Navbar/Navbar";

export default function Home() {
  return (
    <>
      <div className="w-full bg-portada">
        <div className="w-full h-[600px] lg:min-h-full bg-black/80 absolute z-0"></div>

        <div className="w-full lg:min-h-screen relative z-10 text-center  ">
          <Navbar />
          <div className="w-full min-h-screen  flex justify-center items-center lg:overflow-y-hidden">
            <Hero />
          </div>
          <About />
        </div>
      </div>
    </>
  );
}
