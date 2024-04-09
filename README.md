# ENSJS for Mat Chain

Fork and customize from [ens-v3](https://github.com/ensdomains/ensjs-v3).

## Features

- Super fast response times
- Easy call batchability
- Written in TypeScript
- Supports the most cutting edge ENS features except DNS

## Installation

Install @matchain/ensjs, alongside [viem](https://github.com/wagmi-dev/viem).

```sh
npm install @matchain/ensjs viem
```

## Getting Started

The most simple way to get started is to create a public ENS client, with a supported
chain and transport imported from viem. The public client has all the read functions available on it,
as well as all subgraph functions.

```ts
// Import viem transport, viem chain, and ENSjs
import { http } from 'viem'
import { createEnsPublicClient, matchain } from '@matchain/ensjs'

// Create the client
const client = createEnsPublicClient({
  chain: matchain,
  transport: http(),
})

// Use the client
const ethAddress = client.getAddressRecord({ name: 'ens.mat' })
```


## ENS 

If you want customize ens-contracts, you can refer to [atchain/ens-contracts](https://github.com/matchain/ens-contracts)

## Develop package

If you want customize ensjs for your chain, you can write chain and contracts info in src/chain_config.js, then use yalc to test.
```js
// publish package to local store
yalc publish 
// update package to local store
yalc push

// *** project use ensjs package, remember change @matchain/ensjs@3.5.0 to the package name what you need ***
yalc add @matchain/ensjs@3.5.0
yalc remove @matchain/ensjs@3.5.0
```

## ENS Docs

Docs can be found [here](https://docs.ens.domains/). Full docs site coming soon.

