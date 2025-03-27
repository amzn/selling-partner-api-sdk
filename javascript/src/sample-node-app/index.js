import { AppConfig } from './app.config.mjs';
import { LwaAuthClient } from '@amzn/testsellingpartnerjavascriptapilwalib/src/helper/LwaAuthClient.mjs';

import {
  SellersApi,
  ApiClient as SellersApiClient,
} from '@amzn/testsellingpartnerjavascriptapilwalib/sdk/sellers_v1/src/index.js';

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
