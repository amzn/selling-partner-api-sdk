import expect from 'expect.js';
import { join } from 'path';

const modulePath = join(process.cwd(), 'src', 'vendordforders_v2021_12_28', 'index.js');
const SellingPartnerApiForDirectFulfillmentOrders = await import(modulePath);

describe('VendorOrdersApi', () => {
  let instance;
  const testEndpoint = 'https://localhost:3000';
  const testAccessToken = "testAccessToken";

  beforeEach(() => {
    const apiClientInstance = new SellingPartnerApiForDirectFulfillmentOrders.ApiClient(testEndpoint);
    apiClientInstance.applyXAmzAccessTokenToRequest(testAccessToken);
    instance = new SellingPartnerApiForDirectFulfillmentOrders.VendorOrdersApi(apiClientInstance);
  });

  describe('getOrder', () => {
    it('should successfully call getOrderWithHttpInfo', async () => {
      instructBackendMock("vendorOrders", "getOrder", "200")
      const params = [
        generateMockData('String')
      ];
      const response = await instance.getOrderWithHttpInfo(...params);

      expect(response).to.have.property('statusCode');
      expect(response.statusCode).to.equal()
      expect(response).to.have.property('data');
    });
  });
  describe('getOrders', () => {
    it('should successfully call getOrdersWithHttpInfo', async () => {
      instructBackendMock("vendorOrders", "getOrders", "200")
      const params = [
        generateMockData('Date'),
        generateMockData('Date'),
      ];
      const response = await instance.getOrdersWithHttpInfo(...params);

      expect(response).to.have.property('statusCode');
      expect(response.statusCode).to.equal()
      expect(response).to.have.property('data');
    });
  });
  describe('submitAcknowledgement', () => {
    it('should successfully call submitAcknowledgementWithHttpInfo', async () => {
      instructBackendMock("vendorOrders", "submitAcknowledgement", "202")
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
      const defaultInstance = new SellingPartnerApiForDirectFulfillmentOrders.VendorOrdersApi();
      expect(defaultInstance.apiClient).to.equal(SellingPartnerApiForDirectFulfillmentOrders.ApiClient.instance);
    });

    it('should use provided ApiClient', () => {
      const customClient = new SellingPartnerApiForDirectFulfillmentOrders.ApiClient();
      const customInstance = new SellingPartnerApiForDirectFulfillmentOrders.VendorOrdersApi(customClient);
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
        const ModelClass = SellingPartnerApiForDirectFulfillmentOrders[dataType];
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
