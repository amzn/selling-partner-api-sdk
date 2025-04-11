/**
 * The Selling Partner API for Automotive.
 * The Selling Partner API for Automotive provides programmatic access to information needed by selling partners to provide compatibility information about their listed products.
 *
 * The version of the OpenAPI document: 2024-11-01
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

const modulePath = join(process.cwd(), 'src', 'vehicles_v2024_11_01', 'index.js');
const TheSellingPartnerApiForAutomotive = await import(modulePath);

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
        const ModelClass = TheSellingPartnerApiForAutomotive[dataType];
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
const mockgetVehiclesData = {
  request: {
    'marketplaceId': generateMockData('String'),
    'vehicleType': generateMockData('String'),
  },
  response: {
    data: generateMockData('VehiclesResponse'),
    statusCode: 200,
    headers: {}
  }
};

describe('AutomotiveApi', () => {
  beforeEach(() => {
    sandbox = sinon.createSandbox();
    const apiClientInstance = new TheSellingPartnerApiForAutomotive.ApiClient(testEndpoint);
    apiClientInstance.applyXAmzAccessTokenToRequest(testAccessToken);
    sandbox.stub(apiClientInstance, 'callApi');
    instance = new TheSellingPartnerApiForAutomotive.AutomotiveApi(apiClientInstance);
  });

  afterEach(() => {
    sandbox.restore();
  });

  describe('getVehicles', () => {
    it('should successfully call getVehicles', async () => {
      instance.apiClient.callApi.resolves(mockgetVehiclesData.response);

      const params = [
        mockgetVehiclesData.request['marketplaceId'],
        mockgetVehiclesData.request['vehicleType'],
      ];
      const data = await instance.getVehicles(...params);

      expect(data instanceof TheSellingPartnerApiForAutomotive.VehiclesResponse).to.be.true;
      expect(data).to.equal(mockgetVehiclesData.response.data);
    });

    it('should successfully call getVehiclesWithHttpInfo', async () => {
      instance.apiClient.callApi.resolves(mockgetVehiclesData.response);

      const params = [
        mockgetVehiclesData.request['marketplaceId'],
        mockgetVehiclesData.request['vehicleType'],
      ];
      const response = await instance.getVehiclesWithHttpInfo(...params);

      expect(response).to.have.property('statusCode');
      expect(response.statusCode).to.equal(mockgetVehiclesData.response.statusCode)
      expect(response).to.have.property('headers');
      expect(response).to.have.property('data');
      expect(response.data).to.equal(mockgetVehiclesData.response.data)
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
          mockgetVehiclesData.request['marketplaceId'],
          mockgetVehiclesData.request['vehicleType'],
        ];
        await instance.getVehicles(...params);
        throw new Error('Expected error to be thrown');
      } catch (error) {
        expect(error).to.exist;
        expect(error.statusCode).to.equal(400);
      }
    });
  });

  describe('constructor', () => {
    it('should use default ApiClient when none provided', () => {
      const defaultInstance = new TheSellingPartnerApiForAutomotive.AutomotiveApi();
      expect(defaultInstance.apiClient).to.equal(TheSellingPartnerApiForAutomotive.ApiClient.instance);
    });

    it('should use provided ApiClient', () => {
      const customClient = new TheSellingPartnerApiForAutomotive.ApiClient();
      const customInstance = new TheSellingPartnerApiForAutomotive.AutomotiveApi(customClient);
      expect(customInstance.apiClient).to.equal(customClient);
    });
  });
});
