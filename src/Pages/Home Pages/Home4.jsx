import React from "react";

function Home4() {
  return (
    <section className="px-6 md:px-12 py-12">
      {/* Title Section */}
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold text-[#232536]">HR Cloud Services</h1>
      </div>

{/* bg-[#FFD050] text-[#232536]  font-semibold hover:bg-[#492491] transition duration-300 */}

      {/* Category Cards Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {/* Category Card 1 */}
        <div className="border-2 p-6 flex flex-col items-start  bg-[#fff] font-semibold hover:bg-[#FFD050] transition duration-300">
          {/* SVG Image */}
          <div className="w-12 h-12 mb-4 bg-[#FBF6EA] rounded-3 flex items-center justify-center">
            <img
              src="src/assets/assets/Client-First - icons/Icon-1.svg"
              alt="Business"
              className="rounded-full"
            />
          </div>
          {/* Category Name */}
          <h3 className="text-xl font-bold text-[#232536]">Employee Onboarding</h3>
          {/* Description */}
          <p className="text-gray-500 mt-2">
          Streamline the hiring process with automated onboarding steps. HR Cloud ensures new employees settle in quickly and efficiently.
          </p>
        </div>

        {/* Category Card 2 */}
        <div className="border-2 p-6  flex flex-col items-start  bg-[#fff] font-semibold hover:bg-[#FFD050] transition duration-300">
          {/* SVG Image */}
          <div className="w-12 h-12 mb-4 bg-[#FBF6EA] rounded-3 flex items-center justify-center">
            <img
              src="src/assets/assets/Client-First - icons/Icon (2).svg"
              alt="Startup"
              className="rounded-full"
            />
          </div>
          {/* Category Name */}
          <h3 className="text-xl font-bold text-[#232536]">Attendance Tracking</h3>
          {/* Description */}
          <p className="text-gray-500 mt-2">
          Track leaves and daily attendance in real-time with accuracy. HR Cloud eliminates manual errors and boosts workforce transparency.
          </p>
        </div>

        {/* Category Card 3 */}
        <div className="border-2 p-6  flex flex-col items-start  bg-[#fff] font-semibold hover:bg-[#FFD050] transition duration-300">
          {/* SVG Image */}
          <div className="w-12 h-12 mb-4 bg-[#FBF6EA] rounded-3 flex items-center justify-center">
            <img
              src="src/assets/assets/Client-First - icons/icon.svg"
              alt="Economy"
              className="rounded-full"
            />
          </div>
          {/* Category Name */}
          <h3 className="text-xl font-bold text-[#232536]">Performance Reviews</h3>
          {/* Description */}
          <p className="text-gray-500 mt-2">
          Conduct structured and timely performance evaluations. HR Cloud helps identify strengths, set goals, and improve employee growth.
          </p>
        </div>

        {/* Category Card 4 */}
        <div className="border-2 p-6 flex flex-col items-start  bg-[#fff] font-semibold hover:bg-[#FFD050] transition duration-300">
          {/* SVG Image */}
          <div className="w-12 h-12 mb-4 bg-[#FBF6EA] rounded-3 flex items-center justify-center">
            <img
              src="src/assets/assets/Client-First - icons/business-and-trade 1.svg"
              alt="Technology"
              className="rounded-full"
            />
          </div>
          {/* Category Name */}
          <h3 className="text-xl font-bold text-[#232536]">Payroll Management</h3>
          {/* Description */}
          <p className="text-gray-500 mt-2">
          Automate payroll calculations and ensure compliance with ease. HR Cloud simplifies salary disbursement. 
          </p>
        </div>
      </div>
    </section>
  );
}

export default Home4;
