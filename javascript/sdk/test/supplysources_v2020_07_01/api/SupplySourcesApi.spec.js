import expect from 'expect.js';
import { join } from 'path';

const modulePath = join(process.cwd(), 'src', 'supplysources_v2020_07_01', 'index.js');
const SellingPartnerApiForSupplySources = await import(modulePath);

describe('SupplySourcesApi', () => {
  let instance;
  const testEndpoint = 'https://localhost:3000';
  const testAccessToken = "testAccessToken";

  beforeEach(() => {
    const apiClientInstance = new SellingPartnerApiForSupplySources.ApiClient(testEndpoint);
    apiClientInstance.applyXAmzAccessTokenToRequest(testAccessToken);
    instance = new SellingPartnerApiForSupplySources.SupplySourcesApi(apiClientInstance);
  });

  describe('archiveSupplySource', () => {
    it('should successfully call archiveSupplySourceWithHttpInfo', async () => {
      instructBackendMock("supplySources", "archiveSupplySource", "204")
      const params = [
        generateMockData('String')
      ];
      const response = await instance.archiveSupplySourceWithHttpInfo(...params);

      expect(response).to.have.property('statusCode');
      expect(response.statusCode).to.equal()
      expect(response).to.have.property('data');
    });
  });
  describe('createSupplySource', () => {
    it('should successfully call createSupplySourceWithHttpInfo', async () => {
      instructBackendMock("supplySources", "createSupplySource", "200")
      const params = [
        generateMockData('CreateSupplySourceRequest')
      ];
      const response = await instance.createSupplySourceWithHttpInfo(...params);

      expect(response).to.have.property('statusCode');
      expect(response.statusCode).to.equal()
      expect(response).to.have.property('data');
    });
  });
  describe('getSupplySource', () => {
    it('should successfully call getSupplySourceWithHttpInfo', async () => {
      instructBackendMock("supplySources", "getSupplySource", "200")
      const params = [
        generateMockData('String')
      ];
      const response = await instance.getSupplySourceWithHttpInfo(...params);

      expect(response).to.have.property('statusCode');
      expect(response.statusCode).to.equal()
      expect(response).to.have.property('data');
    });
  });
  describe('getSupplySources', () => {
    it('should successfully call getSupplySourcesWithHttpInfo', async () => {
      instructBackendMock("supplySources", "getSupplySources", "200")
      const params = [
      ];
      const response = await instance.getSupplySourcesWithHttpInfo(...params);

      expect(response).to.have.property('statusCode');
      expect(response.statusCode).to.equal()
      expect(response).to.have.property('data');
    });
  });
  describe('updateSupplySource', () => {
    it('should successfully call updateSupplySourceWithHttpInfo', async () => {
      instructBackendMock("supplySources", "updateSupplySource", "204")
      const params = [
        generateMockData('String'),
      ];
      const response = await instance.updateSupplySourceWithHttpInfo(...params);

      expect(response).to.have.property('statusCode');
      expect(response.statusCode).to.equal()
      expect(response).to.have.property('data');
    });
  });
  describe('updateSupplySourceStatus', () => {
    it('should successfully call updateSupplySourceStatusWithHttpInfo', async () => {
      instructBackendMock("supplySources", "updateSupplySourceStatus", "204")
      const params = [
        generateMockData('String'),
      ];
      const response = await instance.updateSupplySourceStatusWithHttpInfo(...params);

      expect(response).to.have.property('statusCode');
      expect(response.statusCode).to.equal()
      expect(response).to.have.property('data');
    });
  });

  describe('constructor', () => {
    it('should use default ApiClient when none provided', () => {
      const defaultInstance = new SellingPartnerApiForSupplySources.SupplySourcesApi();
      expect(defaultInstance.apiClient).to.equal(SellingPartnerApiForSupplySources.ApiClient.instance);
    });

    it('should use provided ApiClient', () => {
      const customClient = new SellingPartnerApiForSupplySources.ApiClient();
      const customInstance = new SellingPartnerApiForSupplySources.SupplySourcesApi(customClient);
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
        const ModelClass = SellingPartnerApiForSupplySources[dataType];
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
