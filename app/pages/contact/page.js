'use client';
import { useState } from 'react';
import axios from 'axios';
import Image from 'next/image';
import contactimg from '../../../public/image/contactimg.jpg'

function Page() {
  // State for form fields
  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSignup = async (e) => {
    e.preventDefault();
    console.log(firstname, lastname, email, message);
    try {
      const res = await axios.post(
        'https://hussain-portfolio-d6u7.vercel.app/api/userinfo', // Corrected URL
        { firstname, lastname, email, message },
        { headers: { 'Content-Type': 'application/json' } }
      );
      alert('Signup successful');
      if (res.status === 201) {
        alert('Signup successful');
        setFirstname('');
        setLastname('');
        setEmail('');
        setMessage('');
  
      }
    } catch (error) {
      // Display specific error message
      if (error.response) {
        console.error('Server response:', error.response.data);
        alert(error.response.data.message || 'Signup failed');
      } else {
        console.error('Error:', error.message);
        alert('An error occurred. Please try again.');
      }
    }
  };

  return (
    <div className="m-6">
      <h1 className="text-3xl">Contact</h1>
      <hr className="w-7 my-1 mb-3 h-[2px] bg-yellow-300" />
      <div className="w-[95%] overflow-hidden h-[80%] rounded-lg">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1488.9046953756235!2d74.72872867970989!3d27.04248941919603!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396b9da9419c6b37%3A0x64022294ef336704!2sMRT%20MARKETING!5e1!3m2!1sen!2sin!4v1732973172940!5m2!1sen!2sin"
          width="1100"
          height="500"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
      <div className="mt-4 ">
        <h1 className="text-3xl">Contact Form</h1>
        <hr className="w-7 my-1 mb-3 h-[2px] bg-yellow-300" />
        <div className='w-full gap-2 h-auto flex'>
          <div className='w-[70%] '>
        <form className="w-[100%] flex flex-wrap gap-3 gap-y-5" onSubmit={handleSignup}>
          <input
            type="text"
            placeholder="First Name"
            value={firstname}
            onChange={(e) => setFirstname(e.target.value)}
            className="w-full xl:w-[49%]   bg-gray-600 shadow-lg rounded-lg p-3 outline-none"
          />
          <input
            type="text"
            placeholder="Last Name"
            value={lastname}
            onChange={(e) => setLastname(e.target.value)}
            className="w-full xl:w-[49%] bg-gray-600 shadow-lg rounded-lg p-3 outline-none"
          />
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full bg-gray-600 shadow-lg rounded-lg p-3 outline-none"
          />
          <textarea
            placeholder="Your Message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="w-full bg-gray-600 shadow-lg rounded-lg p-3 outline-none"
          ></textarea>
          <input
            type="submit"
            value="Submit"
            className="hover:bg-slate-500 cursor-pointer w-full bg-gray-600 shadow-lg rounded-lg p-3 outline-none"
          />
        </form>
        </div>
      <div className=' w-[250px] overflow-hidden rounded-md bg-black'>
        <Image className='h-[100%]' src={contactimg} alt='contact here' width={300} height={200} ></Image>
      </div>
      </div>
      </div>
    </div>
  );
}

export default Page;
