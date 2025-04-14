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
    instance = new AmazonShippingApi.Package();
  } catch (e) {
    //Handle the cases when this model extends another model by using Model.call(this);
    instance = Object.create(AmazonShippingApi.Package.prototype);
  }
});

afterEach(() => {
  instance = null;
});

describe('Package', () => {
  it('should create an instance of Package', () => {
    expect(instance).to.be.a(AmazonShippingApi.Package);
  });

  it('should have the property dimensions', () => {
    // verify property exists
    expect(instance).to.have.property('dimensions');

    // set and verify value
    const expectedValue = generateMockData('Dimensions');
    instance.dimensions = expectedValue;
    expect(instance.dimensions).to.equal(expectedValue);
  });

  it('should have the property weight', () => {
    // verify property exists
    expect(instance).to.have.property('weight');

    // set and verify value
    const expectedValue = generateMockData('Weight');
    instance.weight = expectedValue;
    expect(instance.weight).to.equal(expectedValue);
  });

  it('should have the property insuredValue', () => {
    // verify property exists
    expect(instance).to.have.property('insuredValue');

    // set and verify value
    const expectedValue = generateMockData('Currency');
    instance.insuredValue = expectedValue;
    expect(instance.insuredValue).to.equal(expectedValue);
  });

  it('should have the property isHazmat', () => {
    // verify property exists
    expect(instance).to.have.property('isHazmat');

    // set and verify value
    const expectedValue = generateMockData('Boolean');
    instance.isHazmat = expectedValue;
    expect(instance.isHazmat).to.equal(expectedValue);
  });

  it('should have the property sellerDisplayName', () => {
    // verify property exists
    expect(instance).to.have.property('sellerDisplayName');

    // set and verify value
    const expectedValue = generateMockData('String');
    instance.sellerDisplayName = expectedValue;
    expect(instance.sellerDisplayName).to.equal(expectedValue);
  });

  it('should have the property charges', () => {
    // verify property exists
    expect(instance).to.have.property('charges');

    // set and verify value
    const expectedValue = generateMockData('ChargeComponent', true);
    instance.charges = expectedValue;
    expect(instance.charges).to.equal(expectedValue);
  });

  it('should have the property packageClientReferenceId', () => {
    // verify property exists
    expect(instance).to.have.property('packageClientReferenceId');

    // set and verify value
    const expectedValue = generateMockData('String');
    instance.packageClientReferenceId = expectedValue;
    expect(instance.packageClientReferenceId).to.equal(expectedValue);
  });

  it('should have the property items', () => {
    // verify property exists
    expect(instance).to.have.property('items');

    // set and verify value
    const expectedValue = generateMockData('Item', true);
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
