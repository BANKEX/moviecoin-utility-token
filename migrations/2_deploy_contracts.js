const MovieCoin = artifacts.require('MovieCoin');

module.exports = async function (deployer) {
    deployer.deploy(MovieCoin);
};
