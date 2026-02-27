import expect from 'expect.js';
import { join } from 'path';

const modulePath = join(process.cwd(), 'src', 'customerFeedback_2024_06_01', 'index.js');
const TheSellingPartnerApiForCustomerFeedback = await import(modulePath);

describe('CustomerFeedbackApi', () => {
  let instance;
  const testEndpoint = 'https://localhost:3000';
  const testAccessToken = "testAccessToken";

  beforeEach(() => {
    const apiClientInstance = new TheSellingPartnerApiForCustomerFeedback.ApiClient(testEndpoint);
    apiClientInstance.applyXAmzAccessTokenToRequest(testAccessToken);
    instance = new TheSellingPartnerApiForCustomerFeedback.CustomerFeedbackApi(apiClientInstance);
  });

  describe('getBrowseNodeReturnTopics', () => {
    it('should successfully call getBrowseNodeReturnTopicsWithHttpInfo', async () => {
      instructBackendMock("customerFeedback", "getBrowseNodeReturnTopics", "200")
      const params = [
        generateMockData('String'),
        generateMockData('String')
      ];
      const response = await instance.getBrowseNodeReturnTopicsWithHttpInfo(...params);

      expect(response).to.have.property('statusCode');
      expect(response.statusCode).to.equal()
      expect(response).to.have.property('data');
    });
  });
  describe('getBrowseNodeReturnTrends', () => {
    it('should successfully call getBrowseNodeReturnTrendsWithHttpInfo', async () => {
      instructBackendMock("customerFeedback", "getBrowseNodeReturnTrends", "200")
      const params = [
        generateMockData('String'),
        generateMockData('String')
      ];
      const response = await instance.getBrowseNodeReturnTrendsWithHttpInfo(...params);

      expect(response).to.have.property('statusCode');
      expect(response.statusCode).to.equal()
      expect(response).to.have.property('data');
    });
  });
  describe('getBrowseNodeReviewTopics', () => {
    it('should successfully call getBrowseNodeReviewTopicsWithHttpInfo', async () => {
      instructBackendMock("customerFeedback", "getBrowseNodeReviewTopics", "200")
      const params = [
        generateMockData('String'),
        generateMockData('String'),
        generateMockData('String')
      ];
      const response = await instance.getBrowseNodeReviewTopicsWithHttpInfo(...params);

      expect(response).to.have.property('statusCode');
      expect(response.statusCode).to.equal()
      expect(response).to.have.property('data');
    });
  });
  describe('getBrowseNodeReviewTrends', () => {
    it('should successfully call getBrowseNodeReviewTrendsWithHttpInfo', async () => {
      instructBackendMock("customerFeedback", "getBrowseNodeReviewTrends", "200")
      const params = [
        generateMockData('String'),
        generateMockData('String')
      ];
      const response = await instance.getBrowseNodeReviewTrendsWithHttpInfo(...params);

      expect(response).to.have.property('statusCode');
      expect(response.statusCode).to.equal()
      expect(response).to.have.property('data');
    });
  });
  describe('getItemBrowseNode', () => {
    it('should successfully call getItemBrowseNodeWithHttpInfo', async () => {
      instructBackendMock("customerFeedback", "getItemBrowseNode", "200")
      const params = [
        generateMockData('String'),
        generateMockData('String')
      ];
      const response = await instance.getItemBrowseNodeWithHttpInfo(...params);

      expect(response).to.have.property('statusCode');
      expect(response.statusCode).to.equal()
      expect(response).to.have.property('data');
    });
  });
  describe('getItemReviewTopics', () => {
    it('should successfully call getItemReviewTopicsWithHttpInfo', async () => {
      instructBackendMock("customerFeedback", "getItemReviewTopics", "200")
      const params = [
        generateMockData('String'),
        generateMockData('String'),
        generateMockData('String')
      ];
      const response = await instance.getItemReviewTopicsWithHttpInfo(...params);

      expect(response).to.have.property('statusCode');
      expect(response.statusCode).to.equal()
      expect(response).to.have.property('data');
    });
  });
  describe('getItemReviewTrends', () => {
    it('should successfully call getItemReviewTrendsWithHttpInfo', async () => {
      instructBackendMock("customerFeedback", "getItemReviewTrends", "200")
      const params = [
        generateMockData('String'),
        generateMockData('String')
      ];
      const response = await instance.getItemReviewTrendsWithHttpInfo(...params);

      expect(response).to.have.property('statusCode');
      expect(response.statusCode).to.equal()
      expect(response).to.have.property('data');
    });
  });

  describe('constructor', () => {
    it('should use default ApiClient when none provided', () => {
      const defaultInstance = new TheSellingPartnerApiForCustomerFeedback.CustomerFeedbackApi();
      expect(defaultInstance.apiClient).to.equal(TheSellingPartnerApiForCustomerFeedback.ApiClient.instance);
    });

    it('should use provided ApiClient', () => {
      const customClient = new TheSellingPartnerApiForCustomerFeedback.ApiClient();
      const customInstance = new TheSellingPartnerApiForCustomerFeedback.CustomerFeedbackApi(customClient);
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
        const ModelClass = TheSellingPartnerApiForCustomerFeedback[dataType];
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
