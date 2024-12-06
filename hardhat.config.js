require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  defaultNetwork: "localhost",
  networks: {
    localhost: {
      url: "http://127.0.0.1:8545"
    },
    hardhat: {
      // See its defaults
    },
    sepolia: {
      url: "https://eth-sepolia.g.alchemy.com/v2/Ll1zMc8AycDiNewQi_xgEGCBlFn02EWO",
      accounts: ["a11c500f0deae70ba197b24925bc531563209b5f35efb922ac71433941c6cf8a"]
    }
  },
  solidity: {
    version: "0.8.20",
    settings: {
      optimizer: {
        enabled: true,
        runs: 1,
      },
    },
  },
};