import Logger from 'js-logger';

const axios = require('axios');

/* getTextData is async and it returns a Promise */
const getTextData = async () => {
  try {
    const response = await axios.get('https://baconipsum.com/api/?type=meat-and-filler'); /* await the Promise is resolved; then store data in response variable */
    Logger.info('getTextData ok: ', response);
    return response;
  } catch (error) {
    Logger.error('getTextData Error:', error);
  }
};

/* !!! createTextElement must be async because of getTextData() !!! */
const createTextElement = async () => {
  /* without async/await, Promise returned by getTextData cannot be resolved */
  const resolvedData = await getTextData();
  const body = document.querySelector('body');
  const divElement = document.createElement('div');

  const textNode = document.createTextNode(resolvedData.data);
  divElement.appendChild(textNode);
  body.appendChild(divElement);
};

export {createTextElement, getTextData};


/**
 * async/await notes:
 * @return {Promise} as result
 * From MDN:
 *  An async function can contain an await expression that pauses the execution
 *  of the async function to wait for the passed Promise's resolution,
 *  then resumes the async function's execution and evaluates as the resolved
 *  value. The await keyword is only valid inside async functions.
 *  If you use it outside of an async function's body, you will get a
 *  SyntaxError.
 *  While the async function is paused, the calling function continues
 *  running (having received the implicit Promise returned by the
 *  async function).
 *
 *  @reference
 *  https://github.com/axios/axios
 *  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function
 *  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/resolve
 *
 *  @important
 *  NB: async/await chain cannot be interrupted (look at code line:14-15)
 */
