/**
 * Selling Partner API for Pricing
 * The Selling Partner API for Pricing helps you programmatically retrieve product pricing and offer information for Amazon Marketplace products.
 *
 * The version of the OpenAPI document: v0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import expect from 'expect.js';
import sinon from 'sinon';
import { join } from 'path';

const modulePath = join(process.cwd(), 'src', 'pricing_v0', 'index.js');
const SellingPartnerApiForPricing = await import(modulePath);

let instance;
let sandbox;
const testEndpoint = 'https://localhost:3000';
const testAccessToken = "testAccessToken";

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

// Generate mock requests and responses for each operation
const mockgetCompetitivePricingData = {
  request: {
    'marketplaceId': generateMockData('String'),
    'itemType': generateMockData('String'),
  },
  response: {
    data: generateMockData('GetPricingResponse'),
    statusCode: 200,
    headers: {}
  }
};
const mockgetItemOffersData = {
  request: {
    'marketplaceId': generateMockData('String'),
    'itemCondition': generateMockData('String'),
    'asin': generateMockData('String'),
  },
  response: {
    data: generateMockData('GetOffersResponse'),
    statusCode: 200,
    headers: {}
  }
};
const mockgetItemOffersBatchData = {
  request: {
    'getItemOffersBatchRequestBody': generateMockData('GetItemOffersBatchRequest')
  },
  response: {
    data: generateMockData('GetItemOffersBatchResponse'),
    statusCode: 200,
    headers: {}
  }
};
const mockgetListingOffersData = {
  request: {
    'marketplaceId': generateMockData('String'),
    'itemCondition': generateMockData('String'),
    'sellerSKU': generateMockData('String'),
  },
  response: {
    data: generateMockData('GetOffersResponse'),
    statusCode: 200,
    headers: {}
  }
};
const mockgetListingOffersBatchData = {
  request: {
    'getListingOffersBatchRequestBody': generateMockData('GetListingOffersBatchRequest')
  },
  response: {
    data: generateMockData('GetListingOffersBatchResponse'),
    statusCode: 200,
    headers: {}
  }
};
const mockgetPricingData = {
  request: {
    'marketplaceId': generateMockData('String'),
    'itemType': generateMockData('String'),
  },
  response: {
    data: generateMockData('GetPricingResponse'),
    statusCode: 200,
    headers: {}
  }
};

describe('ProductPricingApi', () => {
  beforeEach(() => {
    sandbox = sinon.createSandbox();
    const apiClientInstance = new SellingPartnerApiForPricing.ApiClient(testEndpoint);
    apiClientInstance.applyXAmzAccessTokenToRequest(testAccessToken);
    sandbox.stub(apiClientInstance, 'callApi');
    instance = new SellingPartnerApiForPricing.ProductPricingApi(apiClientInstance);
  });

  afterEach(() => {
    sandbox.restore();
  });

  describe('getCompetitivePricing', () => {
    it('should successfully call getCompetitivePricing', async () => {
      instance.apiClient.callApi.resolves(mockgetCompetitivePricingData.response);

      const params = [
        mockgetCompetitivePricingData.request['marketplaceId'],
        mockgetCompetitivePricingData.request['itemType'],
      ];
      const data = await instance.getCompetitivePricing(...params);

      expect(data instanceof SellingPartnerApiForPricing.GetPricingResponse).to.be.true;
      expect(data).to.equal(mockgetCompetitivePricingData.response.data);
    });

    it('should successfully call getCompetitivePricingWithHttpInfo', async () => {
      instance.apiClient.callApi.resolves(mockgetCompetitivePricingData.response);

      const params = [
        mockgetCompetitivePricingData.request['marketplaceId'],
        mockgetCompetitivePricingData.request['itemType'],
      ];
      const response = await instance.getCompetitivePricingWithHttpInfo(...params);

      expect(response).to.have.property('statusCode');
      expect(response.statusCode).to.equal(mockgetCompetitivePricingData.response.statusCode)
      expect(response).to.have.property('headers');
      expect(response).to.have.property('data');
      expect(response.data).to.equal(mockgetCompetitivePricingData.response.data)
    });

    it('should handle API errors', async () => {
      const errorResponse = {
        errors: new Error('Expected error to be thrown'),
        statusCode: 400,
        headers: {}
      };
      instance.apiClient.callApi.rejects(errorResponse);

      try {
        const params = [
          mockgetCompetitivePricingData.request['marketplaceId'],
          mockgetCompetitivePricingData.request['itemType'],
        ];
        await instance.getCompetitivePricing(...params);
        throw new Error('Expected error to be thrown');
      } catch (error) {
        expect(error).to.exist;
        expect(error.statusCode).to.equal(400);
      }
    });
  });
  describe('getItemOffers', () => {
    it('should successfully call getItemOffers', async () => {
      instance.apiClient.callApi.resolves(mockgetItemOffersData.response);

      const params = [
        mockgetItemOffersData.request['marketplaceId'],
        mockgetItemOffersData.request['itemCondition'],
        mockgetItemOffersData.request['asin'],
      ];
      const data = await instance.getItemOffers(...params);

      expect(data instanceof SellingPartnerApiForPricing.GetOffersResponse).to.be.true;
      expect(data).to.equal(mockgetItemOffersData.response.data);
    });

    it('should successfully call getItemOffersWithHttpInfo', async () => {
      instance.apiClient.callApi.resolves(mockgetItemOffersData.response);

      const params = [
        mockgetItemOffersData.request['marketplaceId'],
        mockgetItemOffersData.request['itemCondition'],
        mockgetItemOffersData.request['asin'],
      ];
      const response = await instance.getItemOffersWithHttpInfo(...params);

      expect(response).to.have.property('statusCode');
      expect(response.statusCode).to.equal(mockgetItemOffersData.response.statusCode)
      expect(response).to.have.property('headers');
      expect(response).to.have.property('data');
      expect(response.data).to.equal(mockgetItemOffersData.response.data)
    });

    it('should handle API errors', async () => {
      const errorResponse = {
        errors: new Error('Expected error to be thrown'),
        statusCode: 400,
        headers: {}
      };
      instance.apiClient.callApi.rejects(errorResponse);

      try {
        const params = [
          mockgetItemOffersData.request['marketplaceId'],
          mockgetItemOffersData.request['itemCondition'],
          mockgetItemOffersData.request['asin'],
        ];
        await instance.getItemOffers(...params);
        throw new Error('Expected error to be thrown');
      } catch (error) {
        expect(error).to.exist;
        expect(error.statusCode).to.equal(400);
      }
    });
  });
  describe('getItemOffersBatch', () => {
    it('should successfully call getItemOffersBatch', async () => {
      instance.apiClient.callApi.resolves(mockgetItemOffersBatchData.response);

      const params = [
        mockgetItemOffersBatchData.request['getItemOffersBatchRequestBody']
      ];
      const data = await instance.getItemOffersBatch(...params);

      expect(data instanceof SellingPartnerApiForPricing.GetItemOffersBatchResponse).to.be.true;
      expect(data).to.equal(mockgetItemOffersBatchData.response.data);
    });

    it('should successfully call getItemOffersBatchWithHttpInfo', async () => {
      instance.apiClient.callApi.resolves(mockgetItemOffersBatchData.response);

      const params = [
        mockgetItemOffersBatchData.request['getItemOffersBatchRequestBody']
      ];
      const response = await instance.getItemOffersBatchWithHttpInfo(...params);

      expect(response).to.have.property('statusCode');
      expect(response.statusCode).to.equal(mockgetItemOffersBatchData.response.statusCode)
      expect(response).to.have.property('headers');
      expect(response).to.have.property('data');
      expect(response.data).to.equal(mockgetItemOffersBatchData.response.data)
    });

    it('should handle API errors', async () => {
      const errorResponse = {
        errors: new Error('Expected error to be thrown'),
        statusCode: 400,
        headers: {}
      };
      instance.apiClient.callApi.rejects(errorResponse);

      try {
        const params = [
          mockgetItemOffersBatchData.request['getItemOffersBatchRequestBody']
        ];
        await instance.getItemOffersBatch(...params);
        throw new Error('Expected error to be thrown');
      } catch (error) {
        expect(error).to.exist;
        expect(error.statusCode).to.equal(400);
      }
    });
  });
  describe('getListingOffers', () => {
    it('should successfully call getListingOffers', async () => {
      instance.apiClient.callApi.resolves(mockgetListingOffersData.response);

      const params = [
        mockgetListingOffersData.request['marketplaceId'],
        mockgetListingOffersData.request['itemCondition'],
        mockgetListingOffersData.request['sellerSKU'],
      ];
      const data = await instance.getListingOffers(...params);

      expect(data instanceof SellingPartnerApiForPricing.GetOffersResponse).to.be.true;
      expect(data).to.equal(mockgetListingOffersData.response.data);
    });

    it('should successfully call getListingOffersWithHttpInfo', async () => {
      instance.apiClient.callApi.resolves(mockgetListingOffersData.response);

      const params = [
        mockgetListingOffersData.request['marketplaceId'],
        mockgetListingOffersData.request['itemCondition'],
        mockgetListingOffersData.request['sellerSKU'],
      ];
      const response = await instance.getListingOffersWithHttpInfo(...params);

      expect(response).to.have.property('statusCode');
      expect(response.statusCode).to.equal(mockgetListingOffersData.response.statusCode)
      expect(response).to.have.property('headers');
      expect(response).to.have.property('data');
      expect(response.data).to.equal(mockgetListingOffersData.response.data)
    });

    it('should handle API errors', async () => {
      const errorResponse = {
        errors: new Error('Expected error to be thrown'),
        statusCode: 400,
        headers: {}
      };
      instance.apiClient.callApi.rejects(errorResponse);

      try {
        const params = [
          mockgetListingOffersData.request['marketplaceId'],
          mockgetListingOffersData.request['itemCondition'],
          mockgetListingOffersData.request['sellerSKU'],
        ];
        await instance.getListingOffers(...params);
        throw new Error('Expected error to be thrown');
      } catch (error) {
        expect(error).to.exist;
        expect(error.statusCode).to.equal(400);
      }
    });
  });
  describe('getListingOffersBatch', () => {
    it('should successfully call getListingOffersBatch', async () => {
      instance.apiClient.callApi.resolves(mockgetListingOffersBatchData.response);

      const params = [
        mockgetListingOffersBatchData.request['getListingOffersBatchRequestBody']
      ];
      const data = await instance.getListingOffersBatch(...params);

      expect(data instanceof SellingPartnerApiForPricing.GetListingOffersBatchResponse).to.be.true;
      expect(data).to.equal(mockgetListingOffersBatchData.response.data);
    });

    it('should successfully call getListingOffersBatchWithHttpInfo', async () => {
      instance.apiClient.callApi.resolves(mockgetListingOffersBatchData.response);

      const params = [
        mockgetListingOffersBatchData.request['getListingOffersBatchRequestBody']
      ];
      const response = await instance.getListingOffersBatchWithHttpInfo(...params);

      expect(response).to.have.property('statusCode');
      expect(response.statusCode).to.equal(mockgetListingOffersBatchData.response.statusCode)
      expect(response).to.have.property('headers');
      expect(response).to.have.property('data');
      expect(response.data).to.equal(mockgetListingOffersBatchData.response.data)
    });

    it('should handle API errors', async () => {
      const errorResponse = {
        errors: new Error('Expected error to be thrown'),
        statusCode: 400,
        headers: {}
      };
      instance.apiClient.callApi.rejects(errorResponse);

      try {
        const params = [
          mockgetListingOffersBatchData.request['getListingOffersBatchRequestBody']
        ];
        await instance.getListingOffersBatch(...params);
        throw new Error('Expected error to be thrown');
      } catch (error) {
        expect(error).to.exist;
        expect(error.statusCode).to.equal(400);
      }
    });
  });
  describe('getPricing', () => {
    it('should successfully call getPricing', async () => {
      instance.apiClient.callApi.resolves(mockgetPricingData.response);

      const params = [
        mockgetPricingData.request['marketplaceId'],
        mockgetPricingData.request['itemType'],
      ];
      const data = await instance.getPricing(...params);

      expect(data instanceof SellingPartnerApiForPricing.GetPricingResponse).to.be.true;
      expect(data).to.equal(mockgetPricingData.response.data);
    });

    it('should successfully call getPricingWithHttpInfo', async () => {
      instance.apiClient.callApi.resolves(mockgetPricingData.response);

      const params = [
        mockgetPricingData.request['marketplaceId'],
        mockgetPricingData.request['itemType'],
      ];
      const response = await instance.getPricingWithHttpInfo(...params);

      expect(response).to.have.property('statusCode');
      expect(response.statusCode).to.equal(mockgetPricingData.response.statusCode)
      expect(response).to.have.property('headers');
      expect(response).to.have.property('data');
      expect(response.data).to.equal(mockgetPricingData.response.data)
    });

    it('should handle API errors', async () => {
      const errorResponse = {
        errors: new Error('Expected error to be thrown'),
        statusCode: 400,
        headers: {}
      };
      instance.apiClient.callApi.rejects(errorResponse);

      try {
        const params = [
          mockgetPricingData.request['marketplaceId'],
          mockgetPricingData.request['itemType'],
        ];
        await instance.getPricing(...params);
        throw new Error('Expected error to be thrown');
      } catch (error) {
        expect(error).to.exist;
        expect(error.statusCode).to.equal(400);
      }
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
