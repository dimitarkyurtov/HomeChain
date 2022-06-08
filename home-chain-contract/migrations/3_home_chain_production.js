const HomeChainProduction = artifacts.require("HomeChainProduction");

module.exports = function (deployer) {
  deployer.deploy(HomeChainProduction, process.env.GOVERNMENT_KEY);
};
