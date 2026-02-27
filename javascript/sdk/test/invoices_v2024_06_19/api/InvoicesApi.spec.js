import expect from 'expect.js';
import { join } from 'path';

const modulePath = join(process.cwd(), 'src', 'invoices_v2024_06_19', 'index.js');
const TheSellingPartnerApiForInvoices = await import(modulePath);
const endpoint = 'https://localhost:3000';

describe('InvoicesApi', () => {
  let instance;

  beforeEach(() => {
    const apiClientInstance = new TheSellingPartnerApiForInvoices.ApiClient(endpoint);
    apiClientInstance.applyXAmzAccessTokenToRequest("testAccessToken");
    instance = new TheSellingPartnerApiForInvoices.InvoicesApi(apiClientInstance);
  });

  describe('createGovernmentInvoice', () => {
    it('should successfully call createGovernmentInvoiceWithHttpInfo', async () => {
      await instructBackendMock("invoices", "createGovernmentInvoice", "204")
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
      await instructBackendMock("invoices", "createInvoicesExport", "202")
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
      await instructBackendMock("invoices", "getGovernmentInvoiceDocument", "200")
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
      await instructBackendMock("invoices", "getGovernmentInvoiceStatus", "200")
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
      await instructBackendMock("invoices", "getInvoice", "200")
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
      await instructBackendMock("invoices", "getInvoices", "200")
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
      await instructBackendMock("invoices", "getInvoicesAttributes", "200")
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
      await instructBackendMock("invoices", "getInvoicesDocument", "200")
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
      await instructBackendMock("invoices", "getInvoicesExport", "200")
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
      await instructBackendMock("invoices", "getInvoicesExports", "200")
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
