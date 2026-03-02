import expect from 'expect.js';
import { join } from 'path';

const modulePath = join(process.cwd(), 'src', 'sellerWallet_2024_03_01', 'index.js');
const TheSellingPartnerApiForAmazonSellerWalletOpenBankingApiSpecForMoreInformationReferToTheSellerWalletOpenBankingApiUseCaseGuideDocSellerWalletOpenBankingApiV20240301UseCaseGuide = await import(modulePath);
const endpoint = 'http://localhost:3000';

describe('TransactionsApi', () => {
  let instance;

  beforeEach(() => {
    const apiClientInstance = new TheSellingPartnerApiForAmazonSellerWalletOpenBankingApiSpecForMoreInformationReferToTheSellerWalletOpenBankingApiUseCaseGuideDocSellerWalletOpenBankingApiV20240301UseCaseGuide.ApiClient(endpoint);
    apiClientInstance.applyXAmzAccessTokenToRequest("testAccessToken");
    instance = new TheSellingPartnerApiForAmazonSellerWalletOpenBankingApiSpecForMoreInformationReferToTheSellerWalletOpenBankingApiUseCaseGuideDocSellerWalletOpenBankingApiV20240301UseCaseGuide.TransactionsApi(apiClientInstance);
  });

  describe('createTransaction', () => {
    it('should successfully call createTransactionWithHttpInfo', async () => {
      await instructBackendMock("Transactions", "createTransaction", "200")
      const params = [
        generateMockData('String'),
        generateMockData('String'),
        generateMockData('String'),
        generateMockData('TransactionInitiationRequest')
      ];
      const response = await instance.createTransactionWithHttpInfo(...params);

      expect(response.response).to.have.property('statusCode');
      expect(response.response.statusCode).to.equal(200)
      assertValidResponsePayload(200, response.data.payload);
    });
  });
  describe('getTransaction', () => {
    it('should successfully call getTransactionWithHttpInfo', async () => {
      await instructBackendMock("Transactions", "getTransaction", "200")
      const params = [
        generateMockData('String'),
        generateMockData('String')
      ];
      const response = await instance.getTransactionWithHttpInfo(...params);

      expect(response.response).to.have.property('statusCode');
      expect(response.response.statusCode).to.equal(200)
      assertValidResponsePayload(200, response.data.payload);
    });
  });
  describe('listAccountTransactions', () => {
    it('should successfully call listAccountTransactionsWithHttpInfo', async () => {
      await instructBackendMock("Transactions", "listAccountTransactions", "200")
      const params = [
        generateMockData('String'),
        generateMockData('String'),
      ];
      const response = await instance.listAccountTransactionsWithHttpInfo(...params);

      expect(response.response).to.have.property('statusCode');
      expect(response.response.statusCode).to.equal(200)
      assertValidResponsePayload(200, response.data.payload);
    });
  });

  describe('constructor', () => {
    it('should use default ApiClient when none provided', () => {
      const defaultInstance = new TheSellingPartnerApiForAmazonSellerWalletOpenBankingApiSpecForMoreInformationReferToTheSellerWalletOpenBankingApiUseCaseGuideDocSellerWalletOpenBankingApiV20240301UseCaseGuide.TransactionsApi();
      expect(defaultInstance.apiClient).to.equal(TheSellingPartnerApiForAmazonSellerWalletOpenBankingApiSpecForMoreInformationReferToTheSellerWalletOpenBankingApiUseCaseGuideDocSellerWalletOpenBankingApiV20240301UseCaseGuide.ApiClient.instance);
    });

    it('should use provided ApiClient', () => {
      const customClient = new TheSellingPartnerApiForAmazonSellerWalletOpenBankingApiSpecForMoreInformationReferToTheSellerWalletOpenBankingApiUseCaseGuideDocSellerWalletOpenBankingApiV20240301UseCaseGuide.ApiClient();
      const customInstance = new TheSellingPartnerApiForAmazonSellerWalletOpenBankingApiSpecForMoreInformationReferToTheSellerWalletOpenBankingApiUseCaseGuideDocSellerWalletOpenBankingApiV20240301UseCaseGuide.TransactionsApi(customClient);
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
        const ModelClass = TheSellingPartnerApiForAmazonSellerWalletOpenBankingApiSpecForMoreInformationReferToTheSellerWalletOpenBankingApiUseCaseGuideDocSellerWalletOpenBankingApiV20240301UseCaseGuide[dataType];
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
