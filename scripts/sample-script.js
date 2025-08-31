import hre from "hardhat";

async function main() {
  const Greeter = await hre.ethers.getContractFactory("CrowdFunding");
  const greeter = await Greeter.deploy();
  await greeter.waitForDeployment(); 
  console.log("CrowdFunding deployed to:",await greeter.getAddress());
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
