import expect from 'expect.js';
import { join } from 'path';

const modulePath = join(process.cwd(), 'src', 'merchantfulfillment_v0', 'index.js');
const SellingPartnerApiForMerchantFulfillment = await import(modulePath);
const endpoint = 'http://localhost:3000';

describe('MerchantFulfillmentApi', () => {
  let instance;

  beforeEach(() => {
    const apiClientInstance = new SellingPartnerApiForMerchantFulfillment.ApiClient(endpoint);
    apiClientInstance.applyXAmzAccessTokenToRequest("testAccessToken");
    instance = new SellingPartnerApiForMerchantFulfillment.MerchantFulfillmentApi(apiClientInstance);
  });

  describe('cancelShipment', () => {
    it('should successfully call cancelShipmentWithHttpInfo', async () => {
      await instructBackendMock("merchantFulfillment", "cancelShipment", "200")
      const params = [
        generateMockData('String')
      ];
      const response = await instance.cancelShipmentWithHttpInfo(...params);

      expect(response.response).to.have.property('statusCode');
      expect(response.response.statusCode).to.equal(200)
      assertValidResponsePayload(200, response.data);
    });
  });
  describe('createShipment', () => {
    it('should successfully call createShipmentWithHttpInfo', async () => {
      await instructBackendMock("merchantFulfillment", "createShipment", "200")
      const params = [
        generateMockData('CreateShipmentRequest')
      ];
      const response = await instance.createShipmentWithHttpInfo(...params);

      expect(response.response).to.have.property('statusCode');
      expect(response.response.statusCode).to.equal(200)
      assertValidResponsePayload(200, response.data);
    });
  });
  describe('getAdditionalSellerInputs', () => {
    it('should successfully call getAdditionalSellerInputsWithHttpInfo', async () => {
      await instructBackendMock("merchantFulfillment", "getAdditionalSellerInputs", "200")
      const params = [
        generateMockData('GetAdditionalSellerInputsRequest')
      ];
      const response = await instance.getAdditionalSellerInputsWithHttpInfo(...params);

      expect(response.response).to.have.property('statusCode');
      expect(response.response.statusCode).to.equal(200)
      assertValidResponsePayload(200, response.data);
    });
  });
  describe('getEligibleShipmentServices', () => {
    it('should successfully call getEligibleShipmentServicesWithHttpInfo', async () => {
      await instructBackendMock("merchantFulfillment", "getEligibleShipmentServices", "200")
      const params = [
        generateMockData('GetEligibleShipmentServicesRequest')
      ];
      const response = await instance.getEligibleShipmentServicesWithHttpInfo(...params);

      expect(response.response).to.have.property('statusCode');
      expect(response.response.statusCode).to.equal(200)
      assertValidResponsePayload(200, response.data);
    });
  });
  describe('getShipment', () => {
    it('should successfully call getShipmentWithHttpInfo', async () => {
      await instructBackendMock("merchantFulfillment", "getShipment", "200")
      const params = [
        generateMockData('String')
      ];
      const response = await instance.getShipmentWithHttpInfo(...params);

      expect(response.response).to.have.property('statusCode');
      expect(response.response.statusCode).to.equal(200)
      assertValidResponsePayload(200, response.data);
    });
  });

  describe('constructor', () => {
    it('should use default ApiClient when none provided', () => {
      const defaultInstance = new SellingPartnerApiForMerchantFulfillment.MerchantFulfillmentApi();
      expect(defaultInstance.apiClient).to.equal(SellingPartnerApiForMerchantFulfillment.ApiClient.instance);
    });

    it('should use provided ApiClient', () => {
      const customClient = new SellingPartnerApiForMerchantFulfillment.ApiClient();
      const customInstance = new SellingPartnerApiForMerchantFulfillment.MerchantFulfillmentApi(customClient);
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
        const ModelClass = SellingPartnerApiForMerchantFulfillment[dataType];
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
