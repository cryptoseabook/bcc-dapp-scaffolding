var HDWalletProvider = require("truffle-hdwallet-provider");
var mnemonic = "scorpion pink explain price crop level meadow arch boat lucky dry music";

module.exports = {
  // See <http://truffleframework.com/docs/advanced/configuration>
  // for more about customizing your Truffle configuration!
  networks: {
    ganache: {
      host: "127.0.0.1",
      port: 7545,
      network_id: "*" // Match any network id
    },
    bccprivatechain: {
      host: "192.168.15.12",
      port: 8545,
      network_id: "1234",
      gas: 4000000
    },
    kovan: {
      provider: function() {
        return new HDWalletProvider(mnemonic, "https://kovan.infura.io/H0MnmEaaittMM4B3XX2S")
      },
      network_id: 42,
      gas: 4000000
    }
  }

};
