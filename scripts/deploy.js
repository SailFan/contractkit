const hre  = require("hardhat")

async function main(){
    console.log('部署脚本开始执行')
    //获取本地所有账号
    const [deployer] = await hre.ethers.getSigners();

    console.log("部署账号:", deployer.address)

    const balance = await hre.ethers.provider.getBalance(deployer.address)

    console.log(`当前部署账号，账号余额: ${hre.ethers.formatEther(balance)} ETH`);


    // 获取一个合约工厂
    const Hello  = await hre.ethers.getContractFactory("Hello");

    // 部署合约
    const hello =  await Hello.deploy();

    // 等待合约部署
    await hello.waitForDeployment();

    console.log(`合约部署地址: ${hello.target}`);
}

main().catch((error) => {
    console.error("部署出错：", error);
    process.exitCode = 1;

})