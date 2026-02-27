import expect from 'expect.js';
import { join } from 'path';

const modulePath = join(process.cwd(), 'src', 'awd_v2024_05_09', 'index.js');
const TheSellingPartnerApiForAmazonWarehousingAndDistribution = await import(modulePath);

describe('AwdApi', () => {
  let instance;
  const testEndpoint = 'https://localhost:3000';
  const testAccessToken = "testAccessToken";

  beforeEach(() => {
    const apiClientInstance = new TheSellingPartnerApiForAmazonWarehousingAndDistribution.ApiClient(testEndpoint);
    apiClientInstance.applyXAmzAccessTokenToRequest(testAccessToken);
    instance = new TheSellingPartnerApiForAmazonWarehousingAndDistribution.AwdApi(apiClientInstance);
  });

  describe('cancelInbound', () => {
    it('should successfully call cancelInboundWithHttpInfo', async () => {
      instructBackendMock("awd", "cancelInbound", "204")
      const params = [
        generateMockData('String')
      ];
      const response = await instance.cancelInboundWithHttpInfo(...params);

      expect(response).to.have.property('statusCode');
      expect(response.statusCode).to.equal()
    });
  });
  describe('checkInboundEligibility', () => {
    it('should successfully call checkInboundEligibilityWithHttpInfo', async () => {
      instructBackendMock("awd", "checkInboundEligibility", "200")
      const params = [
        generateMockData('InboundPackages')
      ];
      const response = await instance.checkInboundEligibilityWithHttpInfo(...params);

      expect(response).to.have.property('statusCode');
      expect(response.statusCode).to.equal()
      expect(response).to.have.property('data');
    });
  });
  describe('confirmInbound', () => {
    it('should successfully call confirmInboundWithHttpInfo', async () => {
      instructBackendMock("awd", "confirmInbound", "204")
      const params = [
        generateMockData('String')
      ];
      const response = await instance.confirmInboundWithHttpInfo(...params);

      expect(response).to.have.property('statusCode');
      expect(response.statusCode).to.equal()
    });
  });
  describe('confirmReplenishmentOrder', () => {
    it('should successfully call confirmReplenishmentOrderWithHttpInfo', async () => {
      instructBackendMock("awd", "confirmReplenishmentOrder", "204")
      const params = [
        generateMockData('String')
      ];
      const response = await instance.confirmReplenishmentOrderWithHttpInfo(...params);

      expect(response).to.have.property('statusCode');
      expect(response.statusCode).to.equal()
    });
  });
  describe('createInbound', () => {
    it('should successfully call createInboundWithHttpInfo', async () => {
      instructBackendMock("awd", "createInbound", "201")
      const params = [
        generateMockData('InboundOrderCreationData')
      ];
      const response = await instance.createInboundWithHttpInfo(...params);

      expect(response).to.have.property('statusCode');
      expect(response.statusCode).to.equal()
      expect(response).to.have.property('data');
    });
  });
  describe('createReplenishmentOrder', () => {
    it('should successfully call createReplenishmentOrderWithHttpInfo', async () => {
      instructBackendMock("awd", "createReplenishmentOrder", "201")
      const params = [
        generateMockData('ReplenishmentOrderCreationData')
      ];
      const response = await instance.createReplenishmentOrderWithHttpInfo(...params);

      expect(response).to.have.property('statusCode');
      expect(response.statusCode).to.equal()
      expect(response).to.have.property('data');
    });
  });
  describe('getInbound', () => {
    it('should successfully call getInboundWithHttpInfo', async () => {
      instructBackendMock("awd", "getInbound", "200")
      const params = [
        generateMockData('String')
      ];
      const response = await instance.getInboundWithHttpInfo(...params);

      expect(response).to.have.property('statusCode');
      expect(response.statusCode).to.equal()
      expect(response).to.have.property('data');
    });
  });
  describe('getInboundShipment', () => {
    it('should successfully call getInboundShipmentWithHttpInfo', async () => {
      instructBackendMock("awd", "getInboundShipment", "200")
      const params = [
        generateMockData('String'),
      ];
      const response = await instance.getInboundShipmentWithHttpInfo(...params);

      expect(response).to.have.property('statusCode');
      expect(response.statusCode).to.equal()
      expect(response).to.have.property('data');
    });
  });
  describe('getInboundShipmentLabels', () => {
    it('should successfully call getInboundShipmentLabelsWithHttpInfo', async () => {
      instructBackendMock("awd", "getInboundShipmentLabels", "200")
      const params = [
        generateMockData('String'),
      ];
      const response = await instance.getInboundShipmentLabelsWithHttpInfo(...params);

      expect(response).to.have.property('statusCode');
      expect(response.statusCode).to.equal()
      expect(response).to.have.property('data');
    });
  });
  describe('getReplenishmentOrder', () => {
    it('should successfully call getReplenishmentOrderWithHttpInfo', async () => {
      instructBackendMock("awd", "getReplenishmentOrder", "200")
      const params = [
        generateMockData('String')
      ];
      const response = await instance.getReplenishmentOrderWithHttpInfo(...params);

      expect(response).to.have.property('statusCode');
      expect(response.statusCode).to.equal()
      expect(response).to.have.property('data');
    });
  });
  describe('listInboundShipments', () => {
    it('should successfully call listInboundShipmentsWithHttpInfo', async () => {
      instructBackendMock("awd", "listInboundShipments", "200")
      const params = [
      ];
      const response = await instance.listInboundShipmentsWithHttpInfo(...params);

      expect(response).to.have.property('statusCode');
      expect(response.statusCode).to.equal()
      expect(response).to.have.property('data');
    });
  });
  describe('listInventory', () => {
    it('should successfully call listInventoryWithHttpInfo', async () => {
      instructBackendMock("awd", "listInventory", "200")
      const params = [
      ];
      const response = await instance.listInventoryWithHttpInfo(...params);

      expect(response).to.have.property('statusCode');
      expect(response.statusCode).to.equal()
      expect(response).to.have.property('data');
    });
  });
  describe('listReplenishmentOrders', () => {
    it('should successfully call listReplenishmentOrdersWithHttpInfo', async () => {
      instructBackendMock("awd", "listReplenishmentOrders", "200")
      const params = [
      ];
      const response = await instance.listReplenishmentOrdersWithHttpInfo(...params);

      expect(response).to.have.property('statusCode');
      expect(response.statusCode).to.equal()
      expect(response).to.have.property('data');
    });
  });
  describe('updateInbound', () => {
    it('should successfully call updateInboundWithHttpInfo', async () => {
      instructBackendMock("awd", "updateInbound", "204")
      const params = [
        generateMockData('String'),
        generateMockData('InboundOrder')
      ];
      const response = await instance.updateInboundWithHttpInfo(...params);

      expect(response).to.have.property('statusCode');
      expect(response.statusCode).to.equal()
    });
  });
  describe('updateInboundShipmentTransportDetails', () => {
    it('should successfully call updateInboundShipmentTransportDetailsWithHttpInfo', async () => {
      instructBackendMock("awd", "updateInboundShipmentTransportDetails", "204")
      const params = [
        generateMockData('String'),
        generateMockData('TransportationDetails')
      ];
      const response = await instance.updateInboundShipmentTransportDetailsWithHttpInfo(...params);

      expect(response).to.have.property('statusCode');
      expect(response.statusCode).to.equal()
    });
  });

  describe('constructor', () => {
    it('should use default ApiClient when none provided', () => {
      const defaultInstance = new TheSellingPartnerApiForAmazonWarehousingAndDistribution.AwdApi();
      expect(defaultInstance.apiClient).to.equal(TheSellingPartnerApiForAmazonWarehousingAndDistribution.ApiClient.instance);
    });

    it('should use provided ApiClient', () => {
      const customClient = new TheSellingPartnerApiForAmazonWarehousingAndDistribution.ApiClient();
      const customInstance = new TheSellingPartnerApiForAmazonWarehousingAndDistribution.AwdApi(customClient);
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
        const ModelClass = TheSellingPartnerApiForAmazonWarehousingAndDistribution[dataType];
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
