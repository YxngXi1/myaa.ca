import Image from "next/image";
import React from "react";
import Space from "@/components/Space";

export default function Home() {
  
  return (
   <main>
      <div className="relative border">
        <Space />
        <div className="absolute z-40">
          <h1 className="text-white">Mississauga Youth Astro Association</h1>
          <p className="text-white">Explore | Discover | Together</p>
        </div>
      </div>
      <div>
        <h1>Welcome to MYAA</h1>
        {/* breakline */}
        <div>
          <div>
            {/* <Image /> */}
            <h2>Our Story</h2>
            <p>Behind MYAA is a team of passionate high school students with a strong interest in space and backgrounds in STEM. MYAA  is dedicated to connecting  like-minded individuals interested in space science and technology.</p>
          </div>
          <div>
            {/* <Image /> */}
            <h2>Our Community</h2>
            <p>The association is a friendly community open to all youth in Mississauga, with exclusive guest speakers, workshops/seminars, volunteering/networking opportunities, and fun events! mississauga non-profit mississauga student youth astro association</p>
          </div>
          <div>
            {/* <Image /> */}
            <h2>Our Mission</h2>
            <p>With a mission to inspire curiosity, exploration, and innovation, MYAA is a dynamic non-profit organization dedicated to fostering and fueling a passion for astrophysics and astronautical technology amongst youth.</p>
          </div>
        </div>
      </div>
   </main>
  );
}
