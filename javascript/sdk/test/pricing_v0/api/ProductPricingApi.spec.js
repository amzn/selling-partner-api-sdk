import expect from 'expect.js';
import { join } from 'path';

const modulePath = join(process.cwd(), 'src', 'pricing_v0', 'index.js');
const SellingPartnerApiForPricing = await import(modulePath);
const endpoint = 'http://localhost:3000';

describe('ProductPricingApi', () => {
  let instance;

  beforeEach(() => {
    const apiClientInstance = new SellingPartnerApiForPricing.ApiClient(endpoint);
    apiClientInstance.applyXAmzAccessTokenToRequest("testAccessToken");
    instance = new SellingPartnerApiForPricing.ProductPricingApi(apiClientInstance);
  });

  describe('getCompetitivePricing', () => {
    it('should successfully call getCompetitivePricingWithHttpInfo', async () => {
      await instructBackendMock("productPricing", "getCompetitivePricing", "200")
      const params = [
        generateMockData('String'),
        generateMockData('String'),
      ];
      const response = await instance.getCompetitivePricingWithHttpInfo(...params);

      expect(response).to.have.property('statusCode');
      expect(response.statusCode).to.equal()
      expect(response).to.have.property('data');
    });
  });
  describe('getItemOffers', () => {
    it('should successfully call getItemOffersWithHttpInfo', async () => {
      await instructBackendMock("productPricing", "getItemOffers", "200")
      const params = [
        generateMockData('String'),
        generateMockData('String'),
        generateMockData('String'),
      ];
      const response = await instance.getItemOffersWithHttpInfo(...params);

      expect(response).to.have.property('statusCode');
      expect(response.statusCode).to.equal()
      expect(response).to.have.property('data');
    });
  });
  describe('getItemOffersBatch', () => {
    it('should successfully call getItemOffersBatchWithHttpInfo', async () => {
      await instructBackendMock("productPricing", "getItemOffersBatch", "200")
      const params = [
        generateMockData('GetItemOffersBatchRequest')
      ];
      const response = await instance.getItemOffersBatchWithHttpInfo(...params);

      expect(response).to.have.property('statusCode');
      expect(response.statusCode).to.equal()
      expect(response).to.have.property('data');
    });
  });
  describe('getListingOffers', () => {
    it('should successfully call getListingOffersWithHttpInfo', async () => {
      await instructBackendMock("productPricing", "getListingOffers", "200")
      const params = [
        generateMockData('String'),
        generateMockData('String'),
        generateMockData('String'),
      ];
      const response = await instance.getListingOffersWithHttpInfo(...params);

      expect(response).to.have.property('statusCode');
      expect(response.statusCode).to.equal()
      expect(response).to.have.property('data');
    });
  });
  describe('getListingOffersBatch', () => {
    it('should successfully call getListingOffersBatchWithHttpInfo', async () => {
      await instructBackendMock("productPricing", "getListingOffersBatch", "200")
      const params = [
        generateMockData('GetListingOffersBatchRequest')
      ];
      const response = await instance.getListingOffersBatchWithHttpInfo(...params);

      expect(response).to.have.property('statusCode');
      expect(response.statusCode).to.equal()
      expect(response).to.have.property('data');
    });
  });
  describe('getPricing', () => {
    it('should successfully call getPricingWithHttpInfo', async () => {
      await instructBackendMock("productPricing", "getPricing", "200")
      const params = [
        generateMockData('String'),
        generateMockData('String'),
      ];
      const response = await instance.getPricingWithHttpInfo(...params);

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
