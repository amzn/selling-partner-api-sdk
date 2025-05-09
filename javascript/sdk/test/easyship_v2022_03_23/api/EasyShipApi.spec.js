/**
 * Selling Partner API for Easy Ship
 * Use the Selling Partner API for Easy Ship to build applications for sellers to manage and ship Amazon Easy Ship orders. With this API, you can get available time slots, schedule and reschedule Easy Ship orders, and print shipping labels, invoices, and warranties. To review the differences in Easy Ship operations by marketplace, refer to [Marketplace support](https://developer-docs.amazon.com/sp-api/docs/easyship-api-v2022-03-23-use-case-guide#marketplace-support).
 *
 * The version of the OpenAPI document: 2022-03-23
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

const modulePath = join(process.cwd(), 'src', 'easyship_v2022_03_23', 'index.js');
const SellingPartnerApiForEasyShip = await import(modulePath);

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
        const ModelClass = SellingPartnerApiForEasyShip[dataType];
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
const mockcreateScheduledPackageData = {
  request: {
    'createScheduledPackageRequest': generateMockData('CreateScheduledPackageRequest')
  },
  response: {
    data: generateMockData('Package'),
    statusCode: 200,
    headers: {}
  }
};
const mockcreateScheduledPackageBulkData = {
  request: {
    'createScheduledPackagesRequest': generateMockData('CreateScheduledPackagesRequest')
  },
  response: {
    data: generateMockData('CreateScheduledPackagesResponse'),
    statusCode: 200,
    headers: {}
  }
};
const mockgetScheduledPackageData = {
  request: {
    'amazonOrderId': generateMockData('String'),
    'marketplaceId': generateMockData('String')
  },
  response: {
    data: generateMockData('Package'),
    statusCode: 200,
    headers: {}
  }
};
const mocklistHandoverSlotsData = {
  request: {
  },
  response: {
    data: generateMockData('ListHandoverSlotsResponse'),
    statusCode: 200,
    headers: {}
  }
};
const mockupdateScheduledPackagesData = {
  request: {
  },
  response: {
    data: generateMockData('Packages'),
    statusCode: 200,
    headers: {}
  }
};

describe('EasyShipApi', () => {
  beforeEach(() => {
    sandbox = sinon.createSandbox();
    const apiClientInstance = new SellingPartnerApiForEasyShip.ApiClient(testEndpoint);
    apiClientInstance.applyXAmzAccessTokenToRequest(testAccessToken);
    sandbox.stub(apiClientInstance, 'callApi');
    instance = new SellingPartnerApiForEasyShip.EasyShipApi(apiClientInstance);
  });

  afterEach(() => {
    sandbox.restore();
  });

  describe('createScheduledPackage', () => {
    it('should successfully call createScheduledPackage', async () => {
      instance.apiClient.callApi.resolves(mockcreateScheduledPackageData.response);

      const params = [
        mockcreateScheduledPackageData.request['createScheduledPackageRequest']
      ];
      const data = await instance.createScheduledPackage(...params);

      expect(data instanceof SellingPartnerApiForEasyShip.Package).to.be.true;
      expect(data).to.equal(mockcreateScheduledPackageData.response.data);
    });

    it('should successfully call createScheduledPackageWithHttpInfo', async () => {
      instance.apiClient.callApi.resolves(mockcreateScheduledPackageData.response);

      const params = [
        mockcreateScheduledPackageData.request['createScheduledPackageRequest']
      ];
      const response = await instance.createScheduledPackageWithHttpInfo(...params);

      expect(response).to.have.property('statusCode');
      expect(response.statusCode).to.equal(mockcreateScheduledPackageData.response.statusCode)
      expect(response).to.have.property('headers');
      expect(response).to.have.property('data');
      expect(response.data).to.equal(mockcreateScheduledPackageData.response.data)
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
          mockcreateScheduledPackageData.request['createScheduledPackageRequest']
        ];
        await instance.createScheduledPackage(...params);
        throw new Error('Expected error to be thrown');
      } catch (error) {
        expect(error).to.exist;
        expect(error.statusCode).to.equal(400);
      }
    });
  });
  describe('createScheduledPackageBulk', () => {
    it('should successfully call createScheduledPackageBulk', async () => {
      instance.apiClient.callApi.resolves(mockcreateScheduledPackageBulkData.response);

      const params = [
        mockcreateScheduledPackageBulkData.request['createScheduledPackagesRequest']
      ];
      const data = await instance.createScheduledPackageBulk(...params);

      expect(data instanceof SellingPartnerApiForEasyShip.CreateScheduledPackagesResponse).to.be.true;
      expect(data).to.equal(mockcreateScheduledPackageBulkData.response.data);
    });

    it('should successfully call createScheduledPackageBulkWithHttpInfo', async () => {
      instance.apiClient.callApi.resolves(mockcreateScheduledPackageBulkData.response);

      const params = [
        mockcreateScheduledPackageBulkData.request['createScheduledPackagesRequest']
      ];
      const response = await instance.createScheduledPackageBulkWithHttpInfo(...params);

      expect(response).to.have.property('statusCode');
      expect(response.statusCode).to.equal(mockcreateScheduledPackageBulkData.response.statusCode)
      expect(response).to.have.property('headers');
      expect(response).to.have.property('data');
      expect(response.data).to.equal(mockcreateScheduledPackageBulkData.response.data)
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
          mockcreateScheduledPackageBulkData.request['createScheduledPackagesRequest']
        ];
        await instance.createScheduledPackageBulk(...params);
        throw new Error('Expected error to be thrown');
      } catch (error) {
        expect(error).to.exist;
        expect(error.statusCode).to.equal(400);
      }
    });
  });
  describe('getScheduledPackage', () => {
    it('should successfully call getScheduledPackage', async () => {
      instance.apiClient.callApi.resolves(mockgetScheduledPackageData.response);

      const params = [
        mockgetScheduledPackageData.request['amazonOrderId'],
        mockgetScheduledPackageData.request['marketplaceId']
      ];
      const data = await instance.getScheduledPackage(...params);

      expect(data instanceof SellingPartnerApiForEasyShip.Package).to.be.true;
      expect(data).to.equal(mockgetScheduledPackageData.response.data);
    });

    it('should successfully call getScheduledPackageWithHttpInfo', async () => {
      instance.apiClient.callApi.resolves(mockgetScheduledPackageData.response);

      const params = [
        mockgetScheduledPackageData.request['amazonOrderId'],
        mockgetScheduledPackageData.request['marketplaceId']
      ];
      const response = await instance.getScheduledPackageWithHttpInfo(...params);

      expect(response).to.have.property('statusCode');
      expect(response.statusCode).to.equal(mockgetScheduledPackageData.response.statusCode)
      expect(response).to.have.property('headers');
      expect(response).to.have.property('data');
      expect(response.data).to.equal(mockgetScheduledPackageData.response.data)
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
          mockgetScheduledPackageData.request['amazonOrderId'],
          mockgetScheduledPackageData.request['marketplaceId']
        ];
        await instance.getScheduledPackage(...params);
        throw new Error('Expected error to be thrown');
      } catch (error) {
        expect(error).to.exist;
        expect(error.statusCode).to.equal(400);
      }
    });
  });
  describe('listHandoverSlots', () => {
    it('should successfully call listHandoverSlots', async () => {
      instance.apiClient.callApi.resolves(mocklistHandoverSlotsData.response);

      const params = [
      ];
      const data = await instance.listHandoverSlots(...params);

      expect(data instanceof SellingPartnerApiForEasyShip.ListHandoverSlotsResponse).to.be.true;
      expect(data).to.equal(mocklistHandoverSlotsData.response.data);
    });

    it('should successfully call listHandoverSlotsWithHttpInfo', async () => {
      instance.apiClient.callApi.resolves(mocklistHandoverSlotsData.response);

      const params = [
      ];
      const response = await instance.listHandoverSlotsWithHttpInfo(...params);

      expect(response).to.have.property('statusCode');
      expect(response.statusCode).to.equal(mocklistHandoverSlotsData.response.statusCode)
      expect(response).to.have.property('headers');
      expect(response).to.have.property('data');
      expect(response.data).to.equal(mocklistHandoverSlotsData.response.data)
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
        ];
        await instance.listHandoverSlots(...params);
        throw new Error('Expected error to be thrown');
      } catch (error) {
        expect(error).to.exist;
        expect(error.statusCode).to.equal(400);
      }
    });
  });
  describe('updateScheduledPackages', () => {
    it('should successfully call updateScheduledPackages', async () => {
      instance.apiClient.callApi.resolves(mockupdateScheduledPackagesData.response);

      const params = [
      ];
      const data = await instance.updateScheduledPackages(...params);

      expect(data instanceof SellingPartnerApiForEasyShip.Packages).to.be.true;
      expect(data).to.equal(mockupdateScheduledPackagesData.response.data);
    });

    it('should successfully call updateScheduledPackagesWithHttpInfo', async () => {
      instance.apiClient.callApi.resolves(mockupdateScheduledPackagesData.response);

      const params = [
      ];
      const response = await instance.updateScheduledPackagesWithHttpInfo(...params);

      expect(response).to.have.property('statusCode');
      expect(response.statusCode).to.equal(mockupdateScheduledPackagesData.response.statusCode)
      expect(response).to.have.property('headers');
      expect(response).to.have.property('data');
      expect(response.data).to.equal(mockupdateScheduledPackagesData.response.data)
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
        ];
        await instance.updateScheduledPackages(...params);
        throw new Error('Expected error to be thrown');
      } catch (error) {
        expect(error).to.exist;
        expect(error.statusCode).to.equal(400);
      }
    });
  });

  describe('constructor', () => {
    it('should use default ApiClient when none provided', () => {
      const defaultInstance = new SellingPartnerApiForEasyShip.EasyShipApi();
      expect(defaultInstance.apiClient).to.equal(SellingPartnerApiForEasyShip.ApiClient.instance);
    });

    it('should use provided ApiClient', () => {
      const customClient = new SellingPartnerApiForEasyShip.ApiClient();
      const customInstance = new SellingPartnerApiForEasyShip.EasyShipApi(customClient);
      expect(customInstance.apiClient).to.equal(customClient);
    });
  });
});
