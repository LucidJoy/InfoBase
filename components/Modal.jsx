import React, { useContext } from "react";
import { useRouter } from "next/router";

import CreateMeetContext from "@/context/MeetContext";

const Modal = () => {
  const { setToggleModal } = useContext(CreateMeetContext);

  const router = useRouter();

  return (
    <div className='w-[500px] h-[400px] bg-[#1a1a1d] border border-[#313134] rounded-[20px] text-white flex flex-col items-start justify-between z-30 p-[20px] relative'>
      <button
        className='btn btn-square bg-[#6f2232] hover:bg-[#641f2d] absolute -right-[25px] -top-[25px]'
        onClick={() => setToggleModal(false)}
      >
        <svg
          xmlns='http://www.w3.org/2000/svg'
          className='h-6 w-6'
          fill='none'
          viewBox='0 0 24 24'
          stroke='#1a1a1d'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth='2'
            d='M6 18L18 6M6 6l12 12'
          />
        </svg>
      </button>

      <div className='flex flex-col gap-[4px]'>
        <p className='font-semibold text-[18px] text-[#c3073f]'>Alias:</p>
        <p className='font-semibold text-[18px] text-[#c3073f]'>Department:</p>
        <p className='font-semibold text-[18px] text-[#c3073f]'>
          Token Symbol:
        </p>
        <p className='font-semibold text-[18px] text-[#c3073f]'>Max Supply:</p>
      </div>

      <div className='flex items-center justify-center w-full'>
        <button className='btn bg-[#c3073f] text-[#1a1a1d] text-[15px] px-[50px] hover:bg-[#b00639] -mt-[20px]'>
          Create
        </button>
      </div>

      <div className='flex flex-col items-center justify-center w-full gap-[20px]'>
        <p>OR</p>

        <p
          className='text-[#767679] text-[14px] hover:text-[#9f9fa1] cursor-pointer transition-all duration-100 ease-in-out'
          onClick={() => router.push("explore")}
        >
          Continue as Scholar <span className='arrow'>&rarr;</span>
        </p>
      </div>
    </div>
  );
};

export default Modal;
