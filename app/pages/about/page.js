import React from 'react'
import { FaLaptopCode } from "react-icons/fa6";
import { IoServer } from "react-icons/io5";
import { IoQrCodeSharp } from "react-icons/io5";
import { FaCameraRetro } from "react-icons/fa";
import Image from 'next/image';
import logo from '../../../public/image/logo1.png'
function page() {
  const skill=[
    {icon:FaLaptopCode, name:"Web Designer" ,content:'A creative visionary who crafts visually appealing and user-friendly websites.'},
    {icon:IoServer, name:"Web Developer " ,content:'An analytical problem-solver who builds efficient and scalable web applications.'},
    {icon:IoQrCodeSharp, name:"App Developer" ,content:'A logical thinker who develops innovative and functional mobile applications.'},
    {icon:FaCameraRetro, name:"Photography" ,content:'An artistic professional capturing moments with creativity and precision.'},
  ]
  return (
    <div className="m-6">
      <h1 className="text-3xl">About Me</h1>
      <hr className="w-7 my-1 h-[2px] bg-yellow-300" />
      <div className='mb-4'>
        <p className='mb-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente quaerat sequi debitis eligendi aliquid iure dolor placeat nam minus accusantium adipisci earum, dolore dolorum nihil facilis quod corporis laborum eveniet.</p>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nam natus voluptates illum perspiciatis, beatae sunt, odio, temporibus enim nulla aperiam atque consectetur eum explicabo exercitationem! A recusandae aliquid consequatur laudantium odit fugit accusantium deleniti explicabo quis consequuntur nam, voluptatem eligendi distinctio voluptates ipsa similique, sed cum corporis cupiditate possimus amet?</p>
      </div>
      <h1 className='text-2xl font-bold mb-3'>What I'm Doing</h1>
      <div className='flex flex-wrap gap-7 mb-4'>
        {skill.map((item,index)=>
          
          ( 
            <div key={index} className='bg-gray-900 gap-8 w-[400px] h-[150px] px-6 rounded-md flex justify-evenly items-center'>
            <div className='text-[50px] text-yellow-500 cursor-pointer'>{<item.icon/>}</div>
            <div>
              <h1 className='font-bold text-xl'>{item.name}</h1>
              <p className='text-gray-500'>{item.content} </p>
            </div>
          </div>
  
          ))}
      </div>
      <h1 className='text-2xl'>Client's</h1>
      <hr className="w-7 my-1 h-[2px] bg-yellow-300" />
        <div className='flex flex-wrap'>
          <Image alt='logo' className='cursor-pointer' src={logo} width={200}></Image>
          <Image alt='logo' className='cursor-pointer' src={logo} width={200}></Image>
          <Image alt='logo' className='cursor-pointer' src={logo} width={200}></Image>
          <Image alt='logo' className='cursor-pointer' src={logo} width={200}></Image>
        </div>
    </div>
  )
}

export default page
