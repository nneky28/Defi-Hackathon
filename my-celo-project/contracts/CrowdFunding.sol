// SPDX-License-Identifier: MIT
pragma solidity ^0.8.18;

contract CrowdFunding {
    event Donation(uint _amount, address _donor);
    event Withdrawal(uint _campaign);
    event Now(uint _thisTime);

    struct Campaign {
        address owner;
        string title;
        string description;
        uint256 targetAmount;
        uint256 deadline;
        uint256 amountRealised;
    }

    Campaign[] public campaigns;

    // Mapping to keep track of which addresses have contributed to a campaign
    mapping(uint256 => mapping(address=>bool)) public contributedToCampaign;
    
    // Mapping to keep track of all the donors for a campaign
    mapping(uint => address[]) public donors;

    // Fallback function to receive donations
    receive() external payable {
        emit Donation(msg.value, msg.sender);
    }

    // Modifier to check if a campaign exists
    modifier campaignExist(uint _id){
        require(_id < campaigns.length, "campaign does not exist");
        _;
    }

    // Modifier to check if a campaign is active (deadline not reached)
    modifier campaignActive(uint _id){
        require(campaigns[_id].deadline > block.timestamp , "campaign no longer active");
        _;
    }

    // Modifier to check if a campaign has received donations before withdrawing funds
    modifier campaignHasDonations(uint _id){
        require(campaigns[_id].amountRealised > 0, "no donations to withdraw");
        _;
    }

    // Function to create a new campaign
    function createCampaign(string memory _title, string memory  _description, uint256 _target, uint256 _deadline) public returns (bool) {
        require(msg.sender != address(0), "address is not valid");
        require(_deadline > block.timestamp, "The deadline should be a date in the future.");
        campaigns.push(Campaign({
            owner:msg.sender,
            title:_title,
            description:_description,
            targetAmount:_target,
            deadline:_deadline,
            amountRealised:0
        }));

        return true;
    }

    // Function to donate to a campaign
    function donateToCampaign(uint256 _id) public campaignExist(_id) campaignActive(_id) payable {
        emit Now(block.timestamp);
        require(msg.value > 0, "you cannot donate anything less than zero");
        campaigns[_id].amountRealised += msg.value;
        contributedToCampaign[_id][msg.sender] = true;
        donors[_id].push(msg.sender);
    }

    // Function to get all the donors for a campaign
    function getAllDonors(uint _id) view public campaignExist(_id) returns (address[] memory) {
        return donors[_id];
    }

    // Function to get all the campaigns
    function getAllCampaigns() public view returns (Campaign[] memory) {
        return campaigns;
    }

    // Function to get a particular campaign
    function getAParticularCampaign(uint _id) view public campaignExist(_id) returns(Campaign memory){
       return campaigns[_id];
    }

    // Function to withdraw donations for a campaign
    function withdrawDonationsForACampain(uint _id) external campaignExist(_id) campaignHasDonations(_id) {
        require(campaigns[_id].owner == msg.sender, "only the owner of this campaign can withdraw");
        uint totalAmountDonated = campaigns[_id].amountRealised;
        campaigns[_id].amountRealised = 0;
        (bool success, ) = campaigns[_id].owner.call{value: totalAmountDonated}("");
        require(success, "withdrawal failed");
      

        emit Withdrawal(_id);
    }
}