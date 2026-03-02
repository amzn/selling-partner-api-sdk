import expect from 'expect.js';
import { join } from 'path';

const modulePath = join(process.cwd(), 'src', 'externalfulfillmentshipments_v2024_09_11', 'index.js');
const TheSellingPartnerApiForAmazonExternalFulfillmentShipmentsProcessing = await import(modulePath);
const endpoint = 'http://localhost:3000';

describe('ShipmentProcessingApi', () => {
  let instance;

  beforeEach(() => {
    const apiClientInstance = new TheSellingPartnerApiForAmazonExternalFulfillmentShipmentsProcessing.ApiClient(endpoint);
    apiClientInstance.applyXAmzAccessTokenToRequest("testAccessToken");
    instance = new TheSellingPartnerApiForAmazonExternalFulfillmentShipmentsProcessing.ShipmentProcessingApi(apiClientInstance);
  });

  describe('createPackages', () => {
    it('should successfully call createPackagesWithHttpInfo', async () => {
      await instructBackendMock("shipmentProcessing", "createPackages", "204")
      const params = [
        generateMockData('String'),
        generateMockData('Packages')
      ];
      const response = await instance.createPackagesWithHttpInfo(...params);

      expect(response.response).to.have.property('statusCode');
      expect(response.response.statusCode).to.equal(204)
    });
  });
  describe('generateInvoice', () => {
    it('should successfully call generateInvoiceWithHttpInfo', async () => {
      await instructBackendMock("shipmentProcessing", "generateInvoice", "200")
      const params = [
        generateMockData('String')
      ];
      const response = await instance.generateInvoiceWithHttpInfo(...params);

      expect(response.response).to.have.property('statusCode');
      expect(response.response.statusCode).to.equal(200)
      assertValidResponsePayload(200, response.data.payload);
    });
  });
  describe('generateShipLabels', () => {
    it('should successfully call generateShipLabelsWithHttpInfo', async () => {
      await instructBackendMock("shipmentProcessing", "generateShipLabels", "200")
      const params = [
        generateMockData('String'),
        generateMockData('String'),
      ];
      const response = await instance.generateShipLabelsWithHttpInfo(...params);

      expect(response.response).to.have.property('statusCode');
      expect(response.response.statusCode).to.equal(200)
      assertValidResponsePayload(200, response.data.payload);
    });
  });
  describe('processShipment', () => {
    it('should successfully call processShipmentWithHttpInfo', async () => {
      await instructBackendMock("shipmentProcessing", "processShipment", "204")
      const params = [
        generateMockData('String'),
        generateMockData('String'),
      ];
      const response = await instance.processShipmentWithHttpInfo(...params);

      expect(response.response).to.have.property('statusCode');
      expect(response.response.statusCode).to.equal(204)
    });
  });
  describe('retrieveInvoice', () => {
    it('should successfully call retrieveInvoiceWithHttpInfo', async () => {
      await instructBackendMock("shipmentProcessing", "retrieveInvoice", "200")
      const params = [
        generateMockData('String')
      ];
      const response = await instance.retrieveInvoiceWithHttpInfo(...params);

      expect(response.response).to.have.property('statusCode');
      expect(response.response.statusCode).to.equal(200)
      assertValidResponsePayload(200, response.data.payload);
    });
  });
  describe('retrieveShippingOptions', () => {
    it('should successfully call retrieveShippingOptionsWithHttpInfo', async () => {
      await instructBackendMock("shipmentProcessing", "retrieveShippingOptions", "200")
      const params = [
        generateMockData('String'),
        generateMockData('String')
      ];
      const response = await instance.retrieveShippingOptionsWithHttpInfo(...params);

      expect(response.response).to.have.property('statusCode');
      expect(response.response.statusCode).to.equal(200)
      assertValidResponsePayload(200, response.data.payload);
    });
  });
  describe('updatePackage', () => {
    it('should successfully call updatePackageWithHttpInfo', async () => {
      await instructBackendMock("shipmentProcessing", "updatePackage", "204")
      const params = [
        generateMockData('String'),
        generateMockData('String'),
        generateMockData('Package')
      ];
      const response = await instance.updatePackageWithHttpInfo(...params);

      expect(response.response).to.have.property('statusCode');
      expect(response.response.statusCode).to.equal(204)
    });
  });
  describe('updatePackageStatus', () => {
    it('should successfully call updatePackageStatusWithHttpInfo', async () => {
      await instructBackendMock("shipmentProcessing", "updatePackageStatus", "204")
      const params = [
        generateMockData('String'),
        generateMockData('String'),
      ];
      const response = await instance.updatePackageStatusWithHttpInfo(...params);

      expect(response.response).to.have.property('statusCode');
      expect(response.response.statusCode).to.equal(204)
    });
  });

  describe('constructor', () => {
    it('should use default ApiClient when none provided', () => {
      const defaultInstance = new TheSellingPartnerApiForAmazonExternalFulfillmentShipmentsProcessing.ShipmentProcessingApi();
      expect(defaultInstance.apiClient).to.equal(TheSellingPartnerApiForAmazonExternalFulfillmentShipmentsProcessing.ApiClient.instance);
    });

    it('should use provided ApiClient', () => {
      const customClient = new TheSellingPartnerApiForAmazonExternalFulfillmentShipmentsProcessing.ApiClient();
      const customInstance = new TheSellingPartnerApiForAmazonExternalFulfillmentShipmentsProcessing.ShipmentProcessingApi(customClient);
      expect(customInstance.apiClient).to.equal(customClient);
    });
  });
});

function assertValidResponsePayload(statusCode, payload) {
  if (statusCode != 204) expect(payload).to.be.ok();
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
