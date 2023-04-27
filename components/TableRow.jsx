import React, { useContext } from "react";

import CreateMeetContext from "@/context/MeetContext";

const TableRow = ({ key, myKey, element }) => {
  const { leaderboardFund, setLeaderboardFund } = useContext(CreateMeetContext);

  const handleFund = () => {
    if (myKey == Number(element.id._hex)) {
      setLeaderboardFund(!leaderboardFund);
    }
  };

  const handleContribute = () => {
    if (myKey == Number(element.id._hex)) {
      setLeaderboardFund(!leaderboardFund);
    }
  };

  return (
    <>
      <tr className=''>
        <td className='px-[20px]'>{element.name}</td>
        <td className='px-[20px] text-center'>10</td>
        <td className='px-[20px] text-center'>$1,000</td>
        <td
          className='px-[20px] cursor-pointer text-[#fee15d] font-semibold text-center'
          onClick={() => handleFund()}
        >
          FUND
        </td>
      </tr>

      {leaderboardFund && (
        <div className='absolute w-fit h-fit p-[20px] bg-[#27272A] border border-gray-700 top-[500px] right-[150px] rounded-[10px]'>
          <div className='flex flex-col items-center gap-[20px]'>
            <input
              type='number'
              className='px-[10px] py-[8px] outline-none rounded-[5px]'
            />

            <button
              className='bg-[#950740] text-[#1a1a1d] w-fit px-[30px] py-[5px] rounded-[5px] font-semibold uppercase transition-all duration-150 ease-in-out hover:bg-[#7b0534] hover:text-white text-[14px]'
              onClick={() => handleContribute()}
            >
              Fund
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default TableRow;
