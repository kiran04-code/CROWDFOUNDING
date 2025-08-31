import "@nomicfoundation/hardhat-toolbox";

const sepoliaUrl = process.env.NEXT_PUBLIC_SEPOLIA_URL;
const privateKey = process.env.NEXT_PUBLIC_PRIVATE_KEY;
export default {
  solidity: "0.8.17",
  networks: {
    sepolia: {
      url: "https://sepolia.infura.io/v3/b672821e47db4b999fdc967d29d07711" || "",
      accounts: "0x9dbaa2c25d5dee7539300ae2293117aaa83de5b3124428a09dfeec7149da140b" ? ["0x9dbaa2c25d5dee7539300ae2293117aaa83de5b3124428a09dfeec7149da140b"] : [],
    },
  },
};
