import expect from 'expect.js';
import { join } from 'path';

const modulePath = join(process.cwd(), 'src', 'tokens_v2021_03_01', 'index.js');
const SellingPartnerApiForTokens = await import(modulePath);

describe('TokensApi', () => {
  let instance;
  const testEndpoint = 'https://localhost:3000';
  const testAccessToken = "testAccessToken";

  beforeEach(() => {
    const apiClientInstance = new SellingPartnerApiForTokens.ApiClient(testEndpoint);
    apiClientInstance.applyXAmzAccessTokenToRequest(testAccessToken);
    instance = new SellingPartnerApiForTokens.TokensApi(apiClientInstance);
  });

  describe('createRestrictedDataToken', () => {
    it('should successfully call createRestrictedDataTokenWithHttpInfo', async () => {
      instructBackendMock("tokens", "createRestrictedDataToken", "200")
      const params = [
        generateMockData('CreateRestrictedDataTokenRequest')
      ];
      const response = await instance.createRestrictedDataTokenWithHttpInfo(...params);

      expect(response).to.have.property('statusCode');
      expect(response.statusCode).to.equal()
      expect(response).to.have.property('data');
    });
  });

  describe('constructor', () => {
    it('should use default ApiClient when none provided', () => {
      const defaultInstance = new SellingPartnerApiForTokens.TokensApi();
      expect(defaultInstance.apiClient).to.equal(SellingPartnerApiForTokens.ApiClient.instance);
    });

    it('should use provided ApiClient', () => {
      const customClient = new SellingPartnerApiForTokens.ApiClient();
      const customInstance = new SellingPartnerApiForTokens.TokensApi(customClient);
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
        const ModelClass = SellingPartnerApiForTokens[dataType];
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
