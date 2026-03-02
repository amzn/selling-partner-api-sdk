import expect from 'expect.js';
import { join } from 'path';

const modulePath = join(process.cwd(), 'src', 'fulfillmentinbound_v0', 'index.js');
const SellingPartnerApiForFulfillmentInbound = await import(modulePath);
const endpoint = 'http://localhost:3000';

describe('FbaInboundApi', () => {
  let instance;

  beforeEach(() => {
    const apiClientInstance = new SellingPartnerApiForFulfillmentInbound.ApiClient(endpoint);
    apiClientInstance.applyXAmzAccessTokenToRequest("testAccessToken");
    instance = new SellingPartnerApiForFulfillmentInbound.FbaInboundApi(apiClientInstance);
  });

  describe('getBillOfLading', () => {
    it('should successfully call getBillOfLadingWithHttpInfo', async () => {
      await instructBackendMock("fbaInbound", "getBillOfLading", "200")
      const params = [
        generateMockData('String')
      ];
      const response = await instance.getBillOfLadingWithHttpInfo(...params);

      expect(response.response).to.have.property('statusCode');
      expect(response.response.statusCode).to.equal(200)
      assertValidResponsePayload(200, response.data);
    });
  });
  describe('getLabels', () => {
    it('should successfully call getLabelsWithHttpInfo', async () => {
      await instructBackendMock("fbaInbound", "getLabels", "200")
      const params = [
        generateMockData('String'),
        generateMockData('String'),
        generateMockData('String'),
      ];
      const response = await instance.getLabelsWithHttpInfo(...params);

      expect(response.response).to.have.property('statusCode');
      expect(response.response.statusCode).to.equal(200)
      assertValidResponsePayload(200, response.data);
    });
  });
  describe('getPrepInstructions', () => {
    it('should successfully call getPrepInstructionsWithHttpInfo', async () => {
      await instructBackendMock("fbaInbound", "getPrepInstructions", "200")
      const params = [
        generateMockData('String'),
      ];
      const response = await instance.getPrepInstructionsWithHttpInfo(...params);

      expect(response.response).to.have.property('statusCode');
      expect(response.response.statusCode).to.equal(200)
      assertValidResponsePayload(200, response.data);
    });
  });
  describe('getShipmentItems', () => {
    it('should successfully call getShipmentItemsWithHttpInfo', async () => {
      await instructBackendMock("fbaInbound", "getShipmentItems", "200")
      const params = [
        generateMockData('String'),
        generateMockData('String'),
      ];
      const response = await instance.getShipmentItemsWithHttpInfo(...params);

      expect(response.response).to.have.property('statusCode');
      expect(response.response.statusCode).to.equal(200)
      assertValidResponsePayload(200, response.data);
    });
  });
  describe('getShipmentItemsByShipmentId', () => {
    it('should successfully call getShipmentItemsByShipmentIdWithHttpInfo', async () => {
      await instructBackendMock("fbaInbound", "getShipmentItemsByShipmentId", "200")
      const params = [
        generateMockData('String'),
      ];
      const response = await instance.getShipmentItemsByShipmentIdWithHttpInfo(...params);

      expect(response.response).to.have.property('statusCode');
      expect(response.response.statusCode).to.equal(200)
      assertValidResponsePayload(200, response.data);
    });
  });
  describe('getShipments', () => {
    it('should successfully call getShipmentsWithHttpInfo', async () => {
      await instructBackendMock("fbaInbound", "getShipments", "200")
      const params = [
        generateMockData('String'),
        generateMockData('String'),
      ];
      const response = await instance.getShipmentsWithHttpInfo(...params);

      expect(response.response).to.have.property('statusCode');
      expect(response.response.statusCode).to.equal(200)
      assertValidResponsePayload(200, response.data);
    });
  });

  describe('constructor', () => {
    it('should use default ApiClient when none provided', () => {
      const defaultInstance = new SellingPartnerApiForFulfillmentInbound.FbaInboundApi();
      expect(defaultInstance.apiClient).to.equal(SellingPartnerApiForFulfillmentInbound.ApiClient.instance);
    });

    it('should use provided ApiClient', () => {
      const customClient = new SellingPartnerApiForFulfillmentInbound.ApiClient();
      const customInstance = new SellingPartnerApiForFulfillmentInbound.FbaInboundApi(customClient);
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
        const ModelClass = SellingPartnerApiForFulfillmentInbound[dataType];
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
