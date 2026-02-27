import expect from 'expect.js';
import { join } from 'path';

const modulePath = join(process.cwd(), 'src', 'orders_v0', 'index.js');
const SellingPartnerApiForOrders = await import(modulePath);
const endpoint = 'http://localhost:3000';

describe('OrdersV0Api', () => {
  let instance;

  beforeEach(() => {
    const apiClientInstance = new SellingPartnerApiForOrders.ApiClient(endpoint);
    apiClientInstance.applyXAmzAccessTokenToRequest("testAccessToken");
    instance = new SellingPartnerApiForOrders.OrdersV0Api(apiClientInstance);
  });

  describe('confirmShipment', () => {
    it('should successfully call confirmShipmentWithHttpInfo', async () => {
      await instructBackendMock("ordersV0", "confirmShipment", "204")
      const params = [
        generateMockData('String'),
        generateMockData('ConfirmShipmentRequest')
      ];
      const response = await instance.confirmShipmentWithHttpInfo(...params);

      expect(response).to.have.property('statusCode');
      expect(response.statusCode).to.equal()
    });
  });
  describe('getOrder', () => {
    it('should successfully call getOrderWithHttpInfo', async () => {
      await instructBackendMock("ordersV0", "getOrder", "200")
      const params = [
        generateMockData('String')
      ];
      const response = await instance.getOrderWithHttpInfo(...params);

      expect(response).to.have.property('statusCode');
      expect(response.statusCode).to.equal()
      expect(response).to.have.property('data');
    });
  });
  describe('getOrderAddress', () => {
    it('should successfully call getOrderAddressWithHttpInfo', async () => {
      await instructBackendMock("ordersV0", "getOrderAddress", "200")
      const params = [
        generateMockData('String')
      ];
      const response = await instance.getOrderAddressWithHttpInfo(...params);

      expect(response).to.have.property('statusCode');
      expect(response.statusCode).to.equal()
      expect(response).to.have.property('data');
    });
  });
  describe('getOrderBuyerInfo', () => {
    it('should successfully call getOrderBuyerInfoWithHttpInfo', async () => {
      await instructBackendMock("ordersV0", "getOrderBuyerInfo", "200")
      const params = [
        generateMockData('String')
      ];
      const response = await instance.getOrderBuyerInfoWithHttpInfo(...params);

      expect(response).to.have.property('statusCode');
      expect(response.statusCode).to.equal()
      expect(response).to.have.property('data');
    });
  });
  describe('getOrderItems', () => {
    it('should successfully call getOrderItemsWithHttpInfo', async () => {
      await instructBackendMock("ordersV0", "getOrderItems", "200")
      const params = [
        generateMockData('String'),
      ];
      const response = await instance.getOrderItemsWithHttpInfo(...params);

      expect(response).to.have.property('statusCode');
      expect(response.statusCode).to.equal()
      expect(response).to.have.property('data');
    });
  });
  describe('getOrderItemsBuyerInfo', () => {
    it('should successfully call getOrderItemsBuyerInfoWithHttpInfo', async () => {
      await instructBackendMock("ordersV0", "getOrderItemsBuyerInfo", "200")
      const params = [
        generateMockData('String'),
      ];
      const response = await instance.getOrderItemsBuyerInfoWithHttpInfo(...params);

      expect(response).to.have.property('statusCode');
      expect(response.statusCode).to.equal()
      expect(response).to.have.property('data');
    });
  });
  describe('getOrderRegulatedInfo', () => {
    it('should successfully call getOrderRegulatedInfoWithHttpInfo', async () => {
      await instructBackendMock("ordersV0", "getOrderRegulatedInfo", "200")
      const params = [
        generateMockData('String')
      ];
      const response = await instance.getOrderRegulatedInfoWithHttpInfo(...params);

      expect(response).to.have.property('statusCode');
      expect(response.statusCode).to.equal()
      expect(response).to.have.property('data');
    });
  });
  describe('getOrders', () => {
    it('should successfully call getOrdersWithHttpInfo', async () => {
      await instructBackendMock("ordersV0", "getOrders", "200")
      const params = [
        generateMockData('String', true),
      ];
      const response = await instance.getOrdersWithHttpInfo(...params);

      expect(response).to.have.property('statusCode');
      expect(response.statusCode).to.equal()
      expect(response).to.have.property('data');
    });
  });
  describe('updateVerificationStatus', () => {
    it('should successfully call updateVerificationStatusWithHttpInfo', async () => {
      await instructBackendMock("ordersV0", "updateVerificationStatus", "204")
      const params = [
        generateMockData('String'),
        generateMockData('UpdateVerificationStatusRequest')
      ];
      const response = await instance.updateVerificationStatusWithHttpInfo(...params);

      expect(response).to.have.property('statusCode');
      expect(response.statusCode).to.equal()
    });
  });

  describe('constructor', () => {
    it('should use default ApiClient when none provided', () => {
      const defaultInstance = new SellingPartnerApiForOrders.OrdersV0Api();
      expect(defaultInstance.apiClient).to.equal(SellingPartnerApiForOrders.ApiClient.instance);
    });

    it('should use provided ApiClient', () => {
      const customClient = new SellingPartnerApiForOrders.ApiClient();
      const customInstance = new SellingPartnerApiForOrders.OrdersV0Api(customClient);
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
        const ModelClass = SellingPartnerApiForOrders[dataType];
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
