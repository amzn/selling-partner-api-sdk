import expect from 'expect.js';
import { join } from 'path';

const modulePath = join(process.cwd(), 'src', 'listingsitems_v2021_08_01', 'index.js');
const SellingPartnerApiForListingsItems = await import(modulePath);
const endpoint = 'http://localhost:3000';

describe('ListingsApi', () => {
  let instance;

  beforeEach(() => {
    const apiClientInstance = new SellingPartnerApiForListingsItems.ApiClient(endpoint);
    apiClientInstance.applyXAmzAccessTokenToRequest("testAccessToken");
    instance = new SellingPartnerApiForListingsItems.ListingsApi(apiClientInstance);
  });

  describe('deleteListingsItem', () => {
    it('should successfully call deleteListingsItemWithHttpInfo', async () => {
      await instructBackendMock("listings", "deleteListingsItem", "200")
      const params = [
        generateMockData('String'),
        generateMockData('String'),
        generateMockData('String', true),
      ];
      const response = await instance.deleteListingsItemWithHttpInfo(...params);

      expect(response).to.have.property('statusCode');
      expect(response.statusCode).to.equal()
      expect(response).to.have.property('data');
    });
  });
  describe('getListingsItem', () => {
    it('should successfully call getListingsItemWithHttpInfo', async () => {
      await instructBackendMock("listings", "getListingsItem", "200")
      const params = [
        generateMockData('String'),
        generateMockData('String'),
        generateMockData('String', true),
      ];
      const response = await instance.getListingsItemWithHttpInfo(...params);

      expect(response).to.have.property('statusCode');
      expect(response.statusCode).to.equal()
      expect(response).to.have.property('data');
    });
  });
  describe('patchListingsItem', () => {
    it('should successfully call patchListingsItemWithHttpInfo', async () => {
      await instructBackendMock("listings", "patchListingsItem", "200")
      const params = [
        generateMockData('String'),
        generateMockData('String'),
        generateMockData('String', true),
        generateMockData('ListingsItemPatchRequest'),
      ];
      const response = await instance.patchListingsItemWithHttpInfo(...params);

      expect(response).to.have.property('statusCode');
      expect(response.statusCode).to.equal()
      expect(response).to.have.property('data');
    });
  });
  describe('putListingsItem', () => {
    it('should successfully call putListingsItemWithHttpInfo', async () => {
      await instructBackendMock("listings", "putListingsItem", "200")
      const params = [
        generateMockData('String'),
        generateMockData('String'),
        generateMockData('String', true),
        generateMockData('ListingsItemPutRequest'),
      ];
      const response = await instance.putListingsItemWithHttpInfo(...params);

      expect(response).to.have.property('statusCode');
      expect(response.statusCode).to.equal()
      expect(response).to.have.property('data');
    });
  });
  describe('searchListingsItems', () => {
    it('should successfully call searchListingsItemsWithHttpInfo', async () => {
      await instructBackendMock("listings", "searchListingsItems", "200")
      const params = [
        generateMockData('String'),
        generateMockData('String', true),
      ];
      const response = await instance.searchListingsItemsWithHttpInfo(...params);

      expect(response).to.have.property('statusCode');
      expect(response.statusCode).to.equal()
      expect(response).to.have.property('data');
    });
  });

  describe('constructor', () => {
    it('should use default ApiClient when none provided', () => {
      const defaultInstance = new SellingPartnerApiForListingsItems.ListingsApi();
      expect(defaultInstance.apiClient).to.equal(SellingPartnerApiForListingsItems.ApiClient.instance);
    });

    it('should use provided ApiClient', () => {
      const customClient = new SellingPartnerApiForListingsItems.ApiClient();
      const customInstance = new SellingPartnerApiForListingsItems.ListingsApi(customClient);
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
        const ModelClass = SellingPartnerApiForListingsItems[dataType];
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
