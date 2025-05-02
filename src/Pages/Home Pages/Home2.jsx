import React from "react";
import whiteConcreteBuilding from "../../assets/assets/images/what-is-hr-data.webp";  // Importing the image

function Home2() {
  return (
    <section className="px-6 md:px-12 py-12 bg-white mt-3">
      {/* Featured Post Section */}
      <div className="max-w-1xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-5">
        
        {/* Left Section (Featured Post) */}
        <div className="relative text-black p-1 md:p-10">
          {/* Featured Post Title */}
          <h3 className="text-3xl font-bold mb-4">Featured Post</h3>
          
          <div className="relative z-10">
            {/* Featured Post Card */}
            <div className="border border-[#6D6E76] overflow-hidden">
              {/* Card Image */}
              <div
                className="h-64 bg-cover bg-center m-4"
                style={{
                  backgroundImage: `url(${whiteConcreteBuilding})`,  // Using the imported image
                }}
              ></div>

              {/* Card Text Content */}
              <div className="p-4">
                {/* Post Author and Date */}
                <p className="text-sm font-semibold text-gray-800">By <span className="text-[#592EA9]">HR Cloud Team</span> | May 23, 2022</p>

                {/* Post Title */}
                <h1 className="text-2xl font-bold text-black mt-2 ">
                Empowering HR teams and employees to streamline onboarding, manage payroll, track attendance, and drive performance — all in one seamless, digital platform.
                </h1>

                {/* Additional Post Description */}
                <p className="text-gray-800 mt-4">
                From compliance to communication, HR Cloud simplifies it all so you can focus on people, not paperwork...
                </p>

                {/* Read More Button */}
                <button className="bg-[#FFD050] text-[#232536]  font-semibold hover:bg-[#492491] transition duration-300 px-6 py-2 mt-4">
                  Read More &gt;
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Right Section (All Posts) */}
        <div className="flex flex-col">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-3xl font-bold">All Posts</h3>
            {/* View All Button */}
            <a
              href="#viewAll"
              className="text-[#592EA9] hover:underline"
            >
              View All
            </a>
          </div>

          {/* Individual Post 1 */}
          <div className="p-4 bg-white flex items-start justify-between">
            <div>
            <p className="text-sm font-semibold text-gray-800 mb-2">By <span className="text-[#592EA9]">HR Cloud Team</span> | Aug 23, 2021</p>
              <h4 className="text-2xl font-semibold text-[#232536]">
              5 Key Benefits of Using HR Cloud for Payroll Management  <br />Discover how automation with HR Cloud simplifies.
              </h4>
            </div>
          </div>

          {/* Individual Post 2 */}
          <div className="p-4 bg-[#FBF6EA] flex items-start justify-between mr-7">
            <div>
            <p className="text-sm font-semibold text-gray-800 mb-2">By <span className="text-[#592EA9]">HR Cloud Team</span> | Aug 23, 2021</p>
              <h4 className="text-2xl font-semibold text-[#232536]">
              How HR Cloud Streamlines Employee Onboarding <br />Explore how digital onboarding can save time.
              </h4>
            </div>
          </div>

          {/* Individual Post 3 */}
          <div className="p-4 bg-white flex items-start justify-between">
            <div>
            <p className="text-sm font-semibold text-gray-800 mb-2">By <span className="text-[#592EA9]">HR Cloud Team</span> | Aug 23, 2021</p>
              <h4 className="text-2xl font-semibold text-[#232536]">
              Tracking Attendance Made Easy with HR Cloud  <br />A guide to accurate, real-time attendance.
              </h4>
            </div>
          </div>

          {/* Individual Post 4 */}
          <div className="p-4 bg-white flex items-start justify-between">
            <div>
            <p className="text-sm font-semibold text-gray-800 mb-2">By <span className="text-[#592EA9]">HR Cloud Team</span> | Aug 23, 2021</p>
              <h4 className="text-2xl font-semibold text-[#232536]">
              Why Performance Reviews Are Better with HR Cloud  <br />Simplify evaluations and boost productivity.
              </h4>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home2;
