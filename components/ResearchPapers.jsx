import React from "react";
import { shortenAddress } from "@/utils/shortenAddr";

const ResearchPapers = ({key, myKey, element}) => {
    const handleInfo = async () => {
        console.log(myKey);
    };

  return (
    <div
      className="relative w-[250px] h-[350px] rounded-[15px] border-[2px] border-dashed border-[#6F2232] bg-[#2f2f3472]"
    >
      <div className="flex flex-col justify-start p-[15px] gap-[5px]">
        <p className="font-semibold text-[16px] text-white">
          Profile ID:{" "}
          <span className="text-[14px] font-normal text-[#A5ACBA]">
            {Number(element.profileId._hex)}
          </span>
        </p>
        <p className="font-semibold text-[16px] text-white">
          Address:{" "}
          <span className="text-[14px] font-normal text-[#A5ACBA]">
            {shortenAddress(element.researcher)}
          </span>
        </p>
        <p className="font-semibold text-[16px] text-white">
          Title:{"  "}
          <span className="text-[14px] font-normal text-[#A5ACBA]">
            {element.title}
          </span>
        </p>
        <p className="font-semibold text-[16px] text-white">
          Description:{" "}
          <span className="text-[14px] font-normal text-[#A5ACBA]">
            {element.desc}
          </span>
        </p>
        <p className="font-semibold text-[16px] text-white">
          Department:{" "}
          <span className="text-[14px] font-normal text-[#A5ACBA]">
            {element.department}
          </span>
        </p>
      </div>

      <div className="flex items-center justify-center">
        <button className="absolute bottom-[10px] text-[#747477] border-2 px-[20px] py-[5px] rounded-[8px] border-[#c3073f] text-[15px] hover:scale-110 hover:bg-[#c3073f] hover:text-[#1a1a1d] transition-all duration-150 ease-in-out font-medium" onClick={() => handleInfo()}>
          INFO
        </button>
      </div>
    </div>
  );
};

export default ResearchPapers;
