import React, { createContext, useState } from "react";
import Web3 from "web3";

const CreateMeetContext = createContext({});

export const CreateMeetProvider = ({ children }) => {
  const [address, setAddress] = useState(null);
  const [toggleModal, setToggleModal] = useState(false);
  const [form, setForm] = useState({
    alias: "",
    department: "",
    tokenSymbol: "",
    maxSupply: "",
  });

  return (
    <CreateMeetContext.Provider
      value={{
        address,
        setAddress,
        toggleModal,
        setToggleModal,
        form,
        setForm,
      }}
    >
      {children}
    </CreateMeetContext.Provider>
  );
};

export default CreateMeetContext;
