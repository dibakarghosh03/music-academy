import Link from "next/link"
import { Spotlight } from "./ui/Spotlight"
import { HoverBorderGradient } from "./ui/hover-border-gradient"
import { SparklesCore } from "./ui/sparkles"

function HeroSection() {
  return (
    <div
    className="h-auto md:h-screen w-full flex flex-col rounded-md items-center justify-center relative overflow-hidden mx-auto py-10 md:py-0"
    >
      <div
      className="p-4 relative z-10 w-full text-center flex flex-col items-center"
      >
        <Spotlight
        className="-top-40 left-10 md:left-1/3 md:-top-36"
        fill="white"
        />
        <h1
        className="mt-20 md:mt-32 text-4xl md:text-8xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400"
        >
          Master the Art of Music
        </h1>
          <div className="w-[40rem] h-40 relative">
            {/* Gradients */}
            <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-3/4 blur-sm" />
            <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-3/4" />
            <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-1/4 blur-sm" />
            <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/4" />
  
            {/* Core component */}
            <SparklesCore
              background="transparent"
              minSize={0.4}
              maxSize={1}
              particleDensity={1200}
              className="w-full h-full"
              particleColor="#FFFFFF"
            />
  
          {/* Radial Gradient to prevent sharp edges */}
            <div className="absolute inset-0 w-full h-full bg-black [mask-image:radial-gradient(350px_200px_at_top,transparent_20%,white)]"></div>
          </div>
        <div className="relative w-[60%]">
          <p
          className=" -mt-24 font-medium text-xl md:text-lg text-neutral-300 max-w-2xl mx-auto "
          >Dive into our comprehensive music courses and transform your musical journey today. Whether you are a beginner or looking to refine your skills, join us to unlock your true potential.</p>
          <div className="mt-8 flex justify-center">
            <Link href={"/courses"}>
              <HoverBorderGradient
              containerClassName="rounded-full"
              as="button"
              className="dark:bg-black bg-white text-black dark:text-white flex items-center space-x-2"
              >
                <span className="text-xl">Explore Courses</span>
              </HoverBorderGradient>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeroSection