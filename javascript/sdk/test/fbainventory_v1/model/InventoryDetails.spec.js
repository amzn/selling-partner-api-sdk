/**
 * Selling Partner API for FBA Inventory
 * The Selling Partner API for FBA Inventory lets you programmatically retrieve information about inventory in Amazon's fulfillment network.
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

const modulePath = join(process.cwd(), 'src', 'fbainventory_v1', 'index.js');
const SellingPartnerApiForFbaInventory = await import(modulePath);

let instance;

beforeEach(() => {
  try {
    instance = new SellingPartnerApiForFbaInventory.InventoryDetails();
  } catch (e) {
    //Handle the cases when this model extends another model by using Model.call(this);
    instance = Object.create(SellingPartnerApiForFbaInventory.InventoryDetails.prototype);
  }
});

afterEach(() => {
  instance = null;
});

describe('InventoryDetails', () => {
  it('should create an instance of InventoryDetails', () => {
    expect(instance).to.be.a(SellingPartnerApiForFbaInventory.InventoryDetails);
  });

  it('should have the property fulfillableQuantity', () => {
    // verify property exists
    expect(instance).to.have.property('fulfillableQuantity');

    // set and verify value
    const expectedValue = generateMockData('Number');
    instance.fulfillableQuantity = expectedValue;
    expect(instance.fulfillableQuantity).to.equal(expectedValue);
  });

  it('should have the property inboundWorkingQuantity', () => {
    // verify property exists
    expect(instance).to.have.property('inboundWorkingQuantity');

    // set and verify value
    const expectedValue = generateMockData('Number');
    instance.inboundWorkingQuantity = expectedValue;
    expect(instance.inboundWorkingQuantity).to.equal(expectedValue);
  });

  it('should have the property inboundShippedQuantity', () => {
    // verify property exists
    expect(instance).to.have.property('inboundShippedQuantity');

    // set and verify value
    const expectedValue = generateMockData('Number');
    instance.inboundShippedQuantity = expectedValue;
    expect(instance.inboundShippedQuantity).to.equal(expectedValue);
  });

  it('should have the property inboundReceivingQuantity', () => {
    // verify property exists
    expect(instance).to.have.property('inboundReceivingQuantity');

    // set and verify value
    const expectedValue = generateMockData('Number');
    instance.inboundReceivingQuantity = expectedValue;
    expect(instance.inboundReceivingQuantity).to.equal(expectedValue);
  });

  it('should have the property reservedQuantity', () => {
    // verify property exists
    expect(instance).to.have.property('reservedQuantity');

    // set and verify value
    const expectedValue = generateMockData('ReservedQuantity');
    instance.reservedQuantity = expectedValue;
    expect(instance.reservedQuantity).to.equal(expectedValue);
  });

  it('should have the property researchingQuantity', () => {
    // verify property exists
    expect(instance).to.have.property('researchingQuantity');

    // set and verify value
    const expectedValue = generateMockData('ResearchingQuantity');
    instance.researchingQuantity = expectedValue;
    expect(instance.researchingQuantity).to.equal(expectedValue);
  });

  it('should have the property unfulfillableQuantity', () => {
    // verify property exists
    expect(instance).to.have.property('unfulfillableQuantity');

    // set and verify value
    const expectedValue = generateMockData('UnfulfillableQuantity');
    instance.unfulfillableQuantity = expectedValue;
    expect(instance.unfulfillableQuantity).to.equal(expectedValue);
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
        const ModelClass = SellingPartnerApiForFbaInventory[dataType];
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
