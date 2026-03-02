import expect from 'expect.js';
import { join } from 'path';

const modulePath = join(process.cwd(), 'src', 'replenishment_v2022_11_07', 'index.js');
const SellingPartnerApiForReplenishment = await import(modulePath);
const endpoint = 'http://localhost:3000';

describe('OffersApi', () => {
  let instance;

  beforeEach(() => {
    const apiClientInstance = new SellingPartnerApiForReplenishment.ApiClient(endpoint);
    apiClientInstance.applyXAmzAccessTokenToRequest("testAccessToken");
    instance = new SellingPartnerApiForReplenishment.OffersApi(apiClientInstance);
  });

  describe('listOfferMetrics', () => {
    it('should successfully call listOfferMetricsWithHttpInfo', async () => {
      await instructBackendMock("offers", "listOfferMetrics", "200")
      const params = [
      ];
      const response = await instance.listOfferMetricsWithHttpInfo(...params);

      expect(response.response).to.have.property('statusCode');
      expect(response.response.statusCode).to.equal(200)
      assertValidResponsePayload(200, response.data.payload);
    });
  });
  describe('listOffers', () => {
    it('should successfully call listOffersWithHttpInfo', async () => {
      await instructBackendMock("offers", "listOffers", "200")
      const params = [
      ];
      const response = await instance.listOffersWithHttpInfo(...params);

      expect(response.response).to.have.property('statusCode');
      expect(response.response.statusCode).to.equal(200)
      assertValidResponsePayload(200, response.data.payload);
    });
  });

  describe('constructor', () => {
    it('should use default ApiClient when none provided', () => {
      const defaultInstance = new SellingPartnerApiForReplenishment.OffersApi();
      expect(defaultInstance.apiClient).to.equal(SellingPartnerApiForReplenishment.ApiClient.instance);
    });

    it('should use provided ApiClient', () => {
      const customClient = new SellingPartnerApiForReplenishment.ApiClient();
      const customInstance = new SellingPartnerApiForReplenishment.OffersApi(customClient);
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
        const ModelClass = SellingPartnerApiForReplenishment[dataType];
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
