import React, { useContext, useEffect, useRef } from "react";
import { useRouter, Router } from "next/router";
import axios from "axios";
import Image from "next/image";

import { useEventListener, useHuddle01 } from "@huddle01/react";
import { Audio, Video } from "@huddle01/react/components";
import { useRecording } from "@huddle01/react/hooks";

import {
  useAudio,
  useLobby,
  useMeetingMachine,
  usePeers,
  useRoom,
  useVideo,
} from "@huddle01/react/hooks";

import { Navbar, SubscriberCard } from "@/components";
import CreateMeetContext from "@/context/MeetContext";
import { pattern } from "@/assets";
import { shortenAddress } from "@/utils/shortenAddr";

const Research = ({ roomId }) => {
  const videoRef = useRef(null);

  const { state, send } = useMeetingMachine();

  useEventListener("lobby:cam-on", () => {
    if (state.context.camStream && videoRef.current)
      videoRef.current.srcObject = state.context.camStream;
  });

  // console.log("🏵️ ", roomId);
  const { researchCardAddr, setResearchCardAddr, address } =
    useContext(CreateMeetContext);

  const { initialize, isInitialized } = useHuddle01();
  const { joinLobby } = useLobby();
  const {
    fetchAudioStream,
    produceAudio,
    stopAudioStream,
    stopProducingAudio,
    stream: micStream,
  } = useAudio();
  const {
    fetchVideoStream,
    produceVideo,
    stopVideoStream,
    stopProducingVideo,
    stream: camStream,
  } = useVideo();
  const { joinRoom, leaveRoom } = useRoom();
  const { startRecording, stoprecording, isStarting, inProgress, error } =
    useRecording();

  const { peers } = usePeers();

  const router = useRouter();
  const params = router.query.id?.toString();

  useEffect(() => {
    setResearchCardAddr(params);
    console.log("🚨 ", params);
  }, params);

  useEffect(() => {
    initialize(process.env.NEXT_PUBLIC_HUDDLE_PROJECT_ID);
  }, []);

  return (
    <div className='h-[100vh]'>
      <Navbar />

      <div className='w-full flex flex-col items-center mt-[20px] bg-[#1a1a1d]'>
        <p className='text-[25px] text-[#c3073f] font-semibold'>
          Private Interactions
        </p>

        <div className='flex flex-row gap-[50px]'>
          <button
            className='btn btn-outline border-[2px] px-[30px] text-[15px] border-[#950740] text-[#c3073f] hover:bg-[#950740] hover:border-[#950740] hover:text-[#1a1a1d] mt-[30px]'
            onClick={() => {
              initialize("KL1r3E1yHfcrRbXsT4mcE-3mK60Yc3YR");
              joinLobby(roomId);
            }}
          >
            join lobby
          </button>
          <button
            className='btn btn-outline border-[2px] px-[30px] text-[15px] border-[#950740] text-[#c3073f] hover:bg-[#950740] hover:border-[#950740] hover:text-[#1a1a1d] mt-[30px]'
            onClick={fetchVideoStream}
            // disabled={!fetchVideoStream.isCallable}
          >
            fetch video
          </button>

          <button
            // disabled={!produceVideo.isCallable}
            className='btn btn-outline border-[2px] px-[30px] text-[15px] border-[#950740] text-[#c3073f] hover:bg-[#950740] hover:border-[#950740] hover:text-[#1a1a1d] mt-[30px]'
            onClick={stopVideoStream}
          >
            Stop video
          </button>
          {/* <button
            className='btn btn-outline border-[2px] px-[30px] text-[15px] border-[#950740] text-[#c3073f] hover:bg-[#950740] hover:border-[#950740] hover:text-[#1a1a1d] mt-[30px]'
            onClick={() => fetchAudioStream()}
            // disabled={!fetchAudioStream.isCallable}
          >
            fetchaudio
          </button> */}
          <button
            className='btn btn-outline border-[2px] px-[30px] text-[15px] border-[#950740] text-[#c3073f] hover:bg-[#950740] hover:border-[#950740] hover:text-[#1a1a1d] mt-[30px]'
            onClick={() => joinRoom()}
          >
            join room
          </button>
          {/* <button
            className='btn btn-outline border-[2px] px-[30px] text-[15px] border-[#950740] text-[#c3073f] hover:bg-[#950740] hover:border-[#950740] hover:text-[#1a1a1d] mt-[30px]'
            onClick={() =>
              router.push(`https://app.huddle01.com/${roomId}/lobby`)
            }
          >
            Create meet
          </button> */}
        </div>

        <div className='py-[20px]'>
          <p className='mb-[10px] font-medium text-[16px]'>
            Researcher address:
            <span className='text-white ml-[5px]'>
              {shortenAddress(researchCardAddr)}
            </span>
          </p>
          <video
            className='rounded-[15px]'
            ref={videoRef}
            autoPlay
            muted
          ></video>
          <div className='grid grid-cols-4'>
            {Object.values(peers)
              .filter((peer) => peer.cam)
              .map((peer) => (
                <Video
                  key={peer.peerId}
                  peerId={peer.peerId}
                  track={peer.cam}
                  debug
                />
              ))}
            {Object.values(peers)
              .filter((peer) => peer.mic)
              .map((peer) => (
                <Audio
                  key={peer.peerId}
                  peerId={peer.peerId}
                  track={peer.mic}
                />
              ))}
          </div>
        </div>

        {/* <p className='text-white'>{researchCardAddr}</p> */}

        {/* <div className='relative w-[500px] h-[450px] bg-[#6F2232] mt-[50px] rounded-[20px]'>
          <p className='text-[#fff] shadow-lg text-[18px] font-medium text-center py-[10px] z-20'>
            All subscribers
          </p> */}

        {/* <div className=' px-[20px] mb-[10px] h-[380px] overflow-hidden overflow-y-scroll'> */}
        {/* <SubscriberCard />
            <SubscriberCard />
            <SubscriberCard />
            <SubscriberCard />
            <SubscriberCard /> */}
        {/* </div> */}
        {/* </div> */}
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
