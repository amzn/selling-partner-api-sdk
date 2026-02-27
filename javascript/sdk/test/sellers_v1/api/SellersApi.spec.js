import expect from 'expect.js';
import { join } from 'path';

const modulePath = join(process.cwd(), 'src', 'sellers_v1', 'index.js');
const TheSellingPartnerApiForSellers = await import(modulePath);
const endpoint = 'http://localhost:3000';

describe('SellersApi', () => {
  let instance;

  beforeEach(() => {
    const apiClientInstance = new TheSellingPartnerApiForSellers.ApiClient(endpoint);
    apiClientInstance.applyXAmzAccessTokenToRequest("testAccessToken");
    instance = new TheSellingPartnerApiForSellers.SellersApi(apiClientInstance);
  });

  describe('getAccount', () => {
    it('should successfully call getAccountWithHttpInfo', async () => {
      await instructBackendMock("sellers", "getAccount", "200")
      const response = await instance.getAccountWithHttpInfo();

      expect(response).to.have.property('statusCode');
      expect(response.statusCode).to.equal()
      expect(response).to.have.property('data');
    });
  });
  describe('getMarketplaceParticipations', () => {
    it('should successfully call getMarketplaceParticipationsWithHttpInfo', async () => {
      await instructBackendMock("sellers", "getMarketplaceParticipations", "200")
      const response = await instance.getMarketplaceParticipationsWithHttpInfo();

      expect(response).to.have.property('statusCode');
      expect(response.statusCode).to.equal()
      expect(response).to.have.property('data');
    });
  });

  describe('constructor', () => {
    it('should use default ApiClient when none provided', () => {
      const defaultInstance = new TheSellingPartnerApiForSellers.SellersApi();
      expect(defaultInstance.apiClient).to.equal(TheSellingPartnerApiForSellers.ApiClient.instance);
    });

    it('should use provided ApiClient', () => {
      const customClient = new TheSellingPartnerApiForSellers.ApiClient();
      const customInstance = new TheSellingPartnerApiForSellers.SellersApi(customClient);
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
        const ModelClass = TheSellingPartnerApiForSellers[dataType];
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
