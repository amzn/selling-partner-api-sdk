/**
 * Selling Partner API for Supply Sources
 * Manage configurations and capabilities of seller supply sources.
 *
 * The version of the OpenAPI document: 2020-07-01
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import expect from 'expect.js';
import { join } from 'path';

const modulePath = join(process.cwd(), 'src', 'supplysources_v2020_07_01', 'index.js');
const SellingPartnerApiForSupplySources = await import(modulePath);

let instance;

beforeEach(() => {
  try {
    instance = new SellingPartnerApiForSupplySources.ContactDetails();
  } catch (e) {
    //Handle the cases when this model extends another model by using Model.call(this);
    instance = Object.create(SellingPartnerApiForSupplySources.ContactDetails.prototype);
  }
});

afterEach(() => {
  instance = null;
});

describe('ContactDetails', () => {
  it('should create an instance of ContactDetails', () => {
    expect(instance).to.be.a(SellingPartnerApiForSupplySources.ContactDetails);
  });

  it('should have the property primary', () => {
    // verify property exists
    expect(instance).to.have.property('primary');

    // set and verify value
    const expectedValue = generateMockData('ContactDetailsPrimary');
    instance.primary = expectedValue;
    expect(instance.primary).to.equal(expectedValue);
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
        const ModelClass = SellingPartnerApiForSupplySources[dataType];
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
