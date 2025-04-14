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
    instance = new SellingPartnerApisForFulfillmentOutbound.DeliveryInformation();
  } catch (e) {
    //Handle the cases when this model extends another model by using Model.call(this);
    instance = Object.create(SellingPartnerApisForFulfillmentOutbound.DeliveryInformation.prototype);
  }
});

afterEach(() => {
  instance = null;
});

describe('DeliveryInformation', () => {
  it('should create an instance of DeliveryInformation', () => {
    expect(instance).to.be.a(SellingPartnerApisForFulfillmentOutbound.DeliveryInformation);
  });

  it('should have the property deliveryDocumentList', () => {
    // verify property exists
    expect(instance).to.have.property('deliveryDocumentList');

    // set and verify value
    const expectedValue = generateMockData('DeliveryDocument', true);
    instance.deliveryDocumentList = expectedValue;
    expect(instance.deliveryDocumentList).to.equal(expectedValue);
  });

  it('should have the property dropOffLocation', () => {
    // verify property exists
    expect(instance).to.have.property('dropOffLocation');

    // set and verify value
    const expectedValue = generateMockData('DropOffLocation');
    instance.dropOffLocation = expectedValue;
    expect(instance.dropOffLocation).to.equal(expectedValue);
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
