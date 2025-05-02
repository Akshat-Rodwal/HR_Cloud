import React from "react";


// Import your images
import image1 from "../../assets/assets/Client-First - IMAGES/ground-group-growth-hands-461049.svg";
import image2 from "../../assets/assets/Client-First - IMAGES/man-in-black-crew-neck-t-shirt-sitting-beside-woman-in-gray-crew-neck-t-shirt-3153201.svg";
import shapeImage from "../../assets/assets/Client-First - IMAGES/shapes.svg"; // New image to be layered
import circleImage from "../../assets/assets/Client-First - IMAGES/circle.svg"; // Circle image to be added at the bottom

const AboutUs3 = () => {
  return (
    <>
      {/* <Navbar /> */}
      <div className="mx-auto -mt-8">
        {/* New Section with Right Image, Left Text */}
        <section className="px-16 py-8 mt-12">
          <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-16">
            {/* Left Section with Text */}
            <div className="flex flex-col justify-center p-8">
              <h1 className="text-3xl font-bold text-[#232536]">
              Why HR Cloud exists
              </h1>
              <h3 className="text-xl text-[#4C4C4C] font-semibold mt-4">
              Simplifying HR Tasks for Efficient Workforce Management.
              </h3>
              <p className="text-[#6D6E76] text-lg mt-4">
              HR Cloud was created to simplify and automate daily HR operations, making it easier for HR professionals and employees to manage tasks like onboarding, attendance, payroll, and performance tracking. Our platform reduces manual effort, increases transparency, and empowers teams to focus more on people than paperwork.
              </p>
            </div>

            {/* Right Section with Image */}
            <div className="flex justify-center p-8 relative">
              {/* Image 1 */}
              <img
                className="w-full h-[350px] object-cover object-center"
                src={image1} // First image
                alt="Our Team"
              />

              {/* Image 2 (Shape Image) */}
              <img
                className="absolute top-28 left-0 w-16 h-20 object-contain" // Adjust size and position as needed
                src={shapeImage} // Shape image to overlay on image1
                alt="Shape Overlay"
              />
            </div>
          </div>
        </section>

        {/* New Section with Left Image, Right Text */}
        <section className="px-16 py-8 mt-8">
          <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-16">
            {/* Left Section with Image */}
            <div className="flex justify-center p-8">
              <div className="relative">
                <img
                  className="w-[600px] h-[350px] object-cover object-center"
                  src={image2} // Second image
                  alt="Our Team"
                />
                {/* Circle Image at the bottom */}
                <img
                  className="absolute top-[310px] bottom-0 left-[120px] transform -translate-x-1/2 w-24 h-20  object-contain" // Adjust size and position as needed
                  src={circleImage} // Circle image to overlay at the bottom
                  alt="Circle Overlay"
                />
              </div>
            </div>

            {/* Right Section with Text */}
            <div className="flex flex-col justify-center p-8">
              <h1 className="text-3xl font-bold text-[#232536]">
              Brand values or goals
              </h1>
              <h3 className="text-xl text-[#4C4C4C] font-semibold mt-4">
              Empowering Workplaces with Trust, Simplicity, and Innovation
              </h3>
              <p className="text-[#6D6E76] text-lg mt-4">
              At HR Cloud, our brand values are rooted in trust, simplicity, and innovation. We aim to build tools that empower HR teams and employees with transparent, easy-to-use solutions. Our goal is to streamline HR operations, enhance employee engagement, and support a culture of continuous growth and efficiency across organizations.
              </p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default AboutUs3;
