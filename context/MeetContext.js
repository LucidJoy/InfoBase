import React, { createContext, useState } from "react";
import Web3 from "web3";

const CreateMeetContext = createContext({});

export const CreateMeetProvider = ({ children }) => {
  const [address, setAddress] = useState(null);
  const [toggleModal, setToggleModal] = useState(false);

  return (
    <CreateMeetContext.Provider
      value={{ address, setAddress, toggleModal, setToggleModal }}
    >
      {children}
    </CreateMeetContext.Provider>
  );
};

export default CreateMeetContext;
