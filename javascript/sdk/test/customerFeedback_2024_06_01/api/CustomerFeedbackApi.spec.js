import expect from 'expect.js';
import { join } from 'path';

const modulePath = join(process.cwd(), 'src', 'customerFeedback_2024_06_01', 'index.js');
const TheSellingPartnerApiForCustomerFeedback = await import(modulePath);
const endpoint = 'http://localhost:3000';

describe('CustomerFeedbackApi', () => {
  let instance;

  beforeEach(() => {
    const apiClientInstance = new TheSellingPartnerApiForCustomerFeedback.ApiClient(endpoint);
    apiClientInstance.applyXAmzAccessTokenToRequest("testAccessToken");
    instance = new TheSellingPartnerApiForCustomerFeedback.CustomerFeedbackApi(apiClientInstance);
  });

  describe('getBrowseNodeReturnTopics', () => {
    it('should successfully call getBrowseNodeReturnTopicsWithHttpInfo', async () => {
      await instructBackendMock("customerFeedback", "getBrowseNodeReturnTopics", "200")
      const params = [
        generateMockData('String'),
        generateMockData('String')
      ];
      const response = await instance.getBrowseNodeReturnTopicsWithHttpInfo(...params);

      expect(response.response).to.have.property('statusCode');
      expect(response.response.statusCode).to.equal(200)
      assertValidResponsePayload(200, response.data.payload);
    });
  });
  describe('getBrowseNodeReturnTrends', () => {
    it('should successfully call getBrowseNodeReturnTrendsWithHttpInfo', async () => {
      await instructBackendMock("customerFeedback", "getBrowseNodeReturnTrends", "200")
      const params = [
        generateMockData('String'),
        generateMockData('String')
      ];
      const response = await instance.getBrowseNodeReturnTrendsWithHttpInfo(...params);

      expect(response.response).to.have.property('statusCode');
      expect(response.response.statusCode).to.equal(200)
      assertValidResponsePayload(200, response.data.payload);
    });
  });
  describe('getBrowseNodeReviewTopics', () => {
    it('should successfully call getBrowseNodeReviewTopicsWithHttpInfo', async () => {
      await instructBackendMock("customerFeedback", "getBrowseNodeReviewTopics", "200")
      const params = [
        generateMockData('String'),
        generateMockData('String'),
        generateMockData('String')
      ];
      const response = await instance.getBrowseNodeReviewTopicsWithHttpInfo(...params);

      expect(response.response).to.have.property('statusCode');
      expect(response.response.statusCode).to.equal(200)
      assertValidResponsePayload(200, response.data.payload);
    });
  });
  describe('getBrowseNodeReviewTrends', () => {
    it('should successfully call getBrowseNodeReviewTrendsWithHttpInfo', async () => {
      await instructBackendMock("customerFeedback", "getBrowseNodeReviewTrends", "200")
      const params = [
        generateMockData('String'),
        generateMockData('String')
      ];
      const response = await instance.getBrowseNodeReviewTrendsWithHttpInfo(...params);

      expect(response.response).to.have.property('statusCode');
      expect(response.response.statusCode).to.equal(200)
      assertValidResponsePayload(200, response.data.payload);
    });
  });
  describe('getItemBrowseNode', () => {
    it('should successfully call getItemBrowseNodeWithHttpInfo', async () => {
      await instructBackendMock("customerFeedback", "getItemBrowseNode", "200")
      const params = [
        generateMockData('String'),
        generateMockData('String')
      ];
      const response = await instance.getItemBrowseNodeWithHttpInfo(...params);

      expect(response.response).to.have.property('statusCode');
      expect(response.response.statusCode).to.equal(200)
      assertValidResponsePayload(200, response.data.payload);
    });
  });
  describe('getItemReviewTopics', () => {
    it('should successfully call getItemReviewTopicsWithHttpInfo', async () => {
      await instructBackendMock("customerFeedback", "getItemReviewTopics", "200")
      const params = [
        generateMockData('String'),
        generateMockData('String'),
        generateMockData('String')
      ];
      const response = await instance.getItemReviewTopicsWithHttpInfo(...params);

      expect(response.response).to.have.property('statusCode');
      expect(response.response.statusCode).to.equal(200)
      assertValidResponsePayload(200, response.data.payload);
    });
  });
  describe('getItemReviewTrends', () => {
    it('should successfully call getItemReviewTrendsWithHttpInfo', async () => {
      await instructBackendMock("customerFeedback", "getItemReviewTrends", "200")
      const params = [
        generateMockData('String'),
        generateMockData('String')
      ];
      const response = await instance.getItemReviewTrendsWithHttpInfo(...params);

      expect(response.response).to.have.property('statusCode');
      expect(response.response.statusCode).to.equal(200)
      assertValidResponsePayload(200, response.data.payload);
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
