/**
 * The Selling Partner API for Sellers
 * The [Selling Partner API for Sellers](https://developer-docs.amazon.com/sp-api/docs/sellers-api-v1-reference) (Sellers API) provides essential information about seller accounts, such as:  - The marketplaces a seller can list in - The default language and currency of a marketplace - Whether the seller has suspended listings  Refer to the [Sellers API reference](https://developer-docs.amazon.com/sp-api/docs/sellers-api-v1-reference) for details about this API's operations, data types, and schemas.
 *
 * The version of the OpenAPI document: v1
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

const modulePath = join(process.cwd(), 'src', 'sellers_v1', 'index.js');
const TheSellingPartnerApiForSellers = await import(modulePath);

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

// Generate mock requests and responses for each operation
const mockgetAccountData = {
  request: {
  },
  response: {
    data: generateMockData('GetAccountResponse'),
    statusCode: 200,
    headers: {}
  }
};
const mockgetMarketplaceParticipationsData = {
  request: {
  },
  response: {
    data: generateMockData('GetMarketplaceParticipationsResponse'),
    statusCode: 200,
    headers: {}
  }
};

describe('SellersApi', () => {
  beforeEach(() => {
    sandbox = sinon.createSandbox();
    const apiClientInstance = new TheSellingPartnerApiForSellers.ApiClient(testEndpoint);
    apiClientInstance.applyXAmzAccessTokenToRequest(testAccessToken);
    sandbox.stub(apiClientInstance, 'callApi');
    instance = new TheSellingPartnerApiForSellers.SellersApi(apiClientInstance);
  });

  afterEach(() => {
    sandbox.restore();
  });

  describe('getAccount', () => {
    it('should successfully call getAccount', async () => {
      instance.apiClient.callApi.resolves(mockgetAccountData.response);

      const data = await instance.getAccount();

      expect(data instanceof TheSellingPartnerApiForSellers.GetAccountResponse).to.be.true;
      expect(data).to.equal(mockgetAccountData.response.data);
    });

    it('should successfully call getAccountWithHttpInfo', async () => {
      instance.apiClient.callApi.resolves(mockgetAccountData.response);

      const response = await instance.getAccountWithHttpInfo();

      expect(response).to.have.property('statusCode');
      expect(response.statusCode).to.equal(mockgetAccountData.response.statusCode)
      expect(response).to.have.property('headers');
      expect(response).to.have.property('data');
      expect(response.data).to.equal(mockgetAccountData.response.data)
    });

    it('should handle API errors', async () => {
      const errorResponse = {
        errors: new Error('Expected error to be thrown'),
        statusCode: 400,
        headers: {}
      };
      instance.apiClient.callApi.rejects(errorResponse);

      try {
        await instance.getAccount();
        throw new Error('Expected error to be thrown');
      } catch (error) {
        expect(error).to.exist;
        expect(error.statusCode).to.equal(400);
      }
    });
  });
  describe('getMarketplaceParticipations', () => {
    it('should successfully call getMarketplaceParticipations', async () => {
      instance.apiClient.callApi.resolves(mockgetMarketplaceParticipationsData.response);

      const data = await instance.getMarketplaceParticipations();

      expect(data instanceof TheSellingPartnerApiForSellers.GetMarketplaceParticipationsResponse).to.be.true;
      expect(data).to.equal(mockgetMarketplaceParticipationsData.response.data);
    });

    it('should successfully call getMarketplaceParticipationsWithHttpInfo', async () => {
      instance.apiClient.callApi.resolves(mockgetMarketplaceParticipationsData.response);

      const response = await instance.getMarketplaceParticipationsWithHttpInfo();

      expect(response).to.have.property('statusCode');
      expect(response.statusCode).to.equal(mockgetMarketplaceParticipationsData.response.statusCode)
      expect(response).to.have.property('headers');
      expect(response).to.have.property('data');
      expect(response.data).to.equal(mockgetMarketplaceParticipationsData.response.data)
    });

    it('should handle API errors', async () => {
      const errorResponse = {
        errors: new Error('Expected error to be thrown'),
        statusCode: 400,
        headers: {}
      };
      instance.apiClient.callApi.rejects(errorResponse);

      try {
        await instance.getMarketplaceParticipations();
        throw new Error('Expected error to be thrown');
      } catch (error) {
        expect(error).to.exist;
        expect(error.statusCode).to.equal(400);
      }
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
