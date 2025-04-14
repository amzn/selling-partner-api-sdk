/**
 * The Selling Partner API for FBA inbound operations.
 * The Selling Partner API for Fulfillment By Amazon (FBA) Inbound. The FBA Inbound API enables building inbound workflows to create, manage, and send shipments into Amazon's fulfillment network. The API has interoperability with the Send-to-Amazon user interface.
 *
 * The version of the OpenAPI document: 2024-03-20
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import expect from 'expect.js';
import { join } from 'path';

const modulePath = join(process.cwd(), 'src', 'fulfillmentinbound_v2024_03_20', 'index.js');
const TheSellingPartnerApiForFbaInboundOperations = await import(modulePath);

let instance;

beforeEach(() => {
  try {
    instance = new TheSellingPartnerApiForFbaInboundOperations.ItemInput();
  } catch (e) {
    //Handle the cases when this model extends another model by using Model.call(this);
    instance = Object.create(TheSellingPartnerApiForFbaInboundOperations.ItemInput.prototype);
  }
});

afterEach(() => {
  instance = null;
});

describe('ItemInput', () => {
  it('should create an instance of ItemInput', () => {
    expect(instance).to.be.a(TheSellingPartnerApiForFbaInboundOperations.ItemInput);
  });

  it('should have the property expiration', () => {
    // verify property exists
    expect(instance).to.have.property('expiration');

    // set and verify value
    const expectedValue = generateMockData('String');
    instance.expiration = expectedValue;
    expect(instance.expiration).to.equal(expectedValue);
  });

  it('should have the property labelOwner', () => {
    // verify property exists
    expect(instance).to.have.property('labelOwner');

    // set and verify value
    const expectedValue = generateMockData('LabelOwner');
    instance.labelOwner = expectedValue;
    expect(instance.labelOwner).to.equal(expectedValue);
  });

  it('should have the property manufacturingLotCode', () => {
    // verify property exists
    expect(instance).to.have.property('manufacturingLotCode');

    // set and verify value
    const expectedValue = generateMockData('String');
    instance.manufacturingLotCode = expectedValue;
    expect(instance.manufacturingLotCode).to.equal(expectedValue);
  });

  it('should have the property msku', () => {
    // verify property exists
    expect(instance).to.have.property('msku');

    // set and verify value
    const expectedValue = generateMockData('String');
    instance.msku = expectedValue;
    expect(instance.msku).to.equal(expectedValue);
  });

  it('should have the property prepOwner', () => {
    // verify property exists
    expect(instance).to.have.property('prepOwner');

    // set and verify value
    const expectedValue = generateMockData('PrepOwner');
    instance.prepOwner = expectedValue;
    expect(instance.prepOwner).to.equal(expectedValue);
  });

  it('should have the property quantity', () => {
    // verify property exists
    expect(instance).to.have.property('quantity');

    // set and verify value
    const expectedValue = generateMockData('Number');
    instance.quantity = expectedValue;
    expect(instance.quantity).to.equal(expectedValue);
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
        const ModelClass = TheSellingPartnerApiForFbaInboundOperations[dataType];
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
