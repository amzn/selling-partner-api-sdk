import expect from 'expect.js';
import { join } from 'path';

const modulePath = join(process.cwd(), 'src', 'uploads_v2020_11_01', 'index.js');
const SellingPartnerApiForUploads = await import(modulePath);
const endpoint = 'http://localhost:3000';

describe('UploadsApi', () => {
  let instance;

  beforeEach(() => {
    const apiClientInstance = new SellingPartnerApiForUploads.ApiClient(endpoint);
    apiClientInstance.applyXAmzAccessTokenToRequest("testAccessToken");
    instance = new SellingPartnerApiForUploads.UploadsApi(apiClientInstance);
  });

  describe('createUploadDestinationForResource', () => {
    it('should successfully call createUploadDestinationForResourceWithHttpInfo', async () => {
      await instructBackendMock("uploads", "createUploadDestinationForResource", "201")
      const params = [
        generateMockData('String', true),
        generateMockData('String'),
        generateMockData('String'),
      ];
      const response = await instance.createUploadDestinationForResourceWithHttpInfo(...params);

      expect(response.response).to.have.property('statusCode');
      expect(response.response.statusCode).to.equal(201)
      assertValidResponsePayload(201, response.data.payload);
    });
  });

  describe('constructor', () => {
    it('should use default ApiClient when none provided', () => {
      const defaultInstance = new SellingPartnerApiForUploads.UploadsApi();
      expect(defaultInstance.apiClient).to.equal(SellingPartnerApiForUploads.ApiClient.instance);
    });

    it('should use provided ApiClient', () => {
      const customClient = new SellingPartnerApiForUploads.ApiClient();
      const customInstance = new SellingPartnerApiForUploads.UploadsApi(customClient);
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
        const ModelClass = SellingPartnerApiForUploads[dataType];
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
