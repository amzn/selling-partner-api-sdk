/**
 * Selling Partner API for Fulfillment Inbound
 * The Selling Partner API for Fulfillment Inbound lets you create applications that create and update inbound shipments of inventory to Amazon's fulfillment network.
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

const modulePath = join(process.cwd(), 'src', 'fulfillmentinbound_v0', 'index.js');
const SellingPartnerApiForFulfillmentInbound = await import(modulePath);

let instance;

beforeEach(() => {
  try {
    instance = new SellingPartnerApiForFulfillmentInbound.GetShipmentsResult();
  } catch (e) {
    //Handle the cases when this model extends another model by using Model.call(this);
    instance = Object.create(SellingPartnerApiForFulfillmentInbound.GetShipmentsResult.prototype);
  }
});

afterEach(() => {
  instance = null;
});

describe('GetShipmentsResult', () => {
  it('should create an instance of GetShipmentsResult', () => {
    expect(instance).to.be.a(SellingPartnerApiForFulfillmentInbound.GetShipmentsResult);
  });

  it('should have the property shipmentData', () => {
    // verify property exists
    expect(instance).to.have.property('shipmentData');

    // set and verify value
    const expectedValue = generateMockData('InboundShipmentInfo', true);
    instance.shipmentData = expectedValue;
    expect(instance.shipmentData).to.equal(expectedValue);
  });

  it('should have the property nextToken', () => {
    // verify property exists
    expect(instance).to.have.property('nextToken');

    // set and verify value
    const expectedValue = generateMockData('String');
    instance.nextToken = expectedValue;
    expect(instance.nextToken).to.equal(expectedValue);
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
        const ModelClass = SellingPartnerApiForFulfillmentInbound[dataType];
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
