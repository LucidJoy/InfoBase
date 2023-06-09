// SPDX-License-Identifier: MIT

pragma solidity ^0.8.10;

import "@chainlink/contracts/src/v0.8/interfaces/AggregatorV3Interface.sol";
import "@chainlink/contracts/src/v0.8/AutomationCompatible.sol";

import "./MeetSci.sol";

contract InfoBasePool is AutomationCompatible, MeetSci {
    // address payable owner;
    uint256 public deadline;
    uint256[] amountsArr;

    modifier onlyOwner() {
        require(msg.sender == owner, "Not owner");
        _;
    }

    address[] public researchersArr;

    mapping(address => address[]) public donors;
    mapping(address => uint256) public totalDonation;

    uint256 matchingPoolBalance;

    function depositMoneyToPool() public payable {
        matchingPoolBalance += msg.value;
    }

    function fundResearcher(address _researcher, address _user) public payable {
        totalDonation[_researcher] += msg.value;
        donors[_researcher].push(_user);
    }

    // bltime > deadline
    function disperseFunds(
        address[] memory researchers,
        uint256[] memory amounts
    ) public payable {
        for (uint256 i = 0; i < researchers.length; i++) {
            (bool sent, ) = researchers[i].call{value: amounts[i]}("");
            amountsArr.push(amounts[i]);
            require(sent, "Failed to send Ether");
        }
    }

    function setDeadline(uint256 _deadline) public {
        deadline = _deadline;
    }

    function getNumberOfDonors(
        address _researcher
    ) public view returns (uint256) {
        return donors[_researcher].length;
    }

    function amountPerResearcher(
        address _researcher
    ) public view returns (uint256) {
        return totalDonation[_researcher];
    }

    function getPoolBalance() public view returns (uint256) {
        return matchingPoolBalance;
    }

    function getTotalPoolBalance() public view returns (uint256) {
        return address(this).balance;
    }

    function transactAllFunds() public onlyOwner {
        (bool sent, ) = owner.call{value: address(this).balance}("");
        require(sent, "Failed to send Ether");
    }

    function checkUpkeep(
        bytes calldata /* checkData */
    )
        external
        view
        override
        returns (bool upkeepNeeded, bytes memory /* performData */)
    {
        // (uint _deadline) = abi.decode(checkData, (uint));

        upkeepNeeded = block.timestamp > deadline;
        // We don't use the checkData in this example. The checkData is defined when the Upkeep was registered.
    }

    function performUpkeep(bytes calldata /* performData */) external override {
        //We highly recommend revalidating the upkeep in the performUpkeep function
        for (uint i = 0; i < profiles.length; i++) {
            researchersArr.push(profiles[i].researcher);
        }

        if (block.timestamp > deadline) {
            disperseFunds(researchersArr, amountsArr);
        }
        // We don't use the performData in this example. The performData is generated by the Automation Node's call to your checkUpkeep function
    }

    function getAllResearchers() external view returns (Profile[] memory) {
        return profiles;
    }
}
