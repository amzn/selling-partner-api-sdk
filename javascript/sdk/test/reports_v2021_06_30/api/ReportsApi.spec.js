import expect from 'expect.js';
import { join } from 'path';

const modulePath = join(process.cwd(), 'src', 'reports_v2021_06_30', 'index.js');
const SellingPartnerApiForReports = await import(modulePath);

describe('ReportsApi', () => {
  let instance;
  const testEndpoint = 'https://localhost:3000';
  const testAccessToken = "testAccessToken";

  beforeEach(() => {
    const apiClientInstance = new SellingPartnerApiForReports.ApiClient(testEndpoint);
    apiClientInstance.applyXAmzAccessTokenToRequest(testAccessToken);
    instance = new SellingPartnerApiForReports.ReportsApi(apiClientInstance);
  });

  describe('cancelReport', () => {
    it('should successfully call cancelReportWithHttpInfo', async () => {
      instructBackendMock("reports", "cancelReport", "200")
      const params = [
        generateMockData('String')
      ];
      const response = await instance.cancelReportWithHttpInfo(...params);

      expect(response).to.have.property('statusCode');
      expect(response.statusCode).to.equal()
    });
  });
  describe('cancelReportSchedule', () => {
    it('should successfully call cancelReportScheduleWithHttpInfo', async () => {
      instructBackendMock("reports", "cancelReportSchedule", "200")
      const params = [
        generateMockData('String')
      ];
      const response = await instance.cancelReportScheduleWithHttpInfo(...params);

      expect(response).to.have.property('statusCode');
      expect(response.statusCode).to.equal()
    });
  });
  describe('createReport', () => {
    it('should successfully call createReportWithHttpInfo', async () => {
      instructBackendMock("reports", "createReport", "202")
      const params = [
        generateMockData('CreateReportSpecification')
      ];
      const response = await instance.createReportWithHttpInfo(...params);

      expect(response).to.have.property('statusCode');
      expect(response.statusCode).to.equal()
      expect(response).to.have.property('data');
    });
  });
  describe('createReportSchedule', () => {
    it('should successfully call createReportScheduleWithHttpInfo', async () => {
      instructBackendMock("reports", "createReportSchedule", "201")
      const params = [
        generateMockData('CreateReportScheduleSpecification')
      ];
      const response = await instance.createReportScheduleWithHttpInfo(...params);

      expect(response).to.have.property('statusCode');
      expect(response.statusCode).to.equal()
      expect(response).to.have.property('data');
    });
  });
  describe('getReport', () => {
    it('should successfully call getReportWithHttpInfo', async () => {
      instructBackendMock("reports", "getReport", "200")
      const params = [
        generateMockData('String')
      ];
      const response = await instance.getReportWithHttpInfo(...params);

      expect(response).to.have.property('statusCode');
      expect(response.statusCode).to.equal()
      expect(response).to.have.property('data');
    });
  });
  describe('getReportDocument', () => {
    it('should successfully call getReportDocumentWithHttpInfo', async () => {
      instructBackendMock("reports", "getReportDocument", "200")
      const params = [
        generateMockData('String')
      ];
      const response = await instance.getReportDocumentWithHttpInfo(...params);

      expect(response).to.have.property('statusCode');
      expect(response.statusCode).to.equal()
      expect(response).to.have.property('data');
    });
  });
  describe('getReportSchedule', () => {
    it('should successfully call getReportScheduleWithHttpInfo', async () => {
      instructBackendMock("reports", "getReportSchedule", "200")
      const params = [
        generateMockData('String')
      ];
      const response = await instance.getReportScheduleWithHttpInfo(...params);

      expect(response).to.have.property('statusCode');
      expect(response.statusCode).to.equal()
      expect(response).to.have.property('data');
    });
  });
  describe('getReportSchedules', () => {
    it('should successfully call getReportSchedulesWithHttpInfo', async () => {
      instructBackendMock("reports", "getReportSchedules", "200")
      const params = [
        generateMockData('String', true)
      ];
      const response = await instance.getReportSchedulesWithHttpInfo(...params);

      expect(response).to.have.property('statusCode');
      expect(response.statusCode).to.equal()
      expect(response).to.have.property('data');
    });
  });
  describe('getReports', () => {
    it('should successfully call getReportsWithHttpInfo', async () => {
      instructBackendMock("reports", "getReports", "200")
      const params = [
      ];
      const response = await instance.getReportsWithHttpInfo(...params);

      expect(response).to.have.property('statusCode');
      expect(response.statusCode).to.equal()
      expect(response).to.have.property('data');
    });
  });

  describe('constructor', () => {
    it('should use default ApiClient when none provided', () => {
      const defaultInstance = new SellingPartnerApiForReports.ReportsApi();
      expect(defaultInstance.apiClient).to.equal(SellingPartnerApiForReports.ApiClient.instance);
    });

    it('should use provided ApiClient', () => {
      const customClient = new SellingPartnerApiForReports.ApiClient();
      const customInstance = new SellingPartnerApiForReports.ReportsApi(customClient);
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
        const ModelClass = SellingPartnerApiForReports[dataType];
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
