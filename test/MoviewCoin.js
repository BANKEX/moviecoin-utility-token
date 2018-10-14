const BigNumber = web3.BigNumber;
// const EVMRevert = require('./helpers/EVMRevert');

require('chai')
    .use(require('chai-as-promised'))
    .use(require('chai-bignumber')(web3.BigNumber))
    .should();

const MovieCoin = artifacts.require('MovieCoin');

contract('MovieCoin', function ([_, wallet1, wallet2, wallet3, wallet4, wallet5]) {
    it('should emit 2 billions tokens to creator', async function () {
        const token = await MovieCoin.new();

        (await token.balanceOf.call(_)).should.be.bignumber.equal(2e27);
        (await token.totalSupply.call()).should.be.bignumber.equal(2e27);
    });
});
