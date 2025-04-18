'use client'
import React, { useState } from 'react';
import { LuBookOpen } from "react-icons/lu";
import { FaLaptopCode, FaTools, FaCogs } from "react-icons/fa";
import { IoServerSharp } from "react-icons/io5";

const icons = [
  { name: 'Frontend', icon: FaLaptopCode },
  { name: 'Backend', icon: IoServerSharp },
  { name: 'Tools', icon: FaTools },
  { name: 'Softskills', icon: FaCogs },
];

const skillData = {
  Frontend: [
    { skill: 'HTML', percentage: 96 },
    { skill: 'CSS / Tailwind', percentage: 85 },
    { skill: 'JavaScript', percentage: 75 },
    { skill: 'React / Next-js', percentage: 85 },
  ],
  Backend: [
    { skill: 'Node.js', percentage: 80 },
    { skill: 'Express', percentage: 75 },
    { skill: 'MongoDB', percentage: 70 },
    { skill: 'API Design', percentage: 85 },
  ],
  Tools: [
    { skill: 'Git', percentage: 90 },
    { skill: 'Webpack', percentage: 75 },
    { skill: 'Docker', percentage: 60 },
    { skill: 'CI/CD', percentage: 70 },
  ],
  Softskills: [
    { skill: 'Communication', percentage: 90 },
    { skill: 'Teamwork', percentage: 85 },
    { skill: 'Adaptability', percentage: 80 },
    { skill: 'Problem Solving', percentage: 85 },
  ],
};

function Resume() {
  const [activeCategory, setActiveCategory] = useState('Frontend'); // State to track active category

  return (
    <div className="m-6 ">
      <h1 className="text-3xl">Resume</h1>
      <hr className="w-7 my-1 h-[2px] bg-yellow-300" />

      {/* Education Section */}
      <div className="flex items-center gap-5 relative my-6 cursor-pointer">
        <LuBookOpen className="text-lg" />
        <h2 className="text-xl">Education</h2>
      </div>
      <div className="flex gap-5">
        <div className="w-[1px] h-[210px] relative  bg-yellow-500 my-1">
          <div className="relative bg-orange-400 right-1 w-2 h-2 rounded-full cursor-pointer"></div>
          <div className="relative bg-orange-400 right-1 top-24 w-2 h-2 rounded-full cursor-pointer"></div>
          <div className="relative bg-orange-400  right-1 top-48 w-2 h-2 rounded-full cursor-pointer"></div>
        </div>
        <div className='  w-full '>
            <div className="mb-4 ">
              <h1>JECRC UNIVERSITY</h1>
              <h3 className="mx-1 text-gray-400 text-sm">2024 - 2026</h3>
              <p className="mx-1 text-gray-400 text-[14px] sm:w-[600px] ">
              "I am a student of JECRC University, pursuing MCA with a specialization in Full Stack Web Development with Cloud Computing through IBM."
</p>
            </div>
            <div className="mb-4">
              <h1>MDSU UNIVERSITY</h1>
              <h3 className="mx-1 text-gray-400 text-sm">2021 - 2024</h3>
              <p className="mx-1 text-gray-400 text-[14px] sm:w-[600px] ">
              "I completed my graduation in BCA from MDSU University, under the branch of Kuchaman College."</p>
            </div>
            <div className="mb-4">
              <h1>Samrat Prithviraj Sr Sec School</h1>
              <h3 className="mx-1 text-gray-400 text-sm">2021</h3>
              <p className="mx-1 text-gray-400 text-[14px] sm:w-[600px] ">
              "I completed my secondary education from Samrat Prithviraj Chouhan School, Makrana."</p>
            </div>
        </div>
      </div>

      {/* Experience Section */}
      <div className="flex items-center gap-5 my-6 cursor-pointer">
        <LuBookOpen className="text-lg" />
        <h2 className="text-xl">Experience</h2>
      </div>
      <div className="flex gap-3">
        <div className="w-2 h-2 rounded-full bg-orange-400 relative top-2"></div>
        <div>
          <h1 className="text-lg">Frontend Designer</h1>
          <h3 className="text-gray-400 text-sm mx-1">2024 - 2025</h3>
          <p className="text-gray-400  text-sm mx-1">
          "I am a Frontend Developer at Wabbit, working with React and Tailwind to build fully responsive and well-designed user interfaces."</p>
        </div>
      </div>

      {/* Skills Section */}
      <h1 className="text-2xl my-4">My Skills</h1>
      <hr className="mb-4 h-[2px] w-12 bg-yellow-400" />

      <div className="w-full h-[370px] border border-white bg-gray-600 rounded-md p-4">
        <div className="flex gap-4">
          {icons.map((item) => (
            <div
              key={item.name}
              className={`w-[160px] h-[70px] bg-gray-700 hover:text-yellow-700 rounded-md flex flex-col items-center justify-center cursor-pointer ${
                activeCategory === item.name ? 'text-yellow-700' : ''
              }`}
              onClick={() => setActiveCategory(item.name)}
            >
              <item.icon className="text-xl" />
              <span className="text-xl">{item.name}</span>
            </div>
          ))}
        </div>
        <div className="mt-6">
          {skillData[activeCategory].map((item, index) => (
            <div key={index} className="my-2">
              <h1>
                {item.skill} <span>{item.percentage}%</span>
              </h1>
              <input
                type="range"
                min={0}
                max={100}
                value={item.percentage}
                className="w-full"
                readOnly
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Resume;
