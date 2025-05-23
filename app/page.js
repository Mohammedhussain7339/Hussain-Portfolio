'use client'
import React, { useState } from "react";
import Image from "next/image";
import { MdOutlineEmail } from "react-icons/md";
import { IoPhonePortraitOutline } from "react-icons/io5";
import { MdOutlineCalendarMonth } from "react-icons/md";
import { IoLocationOutline } from "react-icons/io5";
import { FaInstagram } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { FaBars, FaTimes } from "react-icons/fa"; // Import hamburger and close icons
import Resume from "./pages/resume/page";
import Blog from "./pages/blog/page";
import Portfolio from "./pages/portfolio/page";
import About from "./pages/about/page";
import Contact from "./pages/contact/page";
import avtar from "./../public/image/avatar.png";

function Page() {
  const [activeIndex, setActiveIndex] = useState(0); // Set the active index
  const [menuOpen, setMenuOpen] = useState(false); // For toggling menu

  const icons = [
    { icons: FaInstagram, path: "", textcolor: "pink" },
    { icons: FaLinkedinIn, path: "", textcolor: "#0A66C2" },
    { icons: FaFacebookF, path: "", textcolor: "#0865FE" },
    { icons: FaGithub, path: "", textcolor: "gray" },
  ];

  const routes = [
    { id: 0, name: "About" },
    { id: 1, name: "Resume" },
    { id: 2, name: "Portfolio" },
    { id: 3, name: "Blog" },
    { id: 4, name: "Contact" },
  ];

  return (
    <div className="w-full sm:p-2 h-screen scrollbar-hidden sm:overflow-hidden text-white bg-black sm:py-10 justify-center sm:flex gap-3">
      {/* Mobile Navbar - keep this outside the <aside> */}
<nav className="w-full sm:hidden fixed top-0 z-50 bg-[rgba(0,0,0,0.6)] ">
  <div className="flex justify-between items-center p-4">
    <h1 className="text-xl font-bold">Menu</h1>
    <button onClick={() => setMenuOpen(!menuOpen)} className="text-white text-2xl">
      {menuOpen ? <FaTimes /> : <FaBars />}
    </button>
  </div>

  <ul
    className={`flex-col absolute top-16 w-full left-0 bg-gray-700 z-20 transition-all duration-300 ease-in-out ${
      menuOpen ? "flex" : "hidden"
    }`}
  >
    {routes.map((item, index) => (
      <li
        key={index}
        className={`cursor-pointer px-6 py-3 text-center ${
          activeIndex === index ? "text-yellow-300 underline" : "text-white"
        }`}
        onClick={() => {
          setActiveIndex(index);
          setMenuOpen(false);
        }}
      >
        {item.name}
      </li>
    ))}
  </ul>
</nav>

      <aside className="sm:rounded-xl sm:w-[300px]  h-full  bg-gray-900 scrollbar-hidden  overflow-scroll">


        <div className="w-full sm:my-0 my-8 flex flex-col items-center justify-center  p-10">
          <div className="w-[300px] flex flex-col items-center gap-3">
            <div className="w-36 h-36 bg-gray-500 rounded-2xl flex items-center justify-center">
              <Image alt="Avtar" priority src={avtar} width={100} />
            </div>
            <h1 className="text-2xl">Mohammed Hussain</h1>
            <div className="bg-gray-300 text-center rounded-md cursor-pointer px-3">
              Web Developer
            </div>
          </div>
          <hr className="w-[250px] my-10" />
          <div className="flex flex-col gap-6">
            <div className="flex gap-5 items-center cursor-pointer">
              <i className="text-2xl text-yellow-600">
                <MdOutlineEmail />
              </i>
              <div>
                <h5>Email</h5>
                <h3>mohammedhussain7339@g...</h3>
              </div>
            </div>
            <div className="flex gap-5 items-center cursor-pointer">
              <i className="text-2xl text-yellow-600">
                <IoPhonePortraitOutline />
              </i>
              <div>
                <h5>Phone</h5>
                <h3>+91-7339750916</h3>
              </div>
            </div>
            <div className="flex gap-5 items-center cursor-pointer">
              <i className="text-2xl text-yellow-600">
                <MdOutlineCalendarMonth />
              </i>
              <div>
                <h5>BIRTHDAY</h5>
                <h3>December 14, 2004</h3>
              </div>
            </div>
            <div className="flex gap-5 items-center cursor-pointer">
              <i className="text-2xl text-yellow-600">
                <IoLocationOutline />
              </i>
              <div>
                <h5>Location</h5>
                <h3>Jaipur, Rajasthan</h3>
                <h3>India</h3>
              </div>
            </div>
            <div>
              <ul className="flex items-center justify-center gap-5 text-2xl cursor-pointer">
                {icons.map((item, index) => (
                  <li
                    key={index}
                    style={{ color: item.textcolor }}
                    className="hover:scale-110 transition-transform p-1 shadow-md shadow-white rounded-lg"
                  >
                    <item.icons />
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </aside>
      <main className="sm:w-[70%] w-full h-[100%] bg-gray-700 sm:rounded-xl relative scrollbar-hidden  overflow-scroll">
        <nav className="min-w-[50%] z-10 h-16 bg-gray-500 right-[80px] sm:visible invisible rounded-tr-xl rounded-bl-xl xl:fixed sticky">
          <ul className="flex justify-evenly items-center h-full">
            {routes.map((item, index) => (
              <li
                key={index}
                className={`cursor-pointer ${
                  activeIndex === index ? "text-yellow-300 underline " : "text-white"
                }`} // Highlight active route
                onClick={() => setActiveIndex(index)} // Update activeIndex
              >
                {item.name}
              </li>
            ))}
          </ul>
        </nav>
        <div>
          {activeIndex === 0 && <About />}
          {activeIndex === 1 && <Resume />}
          {activeIndex === 2 && <Portfolio />}
          {activeIndex === 3 && <Blog />}
          {activeIndex === 4 && <Contact />}
        </div>
      </main>
    </div>
  );
}

export default Page;
