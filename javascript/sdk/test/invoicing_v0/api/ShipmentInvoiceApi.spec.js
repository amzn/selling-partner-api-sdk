import expect from 'expect.js';
import { join } from 'path';

const modulePath = join(process.cwd(), 'src', 'invoicing_v0', 'index.js');
const SellingPartnerApiForShipmentInvoicing = await import(modulePath);

describe('ShipmentInvoiceApi', () => {
  let instance;
  const testEndpoint = 'https://localhost:3000';
  const testAccessToken = "testAccessToken";

  beforeEach(() => {
    const apiClientInstance = new SellingPartnerApiForShipmentInvoicing.ApiClient(testEndpoint);
    apiClientInstance.applyXAmzAccessTokenToRequest(testAccessToken);
    instance = new SellingPartnerApiForShipmentInvoicing.ShipmentInvoiceApi(apiClientInstance);
  });

  describe('getInvoiceStatus', () => {
    it('should successfully call getInvoiceStatusWithHttpInfo', async () => {
      instructBackendMock("shipmentInvoice", "getInvoiceStatus", "200")
      const params = [
        generateMockData('String')
      ];
      const response = await instance.getInvoiceStatusWithHttpInfo(...params);

      expect(response).to.have.property('statusCode');
      expect(response.statusCode).to.equal()
      expect(response).to.have.property('data');
    });
  });
  describe('getShipmentDetails', () => {
    it('should successfully call getShipmentDetailsWithHttpInfo', async () => {
      instructBackendMock("shipmentInvoice", "getShipmentDetails", "200")
      const params = [
        generateMockData('String')
      ];
      const response = await instance.getShipmentDetailsWithHttpInfo(...params);

      expect(response).to.have.property('statusCode');
      expect(response.statusCode).to.equal()
      expect(response).to.have.property('data');
    });
  });
  describe('submitInvoice', () => {
    it('should successfully call submitInvoiceWithHttpInfo', async () => {
      instructBackendMock("shipmentInvoice", "submitInvoice", "200")
      const params = [
        generateMockData('String'),
        generateMockData('SubmitInvoiceRequest')
      ];
      const response = await instance.submitInvoiceWithHttpInfo(...params);

      expect(response).to.have.property('statusCode');
      expect(response.statusCode).to.equal()
      expect(response).to.have.property('data');
    });
  });

  describe('constructor', () => {
    it('should use default ApiClient when none provided', () => {
      const defaultInstance = new SellingPartnerApiForShipmentInvoicing.ShipmentInvoiceApi();
      expect(defaultInstance.apiClient).to.equal(SellingPartnerApiForShipmentInvoicing.ApiClient.instance);
    });

    it('should use provided ApiClient', () => {
      const customClient = new SellingPartnerApiForShipmentInvoicing.ApiClient();
      const customInstance = new SellingPartnerApiForShipmentInvoicing.ShipmentInvoiceApi(customClient);
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
        const ModelClass = SellingPartnerApiForShipmentInvoicing[dataType];
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
