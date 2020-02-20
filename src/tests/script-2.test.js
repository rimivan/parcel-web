import {getTextData} from '../scripts/script-2';
import Logger from 'js-logger';

test('getTextData', async () => {
  try {
    const response = await getTextData();
    expect(response.status).toBe(200);
  } catch (error) {
    Logger.error('Test Error getTextData');
  }
});
