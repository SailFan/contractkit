const {expect} = require("chai")
const { ethers } = require("hardhat");



describe("Hello", function(){
    it("Test Hello",async function () {
        const deployedAddress = "0xa513E6E4b8f2a923D98304ec87F64353C4D5C853"; 
        const  helloFactory =  await ethers.getContractFactory('Hello');
        const hello = helloFactory.attach(deployedAddress);
        const greeting = await hello.sayHello();
        console.log(`这个是我拿到的: ${greeting}`);

    })
})




