const { ethers } = require("hardhat");

async function main() {
  const HelloBase = await ethers.getContractFactory("HelloBase");
  const hello = await HelloBase.deploy("Hello from Base!");
  await hello.deployed();
  console.log("✅ Contract deployed to:", hello.address);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
