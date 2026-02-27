import expect from 'expect.js';
import { join } from 'path';

const modulePath = join(process.cwd(), 'src', 'vendordfshipping_v2021_12_28', 'index.js');
const SellingPartnerApiForDirectFulfillmentShipping = await import(modulePath);
const endpoint = 'https://localhost:3000';

describe('CustomerInvoicesApi', () => {
  let instance;

  beforeEach(() => {
    const apiClientInstance = new SellingPartnerApiForDirectFulfillmentShipping.ApiClient(endpoint);
    apiClientInstance.applyXAmzAccessTokenToRequest("testAccessToken");
    instance = new SellingPartnerApiForDirectFulfillmentShipping.CustomerInvoicesApi(apiClientInstance);
  });

  describe('getCustomerInvoice', () => {
    it('should successfully call getCustomerInvoiceWithHttpInfo', async () => {
      await instructBackendMock("customerInvoices", "getCustomerInvoice", "200")
      const params = [
        generateMockData('String')
      ];
      const response = await instance.getCustomerInvoiceWithHttpInfo(...params);

      expect(response).to.have.property('statusCode');
      expect(response.statusCode).to.equal()
      expect(response).to.have.property('data');
    });
  });
  describe('getCustomerInvoices', () => {
    it('should successfully call getCustomerInvoicesWithHttpInfo', async () => {
      await instructBackendMock("customerInvoices", "getCustomerInvoices", "200")
      const params = [
        generateMockData('Date'),
        generateMockData('Date'),
      ];
      const response = await instance.getCustomerInvoicesWithHttpInfo(...params);

      expect(response).to.have.property('statusCode');
      expect(response.statusCode).to.equal()
      expect(response).to.have.property('data');
    });
  });

  describe('constructor', () => {
    it('should use default ApiClient when none provided', () => {
      const defaultInstance = new SellingPartnerApiForDirectFulfillmentShipping.CustomerInvoicesApi();
      expect(defaultInstance.apiClient).to.equal(SellingPartnerApiForDirectFulfillmentShipping.ApiClient.instance);
    });

    it('should use provided ApiClient', () => {
      const customClient = new SellingPartnerApiForDirectFulfillmentShipping.ApiClient();
      const customInstance = new SellingPartnerApiForDirectFulfillmentShipping.CustomerInvoicesApi(customClient);
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
        const ModelClass = SellingPartnerApiForDirectFulfillmentShipping[dataType];
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
