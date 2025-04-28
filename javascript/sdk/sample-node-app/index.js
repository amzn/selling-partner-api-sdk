import {
  OrdersSpApi,
  SellersSpApi,
  NotificationsSpApi,
  LwaAuthClient,
  ScopeConstants,
  RateLimitConfiguration
} from '@amazon-sp-api-release/amazon-sp-api-sdk-js';
import { AppConfig } from './app.config.mjs';

/**
* Sample SDK usage of calling Sellers getMarketplaceParticipations API.
* For Auth&Auth, It uses SDK built in LWA token retriever.
* All you need to do is call enableAutoRetrivalAccessToken when setting up your ApiClient.
* Please provide client_id, client_secret and refresh_token when calling this function.
*/
async function getMarketplaceParticipations() {
  try {
      //Configure Sellers ApiClient
      const sellersApiClient = new SellersSpApi.ApiClient(AppConfig.spApiNAEndpoint);
      const sellersApi = new SellersSpApi.SellersApi(sellersApiClient);

      sellersApiClient.enableAutoRetrievalAccessToken(AppConfig.lwaClientId, AppConfig.lwaClientSecret, AppConfig.lwaRefreshToken, null);
      
      //Call GetMarkerplaceParticipations API
      const participations = await sellersApi.getMarketplaceParticipations();
      console.log(
        JSON.stringify(participations, null, ' ') + 
          '\n**********************************'
      )

  } catch (error) {
      console.error('Exception when calling getMarketplaceParticipations API', error.message);
  }
}

/**
* Sample SDK usage of calling Notifications createDestination API (grantless operation).
* For Auth&Auth, It uses SDK built in LWA retriever.
* All you need to do is call enableAutoRetrivalAccessToken when setting up your ApiClient.
* Please provide client_is, client_secret and scope when calling this function.
*/
async function createDestination() {
  try {
    //Configure Notifications ApiClient and notification Api
    const notificationsApiClient = new NotificationsSpApi.ApiClient(AppConfig.spApiNAEndpoint);
    const notificationsApi = new NotificationsSpApi.NotificationsApi(notificationsApiClient);

    notificationsApiClient.enableAutoRetrievalAccessToken(AppConfig.lwaClientId, AppConfig.lwaClientSecret, null, ScopeConstants.SCOPE_NOTIFICATION_API);
    
    //Build createDestination request
    const sqsResource = new NotificationsSpApi.SqsResource('<REPLACE_WITH_YOUR_SQS_QUEUE_ARN>');
    const destinationResourceSpecification = new NotificationsSpApi.DestinationResourceSpecification(); 
    destinationResourceSpecification.sqs = sqsResource;
    const createDestinationRequest = new NotificationsSpApi.CreateDestinationRequest(destinationResourceSpecification, 'test-destination-name');
    
    //Call CreateDestination API
    const createDestinationResponse = await notificationsApi.createDestination(createDestinationRequest);
    console.log(
      JSON.stringify(createDestinationResponse, null, '  ') +
        '\n**********************************'
    );

  } catch(error) {
    console.error('Exception when calling createDestination API ---', error.message); 
  }
}

/**
* Alternatively, you can use our LwaAuthClient helper to maintain your own token cache.
* This is a sample SDK usage of calling Orders getOrders API.
* It uses LwaAuthClient in helpr/ to get acess token
*/
async function getOrders() {
  try {
      //Set up LwaAuthClient instance
      const lwaAuthClient = new LwaAuthClient(AppConfig.lwaClientId, AppConfig.lwaClientSecret, AppConfig.lwaRefreshToken, null);

      //Configure Orders ApiClient and Order Api instance
      const ordersApiClient = new OrdersSpApi.ApiClient(AppConfig.spApiNAEndpoint);
      const ordersApi = new OrdersSpApi.OrdersV0Api(ordersApiClient);

      ordersApiClient.applyXAmzAccessTokenToRequest(
        await lwaAuthClient.getAccessToken()
      );
      
      //Call GetOrders API
      const marketPlaceIds = ['ATVPDKIKX0DER'];
      const opts = {
        createdAfter: '2024-01-01'
      };
      const orders = await ordersApi.getOrders(marketPlaceIds, opts);
      console.log(
        JSON.stringify(orders, null, ' ') + 
          '\n**********************************'
      )

  } catch (error) {
      console.error('Exception when calling getOrders API', error.message);
  }
}

/**
 * We support a built in rate limiter.
 * Here is a sample SDK usage of calling Orders getOrders API with a rate limiter and retry logic.
 */
async function getOrdersWithRateLimiterAndRetry(retryCount) {
  const ordersApiClient = new OrdersSpApi.ApiClient(AppConfig.spApiNAEndpoint);
  const ordersApi = new OrdersSpApi.OrdersV0Api(ordersApiClient);

  ordersApiClient.enableAutoRetrievalAccessToken(AppConfig.lwaClientId, AppConfig.lwaClientSecret, AppConfig.lwaRefreshToken);

  /**
   * [Recommended] Option1: Use our default rate limiter. Our rate limiter uses the rate limit and burst values in our official document.
   * It is turned on by default.
   * /

  /**
   * Option2: Use your customized rate limiter, you need to replace <RateLimit> and <BurstValue> with actual numbers.
   * Then call setCustomizedRateLimiterForOperation(), please refer to 'helper/DefaultRateLimitMap.mjs' when specifying operation name.
   * Note that for other operations that you did not configure customized rate limiter, they still use default rate limiter.
   */

  // const rateLimitConfig = new RateLimitConfiguration(<RateLimit>, <BurstValue>);
  // ordersApiClient.setCustomizedRateLimiterForOperation('OrdersV0Api-getOrders', rateLimitConfig);

  /**
   * [For dynamic usage plan APIs] Option3: Disable rate limiter. By calling this function, you are disabling both default and customized rate limiter.
   */

  // ordersApiClient.disableRatelimiter();

  const marketPlaceIds = ['ATVPDKIKX0DER'];
  const opts = {
    createdAfter: '2024-01-01'
  };

  for (let attempt = 1; attempt <= retryCount; attempt++) {
    try {
      const response = await ordersApi.getOrders(marketPlaceIds, opts);
      console.log(
        JSON.stringify(response, null, ' ') + 
          '\n**********************************'
      )        
      return response.body;
    } catch (error) {
      const isRateLimit = error.message.includes('Rate limit');
      const isLastAttempt = attempt === retryCount;

      if (isRateLimit) {
          console.log(`Rate limit reached (Attempt ${attempt}/${retryCount})`);
          
          if (!isLastAttempt) {
              // Wait 60 seconds before retry (SP-API getOrders requirement)
              console.log('Waiting 5 seconds before retry...');
              await new Promise(resolve => 
                  setTimeout(resolve, 5000)
              );
              continue;
          }
      }

      throw error;
   } 
 }
}

// Uncomment to execute the functions
// getMarketplaceParticipations();
// createDestination();
// getOrders();
// getOrdersWithRateLimiterAndRetry(3);