import expect from 'expect.js';
import { join } from 'path';

const modulePath = join(process.cwd(), 'src', 'messaging_v1', 'index.js');
const SellingPartnerApiForMessaging = await import(modulePath);
const endpoint = 'https://localhost:3000';

describe('MessagingApi', () => {
  let instance;

  beforeEach(() => {
    const apiClientInstance = new SellingPartnerApiForMessaging.ApiClient(endpoint);
    apiClientInstance.applyXAmzAccessTokenToRequest("testAccessToken");
    instance = new SellingPartnerApiForMessaging.MessagingApi(apiClientInstance);
  });

  describe('confirmCustomizationDetails', () => {
    it('should successfully call confirmCustomizationDetailsWithHttpInfo', async () => {
      await instructBackendMock("messaging", "confirmCustomizationDetails", "201")
      const params = [
        generateMockData('String'),
        generateMockData('String', true),
        generateMockData('CreateConfirmCustomizationDetailsRequest')
      ];
      const response = await instance.confirmCustomizationDetailsWithHttpInfo(...params);

      expect(response).to.have.property('statusCode');
      expect(response.statusCode).to.equal()
      expect(response).to.have.property('data');
    });
  });
  describe('createConfirmDeliveryDetails', () => {
    it('should successfully call createConfirmDeliveryDetailsWithHttpInfo', async () => {
      await instructBackendMock("messaging", "createConfirmDeliveryDetails", "201")
      const params = [
        generateMockData('String'),
        generateMockData('String', true),
        generateMockData('CreateConfirmDeliveryDetailsRequest')
      ];
      const response = await instance.createConfirmDeliveryDetailsWithHttpInfo(...params);

      expect(response).to.have.property('statusCode');
      expect(response.statusCode).to.equal()
      expect(response).to.have.property('data');
    });
  });
  describe('createConfirmOrderDetails', () => {
    it('should successfully call createConfirmOrderDetailsWithHttpInfo', async () => {
      await instructBackendMock("messaging", "createConfirmOrderDetails", "201")
      const params = [
        generateMockData('String'),
        generateMockData('String', true),
        generateMockData('CreateConfirmOrderDetailsRequest')
      ];
      const response = await instance.createConfirmOrderDetailsWithHttpInfo(...params);

      expect(response).to.have.property('statusCode');
      expect(response.statusCode).to.equal()
      expect(response).to.have.property('data');
    });
  });
  describe('createConfirmServiceDetails', () => {
    it('should successfully call createConfirmServiceDetailsWithHttpInfo', async () => {
      await instructBackendMock("messaging", "createConfirmServiceDetails", "201")
      const params = [
        generateMockData('String'),
        generateMockData('String', true),
        generateMockData('CreateConfirmServiceDetailsRequest')
      ];
      const response = await instance.createConfirmServiceDetailsWithHttpInfo(...params);

      expect(response).to.have.property('statusCode');
      expect(response.statusCode).to.equal()
      expect(response).to.have.property('data');
    });
  });
  describe('createDigitalAccessKey', () => {
    it('should successfully call createDigitalAccessKeyWithHttpInfo', async () => {
      await instructBackendMock("messaging", "createDigitalAccessKey", "201")
      const params = [
        generateMockData('String'),
        generateMockData('String', true),
        generateMockData('CreateDigitalAccessKeyRequest')
      ];
      const response = await instance.createDigitalAccessKeyWithHttpInfo(...params);

      expect(response).to.have.property('statusCode');
      expect(response.statusCode).to.equal()
      expect(response).to.have.property('data');
    });
  });
  describe('createLegalDisclosure', () => {
    it('should successfully call createLegalDisclosureWithHttpInfo', async () => {
      await instructBackendMock("messaging", "createLegalDisclosure", "201")
      const params = [
        generateMockData('String'),
        generateMockData('String', true),
        generateMockData('CreateLegalDisclosureRequest')
      ];
      const response = await instance.createLegalDisclosureWithHttpInfo(...params);

      expect(response).to.have.property('statusCode');
      expect(response.statusCode).to.equal()
      expect(response).to.have.property('data');
    });
  });
  describe('createUnexpectedProblem', () => {
    it('should successfully call createUnexpectedProblemWithHttpInfo', async () => {
      await instructBackendMock("messaging", "createUnexpectedProblem", "201")
      const params = [
        generateMockData('String'),
        generateMockData('String', true),
        generateMockData('CreateUnexpectedProblemRequest')
      ];
      const response = await instance.createUnexpectedProblemWithHttpInfo(...params);

      expect(response).to.have.property('statusCode');
      expect(response.statusCode).to.equal()
      expect(response).to.have.property('data');
    });
  });
  describe('createWarranty', () => {
    it('should successfully call createWarrantyWithHttpInfo', async () => {
      await instructBackendMock("messaging", "createWarranty", "201")
      const params = [
        generateMockData('String'),
        generateMockData('String', true),
        generateMockData('CreateWarrantyRequest')
      ];
      const response = await instance.createWarrantyWithHttpInfo(...params);

      expect(response).to.have.property('statusCode');
      expect(response.statusCode).to.equal()
      expect(response).to.have.property('data');
    });
  });
  describe('getAttributes', () => {
    it('should successfully call getAttributesWithHttpInfo', async () => {
      await instructBackendMock("messaging", "getAttributes", "200")
      const params = [
        generateMockData('String'),
        generateMockData('String', true)
      ];
      const response = await instance.getAttributesWithHttpInfo(...params);

      expect(response).to.have.property('statusCode');
      expect(response.statusCode).to.equal()
      expect(response).to.have.property('data');
    });
  });
  describe('getMessagingActionsForOrder', () => {
    it('should successfully call getMessagingActionsForOrderWithHttpInfo', async () => {
      await instructBackendMock("messaging", "getMessagingActionsForOrder", "200")
      const params = [
        generateMockData('String'),
        generateMockData('String', true)
      ];
      const response = await instance.getMessagingActionsForOrderWithHttpInfo(...params);

      expect(response).to.have.property('statusCode');
      expect(response.statusCode).to.equal()
      expect(response).to.have.property('data');
    });
  });
  describe('sendInvoice', () => {
    it('should successfully call sendInvoiceWithHttpInfo', async () => {
      await instructBackendMock("messaging", "sendInvoice", "201")
      const params = [
        generateMockData('String'),
        generateMockData('String', true),
        generateMockData('InvoiceRequest')
      ];
      const response = await instance.sendInvoiceWithHttpInfo(...params);

      expect(response).to.have.property('statusCode');
      expect(response.statusCode).to.equal()
      expect(response).to.have.property('data');
    });
  });

  describe('constructor', () => {
    it('should use default ApiClient when none provided', () => {
      const defaultInstance = new SellingPartnerApiForMessaging.MessagingApi();
      expect(defaultInstance.apiClient).to.equal(SellingPartnerApiForMessaging.ApiClient.instance);
    });

    it('should use provided ApiClient', () => {
      const customClient = new SellingPartnerApiForMessaging.ApiClient();
      const customInstance = new SellingPartnerApiForMessaging.MessagingApi(customClient);
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
        const ModelClass = SellingPartnerApiForMessaging[dataType];
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
