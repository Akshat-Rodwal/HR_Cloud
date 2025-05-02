import React from "react";


const AboutUs2 = () => {
  return (
    <>
      
      <div className="bg-[#F4F0F8] w-[86%] mx-auto mt-8">
        {/* New Section Below Image and Stats */}
        <section className="px-16 py-8">
          <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 ">
            {/* Left Section - OUR MISSION */}
            <div className="flex flex-col justify-center p-7">
              <p className="text-[#4C4C4C] text-sm font-medium">OUR MISSION</p>
              <h1 className="text-3xl font-bold text-[#232536] mt-2">
              Empowering Businesses Through Smart HR Process Automation
              </h1>
              <p className="text-[#6D6E76] text-lg mt-4">
              To empower businesses with an efficient, user-friendly digital HR solution that simplifies day-to-day operations and enhances workforce management.


              </p>
            </div>

            {/* Right Section - OUR VISION */}
            <div className="flex flex-col justify-center p-8">
              <p className="text-[#4C4C4C] text-sm font-medium">OUR VISION</p>
              <h1 className="text-3xl font-bold text-[#232536] mt-2">
              Shaping Future Workplaces with Seamless HR Management
              </h1>
              <p className="text-[#6D6E76] text-lg mt-4">
              To become the leading HR technology platform by enabling seamless HR management and fostering a productive, engaged, and empowered workforce.
              </p>
            </div>
          </div>
        </section>

        
      </div>
    </>
  );
};

export default AboutUs2;
