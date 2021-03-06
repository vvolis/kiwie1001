//require('babel-register');
//require('babel-polyfill');

var HDWalletProvider = require("truffle-hdwallet-provider");
var mnemonic = "misery park home art rich small buzz involve boost entire gaze twelve";


module.exports = {
  networks: {
    development: {
      host: "127.0.0.1",
      port: 7545,
      network_id: "*", // Match any network id,
      //gasPrice: 112000000000,
    },
    rinkeby: {
        provider: function() { 
         return new HDWalletProvider(mnemonic, "https://eth-rinkeby.alchemyapi.io/v2/spNgmminiS7sJxaVIBvEM3_ilefAmUzK");
        },
        network_id: 4,
        gas: 4547332, //149175 + 4198157
        gasPrice: 150000000000,
    },
    mainnet: {
        provider: function() { 
         return new HDWalletProvider(mnemonic, "https://eth-mainnet.alchemyapi.io/v2/-Od2R0yXTYi8bgt6PAVGmFHlQ4PqtQ0u");
        },
        network_id: 1,
        gas: 4547332,
        gasPrice: 150000000000,
    }
  },
  contracts_directory: './contracts/',
  contracts_build_directory: './build/contracts/',
  compilers: {
    solc: {
        version: "^0.5.0",
        optimizer: {
            enabled: true,
            runs: 200
        },
        evmVersion: 'petersburg'
    }
  },
  plugins: [
    'truffle-plugin-verify'
  ],
  api_keys: {
    etherscan: 'xxx'
  }
}
