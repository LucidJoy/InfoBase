import React, { useEffect, useState, useContext } from "react";
import { shortenAddress } from "@/utils/shortenAddr";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/router";

import CreateMeetContext from "@/context/MeetContext";

const ResearchPapers = ({ key, myKey, element }) => {
  const {
    getResearchPaperById,
    currentSuggestionsIds,
    setCurrentSuggestionsIds,
    currentSuggestionsSim,
    setCurrentSuggestionsSim,
    currentSuggestions,
    setCurrentSuggestions,
    currResearcherId,
    setCurrResearcherId,
    currPaper,
    setCurrPaper,
  } = useContext(CreateMeetContext);
  const [id, setId] = useState(0);

  const router = useRouter();

  const handleInfo = async () => {
    console.log(myKey);
    console.log("Research paper ID: ", Number(element.id._hex));
    console.log("hello");

    setCurrResearcherId(myKey);

    const response = await getResearchPaperById(myKey);
    console.log("Current paper: ", response);

    setCurrPaper(response);

    const res = await axios({
      method: "get",
      url: `https://infobase.onrender.com/docs_info/${myKey}`,
      withCredentials: false,
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json",
      },
    });
    // const res = await axios(`https://infobase.onrender.com/docs_info/${myKey}`);
    console.log(`API response for ${myKey} is `, res.data);

    const suggests = [];

    for (let i = 0; i < res.data.docs.length; i++) {
      let id = Number(res.data.docs[i]);
      console.log("IDs ", id);
      let temp = await getResearchPaperById(id);

      suggests.push(temp);
    }

    console.log("Temp suggests: ", suggests);

    setCurrentSuggestions(suggests);

    setCurrentSuggestionsIds(res.data.docs);
    setCurrentSuggestionsSim(res.data.sim);

    router.push("/info");
  };

  let el;

  useEffect(() => {
    setId(Number(element.id._hex));
  }, []);

  return (
    <div className='relative min-w-[250px] max-w-[250px]  h-[350px] rounded-[15px] border-[2px] border-dashed border-[#6F2232] bg-[#2f2f3472]'>
      <div className='flex flex-col justify-start p-[15px] gap-[5px]'>
        <p className='font-semibold text-[16px] text-white'>
          Profile ID:{" "}
          <span className='text-[14px] font-semibold text-[#ef3cff]'>
            {/* {element && Number(element)} */}
            {Number(element.id._hex)}
          </span>
        </p>
        <p className='font-semibold text-[16px] text-white'>
          Address:{" "}
          <span className='text-[14px] text-[#3eecff] font-semibold'>
            {/* {element && shortenAddress(element.researcher)} */}
            {shortenAddress(element.researcher)}
          </span>
        </p>
        <p className='font-semibold text-[16px] text-white'>
          Title:{"  "}
          <span className='text-[14px] font-normal text-[#A5ACBA]'>
            {element?.title}
          </span>
        </p>
        <p className='font-semibold text-[16px] text-white'>
          Description:{" "}
          <span className='text-[14px] font-normal text-[#A5ACBA]'>
            {element?.desc}
          </span>
        </p>
        <p className='font-semibold text-[16px] text-white'>
          Department:{" "}
          <span className='text-[14px] font-normal text-[#A5ACBA]'>
            {element?.department}
          </span>
        </p>
      </div>

      <div className=''>
        <Link
          href={{
            pathname: `/info`,
            query: { element },
          }}
          className='flex items-center justify-center'
        >
          INFO
        </Link>
      </div>
    </div>
  );
};

export default ResearchPapers;
