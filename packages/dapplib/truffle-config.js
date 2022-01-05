require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'give envelope obscure top chaos note pumpkin unknown idea merry flock travel'; 
let testAccounts = [
"0xe898d26eb2125590010540b9870143fd0adc65faea6f0b92c6b5bed813eb8803",
"0x184fc55ca2729b4e2a01c3de475bef2c747589312c57b4806b5ae5095a0205fa",
"0x6333be633d631aa98bf4cf2c79a3180b60e362a72ccc758e9334a0bee6a033cf",
"0xef46697f9f535e16be6c145294210b720ede1baf10796045617e876e7e43bdc0",
"0xd65301eac8dacfe9ae26e88b188edb9417bd3f4a9e6d7fb9047641c8ad5dae64",
"0x8b16fafb015325f90a26e2313355564103d931985270aa6910c5009b1e105a6b",
"0xb204afc8865eb84ed505062abd7b73a7ca86f8c60e4f088366149a1aa60ea194",
"0xe56defd292bc850e687574e63103be032f7d160b4f930ea8f6f23f9b0b498d33",
"0xe1c21c134c0a7d4348196ff7e0574bf5d6f8cbf1afadfbdfa98ded1f35fcfaba",
"0x995fe458412b0136fab5dc471c425ff11b5bbb518a9984ebc51e80a9f6f6bab7"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

