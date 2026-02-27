import expect from 'expect.js';
import { join } from 'path';

const modulePath = join(process.cwd(), 'src', 'producttypedefinitions_v2020_09_01', 'index.js');
const SellingPartnerApiForProductTypeDefinitions = await import(modulePath);
const endpoint = 'https://localhost:3000';

describe('DefinitionsApi', () => {
  let instance;

  beforeEach(() => {
    const apiClientInstance = new SellingPartnerApiForProductTypeDefinitions.ApiClient(endpoint);
    apiClientInstance.applyXAmzAccessTokenToRequest("testAccessToken");
    instance = new SellingPartnerApiForProductTypeDefinitions.DefinitionsApi(apiClientInstance);
  });

  describe('getDefinitionsProductType', () => {
    it('should successfully call getDefinitionsProductTypeWithHttpInfo', async () => {
      await instructBackendMock("definitions", "getDefinitionsProductType", "200")
      const params = [
        generateMockData('String'),
        generateMockData('String', true),
      ];
      const response = await instance.getDefinitionsProductTypeWithHttpInfo(...params);

      expect(response).to.have.property('statusCode');
      expect(response.statusCode).to.equal()
      expect(response).to.have.property('data');
    });
  });
  describe('searchDefinitionsProductTypes', () => {
    it('should successfully call searchDefinitionsProductTypesWithHttpInfo', async () => {
      await instructBackendMock("definitions", "searchDefinitionsProductTypes", "200")
      const params = [
        generateMockData('String', true),
      ];
      const response = await instance.searchDefinitionsProductTypesWithHttpInfo(...params);

      expect(response).to.have.property('statusCode');
      expect(response.statusCode).to.equal()
      expect(response).to.have.property('data');
    });
  });

  describe('constructor', () => {
    it('should use default ApiClient when none provided', () => {
      const defaultInstance = new SellingPartnerApiForProductTypeDefinitions.DefinitionsApi();
      expect(defaultInstance.apiClient).to.equal(SellingPartnerApiForProductTypeDefinitions.ApiClient.instance);
    });

    it('should use provided ApiClient', () => {
      const customClient = new SellingPartnerApiForProductTypeDefinitions.ApiClient();
      const customInstance = new SellingPartnerApiForProductTypeDefinitions.DefinitionsApi(customClient);
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
        const ModelClass = SellingPartnerApiForProductTypeDefinitions[dataType];
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
