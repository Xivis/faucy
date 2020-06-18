// Utils
const { NETWORKS } = require('../../../utils/networks');
const { getBrowser } = require('../../../utils/puppeteer');
const { getTxHash, createSuccessMessage, createGreylistMessage } = require('../../../utils/strings');

// Constants
const { ROPSTEN_FAUCET_URL, PROXY_USERNAME, PROXY_PASSWORD } = process.env;

async function getRopstenEth({ address }) {
  // Constants - DOM Selectors
  const INPUT_ADDRESS_SELECTOR = 'input';
  const BUTTON_SEND_SELECTOR = 'button';
  const RESPONSE_MESSAGE_SELECTOR = '.message-body';

  // Launch a new browser
  const browser = await getBrowser(NETWORKS.ropsten);
  const page = await browser.newPage();

  // Authenticate proxy
  await page.authenticate({ username: PROXY_USERNAME, password: PROXY_PASSWORD });

  // Go to Faucet url
  await page.goto(ROPSTEN_FAUCET_URL);

  // Type user address
  await page.focus(INPUT_ADDRESS_SELECTOR);
  await page.keyboard.type(address);

  // Trigger eth request
  await page.click(BUTTON_SEND_SELECTOR);

  // Get status message
  await page.waitForSelector(RESPONSE_MESSAGE_SELECTOR);
  const statusMessage = await page.evaluate(
    (selector) => document.querySelector(selector).textContent,
    RESPONSE_MESSAGE_SELECTOR,
  );

  // Close browser
  await browser.close();

  // Check for errors in status message
  const hasError = statusMessage.includes('greylist');

  if (hasError) {
    const greylistPeriod = statusMessage.split('another ')[1].replace('.', '');

    return {
      statusCode: 403,
      body: { message: createGreylistMessage(greylistPeriod) },
    };
  }
  // Get transaction hash
  const txHash = getTxHash(statusMessage);

  return {
    statusCode: 200,
    body: { txHash, message: createSuccessMessage(1) },
  };
}

module.exports = { getRopstenEth };
