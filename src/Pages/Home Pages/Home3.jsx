import React from "react";

function Home3() {
  return (
    <>
      {/* Gradient Strip on Top */}
      <section className="px-6 md:px-12 py-12">
        {/* Strip with three colored boxes */}
        <div className="flex w-full h-[2vh]">
          <div className="w-[18%] bg-white"></div>
          <div className="w-[62%] bg-[#FFD050]"></div>
          <div className="w-[20%] bg-[#592EA9]"></div>
        </div>

        {/* Section Container */}
        <div className="max-w-1xl mx-auto bg-[#F4F0F8] p-8 relative">
          {/* About Us & Our Mission Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 m-4">
            
            {/* About Us - Left Side */}
            <div className="flex flex-col justify-between">
              <p className="text-sm font-semibold text-gray-800">ABOUT US</p>

              <h1 className="text-4xl font-bold text-black mt-2">
              HR Cloud is a modern,<br /> web-based (HRMS).
              </h1>

              <p className="text-gray-800 mt-4">
              HR Cloud is a modern, web-based Human Resource Management System (HRMS) built to simplify and streamline HR operations for organizations <br />Our platform provides HR admins and employees with easy access to essential tools for managing work...
              </p>
            </div>

            {/* Our Mission - Right Side */}
            <div className="flex flex-col justify-between">
              <p className="text-sm font-semibold text-gray-800">OUR MISSION</p>

              <h1 className="text-4xl font-bold text-black mt-2 ">
              Empowering Businesses Through Smart HR Process Automation
              </h1>

              <p className="text-gray-800 mt-4">
              To empower businesses with an efficient, user-friendly digital HR solution that simplifies day-to-day operations and enhances workforce managementTo empower businesses with an efficient, user-friendly digital HR solution that simplifies day-to-day operations and enhances workforce management....
              </p>
            </div>

            {/* Read More Button */}
            <a
              href="#viewAll"
              className="text-[#592EA9] font-bold hover:underline"
            >
              Read More &gt;
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home3;
