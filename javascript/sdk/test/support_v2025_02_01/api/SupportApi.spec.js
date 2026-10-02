import expect from 'expect.js';
import { join } from 'path';

const modulePath = join(process.cwd(), 'src', 'support_v2025_02_01', 'index.js');
const TheSellingPartnerApiForSupport = await import(modulePath);
const endpoint = 'http://localhost:3000';

describe('SupportApi', () => {
  let instance;

  beforeEach(() => {
    const apiClientInstance = new TheSellingPartnerApiForSupport.ApiClient(endpoint);
    apiClientInstance.applyXAmzAccessTokenToRequest("testAccessToken");
    instance = new TheSellingPartnerApiForSupport.SupportApi(apiClientInstance);
  });

  describe('getCase', () => {
    it('should successfully call getCaseWithHttpInfo', async () => {
      await instructBackendMock("support", "getCase", "200")
      const params = [
        generateMockData('String')
      ];
      const response = await instance.getCaseWithHttpInfo(...params);

      expect(response.response).to.have.property('statusCode');
      expect(response.response.statusCode).to.equal(200)
      assertValidResponsePayload(200, response.data);
    });
  });
  describe('listCases', () => {
    it('should successfully call listCasesWithHttpInfo', async () => {
      await instructBackendMock("support", "listCases", "200")
      const params = [
        generateMockData('ListCasesRequest')
      ];
      const response = await instance.listCasesWithHttpInfo(...params);

      expect(response.response).to.have.property('statusCode');
      expect(response.response.statusCode).to.equal(200)
      assertValidResponsePayload(200, response.data);
    });
  });
  describe('listContacts', () => {
    it('should successfully call listContactsWithHttpInfo', async () => {
      await instructBackendMock("support", "listContacts", "200")
      const params = [
        generateMockData('String'),
      ];
      const response = await instance.listContactsWithHttpInfo(...params);

      expect(response.response).to.have.property('statusCode');
      expect(response.response.statusCode).to.equal(200)
      assertValidResponsePayload(200, response.data);
    });
  });

  describe('constructor', () => {
    it('should use default ApiClient when none provided', () => {
      const defaultInstance = new TheSellingPartnerApiForSupport.SupportApi();
      expect(defaultInstance.apiClient).to.equal(TheSellingPartnerApiForSupport.ApiClient.instance);
    });

    it('should use provided ApiClient', () => {
      const customClient = new TheSellingPartnerApiForSupport.ApiClient();
      const customInstance = new TheSellingPartnerApiForSupport.SupportApi(customClient);
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
        const ModelClass = TheSellingPartnerApiForSupport[dataType];
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
