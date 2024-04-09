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

## ENS Docs

Docs can be found [here](https://docs.ens.domains/). Full docs site coming soon.

