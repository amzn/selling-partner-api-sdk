/**
 * Selling Partner API for Merchant Fulfillment
 * With the Selling Partner API for Merchant Fulfillment, you can build applications that sellers can use to purchase shipping for non-Prime and Prime orders using Amazon's Buy Shipping Services.
 *
 * The version of the OpenAPI document: v0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import expect from 'expect.js';
import { join } from 'path';

const modulePath = join(process.cwd(), 'src', 'merchantfulfillment_v0', 'index.js');
const SellingPartnerApiForMerchantFulfillment = await import(modulePath);

let instance;

beforeEach(() => {
  try {
    instance = new SellingPartnerApiForMerchantFulfillment.CreateShipmentRequest();
  } catch (e) {
    //Handle the cases when this model extends another model by using Model.call(this);
    instance = Object.create(SellingPartnerApiForMerchantFulfillment.CreateShipmentRequest.prototype);
  }
});

afterEach(() => {
  instance = null;
});

describe('CreateShipmentRequest', () => {
  it('should create an instance of CreateShipmentRequest', () => {
    expect(instance).to.be.a(SellingPartnerApiForMerchantFulfillment.CreateShipmentRequest);
  });

  it('should have the property shipmentRequestDetails', () => {
    // verify property exists
    expect(instance).to.have.property('shipmentRequestDetails');

    // set and verify value
    const expectedValue = generateMockData('ShipmentRequestDetails');
    instance.shipmentRequestDetails = expectedValue;
    expect(instance.shipmentRequestDetails).to.equal(expectedValue);
  });

  it('should have the property shippingServiceId', () => {
    // verify property exists
    expect(instance).to.have.property('shippingServiceId');

    // set and verify value
    const expectedValue = generateMockData('String');
    instance.shippingServiceId = expectedValue;
    expect(instance.shippingServiceId).to.equal(expectedValue);
  });

  it('should have the property shippingServiceOfferId', () => {
    // verify property exists
    expect(instance).to.have.property('shippingServiceOfferId');

    // set and verify value
    const expectedValue = generateMockData('String');
    instance.shippingServiceOfferId = expectedValue;
    expect(instance.shippingServiceOfferId).to.equal(expectedValue);
  });

  it('should have the property hazmatType', () => {
    // verify property exists
    expect(instance).to.have.property('hazmatType');

    // set and verify value
    const expectedValue = generateMockData('HazmatType');
    instance.hazmatType = expectedValue;
    expect(instance.hazmatType).to.equal(expectedValue);
  });

  it('should have the property labelFormatOption', () => {
    // verify property exists
    expect(instance).to.have.property('labelFormatOption');

    // set and verify value
    const expectedValue = generateMockData('LabelFormatOptionRequest');
    instance.labelFormatOption = expectedValue;
    expect(instance.labelFormatOption).to.equal(expectedValue);
  });

  it('should have the property shipmentLevelSellerInputsList', () => {
    // verify property exists
    expect(instance).to.have.property('shipmentLevelSellerInputsList');

    // set and verify value
    const expectedValue = generateMockData('AdditionalSellerInputs', true);
    instance.shipmentLevelSellerInputsList = expectedValue;
    expect(instance.shipmentLevelSellerInputsList).to.equal(expectedValue);
  });

});

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
        const ModelClass = SellingPartnerApiForMerchantFulfillment[dataType];
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
