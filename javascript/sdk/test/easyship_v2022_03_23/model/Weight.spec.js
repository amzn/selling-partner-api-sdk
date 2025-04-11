/**
 * Selling Partner API for Easy Ship
 * Use the Selling Partner API for Easy Ship to build applications for sellers to manage and ship Amazon Easy Ship orders. With this API, you can get available time slots, schedule and reschedule Easy Ship orders, and print shipping labels, invoices, and warranties. To review the differences in Easy Ship operations by marketplace, refer to [Marketplace support](https://developer-docs.amazon.com/sp-api/docs/easyship-api-v2022-03-23-use-case-guide#marketplace-support).
 *
 * The version of the OpenAPI document: 2022-03-23
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import expect from 'expect.js';
import { join } from 'path';

const modulePath = join(process.cwd(), 'src', 'easyship_v2022_03_23', 'index.js');
const SellingPartnerApiForEasyShip = await import(modulePath);

let instance;

beforeEach(() => {
  try {
    instance = new SellingPartnerApiForEasyShip.Weight();
  } catch (e) {
    //Handle the cases when this model extends another model by using Model.call(this);
    instance = Object.create(SellingPartnerApiForEasyShip.Weight.prototype);
  }
});

afterEach(() => {
  instance = null;
});

describe('Weight', () => {
  it('should create an instance of Weight', () => {
    expect(instance).to.be.a(SellingPartnerApiForEasyShip.Weight);
  });

  it('should have the property value', () => {
    // verify property exists
    expect(instance).to.have.property('value');

    // set and verify value
    const expectedValue = generateMockData('Number');
    instance.value = expectedValue;
    expect(instance.value).to.equal(expectedValue);
  });

  it('should have the property unit', () => {
    // verify property exists
    expect(instance).to.have.property('unit');

    // set and verify value
    const expectedValue = generateMockData('UnitOfWeight');
    instance.unit = expectedValue;
    expect(instance.unit).to.equal(expectedValue);
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
        const ModelClass = SellingPartnerApiForEasyShip[dataType];
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
