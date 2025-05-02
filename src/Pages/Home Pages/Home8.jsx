import React from "react";
import cheerfulImage from "../../assets/assets/Client-First - IMAGES/Image.svg";
import arrowLeft from "../../assets/assets/Client-First - icons/Arrow 1.svg";

function Home8() {
  return (
    <>
      {/* Gradient Strip on Top */}
      <section className="px-6 md:px-12 py-12">
        {/* Section Container */}
        <div className="max-w-1xl mx-auto bg-[#FBF6EA] p-8 relative">
          {/* About Us & Our Mission Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 m-5 pb-8 relative">
            
            {/* About Us - Left Side */}
            <div className="flex flex-col justify-between">
              <p className="text-sm font-semibold text-gray-800">TESTIMONIALS</p>
              <h1 className="text-4xl font-bold text-black mt-2">
              What our users say <br />about HR Cloud.
              </h1>
              <p className="text-gray-800 mt-4">
              HR Cloud has completely transformed how we manage <br />our HR tasks. From onboarding to performance tracking, <br />everything is streamlined and easy to access.
              </p>
            </div>

            {/* Vertical Separator Line */}
            <div className="absolute left-[41%] top-0 bottom-0 w-[1px] bg-gray-300 transform -translate-x-1/2 hidden md:block"></div>
            
            {/* Our Mission - Right Side */}
            <div className="flex flex-col justify-between">
              
              {/* Right section content */}
              <p className="text-gray-800 font-bold">
              Managing employee records used to take hours—now it’s just a few clicks thanks to HR Cloud. It’s reliable, efficient, and a real game-changer for our team. Attendance tracking and payroll were always messy before. HR Cloud brought structure and automation that helped us focus more on people and less on paperwork.
              </p>

              {/* Container for Image, Name, Location, and Arrow Buttons aligned at bottom */}
              <div className="mt-auto pt-6"> {/* Added padding to create a gap */}
                <div className="flex items-center justify-between">
                  
                  {/* Image and Name */}
                  <div className="flex items-center mt-8 "> {/* Added margin at the bottom */}
                    <img
                      src={cheerfulImage}
                      alt="Person"
                      className="h-11 w-11 rounded-full mr-4"
                    />
                    <div>
                      <h1 className="text-lg font-semibold text-black">Janathan Vallem</h1>
                      <p className="text-sm text-gray-600">New York, USA</p>
                    </div>
                  </div>

                  {/* Arrow Buttons */}
                  <div className="flex space-x-4 mt-8">
                    <button className="bg-white p-2 rounded-full">
                      <img src={arrowLeft} alt="Left Arrow" className="w-4 h-4 rotate-180" />
                    </button>
                    <button className="bg-black p-2 rounded-full">
                      <img src={arrowLeft} alt="Right Arrow" className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home8;
