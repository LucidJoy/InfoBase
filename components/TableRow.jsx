import React, { useState, useContext, useEffect } from "react";
import CreateMeetContext from "@/context/MeetContext";
import { ethers, utils } from "ethers";

const TableRow = ({ key, myKey, element }) => {
  const {
    leaderboardFund,
    setLeaderboardFund,
    getTotalNumberOfDonors,
    getDonationPerResearcher,
  } = useContext(CreateMeetContext);

  const [numberOf, setNumberOf] = useState(0);
  const [amount, setAmount] = useState(0);

  const handleFund = () => {
    if (myKey === Number(element.id._hex)) {
      setLeaderboardFund(!leaderboardFund);
    }
  }

  const handleContribute = () => {
    // if (myKey === Number(element.id._hex)) {
    //   setLeaderboardFund(!leaderboardFund);
    // }
    console.log(myKey);
  };

  useEffect(() => {
    (async () => {
      let result = await getTotalNumberOfDonors(element.researcher);
      result = Number(result._hex);
      console.log(Number(result._hex));

      setNumberOf(result);
    })();
  }, [myKey]);

  useEffect(() => {
    (async () => {
      let result = await getDonationPerResearcher(element.researcher);
      result = utils.formatUnits(Number(result).toString());
      console.log(Number(result));

      setAmount(result);
    })();
  }, [myKey]);

  return (
    <>
      <tr className=''>
        <td className='px-[20px]'>{element.name}</td>
        <td className='px-[20px]'>{numberOf}</td>
        <td className='px-[20px]'>{amount} tFil</td>
        <td
          className='px-[20px] cursor-pointer text-[#fee15d] font-semibold'
          onClick={() => handleContribute()}
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
              onClick={() => handleFund()}
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
