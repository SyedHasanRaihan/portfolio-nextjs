import Image from "next/image";
import React from "react";
import Modal from "../public/assets/projects/Modal.png";
import {RiRadioButtonFill} from 'react-icons/ri'
import Link from "next/link";

const modal = () => {
  return (
    <div className="w-full">
      <div className="w-screen h-[30vh] lg:h-[40vh] relative">
        <div className="absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/80 z-10"/>
        <Image className="absolute z-1 " layout="fill" objectFit="cover" src={Modal} alt='/'/>
        <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2">
          <h2 className="p-2">Modal</h2>
          <h3>React JS / Tailwind / Firebase</h3>
        </div>
      </div>
      <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8">
        <div className="col-span-4">
          <p>Project</p>
          <h2>OverView</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          <button className="px-8 py-2 mt-4 mr-8">Demo</button>
          <button className="px-8 py-2 mt-4">Code</button>
        </div>
        <div className="col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl p-4">
          <div className="p-2">
            <p className="text-center font-bold pb-2">Technologies</p>
          </div>
          <div className='grid grid-cols-3 md:grid-cols-1'>
            <p className="text-gray-600 py-2 flex items-center"><RiRadioButtonFill className="pr-1"/>React</p>
            <p className="text-gray-600 py-2 flex items-center"><RiRadioButtonFill className="pr-1"/>Tailwind</p>
            <p className="text-gray-600 py-2 flex items-center"><RiRadioButtonFill className="pr-1"/>Javascript</p>
            <p className="text-gray-600 py-2 flex items-center"><RiRadioButtonFill className="pr-1"/>Firebase</p>
            <p className="text-gray-600 py-2 flex items-center"><RiRadioButtonFill className="pr-1"/>Google API</p>
            <p className="text-gray-600 py-2 flex items-center"><RiRadioButtonFill className="pr-1"/>Zillow API</p>
          </div>
        </div>
      </div>
      <Link href='/#projects'>
        <p className="underline cursor-pointer p-4">Back</p>
      </Link>
    </div>
  );
};

export default modal;
