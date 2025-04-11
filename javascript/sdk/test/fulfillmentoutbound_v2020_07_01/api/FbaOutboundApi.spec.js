/**
 * Selling Partner APIs for Fulfillment Outbound
 * The Selling Partner API for Fulfillment Outbound lets you create applications that help a seller fulfill Multi-Channel Fulfillment orders using their inventory in Amazon's fulfillment network. You can get information on both potential and existing fulfillment orders.
 *
 * The version of the OpenAPI document: 2020-07-01
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

const modulePath = join(process.cwd(), 'src', 'fulfillmentoutbound_v2020_07_01', 'index.js');
const SellingPartnerApisForFulfillmentOutbound = await import(modulePath);

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
        const ModelClass = SellingPartnerApisForFulfillmentOutbound[dataType];
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
const mockcancelFulfillmentOrderData = {
  request: {
    'sellerFulfillmentOrderId': generateMockData('String')
  },
  response: {
    data: generateMockData('CancelFulfillmentOrderResponse'),
    statusCode: 200,
    headers: {}
  }
};
const mockcreateFulfillmentOrderData = {
  request: {
    'body': generateMockData('CreateFulfillmentOrderRequest')
  },
  response: {
    data: generateMockData('CreateFulfillmentOrderResponse'),
    statusCode: 200,
    headers: {}
  }
};
const mockcreateFulfillmentReturnData = {
  request: {
    'sellerFulfillmentOrderId': generateMockData('String'),
    'body': generateMockData('CreateFulfillmentReturnRequest')
  },
  response: {
    data: generateMockData('CreateFulfillmentReturnResponse'),
    statusCode: 200,
    headers: {}
  }
};
const mockdeliveryOffersData = {
  request: {
    'body': generateMockData('GetDeliveryOffersRequest')
  },
  response: {
    data: generateMockData('GetDeliveryOffersResponse'),
    statusCode: 200,
    headers: {}
  }
};
const mockgetFeatureInventoryData = {
  request: {
    'marketplaceId': generateMockData('String'),
    'featureName': generateMockData('String'),
  },
  response: {
    data: generateMockData('GetFeatureInventoryResponse'),
    statusCode: 200,
    headers: {}
  }
};
const mockgetFeatureSKUData = {
  request: {
    'marketplaceId': generateMockData('String'),
    'featureName': generateMockData('String'),
    'sellerSku': generateMockData('String')
  },
  response: {
    data: generateMockData('GetFeatureSkuResponse'),
    statusCode: 200,
    headers: {}
  }
};
const mockgetFeaturesData = {
  request: {
    'marketplaceId': generateMockData('String')
  },
  response: {
    data: generateMockData('GetFeaturesResponse'),
    statusCode: 200,
    headers: {}
  }
};
const mockgetFulfillmentOrderData = {
  request: {
    'sellerFulfillmentOrderId': generateMockData('String')
  },
  response: {
    data: generateMockData('GetFulfillmentOrderResponse'),
    statusCode: 200,
    headers: {}
  }
};
const mockgetFulfillmentPreviewData = {
  request: {
    'body': generateMockData('GetFulfillmentPreviewRequest')
  },
  response: {
    data: generateMockData('GetFulfillmentPreviewResponse'),
    statusCode: 200,
    headers: {}
  }
};
const mockgetPackageTrackingDetailsData = {
  request: {
    'packageNumber': generateMockData('Number')
  },
  response: {
    data: generateMockData('GetPackageTrackingDetailsResponse'),
    statusCode: 200,
    headers: {}
  }
};
const mocklistAllFulfillmentOrdersData = {
  request: {
  },
  response: {
    data: generateMockData('ListAllFulfillmentOrdersResponse'),
    statusCode: 200,
    headers: {}
  }
};
const mocklistReturnReasonCodesData = {
  request: {
    'sellerSku': generateMockData('String'),
  },
  response: {
    data: generateMockData('ListReturnReasonCodesResponse'),
    statusCode: 200,
    headers: {}
  }
};
const mocksubmitFulfillmentOrderStatusUpdateData = {
  request: {
    'sellerFulfillmentOrderId': generateMockData('String'),
    'body': generateMockData('SubmitFulfillmentOrderStatusUpdateRequest')
  },
  response: {
    data: generateMockData('SubmitFulfillmentOrderStatusUpdateResponse'),
    statusCode: 200,
    headers: {}
  }
};
const mockupdateFulfillmentOrderData = {
  request: {
    'sellerFulfillmentOrderId': generateMockData('String'),
    'body': generateMockData('UpdateFulfillmentOrderRequest')
  },
  response: {
    data: generateMockData('UpdateFulfillmentOrderResponse'),
    statusCode: 200,
    headers: {}
  }
};

describe('FbaOutboundApi', () => {
  beforeEach(() => {
    sandbox = sinon.createSandbox();
    const apiClientInstance = new SellingPartnerApisForFulfillmentOutbound.ApiClient(testEndpoint);
    apiClientInstance.applyXAmzAccessTokenToRequest(testAccessToken);
    sandbox.stub(apiClientInstance, 'callApi');
    instance = new SellingPartnerApisForFulfillmentOutbound.FbaOutboundApi(apiClientInstance);
  });

  afterEach(() => {
    sandbox.restore();
  });

  describe('cancelFulfillmentOrder', () => {
    it('should successfully call cancelFulfillmentOrder', async () => {
      instance.apiClient.callApi.resolves(mockcancelFulfillmentOrderData.response);

      const params = [
        mockcancelFulfillmentOrderData.request['sellerFulfillmentOrderId']
      ];
      const data = await instance.cancelFulfillmentOrder(...params);

      expect(data instanceof SellingPartnerApisForFulfillmentOutbound.CancelFulfillmentOrderResponse).to.be.true;
      expect(data).to.equal(mockcancelFulfillmentOrderData.response.data);
    });

    it('should successfully call cancelFulfillmentOrderWithHttpInfo', async () => {
      instance.apiClient.callApi.resolves(mockcancelFulfillmentOrderData.response);

      const params = [
        mockcancelFulfillmentOrderData.request['sellerFulfillmentOrderId']
      ];
      const response = await instance.cancelFulfillmentOrderWithHttpInfo(...params);

      expect(response).to.have.property('statusCode');
      expect(response.statusCode).to.equal(mockcancelFulfillmentOrderData.response.statusCode)
      expect(response).to.have.property('headers');
      expect(response).to.have.property('data');
      expect(response.data).to.equal(mockcancelFulfillmentOrderData.response.data)
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
          mockcancelFulfillmentOrderData.request['sellerFulfillmentOrderId']
        ];
        await instance.cancelFulfillmentOrder(...params);
        throw new Error('Expected error to be thrown');
      } catch (error) {
        expect(error).to.exist;
        expect(error.statusCode).to.equal(400);
      }
    });
  });
  describe('createFulfillmentOrder', () => {
    it('should successfully call createFulfillmentOrder', async () => {
      instance.apiClient.callApi.resolves(mockcreateFulfillmentOrderData.response);

      const params = [
        mockcreateFulfillmentOrderData.request['body']
      ];
      const data = await instance.createFulfillmentOrder(...params);

      expect(data instanceof SellingPartnerApisForFulfillmentOutbound.CreateFulfillmentOrderResponse).to.be.true;
      expect(data).to.equal(mockcreateFulfillmentOrderData.response.data);
    });

    it('should successfully call createFulfillmentOrderWithHttpInfo', async () => {
      instance.apiClient.callApi.resolves(mockcreateFulfillmentOrderData.response);

      const params = [
        mockcreateFulfillmentOrderData.request['body']
      ];
      const response = await instance.createFulfillmentOrderWithHttpInfo(...params);

      expect(response).to.have.property('statusCode');
      expect(response.statusCode).to.equal(mockcreateFulfillmentOrderData.response.statusCode)
      expect(response).to.have.property('headers');
      expect(response).to.have.property('data');
      expect(response.data).to.equal(mockcreateFulfillmentOrderData.response.data)
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
          mockcreateFulfillmentOrderData.request['body']
        ];
        await instance.createFulfillmentOrder(...params);
        throw new Error('Expected error to be thrown');
      } catch (error) {
        expect(error).to.exist;
        expect(error.statusCode).to.equal(400);
      }
    });
  });
  describe('createFulfillmentReturn', () => {
    it('should successfully call createFulfillmentReturn', async () => {
      instance.apiClient.callApi.resolves(mockcreateFulfillmentReturnData.response);

      const params = [
        mockcreateFulfillmentReturnData.request['sellerFulfillmentOrderId'],
        mockcreateFulfillmentReturnData.request['body']
      ];
      const data = await instance.createFulfillmentReturn(...params);

      expect(data instanceof SellingPartnerApisForFulfillmentOutbound.CreateFulfillmentReturnResponse).to.be.true;
      expect(data).to.equal(mockcreateFulfillmentReturnData.response.data);
    });

    it('should successfully call createFulfillmentReturnWithHttpInfo', async () => {
      instance.apiClient.callApi.resolves(mockcreateFulfillmentReturnData.response);

      const params = [
        mockcreateFulfillmentReturnData.request['sellerFulfillmentOrderId'],
        mockcreateFulfillmentReturnData.request['body']
      ];
      const response = await instance.createFulfillmentReturnWithHttpInfo(...params);

      expect(response).to.have.property('statusCode');
      expect(response.statusCode).to.equal(mockcreateFulfillmentReturnData.response.statusCode)
      expect(response).to.have.property('headers');
      expect(response).to.have.property('data');
      expect(response.data).to.equal(mockcreateFulfillmentReturnData.response.data)
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
          mockcreateFulfillmentReturnData.request['sellerFulfillmentOrderId'],
          mockcreateFulfillmentReturnData.request['body']
        ];
        await instance.createFulfillmentReturn(...params);
        throw new Error('Expected error to be thrown');
      } catch (error) {
        expect(error).to.exist;
        expect(error.statusCode).to.equal(400);
      }
    });
  });
  describe('deliveryOffers', () => {
    it('should successfully call deliveryOffers', async () => {
      instance.apiClient.callApi.resolves(mockdeliveryOffersData.response);

      const params = [
        mockdeliveryOffersData.request['body']
      ];
      const data = await instance.deliveryOffers(...params);

      expect(data instanceof SellingPartnerApisForFulfillmentOutbound.GetDeliveryOffersResponse).to.be.true;
      expect(data).to.equal(mockdeliveryOffersData.response.data);
    });

    it('should successfully call deliveryOffersWithHttpInfo', async () => {
      instance.apiClient.callApi.resolves(mockdeliveryOffersData.response);

      const params = [
        mockdeliveryOffersData.request['body']
      ];
      const response = await instance.deliveryOffersWithHttpInfo(...params);

      expect(response).to.have.property('statusCode');
      expect(response.statusCode).to.equal(mockdeliveryOffersData.response.statusCode)
      expect(response).to.have.property('headers');
      expect(response).to.have.property('data');
      expect(response.data).to.equal(mockdeliveryOffersData.response.data)
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
          mockdeliveryOffersData.request['body']
        ];
        await instance.deliveryOffers(...params);
        throw new Error('Expected error to be thrown');
      } catch (error) {
        expect(error).to.exist;
        expect(error.statusCode).to.equal(400);
      }
    });
  });
  describe('getFeatureInventory', () => {
    it('should successfully call getFeatureInventory', async () => {
      instance.apiClient.callApi.resolves(mockgetFeatureInventoryData.response);

      const params = [
        mockgetFeatureInventoryData.request['marketplaceId'],
        mockgetFeatureInventoryData.request['featureName'],
      ];
      const data = await instance.getFeatureInventory(...params);

      expect(data instanceof SellingPartnerApisForFulfillmentOutbound.GetFeatureInventoryResponse).to.be.true;
      expect(data).to.equal(mockgetFeatureInventoryData.response.data);
    });

    it('should successfully call getFeatureInventoryWithHttpInfo', async () => {
      instance.apiClient.callApi.resolves(mockgetFeatureInventoryData.response);

      const params = [
        mockgetFeatureInventoryData.request['marketplaceId'],
        mockgetFeatureInventoryData.request['featureName'],
      ];
      const response = await instance.getFeatureInventoryWithHttpInfo(...params);

      expect(response).to.have.property('statusCode');
      expect(response.statusCode).to.equal(mockgetFeatureInventoryData.response.statusCode)
      expect(response).to.have.property('headers');
      expect(response).to.have.property('data');
      expect(response.data).to.equal(mockgetFeatureInventoryData.response.data)
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
          mockgetFeatureInventoryData.request['marketplaceId'],
          mockgetFeatureInventoryData.request['featureName'],
        ];
        await instance.getFeatureInventory(...params);
        throw new Error('Expected error to be thrown');
      } catch (error) {
        expect(error).to.exist;
        expect(error.statusCode).to.equal(400);
      }
    });
  });
  describe('getFeatureSKU', () => {
    it('should successfully call getFeatureSKU', async () => {
      instance.apiClient.callApi.resolves(mockgetFeatureSKUData.response);

      const params = [
        mockgetFeatureSKUData.request['marketplaceId'],
        mockgetFeatureSKUData.request['featureName'],
        mockgetFeatureSKUData.request['sellerSku']
      ];
      const data = await instance.getFeatureSKU(...params);

      expect(data instanceof SellingPartnerApisForFulfillmentOutbound.GetFeatureSkuResponse).to.be.true;
      expect(data).to.equal(mockgetFeatureSKUData.response.data);
    });

    it('should successfully call getFeatureSKUWithHttpInfo', async () => {
      instance.apiClient.callApi.resolves(mockgetFeatureSKUData.response);

      const params = [
        mockgetFeatureSKUData.request['marketplaceId'],
        mockgetFeatureSKUData.request['featureName'],
        mockgetFeatureSKUData.request['sellerSku']
      ];
      const response = await instance.getFeatureSKUWithHttpInfo(...params);

      expect(response).to.have.property('statusCode');
      expect(response.statusCode).to.equal(mockgetFeatureSKUData.response.statusCode)
      expect(response).to.have.property('headers');
      expect(response).to.have.property('data');
      expect(response.data).to.equal(mockgetFeatureSKUData.response.data)
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
          mockgetFeatureSKUData.request['marketplaceId'],
          mockgetFeatureSKUData.request['featureName'],
          mockgetFeatureSKUData.request['sellerSku']
        ];
        await instance.getFeatureSKU(...params);
        throw new Error('Expected error to be thrown');
      } catch (error) {
        expect(error).to.exist;
        expect(error.statusCode).to.equal(400);
      }
    });
  });
  describe('getFeatures', () => {
    it('should successfully call getFeatures', async () => {
      instance.apiClient.callApi.resolves(mockgetFeaturesData.response);

      const params = [
        mockgetFeaturesData.request['marketplaceId']
      ];
      const data = await instance.getFeatures(...params);

      expect(data instanceof SellingPartnerApisForFulfillmentOutbound.GetFeaturesResponse).to.be.true;
      expect(data).to.equal(mockgetFeaturesData.response.data);
    });

    it('should successfully call getFeaturesWithHttpInfo', async () => {
      instance.apiClient.callApi.resolves(mockgetFeaturesData.response);

      const params = [
        mockgetFeaturesData.request['marketplaceId']
      ];
      const response = await instance.getFeaturesWithHttpInfo(...params);

      expect(response).to.have.property('statusCode');
      expect(response.statusCode).to.equal(mockgetFeaturesData.response.statusCode)
      expect(response).to.have.property('headers');
      expect(response).to.have.property('data');
      expect(response.data).to.equal(mockgetFeaturesData.response.data)
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
          mockgetFeaturesData.request['marketplaceId']
        ];
        await instance.getFeatures(...params);
        throw new Error('Expected error to be thrown');
      } catch (error) {
        expect(error).to.exist;
        expect(error.statusCode).to.equal(400);
      }
    });
  });
  describe('getFulfillmentOrder', () => {
    it('should successfully call getFulfillmentOrder', async () => {
      instance.apiClient.callApi.resolves(mockgetFulfillmentOrderData.response);

      const params = [
        mockgetFulfillmentOrderData.request['sellerFulfillmentOrderId']
      ];
      const data = await instance.getFulfillmentOrder(...params);

      expect(data instanceof SellingPartnerApisForFulfillmentOutbound.GetFulfillmentOrderResponse).to.be.true;
      expect(data).to.equal(mockgetFulfillmentOrderData.response.data);
    });

    it('should successfully call getFulfillmentOrderWithHttpInfo', async () => {
      instance.apiClient.callApi.resolves(mockgetFulfillmentOrderData.response);

      const params = [
        mockgetFulfillmentOrderData.request['sellerFulfillmentOrderId']
      ];
      const response = await instance.getFulfillmentOrderWithHttpInfo(...params);

      expect(response).to.have.property('statusCode');
      expect(response.statusCode).to.equal(mockgetFulfillmentOrderData.response.statusCode)
      expect(response).to.have.property('headers');
      expect(response).to.have.property('data');
      expect(response.data).to.equal(mockgetFulfillmentOrderData.response.data)
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
          mockgetFulfillmentOrderData.request['sellerFulfillmentOrderId']
        ];
        await instance.getFulfillmentOrder(...params);
        throw new Error('Expected error to be thrown');
      } catch (error) {
        expect(error).to.exist;
        expect(error.statusCode).to.equal(400);
      }
    });
  });
  describe('getFulfillmentPreview', () => {
    it('should successfully call getFulfillmentPreview', async () => {
      instance.apiClient.callApi.resolves(mockgetFulfillmentPreviewData.response);

      const params = [
        mockgetFulfillmentPreviewData.request['body']
      ];
      const data = await instance.getFulfillmentPreview(...params);

      expect(data instanceof SellingPartnerApisForFulfillmentOutbound.GetFulfillmentPreviewResponse).to.be.true;
      expect(data).to.equal(mockgetFulfillmentPreviewData.response.data);
    });

    it('should successfully call getFulfillmentPreviewWithHttpInfo', async () => {
      instance.apiClient.callApi.resolves(mockgetFulfillmentPreviewData.response);

      const params = [
        mockgetFulfillmentPreviewData.request['body']
      ];
      const response = await instance.getFulfillmentPreviewWithHttpInfo(...params);

      expect(response).to.have.property('statusCode');
      expect(response.statusCode).to.equal(mockgetFulfillmentPreviewData.response.statusCode)
      expect(response).to.have.property('headers');
      expect(response).to.have.property('data');
      expect(response.data).to.equal(mockgetFulfillmentPreviewData.response.data)
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
          mockgetFulfillmentPreviewData.request['body']
        ];
        await instance.getFulfillmentPreview(...params);
        throw new Error('Expected error to be thrown');
      } catch (error) {
        expect(error).to.exist;
        expect(error.statusCode).to.equal(400);
      }
    });
  });
  describe('getPackageTrackingDetails', () => {
    it('should successfully call getPackageTrackingDetails', async () => {
      instance.apiClient.callApi.resolves(mockgetPackageTrackingDetailsData.response);

      const params = [
        mockgetPackageTrackingDetailsData.request['packageNumber']
      ];
      const data = await instance.getPackageTrackingDetails(...params);

      expect(data instanceof SellingPartnerApisForFulfillmentOutbound.GetPackageTrackingDetailsResponse).to.be.true;
      expect(data).to.equal(mockgetPackageTrackingDetailsData.response.data);
    });

    it('should successfully call getPackageTrackingDetailsWithHttpInfo', async () => {
      instance.apiClient.callApi.resolves(mockgetPackageTrackingDetailsData.response);

      const params = [
        mockgetPackageTrackingDetailsData.request['packageNumber']
      ];
      const response = await instance.getPackageTrackingDetailsWithHttpInfo(...params);

      expect(response).to.have.property('statusCode');
      expect(response.statusCode).to.equal(mockgetPackageTrackingDetailsData.response.statusCode)
      expect(response).to.have.property('headers');
      expect(response).to.have.property('data');
      expect(response.data).to.equal(mockgetPackageTrackingDetailsData.response.data)
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
          mockgetPackageTrackingDetailsData.request['packageNumber']
        ];
        await instance.getPackageTrackingDetails(...params);
        throw new Error('Expected error to be thrown');
      } catch (error) {
        expect(error).to.exist;
        expect(error.statusCode).to.equal(400);
      }
    });
  });
  describe('listAllFulfillmentOrders', () => {
    it('should successfully call listAllFulfillmentOrders', async () => {
      instance.apiClient.callApi.resolves(mocklistAllFulfillmentOrdersData.response);

      const params = [
      ];
      const data = await instance.listAllFulfillmentOrders(...params);

      expect(data instanceof SellingPartnerApisForFulfillmentOutbound.ListAllFulfillmentOrdersResponse).to.be.true;
      expect(data).to.equal(mocklistAllFulfillmentOrdersData.response.data);
    });

    it('should successfully call listAllFulfillmentOrdersWithHttpInfo', async () => {
      instance.apiClient.callApi.resolves(mocklistAllFulfillmentOrdersData.response);

      const params = [
      ];
      const response = await instance.listAllFulfillmentOrdersWithHttpInfo(...params);

      expect(response).to.have.property('statusCode');
      expect(response.statusCode).to.equal(mocklistAllFulfillmentOrdersData.response.statusCode)
      expect(response).to.have.property('headers');
      expect(response).to.have.property('data');
      expect(response.data).to.equal(mocklistAllFulfillmentOrdersData.response.data)
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
        ];
        await instance.listAllFulfillmentOrders(...params);
        throw new Error('Expected error to be thrown');
      } catch (error) {
        expect(error).to.exist;
        expect(error.statusCode).to.equal(400);
      }
    });
  });
  describe('listReturnReasonCodes', () => {
    it('should successfully call listReturnReasonCodes', async () => {
      instance.apiClient.callApi.resolves(mocklistReturnReasonCodesData.response);

      const params = [
        mocklistReturnReasonCodesData.request['sellerSku'],
      ];
      const data = await instance.listReturnReasonCodes(...params);

      expect(data instanceof SellingPartnerApisForFulfillmentOutbound.ListReturnReasonCodesResponse).to.be.true;
      expect(data).to.equal(mocklistReturnReasonCodesData.response.data);
    });

    it('should successfully call listReturnReasonCodesWithHttpInfo', async () => {
      instance.apiClient.callApi.resolves(mocklistReturnReasonCodesData.response);

      const params = [
        mocklistReturnReasonCodesData.request['sellerSku'],
      ];
      const response = await instance.listReturnReasonCodesWithHttpInfo(...params);

      expect(response).to.have.property('statusCode');
      expect(response.statusCode).to.equal(mocklistReturnReasonCodesData.response.statusCode)
      expect(response).to.have.property('headers');
      expect(response).to.have.property('data');
      expect(response.data).to.equal(mocklistReturnReasonCodesData.response.data)
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
          mocklistReturnReasonCodesData.request['sellerSku'],
        ];
        await instance.listReturnReasonCodes(...params);
        throw new Error('Expected error to be thrown');
      } catch (error) {
        expect(error).to.exist;
        expect(error.statusCode).to.equal(400);
      }
    });
  });
  describe('submitFulfillmentOrderStatusUpdate', () => {
    it('should successfully call submitFulfillmentOrderStatusUpdate', async () => {
      instance.apiClient.callApi.resolves(mocksubmitFulfillmentOrderStatusUpdateData.response);

      const params = [
        mocksubmitFulfillmentOrderStatusUpdateData.request['sellerFulfillmentOrderId'],
        mocksubmitFulfillmentOrderStatusUpdateData.request['body']
      ];
      const data = await instance.submitFulfillmentOrderStatusUpdate(...params);

      expect(data instanceof SellingPartnerApisForFulfillmentOutbound.SubmitFulfillmentOrderStatusUpdateResponse).to.be.true;
      expect(data).to.equal(mocksubmitFulfillmentOrderStatusUpdateData.response.data);
    });

    it('should successfully call submitFulfillmentOrderStatusUpdateWithHttpInfo', async () => {
      instance.apiClient.callApi.resolves(mocksubmitFulfillmentOrderStatusUpdateData.response);

      const params = [
        mocksubmitFulfillmentOrderStatusUpdateData.request['sellerFulfillmentOrderId'],
        mocksubmitFulfillmentOrderStatusUpdateData.request['body']
      ];
      const response = await instance.submitFulfillmentOrderStatusUpdateWithHttpInfo(...params);

      expect(response).to.have.property('statusCode');
      expect(response.statusCode).to.equal(mocksubmitFulfillmentOrderStatusUpdateData.response.statusCode)
      expect(response).to.have.property('headers');
      expect(response).to.have.property('data');
      expect(response.data).to.equal(mocksubmitFulfillmentOrderStatusUpdateData.response.data)
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
          mocksubmitFulfillmentOrderStatusUpdateData.request['sellerFulfillmentOrderId'],
          mocksubmitFulfillmentOrderStatusUpdateData.request['body']
        ];
        await instance.submitFulfillmentOrderStatusUpdate(...params);
        throw new Error('Expected error to be thrown');
      } catch (error) {
        expect(error).to.exist;
        expect(error.statusCode).to.equal(400);
      }
    });
  });
  describe('updateFulfillmentOrder', () => {
    it('should successfully call updateFulfillmentOrder', async () => {
      instance.apiClient.callApi.resolves(mockupdateFulfillmentOrderData.response);

      const params = [
        mockupdateFulfillmentOrderData.request['sellerFulfillmentOrderId'],
        mockupdateFulfillmentOrderData.request['body']
      ];
      const data = await instance.updateFulfillmentOrder(...params);

      expect(data instanceof SellingPartnerApisForFulfillmentOutbound.UpdateFulfillmentOrderResponse).to.be.true;
      expect(data).to.equal(mockupdateFulfillmentOrderData.response.data);
    });

    it('should successfully call updateFulfillmentOrderWithHttpInfo', async () => {
      instance.apiClient.callApi.resolves(mockupdateFulfillmentOrderData.response);

      const params = [
        mockupdateFulfillmentOrderData.request['sellerFulfillmentOrderId'],
        mockupdateFulfillmentOrderData.request['body']
      ];
      const response = await instance.updateFulfillmentOrderWithHttpInfo(...params);

      expect(response).to.have.property('statusCode');
      expect(response.statusCode).to.equal(mockupdateFulfillmentOrderData.response.statusCode)
      expect(response).to.have.property('headers');
      expect(response).to.have.property('data');
      expect(response.data).to.equal(mockupdateFulfillmentOrderData.response.data)
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
          mockupdateFulfillmentOrderData.request['sellerFulfillmentOrderId'],
          mockupdateFulfillmentOrderData.request['body']
        ];
        await instance.updateFulfillmentOrder(...params);
        throw new Error('Expected error to be thrown');
      } catch (error) {
        expect(error).to.exist;
        expect(error.statusCode).to.equal(400);
      }
    });
  });

  describe('constructor', () => {
    it('should use default ApiClient when none provided', () => {
      const defaultInstance = new SellingPartnerApisForFulfillmentOutbound.FbaOutboundApi();
      expect(defaultInstance.apiClient).to.equal(SellingPartnerApisForFulfillmentOutbound.ApiClient.instance);
    });

    it('should use provided ApiClient', () => {
      const customClient = new SellingPartnerApisForFulfillmentOutbound.ApiClient();
      const customInstance = new SellingPartnerApisForFulfillmentOutbound.FbaOutboundApi(customClient);
      expect(customInstance.apiClient).to.equal(customClient);
    });
  });
});
