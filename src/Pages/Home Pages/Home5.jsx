import React from "react";
import imagePath from "../../assets/assets/Client-First - IMAGES/close-up-photography-of-man-wearing-sunglasses-1212984.svg"; // Correct image import

function WhyWeStarted() {
  return (
    <section className="px-6 md:px-12 py-12 flex flex-col md:flex-row items-center relative">
      <div className="flex flex-col md:flex-row items-center justify-between w-full">
        
        {/* Image Section */}
        <div className="w-full md:w-3/4 mb-6 md:mb-0">
          <img
            src={imagePath} 
            alt="Why We Started"
            className="w-full h-80 sm:h-96 md:h-[600px] shadow-md object-cover "
          />
        </div>

        {/* Text Content Section */}
        <div className="w-full md:w-[55%] bg-white p-6 sm:p-12 md:absolute md:bottom-0 md:right-0 transform space-y-4 md:space-y-6 rounded-lg shadow-md md:rounded-none md:shadow-none">
          <h2 className="text-sm font-semibold text-[#232536]">WHY WE STARTED</h2>
          <h3 className="text-2xl sm:text-3xl md:text-5xl font-bold text-[#232536] mt-4 leading-tight">
          We noticed how time- <br />consuming and scattered <br />HR  operations were
          </h3>
          <p className="text-base sm:text-lg text-gray-600">
          so we built HR Cloud to simplify employee management through automation, transparency, and user-friendly tools. From onboarding to payroll, our goal is to empower HR teams and employees with a smarter way to work...
          </p>
          <a
            href="#discover"
            className="inline-block px-8 py-3 sm:px-10 sm:py-3 md:px-12 md:py-3 text-[#232536] bg-[#FFD050] font-bold hover:bg-[#592EA9] transition duration-300 mb-5"
          >
            Read More &gt;
          </a>
        </div>
      </div>
    </section>
  );
}

export default WhyWeStarted;
