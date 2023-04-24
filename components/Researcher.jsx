import React, {useContext} from "react";
import { pattern, arr_up } from "@/assets";
import Image from "next/image";
import { useRouter } from "next/router";


import CreateMeetContext from "@/context/MeetContext";

const Researcher = ({ key, myKey, element }) => {
  const router = useRouter();
  const {join, address, mintTokens} = useContext(CreateMeetContext);

  const handleJoin = async () => {
    let tokenAddress = element.tokenAddress;
    let researcher = element.researcher;
    console.log("Token Address: ", element.tokenAddress);
    console.log("Researcher Address: ", element.researcher);
    console.log("Scholar Address: ", address);

    const mint = await mintTokens(tokenAddress);
    console.log("Minting response: ", mint);

    const response = await join(researcher);
    console.log("Response from joining", response);

    router.push("gated");
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
