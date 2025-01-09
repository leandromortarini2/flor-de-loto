import { About } from "./components/About/About";
import { Hero } from "./components/Hero/Hero";
import { Navbar } from "./components/Navbar/Navbar";

export default function Home() {
  return (
    <>
      <div className="w-full bg-portada">
        <div className="w-full p-0 bg-black/80 absolute inset-0 z-0"></div>

        <div className="w-full lg:min-h-screen relative z-10 text-center  ">
          <Navbar />
          <div className="w-full h-[660px] md:h-[800px] lg:min-h-[90vh]  flex justify-center items-center lg:overflow-y-hidden">
            <Hero />
          </div>
          <About />
        </div>
      </div>
    </>
  );
}
