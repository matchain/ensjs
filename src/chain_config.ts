// ************************************** matdev *******************************************
// ENSRegistry#ENSRegistry - 0x59b670e9fA9D0A427751Af201D676719a970857b
// MetadataService#StaticMetadataService - 0x4ed7c70F96B99c776995fB64377f0d4aB3B0e1C1
// OwnedResolver#OwnedResolver - 0x322813Fd9A801c5507c9de605d63CEA4f2CE6c44
// Treasury#Treasury - 0xa85233C63b9Ee964Add6F2cffe00Fd84eb32338f
// BaseRegistrar#BaseRegistrar - 0x4A679253410272dd5232B3Ff7cF5dbB88f295319
// ReverseRegistrar#ReverseRegistrar - 0x7a2088a1bFc9d81c55368AE168C2C02570cB814F
// NameWrapper#NameWrapper - 0x84eA74d481Ee0A5332c457a4d796187F6Ba67fEB
// RegistrarController#RegistrarController - 0x1613beB3B2C4f22Ee086B2b38C1476A3cE7f78E8
// PublicResolver#PublicResolver - 0x998abeb3E57409262aE5b751f60747921B33613E
// NameValidityCheck#NameValidityCheck - 0x0E801D84Fa97b50751Dbf25036d067dCf18858bF
// LuckyToken#LuckyToken - 0x9d4454B023096f34B160D6B654540c56A1F81688
import { Address } from 'viem';

export const ChainConfig = {
    id: 698,
    name: 'Matchain',
    nativeCurrency: {
        decimals: 18,
        name: 'Mat Coin',
        symbol: 'MAT',
    },
    rpcUrls: {
        default: {
            http: ['https://lisbon-testnet-rpc.matchtest.co/'],
            webSocket: ['wss://lisbon-testnet-rpc.matchtest.co/'],
        },
    },
    blockExplorers: {
        default: { name: 'Explorer', url: 'http://54.64.130.107:4000/' },
    },
    contracts: {
        multicall3: {
          address: '0xb7278a61aa25c888815afc32ad3cc52ff24fe575' as Address
        //   blockCreated: 5882,
        },
    },
    addresses: {
        698: {
            ensRegistry: {
                address: '0x59b670e9fA9D0A427751Af201D676719a970857b',
            },
            ensBaseRegistrarImplementation: {
                address: '0x4A679253410272dd5232B3Ff7cF5dbB88f295319',
            },
            ensNameWrapper: {
                address: '0x84eA74d481Ee0A5332c457a4d796187F6Ba67fEB',
            },
            ensEthRegistrarController: {
                address: '0x1613beB3B2C4f22Ee086B2b38C1476A3cE7f78E8',
            },
            ensPublicResolver: {
                address: '0x998abeb3E57409262aE5b751f60747921B33613E',
            },
            ensReverseRegistrar: {
                address: '0x7a2088a1bFc9d81c55368AE168C2C02570cB814F',
            },
            ensUniversalResolver: {
                address: '0x0000000000000000000000000000000000000000',
            },
            ensBulkRenewal: {
                address: '0x0000000000000000000000000000000000000000',
            },
            ensDnsRegistrar: {
                address: '0x0000000000000000000000000000000000000000',
            },
            ensDnssecImpl: {
                address: '0x0000000000000000000000000000000000000000',
            },
        }
    }
}

import { defineChain } from 'viem'
 
export const matchain = defineChain(ChainConfig)
