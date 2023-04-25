import React from "react";

import { Navbar } from "@/components";

const funding = () => {
  return (
    <div>
      <Navbar explore />

      <div className='h-[100vh] flex flex-col items-center'>
        <p className='text-center mt-[90px] text-[30px] text-[#950740]'>POOL</p>

        <div className='mt-[20px] w-[500px] h-[150px] bg-[#4e4e50] rounded-[15px] flex items-center justify-center text-[60px]'>
          <p>$10,000</p>
        </div>

        <p className='text-center mt-[70px] text-[30px] text-[#950740]'>
          LEADERBOARD
        </p>

        <div className='mt-[20px] bg-[#4e4e50] text-white px-[50px] py-[30px] rounded-[15px]'>
          <table class='table-auto'>
            <thead>
              <tr>
                <th className='px-[20px] text-[20px] mb-[10px]'>Researcher</th>
                <th className='px-[20px] text-[20px] mb-[10px]'>
                  No. of votes
                </th>
                <th className='px-[20px] text-[20px] mb-[10px]'>Anc</th>
                <th className='px-[20px] text-[20px] mb-[10px]'>Success</th>
              </tr>
            </thead>
            <tbody>
              <tr className=''>
                <td className='px-[20px]'>Researcher 1</td>
                <td className='px-[20px]'>10</td>
                <td className='px-[20px]'>$1</td>
              </tr>

              <tr>
                <td className='px-[20px]'>Researcher 2</td>
                <td className='px-[20px]'>20</td>
                <td className='px-[20px]'>$2</td>
              </tr>

              <tr>
                <td className='px-[20px]'>Researcher 3</td>
                <td className='px-[20px]'>30</td>
                <td className='px-[20px]'>$3</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default funding;
