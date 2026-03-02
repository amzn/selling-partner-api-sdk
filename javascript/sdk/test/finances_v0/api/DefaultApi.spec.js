import expect from 'expect.js';
import { join } from 'path';

const modulePath = join(process.cwd(), 'src', 'finances_v0', 'index.js');
const SellingPartnerApiForFinances = await import(modulePath);
const endpoint = 'http://localhost:3000';

describe('DefaultApi', () => {
  let instance;

  beforeEach(() => {
    const apiClientInstance = new SellingPartnerApiForFinances.ApiClient(endpoint);
    apiClientInstance.applyXAmzAccessTokenToRequest("testAccessToken");
    instance = new SellingPartnerApiForFinances.DefaultApi(apiClientInstance);
  });

  describe('listFinancialEventGroups', () => {
    it('should successfully call listFinancialEventGroupsWithHttpInfo', async () => {
      await instructBackendMock("default", "listFinancialEventGroups", "200")
      const params = [
      ];
      const response = await instance.listFinancialEventGroupsWithHttpInfo(...params);

      expect(response.response).to.have.property('statusCode');
      expect(response.response.statusCode).to.equal(200)
      assertValidResponsePayload(200, response.data.payload);
    });
  });
  describe('listFinancialEvents', () => {
    it('should successfully call listFinancialEventsWithHttpInfo', async () => {
      await instructBackendMock("default", "listFinancialEvents", "200")
      const params = [
      ];
      const response = await instance.listFinancialEventsWithHttpInfo(...params);

      expect(response.response).to.have.property('statusCode');
      expect(response.response.statusCode).to.equal(200)
      assertValidResponsePayload(200, response.data.payload);
    });
  });
  describe('listFinancialEventsByGroupId', () => {
    it('should successfully call listFinancialEventsByGroupIdWithHttpInfo', async () => {
      await instructBackendMock("default", "listFinancialEventsByGroupId", "200")
      const params = [
        generateMockData('String'),
      ];
      const response = await instance.listFinancialEventsByGroupIdWithHttpInfo(...params);

      expect(response.response).to.have.property('statusCode');
      expect(response.response.statusCode).to.equal(200)
      assertValidResponsePayload(200, response.data.payload);
    });
  });
  describe('listFinancialEventsByOrderId', () => {
    it('should successfully call listFinancialEventsByOrderIdWithHttpInfo', async () => {
      await instructBackendMock("default", "listFinancialEventsByOrderId", "200")
      const params = [
        generateMockData('String'),
      ];
      const response = await instance.listFinancialEventsByOrderIdWithHttpInfo(...params);

      expect(response.response).to.have.property('statusCode');
      expect(response.response.statusCode).to.equal(200)
      assertValidResponsePayload(200, response.data.payload);
    });
  });

  describe('constructor', () => {
    it('should use default ApiClient when none provided', () => {
      const defaultInstance = new SellingPartnerApiForFinances.DefaultApi();
      expect(defaultInstance.apiClient).to.equal(SellingPartnerApiForFinances.ApiClient.instance);
    });

    it('should use provided ApiClient', () => {
      const customClient = new SellingPartnerApiForFinances.ApiClient();
      const customInstance = new SellingPartnerApiForFinances.DefaultApi(customClient);
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
        const ModelClass = SellingPartnerApiForFinances[dataType];
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
