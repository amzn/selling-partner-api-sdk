/**
 * Selling Partner API for Retail Procurement Shipments
 * The Selling Partner API for Retail Procurement Shipments provides programmatic access to retail shipping data for vendors.
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

const modulePath = join(process.cwd(), 'src', 'vendorshipments_v1', 'index.js');
const SellingPartnerApiForRetailProcurementShipments = await import(modulePath);

let instance;

beforeEach(() => {
  try {
    instance = new SellingPartnerApiForRetailProcurementShipments.Pallet();
  } catch (e) {
    //Handle the cases when this model extends another model by using Model.call(this);
    instance = Object.create(SellingPartnerApiForRetailProcurementShipments.Pallet.prototype);
  }
});

afterEach(() => {
  instance = null;
});

describe('Pallet', () => {
  it('should create an instance of Pallet', () => {
    expect(instance).to.be.a(SellingPartnerApiForRetailProcurementShipments.Pallet);
  });

  it('should have the property palletIdentifiers', () => {
    // verify property exists
    expect(instance).to.have.property('palletIdentifiers');

    // set and verify value
    const expectedValue = generateMockData('ContainerIdentification', true);
    instance.palletIdentifiers = expectedValue;
    expect(instance.palletIdentifiers).to.equal(expectedValue);
  });

  it('should have the property tier', () => {
    // verify property exists
    expect(instance).to.have.property('tier');

    // set and verify value
    const expectedValue = generateMockData('Number');
    instance.tier = expectedValue;
    expect(instance.tier).to.equal(expectedValue);
  });

  it('should have the property block', () => {
    // verify property exists
    expect(instance).to.have.property('block');

    // set and verify value
    const expectedValue = generateMockData('Number');
    instance.block = expectedValue;
    expect(instance.block).to.equal(expectedValue);
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

  it('should have the property cartonReferenceDetails', () => {
    // verify property exists
    expect(instance).to.have.property('cartonReferenceDetails');

    // set and verify value
    const expectedValue = generateMockData('CartonReferenceDetails');
    instance.cartonReferenceDetails = expectedValue;
    expect(instance.cartonReferenceDetails).to.equal(expectedValue);
  });

  it('should have the property items', () => {
    // verify property exists
    expect(instance).to.have.property('items');

    // set and verify value
    const expectedValue = generateMockData('ContainerItem', true);
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
        const ModelClass = SellingPartnerApiForRetailProcurementShipments[dataType];
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
