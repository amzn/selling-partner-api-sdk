/**
 * Selling Partner API for Direct Fulfillment Inventory Updates
 * The Selling Partner API for Direct Fulfillment Inventory Updates provides programmatic access to a direct fulfillment vendor's inventory updates.
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

const modulePath = join(process.cwd(), 'src', 'vendordfinventory_v1', 'index.js');
const SellingPartnerApiForDirectFulfillmentInventoryUpdates = await import(modulePath);

let instance;

beforeEach(() => {
  try {
    instance = new SellingPartnerApiForDirectFulfillmentInventoryUpdates.SubmitInventoryUpdateResponse();
  } catch (e) {
    //Handle the cases when this model extends another model by using Model.call(this);
    instance = Object.create(SellingPartnerApiForDirectFulfillmentInventoryUpdates.SubmitInventoryUpdateResponse.prototype);
  }
});

afterEach(() => {
  instance = null;
});

describe('SubmitInventoryUpdateResponse', () => {
  it('should create an instance of SubmitInventoryUpdateResponse', () => {
    expect(instance).to.be.a(SellingPartnerApiForDirectFulfillmentInventoryUpdates.SubmitInventoryUpdateResponse);
  });

  it('should have the property payload', () => {
    // verify property exists
    expect(instance).to.have.property('payload');

    // set and verify value
    const expectedValue = generateMockData('TransactionReference');
    instance.payload = expectedValue;
    expect(instance.payload).to.equal(expectedValue);
  });

  it('should have the property errors', () => {
    // verify property exists
    expect(instance).to.have.property('errors');

    // set and verify value
    const expectedValue = generateMockData('Error', true);
    instance.errors = expectedValue;
    expect(instance.errors).to.equal(expectedValue);
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
        const ModelClass = SellingPartnerApiForDirectFulfillmentInventoryUpdates[dataType];
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
