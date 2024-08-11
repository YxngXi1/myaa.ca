import Image from "next/image";
import React from "react";
import Space from "@/components/Space";
import Event from '@/components/Event';
import ContactForm from "@/components/ContactForm";
import Blogs from "@/components/Blogs";

export default function Home() {
  return (
    <main className="">
      {/* Launching Scene */}

      <div className="fixed min-h-screen w-full flex justify-center items-center text-center flex-col fadeOut bg-black">
        <p className="text-7xl text-white">Launching Our Spaceship...</p>
        <div className="h-80 w-80 flex justify-center items-center">
          <Image src="/spaceship.png" height={200} width={200} alt="rocket" className="shake"/>
        </div>
      </div>

      {/* White Transition */}
      <div className="absolute min-h-screen w-full bg-white fadeInOut"></div>

      {/* MAIN PORTION */}
      <div className="fadeIn">
        <div className="">


          {/* HERO */}
          <div className="relative" style={{ height: '40vh' }}>
            <Space />
            <div className="relative flex flex-col justify-center items-center" style={{ height: '40vh' }}>
              <h1 className="text-white text-4xl font-semibold mb-12 text-center tracking-wider lg:text-6xl">
                Mississauga Youth Astro Association
              </h1>
              <p className="text-white text-center lg:text-xl">Explore | Discover | Together</p>
            </div>
          </div>
          
          <div className="bg-blue-950 flex flex-col justify-center items-center w-full">

            {/* ABOUT US */}

            <section className="container flex flex-col justify-center items-centerm">
              <h1 className="text-4xl text-white mt-8 lg:text-5xl text-center">Welcome to MYAA</h1>
              <br />
              <div className="flex flex-col lg:flex-row">
                <div className="flex flex-col justify-center items-center">
                  <Image
                    src="/aboutus/space1.jpg"
                    height={250}
                    width={250}
                    alt="space 1"
                    className="rounded-full mb-4"
                  />
                  <h2 className="text-white text-3xl font-semibold mb-4 text-center">Our Story</h2>
                  <p className="text-white text-center w-10/12 mb-8">
                    Behind MYAA is a team of passionate high school students with a strong interest in space and backgrounds in STEM. MYAA is dedicated to connecting like-minded individuals interested in space science and technology.
                  </p>
                </div>
                <div className="flex flex-col justify-center items-center">
                  <Image
                    src="/aboutus/space2.jpg"
                    height={250}
                    width={250}
                    alt="space 2"
                    className="rounded-full mb-4"
                  />
                  <h2 className="text-white text-3xl font-semibold mb-4 text-center">Our Community</h2>
                  <p className="text-white text-center w-10/12 mb-8">
                    The association is a friendly community open to all youth in Mississauga, with exclusive guest speakers, workshops/seminars, volunteering/networking opportunities, and fun events!
                  </p>
                </div>
                <div className="flex flex-col justify-center items-center">
                  <Image
                    src="/aboutus/space3.jpg"
                    height={250}
                    width={250}
                    alt="space 3"
                    className="rounded-full mb-4"
                  />
                  <h2 className="text-white text-3xl font-semibold mb-4 text-center">Our Mission</h2>
                  <p className="text-white text-center w-10/12 mb-8">
                    With a mission to inspire curiosity, exploration, and innovation, MYAA is a dynamic non-profit organization dedicated to fostering and fueling a passion for astrophysics and astronautical technology amongst youth.
                  </p>
                </div>
              </div>
            </section>

            <section className="mt-20 container">
                <h1 className="text-5xl font-medium text-center text-white mb-12">Upcoming Events</h1>
                <Event date="TBD" heading="First Meeting" body="We invite you to explore the depths of the universe with us at our very first  in-person meeting. Stay tuned for guest speakers, workshops, and volunteer opportunities!" subtitle="Spring 2024"/>
                <div className="flex justify-center items-center">
                  <div className="py-8 bg-blue-950 w-10/12">
                    <hr className='hr-1'/>
                  </div>
              </div>
            </section>
          </div>
          
          {/* CONTACT */}

          <div className='bg-black flex justify-center items-center'>
            <div className="container">
              <ContactForm />
            </div>
          </div>

          {/* BLOG */}

          <div className='bg-blue-950 py-12 flex flex-col justiy-center items-center'>
            <p className="text-white text-5xl">MYAA Blog</p>
            <div className="py-8 bg-blue-950 w-1/12">
              <hr className='hr-1'/>
            </div>
            <div>
              < Blogs/>
            </div>
          </div>


        </div>


        


      </div>
    </main>
  );
}