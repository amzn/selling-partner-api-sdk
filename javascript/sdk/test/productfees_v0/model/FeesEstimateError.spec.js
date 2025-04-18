/**
 * Selling Partner API for Product Fees
 * The Selling Partner API for Product Fees lets you programmatically retrieve estimated fees for a product. You can then account for those fees in your pricing.
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

const modulePath = join(process.cwd(), 'src', 'productfees_v0', 'index.js');
const SellingPartnerApiForProductFees = await import(modulePath);

let instance;

beforeEach(() => {
  try {
    instance = new SellingPartnerApiForProductFees.FeesEstimateError();
  } catch (e) {
    //Handle the cases when this model extends another model by using Model.call(this);
    instance = Object.create(SellingPartnerApiForProductFees.FeesEstimateError.prototype);
  }
});

afterEach(() => {
  instance = null;
});

describe('FeesEstimateError', () => {
  it('should create an instance of FeesEstimateError', () => {
    expect(instance).to.be.a(SellingPartnerApiForProductFees.FeesEstimateError);
  });

  it('should have the property type', () => {
    // verify property exists
    expect(instance).to.have.property('type');

    // set and verify value
    const expectedValue = generateMockData('String');
    instance.type = expectedValue;
    expect(instance.type).to.equal(expectedValue);
  });

  it('should have the property code', () => {
    // verify property exists
    expect(instance).to.have.property('code');

    // set and verify value
    const expectedValue = generateMockData('String');
    instance.code = expectedValue;
    expect(instance.code).to.equal(expectedValue);
  });

  it('should have the property message', () => {
    // verify property exists
    expect(instance).to.have.property('message');

    // set and verify value
    const expectedValue = generateMockData('String');
    instance.message = expectedValue;
    expect(instance.message).to.equal(expectedValue);
  });

  it('should have the property detail', () => {
    // verify property exists
    expect(instance).to.have.property('detail');

    // set and verify value
    const expectedValue = generateMockData('Object', true);
    instance.detail = expectedValue;
    expect(instance.detail).to.equal(expectedValue);
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
        const ModelClass = SellingPartnerApiForProductFees[dataType];
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
