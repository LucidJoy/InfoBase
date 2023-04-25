import React from "react";

const TableRow = ({ key, myKey, element }) => {
    const handleFund = () => {
        console.log(myKey);
    }
  return (
    <tr className="">
      <td className="px-[20px]">{element.name}</td>
      <td className="px-[20px]">10</td>
      <td className="px-[20px]">$1,000</td>
      <td className="px-[20px] cursor-pointer text-[#fee15d] font-semibold" onClick={() => handleFund()}>
        FUND
      </td>
    </tr>
  );
};

export default TableRow;
