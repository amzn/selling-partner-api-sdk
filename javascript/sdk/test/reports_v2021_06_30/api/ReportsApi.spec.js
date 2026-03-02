import expect from 'expect.js';
import { join } from 'path';

const modulePath = join(process.cwd(), 'src', 'reports_v2021_06_30', 'index.js');
const SellingPartnerApiForReports = await import(modulePath);
const endpoint = 'http://localhost:3000';

describe('ReportsApi', () => {
  let instance;

  beforeEach(() => {
    const apiClientInstance = new SellingPartnerApiForReports.ApiClient(endpoint);
    apiClientInstance.applyXAmzAccessTokenToRequest("testAccessToken");
    instance = new SellingPartnerApiForReports.ReportsApi(apiClientInstance);
  });

  describe('cancelReport', () => {
    it('should successfully call cancelReportWithHttpInfo', async () => {
      await instructBackendMock("reports", "cancelReport", "200")
      const params = [
        generateMockData('String')
      ];
      const response = await instance.cancelReportWithHttpInfo(...params);

      expect(response.response).to.have.property('statusCode');
      expect(response.response.statusCode).to.equal(200)
    });
  });
  describe('cancelReportSchedule', () => {
    it('should successfully call cancelReportScheduleWithHttpInfo', async () => {
      await instructBackendMock("reports", "cancelReportSchedule", "200")
      const params = [
        generateMockData('String')
      ];
      const response = await instance.cancelReportScheduleWithHttpInfo(...params);

      expect(response.response).to.have.property('statusCode');
      expect(response.response.statusCode).to.equal(200)
    });
  });
  describe('createReport', () => {
    it('should successfully call createReportWithHttpInfo', async () => {
      await instructBackendMock("reports", "createReport", "202")
      const params = [
        generateMockData('CreateReportSpecification')
      ];
      const response = await instance.createReportWithHttpInfo(...params);

      expect(response.response).to.have.property('statusCode');
      expect(response.response.statusCode).to.equal(202)
      assertValidResponsePayload(202, response.data.payload);
    });
  });
  describe('createReportSchedule', () => {
    it('should successfully call createReportScheduleWithHttpInfo', async () => {
      await instructBackendMock("reports", "createReportSchedule", "201")
      const params = [
        generateMockData('CreateReportScheduleSpecification')
      ];
      const response = await instance.createReportScheduleWithHttpInfo(...params);

      expect(response.response).to.have.property('statusCode');
      expect(response.response.statusCode).to.equal(201)
      assertValidResponsePayload(201, response.data.payload);
    });
  });
  describe('getReport', () => {
    it('should successfully call getReportWithHttpInfo', async () => {
      await instructBackendMock("reports", "getReport", "200")
      const params = [
        generateMockData('String')
      ];
      const response = await instance.getReportWithHttpInfo(...params);

      expect(response.response).to.have.property('statusCode');
      expect(response.response.statusCode).to.equal(200)
      assertValidResponsePayload(200, response.data.payload);
    });
  });
  describe('getReportDocument', () => {
    it('should successfully call getReportDocumentWithHttpInfo', async () => {
      await instructBackendMock("reports", "getReportDocument", "200")
      const params = [
        generateMockData('String')
      ];
      const response = await instance.getReportDocumentWithHttpInfo(...params);

      expect(response.response).to.have.property('statusCode');
      expect(response.response.statusCode).to.equal(200)
      assertValidResponsePayload(200, response.data.payload);
    });
  });
  describe('getReportSchedule', () => {
    it('should successfully call getReportScheduleWithHttpInfo', async () => {
      await instructBackendMock("reports", "getReportSchedule", "200")
      const params = [
        generateMockData('String')
      ];
      const response = await instance.getReportScheduleWithHttpInfo(...params);

      expect(response.response).to.have.property('statusCode');
      expect(response.response.statusCode).to.equal(200)
      assertValidResponsePayload(200, response.data.payload);
    });
  });
  describe('getReportSchedules', () => {
    it('should successfully call getReportSchedulesWithHttpInfo', async () => {
      await instructBackendMock("reports", "getReportSchedules", "200")
      const params = [
        generateMockData('String', true)
      ];
      const response = await instance.getReportSchedulesWithHttpInfo(...params);

      expect(response.response).to.have.property('statusCode');
      expect(response.response.statusCode).to.equal(200)
      assertValidResponsePayload(200, response.data.payload);
    });
  });
  describe('getReports', () => {
    it('should successfully call getReportsWithHttpInfo', async () => {
      await instructBackendMock("reports", "getReports", "200")
      const params = [
      ];
      const response = await instance.getReportsWithHttpInfo(...params);

      expect(response.response).to.have.property('statusCode');
      expect(response.response.statusCode).to.equal(200)
      assertValidResponsePayload(200, response.data.payload);
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
