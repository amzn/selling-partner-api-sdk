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
    instance = new SellingPartnerApiForMerchantFulfillment.AdditionalSellerInputs();
  } catch (e) {
    //Handle the cases when this model extends another model by using Model.call(this);
    instance = Object.create(SellingPartnerApiForMerchantFulfillment.AdditionalSellerInputs.prototype);
  }
});

afterEach(() => {
  instance = null;
});

describe('AdditionalSellerInputs', () => {
  it('should create an instance of AdditionalSellerInputs', () => {
    expect(instance).to.be.a(SellingPartnerApiForMerchantFulfillment.AdditionalSellerInputs);
  });

  it('should have the property additionalInputFieldName', () => {
    // verify property exists
    expect(instance).to.have.property('additionalInputFieldName');

    // set and verify value
    const expectedValue = generateMockData('String');
    instance.additionalInputFieldName = expectedValue;
    expect(instance.additionalInputFieldName).to.equal(expectedValue);
  });

  it('should have the property additionalSellerInput', () => {
    // verify property exists
    expect(instance).to.have.property('additionalSellerInput');

    // set and verify value
    const expectedValue = generateMockData('AdditionalSellerInput');
    instance.additionalSellerInput = expectedValue;
    expect(instance.additionalSellerInput).to.equal(expectedValue);
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
