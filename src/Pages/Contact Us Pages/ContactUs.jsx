import React from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

function ContactUs() {
  return (
    <>
      <Navbar />
      <section className="py-12 px-6">
        {/* Header Section */}
        <div className="text-center mb-10">
          <h3 className="text-sm font-semibold text-gray-600 uppercase mb-2">
            Contact Us
          </h3>
          <h1 className="text-4xl font-bold text-[#232536] mb-4">
            Let’s Start a Conversation
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>

        {/* Company Contact Info */}
        <div className="bg-[#592EA9] text-white p-8 md:p-16 rounded-lg mb-10 max-w-5xl mx-auto grid md:grid-cols-3 gap-8">
          <div>
            <h4 className="text-sm text-gray-300 mb-2">Working Hours</h4>
            <p className="font-bold text-lg">Mon - Fri: 9:00 AM - 8:00 PM</p>
            <p className="text-sm text-gray-300 mt-2">
              Support: 24/7 Available
            </p>
          </div>
          <div>
            <h4 className="text-sm text-gray-300 mb-2">Contact Info</h4>
            <p className="font-bold text-lg">020 7993 2905</p>
            <p className="text-sm text-gray-300">hello@finsweet.com</p>
            <p className="text-sm text-gray-300 mt-2">
              123 Street Name, City, Country
            </p>
          </div>
          <div>
            <h4 className="text-sm text-gray-300 mb-3">Follow Us</h4>
            <div className="flex space-x-6">
            {/* Facebook SVG icon */}
            <a href="#facebook" aria-label="Facebook" className="hover:text-white">
              {/* <img src={facbook} alt="Facebook" className="hover:text-white w-6 h-6" /> */}
              <i className="fab fa-facebook"></i>
            </a>
            {/* Other social media icons */}
            <a href="#twitter" aria-label="Twitter" className="hover:text-white">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#instagram" aria-label="Instagram" className="hover:text-white">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="#linkedin" aria-label="LinkedIn" className="hover:text-white">
              <i className="fab fa-linkedin-in"></i>
            </a>
          </div>
          </div>
        </div>
        {/* Embedded Map */}
        <div className="max-w-5xl mx-auto mb-4">
              <iframe
                title="Our Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3105.0015956075876!2d-77.03687028464859!3d38.89767627957081!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x9c7d6f3f52d6c9f1!2sWhite%20House!5e0!3m2!1sen!2sus!4v1600000000000!5m2!1sen!2sus"
                className="w-full h-80 border-0"
                allowFullScreen=""
                loading="lazy"
              ></iframe>
            </div>

        {/* Contact Form */}
        <div className="max-w-3xl mx-auto">
          <form className="space-y-6">
            <input
              type="text"
              placeholder="Full Name"
              className="w-full px-4 py-3 border border-gray-300 focus:outline-none focus:border-[#7A40F2] text-[#232536]"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full px-4 py-3 border border-gray-300 focus:outline-none focus:border-[#7A40F2]"
            />
            <input
              type="tel"
              placeholder="Phone Number"
              className="w-full px-4 py-3 border border-gray-300 focus:outline-none focus:border-[#7A40F2]"
            />
            <input
              type="text"
              placeholder="Address Line 1"
              className="w-full px-4 py-3 border border-gray-300 focus:outline-none focus:border-[#7A40F2]"
            />
            <select
              className="w-full px-4 py-3 border border-gray-300 focus:outline-none focus:border-[#7A40F2] text-gray-600"
              defaultValue=""
            >
              <option value="" disabled>
                Query Related
              </option>
              <option value="general">General Inquiry</option>
              <option value="support">Support</option>
              <option value="sales">Sales</option>
            </select>
            <textarea
              placeholder="Message"
              className="w-full px-4 py-3 border border-gray-300 focus:outline-none focus:border-[#7A40F2] h-32"
            ></textarea>
            
            <button
              type="submit"
              className="w-full py-3 bg-[#FFD050] text-[#232536] font-semibold hover:bg-[#e6c044] transition mb-5"
            >
              Send Message
            </button>
          </form>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default ContactUs;
