import React from "react";

import { Card } from "@/components";

const Hero = () => {
  return (
    <div className='text-white h-full w-full flex flex-row'>
      <div className='flex-1 flex items-center justify-center'>
        <Card btnName='Continue as Researcher' />
      </div>

      <div className='flex-1 flex items-center justify-center'>
        <Card btnName='Continue as Scholar' />
      </div>
    </div>
  );
};

export default Hero;
