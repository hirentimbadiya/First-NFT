// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// You can also run a script with `npx hardhat run <script>`. If you do that, Hardhat
// will compile your contracts, add the Hardhat Runtime Environment's members to the
// global scope, and execute the script.
const hre = require("hardhat");

// import ethers
const { ethers } = require("hardhat");

async function main() {
  // 1. Somehow tell the script that we wanna deploy NFTees.sol contract
  const contract = await ethers.getContractFactory("NFTee");
  // 2. Deploy the contract
  const deployedContract = await contract.deploy();
  // 2.1 wait for deployemnt to finish
  await deployedContract.deployed();
  // 3. Print the address of the deployed contract

  console.log("NFT Contract Deplpyed to : ", deployedContract.address);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });