import expect from 'expect.js';
import { join } from 'path';

const modulePath = join(process.cwd(), 'src', 'easyship_v2022_03_23', 'index.js');
const SellingPartnerApiForEasyShip = await import(modulePath);
const endpoint = 'http://localhost:3000';

describe('EasyShipApi', () => {
  let instance;

  beforeEach(() => {
    const apiClientInstance = new SellingPartnerApiForEasyShip.ApiClient(endpoint);
    apiClientInstance.applyXAmzAccessTokenToRequest("testAccessToken");
    instance = new SellingPartnerApiForEasyShip.EasyShipApi(apiClientInstance);
  });

  describe('createScheduledPackage', () => {
    it('should successfully call createScheduledPackageWithHttpInfo', async () => {
      await instructBackendMock("easyShip", "createScheduledPackage", "200")
      const params = [
        generateMockData('CreateScheduledPackageRequest')
      ];
      const response = await instance.createScheduledPackageWithHttpInfo(...params);

      expect(response.response).to.have.property('statusCode');
      expect(response.response.statusCode).to.equal(200)
      assertValidResponsePayload(200, response.data.payload);
    });
  });
  describe('createScheduledPackageBulk', () => {
    it('should successfully call createScheduledPackageBulkWithHttpInfo', async () => {
      await instructBackendMock("easyShip", "createScheduledPackageBulk", "200")
      const params = [
        generateMockData('CreateScheduledPackagesRequest')
      ];
      const response = await instance.createScheduledPackageBulkWithHttpInfo(...params);

      expect(response.response).to.have.property('statusCode');
      expect(response.response.statusCode).to.equal(200)
      assertValidResponsePayload(200, response.data.payload);
    });
  });
  describe('getScheduledPackage', () => {
    it('should successfully call getScheduledPackageWithHttpInfo', async () => {
      await instructBackendMock("easyShip", "getScheduledPackage", "200")
      const params = [
        generateMockData('String'),
        generateMockData('String')
      ];
      const response = await instance.getScheduledPackageWithHttpInfo(...params);

      expect(response.response).to.have.property('statusCode');
      expect(response.response.statusCode).to.equal(200)
      assertValidResponsePayload(200, response.data.payload);
    });
  });
  describe('listHandoverSlots', () => {
    it('should successfully call listHandoverSlotsWithHttpInfo', async () => {
      await instructBackendMock("easyShip", "listHandoverSlots", "200")
      const params = [
      ];
      const response = await instance.listHandoverSlotsWithHttpInfo(...params);

      expect(response.response).to.have.property('statusCode');
      expect(response.response.statusCode).to.equal(200)
      assertValidResponsePayload(200, response.data.payload);
    });
  });
  describe('updateScheduledPackages', () => {
    it('should successfully call updateScheduledPackagesWithHttpInfo', async () => {
      await instructBackendMock("easyShip", "updateScheduledPackages", "200")
      const params = [
      ];
      const response = await instance.updateScheduledPackagesWithHttpInfo(...params);

      expect(response.response).to.have.property('statusCode');
      expect(response.response.statusCode).to.equal(200)
      assertValidResponsePayload(200, response.data.payload);
    });
  });

  describe('constructor', () => {
    it('should use default ApiClient when none provided', () => {
      const defaultInstance = new SellingPartnerApiForEasyShip.EasyShipApi();
      expect(defaultInstance.apiClient).to.equal(SellingPartnerApiForEasyShip.ApiClient.instance);
    });

    it('should use provided ApiClient', () => {
      const customClient = new SellingPartnerApiForEasyShip.ApiClient();
      const customInstance = new SellingPartnerApiForEasyShip.EasyShipApi(customClient);
      expect(customInstance.apiClient).to.equal(customClient);
    });
  });
});

function assertValidResponsePayload(statusCode, payload) {
  if (statusCode != 204) expect(payload).to.be.ok();
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
        const ModelClass = SellingPartnerApiForEasyShip[dataType];
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
