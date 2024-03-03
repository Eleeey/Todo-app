import Image from "next/image";
import React from "react";
import Task from "./Task";

const Sidebar = () => {
  return (
    <div className="bg-white  w-[45%] ">
      {/* Go Pro Banner */}
      <div className="w-full h-[6rem] flex  flex-row px-[2rem] py-[1rem] bg-[#3556AB]">
        <Image src={"/Ellipse 2.png"} alt={""} width={30} height={15} />
        <div className="flex flex-col ml-1">
          <p className="text-white text-[12px] ">Hello,John</p>
          <p className="text-[12px] italic">What are your plans for today</p>
        </div>
      </div>

      {/* go pro Banner */}
      <div className="flex flex-row bg-[#CDE53D] items-center justify-center text-gray-800 p-2 mb-4 rounded-md text-center">
        <Image src={"/image2.png"} alt={""} width={25} height={22} />
        <p className="text-[12px] mx-3 font-semibold">Go Pro Upgrade Now</p>
        <p className="w-[2rem] h-[2rem] text-center text-[#F2C94C] ml-[10%] p-1 text-[12px] relative -top-3 xl:-top-2 bg-[#071D55]">
          $1
        </p>
      </div>

      <Task task={"Training at the Gym"} />
      <Task task={"Play Paddle With Friends"} />
      <Task task={"Burger BBQ With Family"} />
    </div>
  );
};

export default Sidebar;
