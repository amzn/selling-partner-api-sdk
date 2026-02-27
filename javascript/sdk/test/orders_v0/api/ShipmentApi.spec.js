import expect from 'expect.js';
import { join } from 'path';

const modulePath = join(process.cwd(), 'src', 'orders_v0', 'index.js');
const SellingPartnerApiForOrders = await import(modulePath);
const endpoint = 'https://localhost:3000';

describe('ShipmentApi', () => {
  let instance;

  beforeEach(() => {
    const apiClientInstance = new SellingPartnerApiForOrders.ApiClient(endpoint);
    apiClientInstance.applyXAmzAccessTokenToRequest("testAccessToken");
    instance = new SellingPartnerApiForOrders.ShipmentApi(apiClientInstance);
  });

  describe('updateShipmentStatus', () => {
    it('should successfully call updateShipmentStatusWithHttpInfo', async () => {
      await instructBackendMock("shipment", "updateShipmentStatus", "204")
      const params = [
        generateMockData('String'),
        generateMockData('UpdateShipmentStatusRequest')
      ];
      const response = await instance.updateShipmentStatusWithHttpInfo(...params);

      expect(response).to.have.property('statusCode');
      expect(response.statusCode).to.equal()
    });
  });

  describe('constructor', () => {
    it('should use default ApiClient when none provided', () => {
      const defaultInstance = new SellingPartnerApiForOrders.ShipmentApi();
      expect(defaultInstance.apiClient).to.equal(SellingPartnerApiForOrders.ApiClient.instance);
    });

    it('should use provided ApiClient', () => {
      const customClient = new SellingPartnerApiForOrders.ApiClient();
      const customInstance = new SellingPartnerApiForOrders.ShipmentApi(customClient);
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
        const ModelClass = SellingPartnerApiForOrders[dataType];
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
