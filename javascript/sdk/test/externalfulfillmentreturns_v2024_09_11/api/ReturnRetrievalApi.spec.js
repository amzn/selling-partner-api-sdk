import expect from 'expect.js';
import { join } from 'path';

const modulePath = join(process.cwd(), 'src', 'externalfulfillmentreturns_v2024_09_11', 'index.js');
const TheSellingPartnerApiForAmazonExternalFulfillmentReturnItemProcessing = await import(modulePath);
const endpoint = 'https://localhost:3000';

describe('ReturnRetrievalApi', () => {
  let instance;

  beforeEach(() => {
    const apiClientInstance = new TheSellingPartnerApiForAmazonExternalFulfillmentReturnItemProcessing.ApiClient(testEndpoint);
    apiClientInstance.applyXAmzAccessTokenToRequest("testAccessToken");
    instance = new TheSellingPartnerApiForAmazonExternalFulfillmentReturnItemProcessing.ReturnRetrievalApi(apiClientInstance);
  });

  describe('getReturn', () => {
    it('should successfully call getReturnWithHttpInfo', async () => {
      await instructBackendMock("returnRetrieval", "getReturn", "200")
      const params = [
        generateMockData('String')
      ];
      const response = await instance.getReturnWithHttpInfo(...params);

      expect(response).to.have.property('statusCode');
      expect(response.statusCode).to.equal()
      expect(response).to.have.property('data');
    });
  });
  describe('listReturns', () => {
    it('should successfully call listReturnsWithHttpInfo', async () => {
      await instructBackendMock("returnRetrieval", "listReturns", "200")
      const params = [
      ];
      const response = await instance.listReturnsWithHttpInfo(...params);

      expect(response).to.have.property('statusCode');
      expect(response.statusCode).to.equal()
      expect(response).to.have.property('data');
    });
  });

  describe('constructor', () => {
    it('should use default ApiClient when none provided', () => {
      const defaultInstance = new TheSellingPartnerApiForAmazonExternalFulfillmentReturnItemProcessing.ReturnRetrievalApi();
      expect(defaultInstance.apiClient).to.equal(TheSellingPartnerApiForAmazonExternalFulfillmentReturnItemProcessing.ApiClient.instance);
    });

    it('should use provided ApiClient', () => {
      const customClient = new TheSellingPartnerApiForAmazonExternalFulfillmentReturnItemProcessing.ApiClient();
      const customInstance = new TheSellingPartnerApiForAmazonExternalFulfillmentReturnItemProcessing.ReturnRetrievalApi(customClient);
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
        const ModelClass = TheSellingPartnerApiForAmazonExternalFulfillmentReturnItemProcessing[dataType];
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
