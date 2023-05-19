// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
const hre = require("hardhat");

async function main() {

const CrowdFunding = await hre.ethers.getContractFactory("CrowdFunding");
const crowdFunding = await CrowdFunding.deploy();
      await crowdFunding.deployed();

  console.log(
    `CrowdFunding deployed to ${crowdFunding.address}`
  );
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});

