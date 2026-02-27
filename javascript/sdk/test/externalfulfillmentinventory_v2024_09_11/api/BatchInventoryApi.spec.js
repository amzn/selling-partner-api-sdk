import expect from 'expect.js';
import { join } from 'path';

const modulePath = join(process.cwd(), 'src', 'externalfulfillmentinventory_v2024_09_11', 'index.js');
const TheSellingPartnerApiForExternalFulfillmentInventoryManagement = await import(modulePath);
const endpoint = 'http://localhost:3000';

describe('BatchInventoryApi', () => {
  let instance;

  beforeEach(() => {
    const apiClientInstance = new TheSellingPartnerApiForExternalFulfillmentInventoryManagement.ApiClient(endpoint);
    apiClientInstance.applyXAmzAccessTokenToRequest("testAccessToken");
    instance = new TheSellingPartnerApiForExternalFulfillmentInventoryManagement.BatchInventoryApi(apiClientInstance);
  });

  describe('batchInventory', () => {
    it('should successfully call batchInventoryWithHttpInfo', async () => {
      await instructBackendMock("batchInventory", "batchInventory", "207")
      const params = [
        generateMockData('BatchInventoryRequest')
      ];
      const response = await instance.batchInventoryWithHttpInfo(...params);

      expect(response).to.have.property('statusCode');
      expect(response.statusCode).to.equal()
      expect(response).to.have.property('data');
    });
  });

  describe('constructor', () => {
    it('should use default ApiClient when none provided', () => {
      const defaultInstance = new TheSellingPartnerApiForExternalFulfillmentInventoryManagement.BatchInventoryApi();
      expect(defaultInstance.apiClient).to.equal(TheSellingPartnerApiForExternalFulfillmentInventoryManagement.ApiClient.instance);
    });

    it('should use provided ApiClient', () => {
      const customClient = new TheSellingPartnerApiForExternalFulfillmentInventoryManagement.ApiClient();
      const customInstance = new TheSellingPartnerApiForExternalFulfillmentInventoryManagement.BatchInventoryApi(customClient);
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
        const ModelClass = TheSellingPartnerApiForExternalFulfillmentInventoryManagement[dataType];
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
