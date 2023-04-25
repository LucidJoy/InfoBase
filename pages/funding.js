import React, {useContext} from "react";

import { Navbar } from "@/components";
import TableRow from "@/components/TableRow";

import CreateMeetContext from "@/context/MeetContext";

const funding = () => {
  const {exploreResearchers} = useContext(CreateMeetContext);
  return (
    <div>
      <Navbar explore />

      <div className="h-[100vh] flex flex-col items-center">
        <p className="text-center mt-[90px] text-[30px] text-[#ac2e4b]">POOL</p>

        <div className="mt-[20px] w-[500px] h-[150px] bg-[#4e4e50] rounded-[15px] flex items-center justify-center text-[60px]">
          <p>$10,000</p>
        </div>

        <p className="text-center mt-[70px] text-[30px] text-[#ac2e4b]">
          LEADERBOARD
        </p>

        <div className="mt-[20px] bg-[#4e4e50] text-white px-[50px] py-[30px] rounded-[15px]">
          <table class="table-auto">
            <thead>
              <tr>
                <th className="px-[20px] text-[20px] mb-[10px]">Researcher</th>
                <th className="px-[20px] text-[20px] mb-[10px]">Upvotes</th>
                <th className="px-[20px] text-[20px] mb-[10px]">Amount</th>
                <th className="px-[20px] text-[20px] mb-[10px]">Contribute</th>
              </tr>
            </thead>
            <tbody>
              {exploreResearchers?.map((element, i) => {
                return (
                  <TableRow key={i} myKey={Number(element.id._hex)} element={element}></TableRow>
                )
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default funding;
