import expect from 'expect.js';
import { join } from 'path';

const modulePath = join(process.cwd(), 'src', 'fulfillmentoutbound_v2020_07_01', 'index.js');
const SellingPartnerApisForFulfillmentOutbound = await import(modulePath);
const endpoint = 'http://localhost:3000';

describe('FbaOutboundApi', () => {
  let instance;

  beforeEach(() => {
    const apiClientInstance = new SellingPartnerApisForFulfillmentOutbound.ApiClient(endpoint);
    apiClientInstance.applyXAmzAccessTokenToRequest("testAccessToken");
    instance = new SellingPartnerApisForFulfillmentOutbound.FbaOutboundApi(apiClientInstance);
  });

  describe('cancelFulfillmentOrder', () => {
    it('should successfully call cancelFulfillmentOrderWithHttpInfo', async () => {
      await instructBackendMock("fbaOutbound", "cancelFulfillmentOrder", "200")
      const params = [
        generateMockData('String')
      ];
      const response = await instance.cancelFulfillmentOrderWithHttpInfo(...params);

      expect(response.response).to.have.property('statusCode');
      expect(response.response.statusCode).to.equal(200)
      assertValidResponsePayload(200, response.data);
    });
  });
  describe('createFulfillmentOrder', () => {
    it('should successfully call createFulfillmentOrderWithHttpInfo', async () => {
      await instructBackendMock("fbaOutbound", "createFulfillmentOrder", "200")
      const params = [
        generateMockData('CreateFulfillmentOrderRequest')
      ];
      const response = await instance.createFulfillmentOrderWithHttpInfo(...params);

      expect(response.response).to.have.property('statusCode');
      expect(response.response.statusCode).to.equal(200)
      assertValidResponsePayload(200, response.data);
    });
  });
  describe('createFulfillmentReturn', () => {
    it('should successfully call createFulfillmentReturnWithHttpInfo', async () => {
      await instructBackendMock("fbaOutbound", "createFulfillmentReturn", "200")
      const params = [
        generateMockData('String'),
        generateMockData('CreateFulfillmentReturnRequest')
      ];
      const response = await instance.createFulfillmentReturnWithHttpInfo(...params);

      expect(response.response).to.have.property('statusCode');
      expect(response.response.statusCode).to.equal(200)
      assertValidResponsePayload(200, response.data);
    });
  });
  describe('deliveryOffers', () => {
    it('should successfully call deliveryOffersWithHttpInfo', async () => {
      await instructBackendMock("fbaOutbound", "deliveryOffers", "200")
      const params = [
        generateMockData('GetDeliveryOffersRequest')
      ];
      const response = await instance.deliveryOffersWithHttpInfo(...params);

      expect(response.response).to.have.property('statusCode');
      expect(response.response.statusCode).to.equal(200)
      assertValidResponsePayload(200, response.data);
    });
  });
  describe('getFeatureInventory', () => {
    it('should successfully call getFeatureInventoryWithHttpInfo', async () => {
      await instructBackendMock("fbaOutbound", "getFeatureInventory", "200")
      const params = [
        generateMockData('String'),
        generateMockData('String'),
      ];
      const response = await instance.getFeatureInventoryWithHttpInfo(...params);

      expect(response.response).to.have.property('statusCode');
      expect(response.response.statusCode).to.equal(200)
      assertValidResponsePayload(200, response.data);
    });
  });
  describe('getFeatureSKU', () => {
    it('should successfully call getFeatureSKUWithHttpInfo', async () => {
      await instructBackendMock("fbaOutbound", "getFeatureSKU", "200")
      const params = [
        generateMockData('String'),
        generateMockData('String'),
        generateMockData('String')
      ];
      const response = await instance.getFeatureSKUWithHttpInfo(...params);

      expect(response.response).to.have.property('statusCode');
      expect(response.response.statusCode).to.equal(200)
      assertValidResponsePayload(200, response.data);
    });
  });
  describe('getFeatures', () => {
    it('should successfully call getFeaturesWithHttpInfo', async () => {
      await instructBackendMock("fbaOutbound", "getFeatures", "200")
      const params = [
        generateMockData('String')
      ];
      const response = await instance.getFeaturesWithHttpInfo(...params);

      expect(response.response).to.have.property('statusCode');
      expect(response.response.statusCode).to.equal(200)
      assertValidResponsePayload(200, response.data);
    });
  });
  describe('getFulfillmentOrder', () => {
    it('should successfully call getFulfillmentOrderWithHttpInfo', async () => {
      await instructBackendMock("fbaOutbound", "getFulfillmentOrder", "200")
      const params = [
        generateMockData('String')
      ];
      const response = await instance.getFulfillmentOrderWithHttpInfo(...params);

      expect(response.response).to.have.property('statusCode');
      expect(response.response.statusCode).to.equal(200)
      assertValidResponsePayload(200, response.data);
    });
  });
  describe('getFulfillmentPreview', () => {
    it('should successfully call getFulfillmentPreviewWithHttpInfo', async () => {
      await instructBackendMock("fbaOutbound", "getFulfillmentPreview", "200")
      const params = [
        generateMockData('GetFulfillmentPreviewRequest')
      ];
      const response = await instance.getFulfillmentPreviewWithHttpInfo(...params);

      expect(response.response).to.have.property('statusCode');
      expect(response.response.statusCode).to.equal(200)
      assertValidResponsePayload(200, response.data);
    });
  });
  describe('getPackageTrackingDetails', () => {
    it('should successfully call getPackageTrackingDetailsWithHttpInfo', async () => {
      await instructBackendMock("fbaOutbound", "getPackageTrackingDetails", "200")
      const params = [
        generateMockData('Number')
      ];
      const response = await instance.getPackageTrackingDetailsWithHttpInfo(...params);

      expect(response.response).to.have.property('statusCode');
      expect(response.response.statusCode).to.equal(200)
      assertValidResponsePayload(200, response.data);
    });
  });
  describe('listAllFulfillmentOrders', () => {
    it('should successfully call listAllFulfillmentOrdersWithHttpInfo', async () => {
      await instructBackendMock("fbaOutbound", "listAllFulfillmentOrders", "200")
      const params = [
      ];
      const response = await instance.listAllFulfillmentOrdersWithHttpInfo(...params);

      expect(response.response).to.have.property('statusCode');
      expect(response.response.statusCode).to.equal(200)
      assertValidResponsePayload(200, response.data);
    });
  });
  describe('listReturnReasonCodes', () => {
    it('should successfully call listReturnReasonCodesWithHttpInfo', async () => {
      await instructBackendMock("fbaOutbound", "listReturnReasonCodes", "200")
      const params = [
        generateMockData('String'),
      ];
      const response = await instance.listReturnReasonCodesWithHttpInfo(...params);

      expect(response.response).to.have.property('statusCode');
      expect(response.response.statusCode).to.equal(200)
      assertValidResponsePayload(200, response.data);
    });
  });
  describe('submitFulfillmentOrderStatusUpdate', () => {
    it('should successfully call submitFulfillmentOrderStatusUpdateWithHttpInfo', async () => {
      await instructBackendMock("fbaOutbound", "submitFulfillmentOrderStatusUpdate", "200")
      const params = [
        generateMockData('String'),
        generateMockData('SubmitFulfillmentOrderStatusUpdateRequest')
      ];
      const response = await instance.submitFulfillmentOrderStatusUpdateWithHttpInfo(...params);

      expect(response.response).to.have.property('statusCode');
      expect(response.response.statusCode).to.equal(200)
      assertValidResponsePayload(200, response.data);
    });
  });
  describe('updateFulfillmentOrder', () => {
    it('should successfully call updateFulfillmentOrderWithHttpInfo', async () => {
      await instructBackendMock("fbaOutbound", "updateFulfillmentOrder", "200")
      const params = [
        generateMockData('String'),
        generateMockData('UpdateFulfillmentOrderRequest')
      ];
      const response = await instance.updateFulfillmentOrderWithHttpInfo(...params);

      expect(response.response).to.have.property('statusCode');
      expect(response.response.statusCode).to.equal(200)
      assertValidResponsePayload(200, response.data);
    });
  });

  describe('constructor', () => {
    it('should use default ApiClient when none provided', () => {
      const defaultInstance = new SellingPartnerApisForFulfillmentOutbound.FbaOutboundApi();
      expect(defaultInstance.apiClient).to.equal(SellingPartnerApisForFulfillmentOutbound.ApiClient.instance);
    });

    it('should use provided ApiClient', () => {
      const customClient = new SellingPartnerApisForFulfillmentOutbound.ApiClient();
      const customInstance = new SellingPartnerApisForFulfillmentOutbound.FbaOutboundApi(customClient);
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
        const ModelClass = SellingPartnerApisForFulfillmentOutbound[dataType];
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
