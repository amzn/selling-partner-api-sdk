import expect from 'expect.js';
import { join } from 'path';

const modulePath = join(process.cwd(), 'src', 'vendorshipments_v1', 'index.js');
const SellingPartnerApiForRetailProcurementShipments = await import(modulePath);
const endpoint = 'http://localhost:3000';

describe('VendorShippingApi', () => {
  let instance;

  beforeEach(() => {
    const apiClientInstance = new SellingPartnerApiForRetailProcurementShipments.ApiClient(endpoint);
    apiClientInstance.applyXAmzAccessTokenToRequest("testAccessToken");
    instance = new SellingPartnerApiForRetailProcurementShipments.VendorShippingApi(apiClientInstance);
  });

  describe('getShipmentDetails', () => {
    it('should successfully call getShipmentDetailsWithHttpInfo', async () => {
      await instructBackendMock("vendorShipping", "getShipmentDetails", "200")
      const params = [
      ];
      const response = await instance.getShipmentDetailsWithHttpInfo(...params);

      expect(response).to.have.property('statusCode');
      expect(response.statusCode).to.equal()
      expect(response).to.have.property('data');
    });
  });
  describe('getShipmentLabels', () => {
    it('should successfully call getShipmentLabelsWithHttpInfo', async () => {
      await instructBackendMock("vendorShipping", "getShipmentLabels", "200")
      const params = [
      ];
      const response = await instance.getShipmentLabelsWithHttpInfo(...params);

      expect(response).to.have.property('statusCode');
      expect(response.statusCode).to.equal()
      expect(response).to.have.property('data');
    });
  });
  describe('submitShipmentConfirmations', () => {
    it('should successfully call submitShipmentConfirmationsWithHttpInfo', async () => {
      await instructBackendMock("vendorShipping", "submitShipmentConfirmations", "202")
      const params = [
        generateMockData('SubmitShipmentConfirmationsRequest')
      ];
      const response = await instance.submitShipmentConfirmationsWithHttpInfo(...params);

      expect(response).to.have.property('statusCode');
      expect(response.statusCode).to.equal()
      expect(response).to.have.property('data');
    });
  });
  describe('submitShipments', () => {
    it('should successfully call submitShipmentsWithHttpInfo', async () => {
      await instructBackendMock("vendorShipping", "submitShipments", "202")
      const params = [
        generateMockData('SubmitShipments')
      ];
      const response = await instance.submitShipmentsWithHttpInfo(...params);

      expect(response).to.have.property('statusCode');
      expect(response.statusCode).to.equal()
      expect(response).to.have.property('data');
    });
  });

  describe('constructor', () => {
    it('should use default ApiClient when none provided', () => {
      const defaultInstance = new SellingPartnerApiForRetailProcurementShipments.VendorShippingApi();
      expect(defaultInstance.apiClient).to.equal(SellingPartnerApiForRetailProcurementShipments.ApiClient.instance);
    });

    it('should use provided ApiClient', () => {
      const customClient = new SellingPartnerApiForRetailProcurementShipments.ApiClient();
      const customInstance = new SellingPartnerApiForRetailProcurementShipments.VendorShippingApi(customClient);
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
        const ModelClass = SellingPartnerApiForRetailProcurementShipments[dataType];
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
