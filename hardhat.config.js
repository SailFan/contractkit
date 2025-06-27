require("@nomicfoundation/hardhat-toolbox");



/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.28",
  networks: {
    // 本地网络（运行 npx hardhat node 启动）
    localhost: {
      url: "http://127.0.0.1:8545"
    }
  }
};
