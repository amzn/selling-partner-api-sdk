import expect from 'expect.js';
import { join } from 'path';

const modulePath = join(process.cwd(), 'src', 'apluscontent_v2020_11_01', 'index.js');
const SellingPartnerApiForAContentManagement = await import(modulePath);

describe('AplusContentApi', () => {
  let instance;
  const testEndpoint = 'https://localhost:3000';
  const testAccessToken = "testAccessToken";

  beforeEach(() => {
    const apiClientInstance = new SellingPartnerApiForAContentManagement.ApiClient(testEndpoint);
    apiClientInstance.applyXAmzAccessTokenToRequest(testAccessToken);
    instance = new SellingPartnerApiForAContentManagement.AplusContentApi(apiClientInstance);
  });

  describe('createContentDocument', () => {
    it('should successfully call createContentDocumentWithHttpInfo', async () => {
      instructBackendMock("aplusContent", "createContentDocument", "200")
      const params = [
        generateMockData('String'),
        generateMockData('PostContentDocumentRequest')
      ];
      const response = await instance.createContentDocumentWithHttpInfo(...params);

      expect(response).to.have.property('statusCode');
      expect(response.statusCode).to.equal()
      expect(response).to.have.property('data');
    });
  });
  describe('getContentDocument', () => {
    it('should successfully call getContentDocumentWithHttpInfo', async () => {
      instructBackendMock("aplusContent", "getContentDocument", "200")
      const params = [
        generateMockData('String'),
        generateMockData('String'),
        generateMockData('String', true)
      ];
      const response = await instance.getContentDocumentWithHttpInfo(...params);

      expect(response).to.have.property('statusCode');
      expect(response.statusCode).to.equal()
      expect(response).to.have.property('data');
    });
  });
  describe('listContentDocumentAsinRelations', () => {
    it('should successfully call listContentDocumentAsinRelationsWithHttpInfo', async () => {
      instructBackendMock("aplusContent", "listContentDocumentAsinRelations", "200")
      const params = [
        generateMockData('String'),
        generateMockData('String'),
      ];
      const response = await instance.listContentDocumentAsinRelationsWithHttpInfo(...params);

      expect(response).to.have.property('statusCode');
      expect(response.statusCode).to.equal()
      expect(response).to.have.property('data');
    });
  });
  describe('postContentDocumentApprovalSubmission', () => {
    it('should successfully call postContentDocumentApprovalSubmissionWithHttpInfo', async () => {
      instructBackendMock("aplusContent", "postContentDocumentApprovalSubmission", "200")
      const params = [
        generateMockData('String'),
        generateMockData('String')
      ];
      const response = await instance.postContentDocumentApprovalSubmissionWithHttpInfo(...params);

      expect(response).to.have.property('statusCode');
      expect(response.statusCode).to.equal()
      expect(response).to.have.property('data');
    });
  });
  describe('postContentDocumentAsinRelations', () => {
    it('should successfully call postContentDocumentAsinRelationsWithHttpInfo', async () => {
      instructBackendMock("aplusContent", "postContentDocumentAsinRelations", "200")
      const params = [
        generateMockData('String'),
        generateMockData('String'),
        generateMockData('PostContentDocumentAsinRelationsRequest')
      ];
      const response = await instance.postContentDocumentAsinRelationsWithHttpInfo(...params);

      expect(response).to.have.property('statusCode');
      expect(response.statusCode).to.equal()
      expect(response).to.have.property('data');
    });
  });
  describe('postContentDocumentSuspendSubmission', () => {
    it('should successfully call postContentDocumentSuspendSubmissionWithHttpInfo', async () => {
      instructBackendMock("aplusContent", "postContentDocumentSuspendSubmission", "200")
      const params = [
        generateMockData('String'),
        generateMockData('String')
      ];
      const response = await instance.postContentDocumentSuspendSubmissionWithHttpInfo(...params);

      expect(response).to.have.property('statusCode');
      expect(response.statusCode).to.equal()
      expect(response).to.have.property('data');
    });
  });
  describe('searchContentDocuments', () => {
    it('should successfully call searchContentDocumentsWithHttpInfo', async () => {
      instructBackendMock("aplusContent", "searchContentDocuments", "200")
      const params = [
        generateMockData('String'),
      ];
      const response = await instance.searchContentDocumentsWithHttpInfo(...params);

      expect(response).to.have.property('statusCode');
      expect(response.statusCode).to.equal()
      expect(response).to.have.property('data');
    });
  });
  describe('searchContentPublishRecords', () => {
    it('should successfully call searchContentPublishRecordsWithHttpInfo', async () => {
      instructBackendMock("aplusContent", "searchContentPublishRecords", "200")
      const params = [
        generateMockData('String'),
        generateMockData('String'),
      ];
      const response = await instance.searchContentPublishRecordsWithHttpInfo(...params);

      expect(response).to.have.property('statusCode');
      expect(response.statusCode).to.equal()
      expect(response).to.have.property('data');
    });
  });
  describe('updateContentDocument', () => {
    it('should successfully call updateContentDocumentWithHttpInfo', async () => {
      instructBackendMock("aplusContent", "updateContentDocument", "200")
      const params = [
        generateMockData('String'),
        generateMockData('String'),
        generateMockData('PostContentDocumentRequest')
      ];
      const response = await instance.updateContentDocumentWithHttpInfo(...params);

      expect(response).to.have.property('statusCode');
      expect(response.statusCode).to.equal()
      expect(response).to.have.property('data');
    });
  });
  describe('validateContentDocumentAsinRelations', () => {
    it('should successfully call validateContentDocumentAsinRelationsWithHttpInfo', async () => {
      instructBackendMock("aplusContent", "validateContentDocumentAsinRelations", "200")
      const params = [
        generateMockData('String'),
        generateMockData('PostContentDocumentRequest'),
      ];
      const response = await instance.validateContentDocumentAsinRelationsWithHttpInfo(...params);

      expect(response).to.have.property('statusCode');
      expect(response.statusCode).to.equal()
      expect(response).to.have.property('data');
    });
  });

  describe('constructor', () => {
    it('should use default ApiClient when none provided', () => {
      const defaultInstance = new SellingPartnerApiForAContentManagement.AplusContentApi();
      expect(defaultInstance.apiClient).to.equal(SellingPartnerApiForAContentManagement.ApiClient.instance);
    });

    it('should use provided ApiClient', () => {
      const customClient = new SellingPartnerApiForAContentManagement.ApiClient();
      const customInstance = new SellingPartnerApiForAContentManagement.AplusContentApi(customClient);
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
        const ModelClass = SellingPartnerApiForAContentManagement[dataType];
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
