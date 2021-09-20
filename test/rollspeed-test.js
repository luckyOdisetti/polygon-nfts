const { expect } = require('chai');
const { ethers } = require('hardhat');

describe('RollSpeed', function () {
    it('should deploy contract, mint token, resolve URI', async function () {
        const factory = await ethers.getContractFactory('RollSpeed');
        const cInstance = await factory.deploy();
        const URI = 'ipfs://QmWJBNeQAm9Rh4YaW8GFRnSgwa4dN889VKm9poc2DQPBkv';
        await cInstance.deployed();
        await cInstance.mint('0x7028f6756a9b815711bc2d37e8d5be23fdac846d', URI);
        expect(await cInstance.tokenURI(1)).to.equal(URI);
    });
});
