import React from "react";
import { pattern, arr_up } from "@/assets";
import Image from "next/image";

const Researcher = ({ key, myKey }) => {
  const handleJoin = async () => {
    console.log(myKey);
  };

  return (
    <div className="flex relative flex-col items-center justify-center w-[250px] h-[350px] rounded-[15px] border-[2px] border-dashed border-[#6F2232] bg-[#2f2f3472]">
      <div className="absolute right-[20px] top-[20px] border border-gray-700 glassmorphism cursor-pointer z-[20] p-[10px] rounded-[10px]">
        <Image src={arr_up} width={20} height={20} />
      </div>

      <div className="absolute w-full h-full rounded-[15px] overflow-hidden opacity-30 blur">
        <Image src={pattern} className="select-none" />
      </div>

      <button
        className="absolute bottom-[10px] text-[#747477] border-2 px-[20px] py-[5px] rounded-[8px] border-[#c3073f] text-[15px] hover:scale-110 hover:bg-[#c3073f] hover:text-[#1a1a1d] transition-all duration-150 ease-in-out font-medium"
        onClick={() => handleJoin()}
      >
        JOIN
      </button>
    </div>
  );
};

export default Researcher;
