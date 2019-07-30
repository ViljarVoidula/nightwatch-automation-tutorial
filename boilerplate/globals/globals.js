import normalizeType from 'normalize-type';

export default normalizeType({
  // //Duration between two assertion checks in milliseconds
  waitForConditionPollInterval: process.env.WAIT_FOR_INTERVAL || 500,

  // Timeout duration in milliseconds
  waitForConditionTimeout: process.env.WAIT_FOR_TIMEOUT || 10000,

  // Timeout for Node.js assertion library in milliseconds
  retryAssertionTimeout: process.env.RETRY_TIMEOUT || 2000
});
