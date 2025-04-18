/**
 * Selling Partner API for Tokens 
 * The Selling Partner API for Tokens provides a secure way to access a customer's PII (Personally Identifiable Information). You can call the Tokens API to get a Restricted Data Token (RDT) for one or more restricted resources that you specify. The RDT authorizes subsequent calls to restricted operations that correspond to the restricted resources that you specified.  For more information, see the [Tokens API Use Case Guide](doc:tokens-api-use-case-guide).
 *
 * The version of the OpenAPI document: 2021-03-01
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

const modulePath = join(process.cwd(), 'src', 'tokens_v2021_03_01', 'index.js');
const SellingPartnerApiForTokens = await import(modulePath);

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
        const ModelClass = SellingPartnerApiForTokens[dataType];
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
const mockcreateRestrictedDataTokenData = {
  request: {
    'body': generateMockData('CreateRestrictedDataTokenRequest')
  },
  response: {
    data: generateMockData('CreateRestrictedDataTokenResponse'),
    statusCode: 200,
    headers: {}
  }
};

describe('TokensApi', () => {
  beforeEach(() => {
    sandbox = sinon.createSandbox();
    const apiClientInstance = new SellingPartnerApiForTokens.ApiClient(testEndpoint);
    apiClientInstance.applyXAmzAccessTokenToRequest(testAccessToken);
    sandbox.stub(apiClientInstance, 'callApi');
    instance = new SellingPartnerApiForTokens.TokensApi(apiClientInstance);
  });

  afterEach(() => {
    sandbox.restore();
  });

  describe('createRestrictedDataToken', () => {
    it('should successfully call createRestrictedDataToken', async () => {
      instance.apiClient.callApi.resolves(mockcreateRestrictedDataTokenData.response);

      const params = [
        mockcreateRestrictedDataTokenData.request['body']
      ];
      const data = await instance.createRestrictedDataToken(...params);

      expect(data instanceof SellingPartnerApiForTokens.CreateRestrictedDataTokenResponse).to.be.true;
      expect(data).to.equal(mockcreateRestrictedDataTokenData.response.data);
    });

    it('should successfully call createRestrictedDataTokenWithHttpInfo', async () => {
      instance.apiClient.callApi.resolves(mockcreateRestrictedDataTokenData.response);

      const params = [
        mockcreateRestrictedDataTokenData.request['body']
      ];
      const response = await instance.createRestrictedDataTokenWithHttpInfo(...params);

      expect(response).to.have.property('statusCode');
      expect(response.statusCode).to.equal(mockcreateRestrictedDataTokenData.response.statusCode)
      expect(response).to.have.property('headers');
      expect(response).to.have.property('data');
      expect(response.data).to.equal(mockcreateRestrictedDataTokenData.response.data)
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
          mockcreateRestrictedDataTokenData.request['body']
        ];
        await instance.createRestrictedDataToken(...params);
        throw new Error('Expected error to be thrown');
      } catch (error) {
        expect(error).to.exist;
        expect(error.statusCode).to.equal(400);
      }
    });
  });

  describe('constructor', () => {
    it('should use default ApiClient when none provided', () => {
      const defaultInstance = new SellingPartnerApiForTokens.TokensApi();
      expect(defaultInstance.apiClient).to.equal(SellingPartnerApiForTokens.ApiClient.instance);
    });

    it('should use provided ApiClient', () => {
      const customClient = new SellingPartnerApiForTokens.ApiClient();
      const customInstance = new SellingPartnerApiForTokens.TokensApi(customClient);
      expect(customInstance.apiClient).to.equal(customClient);
    });
  });
});
