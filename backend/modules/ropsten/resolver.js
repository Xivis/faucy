const ms = require('ms');
const unit = require('ethjs-unit');
const capitalize = require('lodash.capitalize');

// Utils
const { wretch } = require('../../utils/fetch');
const { createSuccessMessage } = require('../../utils/strings');

// Constants
const { ROPSTEN_FAUCET_URL } = process.env;

async function getRopstenEth({ address }) {
  try {
    const response = await wretch(`${ROPSTEN_FAUCET_URL}/${address}`).get().res();
    const { amount, txhash: txHash, address: userAddress } = await response.json();
    const ethers = unit.fromWei(amount, 'ether');

    return {
      statusCode: 200,
      body: {
        txHash,
        userAddress,
        message: createSuccessMessage(ethers),
      },
    };
  } catch (error) {
    const { status, text } = error;
    const { message, duration } = JSON.parse(text);

    return {
      statusCode: status,
      body: {
        message: `${capitalize(message)}. Your greylisted duration is for ${ms(
          duration,
        )}. In the meanwhile you can use it with another account.`,
      },
    };
  }
}

module.exports = { getRopstenEth };
