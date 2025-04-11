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
    instance = new SellingPartnerApiForEasyShip.PackageDetails();
  } catch (e) {
    //Handle the cases when this model extends another model by using Model.call(this);
    instance = Object.create(SellingPartnerApiForEasyShip.PackageDetails.prototype);
  }
});

afterEach(() => {
  instance = null;
});

describe('PackageDetails', () => {
  it('should create an instance of PackageDetails', () => {
    expect(instance).to.be.a(SellingPartnerApiForEasyShip.PackageDetails);
  });

  it('should have the property packageItems', () => {
    // verify property exists
    expect(instance).to.have.property('packageItems');

    // set and verify value
    const expectedValue = generateMockData('Item', true);
    instance.packageItems = expectedValue;
    expect(instance.packageItems).to.equal(expectedValue);
  });

  it('should have the property packageTimeSlot', () => {
    // verify property exists
    expect(instance).to.have.property('packageTimeSlot');

    // set and verify value
    const expectedValue = generateMockData('TimeSlot');
    instance.packageTimeSlot = expectedValue;
    expect(instance.packageTimeSlot).to.equal(expectedValue);
  });

  it('should have the property packageIdentifier', () => {
    // verify property exists
    expect(instance).to.have.property('packageIdentifier');

    // set and verify value
    const expectedValue = generateMockData('String');
    instance.packageIdentifier = expectedValue;
    expect(instance.packageIdentifier).to.equal(expectedValue);
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
