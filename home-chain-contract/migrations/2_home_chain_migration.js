const HomeChain = artifacts.require("HomeChain");

module.exports = function (deployer) {
  deployer.deploy(HomeChain, process.env.GOVERNMENT_KEY);
};
