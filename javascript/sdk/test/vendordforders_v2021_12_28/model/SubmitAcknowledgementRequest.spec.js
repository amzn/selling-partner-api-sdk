/**
 * Selling Partner API for Direct Fulfillment Orders
 * The Selling Partner API for Direct Fulfillment Orders provides programmatic access to a direct fulfillment vendor's order data.
 *
 * The version of the OpenAPI document: 2021-12-28
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import expect from 'expect.js';
import { join } from 'path';

const modulePath = join(process.cwd(), 'src', 'vendordforders_v2021_12_28', 'index.js');
const SellingPartnerApiForDirectFulfillmentOrders = await import(modulePath);

let instance;

beforeEach(() => {
  try {
    instance = new SellingPartnerApiForDirectFulfillmentOrders.SubmitAcknowledgementRequest();
  } catch (e) {
    //Handle the cases when this model extends another model by using Model.call(this);
    instance = Object.create(SellingPartnerApiForDirectFulfillmentOrders.SubmitAcknowledgementRequest.prototype);
  }
});

afterEach(() => {
  instance = null;
});

describe('SubmitAcknowledgementRequest', () => {
  it('should create an instance of SubmitAcknowledgementRequest', () => {
    expect(instance).to.be.a(SellingPartnerApiForDirectFulfillmentOrders.SubmitAcknowledgementRequest);
  });

  it('should have the property orderAcknowledgements', () => {
    // verify property exists
    expect(instance).to.have.property('orderAcknowledgements');

    // set and verify value
    const expectedValue = generateMockData('OrderAcknowledgementItem', true);
    instance.orderAcknowledgements = expectedValue;
    expect(instance.orderAcknowledgements).to.equal(expectedValue);
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
        const ModelClass = SellingPartnerApiForDirectFulfillmentOrders[dataType];
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
