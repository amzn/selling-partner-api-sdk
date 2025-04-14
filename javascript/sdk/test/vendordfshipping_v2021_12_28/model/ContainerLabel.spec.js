/**
 * Selling Partner API for Direct Fulfillment Shipping
 * Use the Selling Partner API for Direct Fulfillment Shipping to access a direct fulfillment vendor's shipping data.
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

const modulePath = join(process.cwd(), 'src', 'vendordfshipping_v2021_12_28', 'index.js');
const SellingPartnerApiForDirectFulfillmentShipping = await import(modulePath);

let instance;

beforeEach(() => {
  try {
    instance = new SellingPartnerApiForDirectFulfillmentShipping.ContainerLabel();
  } catch (e) {
    //Handle the cases when this model extends another model by using Model.call(this);
    instance = Object.create(SellingPartnerApiForDirectFulfillmentShipping.ContainerLabel.prototype);
  }
});

afterEach(() => {
  instance = null;
});

describe('ContainerLabel', () => {
  it('should create an instance of ContainerLabel', () => {
    expect(instance).to.be.a(SellingPartnerApiForDirectFulfillmentShipping.ContainerLabel);
  });

  it('should have the property containerTrackingNumber', () => {
    // verify property exists
    expect(instance).to.have.property('containerTrackingNumber');

    // set and verify value
    const expectedValue = generateMockData('String');
    instance.containerTrackingNumber = expectedValue;
    expect(instance.containerTrackingNumber).to.equal(expectedValue);
  });

  it('should have the property content', () => {
    // verify property exists
    expect(instance).to.have.property('content');

    // set and verify value
    const expectedValue = generateMockData('String');
    instance.content = expectedValue;
    expect(instance.content).to.equal(expectedValue);
  });

  it('should have the property format', () => {
    // verify property exists
    expect(instance).to.have.property('format');

    // set and verify value
    const expectedValue = generateMockData('ContainerLabelFormat');
    instance.format = expectedValue;
    expect(instance.format).to.equal(expectedValue);
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
        const ModelClass = SellingPartnerApiForDirectFulfillmentShipping[dataType];
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
