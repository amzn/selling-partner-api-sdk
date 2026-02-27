import expect from 'expect.js';
import { join } from 'path';

const modulePath = join(process.cwd(), 'src', 'catalogitems_v2022_04_01', 'index.js');
const SellingPartnerApiForCatalogItems = await import(modulePath);

describe('CatalogApi', () => {
  let instance;
  const testEndpoint = 'https://localhost:3000';
  const testAccessToken = "testAccessToken";

  beforeEach(() => {
    const apiClientInstance = new SellingPartnerApiForCatalogItems.ApiClient(testEndpoint);
    apiClientInstance.applyXAmzAccessTokenToRequest(testAccessToken);
    instance = new SellingPartnerApiForCatalogItems.CatalogApi(apiClientInstance);
  });

  describe('getCatalogItem', () => {
    it('should successfully call getCatalogItemWithHttpInfo', async () => {
      instructBackendMock("catalog", "getCatalogItem", "200")
      const params = [
        generateMockData('String'),
        generateMockData('String', true),
      ];
      const response = await instance.getCatalogItemWithHttpInfo(...params);

      expect(response).to.have.property('statusCode');
      expect(response.statusCode).to.equal()
      expect(response).to.have.property('data');
    });
  });
  describe('searchCatalogItems', () => {
    it('should successfully call searchCatalogItemsWithHttpInfo', async () => {
      instructBackendMock("catalog", "searchCatalogItems", "200")
      const params = [
        generateMockData('String', true),
      ];
      const response = await instance.searchCatalogItemsWithHttpInfo(...params);

      expect(response).to.have.property('statusCode');
      expect(response.statusCode).to.equal()
      expect(response).to.have.property('data');
    });
  });

  describe('constructor', () => {
    it('should use default ApiClient when none provided', () => {
      const defaultInstance = new SellingPartnerApiForCatalogItems.CatalogApi();
      expect(defaultInstance.apiClient).to.equal(SellingPartnerApiForCatalogItems.ApiClient.instance);
    });

    it('should use provided ApiClient', () => {
      const customClient = new SellingPartnerApiForCatalogItems.ApiClient();
      const customInstance = new SellingPartnerApiForCatalogItems.CatalogApi(customClient);
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
        const ModelClass = SellingPartnerApiForCatalogItems[dataType];
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
