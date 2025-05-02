import React from "react";

// Import images
import image1 from "../../assets/assets/Client-First - IMAGES/photo-of-woman-looking-at-man-3183173.svg";
import image2 from "../../assets/assets/Client-First - IMAGES/photo-of-people-walking-on-hallway-3182811.svg";
import image3 from "../../assets/assets/Client-First - IMAGES/photo-of-people-doing-handshakes-3183197.svg";
import image4 from "../../assets/assets/Client-First - IMAGES/two-women-in-front-of-dry-erase-board-1181533-1.svg";

function Services2() {
  const posts = [
    { image: image4, category: "Employee Onboarding", title: "Simplified onboarding process", description: "Digitize and streamline new employee onboarding for a smooth start from day one." },
    { image: image3, category: "Attendance Tracking", title: "Real-time tracking system", description: "Track attendance and manage leave requests in real time with ease and accuracy." },
    { image: image1, category: "Performance Reviews", title: "Structured feedback tools", description: "Conduct structured performance evaluations to boost employee growth and productivity." },
    { image: image2, category: "Payroll Management", title: "Automated payroll system", description: "Automate payroll processes and ensure timely, error-free salary disbursements." },
  ];

  return (
    <section className="px-6 py-12">
      <div className="max-w-1xl mx-auto pl-9">
        <h1 className="text-4xl font-bold text-black mb-11">All Services</h1>

        {/* Loop through each post */}
        {posts.map((post, index) => (
          <div key={index} className="flex items-start mb-11">
            {/* Post Image */}
            <img
              src={post.image}
              alt="Post"
              className="w-[550px] h-[290px] object-cover mr-4"
            />

            {/* Post Content */}
            <div className="ml-5">
              <p className="text-sm font-semibold text-[#592EA9] mt-5">
                {post.category}
              </p>
              {/* Use dangerousInnerHTML to parse <br /> properly in title */}
              <h1
                className="text-3xl font-bold text-black mt-3"
                dangerouslySetInnerHTML={{ __html: post.title }}
              />
              {/* Use dangerousInnerHTML for description to handle <br /> */}
              <p className="text-gray-600 mt-3" dangerouslySetInnerHTML={{ __html: post.description }} />
              <button className="px-10 py-2 bg-[#FFD050] text-[#232536]  font-semibold hover:bg-[#492491] hover:text-white transition duration-300 mt-4">
              Check Now
          </button>
            </div>
          </div>
        ))}

        {/* Centered Navigation Buttons */}
        <div className="flex justify-center space-x-4 mt-8">
          <button className="font-semibold text-gray-500  py-2 ">
            &lt; Prev
          </button>
          <button className="font-semibold text-[#232536]  py-2 ">
            Next &gt;
          </button>
        </div>
      </div>
    </section>
  );
}

export default Services2;
