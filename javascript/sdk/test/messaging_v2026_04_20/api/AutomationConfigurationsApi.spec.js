import expect from 'expect.js';
import { join } from 'path';

const modulePath = join(process.cwd(), 'src', 'messaging_v2026_04_20', 'index.js');
const TheSellingPartnerApiForMessagingAutomations = await import(modulePath);
const endpoint = 'http://localhost:3000';

describe('AutomationConfigurationsApi', () => {
  let instance;

  beforeEach(() => {
    const apiClientInstance = new TheSellingPartnerApiForMessagingAutomations.ApiClient(endpoint);
    apiClientInstance.applyXAmzAccessTokenToRequest("testAccessToken");
    instance = new TheSellingPartnerApiForMessagingAutomations.AutomationConfigurationsApi(apiClientInstance);
  });

  describe('createAutomationConfiguration', () => {
    it('should successfully call createAutomationConfigurationWithHttpInfo', async () => {
      await instructBackendMock("automationConfigurations", "createAutomationConfiguration", "200")
      const params = [
        generateMockData('String', true),
        generateMockData('CreateAutomationConfigRequest')
      ];
      const response = await instance.createAutomationConfigurationWithHttpInfo(...params);

      expect(response.response).to.have.property('statusCode');
      expect(response.response.statusCode).to.equal(200)
      assertValidResponsePayload(200, response.data);
    });
  });
  describe('getAutomationConfiguration', () => {
    it('should successfully call getAutomationConfigurationWithHttpInfo', async () => {
      await instructBackendMock("automationConfigurations", "getAutomationConfiguration", "200")
      const params = [
        generateMockData('String'),
        generateMockData('String', true)
      ];
      const response = await instance.getAutomationConfigurationWithHttpInfo(...params);

      expect(response.response).to.have.property('statusCode');
      expect(response.response.statusCode).to.equal(200)
      assertValidResponsePayload(200, response.data);
    });
  });
  describe('listAutomationConfigurations', () => {
    it('should successfully call listAutomationConfigurationsWithHttpInfo', async () => {
      await instructBackendMock("automationConfigurations", "listAutomationConfigurations", "200")
      const params = [
        generateMockData('String', true),
      ];
      const response = await instance.listAutomationConfigurationsWithHttpInfo(...params);

      expect(response.response).to.have.property('statusCode');
      expect(response.response.statusCode).to.equal(200)
      assertValidResponsePayload(200, response.data);
    });
  });
  describe('updateAutomationConfiguration', () => {
    it('should successfully call updateAutomationConfigurationWithHttpInfo', async () => {
      await instructBackendMock("automationConfigurations", "updateAutomationConfiguration", "200")
      const params = [
        generateMockData('String'),
        generateMockData('String', true),
        generateMockData('UpdateAutomationConfigRequest')
      ];
      const response = await instance.updateAutomationConfigurationWithHttpInfo(...params);

      expect(response.response).to.have.property('statusCode');
      expect(response.response.statusCode).to.equal(200)
      assertValidResponsePayload(200, response.data);
    });
  });

  describe('constructor', () => {
    it('should use default ApiClient when none provided', () => {
      const defaultInstance = new TheSellingPartnerApiForMessagingAutomations.AutomationConfigurationsApi();
      expect(defaultInstance.apiClient).to.equal(TheSellingPartnerApiForMessagingAutomations.ApiClient.instance);
    });

    it('should use provided ApiClient', () => {
      const customClient = new TheSellingPartnerApiForMessagingAutomations.ApiClient();
      const customInstance = new TheSellingPartnerApiForMessagingAutomations.AutomationConfigurationsApi(customClient);
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
        const ModelClass = TheSellingPartnerApiForMessagingAutomations[dataType];
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
