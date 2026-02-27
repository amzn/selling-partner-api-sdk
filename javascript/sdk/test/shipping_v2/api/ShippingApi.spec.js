import expect from 'expect.js';
import { join } from 'path';

const modulePath = join(process.cwd(), 'src', 'shipping_v2', 'index.js');
const AmazonShippingApi = await import(modulePath);
const endpoint = 'https://localhost:3000';

describe('ShippingApi', () => {
  let instance;

  beforeEach(() => {
    const apiClientInstance = new AmazonShippingApi.ApiClient(endpoint);
    apiClientInstance.applyXAmzAccessTokenToRequest("testAccessToken");
    instance = new AmazonShippingApi.ShippingApi(apiClientInstance);
  });

  describe('cancelShipment', () => {
    it('should successfully call cancelShipmentWithHttpInfo', async () => {
      await instructBackendMock("shipping", "cancelShipment", "200")
      const params = [
        generateMockData('String'),
      ];
      const response = await instance.cancelShipmentWithHttpInfo(...params);

      expect(response).to.have.property('statusCode');
      expect(response.statusCode).to.equal()
      expect(response).to.have.property('data');
    });
  });
  describe('createClaim', () => {
    it('should successfully call createClaimWithHttpInfo', async () => {
      await instructBackendMock("shipping", "createClaim", "201")
      const params = [
        generateMockData('CreateClaimRequest'),
      ];
      const response = await instance.createClaimWithHttpInfo(...params);

      expect(response).to.have.property('statusCode');
      expect(response.statusCode).to.equal()
      expect(response).to.have.property('data');
    });
  });
  describe('directPurchaseShipment', () => {
    it('should successfully call directPurchaseShipmentWithHttpInfo', async () => {
      await instructBackendMock("shipping", "directPurchaseShipment", "200")
      const params = [
        generateMockData('DirectPurchaseRequest'),
      ];
      const response = await instance.directPurchaseShipmentWithHttpInfo(...params);

      expect(response).to.have.property('statusCode');
      expect(response.statusCode).to.equal()
      expect(response).to.have.property('data');
    });
  });
  describe('generateCollectionForm', () => {
    it('should successfully call generateCollectionFormWithHttpInfo', async () => {
      await instructBackendMock("shipping", "generateCollectionForm", "200")
      const params = [
        generateMockData('GenerateCollectionFormRequest'),
      ];
      const response = await instance.generateCollectionFormWithHttpInfo(...params);

      expect(response).to.have.property('statusCode');
      expect(response.statusCode).to.equal()
      expect(response).to.have.property('data');
    });
  });
  describe('getAccessPoints', () => {
    it('should successfully call getAccessPointsWithHttpInfo', async () => {
      await instructBackendMock("shipping", "getAccessPoints", "200")
      const params = [
        generateMockData('String', true),
        generateMockData('String'),
        generateMockData('String'),
      ];
      const response = await instance.getAccessPointsWithHttpInfo(...params);

      expect(response).to.have.property('statusCode');
      expect(response.statusCode).to.equal()
      expect(response).to.have.property('data');
    });
  });
  describe('getAdditionalInputs', () => {
    it('should successfully call getAdditionalInputsWithHttpInfo', async () => {
      await instructBackendMock("shipping", "getAdditionalInputs", "200")
      const params = [
        generateMockData('String'),
        generateMockData('String'),
      ];
      const response = await instance.getAdditionalInputsWithHttpInfo(...params);

      expect(response).to.have.property('statusCode');
      expect(response.statusCode).to.equal()
      expect(response).to.have.property('data');
    });
  });
  describe('getCarrierAccountFormInputs', () => {
    it('should successfully call getCarrierAccountFormInputsWithHttpInfo', async () => {
      await instructBackendMock("shipping", "getCarrierAccountFormInputs", "200")
      const params = [
      ];
      const response = await instance.getCarrierAccountFormInputsWithHttpInfo(...params);

      expect(response).to.have.property('statusCode');
      expect(response.statusCode).to.equal()
      expect(response).to.have.property('data');
    });
  });
  describe('getCarrierAccounts', () => {
    it('should successfully call getCarrierAccountsWithHttpInfo', async () => {
      await instructBackendMock("shipping", "getCarrierAccounts", "200")
      const params = [
        generateMockData('GetCarrierAccountsRequest'),
      ];
      const response = await instance.getCarrierAccountsWithHttpInfo(...params);

      expect(response).to.have.property('statusCode');
      expect(response.statusCode).to.equal()
      expect(response).to.have.property('data');
    });
  });
  describe('getCollectionForm', () => {
    it('should successfully call getCollectionFormWithHttpInfo', async () => {
      await instructBackendMock("shipping", "getCollectionForm", "200")
      const params = [
        generateMockData('String'),
      ];
      const response = await instance.getCollectionFormWithHttpInfo(...params);

      expect(response).to.have.property('statusCode');
      expect(response.statusCode).to.equal()
      expect(response).to.have.property('data');
    });
  });
  describe('getCollectionFormHistory', () => {
    it('should successfully call getCollectionFormHistoryWithHttpInfo', async () => {
      await instructBackendMock("shipping", "getCollectionFormHistory", "200")
      const params = [
        generateMockData('GetCollectionFormHistoryRequest'),
      ];
      const response = await instance.getCollectionFormHistoryWithHttpInfo(...params);

      expect(response).to.have.property('statusCode');
      expect(response.statusCode).to.equal()
      expect(response).to.have.property('data');
    });
  });
  describe('getRates', () => {
    it('should successfully call getRatesWithHttpInfo', async () => {
      await instructBackendMock("shipping", "getRates", "200")
      const params = [
        generateMockData('GetRatesRequest'),
      ];
      const response = await instance.getRatesWithHttpInfo(...params);

      expect(response).to.have.property('statusCode');
      expect(response.statusCode).to.equal()
      expect(response).to.have.property('data');
    });
  });
  describe('getShipmentDocuments', () => {
    it('should successfully call getShipmentDocumentsWithHttpInfo', async () => {
      await instructBackendMock("shipping", "getShipmentDocuments", "200")
      const params = [
        generateMockData('String'),
        generateMockData('String'),
      ];
      const response = await instance.getShipmentDocumentsWithHttpInfo(...params);

      expect(response).to.have.property('statusCode');
      expect(response.statusCode).to.equal()
      expect(response).to.have.property('data');
    });
  });
  describe('getTracking', () => {
    it('should successfully call getTrackingWithHttpInfo', async () => {
      await instructBackendMock("shipping", "getTracking", "200")
      const params = [
        generateMockData('String'),
        generateMockData('String'),
      ];
      const response = await instance.getTrackingWithHttpInfo(...params);

      expect(response).to.have.property('statusCode');
      expect(response.statusCode).to.equal()
      expect(response).to.have.property('data');
    });
  });
  describe('getUnmanifestedShipments', () => {
    it('should successfully call getUnmanifestedShipmentsWithHttpInfo', async () => {
      await instructBackendMock("shipping", "getUnmanifestedShipments", "200")
      const params = [
        generateMockData('GetUnmanifestedShipmentsRequest'),
      ];
      const response = await instance.getUnmanifestedShipmentsWithHttpInfo(...params);

      expect(response).to.have.property('statusCode');
      expect(response.statusCode).to.equal()
      expect(response).to.have.property('data');
    });
  });
  describe('linkCarrierAccount', () => {
    it('should successfully call linkCarrierAccountWithHttpInfo', async () => {
      await instructBackendMock("shipping", "linkCarrierAccount", "200")
      const params = [
        generateMockData('String'),
        generateMockData('LinkCarrierAccountRequest'),
      ];
      const response = await instance.linkCarrierAccountWithHttpInfo(...params);

      expect(response).to.have.property('statusCode');
      expect(response.statusCode).to.equal()
      expect(response).to.have.property('data');
    });
  });
  describe('linkCarrierAccount_0', () => {
    it('should successfully call linkCarrierAccount_0WithHttpInfo', async () => {
      await instructBackendMock("shipping", "linkCarrierAccount_0", "200")
      const params = [
        generateMockData('String'),
        generateMockData('LinkCarrierAccountRequest'),
      ];
      const response = await instance.linkCarrierAccount_0WithHttpInfo(...params);

      expect(response).to.have.property('statusCode');
      expect(response.statusCode).to.equal()
      expect(response).to.have.property('data');
    });
  });
  describe('oneClickShipment', () => {
    it('should successfully call oneClickShipmentWithHttpInfo', async () => {
      await instructBackendMock("shipping", "oneClickShipment", "200")
      const params = [
        generateMockData('OneClickShipmentRequest'),
      ];
      const response = await instance.oneClickShipmentWithHttpInfo(...params);

      expect(response).to.have.property('statusCode');
      expect(response.statusCode).to.equal()
      expect(response).to.have.property('data');
    });
  });
  describe('purchaseShipment', () => {
    it('should successfully call purchaseShipmentWithHttpInfo', async () => {
      await instructBackendMock("shipping", "purchaseShipment", "200")
      const params = [
        generateMockData('PurchaseShipmentRequest'),
      ];
      const response = await instance.purchaseShipmentWithHttpInfo(...params);

      expect(response).to.have.property('statusCode');
      expect(response.statusCode).to.equal()
      expect(response).to.have.property('data');
    });
  });
  describe('submitNdrFeedback', () => {
    it('should successfully call submitNdrFeedbackWithHttpInfo', async () => {
      await instructBackendMock("shipping", "submitNdrFeedback", "204")
      const params = [
        generateMockData('SubmitNdrFeedbackRequest'),
      ];
      const response = await instance.submitNdrFeedbackWithHttpInfo(...params);

      expect(response).to.have.property('statusCode');
      expect(response.statusCode).to.equal()
    });
  });
  describe('unlinkCarrierAccount', () => {
    it('should successfully call unlinkCarrierAccountWithHttpInfo', async () => {
      await instructBackendMock("shipping", "unlinkCarrierAccount", "200")
      const params = [
        generateMockData('String'),
        generateMockData('UnlinkCarrierAccountRequest'),
      ];
      const response = await instance.unlinkCarrierAccountWithHttpInfo(...params);

      expect(response).to.have.property('statusCode');
      expect(response.statusCode).to.equal()
      expect(response).to.have.property('data');
    });
  });

  describe('constructor', () => {
    it('should use default ApiClient when none provided', () => {
      const defaultInstance = new AmazonShippingApi.ShippingApi();
      expect(defaultInstance.apiClient).to.equal(AmazonShippingApi.ApiClient.instance);
    });

    it('should use provided ApiClient', () => {
      const customClient = new AmazonShippingApi.ApiClient();
      const customInstance = new AmazonShippingApi.ShippingApi(customClient);
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
        const ModelClass = AmazonShippingApi[dataType];
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
