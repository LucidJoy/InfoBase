import React, { createContext, useState, useEffect } from "react";
import Web3 from "web3";
import meetSciNFTAbi from "./MeetSciNFT.json"
import { ethers } from "ethers";
import Web3Modal from "web3modal";
import { useRouter } from "next/router";

const CreateMeetContext = createContext({});

const meetSciContractAddress = "";
const nftContractAddress = "0xE65a35704e6DdF2b93caBBa149F917694B4d4dC0";
const accessListContractAddress = "";

const meetSciAbi = "";
const nftAbi = meetSciNFTAbi.abi;
const accessListAbi = "";
const tokenAbi = "";

export const CreateMeetProvider = ({ children }) => {
  const [address, setAddress] = useState("");
  const [toggleModal, setToggleModal] = useState(false);
  const [isModal, setIsModal] = useState(false);
  const [authentication, setAuthentication] = useState(false);
  const [isSubscribed, setIsSubscribed] = useState(false);

  const router = useRouter();

  const checkIfWalletIsConnected = async () => {
    try {
      if (!window.ethereum) return alert("Please install MetaMask.");

      const accounts = await window.ethereum.request({
        method: "eth_accounts",
      });

      if (accounts.length) {
        setAddress(accounts[0]);
      } else {
        console.log("No accounts found.");
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    (async () => {
      await checkIfWalletIsConnected();
    })();
  }, []);

  const connectWallet = async () => {
    if (!window.ethereum) return alert("Please install MetaMask.");

    const accounts = await window.ethereum.request({
      method: "eth_requestAccounts",
    });

    handleSwitchNetwork();

    setAddress(accounts[0]);
    return accounts[0];
  };

  const handleAddToken = async (tokenAddress, tokenSymbol) => {
    const tokenDecimals = 18;
    const tokenImage = "http://placekitten.com/200/300";

    try {
      // wasAdded is a boolean. Like any RPC method, an error may be thrown.
      const wasAdded = await ethereum.request({
        method: "wallet_watchAsset",
        params: {
          type: "ERC20", // Initially only supports ERC20, but eventually more!
          options: {
            address: tokenAddress, // The address that the token is at.
            symbol: tokenSymbol, // A ticker symbol or shorthand, up to 5 chars.
            decimals: tokenDecimals, // The number of decimals in the token
            image: tokenImage, // A string url of the token logo
          },
        },
      });

      if (wasAdded) {
        console.log("Thanks for your interest!");
      } else {
        console.log("Your loss!");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleSwitchNetwork = async () => {
    try {
      await ethereum.request({
        method: "wallet_switchEthereumChain",
        params: [{ chainId: "0xc45" }],
      });
    } catch (switchError) {
      // This error code indicates that the chain has not been added to MetaMask.
      if (switchError.code === 4902) {
        try {
          await ethereum.request({
            method: "wallet_addEthereumChain",
            params: [
              {
                chainId: "0xc45",
                chainName: "Filecoin - Hyperspace testnet",
                rpcUrls: [
                  "https://filecoin-hyperspace.chainup.net/rpc/v1",
                ] /* ... */,
              },
            ],
          });
        } catch (addError) {
          // handle "add" error
          alert("Some error occured! Please try again or contact the owner.");
        }
      }
      // handle other "switch" errors
    }
  };

    // check nft balance
    const checkNftBalance = async (_currentUser) => {
      if (window.ethereum) {
        const web3Modal = new Web3Modal();
        const connection = await web3Modal.connect();
        const provider = new ethers.providers.Web3Provider(connection);
        const signer = provider.getSigner();
  
        const contract = new ethers.Contract(
          nftContractAddress,
          nftAbi,
          provider
        );
          
        console.log(address);
        const txRes = await contract.balanceOf(_currentUser);
  
        if (txRes > 0) {
          return true;
        }
  
        console.log(txRes);
        return false;
      }
    };
  
    useEffect(() => {
      (async () => {
        if (ethereum.isConnected()) {
        const accounts = await window.ethereum.request({
          method: "eth_accounts",
        });
        console.log(accounts[0]);
        const res = await checkNftBalance(accounts[0]);
        setAuthentication(true)
      }
    })();
    }, []);

    useEffect(() => {
      if (authentication == true) {
        router.push("explore")
      }
    })

  const mintNFT = async (receiver) => {
    if (window.ethereum) {
      const web3Modal = new Web3Modal();
      const connection = await web3Modal.connect();
      const provider = new ethers.providers.Web3Provider(connection);
      const signer = provider.getSigner();

      const contract = new ethers.Contract(nftContractAddress, nftAbi, signer);

      const txRes = await contract.safeMint(receiver, {
        gasLimit: 500000000,
      });

      await txRes.wait();

      console.log(txRes);
    }
  };

  return (
    <CreateMeetContext.Provider
      value={{ authentication, mintNFT, address, setAddress, toggleModal, setToggleModal, connectWallet }}
    >
      {children}
    </CreateMeetContext.Provider>
  );
};

export default CreateMeetContext;
