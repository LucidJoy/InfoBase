import React, { useContext, useState } from "react";

import { Navbar } from "@/components";
import CreateMeetContext from "@/context/MeetContext";
import TableRow from "@/components/TableRow";

const funding = () => {
  const {
    fundingAmount,
    setFundingAmount,
    isFund,
    setIsFund,
    exploreResearchers,
  } = useContext(CreateMeetContext);

  const [poolAmount, setPoolAmount] = useState(0);

  return (
    <div>
      <Navbar explore />

      <div className='nav-h flex flex-col items-center'>
        <div className='flex flex-row relative items-center mt-[30px] '>
          <p className='text-center text-[30px] text-[#950740]'>POOL</p>
          <button
            className='w-[125px] h-[30px] left-[175px] absolute bg-[#c3073f] text-[#1a1a1d] rounded-[5px] font-semibold transition-all duration-150 ease-in-out'
            onClick={() => {
              setIsFund(!isFund);
            }}
          >
            Fund Pool
          </button>

          {isFund && (
            <div className='absolute top-[0px] left-[320px] h-fit w-fit flex flex-col items-center gap-[20px] bg-[#27272A] p-[20px] rounded-[10px] border border-gray-700'>
              <input
                type='number'
                className='h-[40px] w-[150px] text-white px-[10px] rounded-[10px]'
                min={0}
                onChange={(e) => {
                  setFundingAmount(e.target.value);
                }}
              />

              <button
                className='bg-[#950740] text-[#1a1a1d] px-[30px] py-[5px] rounded-[5px] font-medium uppercase transition-all duration-150 ease-in-out hover:bg-[#7b0534] hover:text-white text-[14px]'
                onClick={(e) => {
                  setPoolAmount(+fundingAmount + +poolAmount);
                  setIsFund(!isFund);
                  console.log(poolAmount);
                }}
              >
                Send
              </button>
            </div>
          )}
        </div>

        <div className='mt-[20px] w-[400px] h-[125px] bg-[#4e4e50] rounded-[15px] flex items-center justify-center text-[60px]'>
          <p className='text-[#fff] font-semibold animate-pulse'>
            ${poolAmount}
          </p>
        </div>

        <p className='text-center mt-[70px] text-[30px] text-[#ac2e4b]'>
          LEADERBOARD
        </p>

        <div className='mt-[20px] bg-[#4e4e50] text-white px-[50px] py-[30px] rounded-[15px]'>
          <table class='table-auto'>
            <thead>
              <tr>
                <th className='px-[20px] text-[20px] mb-[10px]'>Researcher</th>
                <th className='px-[20px] text-[20px] mb-[10px]'>Upvotes</th>
                <th className='px-[20px] text-[20px] mb-[10px]'>Amount</th>
                <th className='px-[20px] text-[20px] mb-[10px]'>Contribute</th>
              </tr>
            </thead>
            <tbody>
              {exploreResearchers?.map((element, i) => {
                return (
                  <TableRow
                    key={i}
                    myKey={Number(element.id._hex)}
                    element={element}
                  ></TableRow>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default funding;
