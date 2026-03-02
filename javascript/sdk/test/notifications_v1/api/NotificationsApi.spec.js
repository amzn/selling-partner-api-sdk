import expect from 'expect.js';
import { join } from 'path';

const modulePath = join(process.cwd(), 'src', 'notifications_v1', 'index.js');
const SellingPartnerApiForNotifications = await import(modulePath);
const endpoint = 'http://localhost:3000';

describe('NotificationsApi', () => {
  let instance;

  beforeEach(() => {
    const apiClientInstance = new SellingPartnerApiForNotifications.ApiClient(endpoint);
    apiClientInstance.applyXAmzAccessTokenToRequest("testAccessToken");
    instance = new SellingPartnerApiForNotifications.NotificationsApi(apiClientInstance);
  });

  describe('createDestination', () => {
    it('should successfully call createDestinationWithHttpInfo', async () => {
      await instructBackendMock("notifications", "createDestination", "200")
      const params = [
        generateMockData('CreateDestinationRequest')
      ];
      const response = await instance.createDestinationWithHttpInfo(...params);

      expect(response.response).to.have.property('statusCode');
      expect(response.response.statusCode).to.equal(200)
      assertValidResponsePayload(200, response.data.payload);
    });
  });
  describe('createSubscription', () => {
    it('should successfully call createSubscriptionWithHttpInfo', async () => {
      await instructBackendMock("notifications", "createSubscription", "200")
      const params = [
        generateMockData('String'),
        generateMockData('CreateSubscriptionRequest')
      ];
      const response = await instance.createSubscriptionWithHttpInfo(...params);

      expect(response.response).to.have.property('statusCode');
      expect(response.response.statusCode).to.equal(200)
      assertValidResponsePayload(200, response.data.payload);
    });
  });
  describe('deleteDestination', () => {
    it('should successfully call deleteDestinationWithHttpInfo', async () => {
      await instructBackendMock("notifications", "deleteDestination", "200")
      const params = [
        generateMockData('String')
      ];
      const response = await instance.deleteDestinationWithHttpInfo(...params);

      expect(response.response).to.have.property('statusCode');
      expect(response.response.statusCode).to.equal(200)
      assertValidResponsePayload(200, response.data.payload);
    });
  });
  describe('deleteSubscriptionById', () => {
    it('should successfully call deleteSubscriptionByIdWithHttpInfo', async () => {
      await instructBackendMock("notifications", "deleteSubscriptionById", "200")
      const params = [
        generateMockData('String'),
        generateMockData('String')
      ];
      const response = await instance.deleteSubscriptionByIdWithHttpInfo(...params);

      expect(response.response).to.have.property('statusCode');
      expect(response.response.statusCode).to.equal(200)
      assertValidResponsePayload(200, response.data.payload);
    });
  });
  describe('getDestination', () => {
    it('should successfully call getDestinationWithHttpInfo', async () => {
      await instructBackendMock("notifications", "getDestination", "200")
      const params = [
        generateMockData('String')
      ];
      const response = await instance.getDestinationWithHttpInfo(...params);

      expect(response.response).to.have.property('statusCode');
      expect(response.response.statusCode).to.equal(200)
      assertValidResponsePayload(200, response.data.payload);
    });
  });
  describe('getDestinations', () => {
    it('should successfully call getDestinationsWithHttpInfo', async () => {
      await instructBackendMock("notifications", "getDestinations", "200")
      const response = await instance.getDestinationsWithHttpInfo();

      expect(response.response).to.have.property('statusCode');
      expect(response.response.statusCode).to.equal(200)
      assertValidResponsePayload(200, response.data.payload);
    });
  });
  describe('getSubscription', () => {
    it('should successfully call getSubscriptionWithHttpInfo', async () => {
      await instructBackendMock("notifications", "getSubscription", "200")
      const params = [
        generateMockData('String'),
      ];
      const response = await instance.getSubscriptionWithHttpInfo(...params);

      expect(response.response).to.have.property('statusCode');
      expect(response.response.statusCode).to.equal(200)
      assertValidResponsePayload(200, response.data.payload);
    });
  });
  describe('getSubscriptionById', () => {
    it('should successfully call getSubscriptionByIdWithHttpInfo', async () => {
      await instructBackendMock("notifications", "getSubscriptionById", "200")
      const params = [
        generateMockData('String'),
        generateMockData('String')
      ];
      const response = await instance.getSubscriptionByIdWithHttpInfo(...params);

      expect(response.response).to.have.property('statusCode');
      expect(response.response.statusCode).to.equal(200)
      assertValidResponsePayload(200, response.data.payload);
    });
  });

  describe('constructor', () => {
    it('should use default ApiClient when none provided', () => {
      const defaultInstance = new SellingPartnerApiForNotifications.NotificationsApi();
      expect(defaultInstance.apiClient).to.equal(SellingPartnerApiForNotifications.ApiClient.instance);
    });

    it('should use provided ApiClient', () => {
      const customClient = new SellingPartnerApiForNotifications.ApiClient();
      const customInstance = new SellingPartnerApiForNotifications.NotificationsApi(customClient);
      expect(customInstance.apiClient).to.equal(customClient);
    });
  });
});

function assertValidResponsePayload(statusCode, payload) {
  if (statusCode != 204) expect(payload).to.be.ok();
}

async function instructBackendMock(basename, response, code) {
  const lowerCaseCompressedBasename = basename.replace(/[\W\s]/g, "").toLowerCase();
  const url = `${endpoint}/response/${lowerCaseCompressedBasename}-${response}/code/${code}`;
  try {
    await fetch(url, {
      method: 'POST',
      body: null
    });
  } catch (error) {
    console.error('Request failed:', error);
  }
}

// Helper function to generate random test data
function generateMockData(dataType, isArray = false) {
  if (!dataType) return {};

  // Handle array types
  if (isArray) {
    return [generateMockData(dataType), generateMockData(dataType)];
  }

  switch(dataType) {
    case 'String':
      return 'mock-' + Math.random().toString(36).substring(2, 10);
    case 'Number':
      return Math.floor(Math.random() * 1000);
    case 'Boolean':
      return Math.random() > 0.5;
    case 'Date':
      return new Date().toISOString();
    default:
      try {
        const ModelClass = SellingPartnerApiForNotifications[dataType];
        if (ModelClass) {
          const instance = Object.create(ModelClass.prototype);
          return instance;
        }
      } catch (e) {
        console.error("Error creating instance of", dataType);
        return {};
      }
      return {};
  }
}
