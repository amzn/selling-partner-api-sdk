import expect from 'expect.js';
import { join } from 'path';

const modulePath = join(process.cwd(), 'src', 'fulfillmentinbound_v2024_03_20', 'index.js');
const TheSellingPartnerApiForFbaInboundOperations = await import(modulePath);
const endpoint = 'http://localhost:3000';

describe('FbaInboundApi', () => {
  let instance;

  beforeEach(() => {
    const apiClientInstance = new TheSellingPartnerApiForFbaInboundOperations.ApiClient(endpoint);
    apiClientInstance.applyXAmzAccessTokenToRequest("testAccessToken");
    instance = new TheSellingPartnerApiForFbaInboundOperations.FbaInboundApi(apiClientInstance);
  });

  describe('cancelInboundPlan', () => {
    it('should successfully call cancelInboundPlanWithHttpInfo', async () => {
      await instructBackendMock("fbaInbound", "cancelInboundPlan", "202")
      const params = [
        generateMockData('String')
      ];
      const response = await instance.cancelInboundPlanWithHttpInfo(...params);

      expect(response.response).to.have.property('statusCode');
      expect(response.response.statusCode).to.equal(202)
      assertValidResponsePayload(202, response.data);
    });
  });
  describe('cancelSelfShipAppointment', () => {
    it('should successfully call cancelSelfShipAppointmentWithHttpInfo', async () => {
      await instructBackendMock("fbaInbound", "cancelSelfShipAppointment", "202")
      const params = [
        generateMockData('String'),
        generateMockData('String'),
        generateMockData('CancelSelfShipAppointmentRequest')
      ];
      const response = await instance.cancelSelfShipAppointmentWithHttpInfo(...params);

      expect(response.response).to.have.property('statusCode');
      expect(response.response.statusCode).to.equal(202)
      assertValidResponsePayload(202, response.data);
    });
  });
  describe('confirmDeliveryWindowOptions', () => {
    it('should successfully call confirmDeliveryWindowOptionsWithHttpInfo', async () => {
      await instructBackendMock("fbaInbound", "confirmDeliveryWindowOptions", "202")
      const params = [
        generateMockData('String'),
        generateMockData('String'),
        generateMockData('String')
      ];
      const response = await instance.confirmDeliveryWindowOptionsWithHttpInfo(...params);

      expect(response.response).to.have.property('statusCode');
      expect(response.response.statusCode).to.equal(202)
      assertValidResponsePayload(202, response.data);
    });
  });
  describe('confirmPackingOption', () => {
    it('should successfully call confirmPackingOptionWithHttpInfo', async () => {
      await instructBackendMock("fbaInbound", "confirmPackingOption", "202")
      const params = [
        generateMockData('String'),
        generateMockData('String')
      ];
      const response = await instance.confirmPackingOptionWithHttpInfo(...params);

      expect(response.response).to.have.property('statusCode');
      expect(response.response.statusCode).to.equal(202)
      assertValidResponsePayload(202, response.data);
    });
  });
  describe('confirmPlacementOption', () => {
    it('should successfully call confirmPlacementOptionWithHttpInfo', async () => {
      await instructBackendMock("fbaInbound", "confirmPlacementOption", "202")
      const params = [
        generateMockData('String'),
        generateMockData('String')
      ];
      const response = await instance.confirmPlacementOptionWithHttpInfo(...params);

      expect(response.response).to.have.property('statusCode');
      expect(response.response.statusCode).to.equal(202)
      assertValidResponsePayload(202, response.data);
    });
  });
  describe('confirmShipmentContentUpdatePreview', () => {
    it('should successfully call confirmShipmentContentUpdatePreviewWithHttpInfo', async () => {
      await instructBackendMock("fbaInbound", "confirmShipmentContentUpdatePreview", "202")
      const params = [
        generateMockData('String'),
        generateMockData('String'),
        generateMockData('String')
      ];
      const response = await instance.confirmShipmentContentUpdatePreviewWithHttpInfo(...params);

      expect(response.response).to.have.property('statusCode');
      expect(response.response.statusCode).to.equal(202)
      assertValidResponsePayload(202, response.data);
    });
  });
  describe('confirmTransportationOptions', () => {
    it('should successfully call confirmTransportationOptionsWithHttpInfo', async () => {
      await instructBackendMock("fbaInbound", "confirmTransportationOptions", "202")
      const params = [
        generateMockData('String'),
        generateMockData('ConfirmTransportationOptionsRequest')
      ];
      const response = await instance.confirmTransportationOptionsWithHttpInfo(...params);

      expect(response.response).to.have.property('statusCode');
      expect(response.response.statusCode).to.equal(202)
      assertValidResponsePayload(202, response.data);
    });
  });
  describe('createInboundPlan', () => {
    it('should successfully call createInboundPlanWithHttpInfo', async () => {
      await instructBackendMock("fbaInbound", "createInboundPlan", "202")
      const params = [
        generateMockData('CreateInboundPlanRequest')
      ];
      const response = await instance.createInboundPlanWithHttpInfo(...params);

      expect(response.response).to.have.property('statusCode');
      expect(response.response.statusCode).to.equal(202)
      assertValidResponsePayload(202, response.data);
    });
  });
  describe('createMarketplaceItemLabels', () => {
    it('should successfully call createMarketplaceItemLabelsWithHttpInfo', async () => {
      await instructBackendMock("fbaInbound", "createMarketplaceItemLabels", "200")
      const params = [
        generateMockData('CreateMarketplaceItemLabelsRequest')
      ];
      const response = await instance.createMarketplaceItemLabelsWithHttpInfo(...params);

      expect(response.response).to.have.property('statusCode');
      expect(response.response.statusCode).to.equal(200)
      assertValidResponsePayload(200, response.data);
    });
  });
  describe('generateDeliveryWindowOptions', () => {
    it('should successfully call generateDeliveryWindowOptionsWithHttpInfo', async () => {
      await instructBackendMock("fbaInbound", "generateDeliveryWindowOptions", "202")
      const params = [
        generateMockData('String'),
        generateMockData('String')
      ];
      const response = await instance.generateDeliveryWindowOptionsWithHttpInfo(...params);

      expect(response.response).to.have.property('statusCode');
      expect(response.response.statusCode).to.equal(202)
      assertValidResponsePayload(202, response.data);
    });
  });
  describe('generatePackingOptions', () => {
    it('should successfully call generatePackingOptionsWithHttpInfo', async () => {
      await instructBackendMock("fbaInbound", "generatePackingOptions", "202")
      const params = [
        generateMockData('String')
      ];
      const response = await instance.generatePackingOptionsWithHttpInfo(...params);

      expect(response.response).to.have.property('statusCode');
      expect(response.response.statusCode).to.equal(202)
      assertValidResponsePayload(202, response.data);
    });
  });
  describe('generatePlacementOptions', () => {
    it('should successfully call generatePlacementOptionsWithHttpInfo', async () => {
      await instructBackendMock("fbaInbound", "generatePlacementOptions", "202")
      const params = [
        generateMockData('String'),
        generateMockData('GeneratePlacementOptionsRequest')
      ];
      const response = await instance.generatePlacementOptionsWithHttpInfo(...params);

      expect(response.response).to.have.property('statusCode');
      expect(response.response.statusCode).to.equal(202)
      assertValidResponsePayload(202, response.data);
    });
  });
  describe('generateSelfShipAppointmentSlots', () => {
    it('should successfully call generateSelfShipAppointmentSlotsWithHttpInfo', async () => {
      await instructBackendMock("fbaInbound", "generateSelfShipAppointmentSlots", "201")
      const params = [
        generateMockData('String'),
        generateMockData('String'),
        generateMockData('GenerateSelfShipAppointmentSlotsRequest')
      ];
      const response = await instance.generateSelfShipAppointmentSlotsWithHttpInfo(...params);

      expect(response.response).to.have.property('statusCode');
      expect(response.response.statusCode).to.equal(201)
      assertValidResponsePayload(201, response.data);
    });
  });
  describe('generateShipmentContentUpdatePreviews', () => {
    it('should successfully call generateShipmentContentUpdatePreviewsWithHttpInfo', async () => {
      await instructBackendMock("fbaInbound", "generateShipmentContentUpdatePreviews", "202")
      const params = [
        generateMockData('String'),
        generateMockData('String'),
        generateMockData('GenerateShipmentContentUpdatePreviewsRequest')
      ];
      const response = await instance.generateShipmentContentUpdatePreviewsWithHttpInfo(...params);

      expect(response.response).to.have.property('statusCode');
      expect(response.response.statusCode).to.equal(202)
      assertValidResponsePayload(202, response.data);
    });
  });
  describe('generateTransportationOptions', () => {
    it('should successfully call generateTransportationOptionsWithHttpInfo', async () => {
      await instructBackendMock("fbaInbound", "generateTransportationOptions", "202")
      const params = [
        generateMockData('String'),
        generateMockData('GenerateTransportationOptionsRequest')
      ];
      const response = await instance.generateTransportationOptionsWithHttpInfo(...params);

      expect(response.response).to.have.property('statusCode');
      expect(response.response.statusCode).to.equal(202)
      assertValidResponsePayload(202, response.data);
    });
  });
  describe('getDeliveryChallanDocument', () => {
    it('should successfully call getDeliveryChallanDocumentWithHttpInfo', async () => {
      await instructBackendMock("fbaInbound", "getDeliveryChallanDocument", "200")
      const params = [
        generateMockData('String'),
        generateMockData('String')
      ];
      const response = await instance.getDeliveryChallanDocumentWithHttpInfo(...params);

      expect(response.response).to.have.property('statusCode');
      expect(response.response.statusCode).to.equal(200)
      assertValidResponsePayload(200, response.data);
    });
  });
  describe('getInboundOperationStatus', () => {
    it('should successfully call getInboundOperationStatusWithHttpInfo', async () => {
      await instructBackendMock("fbaInbound", "getInboundOperationStatus", "200")
      const params = [
        generateMockData('String')
      ];
      const response = await instance.getInboundOperationStatusWithHttpInfo(...params);

      expect(response.response).to.have.property('statusCode');
      expect(response.response.statusCode).to.equal(200)
      assertValidResponsePayload(200, response.data);
    });
  });
  describe('getInboundPlan', () => {
    it('should successfully call getInboundPlanWithHttpInfo', async () => {
      await instructBackendMock("fbaInbound", "getInboundPlan", "200")
      const params = [
        generateMockData('String')
      ];
      const response = await instance.getInboundPlanWithHttpInfo(...params);

      expect(response.response).to.have.property('statusCode');
      expect(response.response.statusCode).to.equal(200)
      assertValidResponsePayload(200, response.data);
    });
  });
  describe('getSelfShipAppointmentSlots', () => {
    it('should successfully call getSelfShipAppointmentSlotsWithHttpInfo', async () => {
      await instructBackendMock("fbaInbound", "getSelfShipAppointmentSlots", "200")
      const params = [
        generateMockData('String'),
        generateMockData('String'),
      ];
      const response = await instance.getSelfShipAppointmentSlotsWithHttpInfo(...params);

      expect(response.response).to.have.property('statusCode');
      expect(response.response.statusCode).to.equal(200)
      assertValidResponsePayload(200, response.data);
    });
  });
  describe('getShipment', () => {
    it('should successfully call getShipmentWithHttpInfo', async () => {
      await instructBackendMock("fbaInbound", "getShipment", "200")
      const params = [
        generateMockData('String'),
        generateMockData('String')
      ];
      const response = await instance.getShipmentWithHttpInfo(...params);

      expect(response.response).to.have.property('statusCode');
      expect(response.response.statusCode).to.equal(200)
      assertValidResponsePayload(200, response.data);
    });
  });
  describe('getShipmentContentUpdatePreview', () => {
    it('should successfully call getShipmentContentUpdatePreviewWithHttpInfo', async () => {
      await instructBackendMock("fbaInbound", "getShipmentContentUpdatePreview", "200")
      const params = [
        generateMockData('String'),
        generateMockData('String'),
        generateMockData('String')
      ];
      const response = await instance.getShipmentContentUpdatePreviewWithHttpInfo(...params);

      expect(response.response).to.have.property('statusCode');
      expect(response.response.statusCode).to.equal(200)
      assertValidResponsePayload(200, response.data);
    });
  });
  describe('listDeliveryWindowOptions', () => {
    it('should successfully call listDeliveryWindowOptionsWithHttpInfo', async () => {
      await instructBackendMock("fbaInbound", "listDeliveryWindowOptions", "200")
      const params = [
        generateMockData('String'),
        generateMockData('String'),
      ];
      const response = await instance.listDeliveryWindowOptionsWithHttpInfo(...params);

      expect(response.response).to.have.property('statusCode');
      expect(response.response.statusCode).to.equal(200)
      assertValidResponsePayload(200, response.data);
    });
  });
  describe('listInboundPlanBoxes', () => {
    it('should successfully call listInboundPlanBoxesWithHttpInfo', async () => {
      await instructBackendMock("fbaInbound", "listInboundPlanBoxes", "200")
      const params = [
        generateMockData('String'),
      ];
      const response = await instance.listInboundPlanBoxesWithHttpInfo(...params);

      expect(response.response).to.have.property('statusCode');
      expect(response.response.statusCode).to.equal(200)
      assertValidResponsePayload(200, response.data);
    });
  });
  describe('listInboundPlanItems', () => {
    it('should successfully call listInboundPlanItemsWithHttpInfo', async () => {
      await instructBackendMock("fbaInbound", "listInboundPlanItems", "200")
      const params = [
        generateMockData('String'),
      ];
      const response = await instance.listInboundPlanItemsWithHttpInfo(...params);

      expect(response.response).to.have.property('statusCode');
      expect(response.response.statusCode).to.equal(200)
      assertValidResponsePayload(200, response.data);
    });
  });
  describe('listInboundPlanPallets', () => {
    it('should successfully call listInboundPlanPalletsWithHttpInfo', async () => {
      await instructBackendMock("fbaInbound", "listInboundPlanPallets", "200")
      const params = [
        generateMockData('String'),
      ];
      const response = await instance.listInboundPlanPalletsWithHttpInfo(...params);

      expect(response.response).to.have.property('statusCode');
      expect(response.response.statusCode).to.equal(200)
      assertValidResponsePayload(200, response.data);
    });
  });
  describe('listInboundPlans', () => {
    it('should successfully call listInboundPlansWithHttpInfo', async () => {
      await instructBackendMock("fbaInbound", "listInboundPlans", "200")
      const params = [
      ];
      const response = await instance.listInboundPlansWithHttpInfo(...params);

      expect(response.response).to.have.property('statusCode');
      expect(response.response.statusCode).to.equal(200)
      assertValidResponsePayload(200, response.data);
    });
  });
  describe('listItemComplianceDetails', () => {
    it('should successfully call listItemComplianceDetailsWithHttpInfo', async () => {
      await instructBackendMock("fbaInbound", "listItemComplianceDetails", "200")
      const params = [
        generateMockData('String', true),
        generateMockData('String')
      ];
      const response = await instance.listItemComplianceDetailsWithHttpInfo(...params);

      expect(response.response).to.have.property('statusCode');
      expect(response.response.statusCode).to.equal(200)
      assertValidResponsePayload(200, response.data);
    });
  });
  describe('listPackingGroupBoxes', () => {
    it('should successfully call listPackingGroupBoxesWithHttpInfo', async () => {
      await instructBackendMock("fbaInbound", "listPackingGroupBoxes", "200")
      const params = [
        generateMockData('String'),
        generateMockData('String'),
      ];
      const response = await instance.listPackingGroupBoxesWithHttpInfo(...params);

      expect(response.response).to.have.property('statusCode');
      expect(response.response.statusCode).to.equal(200)
      assertValidResponsePayload(200, response.data);
    });
  });
  describe('listPackingGroupItems', () => {
    it('should successfully call listPackingGroupItemsWithHttpInfo', async () => {
      await instructBackendMock("fbaInbound", "listPackingGroupItems", "200")
      const params = [
        generateMockData('String'),
        generateMockData('String'),
      ];
      const response = await instance.listPackingGroupItemsWithHttpInfo(...params);

      expect(response.response).to.have.property('statusCode');
      expect(response.response.statusCode).to.equal(200)
      assertValidResponsePayload(200, response.data);
    });
  });
  describe('listPackingOptions', () => {
    it('should successfully call listPackingOptionsWithHttpInfo', async () => {
      await instructBackendMock("fbaInbound", "listPackingOptions", "200")
      const params = [
        generateMockData('String'),
      ];
      const response = await instance.listPackingOptionsWithHttpInfo(...params);

      expect(response.response).to.have.property('statusCode');
      expect(response.response.statusCode).to.equal(200)
      assertValidResponsePayload(200, response.data);
    });
  });
  describe('listPlacementOptions', () => {
    it('should successfully call listPlacementOptionsWithHttpInfo', async () => {
      await instructBackendMock("fbaInbound", "listPlacementOptions", "200")
      const params = [
        generateMockData('String'),
      ];
      const response = await instance.listPlacementOptionsWithHttpInfo(...params);

      expect(response.response).to.have.property('statusCode');
      expect(response.response.statusCode).to.equal(200)
      assertValidResponsePayload(200, response.data);
    });
  });
  describe('listPrepDetails', () => {
    it('should successfully call listPrepDetailsWithHttpInfo', async () => {
      await instructBackendMock("fbaInbound", "listPrepDetails", "200")
      const params = [
        generateMockData('String'),
        generateMockData('String', true)
      ];
      const response = await instance.listPrepDetailsWithHttpInfo(...params);

      expect(response.response).to.have.property('statusCode');
      expect(response.response.statusCode).to.equal(200)
      assertValidResponsePayload(200, response.data);
    });
  });
  describe('listShipmentBoxes', () => {
    it('should successfully call listShipmentBoxesWithHttpInfo', async () => {
      await instructBackendMock("fbaInbound", "listShipmentBoxes", "200")
      const params = [
        generateMockData('String'),
        generateMockData('String'),
      ];
      const response = await instance.listShipmentBoxesWithHttpInfo(...params);

      expect(response.response).to.have.property('statusCode');
      expect(response.response.statusCode).to.equal(200)
      assertValidResponsePayload(200, response.data);
    });
  });
  describe('listShipmentContentUpdatePreviews', () => {
    it('should successfully call listShipmentContentUpdatePreviewsWithHttpInfo', async () => {
      await instructBackendMock("fbaInbound", "listShipmentContentUpdatePreviews", "200")
      const params = [
        generateMockData('String'),
        generateMockData('String'),
      ];
      const response = await instance.listShipmentContentUpdatePreviewsWithHttpInfo(...params);

      expect(response.response).to.have.property('statusCode');
      expect(response.response.statusCode).to.equal(200)
      assertValidResponsePayload(200, response.data);
    });
  });
  describe('listShipmentItems', () => {
    it('should successfully call listShipmentItemsWithHttpInfo', async () => {
      await instructBackendMock("fbaInbound", "listShipmentItems", "200")
      const params = [
        generateMockData('String'),
        generateMockData('String'),
      ];
      const response = await instance.listShipmentItemsWithHttpInfo(...params);

      expect(response.response).to.have.property('statusCode');
      expect(response.response.statusCode).to.equal(200)
      assertValidResponsePayload(200, response.data);
    });
  });
  describe('listShipmentPallets', () => {
    it('should successfully call listShipmentPalletsWithHttpInfo', async () => {
      await instructBackendMock("fbaInbound", "listShipmentPallets", "200")
      const params = [
        generateMockData('String'),
        generateMockData('String'),
      ];
      const response = await instance.listShipmentPalletsWithHttpInfo(...params);

      expect(response.response).to.have.property('statusCode');
      expect(response.response.statusCode).to.equal(200)
      assertValidResponsePayload(200, response.data);
    });
  });
  describe('listTransportationOptions', () => {
    it('should successfully call listTransportationOptionsWithHttpInfo', async () => {
      await instructBackendMock("fbaInbound", "listTransportationOptions", "200")
      const params = [
        generateMockData('String'),
      ];
      const response = await instance.listTransportationOptionsWithHttpInfo(...params);

      expect(response.response).to.have.property('statusCode');
      expect(response.response.statusCode).to.equal(200)
      assertValidResponsePayload(200, response.data);
    });
  });
  describe('scheduleSelfShipAppointment', () => {
    it('should successfully call scheduleSelfShipAppointmentWithHttpInfo', async () => {
      await instructBackendMock("fbaInbound", "scheduleSelfShipAppointment", "200")
      const params = [
        generateMockData('String'),
        generateMockData('String'),
        generateMockData('String'),
        generateMockData('ScheduleSelfShipAppointmentRequest')
      ];
      const response = await instance.scheduleSelfShipAppointmentWithHttpInfo(...params);

      expect(response.response).to.have.property('statusCode');
      expect(response.response.statusCode).to.equal(200)
      assertValidResponsePayload(200, response.data);
    });
  });
  describe('setPackingInformation', () => {
    it('should successfully call setPackingInformationWithHttpInfo', async () => {
      await instructBackendMock("fbaInbound", "setPackingInformation", "202")
      const params = [
        generateMockData('String'),
        generateMockData('SetPackingInformationRequest')
      ];
      const response = await instance.setPackingInformationWithHttpInfo(...params);

      expect(response.response).to.have.property('statusCode');
      expect(response.response.statusCode).to.equal(202)
      assertValidResponsePayload(202, response.data);
    });
  });
  describe('setPrepDetails', () => {
    it('should successfully call setPrepDetailsWithHttpInfo', async () => {
      await instructBackendMock("fbaInbound", "setPrepDetails", "202")
      const params = [
        generateMockData('SetPrepDetailsRequest')
      ];
      const response = await instance.setPrepDetailsWithHttpInfo(...params);

      expect(response.response).to.have.property('statusCode');
      expect(response.response.statusCode).to.equal(202)
      assertValidResponsePayload(202, response.data);
    });
  });
  describe('updateInboundPlanName', () => {
    it('should successfully call updateInboundPlanNameWithHttpInfo', async () => {
      await instructBackendMock("fbaInbound", "updateInboundPlanName", "204")
      const params = [
        generateMockData('String'),
        generateMockData('UpdateInboundPlanNameRequest')
      ];
      const response = await instance.updateInboundPlanNameWithHttpInfo(...params);

      expect(response.response).to.have.property('statusCode');
      expect(response.response.statusCode).to.equal(204)
    });
  });
  describe('updateItemComplianceDetails', () => {
    it('should successfully call updateItemComplianceDetailsWithHttpInfo', async () => {
      await instructBackendMock("fbaInbound", "updateItemComplianceDetails", "202")
      const params = [
        generateMockData('String'),
        generateMockData('UpdateItemComplianceDetailsRequest')
      ];
      const response = await instance.updateItemComplianceDetailsWithHttpInfo(...params);

      expect(response.response).to.have.property('statusCode');
      expect(response.response.statusCode).to.equal(202)
      assertValidResponsePayload(202, response.data);
    });
  });
  describe('updateShipmentName', () => {
    it('should successfully call updateShipmentNameWithHttpInfo', async () => {
      await instructBackendMock("fbaInbound", "updateShipmentName", "204")
      const params = [
        generateMockData('String'),
        generateMockData('String'),
        generateMockData('UpdateShipmentNameRequest')
      ];
      const response = await instance.updateShipmentNameWithHttpInfo(...params);

      expect(response.response).to.have.property('statusCode');
      expect(response.response.statusCode).to.equal(204)
    });
  });
  describe('updateShipmentSourceAddress', () => {
    it('should successfully call updateShipmentSourceAddressWithHttpInfo', async () => {
      await instructBackendMock("fbaInbound", "updateShipmentSourceAddress", "202")
      const params = [
        generateMockData('String'),
        generateMockData('String'),
        generateMockData('UpdateShipmentSourceAddressRequest')
      ];
      const response = await instance.updateShipmentSourceAddressWithHttpInfo(...params);

      expect(response.response).to.have.property('statusCode');
      expect(response.response.statusCode).to.equal(202)
      assertValidResponsePayload(202, response.data);
    });
  });
  describe('updateShipmentTrackingDetails', () => {
    it('should successfully call updateShipmentTrackingDetailsWithHttpInfo', async () => {
      await instructBackendMock("fbaInbound", "updateShipmentTrackingDetails", "202")
      const params = [
        generateMockData('String'),
        generateMockData('String'),
        generateMockData('UpdateShipmentTrackingDetailsRequest')
      ];
      const response = await instance.updateShipmentTrackingDetailsWithHttpInfo(...params);

      expect(response.response).to.have.property('statusCode');
      expect(response.response.statusCode).to.equal(202)
      assertValidResponsePayload(202, response.data);
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
