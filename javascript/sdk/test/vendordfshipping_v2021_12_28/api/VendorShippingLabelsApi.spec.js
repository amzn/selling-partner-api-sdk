import expect from 'expect.js';
import { join } from 'path';

const modulePath = join(process.cwd(), 'src', 'vendordfshipping_v2021_12_28', 'index.js');
const SellingPartnerApiForDirectFulfillmentShipping = await import(modulePath);
const endpoint = 'http://localhost:3000';

describe('VendorShippingLabelsApi', () => {
  let instance;

  beforeEach(() => {
    const apiClientInstance = new SellingPartnerApiForDirectFulfillmentShipping.ApiClient(endpoint);
    apiClientInstance.applyXAmzAccessTokenToRequest("testAccessToken");
    instance = new SellingPartnerApiForDirectFulfillmentShipping.VendorShippingLabelsApi(apiClientInstance);
  });

  describe('createShippingLabels', () => {
    it('should successfully call createShippingLabelsWithHttpInfo', async () => {
      await instructBackendMock("vendorShippingLabels", "createShippingLabels", "200")
      const params = [
        generateMockData('String'),
        generateMockData('CreateShippingLabelsRequest')
      ];
      const response = await instance.createShippingLabelsWithHttpInfo(...params);

      expect(response.response).to.have.property('statusCode');
      expect(response.response.statusCode).to.equal(200)
      assertValidResponsePayload(200, response.data);
    });
  });
  describe('getShippingLabel', () => {
    it('should successfully call getShippingLabelWithHttpInfo', async () => {
      await instructBackendMock("vendorShippingLabels", "getShippingLabel", "200")
      const params = [
        generateMockData('String')
      ];
      const response = await instance.getShippingLabelWithHttpInfo(...params);

      expect(response.response).to.have.property('statusCode');
      expect(response.response.statusCode).to.equal(200)
      assertValidResponsePayload(200, response.data);
    });
  });
  describe('getShippingLabels', () => {
    it('should successfully call getShippingLabelsWithHttpInfo', async () => {
      await instructBackendMock("vendorShippingLabels", "getShippingLabels", "200")
      const params = [
        generateMockData('Date'),
        generateMockData('Date'),
      ];
      const response = await instance.getShippingLabelsWithHttpInfo(...params);

      expect(response.response).to.have.property('statusCode');
      expect(response.response.statusCode).to.equal(200)
      assertValidResponsePayload(200, response.data);
    });
  });
  describe('submitShippingLabelRequest', () => {
    it('should successfully call submitShippingLabelRequestWithHttpInfo', async () => {
      await instructBackendMock("vendorShippingLabels", "submitShippingLabelRequest", "202")
      const params = [
        generateMockData('SubmitShippingLabelsRequest')
      ];
      const response = await instance.submitShippingLabelRequestWithHttpInfo(...params);

      expect(response.response).to.have.property('statusCode');
      expect(response.response.statusCode).to.equal(202)
      assertValidResponsePayload(202, response.data);
    });
  });

  describe('constructor', () => {
    it('should use default ApiClient when none provided', () => {
      const defaultInstance = new SellingPartnerApiForDirectFulfillmentShipping.VendorShippingLabelsApi();
      expect(defaultInstance.apiClient).to.equal(SellingPartnerApiForDirectFulfillmentShipping.ApiClient.instance);
    });

    it('should use provided ApiClient', () => {
      const customClient = new SellingPartnerApiForDirectFulfillmentShipping.ApiClient();
      const customInstance = new SellingPartnerApiForDirectFulfillmentShipping.VendorShippingLabelsApi(customClient);
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
