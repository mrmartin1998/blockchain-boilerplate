// SPDX-License-Identifier: MIT
const SimpleStorage= artifacts.require("SimpleStorage");

module.exports = function (deployer) {
  deployer.deploy(SimpleStorage);
};