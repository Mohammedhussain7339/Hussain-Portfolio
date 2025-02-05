import React from "react";
import Image from "next/image";
import projectimg1 from "../../../public/image/projectimg1.png";
import projectimg2 from "../../../public/image/projectimg2.png";
import projectimg3 from "../../../public/image/projectimg3.png";
import projectimg4 from "../../../public/image/projectimg4.png";
import { FaEye } from "react-icons/fa";

function page() {
  const navtext = [
    { name: "All" },
    { name: "Web Development" },
    { name: "Web Designer" },
    { name: "Application" },
  ];
  const project = [
    { projectimg: projectimg1, name: "Vowel", desc: "This is a Vowel project." },
    { projectimg: projectimg2, name: "Tasbi", desc: "This is a Tasbi project." },
    { projectimg: projectimg3, name: "Spacenote", desc: "This is a Spacenote project." },
    { projectimg: projectimg4, name: "TextTodo", desc: "This is a TextTodo project." },
  ];
  return (
    <div className="m-6">
      <h1 className="text-3xl">Portfolio</h1>
      <hr className="w-7 my-1 mb-3 h-[2px] bg-yellow-300" />
      <nav>
        <ul className="flex gap-3 text-xl sm:text-lg cursor-pointer">
          {navtext.map((item, index) => (
            <li key={index} className="hover:text-yellow-400">
              {item.name}
            </li>
          ))}
        </ul>
      </nav>
      <div className="flex flex-wrap gap-6 mt-6">
        {project.map((item, index) => (
          <div
            key={index}
            className="w-[290px] showeye relative cursor-pointer h-[260px] bg-black p-4 rounded-md shadow-md shadow-white hover:shadow-lg hover:shadow-white"
          >
            <div className="absolute hideeye  left-0 top-0 w-full h-full flex justify-center items-center">
            <FaEye className="text-3xl shadow-lg text-yellow-500" />
            </div>
            <Image
              className="rounded-sm"
              src={item.projectimg}
              alt={item.name}
              width={300}
              height={200}
            />
            <h4 className="mt-3 text-lg font-semibold text-white">{item.name}</h4>
            <p className="text-gray-300">{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default page;
