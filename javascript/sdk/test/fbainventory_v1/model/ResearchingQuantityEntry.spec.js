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
    instance = new SellingPartnerApiForFbaInventory.ResearchingQuantityEntry();
  } catch (e) {
    //Handle the cases when this model extends another model by using Model.call(this);
    instance = Object.create(SellingPartnerApiForFbaInventory.ResearchingQuantityEntry.prototype);
  }
});

afterEach(() => {
  instance = null;
});

describe('ResearchingQuantityEntry', () => {
  it('should create an instance of ResearchingQuantityEntry', () => {
    expect(instance).to.be.a(SellingPartnerApiForFbaInventory.ResearchingQuantityEntry);
  });

  it('should have the property name', () => {
    // verify property exists
    expect(instance).to.have.property('name');

    // set and verify value
    const expectedValue = ['researchingQuantityInShortTerm', 'researchingQuantityInMidTerm', 'researchingQuantityInLongTerm', ][0];
    instance.name = expectedValue;
    expect(instance.name).to.equal(expectedValue);
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
