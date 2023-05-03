import React, { useEffect, useState, useContext } from "react";
import { useRouter } from "next/router";
import CreateMeetContext from "@/context/MeetContext";
import Link from "next/link";

import {
  Navbar,
  Researcher,
  ResearchPapers,
  SuggestedCard,
  currPaper,
  currResearcherId,
} from "@/components";

const Info = () => {
  const {
    getResearchPaperById,
    currentSuggestionsSim,
    currentSuggestions,
    currPaper,
    currResearcherId,
  } = useContext(CreateMeetContext);
  const router = useRouter();

  return (
    <div className="h-[100vh]">
      <Navbar explore />
      <div className="p-[20px] bg-[#1a1a1d]">
        <div className="flex h-full w-full">
          <div className="flex-1 text-white flex flex-col items-start justify-center">
            <div className="flex flex-row gap-[5px]">
              <h3 className="font-bold text-[18px] text-[#c3073f] mr-[70px]">
                Paper ID:
              </h3>
              <p>{Number(currPaper?.id?._hex)}</p>
            </div>
            <div className="flex flex-row gap-[5px]">
              <h3 className="font-bold text-[18px] text-[#c3073f] mr-[70px]">
                Title:
              </h3>
              <p>{currPaper?.title}</p>
            </div>
            <div className="flex flex-row gap-[5px]">
              <h3 className="font-bold text-[18px] text-[#c3073f] mr-[5px]">
                Description:
              </h3>
              <p>{currPaper?.desc}</p>
            </div>
            {/* <Link href={currPaper?.fileURI}> */}
            <div className="flex flex-row gap-[5px]">
              <h3 className="font-bold text-[18px] text-[#c3073f] mr-[80px]">
                Link:
              </h3>
              <p>{currPaper?.fileURI}</p>
            </div>
            {/* </Link> */}
          </div>
        </div>

        <div className="mt-[70px] bg-[#1a1a1d]">
          <p className="text-[#c3073f] text-[25px] font-medium">Suggested</p>
          {/* {console.log("Current suggestions: ",currentSuggestions)} */}
          <div className="flex space-x-4 mt-[20px]">
            {currentSuggestions.map((element, i) => {
              return (
                <SuggestedCard
                  key={i}
                  myKey={i}
                  element={element}
                  currentSuggestionsSim={currentSuggestionsSim}
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Info;
