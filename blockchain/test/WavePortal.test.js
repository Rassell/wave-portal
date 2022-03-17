const { expect } = require("chai");

describe("Token contract", function () {
  it("Deployment should assign the total supply of tokens to the owner", async function () {
    const [owner] = await ethers.getSigners();

    const Token = await ethers.getContractFactory("WavePortal");

    const hardhatToken = await Token.deploy();

    const waves = await hardhatToken.getAllWaves();
    expect(waves).to.have.lengthOf(0);
  });
});
