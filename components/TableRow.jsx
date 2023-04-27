import React, {useState, useContext, useEffect} from "react";
import CreateMeetContext from "@/context/MeetContext";
import { ethers, utils } from "ethers";


const TableRow = ({ key, myKey, element }) => {
  const [numberOf, setNumberOf] = useState(0);
  const [amount, setAmount] = useState(0);

  const {getTotalNumberOfDonors, getDonationPerResearcher} = useContext(CreateMeetContext);

    const handleFund = () => {
        console.log(myKey);
        console.log("All profiles: ", element);
    }

    useEffect(() => {
      (async () => {
        let result = await getTotalNumberOfDonors(element.researcher);
        result = Number(result._hex);
        console.log(Number(result._hex));
        
        setNumberOf(result);
      })();
    }, [myKey])

    useEffect(() => {
      (async () => {
        let result = await getDonationPerResearcher(element.researcher);
        result = utils.formatUnits(Number(result).toString());
        console.log(Number(result));
        
        setAmount(result);
      })();
    }, [myKey])

  return (
    <tr className="">
      <td className="px-[20px]">{element.name}</td>
      <td className="px-[20px]">{numberOf}</td>
      <td className="px-[20px]">{amount}</td>
      <td className="px-[20px] cursor-pointer text-[#fee15d] font-semibold" onClick={() => handleFund()}>
        FUND
      </td>
    </tr>
  );
};

export default TableRow;
