const { loadFixture } = require("@nomicfoundation/hardhat-network-helpers");
const { assert } = require("chai");

describe("Game5", function () {
  async function deployContractAndSetVariables() {
    const Game = await ethers.getContractFactory("Game5");
    const game = await Game.deploy();
    const signer = ethers.provider.getSigner(0);

    const threshold = 0x00ffffffffffffffffffffffffffffffffffffff;
    let valid;
    let wallet;
    let address;

    while (!valid) {
      wallet = ethers.Wallet.createRandom();
      address = await wallet.getAddress();

      if (address < threshold) {
        valid = true;
        wallet = wallet.connect(ethers.provider);
      }
    }

    await signer.sendTransaction({
      to: address,
      value: ethers.utils.parseEther("0.1"),
    });
    console.log(address);

    return { game, wallet };
  }
  it("should be a winner", async function () {
    const { game, wallet } = await loadFixture(deployContractAndSetVariables);

    // good luck

    await game.connect(wallet).win();

    // leave this assertion as-is
    assert(await game.isWon(), "You did not win the game");
  });
});
