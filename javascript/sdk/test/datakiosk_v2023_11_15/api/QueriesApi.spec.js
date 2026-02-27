import expect from 'expect.js';
import { join } from 'path';

const modulePath = join(process.cwd(), 'src', 'datakiosk_v2023_11_15', 'index.js');
const SellingPartnerApiForDataKiosk = await import(modulePath);
const endpoint = 'https://localhost:3000';

describe('QueriesApi', () => {
  let instance;

  beforeEach(() => {
    const apiClientInstance = new SellingPartnerApiForDataKiosk.ApiClient(testEndpoint);
    apiClientInstance.applyXAmzAccessTokenToRequest("testAccessToken");
    instance = new SellingPartnerApiForDataKiosk.QueriesApi(apiClientInstance);
  });

  describe('cancelQuery', () => {
    it('should successfully call cancelQueryWithHttpInfo', async () => {
      await instructBackendMock("queries", "cancelQuery", "204")
      const params = [
        generateMockData('String')
      ];
      const response = await instance.cancelQueryWithHttpInfo(...params);

      expect(response).to.have.property('statusCode');
      expect(response.statusCode).to.equal()
    });
  });
  describe('createQuery', () => {
    it('should successfully call createQueryWithHttpInfo', async () => {
      await instructBackendMock("queries", "createQuery", "202")
      const params = [
        generateMockData('CreateQuerySpecification')
      ];
      const response = await instance.createQueryWithHttpInfo(...params);

      expect(response).to.have.property('statusCode');
      expect(response.statusCode).to.equal()
      expect(response).to.have.property('data');
    });
  });
  describe('getDocument', () => {
    it('should successfully call getDocumentWithHttpInfo', async () => {
      await instructBackendMock("queries", "getDocument", "200")
      const params = [
        generateMockData('String')
      ];
      const response = await instance.getDocumentWithHttpInfo(...params);

      expect(response).to.have.property('statusCode');
      expect(response.statusCode).to.equal()
      expect(response).to.have.property('data');
    });
  });
  describe('getQueries', () => {
    it('should successfully call getQueriesWithHttpInfo', async () => {
      await instructBackendMock("queries", "getQueries", "200")
      const params = [
      ];
      const response = await instance.getQueriesWithHttpInfo(...params);

      expect(response).to.have.property('statusCode');
      expect(response.statusCode).to.equal()
      expect(response).to.have.property('data');
    });
  });
  describe('getQuery', () => {
    it('should successfully call getQueryWithHttpInfo', async () => {
      await instructBackendMock("queries", "getQuery", "200")
      const params = [
        generateMockData('String')
      ];
      const response = await instance.getQueryWithHttpInfo(...params);

      expect(response).to.have.property('statusCode');
      expect(response.statusCode).to.equal()
      expect(response).to.have.property('data');
    });
  });

  describe('constructor', () => {
    it('should use default ApiClient when none provided', () => {
      const defaultInstance = new SellingPartnerApiForDataKiosk.QueriesApi();
      expect(defaultInstance.apiClient).to.equal(SellingPartnerApiForDataKiosk.ApiClient.instance);
    });

    it('should use provided ApiClient', () => {
      const customClient = new SellingPartnerApiForDataKiosk.ApiClient();
      const customInstance = new SellingPartnerApiForDataKiosk.QueriesApi(customClient);
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
        const ModelClass = SellingPartnerApiForDataKiosk[dataType];
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
