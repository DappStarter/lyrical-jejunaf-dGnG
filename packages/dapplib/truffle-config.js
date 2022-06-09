require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'hockey slide olympic short bitter birth praise pull install indoor flower gift'; 
let testAccounts = [
"0x8a2969fa11070761d529e5a27c2b051cb263c75a4040aa7238c72d5a5feb3769",
"0x2131af001fe7f48f532cd504c27bf0fd5fbf4019206df535a9294842463dfe89",
"0xb4d9c7175de0651a2ad55adab28974665e64f98a9eb2f0c4dcfde5e390c269a0",
"0x2611d0af80fa98b5dba291c4fd984783fe6c37916b0cf8ed9dab554780a1e852",
"0x91114c6cf1e5cc8efb1b6c0daf80d8a07b186f5f8bb73579e045ae5be922c3ca",
"0x3b38924385557516cf96c957cfa571731e91914ca604629a64cf1e5ee14fd583",
"0xd5f9ecf8071525f5584d39a74db5dabfb71e2a441a404ca3637d8cedc4455fcd",
"0x9d9f299c54654b7d382d67f82c6c19bb16ee8837065dc25aac7b68d4f11e670b",
"0xf9467aabcb1f803d5a9253f977fe51dd043105c458cbc35b703f613cfa166061",
"0x53207a63f8c3cad06302cdcea2136c49e43fa46513a3e83c8d51ab5cd5a080ac"
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

