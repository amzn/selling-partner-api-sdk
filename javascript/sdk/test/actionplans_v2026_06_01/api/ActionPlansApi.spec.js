import expect from 'expect.js';
import { join } from 'path';

const modulePath = join(process.cwd(), 'src', 'actionplans_v2026_06_01', 'index.js');
const TheSellingPartnerApiForActionPlans = await import(modulePath);
const endpoint = 'http://localhost:3000';

describe('ActionPlansApi', () => {
  let instance;

  beforeEach(() => {
    const apiClientInstance = new TheSellingPartnerApiForActionPlans.ApiClient(endpoint);
    apiClientInstance.applyXAmzAccessTokenToRequest("testAccessToken");
    instance = new TheSellingPartnerApiForActionPlans.ActionPlansApi(apiClientInstance);
  });

  describe('createActionPlan', () => {
    it('should successfully call createActionPlanWithHttpInfo', async () => {
      await instructBackendMock("actionPlans", "createActionPlan", "200")
      const params = [
        generateMockData('CreateActionPlanRequest'),
      ];
      const response = await instance.createActionPlanWithHttpInfo(...params);

      expect(response.response).to.have.property('statusCode');
      expect(response.response.statusCode).to.equal(200)
      assertValidResponsePayload(200, response.data);
    });
  });
  describe('getActionPlan', () => {
    it('should successfully call getActionPlanWithHttpInfo', async () => {
      await instructBackendMock("actionPlans", "getActionPlan", "200")
      const params = [
        generateMockData('String'),
      ];
      const response = await instance.getActionPlanWithHttpInfo(...params);

      expect(response.response).to.have.property('statusCode');
      expect(response.response.statusCode).to.equal(200)
      assertValidResponsePayload(200, response.data);
    });
  });
  describe('listActionPlans', () => {
    it('should successfully call listActionPlansWithHttpInfo', async () => {
      await instructBackendMock("actionPlans", "listActionPlans", "200")
      const params = [
      ];
      const response = await instance.listActionPlansWithHttpInfo(...params);

      expect(response.response).to.have.property('statusCode');
      expect(response.response.statusCode).to.equal(200)
      assertValidResponsePayload(200, response.data);
    });
  });

  describe('constructor', () => {
    it('should use default ApiClient when none provided', () => {
      const defaultInstance = new TheSellingPartnerApiForActionPlans.ActionPlansApi();
      expect(defaultInstance.apiClient).to.equal(TheSellingPartnerApiForActionPlans.ApiClient.instance);
    });

    it('should use provided ApiClient', () => {
      const customClient = new TheSellingPartnerApiForActionPlans.ApiClient();
      const customInstance = new TheSellingPartnerApiForActionPlans.ActionPlansApi(customClient);
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
        const ModelClass = TheSellingPartnerApiForActionPlans[dataType];
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
