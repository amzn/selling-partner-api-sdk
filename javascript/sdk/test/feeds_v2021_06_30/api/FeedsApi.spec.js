import expect from 'expect.js';
import { join } from 'path';

const modulePath = join(process.cwd(), 'src', 'feeds_v2021_06_30', 'index.js');
const SellingPartnerApiForFeeds = await import(modulePath);
const endpoint = 'http://localhost:3000';

describe('FeedsApi', () => {
  let instance;

  beforeEach(() => {
    const apiClientInstance = new SellingPartnerApiForFeeds.ApiClient(endpoint);
    apiClientInstance.applyXAmzAccessTokenToRequest("testAccessToken");
    instance = new SellingPartnerApiForFeeds.FeedsApi(apiClientInstance);
  });

  describe('cancelFeed', () => {
    it('should successfully call cancelFeedWithHttpInfo', async () => {
      await instructBackendMock("feeds", "cancelFeed", "200")
      const params = [
        generateMockData('String')
      ];
      const response = await instance.cancelFeedWithHttpInfo(...params);

      expect(response.response).to.have.property('statusCode');
      expect(response.response.statusCode).to.equal(200)
    });
  });
  describe('createFeed', () => {
    it('should successfully call createFeedWithHttpInfo', async () => {
      await instructBackendMock("feeds", "createFeed", "202")
      const params = [
        generateMockData('CreateFeedSpecification')
      ];
      const response = await instance.createFeedWithHttpInfo(...params);

      expect(response.response).to.have.property('statusCode');
      expect(response.response.statusCode).to.equal(202)
      assertValidResponsePayload(202, response.data);
    });
  });
  describe('createFeedDocument', () => {
    it('should successfully call createFeedDocumentWithHttpInfo', async () => {
      await instructBackendMock("feeds", "createFeedDocument", "201")
      const params = [
        generateMockData('CreateFeedDocumentSpecification')
      ];
      const response = await instance.createFeedDocumentWithHttpInfo(...params);

      expect(response.response).to.have.property('statusCode');
      expect(response.response.statusCode).to.equal(201)
      assertValidResponsePayload(201, response.data);
    });
  });
  describe('getFeed', () => {
    it('should successfully call getFeedWithHttpInfo', async () => {
      await instructBackendMock("feeds", "getFeed", "200")
      const params = [
        generateMockData('String')
      ];
      const response = await instance.getFeedWithHttpInfo(...params);

      expect(response.response).to.have.property('statusCode');
      expect(response.response.statusCode).to.equal(200)
      assertValidResponsePayload(200, response.data);
    });
  });
  describe('getFeedDocument', () => {
    it('should successfully call getFeedDocumentWithHttpInfo', async () => {
      await instructBackendMock("feeds", "getFeedDocument", "200")
      const params = [
        generateMockData('String')
      ];
      const response = await instance.getFeedDocumentWithHttpInfo(...params);

      expect(response.response).to.have.property('statusCode');
      expect(response.response.statusCode).to.equal(200)
      assertValidResponsePayload(200, response.data);
    });
  });
  describe('getFeeds', () => {
    it('should successfully call getFeedsWithHttpInfo', async () => {
      await instructBackendMock("feeds", "getFeeds", "200")
      const params = [
      ];
      const response = await instance.getFeedsWithHttpInfo(...params);

      expect(response.response).to.have.property('statusCode');
      expect(response.response.statusCode).to.equal(200)
      assertValidResponsePayload(200, response.data);
    });
  });

  describe('constructor', () => {
    it('should use default ApiClient when none provided', () => {
      const defaultInstance = new SellingPartnerApiForFeeds.FeedsApi();
      expect(defaultInstance.apiClient).to.equal(SellingPartnerApiForFeeds.ApiClient.instance);
    });

    it('should use provided ApiClient', () => {
      const customClient = new SellingPartnerApiForFeeds.ApiClient();
      const customInstance = new SellingPartnerApiForFeeds.FeedsApi(customClient);
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
        const ModelClass = SellingPartnerApiForFeeds[dataType];
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
