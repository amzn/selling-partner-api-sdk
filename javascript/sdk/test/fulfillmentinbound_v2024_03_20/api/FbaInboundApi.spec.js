import expect from 'expect.js';
import { join } from 'path';

const modulePath = join(process.cwd(), 'src', 'fulfillmentinbound_v2024_03_20', 'index.js');
const TheSellingPartnerApiForFbaInboundOperations = await import(modulePath);

describe('FbaInboundApi', () => {
  let instance;
  const testEndpoint = 'https://localhost:3000';
  const testAccessToken = "testAccessToken";

  beforeEach(() => {
    const apiClientInstance = new TheSellingPartnerApiForFbaInboundOperations.ApiClient(testEndpoint);
    apiClientInstance.applyXAmzAccessTokenToRequest(testAccessToken);
    instance = new TheSellingPartnerApiForFbaInboundOperations.FbaInboundApi(apiClientInstance);
  });

  describe('cancelInboundPlan', () => {
    it('should successfully call cancelInboundPlanWithHttpInfo', async () => {
      instructBackendMock("fbaInbound", "cancelInboundPlan", "202")
      const params = [
        generateMockData('String')
      ];
      const response = await instance.cancelInboundPlanWithHttpInfo(...params);

      expect(response).to.have.property('statusCode');
      expect(response.statusCode).to.equal()
      expect(response).to.have.property('data');
    });
  });
  describe('cancelSelfShipAppointment', () => {
    it('should successfully call cancelSelfShipAppointmentWithHttpInfo', async () => {
      instructBackendMock("fbaInbound", "cancelSelfShipAppointment", "202")
      const params = [
        generateMockData('String'),
        generateMockData('String'),
        generateMockData('CancelSelfShipAppointmentRequest')
      ];
      const response = await instance.cancelSelfShipAppointmentWithHttpInfo(...params);

      expect(response).to.have.property('statusCode');
      expect(response.statusCode).to.equal()
      expect(response).to.have.property('data');
    });
  });
  describe('confirmDeliveryWindowOptions', () => {
    it('should successfully call confirmDeliveryWindowOptionsWithHttpInfo', async () => {
      instructBackendMock("fbaInbound", "confirmDeliveryWindowOptions", "202")
      const params = [
        generateMockData('String'),
        generateMockData('String'),
        generateMockData('String')
      ];
      const response = await instance.confirmDeliveryWindowOptionsWithHttpInfo(...params);

      expect(response).to.have.property('statusCode');
      expect(response.statusCode).to.equal()
      expect(response).to.have.property('data');
    });
  });
  describe('confirmPackingOption', () => {
    it('should successfully call confirmPackingOptionWithHttpInfo', async () => {
      instructBackendMock("fbaInbound", "confirmPackingOption", "202")
      const params = [
        generateMockData('String'),
        generateMockData('String')
      ];
      const response = await instance.confirmPackingOptionWithHttpInfo(...params);

      expect(response).to.have.property('statusCode');
      expect(response.statusCode).to.equal()
      expect(response).to.have.property('data');
    });
  });
  describe('confirmPlacementOption', () => {
    it('should successfully call confirmPlacementOptionWithHttpInfo', async () => {
      instructBackendMock("fbaInbound", "confirmPlacementOption", "202")
      const params = [
        generateMockData('String'),
        generateMockData('String')
      ];
      const response = await instance.confirmPlacementOptionWithHttpInfo(...params);

      expect(response).to.have.property('statusCode');
      expect(response.statusCode).to.equal()
      expect(response).to.have.property('data');
    });
  });
  describe('confirmShipmentContentUpdatePreview', () => {
    it('should successfully call confirmShipmentContentUpdatePreviewWithHttpInfo', async () => {
      instructBackendMock("fbaInbound", "confirmShipmentContentUpdatePreview", "202")
      const params = [
        generateMockData('String'),
        generateMockData('String'),
        generateMockData('String')
      ];
      const response = await instance.confirmShipmentContentUpdatePreviewWithHttpInfo(...params);

      expect(response).to.have.property('statusCode');
      expect(response.statusCode).to.equal()
      expect(response).to.have.property('data');
    });
  });
  describe('confirmTransportationOptions', () => {
    it('should successfully call confirmTransportationOptionsWithHttpInfo', async () => {
      instructBackendMock("fbaInbound", "confirmTransportationOptions", "202")
      const params = [
        generateMockData('String'),
        generateMockData('ConfirmTransportationOptionsRequest')
      ];
      const response = await instance.confirmTransportationOptionsWithHttpInfo(...params);

      expect(response).to.have.property('statusCode');
      expect(response.statusCode).to.equal()
      expect(response).to.have.property('data');
    });
  });
  describe('createInboundPlan', () => {
    it('should successfully call createInboundPlanWithHttpInfo', async () => {
      instructBackendMock("fbaInbound", "createInboundPlan", "202")
      const params = [
        generateMockData('CreateInboundPlanRequest')
      ];
      const response = await instance.createInboundPlanWithHttpInfo(...params);

      expect(response).to.have.property('statusCode');
      expect(response.statusCode).to.equal()
      expect(response).to.have.property('data');
    });
  });
  describe('createMarketplaceItemLabels', () => {
    it('should successfully call createMarketplaceItemLabelsWithHttpInfo', async () => {
      instructBackendMock("fbaInbound", "createMarketplaceItemLabels", "200")
      const params = [
        generateMockData('CreateMarketplaceItemLabelsRequest')
      ];
      const response = await instance.createMarketplaceItemLabelsWithHttpInfo(...params);

      expect(response).to.have.property('statusCode');
      expect(response.statusCode).to.equal()
      expect(response).to.have.property('data');
    });
  });
  describe('generateDeliveryWindowOptions', () => {
    it('should successfully call generateDeliveryWindowOptionsWithHttpInfo', async () => {
      instructBackendMock("fbaInbound", "generateDeliveryWindowOptions", "202")
      const params = [
        generateMockData('String'),
        generateMockData('String')
      ];
      const response = await instance.generateDeliveryWindowOptionsWithHttpInfo(...params);

      expect(response).to.have.property('statusCode');
      expect(response.statusCode).to.equal()
      expect(response).to.have.property('data');
    });
  });
  describe('generatePackingOptions', () => {
    it('should successfully call generatePackingOptionsWithHttpInfo', async () => {
      instructBackendMock("fbaInbound", "generatePackingOptions", "202")
      const params = [
        generateMockData('String')
      ];
      const response = await instance.generatePackingOptionsWithHttpInfo(...params);

      expect(response).to.have.property('statusCode');
      expect(response.statusCode).to.equal()
      expect(response).to.have.property('data');
    });
  });
  describe('generatePlacementOptions', () => {
    it('should successfully call generatePlacementOptionsWithHttpInfo', async () => {
      instructBackendMock("fbaInbound", "generatePlacementOptions", "202")
      const params = [
        generateMockData('String'),
        generateMockData('GeneratePlacementOptionsRequest')
      ];
      const response = await instance.generatePlacementOptionsWithHttpInfo(...params);

      expect(response).to.have.property('statusCode');
      expect(response.statusCode).to.equal()
      expect(response).to.have.property('data');
    });
  });
  describe('generateSelfShipAppointmentSlots', () => {
    it('should successfully call generateSelfShipAppointmentSlotsWithHttpInfo', async () => {
      instructBackendMock("fbaInbound", "generateSelfShipAppointmentSlots", "201")
      const params = [
        generateMockData('String'),
        generateMockData('String'),
        generateMockData('GenerateSelfShipAppointmentSlotsRequest')
      ];
      const response = await instance.generateSelfShipAppointmentSlotsWithHttpInfo(...params);

      expect(response).to.have.property('statusCode');
      expect(response.statusCode).to.equal()
      expect(response).to.have.property('data');
    });
  });
  describe('generateShipmentContentUpdatePreviews', () => {
    it('should successfully call generateShipmentContentUpdatePreviewsWithHttpInfo', async () => {
      instructBackendMock("fbaInbound", "generateShipmentContentUpdatePreviews", "202")
      const params = [
        generateMockData('String'),
        generateMockData('String'),
        generateMockData('GenerateShipmentContentUpdatePreviewsRequest')
      ];
      const response = await instance.generateShipmentContentUpdatePreviewsWithHttpInfo(...params);

      expect(response).to.have.property('statusCode');
      expect(response.statusCode).to.equal()
      expect(response).to.have.property('data');
    });
  });
  describe('generateTransportationOptions', () => {
    it('should successfully call generateTransportationOptionsWithHttpInfo', async () => {
      instructBackendMock("fbaInbound", "generateTransportationOptions", "202")
      const params = [
        generateMockData('String'),
        generateMockData('GenerateTransportationOptionsRequest')
      ];
      const response = await instance.generateTransportationOptionsWithHttpInfo(...params);

      expect(response).to.have.property('statusCode');
      expect(response.statusCode).to.equal()
      expect(response).to.have.property('data');
    });
  });
  describe('getDeliveryChallanDocument', () => {
    it('should successfully call getDeliveryChallanDocumentWithHttpInfo', async () => {
      instructBackendMock("fbaInbound", "getDeliveryChallanDocument", "200")
      const params = [
        generateMockData('String'),
        generateMockData('String')
      ];
      const response = await instance.getDeliveryChallanDocumentWithHttpInfo(...params);

      expect(response).to.have.property('statusCode');
      expect(response.statusCode).to.equal()
      expect(response).to.have.property('data');
    });
  });
  describe('getInboundOperationStatus', () => {
    it('should successfully call getInboundOperationStatusWithHttpInfo', async () => {
      instructBackendMock("fbaInbound", "getInboundOperationStatus", "200")
      const params = [
        generateMockData('String')
      ];
      const response = await instance.getInboundOperationStatusWithHttpInfo(...params);

      expect(response).to.have.property('statusCode');
      expect(response.statusCode).to.equal()
      expect(response).to.have.property('data');
    });
  });
  describe('getInboundPlan', () => {
    it('should successfully call getInboundPlanWithHttpInfo', async () => {
      instructBackendMock("fbaInbound", "getInboundPlan", "200")
      const params = [
        generateMockData('String')
      ];
      const response = await instance.getInboundPlanWithHttpInfo(...params);

      expect(response).to.have.property('statusCode');
      expect(response.statusCode).to.equal()
      expect(response).to.have.property('data');
    });
  });
  describe('getSelfShipAppointmentSlots', () => {
    it('should successfully call getSelfShipAppointmentSlotsWithHttpInfo', async () => {
      instructBackendMock("fbaInbound", "getSelfShipAppointmentSlots", "200")
      const params = [
        generateMockData('String'),
        generateMockData('String'),
      ];
      const response = await instance.getSelfShipAppointmentSlotsWithHttpInfo(...params);

      expect(response).to.have.property('statusCode');
      expect(response.statusCode).to.equal()
      expect(response).to.have.property('data');
    });
  });
  describe('getShipment', () => {
    it('should successfully call getShipmentWithHttpInfo', async () => {
      instructBackendMock("fbaInbound", "getShipment", "200")
      const params = [
        generateMockData('String'),
        generateMockData('String')
      ];
      const response = await instance.getShipmentWithHttpInfo(...params);

      expect(response).to.have.property('statusCode');
      expect(response.statusCode).to.equal()
      expect(response).to.have.property('data');
    });
  });
  describe('getShipmentContentUpdatePreview', () => {
    it('should successfully call getShipmentContentUpdatePreviewWithHttpInfo', async () => {
      instructBackendMock("fbaInbound", "getShipmentContentUpdatePreview", "200")
      const params = [
        generateMockData('String'),
        generateMockData('String'),
        generateMockData('String')
      ];
      const response = await instance.getShipmentContentUpdatePreviewWithHttpInfo(...params);

      expect(response).to.have.property('statusCode');
      expect(response.statusCode).to.equal()
      expect(response).to.have.property('data');
    });
  });
  describe('listDeliveryWindowOptions', () => {
    it('should successfully call listDeliveryWindowOptionsWithHttpInfo', async () => {
      instructBackendMock("fbaInbound", "listDeliveryWindowOptions", "200")
      const params = [
        generateMockData('String'),
        generateMockData('String'),
      ];
      const response = await instance.listDeliveryWindowOptionsWithHttpInfo(...params);

      expect(response).to.have.property('statusCode');
      expect(response.statusCode).to.equal()
      expect(response).to.have.property('data');
    });
  });
  describe('listInboundPlanBoxes', () => {
    it('should successfully call listInboundPlanBoxesWithHttpInfo', async () => {
      instructBackendMock("fbaInbound", "listInboundPlanBoxes", "200")
      const params = [
        generateMockData('String'),
      ];
      const response = await instance.listInboundPlanBoxesWithHttpInfo(...params);

      expect(response).to.have.property('statusCode');
      expect(response.statusCode).to.equal()
      expect(response).to.have.property('data');
    });
  });
  describe('listInboundPlanItems', () => {
    it('should successfully call listInboundPlanItemsWithHttpInfo', async () => {
      instructBackendMock("fbaInbound", "listInboundPlanItems", "200")
      const params = [
        generateMockData('String'),
      ];
      const response = await instance.listInboundPlanItemsWithHttpInfo(...params);

      expect(response).to.have.property('statusCode');
      expect(response.statusCode).to.equal()
      expect(response).to.have.property('data');
    });
  });
  describe('listInboundPlanPallets', () => {
    it('should successfully call listInboundPlanPalletsWithHttpInfo', async () => {
      instructBackendMock("fbaInbound", "listInboundPlanPallets", "200")
      const params = [
        generateMockData('String'),
      ];
      const response = await instance.listInboundPlanPalletsWithHttpInfo(...params);

      expect(response).to.have.property('statusCode');
      expect(response.statusCode).to.equal()
      expect(response).to.have.property('data');
    });
  });
  describe('listInboundPlans', () => {
    it('should successfully call listInboundPlansWithHttpInfo', async () => {
      instructBackendMock("fbaInbound", "listInboundPlans", "200")
      const params = [
      ];
      const response = await instance.listInboundPlansWithHttpInfo(...params);

      expect(response).to.have.property('statusCode');
      expect(response.statusCode).to.equal()
      expect(response).to.have.property('data');
    });
  });
  describe('listItemComplianceDetails', () => {
    it('should successfully call listItemComplianceDetailsWithHttpInfo', async () => {
      instructBackendMock("fbaInbound", "listItemComplianceDetails", "200")
      const params = [
        generateMockData('String', true),
        generateMockData('String')
      ];
      const response = await instance.listItemComplianceDetailsWithHttpInfo(...params);

      expect(response).to.have.property('statusCode');
      expect(response.statusCode).to.equal()
      expect(response).to.have.property('data');
    });
  });
  describe('listPackingGroupBoxes', () => {
    it('should successfully call listPackingGroupBoxesWithHttpInfo', async () => {
      instructBackendMock("fbaInbound", "listPackingGroupBoxes", "200")
      const params = [
        generateMockData('String'),
        generateMockData('String'),
      ];
      const response = await instance.listPackingGroupBoxesWithHttpInfo(...params);

      expect(response).to.have.property('statusCode');
      expect(response.statusCode).to.equal()
      expect(response).to.have.property('data');
    });
  });
  describe('listPackingGroupItems', () => {
    it('should successfully call listPackingGroupItemsWithHttpInfo', async () => {
      instructBackendMock("fbaInbound", "listPackingGroupItems", "200")
      const params = [
        generateMockData('String'),
        generateMockData('String'),
      ];
      const response = await instance.listPackingGroupItemsWithHttpInfo(...params);

      expect(response).to.have.property('statusCode');
      expect(response.statusCode).to.equal()
      expect(response).to.have.property('data');
    });
  });
  describe('listPackingOptions', () => {
    it('should successfully call listPackingOptionsWithHttpInfo', async () => {
      instructBackendMock("fbaInbound", "listPackingOptions", "200")
      const params = [
        generateMockData('String'),
      ];
      const response = await instance.listPackingOptionsWithHttpInfo(...params);

      expect(response).to.have.property('statusCode');
      expect(response.statusCode).to.equal()
      expect(response).to.have.property('data');
    });
  });
  describe('listPlacementOptions', () => {
    it('should successfully call listPlacementOptionsWithHttpInfo', async () => {
      instructBackendMock("fbaInbound", "listPlacementOptions", "200")
      const params = [
        generateMockData('String'),
      ];
      const response = await instance.listPlacementOptionsWithHttpInfo(...params);

      expect(response).to.have.property('statusCode');
      expect(response.statusCode).to.equal()
      expect(response).to.have.property('data');
    });
  });
  describe('listPrepDetails', () => {
    it('should successfully call listPrepDetailsWithHttpInfo', async () => {
      instructBackendMock("fbaInbound", "listPrepDetails", "200")
      const params = [
        generateMockData('String'),
        generateMockData('String', true)
      ];
      const response = await instance.listPrepDetailsWithHttpInfo(...params);

      expect(response).to.have.property('statusCode');
      expect(response.statusCode).to.equal()
      expect(response).to.have.property('data');
    });
  });
  describe('listShipmentBoxes', () => {
    it('should successfully call listShipmentBoxesWithHttpInfo', async () => {
      instructBackendMock("fbaInbound", "listShipmentBoxes", "200")
      const params = [
        generateMockData('String'),
        generateMockData('String'),
      ];
      const response = await instance.listShipmentBoxesWithHttpInfo(...params);

      expect(response).to.have.property('statusCode');
      expect(response.statusCode).to.equal()
      expect(response).to.have.property('data');
    });
  });
  describe('listShipmentContentUpdatePreviews', () => {
    it('should successfully call listShipmentContentUpdatePreviewsWithHttpInfo', async () => {
      instructBackendMock("fbaInbound", "listShipmentContentUpdatePreviews", "200")
      const params = [
        generateMockData('String'),
        generateMockData('String'),
      ];
      const response = await instance.listShipmentContentUpdatePreviewsWithHttpInfo(...params);

      expect(response).to.have.property('statusCode');
      expect(response.statusCode).to.equal()
      expect(response).to.have.property('data');
    });
  });
  describe('listShipmentItems', () => {
    it('should successfully call listShipmentItemsWithHttpInfo', async () => {
      instructBackendMock("fbaInbound", "listShipmentItems", "200")
      const params = [
        generateMockData('String'),
        generateMockData('String'),
      ];
      const response = await instance.listShipmentItemsWithHttpInfo(...params);

      expect(response).to.have.property('statusCode');
      expect(response.statusCode).to.equal()
      expect(response).to.have.property('data');
    });
  });
  describe('listShipmentPallets', () => {
    it('should successfully call listShipmentPalletsWithHttpInfo', async () => {
      instructBackendMock("fbaInbound", "listShipmentPallets", "200")
      const params = [
        generateMockData('String'),
        generateMockData('String'),
      ];
      const response = await instance.listShipmentPalletsWithHttpInfo(...params);

      expect(response).to.have.property('statusCode');
      expect(response.statusCode).to.equal()
      expect(response).to.have.property('data');
    });
  });
  describe('listTransportationOptions', () => {
    it('should successfully call listTransportationOptionsWithHttpInfo', async () => {
      instructBackendMock("fbaInbound", "listTransportationOptions", "200")
      const params = [
        generateMockData('String'),
      ];
      const response = await instance.listTransportationOptionsWithHttpInfo(...params);

      expect(response).to.have.property('statusCode');
      expect(response.statusCode).to.equal()
      expect(response).to.have.property('data');
    });
  });
  describe('scheduleSelfShipAppointment', () => {
    it('should successfully call scheduleSelfShipAppointmentWithHttpInfo', async () => {
      instructBackendMock("fbaInbound", "scheduleSelfShipAppointment", "200")
      const params = [
        generateMockData('String'),
        generateMockData('String'),
        generateMockData('String'),
        generateMockData('ScheduleSelfShipAppointmentRequest')
      ];
      const response = await instance.scheduleSelfShipAppointmentWithHttpInfo(...params);

      expect(response).to.have.property('statusCode');
      expect(response.statusCode).to.equal()
      expect(response).to.have.property('data');
    });
  });
  describe('setPackingInformation', () => {
    it('should successfully call setPackingInformationWithHttpInfo', async () => {
      instructBackendMock("fbaInbound", "setPackingInformation", "202")
      const params = [
        generateMockData('String'),
        generateMockData('SetPackingInformationRequest')
      ];
      const response = await instance.setPackingInformationWithHttpInfo(...params);

      expect(response).to.have.property('statusCode');
      expect(response.statusCode).to.equal()
      expect(response).to.have.property('data');
    });
  });
  describe('setPrepDetails', () => {
    it('should successfully call setPrepDetailsWithHttpInfo', async () => {
      instructBackendMock("fbaInbound", "setPrepDetails", "202")
      const params = [
        generateMockData('SetPrepDetailsRequest')
      ];
      const response = await instance.setPrepDetailsWithHttpInfo(...params);

      expect(response).to.have.property('statusCode');
      expect(response.statusCode).to.equal()
      expect(response).to.have.property('data');
    });
  });
  describe('updateInboundPlanName', () => {
    it('should successfully call updateInboundPlanNameWithHttpInfo', async () => {
      instructBackendMock("fbaInbound", "updateInboundPlanName", "204")
      const params = [
        generateMockData('String'),
        generateMockData('UpdateInboundPlanNameRequest')
      ];
      const response = await instance.updateInboundPlanNameWithHttpInfo(...params);

      expect(response).to.have.property('statusCode');
      expect(response.statusCode).to.equal()
    });
  });
  describe('updateItemComplianceDetails', () => {
    it('should successfully call updateItemComplianceDetailsWithHttpInfo', async () => {
      instructBackendMock("fbaInbound", "updateItemComplianceDetails", "202")
      const params = [
        generateMockData('String'),
        generateMockData('UpdateItemComplianceDetailsRequest')
      ];
      const response = await instance.updateItemComplianceDetailsWithHttpInfo(...params);

      expect(response).to.have.property('statusCode');
      expect(response.statusCode).to.equal()
      expect(response).to.have.property('data');
    });
  });
  describe('updateShipmentName', () => {
    it('should successfully call updateShipmentNameWithHttpInfo', async () => {
      instructBackendMock("fbaInbound", "updateShipmentName", "204")
      const params = [
        generateMockData('String'),
        generateMockData('String'),
        generateMockData('UpdateShipmentNameRequest')
      ];
      const response = await instance.updateShipmentNameWithHttpInfo(...params);

      expect(response).to.have.property('statusCode');
      expect(response.statusCode).to.equal()
    });
  });
  describe('updateShipmentSourceAddress', () => {
    it('should successfully call updateShipmentSourceAddressWithHttpInfo', async () => {
      instructBackendMock("fbaInbound", "updateShipmentSourceAddress", "202")
      const params = [
        generateMockData('String'),
        generateMockData('String'),
        generateMockData('UpdateShipmentSourceAddressRequest')
      ];
      const response = await instance.updateShipmentSourceAddressWithHttpInfo(...params);

      expect(response).to.have.property('statusCode');
      expect(response.statusCode).to.equal()
      expect(response).to.have.property('data');
    });
  });
  describe('updateShipmentTrackingDetails', () => {
    it('should successfully call updateShipmentTrackingDetailsWithHttpInfo', async () => {
      instructBackendMock("fbaInbound", "updateShipmentTrackingDetails", "202")
      const params = [
        generateMockData('String'),
        generateMockData('String'),
        generateMockData('UpdateShipmentTrackingDetailsRequest')
      ];
      const response = await instance.updateShipmentTrackingDetailsWithHttpInfo(...params);

      expect(response).to.have.property('statusCode');
      expect(response.statusCode).to.equal()
      expect(response).to.have.property('data');
    });
  });

  describe('constructor', () => {
    it('should use default ApiClient when none provided', () => {
      const defaultInstance = new TheSellingPartnerApiForFbaInboundOperations.FbaInboundApi();
      expect(defaultInstance.apiClient).to.equal(TheSellingPartnerApiForFbaInboundOperations.ApiClient.instance);
    });

    it('should use provided ApiClient', () => {
      const customClient = new TheSellingPartnerApiForFbaInboundOperations.ApiClient();
      const customInstance = new TheSellingPartnerApiForFbaInboundOperations.FbaInboundApi(customClient);
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
        const ModelClass = TheSellingPartnerApiForFbaInboundOperations[dataType];
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
