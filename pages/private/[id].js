import React, { useContext, useEffect } from "react";
import { useRouter, Router } from "next/router";
import axios from "axios";
import Image from "next/image";
import { useLobby } from "@huddle01/react/hooks";

import { Navbar, SubscriberCard } from "@/components";
import CreateMeetContext from "@/context/MeetContext";
import { pattern } from "@/assets";

const Research = ({ roomId }) => {
  console.log("🏵️ ", roomId);
  const { researchCardAddr, setResearchCardAddr, address } =
    useContext(CreateMeetContext);

  const router = useRouter();
  const params = router.query.id?.toString();

  const { joinLobby } = useLobby("");

  useEffect(() => {
    setResearchCardAddr(params);
    console.log("🚨 ", params);
  }, params);

  // const handleCreateRoom = async () => {
  //   try {
  //     const response = await fetch("/api/createroom", {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify({
  //         title: "JOY",
  //       }),
  //     });

  //     const data = await response.json();
  //     console.log(data);
  //     // res.status(200).json(data);
  //   } catch (error) {}
  // };

  return (
    <div className='h-[100vh]'>
      <Navbar />

      <div className='w-full flex flex-col items-center mt-[20px]'>
        <p className='text-[25px] text-[#c3073f] font-semibold'>
          Private Interactions
        </p>

        <div className='flex flex-row gap-[50px]'>
          <button
            className='btn btn-outline border-[2px] px-[30px] text-[15px] border-[#950740] text-[#c3073f] hover:bg-[#950740] hover:border-[#950740] hover:text-[#1a1a1d] mt-[30px]'
            onClick={() => {
              joinLobby(roomId);
              router.push(`https://app.huddle01.com/${roomId}/lobby`);
            }}
          >
            join lobby
          </button>
          <button
            className='btn btn-outline border-[2px] px-[30px] text-[15px] border-[#950740] text-[#c3073f] hover:bg-[#950740] hover:border-[#950740] hover:text-[#1a1a1d] mt-[30px]'
            onClick={() =>
              router.push(`https://app.huddle01.com/${roomId}/lobby`)
            }
          >
            Create meet
          </button>
        </div>

        {/* <p className='text-white'>{researchCardAddr}</p> */}

        <div className='relative w-[500px] h-[450px] bg-[#6F2232] mt-[50px] rounded-[20px]'>
          <p className='text-[#fff] shadow-lg text-[18px] font-medium text-center py-[10px] z-20'>
            All subscribers
          </p>

          <div className=' px-[20px] mb-[10px] h-[380px] overflow-hidden overflow-y-scroll'>
            <SubscriberCard />
            <SubscriberCard />
            <SubscriberCard />
            <SubscriberCard />
            <SubscriberCard />
          </div>
        </div>
      </div>
    </div>
  );
};

export const getServerSideProps = async () => {
  try {
    const resp = await axios.post(
      "https://api.huddle01.com/api/v1/create-room",
      {
        title: "JOY",
        // roomLock: false,
      },
      {
        headers: {
          "Content-Type": "application/json",
          "x-api-key": process.env.NEXT_PUBLIC_HUDDLE_API_KEY,
        },
      }
    );

    const { data } = resp;

    const roomId = data.data.roomId;

    return {
      props: {
        roomId,
      },
    };
  } catch (error) {
    console.error("🏆🏆🏆 Error fetching data:", error);
    return {
      props: {
        roomId: null,
      },
    };
  }
};

export default Research;
