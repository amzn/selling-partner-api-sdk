import expect from 'expect.js';
import { join } from 'path';

const modulePath = join(process.cwd(), 'src', 'notifications_v1', 'index.js');
const SellingPartnerApiForNotifications = await import(modulePath);

describe('NotificationsApi', () => {
  let instance;
  const testEndpoint = 'https://localhost:3000';
  const testAccessToken = "testAccessToken";

  beforeEach(() => {
    const apiClientInstance = new SellingPartnerApiForNotifications.ApiClient(testEndpoint);
    apiClientInstance.applyXAmzAccessTokenToRequest(testAccessToken);
    instance = new SellingPartnerApiForNotifications.NotificationsApi(apiClientInstance);
  });

  describe('createDestination', () => {
    it('should successfully call createDestinationWithHttpInfo', async () => {
      instructBackendMock("notifications", "createDestination", "200")
      const params = [
        generateMockData('CreateDestinationRequest')
      ];
      const response = await instance.createDestinationWithHttpInfo(...params);

      expect(response).to.have.property('statusCode');
      expect(response.statusCode).to.equal()
      expect(response).to.have.property('data');
    });
  });
  describe('createSubscription', () => {
    it('should successfully call createSubscriptionWithHttpInfo', async () => {
      instructBackendMock("notifications", "createSubscription", "200")
      const params = [
        generateMockData('String'),
        generateMockData('CreateSubscriptionRequest')
      ];
      const response = await instance.createSubscriptionWithHttpInfo(...params);

      expect(response).to.have.property('statusCode');
      expect(response.statusCode).to.equal()
      expect(response).to.have.property('data');
    });
  });
  describe('deleteDestination', () => {
    it('should successfully call deleteDestinationWithHttpInfo', async () => {
      instructBackendMock("notifications", "deleteDestination", "200")
      const params = [
        generateMockData('String')
      ];
      const response = await instance.deleteDestinationWithHttpInfo(...params);

      expect(response).to.have.property('statusCode');
      expect(response.statusCode).to.equal()
      expect(response).to.have.property('data');
    });
  });
  describe('deleteSubscriptionById', () => {
    it('should successfully call deleteSubscriptionByIdWithHttpInfo', async () => {
      instructBackendMock("notifications", "deleteSubscriptionById", "200")
      const params = [
        generateMockData('String'),
        generateMockData('String')
      ];
      const response = await instance.deleteSubscriptionByIdWithHttpInfo(...params);

      expect(response).to.have.property('statusCode');
      expect(response.statusCode).to.equal()
      expect(response).to.have.property('data');
    });
  });
  describe('getDestination', () => {
    it('should successfully call getDestinationWithHttpInfo', async () => {
      instructBackendMock("notifications", "getDestination", "200")
      const params = [
        generateMockData('String')
      ];
      const response = await instance.getDestinationWithHttpInfo(...params);

      expect(response).to.have.property('statusCode');
      expect(response.statusCode).to.equal()
      expect(response).to.have.property('data');
    });
  });
  describe('getDestinations', () => {
    it('should successfully call getDestinationsWithHttpInfo', async () => {
      instructBackendMock("notifications", "getDestinations", "200")
      const response = await instance.getDestinationsWithHttpInfo();

      expect(response).to.have.property('statusCode');
      expect(response.statusCode).to.equal()
      expect(response).to.have.property('data');
    });
  });
  describe('getSubscription', () => {
    it('should successfully call getSubscriptionWithHttpInfo', async () => {
      instructBackendMock("notifications", "getSubscription", "200")
      const params = [
        generateMockData('String'),
      ];
      const response = await instance.getSubscriptionWithHttpInfo(...params);

      expect(response).to.have.property('statusCode');
      expect(response.statusCode).to.equal()
      expect(response).to.have.property('data');
    });
  });
  describe('getSubscriptionById', () => {
    it('should successfully call getSubscriptionByIdWithHttpInfo', async () => {
      instructBackendMock("notifications", "getSubscriptionById", "200")
      const params = [
        generateMockData('String'),
        generateMockData('String')
      ];
      const response = await instance.getSubscriptionByIdWithHttpInfo(...params);

      expect(response).to.have.property('statusCode');
      expect(response.statusCode).to.equal()
      expect(response).to.have.property('data');
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
