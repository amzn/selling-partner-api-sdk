/**
 * Selling Partner API for A+ Content Management
 * Use the A+ Content API to build applications that help selling partners add rich marketing content to their Amazon product detail pages. Selling partners can use A+ content to share their brand and product story, which helps buyers make informed purchasing decisions. Selling partners use content modules to add images and text.
 *
 * The version of the OpenAPI document: 2020-11-01
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import expect from 'expect.js';
import sinon from 'sinon';
import { join } from 'path';

const modulePath = join(process.cwd(), 'src', 'apluscontent_v2020_11_01', 'index.js');
const SellingPartnerApiForAContentManagement = await import(modulePath);

let instance;
let sandbox;
const testEndpoint = 'https://localhost:3000';
const testAccessToken = "testAccessToken";

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

// Generate mock requests and responses for each operation
const mockcreateContentDocumentData = {
  request: {
    'marketplaceId': generateMockData('String'),
    'postContentDocumentRequest': generateMockData('PostContentDocumentRequest')
  },
  response: {
    data: generateMockData('PostContentDocumentResponse'),
    statusCode: 200,
    headers: {}
  }
};
const mockgetContentDocumentData = {
  request: {
    'contentReferenceKey': generateMockData('String'),
    'marketplaceId': generateMockData('String'),
    'includedDataSet': generateMockData('String', true)
  },
  response: {
    data: generateMockData('GetContentDocumentResponse'),
    statusCode: 200,
    headers: {}
  }
};
const mocklistContentDocumentAsinRelationsData = {
  request: {
    'contentReferenceKey': generateMockData('String'),
    'marketplaceId': generateMockData('String'),
  },
  response: {
    data: generateMockData('ListContentDocumentAsinRelationsResponse'),
    statusCode: 200,
    headers: {}
  }
};
const mockpostContentDocumentApprovalSubmissionData = {
  request: {
    'contentReferenceKey': generateMockData('String'),
    'marketplaceId': generateMockData('String')
  },
  response: {
    data: generateMockData('PostContentDocumentApprovalSubmissionResponse'),
    statusCode: 200,
    headers: {}
  }
};
const mockpostContentDocumentAsinRelationsData = {
  request: {
    'contentReferenceKey': generateMockData('String'),
    'marketplaceId': generateMockData('String'),
    'postContentDocumentAsinRelationsRequest': generateMockData('PostContentDocumentAsinRelationsRequest')
  },
  response: {
    data: generateMockData('PostContentDocumentAsinRelationsResponse'),
    statusCode: 200,
    headers: {}
  }
};
const mockpostContentDocumentSuspendSubmissionData = {
  request: {
    'contentReferenceKey': generateMockData('String'),
    'marketplaceId': generateMockData('String')
  },
  response: {
    data: generateMockData('PostContentDocumentSuspendSubmissionResponse'),
    statusCode: 200,
    headers: {}
  }
};
const mocksearchContentDocumentsData = {
  request: {
    'marketplaceId': generateMockData('String'),
  },
  response: {
    data: generateMockData('SearchContentDocumentsResponse'),
    statusCode: 200,
    headers: {}
  }
};
const mocksearchContentPublishRecordsData = {
  request: {
    'marketplaceId': generateMockData('String'),
    'asin': generateMockData('String'),
  },
  response: {
    data: generateMockData('SearchContentPublishRecordsResponse'),
    statusCode: 200,
    headers: {}
  }
};
const mockupdateContentDocumentData = {
  request: {
    'contentReferenceKey': generateMockData('String'),
    'marketplaceId': generateMockData('String'),
    'postContentDocumentRequest': generateMockData('PostContentDocumentRequest')
  },
  response: {
    data: generateMockData('PostContentDocumentResponse'),
    statusCode: 200,
    headers: {}
  }
};
const mockvalidateContentDocumentAsinRelationsData = {
  request: {
    'marketplaceId': generateMockData('String'),
    'postContentDocumentRequest': generateMockData('PostContentDocumentRequest'),
  },
  response: {
    data: generateMockData('ValidateContentDocumentAsinRelationsResponse'),
    statusCode: 200,
    headers: {}
  }
};

describe('AplusContentApi', () => {
  beforeEach(() => {
    sandbox = sinon.createSandbox();
    const apiClientInstance = new SellingPartnerApiForAContentManagement.ApiClient(testEndpoint);
    apiClientInstance.applyXAmzAccessTokenToRequest(testAccessToken);
    sandbox.stub(apiClientInstance, 'callApi');
    instance = new SellingPartnerApiForAContentManagement.AplusContentApi(apiClientInstance);
  });

  afterEach(() => {
    sandbox.restore();
  });

  describe('createContentDocument', () => {
    it('should successfully call createContentDocument', async () => {
      instance.apiClient.callApi.resolves(mockcreateContentDocumentData.response);

      const params = [
        mockcreateContentDocumentData.request['marketplaceId'],
        mockcreateContentDocumentData.request['postContentDocumentRequest']
      ];
      const data = await instance.createContentDocument(...params);

      expect(data instanceof SellingPartnerApiForAContentManagement.PostContentDocumentResponse).to.be.true;
      expect(data).to.equal(mockcreateContentDocumentData.response.data);
    });

    it('should successfully call createContentDocumentWithHttpInfo', async () => {
      instance.apiClient.callApi.resolves(mockcreateContentDocumentData.response);

      const params = [
        mockcreateContentDocumentData.request['marketplaceId'],
        mockcreateContentDocumentData.request['postContentDocumentRequest']
      ];
      const response = await instance.createContentDocumentWithHttpInfo(...params);

      expect(response).to.have.property('statusCode');
      expect(response.statusCode).to.equal(mockcreateContentDocumentData.response.statusCode)
      expect(response).to.have.property('headers');
      expect(response).to.have.property('data');
      expect(response.data).to.equal(mockcreateContentDocumentData.response.data)
    });

    it('should handle API errors', async () => {
      const errorResponse = {
        errors: new Error('Expected error to be thrown'),
        statusCode: 400,
        headers: {}
      };
      instance.apiClient.callApi.rejects(errorResponse);

      try {
        const params = [
          mockcreateContentDocumentData.request['marketplaceId'],
          mockcreateContentDocumentData.request['postContentDocumentRequest']
        ];
        await instance.createContentDocument(...params);
        throw new Error('Expected error to be thrown');
      } catch (error) {
        expect(error).to.exist;
        expect(error.statusCode).to.equal(400);
      }
    });
  });
  describe('getContentDocument', () => {
    it('should successfully call getContentDocument', async () => {
      instance.apiClient.callApi.resolves(mockgetContentDocumentData.response);

      const params = [
        mockgetContentDocumentData.request['contentReferenceKey'],
        mockgetContentDocumentData.request['marketplaceId'],
        mockgetContentDocumentData.request['includedDataSet']
      ];
      const data = await instance.getContentDocument(...params);

      expect(data instanceof SellingPartnerApiForAContentManagement.GetContentDocumentResponse).to.be.true;
      expect(data).to.equal(mockgetContentDocumentData.response.data);
    });

    it('should successfully call getContentDocumentWithHttpInfo', async () => {
      instance.apiClient.callApi.resolves(mockgetContentDocumentData.response);

      const params = [
        mockgetContentDocumentData.request['contentReferenceKey'],
        mockgetContentDocumentData.request['marketplaceId'],
        mockgetContentDocumentData.request['includedDataSet']
      ];
      const response = await instance.getContentDocumentWithHttpInfo(...params);

      expect(response).to.have.property('statusCode');
      expect(response.statusCode).to.equal(mockgetContentDocumentData.response.statusCode)
      expect(response).to.have.property('headers');
      expect(response).to.have.property('data');
      expect(response.data).to.equal(mockgetContentDocumentData.response.data)
    });

    it('should handle API errors', async () => {
      const errorResponse = {
        errors: new Error('Expected error to be thrown'),
        statusCode: 400,
        headers: {}
      };
      instance.apiClient.callApi.rejects(errorResponse);

      try {
        const params = [
          mockgetContentDocumentData.request['contentReferenceKey'],
          mockgetContentDocumentData.request['marketplaceId'],
          mockgetContentDocumentData.request['includedDataSet']
        ];
        await instance.getContentDocument(...params);
        throw new Error('Expected error to be thrown');
      } catch (error) {
        expect(error).to.exist;
        expect(error.statusCode).to.equal(400);
      }
    });
  });
  describe('listContentDocumentAsinRelations', () => {
    it('should successfully call listContentDocumentAsinRelations', async () => {
      instance.apiClient.callApi.resolves(mocklistContentDocumentAsinRelationsData.response);

      const params = [
        mocklistContentDocumentAsinRelationsData.request['contentReferenceKey'],
        mocklistContentDocumentAsinRelationsData.request['marketplaceId'],
      ];
      const data = await instance.listContentDocumentAsinRelations(...params);

      expect(data instanceof SellingPartnerApiForAContentManagement.ListContentDocumentAsinRelationsResponse).to.be.true;
      expect(data).to.equal(mocklistContentDocumentAsinRelationsData.response.data);
    });

    it('should successfully call listContentDocumentAsinRelationsWithHttpInfo', async () => {
      instance.apiClient.callApi.resolves(mocklistContentDocumentAsinRelationsData.response);

      const params = [
        mocklistContentDocumentAsinRelationsData.request['contentReferenceKey'],
        mocklistContentDocumentAsinRelationsData.request['marketplaceId'],
      ];
      const response = await instance.listContentDocumentAsinRelationsWithHttpInfo(...params);

      expect(response).to.have.property('statusCode');
      expect(response.statusCode).to.equal(mocklistContentDocumentAsinRelationsData.response.statusCode)
      expect(response).to.have.property('headers');
      expect(response).to.have.property('data');
      expect(response.data).to.equal(mocklistContentDocumentAsinRelationsData.response.data)
    });

    it('should handle API errors', async () => {
      const errorResponse = {
        errors: new Error('Expected error to be thrown'),
        statusCode: 400,
        headers: {}
      };
      instance.apiClient.callApi.rejects(errorResponse);

      try {
        const params = [
          mocklistContentDocumentAsinRelationsData.request['contentReferenceKey'],
          mocklistContentDocumentAsinRelationsData.request['marketplaceId'],
        ];
        await instance.listContentDocumentAsinRelations(...params);
        throw new Error('Expected error to be thrown');
      } catch (error) {
        expect(error).to.exist;
        expect(error.statusCode).to.equal(400);
      }
    });
  });
  describe('postContentDocumentApprovalSubmission', () => {
    it('should successfully call postContentDocumentApprovalSubmission', async () => {
      instance.apiClient.callApi.resolves(mockpostContentDocumentApprovalSubmissionData.response);

      const params = [
        mockpostContentDocumentApprovalSubmissionData.request['contentReferenceKey'],
        mockpostContentDocumentApprovalSubmissionData.request['marketplaceId']
      ];
      const data = await instance.postContentDocumentApprovalSubmission(...params);

      expect(data instanceof SellingPartnerApiForAContentManagement.PostContentDocumentApprovalSubmissionResponse).to.be.true;
      expect(data).to.equal(mockpostContentDocumentApprovalSubmissionData.response.data);
    });

    it('should successfully call postContentDocumentApprovalSubmissionWithHttpInfo', async () => {
      instance.apiClient.callApi.resolves(mockpostContentDocumentApprovalSubmissionData.response);

      const params = [
        mockpostContentDocumentApprovalSubmissionData.request['contentReferenceKey'],
        mockpostContentDocumentApprovalSubmissionData.request['marketplaceId']
      ];
      const response = await instance.postContentDocumentApprovalSubmissionWithHttpInfo(...params);

      expect(response).to.have.property('statusCode');
      expect(response.statusCode).to.equal(mockpostContentDocumentApprovalSubmissionData.response.statusCode)
      expect(response).to.have.property('headers');
      expect(response).to.have.property('data');
      expect(response.data).to.equal(mockpostContentDocumentApprovalSubmissionData.response.data)
    });

    it('should handle API errors', async () => {
      const errorResponse = {
        errors: new Error('Expected error to be thrown'),
        statusCode: 400,
        headers: {}
      };
      instance.apiClient.callApi.rejects(errorResponse);

      try {
        const params = [
          mockpostContentDocumentApprovalSubmissionData.request['contentReferenceKey'],
          mockpostContentDocumentApprovalSubmissionData.request['marketplaceId']
        ];
        await instance.postContentDocumentApprovalSubmission(...params);
        throw new Error('Expected error to be thrown');
      } catch (error) {
        expect(error).to.exist;
        expect(error.statusCode).to.equal(400);
      }
    });
  });
  describe('postContentDocumentAsinRelations', () => {
    it('should successfully call postContentDocumentAsinRelations', async () => {
      instance.apiClient.callApi.resolves(mockpostContentDocumentAsinRelationsData.response);

      const params = [
        mockpostContentDocumentAsinRelationsData.request['contentReferenceKey'],
        mockpostContentDocumentAsinRelationsData.request['marketplaceId'],
        mockpostContentDocumentAsinRelationsData.request['postContentDocumentAsinRelationsRequest']
      ];
      const data = await instance.postContentDocumentAsinRelations(...params);

      expect(data instanceof SellingPartnerApiForAContentManagement.PostContentDocumentAsinRelationsResponse).to.be.true;
      expect(data).to.equal(mockpostContentDocumentAsinRelationsData.response.data);
    });

    it('should successfully call postContentDocumentAsinRelationsWithHttpInfo', async () => {
      instance.apiClient.callApi.resolves(mockpostContentDocumentAsinRelationsData.response);

      const params = [
        mockpostContentDocumentAsinRelationsData.request['contentReferenceKey'],
        mockpostContentDocumentAsinRelationsData.request['marketplaceId'],
        mockpostContentDocumentAsinRelationsData.request['postContentDocumentAsinRelationsRequest']
      ];
      const response = await instance.postContentDocumentAsinRelationsWithHttpInfo(...params);

      expect(response).to.have.property('statusCode');
      expect(response.statusCode).to.equal(mockpostContentDocumentAsinRelationsData.response.statusCode)
      expect(response).to.have.property('headers');
      expect(response).to.have.property('data');
      expect(response.data).to.equal(mockpostContentDocumentAsinRelationsData.response.data)
    });

    it('should handle API errors', async () => {
      const errorResponse = {
        errors: new Error('Expected error to be thrown'),
        statusCode: 400,
        headers: {}
      };
      instance.apiClient.callApi.rejects(errorResponse);

      try {
        const params = [
          mockpostContentDocumentAsinRelationsData.request['contentReferenceKey'],
          mockpostContentDocumentAsinRelationsData.request['marketplaceId'],
          mockpostContentDocumentAsinRelationsData.request['postContentDocumentAsinRelationsRequest']
        ];
        await instance.postContentDocumentAsinRelations(...params);
        throw new Error('Expected error to be thrown');
      } catch (error) {
        expect(error).to.exist;
        expect(error.statusCode).to.equal(400);
      }
    });
  });
  describe('postContentDocumentSuspendSubmission', () => {
    it('should successfully call postContentDocumentSuspendSubmission', async () => {
      instance.apiClient.callApi.resolves(mockpostContentDocumentSuspendSubmissionData.response);

      const params = [
        mockpostContentDocumentSuspendSubmissionData.request['contentReferenceKey'],
        mockpostContentDocumentSuspendSubmissionData.request['marketplaceId']
      ];
      const data = await instance.postContentDocumentSuspendSubmission(...params);

      expect(data instanceof SellingPartnerApiForAContentManagement.PostContentDocumentSuspendSubmissionResponse).to.be.true;
      expect(data).to.equal(mockpostContentDocumentSuspendSubmissionData.response.data);
    });

    it('should successfully call postContentDocumentSuspendSubmissionWithHttpInfo', async () => {
      instance.apiClient.callApi.resolves(mockpostContentDocumentSuspendSubmissionData.response);

      const params = [
        mockpostContentDocumentSuspendSubmissionData.request['contentReferenceKey'],
        mockpostContentDocumentSuspendSubmissionData.request['marketplaceId']
      ];
      const response = await instance.postContentDocumentSuspendSubmissionWithHttpInfo(...params);

      expect(response).to.have.property('statusCode');
      expect(response.statusCode).to.equal(mockpostContentDocumentSuspendSubmissionData.response.statusCode)
      expect(response).to.have.property('headers');
      expect(response).to.have.property('data');
      expect(response.data).to.equal(mockpostContentDocumentSuspendSubmissionData.response.data)
    });

    it('should handle API errors', async () => {
      const errorResponse = {
        errors: new Error('Expected error to be thrown'),
        statusCode: 400,
        headers: {}
      };
      instance.apiClient.callApi.rejects(errorResponse);

      try {
        const params = [
          mockpostContentDocumentSuspendSubmissionData.request['contentReferenceKey'],
          mockpostContentDocumentSuspendSubmissionData.request['marketplaceId']
        ];
        await instance.postContentDocumentSuspendSubmission(...params);
        throw new Error('Expected error to be thrown');
      } catch (error) {
        expect(error).to.exist;
        expect(error.statusCode).to.equal(400);
      }
    });
  });
  describe('searchContentDocuments', () => {
    it('should successfully call searchContentDocuments', async () => {
      instance.apiClient.callApi.resolves(mocksearchContentDocumentsData.response);

      const params = [
        mocksearchContentDocumentsData.request['marketplaceId'],
      ];
      const data = await instance.searchContentDocuments(...params);

      expect(data instanceof SellingPartnerApiForAContentManagement.SearchContentDocumentsResponse).to.be.true;
      expect(data).to.equal(mocksearchContentDocumentsData.response.data);
    });

    it('should successfully call searchContentDocumentsWithHttpInfo', async () => {
      instance.apiClient.callApi.resolves(mocksearchContentDocumentsData.response);

      const params = [
        mocksearchContentDocumentsData.request['marketplaceId'],
      ];
      const response = await instance.searchContentDocumentsWithHttpInfo(...params);

      expect(response).to.have.property('statusCode');
      expect(response.statusCode).to.equal(mocksearchContentDocumentsData.response.statusCode)
      expect(response).to.have.property('headers');
      expect(response).to.have.property('data');
      expect(response.data).to.equal(mocksearchContentDocumentsData.response.data)
    });

    it('should handle API errors', async () => {
      const errorResponse = {
        errors: new Error('Expected error to be thrown'),
        statusCode: 400,
        headers: {}
      };
      instance.apiClient.callApi.rejects(errorResponse);

      try {
        const params = [
          mocksearchContentDocumentsData.request['marketplaceId'],
        ];
        await instance.searchContentDocuments(...params);
        throw new Error('Expected error to be thrown');
      } catch (error) {
        expect(error).to.exist;
        expect(error.statusCode).to.equal(400);
      }
    });
  });
  describe('searchContentPublishRecords', () => {
    it('should successfully call searchContentPublishRecords', async () => {
      instance.apiClient.callApi.resolves(mocksearchContentPublishRecordsData.response);

      const params = [
        mocksearchContentPublishRecordsData.request['marketplaceId'],
        mocksearchContentPublishRecordsData.request['asin'],
      ];
      const data = await instance.searchContentPublishRecords(...params);

      expect(data instanceof SellingPartnerApiForAContentManagement.SearchContentPublishRecordsResponse).to.be.true;
      expect(data).to.equal(mocksearchContentPublishRecordsData.response.data);
    });

    it('should successfully call searchContentPublishRecordsWithHttpInfo', async () => {
      instance.apiClient.callApi.resolves(mocksearchContentPublishRecordsData.response);

      const params = [
        mocksearchContentPublishRecordsData.request['marketplaceId'],
        mocksearchContentPublishRecordsData.request['asin'],
      ];
      const response = await instance.searchContentPublishRecordsWithHttpInfo(...params);

      expect(response).to.have.property('statusCode');
      expect(response.statusCode).to.equal(mocksearchContentPublishRecordsData.response.statusCode)
      expect(response).to.have.property('headers');
      expect(response).to.have.property('data');
      expect(response.data).to.equal(mocksearchContentPublishRecordsData.response.data)
    });

    it('should handle API errors', async () => {
      const errorResponse = {
        errors: new Error('Expected error to be thrown'),
        statusCode: 400,
        headers: {}
      };
      instance.apiClient.callApi.rejects(errorResponse);

      try {
        const params = [
          mocksearchContentPublishRecordsData.request['marketplaceId'],
          mocksearchContentPublishRecordsData.request['asin'],
        ];
        await instance.searchContentPublishRecords(...params);
        throw new Error('Expected error to be thrown');
      } catch (error) {
        expect(error).to.exist;
        expect(error.statusCode).to.equal(400);
      }
    });
  });
  describe('updateContentDocument', () => {
    it('should successfully call updateContentDocument', async () => {
      instance.apiClient.callApi.resolves(mockupdateContentDocumentData.response);

      const params = [
        mockupdateContentDocumentData.request['contentReferenceKey'],
        mockupdateContentDocumentData.request['marketplaceId'],
        mockupdateContentDocumentData.request['postContentDocumentRequest']
      ];
      const data = await instance.updateContentDocument(...params);

      expect(data instanceof SellingPartnerApiForAContentManagement.PostContentDocumentResponse).to.be.true;
      expect(data).to.equal(mockupdateContentDocumentData.response.data);
    });

    it('should successfully call updateContentDocumentWithHttpInfo', async () => {
      instance.apiClient.callApi.resolves(mockupdateContentDocumentData.response);

      const params = [
        mockupdateContentDocumentData.request['contentReferenceKey'],
        mockupdateContentDocumentData.request['marketplaceId'],
        mockupdateContentDocumentData.request['postContentDocumentRequest']
      ];
      const response = await instance.updateContentDocumentWithHttpInfo(...params);

      expect(response).to.have.property('statusCode');
      expect(response.statusCode).to.equal(mockupdateContentDocumentData.response.statusCode)
      expect(response).to.have.property('headers');
      expect(response).to.have.property('data');
      expect(response.data).to.equal(mockupdateContentDocumentData.response.data)
    });

    it('should handle API errors', async () => {
      const errorResponse = {
        errors: new Error('Expected error to be thrown'),
        statusCode: 400,
        headers: {}
      };
      instance.apiClient.callApi.rejects(errorResponse);

      try {
        const params = [
          mockupdateContentDocumentData.request['contentReferenceKey'],
          mockupdateContentDocumentData.request['marketplaceId'],
          mockupdateContentDocumentData.request['postContentDocumentRequest']
        ];
        await instance.updateContentDocument(...params);
        throw new Error('Expected error to be thrown');
      } catch (error) {
        expect(error).to.exist;
        expect(error.statusCode).to.equal(400);
      }
    });
  });
  describe('validateContentDocumentAsinRelations', () => {
    it('should successfully call validateContentDocumentAsinRelations', async () => {
      instance.apiClient.callApi.resolves(mockvalidateContentDocumentAsinRelationsData.response);

      const params = [
        mockvalidateContentDocumentAsinRelationsData.request['marketplaceId'],
        mockvalidateContentDocumentAsinRelationsData.request['postContentDocumentRequest'],
      ];
      const data = await instance.validateContentDocumentAsinRelations(...params);

      expect(data instanceof SellingPartnerApiForAContentManagement.ValidateContentDocumentAsinRelationsResponse).to.be.true;
      expect(data).to.equal(mockvalidateContentDocumentAsinRelationsData.response.data);
    });

    it('should successfully call validateContentDocumentAsinRelationsWithHttpInfo', async () => {
      instance.apiClient.callApi.resolves(mockvalidateContentDocumentAsinRelationsData.response);

      const params = [
        mockvalidateContentDocumentAsinRelationsData.request['marketplaceId'],
        mockvalidateContentDocumentAsinRelationsData.request['postContentDocumentRequest'],
      ];
      const response = await instance.validateContentDocumentAsinRelationsWithHttpInfo(...params);

      expect(response).to.have.property('statusCode');
      expect(response.statusCode).to.equal(mockvalidateContentDocumentAsinRelationsData.response.statusCode)
      expect(response).to.have.property('headers');
      expect(response).to.have.property('data');
      expect(response.data).to.equal(mockvalidateContentDocumentAsinRelationsData.response.data)
    });

    it('should handle API errors', async () => {
      const errorResponse = {
        errors: new Error('Expected error to be thrown'),
        statusCode: 400,
        headers: {}
      };
      instance.apiClient.callApi.rejects(errorResponse);

      try {
        const params = [
          mockvalidateContentDocumentAsinRelationsData.request['marketplaceId'],
          mockvalidateContentDocumentAsinRelationsData.request['postContentDocumentRequest'],
        ];
        await instance.validateContentDocumentAsinRelations(...params);
        throw new Error('Expected error to be thrown');
      } catch (error) {
        expect(error).to.exist;
        expect(error.statusCode).to.equal(400);
      }
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
