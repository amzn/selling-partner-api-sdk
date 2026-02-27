import expect from 'expect.js';
import { join } from 'path';

const modulePath = join(process.cwd(), 'src', 'sellerWallet_2024_03_01', 'index.js');
const TheSellingPartnerApiForAmazonSellerWalletOpenBankingApiSpecForMoreInformationReferToTheSellerWalletOpenBankingApiUseCaseGuideDocSellerWalletOpenBankingApiV20240301UseCaseGuide = await import(modulePath);
const endpoint = 'http://localhost:3000';

describe('TransferScheduleApi', () => {
  let instance;

  beforeEach(() => {
    const apiClientInstance = new TheSellingPartnerApiForAmazonSellerWalletOpenBankingApiSpecForMoreInformationReferToTheSellerWalletOpenBankingApiUseCaseGuideDocSellerWalletOpenBankingApiV20240301UseCaseGuide.ApiClient(endpoint);
    apiClientInstance.applyXAmzAccessTokenToRequest("testAccessToken");
    instance = new TheSellingPartnerApiForAmazonSellerWalletOpenBankingApiSpecForMoreInformationReferToTheSellerWalletOpenBankingApiUseCaseGuideDocSellerWalletOpenBankingApiV20240301UseCaseGuide.TransferScheduleApi(apiClientInstance);
  });

  describe('createTransferSchedule', () => {
    it('should successfully call createTransferScheduleWithHttpInfo', async () => {
      await instructBackendMock("Transfer Schedule", "createTransferSchedule", "200")
      const params = [
        generateMockData('String'),
        generateMockData('String'),
        generateMockData('String'),
        generateMockData('TransferScheduleRequest')
      ];
      const response = await instance.createTransferScheduleWithHttpInfo(...params);

      expect(response).to.have.property('statusCode');
      expect(response.statusCode).to.equal()
      expect(response).to.have.property('data');
    });
  });
  describe('deleteScheduleTransaction', () => {
    it('should successfully call deleteScheduleTransactionWithHttpInfo', async () => {
      await instructBackendMock("Transfer Schedule", "deleteScheduleTransaction", "200")
      const params = [
        generateMockData('String'),
        generateMockData('String')
      ];
      const response = await instance.deleteScheduleTransactionWithHttpInfo(...params);

      expect(response).to.have.property('statusCode');
      expect(response.statusCode).to.equal()
      expect(response).to.have.property('data');
    });
  });
  describe('getTransferSchedule', () => {
    it('should successfully call getTransferScheduleWithHttpInfo', async () => {
      await instructBackendMock("Transfer Schedule", "getTransferSchedule", "200")
      const params = [
        generateMockData('String'),
        generateMockData('String')
      ];
      const response = await instance.getTransferScheduleWithHttpInfo(...params);

      expect(response).to.have.property('statusCode');
      expect(response.statusCode).to.equal()
      expect(response).to.have.property('data');
    });
  });
  describe('listTransferSchedules', () => {
    it('should successfully call listTransferSchedulesWithHttpInfo', async () => {
      await instructBackendMock("Transfer Schedule", "listTransferSchedules", "200")
      const params = [
        generateMockData('String'),
        generateMockData('String'),
      ];
      const response = await instance.listTransferSchedulesWithHttpInfo(...params);

      expect(response).to.have.property('statusCode');
      expect(response.statusCode).to.equal()
      expect(response).to.have.property('data');
    });
  });
  describe('updateTransferSchedule', () => {
    it('should successfully call updateTransferScheduleWithHttpInfo', async () => {
      await instructBackendMock("Transfer Schedule", "updateTransferSchedule", "200")
      const params = [
        generateMockData('String'),
        generateMockData('String'),
        generateMockData('String'),
        generateMockData('TransferSchedule')
      ];
      const response = await instance.updateTransferScheduleWithHttpInfo(...params);

      expect(response).to.have.property('statusCode');
      expect(response.statusCode).to.equal()
      expect(response).to.have.property('data');
    });
  });

  describe('constructor', () => {
    it('should use default ApiClient when none provided', () => {
      const defaultInstance = new TheSellingPartnerApiForAmazonSellerWalletOpenBankingApiSpecForMoreInformationReferToTheSellerWalletOpenBankingApiUseCaseGuideDocSellerWalletOpenBankingApiV20240301UseCaseGuide.TransferScheduleApi();
      expect(defaultInstance.apiClient).to.equal(TheSellingPartnerApiForAmazonSellerWalletOpenBankingApiSpecForMoreInformationReferToTheSellerWalletOpenBankingApiUseCaseGuideDocSellerWalletOpenBankingApiV20240301UseCaseGuide.ApiClient.instance);
    });

    it('should use provided ApiClient', () => {
      const customClient = new TheSellingPartnerApiForAmazonSellerWalletOpenBankingApiSpecForMoreInformationReferToTheSellerWalletOpenBankingApiUseCaseGuideDocSellerWalletOpenBankingApiV20240301UseCaseGuide.ApiClient();
      const customInstance = new TheSellingPartnerApiForAmazonSellerWalletOpenBankingApiSpecForMoreInformationReferToTheSellerWalletOpenBankingApiUseCaseGuideDocSellerWalletOpenBankingApiV20240301UseCaseGuide.TransferScheduleApi(customClient);
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
