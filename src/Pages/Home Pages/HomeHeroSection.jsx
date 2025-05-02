import React from "react";


import svgImage from '../../assets/assets/Client-First - IMAGES/man-in-black-suit-wearing-eye-glasses-sitting-on-gray-sofa-using-macbook-3772622.svg'; // Import the SVG
import Navbar from "../../components/Navbar";

function HomeHeroSection() {
  return (
    <>
      <Navbar />
      <section className="w-full h-[80vh] relative bg-[#232536] text-white overflow-hidden">
        {/* Background Image with Radial Gradient */}
        <div
          className="absolute inset-0 bg-cover bg-center opacity-40"
          style={{
            backgroundImage: `url(${svgImage}), radial-gradient(circle at top center, rgba(255, 255, 255, 0.7) 30%, rgba(35, 37, 54, 1) 70%)`, 
            backgroundSize: 'cover', 
            backgroundPosition: 'center',
          }} 
        ></div>

        {/* Overlay content */}
        <div className="relative z-10 h-full flex items-center pl-8 md:pl-16 py-12 text-left">
          <div className="max-w-4xl">
            <p className="uppercase text-white mb-2">Posted on Startup</p>
            <h2 className="text-3xl md:text-5xl font-bold leading-snug mb-4">
            Step-by-Step <br />Guide to Simplifying <br />HR Management
            </h2>
            <p className="mb-6">
              By <span className="text-[#FFD050]">HR Cloud Team</span> | May 23, 2022
            </p>
            <p className="text-gray-200 mb-6 max-w-xl">
            Discover how HR Cloud helps streamline employee onboarding, manage payroll, track attendance, and improve workforce productivity—all from one smart and secure platform.
            </p>
            <button className="bg-[#FFD050] text-[#232536]  font-semibold hover:bg-[#492491] hover:text-[#fff] transition duration-300 px-6 py-2 ">
              Book Your Free Demo &gt;
            </button>
          </div>
        </div>
      </section>
      {/* <Footer /> */}
    </>
  );
}

export default HomeHeroSection;
