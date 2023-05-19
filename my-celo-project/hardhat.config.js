require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
//require("@nomiclabs/hardhat-waffle");
require("dotenv").config();
const { API_URL, PRIVATE_KEY } = process.env;

// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
const accounts = await hre.ethers.getSigners();
for (const account of accounts) {
   console.log(account.address);
 }
});
module.exports = {
 solidity: "0.8.18",
 networks: {
 alfajores: {
     url:  'https://alfajores-forno.celo-testnet.org',// API_URL,
     accounts: [PRIVATE_KEY]
   }
 }
};