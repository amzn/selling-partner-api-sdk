import expect from 'expect.js';
import { join } from 'path';

const modulePath = join(process.cwd(), 'src', 'fulfillmentoutbound_v2026_07_04', 'index.js');
const TheSellingPartnerApiForFulfillmentOutbound = await import(modulePath);
const endpoint = 'http://localhost:3000';

describe('FulfillmentOutboundApi', () => {
  let instance;

  beforeEach(() => {
    const apiClientInstance = new TheSellingPartnerApiForFulfillmentOutbound.ApiClient(endpoint);
    apiClientInstance.applyXAmzAccessTokenToRequest("testAccessToken");
    instance = new TheSellingPartnerApiForFulfillmentOutbound.FulfillmentOutboundApi(apiClientInstance);
  });

  describe('cancelOrder', () => {
    it('should successfully call cancelOrderWithHttpInfo', async () => {
      await instructBackendMock("fulfillmentOutbound", "cancelOrder", "202")
      const params = [
        generateMockData('String'),
      ];
      const response = await instance.cancelOrderWithHttpInfo(...params);

      expect(response.response).to.have.property('statusCode');
      expect(response.response.statusCode).to.equal(202)
      assertValidResponsePayload(202, response.data);
    });
  });
  describe('createOrder', () => {
    it('should successfully call createOrderWithHttpInfo', async () => {
      await instructBackendMock("fulfillmentOutbound", "createOrder", "200")
      const params = [
        generateMockData('CreateOrderRequest'),
      ];
      const response = await instance.createOrderWithHttpInfo(...params);

      expect(response.response).to.have.property('statusCode');
      expect(response.response.statusCode).to.equal(200)
      assertValidResponsePayload(200, response.data);
    });
  });
  describe('getOffers', () => {
    it('should successfully call getOffersWithHttpInfo', async () => {
      await instructBackendMock("fulfillmentOutbound", "getOffers", "200")
      const params = [
        generateMockData('GetOffersRequest'),
      ];
      const response = await instance.getOffersWithHttpInfo(...params);

      expect(response.response).to.have.property('statusCode');
      expect(response.response.statusCode).to.equal(200)
      assertValidResponsePayload(200, response.data);
    });
  });
  describe('getOrder', () => {
    it('should successfully call getOrderWithHttpInfo', async () => {
      await instructBackendMock("fulfillmentOutbound", "getOrder", "200")
      const params = [
        generateMockData('String'),
      ];
      const response = await instance.getOrderWithHttpInfo(...params);

      expect(response.response).to.have.property('statusCode');
      expect(response.response.statusCode).to.equal(200)
      assertValidResponsePayload(200, response.data);
    });
  });
  describe('getOrderPreview', () => {
    it('should successfully call getOrderPreviewWithHttpInfo', async () => {
      await instructBackendMock("fulfillmentOutbound", "getOrderPreview", "200")
      const params = [
        generateMockData('GetOrderPreviewRequest'),
      ];
      const response = await instance.getOrderPreviewWithHttpInfo(...params);

      expect(response.response).to.have.property('statusCode');
      expect(response.response.statusCode).to.equal(200)
      assertValidResponsePayload(200, response.data);
    });
  });
  describe('listOrders', () => {
    it('should successfully call listOrdersWithHttpInfo', async () => {
      await instructBackendMock("fulfillmentOutbound", "listOrders", "200")
      const params = [
      ];
      const response = await instance.listOrdersWithHttpInfo(...params);

      expect(response.response).to.have.property('statusCode');
      expect(response.response.statusCode).to.equal(200)
      assertValidResponsePayload(200, response.data);
    });
  });
  describe('updateOrder', () => {
    it('should successfully call updateOrderWithHttpInfo', async () => {
      await instructBackendMock("fulfillmentOutbound", "updateOrder", "202")
      const params = [
        generateMockData('String'),
        generateMockData('UpdateOrderRequest'),
      ];
      const response = await instance.updateOrderWithHttpInfo(...params);

      expect(response.response).to.have.property('statusCode');
      expect(response.response.statusCode).to.equal(202)
      assertValidResponsePayload(202, response.data);
    });
  });
  describe('updateOrderStatus', () => {
    it('should successfully call updateOrderStatusWithHttpInfo', async () => {
      await instructBackendMock("fulfillmentOutbound", "updateOrderStatus", "204")
      const params = [
        generateMockData('String'),
        generateMockData('UpdateOrderStatusRequest'),
      ];
      const response = await instance.updateOrderStatusWithHttpInfo(...params);

      expect(response.response).to.have.property('statusCode');
      expect(response.response.statusCode).to.equal(204)
    });
  });
  describe('updatePackage', () => {
    it('should successfully call updatePackageWithHttpInfo', async () => {
      await instructBackendMock("fulfillmentOutbound", "updatePackage", "204")
      const params = [
        generateMockData('String'),
        generateMockData('String'),
        generateMockData('UpdatePackageRequest'),
      ];
      const response = await instance.updatePackageWithHttpInfo(...params);

      expect(response.response).to.have.property('statusCode');
      expect(response.response.statusCode).to.equal(204)
    });
  });

  describe('constructor', () => {
    it('should use default ApiClient when none provided', () => {
      const defaultInstance = new TheSellingPartnerApiForFulfillmentOutbound.FulfillmentOutboundApi();
      expect(defaultInstance.apiClient).to.equal(TheSellingPartnerApiForFulfillmentOutbound.ApiClient.instance);
    });

    it('should use provided ApiClient', () => {
      const customClient = new TheSellingPartnerApiForFulfillmentOutbound.ApiClient();
      const customInstance = new TheSellingPartnerApiForFulfillmentOutbound.FulfillmentOutboundApi(customClient);
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
        const ModelClass = TheSellingPartnerApiForFulfillmentOutbound[dataType];
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
