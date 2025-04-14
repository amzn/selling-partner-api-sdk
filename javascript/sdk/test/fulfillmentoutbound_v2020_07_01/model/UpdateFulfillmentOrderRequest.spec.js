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
import { join } from 'path';

const modulePath = join(process.cwd(), 'src', 'fulfillmentoutbound_v2020_07_01', 'index.js');
const SellingPartnerApisForFulfillmentOutbound = await import(modulePath);

let instance;

beforeEach(() => {
  try {
    instance = new SellingPartnerApisForFulfillmentOutbound.UpdateFulfillmentOrderRequest();
  } catch (e) {
    //Handle the cases when this model extends another model by using Model.call(this);
    instance = Object.create(SellingPartnerApisForFulfillmentOutbound.UpdateFulfillmentOrderRequest.prototype);
  }
});

afterEach(() => {
  instance = null;
});

describe('UpdateFulfillmentOrderRequest', () => {
  it('should create an instance of UpdateFulfillmentOrderRequest', () => {
    expect(instance).to.be.a(SellingPartnerApisForFulfillmentOutbound.UpdateFulfillmentOrderRequest);
  });

  it('should have the property marketplaceId', () => {
    // verify property exists
    expect(instance).to.have.property('marketplaceId');

    // set and verify value
    const expectedValue = generateMockData('String');
    instance.marketplaceId = expectedValue;
    expect(instance.marketplaceId).to.equal(expectedValue);
  });

  it('should have the property displayableOrderId', () => {
    // verify property exists
    expect(instance).to.have.property('displayableOrderId');

    // set and verify value
    const expectedValue = generateMockData('String');
    instance.displayableOrderId = expectedValue;
    expect(instance.displayableOrderId).to.equal(expectedValue);
  });

  it('should have the property displayableOrderDate', () => {
    // verify property exists
    expect(instance).to.have.property('displayableOrderDate');

    // set and verify value
    const expectedValue = generateMockData('Date');
    instance.displayableOrderDate = expectedValue;
    expect(instance.displayableOrderDate).to.equal(expectedValue);
  });

  it('should have the property displayableOrderComment', () => {
    // verify property exists
    expect(instance).to.have.property('displayableOrderComment');

    // set and verify value
    const expectedValue = generateMockData('String');
    instance.displayableOrderComment = expectedValue;
    expect(instance.displayableOrderComment).to.equal(expectedValue);
  });

  it('should have the property shippingSpeedCategory', () => {
    // verify property exists
    expect(instance).to.have.property('shippingSpeedCategory');

    // set and verify value
    const expectedValue = generateMockData('ShippingSpeedCategory');
    instance.shippingSpeedCategory = expectedValue;
    expect(instance.shippingSpeedCategory).to.equal(expectedValue);
  });

  it('should have the property destinationAddress', () => {
    // verify property exists
    expect(instance).to.have.property('destinationAddress');

    // set and verify value
    const expectedValue = generateMockData('Address');
    instance.destinationAddress = expectedValue;
    expect(instance.destinationAddress).to.equal(expectedValue);
  });

  it('should have the property fulfillmentAction', () => {
    // verify property exists
    expect(instance).to.have.property('fulfillmentAction');

    // set and verify value
    const expectedValue = generateMockData('FulfillmentAction');
    instance.fulfillmentAction = expectedValue;
    expect(instance.fulfillmentAction).to.equal(expectedValue);
  });

  it('should have the property fulfillmentPolicy', () => {
    // verify property exists
    expect(instance).to.have.property('fulfillmentPolicy');

    // set and verify value
    const expectedValue = generateMockData('FulfillmentPolicy');
    instance.fulfillmentPolicy = expectedValue;
    expect(instance.fulfillmentPolicy).to.equal(expectedValue);
  });

  it('should have the property shipFromCountryCode', () => {
    // verify property exists
    expect(instance).to.have.property('shipFromCountryCode');

    // set and verify value
    const expectedValue = generateMockData('String');
    instance.shipFromCountryCode = expectedValue;
    expect(instance.shipFromCountryCode).to.equal(expectedValue);
  });

  it('should have the property notificationEmails', () => {
    // verify property exists
    expect(instance).to.have.property('notificationEmails');

    // set and verify value
    const expectedValue = generateMockData('String', true);
    instance.notificationEmails = expectedValue;
    expect(instance.notificationEmails).to.equal(expectedValue);
  });

  it('should have the property featureConstraints', () => {
    // verify property exists
    expect(instance).to.have.property('featureConstraints');

    // set and verify value
    const expectedValue = generateMockData('FeatureSettings', true);
    instance.featureConstraints = expectedValue;
    expect(instance.featureConstraints).to.equal(expectedValue);
  });

  it('should have the property items', () => {
    // verify property exists
    expect(instance).to.have.property('items');

    // set and verify value
    const expectedValue = generateMockData('UpdateFulfillmentOrderItem', true);
    instance.items = expectedValue;
    expect(instance.items).to.equal(expectedValue);
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
