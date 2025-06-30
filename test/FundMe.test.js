const {expect} = require("chai")
const { ethers } = require("hardhat");



describe("FundMe", function(){
    it("Test FundMe",async function () {
        const deployedAddress = "0xA51c1fc2f0D1a1b8494Ed1FE312d7C3a78Ed91C0"; 
        const  fundMeFactory =  await ethers.getContractFactory('FundMe');
        const fund = fundMeFactory.attach(deployedAddress);
        const str = "你好，世界";
        const testId = 42;
        await fund.setHello(str,testId);
        const greeting = await fund.sayHello(42)
        console.log(`新设置的: ${greeting}`);
       
    })
})




