import expect from 'expect.js';
import { join } from 'path';

const modulePath = join(process.cwd(), 'src', 'vendororders_v1', 'index.js');
const SellingPartnerApiForRetailProcurementOrders = await import(modulePath);
const endpoint = 'https://localhost:3000';

describe('VendorOrdersApi', () => {
  let instance;

  beforeEach(() => {
    const apiClientInstance = new SellingPartnerApiForRetailProcurementOrders.ApiClient(testEndpoint);
    apiClientInstance.applyXAmzAccessTokenToRequest("testAccessToken");
    instance = new SellingPartnerApiForRetailProcurementOrders.VendorOrdersApi(apiClientInstance);
  });

  describe('getPurchaseOrder', () => {
    it('should successfully call getPurchaseOrderWithHttpInfo', async () => {
      await instructBackendMock("vendorOrders", "getPurchaseOrder", "200")
      const params = [
        generateMockData('String')
      ];
      const response = await instance.getPurchaseOrderWithHttpInfo(...params);

      expect(response).to.have.property('statusCode');
      expect(response.statusCode).to.equal()
      expect(response).to.have.property('data');
    });
  });
  describe('getPurchaseOrders', () => {
    it('should successfully call getPurchaseOrdersWithHttpInfo', async () => {
      await instructBackendMock("vendorOrders", "getPurchaseOrders", "200")
      const params = [
      ];
      const response = await instance.getPurchaseOrdersWithHttpInfo(...params);

      expect(response).to.have.property('statusCode');
      expect(response.statusCode).to.equal()
      expect(response).to.have.property('data');
    });
  });
  describe('getPurchaseOrdersStatus', () => {
    it('should successfully call getPurchaseOrdersStatusWithHttpInfo', async () => {
      await instructBackendMock("vendorOrders", "getPurchaseOrdersStatus", "200")
      const params = [
      ];
      const response = await instance.getPurchaseOrdersStatusWithHttpInfo(...params);

      expect(response).to.have.property('statusCode');
      expect(response.statusCode).to.equal()
      expect(response).to.have.property('data');
    });
  });
  describe('submitAcknowledgement', () => {
    it('should successfully call submitAcknowledgementWithHttpInfo', async () => {
      await instructBackendMock("vendorOrders", "submitAcknowledgement", "202")
      const params = [
        generateMockData('SubmitAcknowledgementRequest')
      ];
      const response = await instance.submitAcknowledgementWithHttpInfo(...params);

      expect(response).to.have.property('statusCode');
      expect(response.statusCode).to.equal()
      expect(response).to.have.property('data');
    });
  });

  describe('constructor', () => {
    it('should use default ApiClient when none provided', () => {
      const defaultInstance = new SellingPartnerApiForRetailProcurementOrders.VendorOrdersApi();
      expect(defaultInstance.apiClient).to.equal(SellingPartnerApiForRetailProcurementOrders.ApiClient.instance);
    });

    it('should use provided ApiClient', () => {
      const customClient = new SellingPartnerApiForRetailProcurementOrders.ApiClient();
      const customInstance = new SellingPartnerApiForRetailProcurementOrders.VendorOrdersApi(customClient);
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
        const ModelClass = SellingPartnerApiForRetailProcurementOrders[dataType];
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
