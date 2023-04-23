import React from "react";

const Navbar = ({ funding, explore }) => {
  return (
    <div className='flex flex-row justify-between z-50 items-center px-[20px] py-[14px] border-b border-b-[#48484aa5] sticky w-full'>
      <div className='text-white py-[10px]'>Navbar</div>

      {funding && (
        <button className='btn btn-outline border-[2px] px-[30px] text-[15px] border-[#950740] text-[#c3073f] hover:bg-[#950740] hover:border-[#950740] hover:text-[#1a1a1d]'>
          FUNDING
        </button>
      )}

      {explore && (
        <div className='flex flex-row gap-[20px]'>
          <button className='btn btn-outline border-[2px] px-[30px] text-[15px] border-[#950740] text-[#c3073f] hover:bg-[#950740] hover:border-[#950740] hover:text-[#1a1a1d]'>
            Explore
          </button>
          <button className='btn btn-outline border-[2px] px-[30px] text-[15px] border-[#950740] text-[#c3073f] hover:bg-[#950740] hover:border-[#950740] hover:text-[#1a1a1d]'>
            Dashboard
          </button>
          <button className='btn btn-outline border-[2px] px-[30px] text-[15px] border-[#950740] text-[#c3073f] hover:bg-[#950740] hover:border-[#950740] hover:text-[#1a1a1d]'>
            Fund
          </button>
        </div>
      )}
    </div>
  );
};

export default Navbar;
