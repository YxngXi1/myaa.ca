import Image from "next/image";
import React from "react";
import Space from "@/components/Space";

export default function Home() {
  
  return (
   <main>

      {/* HERO  */}

      <div className="relative z-40" style={{height: '40vh'}}>
        <Space />
        <div className="relative flex flex-col justify-center items-center" style={{height: '40vh'}}>
          <h1 className="text-white text-4xl font-semibold mb-12 text-center tracking-wider Lora lg:text-6xl">Mississauga Youth Astro Association</h1>
          <p className="text-white text-center lg:text-xl">Explore | Discover | Together</p>
        </div>
      </div>

      {/* ABOUT US */}
      
      <div className=" flex flex-col justify-center items-center bg-blue-950 h-full">
        <h1 className="text-4xl text-white mt-8 Lora lg:text-5xl">Welcome to MYAA</h1>
        <br></br>
        <div className="flex flex-row">
            <div className="flex flex-col justify-center items-center">
              < Image
                src="/aboutus/space1.jpg"
                height={250}
                width={250}
                alt="space 1"
                className="rounded-full mb-4"
                />
              <h2 className="text-white text-3xl font-semi bold mb-4 text-center">Our Story</h2>
              <p className="text-white text-center w-10/12 mb-8">Behind MYAA is a team of passionate high school students with a strong interest in space and backgrounds in STEM. MYAA  is dedicated to connecting  like-minded individuals interested in space science and technology.</p>
            </div>
            <div className="flex flex-col justify-center items-center">
              < Image
                src="/aboutus/space2.jpg"
                height={250}
                width={250}
                alt="space 1"
                className="rounded-full mb-4"
                />
              <h2 className="text-white text-3xl font-semi bold mb-4 text-center">Our Community</h2>
              <p className="text-white text-center w-10/12 mb-8">The association is a friendly community open to all youth in Mississauga, with exclusive guest speakers, workshops/seminars, volunteering/networking opportunities, and fun events! mississauga non-profit mississauga student youth astro association.</p>
            </div>
            <div className="flex flex-col justify-center items-center">
              < Image
                src="/aboutus/space3.jpg"
                height={250}
                width={250}
                alt="space 1"
                className="rounded-full mb-4"
                />
              <h2 className="text-white text-3xl font-semi bold mb-4 text-center">Our Mission</h2>
              <p className="text-white text-center w-10/12 mb-8">With a mission to inspire curiosity, exploration, and innovation, MYAA is a dynamic non-profit organization dedicated to fostering and fueling a passion for astrophysics and astronautical technology amongst youth.</p>
            </div>
        </div>
      </div>

      {/* EVENTS */}

      <div>

      </div>
   </main>
  );
}
