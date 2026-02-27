import expect from 'expect.js';
import { join } from 'path';

const modulePath = join(process.cwd(), 'src', 'fbainventory_v1', 'index.js');
const SellingPartnerApiForFbaInventory = await import(modulePath);
const endpoint = 'https://localhost:3000';

describe('FbaInventoryApi', () => {
  let instance;

  beforeEach(() => {
    const apiClientInstance = new SellingPartnerApiForFbaInventory.ApiClient(endpoint);
    apiClientInstance.applyXAmzAccessTokenToRequest("testAccessToken");
    instance = new SellingPartnerApiForFbaInventory.FbaInventoryApi(apiClientInstance);
  });

  describe('addInventory', () => {
    it('should successfully call addInventoryWithHttpInfo', async () => {
      await instructBackendMock("fbaInventory", "addInventory", "200")
      const params = [
        generateMockData('String'),
        generateMockData('AddInventoryRequest')
      ];
      const response = await instance.addInventoryWithHttpInfo(...params);

      expect(response).to.have.property('statusCode');
      expect(response.statusCode).to.equal()
      expect(response).to.have.property('data');
    });
  });
  describe('createInventoryItem', () => {
    it('should successfully call createInventoryItemWithHttpInfo', async () => {
      await instructBackendMock("fbaInventory", "createInventoryItem", "200")
      const params = [
        generateMockData('CreateInventoryItemRequest')
      ];
      const response = await instance.createInventoryItemWithHttpInfo(...params);

      expect(response).to.have.property('statusCode');
      expect(response.statusCode).to.equal()
      expect(response).to.have.property('data');
    });
  });
  describe('deleteInventoryItem', () => {
    it('should successfully call deleteInventoryItemWithHttpInfo', async () => {
      await instructBackendMock("fbaInventory", "deleteInventoryItem", "200")
      const params = [
        generateMockData('String'),
        generateMockData('String')
      ];
      const response = await instance.deleteInventoryItemWithHttpInfo(...params);

      expect(response).to.have.property('statusCode');
      expect(response.statusCode).to.equal()
      expect(response).to.have.property('data');
    });
  });
  describe('getInventorySummaries', () => {
    it('should successfully call getInventorySummariesWithHttpInfo', async () => {
      await instructBackendMock("fbaInventory", "getInventorySummaries", "200")
      const params = [
        generateMockData('String'),
        generateMockData('String'),
        generateMockData('String', true),
      ];
      const response = await instance.getInventorySummariesWithHttpInfo(...params);

      expect(response).to.have.property('statusCode');
      expect(response.statusCode).to.equal()
      expect(response).to.have.property('data');
    });
  });

  describe('constructor', () => {
    it('should use default ApiClient when none provided', () => {
      const defaultInstance = new SellingPartnerApiForFbaInventory.FbaInventoryApi();
      expect(defaultInstance.apiClient).to.equal(SellingPartnerApiForFbaInventory.ApiClient.instance);
    });

    it('should use provided ApiClient', () => {
      const customClient = new SellingPartnerApiForFbaInventory.ApiClient();
      const customInstance = new SellingPartnerApiForFbaInventory.FbaInventoryApi(customClient);
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
        const ModelClass = SellingPartnerApiForFbaInventory[dataType];
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
