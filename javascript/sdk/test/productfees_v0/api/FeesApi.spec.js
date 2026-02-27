import expect from 'expect.js';
import { join } from 'path';

const modulePath = join(process.cwd(), 'src', 'productfees_v0', 'index.js');
const SellingPartnerApiForProductFees = await import(modulePath);
const endpoint = 'http://localhost:3000';

describe('FeesApi', () => {
  let instance;

  beforeEach(() => {
    const apiClientInstance = new SellingPartnerApiForProductFees.ApiClient(endpoint);
    apiClientInstance.applyXAmzAccessTokenToRequest("testAccessToken");
    instance = new SellingPartnerApiForProductFees.FeesApi(apiClientInstance);
  });

  describe('getMyFeesEstimateForASIN', () => {
    it('should successfully call getMyFeesEstimateForASINWithHttpInfo', async () => {
      await instructBackendMock("fees", "getMyFeesEstimateForASIN", "200")
      const params = [
        generateMockData('String'),
        generateMockData('GetMyFeesEstimateRequest')
      ];
      const response = await instance.getMyFeesEstimateForASINWithHttpInfo(...params);

      expect(response).to.have.property('statusCode');
      expect(response.statusCode).to.equal()
      expect(response).to.have.property('data');
    });
  });
  describe('getMyFeesEstimateForSKU', () => {
    it('should successfully call getMyFeesEstimateForSKUWithHttpInfo', async () => {
      await instructBackendMock("fees", "getMyFeesEstimateForSKU", "200")
      const params = [
        generateMockData('String'),
        generateMockData('GetMyFeesEstimateRequest')
      ];
      const response = await instance.getMyFeesEstimateForSKUWithHttpInfo(...params);

      expect(response).to.have.property('statusCode');
      expect(response.statusCode).to.equal()
      expect(response).to.have.property('data');
    });
  });
  describe('getMyFeesEstimates', () => {
    it('should successfully call getMyFeesEstimatesWithHttpInfo', async () => {
      await instructBackendMock("fees", "getMyFeesEstimates", "200")
      const params = [
        generateMockData('[FeesEstimateByIdRequest]', true)
      ];
      const response = await instance.getMyFeesEstimatesWithHttpInfo(...params);

      expect(response).to.have.property('statusCode');
      expect(response.statusCode).to.equal()
      expect(response).to.have.property('data');
    });
  });

  describe('constructor', () => {
    it('should use default ApiClient when none provided', () => {
      const defaultInstance = new SellingPartnerApiForProductFees.FeesApi();
      expect(defaultInstance.apiClient).to.equal(SellingPartnerApiForProductFees.ApiClient.instance);
    });

    it('should use provided ApiClient', () => {
      const customClient = new SellingPartnerApiForProductFees.ApiClient();
      const customInstance = new SellingPartnerApiForProductFees.FeesApi(customClient);
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
        const ModelClass = SellingPartnerApiForProductFees[dataType];
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
