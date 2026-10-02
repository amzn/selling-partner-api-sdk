import expect from 'expect.js';
import { join } from 'path';

const modulePath = join(process.cwd(), 'src', 'externalfulfillmentshipments_v2024_09_11', 'index.js');
const TheSellingPartnerApiForAmazonExternalFulfillmentShipmentsProcessing = await import(modulePath);
const endpoint = 'http://localhost:3000';

describe('SandboxShipmentsApi', () => {
  let instance;

  beforeEach(() => {
    const apiClientInstance = new TheSellingPartnerApiForAmazonExternalFulfillmentShipmentsProcessing.ApiClient(endpoint);
    apiClientInstance.applyXAmzAccessTokenToRequest("testAccessToken");
    instance = new TheSellingPartnerApiForAmazonExternalFulfillmentShipmentsProcessing.SandboxShipmentsApi(apiClientInstance);
  });

  describe('createSandboxShipment', () => {
    it('should successfully call createSandboxShipmentWithHttpInfo', async () => {
      await instructBackendMock("sandboxShipments", "createSandboxShipment", "201")
      const params = [
        generateMockData('CreateSandboxShipmentRequest')
      ];
      const response = await instance.createSandboxShipmentWithHttpInfo(...params);

      expect(response.response).to.have.property('statusCode');
      expect(response.response.statusCode).to.equal(201)
      assertValidResponsePayload(201, response.data);
    });
  });
  describe('updateSandboxShipment', () => {
    it('should successfully call updateSandboxShipmentWithHttpInfo', async () => {
      await instructBackendMock("sandboxShipments", "updateSandboxShipment", "204")
      const params = [
        generateMockData('String'),
        generateMockData('UpdateSandboxShipmentRequest')
      ];
      const response = await instance.updateSandboxShipmentWithHttpInfo(...params);

      expect(response.response).to.have.property('statusCode');
      expect(response.response.statusCode).to.equal(204)
    });
  });

  describe('constructor', () => {
    it('should use default ApiClient when none provided', () => {
      const defaultInstance = new TheSellingPartnerApiForAmazonExternalFulfillmentShipmentsProcessing.SandboxShipmentsApi();
      expect(defaultInstance.apiClient).to.equal(TheSellingPartnerApiForAmazonExternalFulfillmentShipmentsProcessing.ApiClient.instance);
    });

    it('should use provided ApiClient', () => {
      const customClient = new TheSellingPartnerApiForAmazonExternalFulfillmentShipmentsProcessing.ApiClient();
      const customInstance = new TheSellingPartnerApiForAmazonExternalFulfillmentShipmentsProcessing.SandboxShipmentsApi(customClient);
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
        const ModelClass = TheSellingPartnerApiForAmazonExternalFulfillmentShipmentsProcessing[dataType];
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
