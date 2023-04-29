import React from "react";
import { shortenAddress } from "@/utils/shortenAddr";

const SuggestedCard = ({ key, myKey, element, currentSuggestionsSim }) => {
  return (
    <div className="relative min-w-[250px] max-w-[250px]  h-[350px] rounded-[15px] border-[2px] border-dashed border-[#6F2232] bg-[#2f2f3472]">
      <div className="flex flex-col justify-start p-[15px] gap-[5px]">
        <p className="font-semibold text-[16px] text-white">
          SIMILARITY:{" "}
          <span className="text-[14px] font-semibold text-[#9aff3c]">
            {/* {element && Number(element)} */}
            {currentSuggestionsSim[myKey].toFixed(2)} %
          </span>
        </p>
        <p className="font-semibold text-[16px] text-white">
          Profile ID:{" "}
          <span className="text-[14px] font-semibold text-[#ef3cff]">
            {/* {element && Number(element)} */}
            {Number(element.profileId._hex)}
          </span>
        </p>
        <p className="font-semibold text-[16px] text-white">
          Address:{" "}
          <span className="text-[14px] text-[#3eecff] font-semibold">
            {/* {element && shortenAddress(element.researcher)} */}
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
    </div>
  );
};

export default SuggestedCard;
