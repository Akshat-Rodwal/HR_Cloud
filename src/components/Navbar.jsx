import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react"; // Make sure this is installed

function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  return (
    <nav className="relative flex items-center justify-between px-6 md:px-12 py-3 bg-[#232536] z-50">
      {/* Logo */}
      <div className="text-white font-bold text-2xl mr-auto">
        {"HR"}<span className="text-[#FFD050]">{" Cloud"}</span>
      </div>


      {/* Desktop Menu */}
      <div className="hidden md:flex items-center space-x-8 text-gray-300 mr-4">
        <NavLink to="/" className={({ isActive }) => isActive ? "text-white font-bold" : "hover:text-white"}>Home</NavLink>
        <NavLink to="/blog" className={({ isActive }) => isActive ? "text-white font-bold" : "hover:text-white"}>Services</NavLink>
        <NavLink to="/aboutUs" className={({ isActive }) => isActive ? "text-white font-bold" : "hover:text-white"}>About Us</NavLink>
        <NavLink to="/contactUs" className={({ isActive }) => isActive ? "text-white font-bold" : "hover:text-white"}>Contact Us</NavLink>
      </div>

      {/* Mobile Hamburger Icon */}
      <div className="md:hidden ml-auto">
        <button onClick={toggleMobileMenu} className="text-white focus:outline-none">
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Sliding Menu */}
      <div className={`fixed top-0 right-0 h-full w-[75%] max-w-xs bg-[#232536] z-50 transform transition-transform duration-300 ease-in-out ${
        isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
      }`}>
        <div className="flex flex-col h-full">
          {/* Close Button inside menu */}
          <div className="flex justify-end p-4">
            <button onClick={toggleMobileMenu} className="text-white">
              <X size={28} />
            </button>
          </div>

          
          {/* Menu Items */}
          <div className="flex flex-col px-6 space-y-6 text-white">
            <NavLink to="/" onClick={toggleMobileMenu} className="hover:text-[#FFD050]">Home</NavLink>
            <NavLink to="/blog" onClick={toggleMobileMenu} className="hover:text-[#FFD050]">Services</NavLink>
            <NavLink to="/aboutUs" onClick={toggleMobileMenu} className="hover:text-[#FFD050]">About Us</NavLink>
            <NavLink to="/contactUs" onClick={toggleMobileMenu} className="hover:text-[#FFD050]">Contact Us</NavLink>

            

          </div>
        </div>
        
      </div>
      <button className="ml-3 mr-3 bg-white text-[#232536] font-semibold px-4 py-2 hover:bg-[#FFD050]">
              Sign up
            </button>
            <button className="bg-[#FFD050] text-[#232536] font-semibold px-4 py-2 hover:bg-[#492491] hover:text-white">
              Login
            </button>
    </nav>
  );
}

export default Navbar;
