/**
 * Selling Partner API for Retail Procurement Orders
 * The Selling Partner API for Retail Procurement Orders provides programmatic access to vendor orders data.
 *
 * The version of the OpenAPI document: v1
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import expect from 'expect.js';
import { join } from 'path';

const modulePath = join(process.cwd(), 'src', 'vendororders_v1', 'index.js');
const SellingPartnerApiForRetailProcurementOrders = await import(modulePath);

let instance;

beforeEach(() => {
  try {
    instance = new SellingPartnerApiForRetailProcurementOrders.OrderItemAcknowledgement();
  } catch (e) {
    //Handle the cases when this model extends another model by using Model.call(this);
    instance = Object.create(SellingPartnerApiForRetailProcurementOrders.OrderItemAcknowledgement.prototype);
  }
});

afterEach(() => {
  instance = null;
});

describe('OrderItemAcknowledgement', () => {
  it('should create an instance of OrderItemAcknowledgement', () => {
    expect(instance).to.be.a(SellingPartnerApiForRetailProcurementOrders.OrderItemAcknowledgement);
  });

  it('should have the property acknowledgementCode', () => {
    // verify property exists
    expect(instance).to.have.property('acknowledgementCode');

    // set and verify value
    const expectedValue = ['Accepted', 'Backordered', 'Rejected', ][0];
    instance.acknowledgementCode = expectedValue;
    expect(instance.acknowledgementCode).to.equal(expectedValue);
  });

  it('should have the property acknowledgedQuantity', () => {
    // verify property exists
    expect(instance).to.have.property('acknowledgedQuantity');

    // set and verify value
    const expectedValue = generateMockData('ItemQuantity');
    instance.acknowledgedQuantity = expectedValue;
    expect(instance.acknowledgedQuantity).to.equal(expectedValue);
  });

  it('should have the property scheduledShipDate', () => {
    // verify property exists
    expect(instance).to.have.property('scheduledShipDate');

    // set and verify value
    const expectedValue = generateMockData('Date');
    instance.scheduledShipDate = expectedValue;
    expect(instance.scheduledShipDate).to.equal(expectedValue);
  });

  it('should have the property scheduledDeliveryDate', () => {
    // verify property exists
    expect(instance).to.have.property('scheduledDeliveryDate');

    // set and verify value
    const expectedValue = generateMockData('Date');
    instance.scheduledDeliveryDate = expectedValue;
    expect(instance.scheduledDeliveryDate).to.equal(expectedValue);
  });

  it('should have the property rejectionReason', () => {
    // verify property exists
    expect(instance).to.have.property('rejectionReason');

    // set and verify value
    const expectedValue = ['TemporarilyUnavailable', 'InvalidProductIdentifier', 'ObsoleteProduct', ][0];
    instance.rejectionReason = expectedValue;
    expect(instance.rejectionReason).to.equal(expectedValue);
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
        const ModelClass = SellingPartnerApiForRetailProcurementOrders[dataType];
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
