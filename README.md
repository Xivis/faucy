<h1 align="center">Faucy</h1>
<p align="center">⛏ Get ethers from any testnet easily!</p>

<img src="https://i.ibb.co/2ngMcmg/Captura-de-Pantalla-2020-04-27-a-la-s-21-47-42.png">

---

<div align="center">
  <img src="https://img.shields.io/github/issues/lndgalante/faucy?style=for-the-badge">
  <img src="https://img.shields.io/github/issues-pr/lndgalante/faucy?style=for-the-badge">
</div>

## Introduction

Are you tired of:

- looking how to get ethers on testnets?
- trying to understand how Faucets works?
- looking on Faucets that are properly working?
- looking on Faucets that doesn't block your IP by 24hs?

We've got you covered! Now with [Faucy](https://faucy.dev/) you can easily get ethers from any testnet.

## Features

- 🔋 PWA Support
- 🐙 100% Open Source
- ⏰ Displays transaction status (using [Notify.js](https://docs.blocknative.com/notify))
- 🔗 Address and Network in-sync with your Web3 Provider (using [Ethers.js](https://github.com/ethers-io/ethers.js))
- 🚰 No IP blockage, only by address for 24hs, so if you switch address you can request as much as you want!

## Goodies

- 🦮 Accessibility First
- 🌚 Dark Mode Support
- ⚡️ 100/100 Lighthouse score
- 📦 Distributed over fast and secure IPFS (using [Fleek](https://fleek.co))
- ☁️ Scalable and reliable microservices solution (using [AWS](https://aws.amazon.com))

## Supported Networks

| Network | Support | Status | Ethers |
| ------- | ------- | ------ | ------ |
| Ropsten | 👍      | ✅     | 1      |
| Kovan   | 👍      | ✅     | 0.1    |
| Rinkeby | 👍      | ✅     | 0.001  |
| Goerli  | 👍      | 🔴     | 0.05   |

## Development

1. Install all dependencies

```bash
> yarn install:all:deps
```

2. Run ngrok command

```bash
ngrok http 3000
```

3. Copy HTTPS url from ngrok to Gatsby environment variable

```bash
GATSBY_FAUCY_API_URL=https://a5ee9cd4.ngrok.io
```

4. Run both projects in parallel

```bash
> yarn dev:all
```

## Stack

- Frontend
  - [Gatsby](https://www.gatsbyjs.org)
  - [Chakra](https://chakra-ui.com)
  - [Ethers.js](https://github.com/ethers-io/ethers.js)

* Backend
  - [Express](https://expressjs.com)
  - [Puppeteer](https://pptr.dev)
  - [Puppeteer Extra](https://github.com/berstend/puppeteer-extra)

## Links

- [Ethereum Development with Go - Faucets](https://goethereumbook.org/faucets/)
- [HedgeTrade - What is an Ethereum Faucet?](https://hedgetrade.com/what-is-ethereum-faucet/)
- [Bitfalls - What Is an Ethereum Testnet and How Is It Used?](https://bitfalls.com/2018/05/31/what-is-an-ethereum-testnet-and-how-is-it-used/)

## Roadmap:

- May 2020 👉 Internal release
- June 2020 👉 Official release

## Todo Alpha:

- [ ] (Frontend) Connect feedback component

## Todo Beta:

- [ ] (Frontend) Connect Chainbeat analytics
- [ ] (Frontend) Add E2E tests for each network
- [ ] (Frontend) Display output data avoiding toasts
- [ ] (Backend) Move over to Rinkeby/Goerli auth faucet
- [ ] (Marketing) Release/Feedback to/from friend companies

## Todo RC:

- [ ] (Frontend) Add dark mode to Notify.js toast
- [ ] (Frontend/Backend) Add TypeScript support
- [ ] (Frontend/Backend) Add Docker to run entire project
- [ ] (Marketing) Eth weekly / DappHero docs / Twitter

## Todo future features:

- [ ] (Frontend/Backend) GunDB: Save each request on frontend, and send id in the body
- [ ] (Frontend/Backend) GunDB: Display the latest ongoing [request](https://i.ibb.co/c1v6SzK/Captura-de-Pantalla-2020-04-21-a-la-s-17-56-42.png)
- [ ] (Frontend/Backend) GunDB: Update request on the server when the operation it's finished
- [ ] (Frontend/Backend) GunDB: Allow only one operation per network at a time
- [ ] (Frontend/Backend) GunDB: Save successful operations to display [stats](https://i.ibb.co/HGZtYrH/Captura-de-Pantalla-2020-04-21-a-la-s-17-54-03.png) afterwards

## Feedback:

- Adaptation with Truffle suite
- Generate API_KEY to use API directly
- Display other Tokens that are in that testnet
- Display user balance and animate it when ethers are received

## Who is using it?

TBD

## How to Contribute

We're using [Project Guidelines](https://github.com/elsewhencode/project-guidelines).

TBD

## Contributors

TBD

### License

MIT © **[`Xivis`](https://xivis.com)**
