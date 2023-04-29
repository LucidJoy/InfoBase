import React, { useState, useContext, useEffect } from "react";
import CreateMeetContext from "@/context/MeetContext";
import { ethers, utils } from "ethers";

const TableRow = ({ key, myKey, element }) => {
  const {
    leaderboardFund,
    setLeaderboardFund,
    getTotalNumberOfDonors,
    getDonationPerResearcher,
    getProfileById,
    fundProfile
  } = useContext(CreateMeetContext);

  const [numberOf, setNumberOf] = useState(0);
  const [amount, setAmount] = useState(0);

<<<<<<< HEAD
  const handleFund = () => {
    if (myKey === Number(element.id._hex)) {
      setLeaderboardFund(!leaderboardFund);
    }
  };
=======
  const [researcherDonationAmt, setResearcherDonationAmt] = useState(0);
  const [researcherAddr, setResearcherAddr] = useState('');

  const handleDonation = async (e) => {
    console.log(`Donation to ${myKey} value: ${e.target.value}`);
    setResearcherDonationAmt(e.target.value);

    const response = await getProfileById(myKey);
    console.log("Profile clicked: ", response);

    setResearcherAddr(response.researcher);
  }

  const handleContribute = async () => {
    console.log("Donation to researcher no. :", myKey);
    const response = await fundProfile(researcherAddr, researcherDonationAmt);

>>>>>>> 8b8f228cbb668ad5cd8a124f584ca04d14a3c8be

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
          className='px-[20px] cursor-pointer '
        >
          <input type="integer" className="w-20 mr-2 ml-3 pl-1" onChange={(e) => handleDonation(e)}/>
          <span className="text-[#fee15d] font-semibold" onClick={() => handleContribute()}>FUND</span>
        </td>
      </tr>
    </>
  );
};

export default TableRow;
