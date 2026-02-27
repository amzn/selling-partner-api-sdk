import expect from 'expect.js';
import { join } from 'path';

const modulePath = join(process.cwd(), 'src', 'applications_v2023_11_30', 'index.js');
const SellingPartnerApiForApplicationManagement = await import(modulePath);
const endpoint = 'http://localhost:3000';

describe('ApplicationsApi', () => {
  let instance;

  beforeEach(() => {
    const apiClientInstance = new SellingPartnerApiForApplicationManagement.ApiClient(endpoint);
    apiClientInstance.applyXAmzAccessTokenToRequest("testAccessToken");
    instance = new SellingPartnerApiForApplicationManagement.ApplicationsApi(apiClientInstance);
  });

  describe('rotateApplicationClientSecret', () => {
    it('should successfully call rotateApplicationClientSecretWithHttpInfo', async () => {
      await instructBackendMock("Applications", "rotateApplicationClientSecret", "204")
      const response = await instance.rotateApplicationClientSecretWithHttpInfo();

      expect(response).to.have.property('statusCode');
      expect(response.statusCode).to.equal()
    });
  });

  describe('constructor', () => {
    it('should use default ApiClient when none provided', () => {
      const defaultInstance = new SellingPartnerApiForApplicationManagement.ApplicationsApi();
      expect(defaultInstance.apiClient).to.equal(SellingPartnerApiForApplicationManagement.ApiClient.instance);
    });

    it('should use provided ApiClient', () => {
      const customClient = new SellingPartnerApiForApplicationManagement.ApiClient();
      const customInstance = new SellingPartnerApiForApplicationManagement.ApplicationsApi(customClient);
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
        const ModelClass = SellingPartnerApiForApplicationManagement[dataType];
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
