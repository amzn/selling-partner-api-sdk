import expect from 'expect.js';
import { join } from 'path';

const modulePath = join(process.cwd(), 'src', 'services_v1', 'index.js');
const SellingPartnerApiForServices = await import(modulePath);
const endpoint = 'http://localhost:3000';

describe('ServiceApi', () => {
  let instance;

  beforeEach(() => {
    const apiClientInstance = new SellingPartnerApiForServices.ApiClient(endpoint);
    apiClientInstance.applyXAmzAccessTokenToRequest("testAccessToken");
    instance = new SellingPartnerApiForServices.ServiceApi(apiClientInstance);
  });

  describe('addAppointmentForServiceJobByServiceJobId', () => {
    it('should successfully call addAppointmentForServiceJobByServiceJobIdWithHttpInfo', async () => {
      await instructBackendMock("service", "addAppointmentForServiceJobByServiceJobId", "200")
      const params = [
        generateMockData('String'),
        generateMockData('AddAppointmentRequest')
      ];
      const response = await instance.addAppointmentForServiceJobByServiceJobIdWithHttpInfo(...params);

      expect(response.response).to.have.property('statusCode');
      expect(response.response.statusCode).to.equal(200)
      assertValidResponsePayload(200, response.data.payload);
    });
  });
  describe('assignAppointmentResources', () => {
    it('should successfully call assignAppointmentResourcesWithHttpInfo', async () => {
      await instructBackendMock("service", "assignAppointmentResources", "200")
      const params = [
        generateMockData('String'),
        generateMockData('String'),
        generateMockData('AssignAppointmentResourcesRequest')
      ];
      const response = await instance.assignAppointmentResourcesWithHttpInfo(...params);

      expect(response.response).to.have.property('statusCode');
      expect(response.response.statusCode).to.equal(200)
      assertValidResponsePayload(200, response.data.payload);
    });
  });
  describe('cancelReservation', () => {
    it('should successfully call cancelReservationWithHttpInfo', async () => {
      await instructBackendMock("service", "cancelReservation", "204")
      const params = [
        generateMockData('String'),
        generateMockData('String', true)
      ];
      const response = await instance.cancelReservationWithHttpInfo(...params);

      expect(response.response).to.have.property('statusCode');
      expect(response.response.statusCode).to.equal(204)
      assertValidResponsePayload(204, response.data.payload);
    });
  });
  describe('cancelServiceJobByServiceJobId', () => {
    it('should successfully call cancelServiceJobByServiceJobIdWithHttpInfo', async () => {
      await instructBackendMock("service", "cancelServiceJobByServiceJobId", "200")
      const params = [
        generateMockData('String'),
        generateMockData('String')
      ];
      const response = await instance.cancelServiceJobByServiceJobIdWithHttpInfo(...params);

      expect(response.response).to.have.property('statusCode');
      expect(response.response.statusCode).to.equal(200)
      assertValidResponsePayload(200, response.data.payload);
    });
  });
  describe('completeServiceJobByServiceJobId', () => {
    it('should successfully call completeServiceJobByServiceJobIdWithHttpInfo', async () => {
      await instructBackendMock("service", "completeServiceJobByServiceJobId", "200")
      const params = [
        generateMockData('String')
      ];
      const response = await instance.completeServiceJobByServiceJobIdWithHttpInfo(...params);

      expect(response.response).to.have.property('statusCode');
      expect(response.response.statusCode).to.equal(200)
      assertValidResponsePayload(200, response.data.payload);
    });
  });
  describe('createReservation', () => {
    it('should successfully call createReservationWithHttpInfo', async () => {
      await instructBackendMock("service", "createReservation", "200")
      const params = [
        generateMockData('String', true),
        generateMockData('CreateReservationRequest')
      ];
      const response = await instance.createReservationWithHttpInfo(...params);

      expect(response.response).to.have.property('statusCode');
      expect(response.response.statusCode).to.equal(200)
      assertValidResponsePayload(200, response.data.payload);
    });
  });
  describe('createServiceDocumentUploadDestination', () => {
    it('should successfully call createServiceDocumentUploadDestinationWithHttpInfo', async () => {
      await instructBackendMock("service", "createServiceDocumentUploadDestination", "200")
      const params = [
        generateMockData('ServiceUploadDocument')
      ];
      const response = await instance.createServiceDocumentUploadDestinationWithHttpInfo(...params);

      expect(response.response).to.have.property('statusCode');
      expect(response.response.statusCode).to.equal(200)
      assertValidResponsePayload(200, response.data.payload);
    });
  });
  describe('getAppointmentSlots', () => {
    it('should successfully call getAppointmentSlotsWithHttpInfo', async () => {
      await instructBackendMock("service", "getAppointmentSlots", "200")
      const params = [
        generateMockData('String'),
        generateMockData('String'),
        generateMockData('String', true),
      ];
      const response = await instance.getAppointmentSlotsWithHttpInfo(...params);

      expect(response.response).to.have.property('statusCode');
      expect(response.response.statusCode).to.equal(200)
      assertValidResponsePayload(200, response.data.payload);
    });
  });
  describe('getAppointmmentSlotsByJobId', () => {
    it('should successfully call getAppointmmentSlotsByJobIdWithHttpInfo', async () => {
      await instructBackendMock("service", "getAppointmmentSlotsByJobId", "200")
      const params = [
        generateMockData('String'),
        generateMockData('String', true),
      ];
      const response = await instance.getAppointmmentSlotsByJobIdWithHttpInfo(...params);

      expect(response.response).to.have.property('statusCode');
      expect(response.response.statusCode).to.equal(200)
      assertValidResponsePayload(200, response.data.payload);
    });
  });
  describe('getFixedSlotCapacity', () => {
    it('should successfully call getFixedSlotCapacityWithHttpInfo', async () => {
      await instructBackendMock("service", "getFixedSlotCapacity", "200")
      const params = [
        generateMockData('String'),
        generateMockData('String', true),
        generateMockData('FixedSlotCapacityQuery'),
      ];
      const response = await instance.getFixedSlotCapacityWithHttpInfo(...params);

      expect(response.response).to.have.property('statusCode');
      expect(response.response.statusCode).to.equal(200)
      assertValidResponsePayload(200, response.data.payload);
    });
  });
  describe('getRangeSlotCapacity', () => {
    it('should successfully call getRangeSlotCapacityWithHttpInfo', async () => {
      await instructBackendMock("service", "getRangeSlotCapacity", "200")
      const params = [
        generateMockData('String'),
        generateMockData('String', true),
        generateMockData('RangeSlotCapacityQuery'),
      ];
      const response = await instance.getRangeSlotCapacityWithHttpInfo(...params);

      expect(response.response).to.have.property('statusCode');
      expect(response.response.statusCode).to.equal(200)
      assertValidResponsePayload(200, response.data.payload);
    });
  });
  describe('getServiceJobByServiceJobId', () => {
    it('should successfully call getServiceJobByServiceJobIdWithHttpInfo', async () => {
      await instructBackendMock("service", "getServiceJobByServiceJobId", "200")
      const params = [
        generateMockData('String')
      ];
      const response = await instance.getServiceJobByServiceJobIdWithHttpInfo(...params);

      expect(response.response).to.have.property('statusCode');
      expect(response.response.statusCode).to.equal(200)
      assertValidResponsePayload(200, response.data.payload);
    });
  });
  describe('getServiceJobs', () => {
    it('should successfully call getServiceJobsWithHttpInfo', async () => {
      await instructBackendMock("service", "getServiceJobs", "200")
      const params = [
        generateMockData('String', true),
      ];
      const response = await instance.getServiceJobsWithHttpInfo(...params);

      expect(response.response).to.have.property('statusCode');
      expect(response.response.statusCode).to.equal(200)
      assertValidResponsePayload(200, response.data.payload);
    });
  });
  describe('rescheduleAppointmentForServiceJobByServiceJobId', () => {
    it('should successfully call rescheduleAppointmentForServiceJobByServiceJobIdWithHttpInfo', async () => {
      await instructBackendMock("service", "rescheduleAppointmentForServiceJobByServiceJobId", "200")
      const params = [
        generateMockData('String'),
        generateMockData('String'),
        generateMockData('RescheduleAppointmentRequest')
      ];
      const response = await instance.rescheduleAppointmentForServiceJobByServiceJobIdWithHttpInfo(...params);

      expect(response.response).to.have.property('statusCode');
      expect(response.response.statusCode).to.equal(200)
      assertValidResponsePayload(200, response.data.payload);
    });
  });
  describe('setAppointmentFulfillmentData', () => {
    it('should successfully call setAppointmentFulfillmentDataWithHttpInfo', async () => {
      await instructBackendMock("service", "setAppointmentFulfillmentData", "204")
      const params = [
        generateMockData('String'),
        generateMockData('String'),
        generateMockData('SetAppointmentFulfillmentDataRequest')
      ];
      const response = await instance.setAppointmentFulfillmentDataWithHttpInfo(...params);

      expect(response.response).to.have.property('statusCode');
      expect(response.response.statusCode).to.equal(204)
      assertValidResponsePayload(204, response.data.payload);
    });
  });
  describe('updateReservation', () => {
    it('should successfully call updateReservationWithHttpInfo', async () => {
      await instructBackendMock("service", "updateReservation", "200")
      const params = [
        generateMockData('String'),
        generateMockData('String', true),
        generateMockData('UpdateReservationRequest')
      ];
      const response = await instance.updateReservationWithHttpInfo(...params);

      expect(response.response).to.have.property('statusCode');
      expect(response.response.statusCode).to.equal(200)
      assertValidResponsePayload(200, response.data.payload);
    });
  });
  describe('updateSchedule', () => {
    it('should successfully call updateScheduleWithHttpInfo', async () => {
      await instructBackendMock("service", "updateSchedule", "200")
      const params = [
        generateMockData('String'),
        generateMockData('String', true),
        generateMockData('UpdateScheduleRequest')
      ];
      const response = await instance.updateScheduleWithHttpInfo(...params);

      expect(response.response).to.have.property('statusCode');
      expect(response.response.statusCode).to.equal(200)
      assertValidResponsePayload(200, response.data.payload);
    });
  });

  describe('constructor', () => {
    it('should use default ApiClient when none provided', () => {
      const defaultInstance = new SellingPartnerApiForServices.ServiceApi();
      expect(defaultInstance.apiClient).to.equal(SellingPartnerApiForServices.ApiClient.instance);
    });

    it('should use provided ApiClient', () => {
      const customClient = new SellingPartnerApiForServices.ApiClient();
      const customInstance = new SellingPartnerApiForServices.ServiceApi(customClient);
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
        const ModelClass = SellingPartnerApiForServices[dataType];
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
