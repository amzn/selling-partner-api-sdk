import { AppConfig } from './app.config.mjs';
import { LwaAuthClient } from '@amazon-sp-api-release/amazon-sp-api-sdk-js';

import {
    SellersSpApi
} from '@amazon-sp-api-release/amazon-sp-api-sdk-js';

(async () => {
  const lwaClient = new LwaAuthClient(
    AppConfig.lwaClientId,
    AppConfig.lwaClientSecret,
    AppConfig.lwaRefreshToken
  );
  const sellerApiClient = new SellersSpApi.ApiClient(
    'https://sellingpartnerapi-na.amazon.com'
  );

  const sellerApi = new SellersSpApi.SellersApi(sellerApiClient);
  sellerApiClient.applyXAmzAccessTokenToRequest(
    await lwaClient.getAccessToken()
  );
  const participations = await sellerApi.getMarketplaceParticipations();
  console.log(
    JSON.stringify(participations, null, '  ') +
      '\n**********************************'
  );
})();