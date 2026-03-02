import expect from 'expect.js';
import { join } from 'path';

const modulePath = join(process.cwd(), 'src', 'listingsrestrictions_v2021_08_01', 'index.js');
const SellingPartnerApiForListingsRestrictions = await import(modulePath);
const endpoint = 'http://localhost:3000';

describe('ListingsApi', () => {
  let instance;

  beforeEach(() => {
    const apiClientInstance = new SellingPartnerApiForListingsRestrictions.ApiClient(endpoint);
    apiClientInstance.applyXAmzAccessTokenToRequest("testAccessToken");
    instance = new SellingPartnerApiForListingsRestrictions.ListingsApi(apiClientInstance);
  });

  describe('getListingsRestrictions', () => {
    it('should successfully call getListingsRestrictionsWithHttpInfo', async () => {
      await instructBackendMock("listings", "getListingsRestrictions", "200")
      const params = [
        generateMockData('String'),
        generateMockData('String'),
        generateMockData('String', true),
      ];
      const response = await instance.getListingsRestrictionsWithHttpInfo(...params);

      expect(response.response).to.have.property('statusCode');
      expect(response.response.statusCode).to.equal(200)
      assertValidResponsePayload(200, response.data);
    });
  });

  describe('constructor', () => {
    it('should use default ApiClient when none provided', () => {
      const defaultInstance = new SellingPartnerApiForListingsRestrictions.ListingsApi();
      expect(defaultInstance.apiClient).to.equal(SellingPartnerApiForListingsRestrictions.ApiClient.instance);
    });

    it('should use provided ApiClient', () => {
      const customClient = new SellingPartnerApiForListingsRestrictions.ApiClient();
      const customInstance = new SellingPartnerApiForListingsRestrictions.ListingsApi(customClient);
      expect(customInstance.apiClient).to.equal(customClient);
    });
  });
});

function assertValidResponsePayload(statusCode, payload) {
  if (statusCode !== 204) expect(payload).to.be.ok();
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
        const ModelClass = SellingPartnerApiForListingsRestrictions[dataType];
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
