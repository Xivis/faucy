// Utils
const { wretch } = require('../../../utils/fetch');
const { NETWORKS } = require('../../../utils/networks');
const { getBrowser } = require('../../../utils/puppeteer');
const { createSuccessMessage } = require('../../../utils/strings');

// Constants - Environment variables
const { GOERLI_FAUCET_URL } = process.env;

async function getGoerliEth({ address }) {
  // Launch a new browser
  const browser = await getBrowser(NETWORKS.goerli);
  const page = await browser.newPage();

  // Go to Faucet url
  await page.goto(GOERLI_FAUCET_URL);

  // Solve reCAPTCHAs
  const { solutions } = await page.solveRecaptchas();
  const [{ text: recaptchaSolution }] = solutions;

  // Close browser
  browser.close();

  // Trigger ethers request
  const { success } = await wretch(GOERLI_FAUCET_URL)
    .post({ receiver: address, 'g-recaptcha-response': recaptchaSolution })
    .json();
  const { title, message: extraMessage, txHash } = success;

  return {
    statusCode: 200,
    body: { title, txHash, extraMessage, message: createSuccessMessage('0.05') },
  };
}

module.exports = { getGoerliEth };
