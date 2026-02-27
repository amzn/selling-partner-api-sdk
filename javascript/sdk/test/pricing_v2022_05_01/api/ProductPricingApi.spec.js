import expect from 'expect.js';
import { join } from 'path';

const modulePath = join(process.cwd(), 'src', 'pricing_v2022_05_01', 'index.js');
const SellingPartnerApiForPricing = await import(modulePath);
const endpoint = 'https://localhost:3000';

describe('ProductPricingApi', () => {
  let instance;

  beforeEach(() => {
    const apiClientInstance = new SellingPartnerApiForPricing.ApiClient(endpoint);
    apiClientInstance.applyXAmzAccessTokenToRequest("testAccessToken");
    instance = new SellingPartnerApiForPricing.ProductPricingApi(apiClientInstance);
  });

  describe('getCompetitiveSummary', () => {
    it('should successfully call getCompetitiveSummaryWithHttpInfo', async () => {
      await instructBackendMock("productPricing", "getCompetitiveSummary", "200")
      const params = [
        generateMockData('CompetitiveSummaryBatchRequest')
      ];
      const response = await instance.getCompetitiveSummaryWithHttpInfo(...params);

      expect(response).to.have.property('statusCode');
      expect(response.statusCode).to.equal()
      expect(response).to.have.property('data');
    });
  });
  describe('getFeaturedOfferExpectedPriceBatch', () => {
    it('should successfully call getFeaturedOfferExpectedPriceBatchWithHttpInfo', async () => {
      await instructBackendMock("productPricing", "getFeaturedOfferExpectedPriceBatch", "200")
      const params = [
        generateMockData('GetFeaturedOfferExpectedPriceBatchRequest')
      ];
      const response = await instance.getFeaturedOfferExpectedPriceBatchWithHttpInfo(...params);

      expect(response).to.have.property('statusCode');
      expect(response.statusCode).to.equal()
      expect(response).to.have.property('data');
    });
  });

  describe('constructor', () => {
    it('should use default ApiClient when none provided', () => {
      const defaultInstance = new SellingPartnerApiForPricing.ProductPricingApi();
      expect(defaultInstance.apiClient).to.equal(SellingPartnerApiForPricing.ApiClient.instance);
    });

    it('should use provided ApiClient', () => {
      const customClient = new SellingPartnerApiForPricing.ApiClient();
      const customInstance = new SellingPartnerApiForPricing.ProductPricingApi(customClient);
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
        const ModelClass = SellingPartnerApiForPricing[dataType];
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
