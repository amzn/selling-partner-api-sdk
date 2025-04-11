/**
 * Selling Partner API for Replenishment
 * The Selling Partner API for Replenishment (Replenishment API) provides programmatic access to replenishment program metrics and offers. These programs provide recurring delivery of any replenishable item at a frequency chosen by the customer.  The Replenishment API is available worldwide wherever Amazon Subscribe & Save is available or is supported. The API is available to vendors and FBA selling partners.
 *
 * The version of the OpenAPI document: 2022-11-07
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import expect from 'expect.js';
import { join } from 'path';

const modulePath = join(process.cwd(), 'src', 'replenishment_v2022_11_07', 'index.js');
const SellingPartnerApiForReplenishment = await import(modulePath);

let instance;

beforeEach(() => {
  try {
    instance = new SellingPartnerApiForReplenishment.ListOffersRequest();
  } catch (e) {
    //Handle the cases when this model extends another model by using Model.call(this);
    instance = Object.create(SellingPartnerApiForReplenishment.ListOffersRequest.prototype);
  }
});

afterEach(() => {
  instance = null;
});

describe('ListOffersRequest', () => {
  it('should create an instance of ListOffersRequest', () => {
    expect(instance).to.be.a(SellingPartnerApiForReplenishment.ListOffersRequest);
  });

  it('should have the property pagination', () => {
    // verify property exists
    expect(instance).to.have.property('pagination');

    // set and verify value
    const expectedValue = generateMockData('ListOffersRequestPagination');
    instance.pagination = expectedValue;
    expect(instance.pagination).to.equal(expectedValue);
  });

  it('should have the property filters', () => {
    // verify property exists
    expect(instance).to.have.property('filters');

    // set and verify value
    const expectedValue = generateMockData('ListOffersRequestFilters');
    instance.filters = expectedValue;
    expect(instance.filters).to.equal(expectedValue);
  });

  it('should have the property sort', () => {
    // verify property exists
    expect(instance).to.have.property('sort');

    // set and verify value
    const expectedValue = generateMockData('ListOffersRequestSort');
    instance.sort = expectedValue;
    expect(instance.sort).to.equal(expectedValue);
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
        const ModelClass = SellingPartnerApiForReplenishment[dataType];
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
