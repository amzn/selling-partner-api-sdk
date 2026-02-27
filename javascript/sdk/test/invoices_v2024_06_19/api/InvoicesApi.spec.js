import expect from 'expect.js';
import { join } from 'path';

const modulePath = join(process.cwd(), 'src', 'invoices_v2024_06_19', 'index.js');
const TheSellingPartnerApiForInvoices = await import(modulePath);

describe('InvoicesApi', () => {
  let instance;
  const testEndpoint = 'https://localhost:3000';
  const testAccessToken = "testAccessToken";

  beforeEach(() => {
    const apiClientInstance = new TheSellingPartnerApiForInvoices.ApiClient(testEndpoint);
    apiClientInstance.applyXAmzAccessTokenToRequest(testAccessToken);
    instance = new TheSellingPartnerApiForInvoices.InvoicesApi(apiClientInstance);
  });

  describe('createGovernmentInvoice', () => {
    it('should successfully call createGovernmentInvoiceWithHttpInfo', async () => {
      instructBackendMock("invoices", "createGovernmentInvoice", "204")
      const params = [
        generateMockData('GovernmentInvoiceRequest')
      ];
      const response = await instance.createGovernmentInvoiceWithHttpInfo(...params);

      expect(response).to.have.property('statusCode');
      expect(response.statusCode).to.equal()
    });
  });
  describe('createInvoicesExport', () => {
    it('should successfully call createInvoicesExportWithHttpInfo', async () => {
      instructBackendMock("invoices", "createInvoicesExport", "202")
      const params = [
        generateMockData('ExportInvoicesRequest')
      ];
      const response = await instance.createInvoicesExportWithHttpInfo(...params);

      expect(response).to.have.property('statusCode');
      expect(response.statusCode).to.equal()
      expect(response).to.have.property('data');
    });
  });
  describe('getGovernmentInvoiceDocument', () => {
    it('should successfully call getGovernmentInvoiceDocumentWithHttpInfo', async () => {
      instructBackendMock("invoices", "getGovernmentInvoiceDocument", "200")
      const params = [
        generateMockData('String'),
        generateMockData('String'),
        generateMockData('String'),
        generateMockData('String'),
      ];
      const response = await instance.getGovernmentInvoiceDocumentWithHttpInfo(...params);

      expect(response).to.have.property('statusCode');
      expect(response.statusCode).to.equal()
      expect(response).to.have.property('data');
    });
  });
  describe('getGovernmentInvoiceStatus', () => {
    it('should successfully call getGovernmentInvoiceStatusWithHttpInfo', async () => {
      instructBackendMock("invoices", "getGovernmentInvoiceStatus", "200")
      const params = [
        generateMockData('String'),
        generateMockData('String'),
        generateMockData('String'),
        generateMockData('String'),
      ];
      const response = await instance.getGovernmentInvoiceStatusWithHttpInfo(...params);

      expect(response).to.have.property('statusCode');
      expect(response.statusCode).to.equal()
      expect(response).to.have.property('data');
    });
  });
  describe('getInvoice', () => {
    it('should successfully call getInvoiceWithHttpInfo', async () => {
      instructBackendMock("invoices", "getInvoice", "200")
      const params = [
        generateMockData('String'),
        generateMockData('String')
      ];
      const response = await instance.getInvoiceWithHttpInfo(...params);

      expect(response).to.have.property('statusCode');
      expect(response.statusCode).to.equal()
      expect(response).to.have.property('data');
    });
  });
  describe('getInvoices', () => {
    it('should successfully call getInvoicesWithHttpInfo', async () => {
      instructBackendMock("invoices", "getInvoices", "200")
      const params = [
        generateMockData('String'),
      ];
      const response = await instance.getInvoicesWithHttpInfo(...params);

      expect(response).to.have.property('statusCode');
      expect(response.statusCode).to.equal()
      expect(response).to.have.property('data');
    });
  });
  describe('getInvoicesAttributes', () => {
    it('should successfully call getInvoicesAttributesWithHttpInfo', async () => {
      instructBackendMock("invoices", "getInvoicesAttributes", "200")
      const params = [
        generateMockData('String')
      ];
      const response = await instance.getInvoicesAttributesWithHttpInfo(...params);

      expect(response).to.have.property('statusCode');
      expect(response.statusCode).to.equal()
      expect(response).to.have.property('data');
    });
  });
  describe('getInvoicesDocument', () => {
    it('should successfully call getInvoicesDocumentWithHttpInfo', async () => {
      instructBackendMock("invoices", "getInvoicesDocument", "200")
      const params = [
        generateMockData('String')
      ];
      const response = await instance.getInvoicesDocumentWithHttpInfo(...params);

      expect(response).to.have.property('statusCode');
      expect(response.statusCode).to.equal()
      expect(response).to.have.property('data');
    });
  });
  describe('getInvoicesExport', () => {
    it('should successfully call getInvoicesExportWithHttpInfo', async () => {
      instructBackendMock("invoices", "getInvoicesExport", "200")
      const params = [
        generateMockData('String')
      ];
      const response = await instance.getInvoicesExportWithHttpInfo(...params);

      expect(response).to.have.property('statusCode');
      expect(response.statusCode).to.equal()
      expect(response).to.have.property('data');
    });
  });
  describe('getInvoicesExports', () => {
    it('should successfully call getInvoicesExportsWithHttpInfo', async () => {
      instructBackendMock("invoices", "getInvoicesExports", "200")
      const params = [
        generateMockData('String'),
      ];
      const response = await instance.getInvoicesExportsWithHttpInfo(...params);

      expect(response).to.have.property('statusCode');
      expect(response.statusCode).to.equal()
      expect(response).to.have.property('data');
    });
  });

  describe('constructor', () => {
    it('should use default ApiClient when none provided', () => {
      const defaultInstance = new TheSellingPartnerApiForInvoices.InvoicesApi();
      expect(defaultInstance.apiClient).to.equal(TheSellingPartnerApiForInvoices.ApiClient.instance);
    });

    it('should use provided ApiClient', () => {
      const customClient = new TheSellingPartnerApiForInvoices.ApiClient();
      const customInstance = new TheSellingPartnerApiForInvoices.InvoicesApi(customClient);
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
        const ModelClass = TheSellingPartnerApiForInvoices[dataType];
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
