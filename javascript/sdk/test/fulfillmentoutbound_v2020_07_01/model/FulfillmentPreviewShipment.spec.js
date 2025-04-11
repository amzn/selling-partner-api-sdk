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
    instance = new SellingPartnerApisForFulfillmentOutbound.FulfillmentPreviewShipment();
  } catch (e) {
    //Handle the cases when this model extends another model by using Model.call(this);
    instance = Object.create(SellingPartnerApisForFulfillmentOutbound.FulfillmentPreviewShipment.prototype);
  }
});

afterEach(() => {
  instance = null;
});

describe('FulfillmentPreviewShipment', () => {
  it('should create an instance of FulfillmentPreviewShipment', () => {
    expect(instance).to.be.a(SellingPartnerApisForFulfillmentOutbound.FulfillmentPreviewShipment);
  });

  it('should have the property earliestShipDate', () => {
    // verify property exists
    expect(instance).to.have.property('earliestShipDate');

    // set and verify value
    const expectedValue = generateMockData('Date');
    instance.earliestShipDate = expectedValue;
    expect(instance.earliestShipDate).to.equal(expectedValue);
  });

  it('should have the property latestShipDate', () => {
    // verify property exists
    expect(instance).to.have.property('latestShipDate');

    // set and verify value
    const expectedValue = generateMockData('Date');
    instance.latestShipDate = expectedValue;
    expect(instance.latestShipDate).to.equal(expectedValue);
  });

  it('should have the property earliestArrivalDate', () => {
    // verify property exists
    expect(instance).to.have.property('earliestArrivalDate');

    // set and verify value
    const expectedValue = generateMockData('Date');
    instance.earliestArrivalDate = expectedValue;
    expect(instance.earliestArrivalDate).to.equal(expectedValue);
  });

  it('should have the property latestArrivalDate', () => {
    // verify property exists
    expect(instance).to.have.property('latestArrivalDate');

    // set and verify value
    const expectedValue = generateMockData('Date');
    instance.latestArrivalDate = expectedValue;
    expect(instance.latestArrivalDate).to.equal(expectedValue);
  });

  it('should have the property shippingNotes', () => {
    // verify property exists
    expect(instance).to.have.property('shippingNotes');

    // set and verify value
    const expectedValue = generateMockData('String', true);
    instance.shippingNotes = expectedValue;
    expect(instance.shippingNotes).to.equal(expectedValue);
  });

  it('should have the property fulfillmentPreviewItems', () => {
    // verify property exists
    expect(instance).to.have.property('fulfillmentPreviewItems');

    // set and verify value
    const expectedValue = generateMockData('FulfillmentPreviewItem', true);
    instance.fulfillmentPreviewItems = expectedValue;
    expect(instance.fulfillmentPreviewItems).to.equal(expectedValue);
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
