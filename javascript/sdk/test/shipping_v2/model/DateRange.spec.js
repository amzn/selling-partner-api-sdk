/**
 * Amazon Shipping API
 * The Amazon Shipping API is designed to support outbound shipping use cases both for orders originating on Amazon-owned marketplaces as well as external channels/marketplaces. With these APIs, you can request shipping rates, create shipments, cancel shipments, and track shipments.
 *
 * The version of the OpenAPI document: v2
 * Contact: swa-api-core@amazon.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import expect from 'expect.js';
import { join } from 'path';

const modulePath = join(process.cwd(), 'src', 'shipping_v2', 'index.js');
const AmazonShippingApi = await import(modulePath);

let instance;

beforeEach(() => {
  try {
    instance = new AmazonShippingApi.DateRange();
  } catch (e) {
    //Handle the cases when this model extends another model by using Model.call(this);
    instance = Object.create(AmazonShippingApi.DateRange.prototype);
  }
});

afterEach(() => {
  instance = null;
});

describe('DateRange', () => {
  it('should create an instance of DateRange', () => {
    expect(instance).to.be.a(AmazonShippingApi.DateRange);
  });

  it('should have the property startDate', () => {
    // verify property exists
    expect(instance).to.have.property('startDate');

    // set and verify value
    const expectedValue = generateMockData('String');
    instance.startDate = expectedValue;
    expect(instance.startDate).to.equal(expectedValue);
  });

  it('should have the property endDate', () => {
    // verify property exists
    expect(instance).to.have.property('endDate');

    // set and verify value
    const expectedValue = generateMockData('String');
    instance.endDate = expectedValue;
    expect(instance.endDate).to.equal(expectedValue);
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
        const ModelClass = AmazonShippingApi[dataType];
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
