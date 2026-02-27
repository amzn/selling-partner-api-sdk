import expect from 'expect.js';
import { join } from 'path';

const modulePath = join(process.cwd(), 'src', 'appintegrations_v2024_04_01', 'index.js');
const TheSellingPartnerApiForThirdPartyApplicationIntegrations = await import(modulePath);

describe('AppIntegrationsApi', () => {
  let instance;
  const testEndpoint = 'https://localhost:3000';
  const testAccessToken = "testAccessToken";

  beforeEach(() => {
    const apiClientInstance = new TheSellingPartnerApiForThirdPartyApplicationIntegrations.ApiClient(testEndpoint);
    apiClientInstance.applyXAmzAccessTokenToRequest(testAccessToken);
    instance = new TheSellingPartnerApiForThirdPartyApplicationIntegrations.AppIntegrationsApi(apiClientInstance);
  });

  describe('createNotification', () => {
    it('should successfully call createNotificationWithHttpInfo', async () => {
      instructBackendMock("appIntegrations", "createNotification", "200")
      const params = [
        generateMockData('CreateNotificationRequest')
      ];
      const response = await instance.createNotificationWithHttpInfo(...params);

      expect(response).to.have.property('statusCode');
      expect(response.statusCode).to.equal()
      expect(response).to.have.property('data');
    });
  });
  describe('deleteNotifications', () => {
    it('should successfully call deleteNotificationsWithHttpInfo', async () => {
      instructBackendMock("appIntegrations", "deleteNotifications", "204")
      const params = [
        generateMockData('DeleteNotificationsRequest')
      ];
      const response = await instance.deleteNotificationsWithHttpInfo(...params);

      expect(response).to.have.property('statusCode');
      expect(response.statusCode).to.equal()
    });
  });
  describe('recordActionFeedback', () => {
    it('should successfully call recordActionFeedbackWithHttpInfo', async () => {
      instructBackendMock("appIntegrations", "recordActionFeedback", "204")
      const params = [
        generateMockData('String'),
        generateMockData('RecordActionFeedbackRequest')
      ];
      const response = await instance.recordActionFeedbackWithHttpInfo(...params);

      expect(response).to.have.property('statusCode');
      expect(response.statusCode).to.equal()
    });
  });

  describe('constructor', () => {
    it('should use default ApiClient when none provided', () => {
      const defaultInstance = new TheSellingPartnerApiForThirdPartyApplicationIntegrations.AppIntegrationsApi();
      expect(defaultInstance.apiClient).to.equal(TheSellingPartnerApiForThirdPartyApplicationIntegrations.ApiClient.instance);
    });

    it('should use provided ApiClient', () => {
      const customClient = new TheSellingPartnerApiForThirdPartyApplicationIntegrations.ApiClient();
      const customInstance = new TheSellingPartnerApiForThirdPartyApplicationIntegrations.AppIntegrationsApi(customClient);
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
        const ModelClass = TheSellingPartnerApiForThirdPartyApplicationIntegrations[dataType];
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
