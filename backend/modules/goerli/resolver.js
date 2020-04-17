// Utils
const { wretch } = require('../../utils/fetch');
const { getBrowser } = require('../../utils/puppeteer');

async function getGoerliEth({ address }) {
  // Constants - Urls
  const GOERLI_FAUCET_URL = 'https://goerli-faucet.slock.it';

  // Launch a new browser
  const browser = await getBrowser();
  const page = await browser.newPage();

  // Go to Faucet url
  await page.goto(GOERLI_FAUCET_URL);

  // Solve reCAPTCHAs
  const { solutions } = await page.solveRecaptchas();
  const [{ text: recaptchaSolution }] = solutions;

  // Trigger ethers request
  const { success } = await wretch(GOERLI_FAUCET_URL)
    .post({ receiver: address, 'g-recaptcha-response': recaptchaSolution })
    .json();
  const { code: statusCode, title, message: extraMessage, txHash } = success;

  return {
    statusCode,
    body: { title, extraMessage, txHash, message: `You have received 0.05 ethers in your account.` },
  };
}

module.exports = { getGoerliEth };
