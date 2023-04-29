import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";

import {
  Navbar,
  Researcher,
  ResearchPapers,
  SuggestedCard,
} from "@/components";

const Info = () => {
  const router = useRouter();
  const [element, setElement] = useState({});

  useEffect(() => {
    if (!router.isReady) return;

    setElement(router.query);

    // setIsLoading(false);
  }, [router.isReady]);

  return (
    <div className='h-[100vh]'>
      <Navbar explore />

      <div className='p-[20px] bg-[#1a1a1d]'>
        <div className='flex h-full w-full'>
          <div className='flex-1 text-white w-[250px] flex justify-center items-center'>
            {element && <ResearchPapers element={element} />}
          </div>
          <div className='flex-1 text-white flex flex-col items-start justify-center'>
            <div className='w-[85%] flex flex-col gap-[12px] justify-center'>
              <div className='flex flex-row gap-[5px]'>
                <h3 className='font-bold text-[18px] text-[#c3073f] mr-[70px]'>
                  Title:
                </h3>
                <p>Lorem ipsum dolor</p>
              </div>
              <div className='flex flex-row gap-[5px]'>
                <h3 className='font-bold text-[18px] text-[#c3073f] mr-[5px]'>
                  Description:
                </h3>
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nisi
                  laboriosam rerum dolorem labore praesentium adipisci!
                </p>
              </div>
              <div className='flex flex-row gap-[5px]'>
                <h3 className='font-bold text-[18px] text-[#c3073f] mr-[80px]'>
                  Link:
                </h3>
                <p>Lorem ipsum dolor</p>
              </div>
            </div>
          </div>
        </div>

        <div className='mt-[70px] bg-[#1a1a1d]'>
          <p className='text-[#c3073f] text-[25px] font-medium'>Suggested</p>

          <div className='mt-[20px]'>
            <SuggestedCard />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Info;
