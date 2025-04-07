import { AppConfig } from './app.config.mjs';
import { LwaAuthClient } from 'amazon-sp-api-sdk-js/src/helper/LwaAuthClient.mjs';

import {
  SellersApi,
  ApiClient as SellersApiClient,
} from 'amazon-sp-api-sdk-js/sdk/sellers_v1/src/index.js';

(async () => {
  const lwaClient = new LwaAuthClient(
    AppConfig.lwaClientId,
    AppConfig.lwaClientSecret,
    AppConfig.lwaRefreshToken
  );
  const sellerApiClient = new SellersApiClient(
    'https://sellingpartnerapi-na.amazon.com'
  );

  const sellerApi = new SellersApi(sellerApiClient);
  sellerApiClient.applyXAmzAccessTokenToRequest(
    await lwaClient.getAccessToken()
  );
  const participations = await sellerApi.getMarketplaceParticipations();
  console.log(
    JSON.stringify(participations, null, '  ') +
      '\n**********************************'
  );
})();
