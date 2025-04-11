/**
 * The Selling Partner API for Amazon Warehousing and Distribution
 * The Selling Partner API for Amazon Warehousing and Distribution (AWD) provides programmatic access to information about AWD shipments and inventory.
 *
 * The version of the OpenAPI document: 2024-05-09
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import expect from 'expect.js';
import { join } from 'path';

const modulePath = join(process.cwd(), 'src', 'awd_v2024_05_09', 'index.js');
const TheSellingPartnerApiForAmazonWarehousingAndDistribution = await import(modulePath);

let instance;

beforeEach(() => {
  try {
    instance = new TheSellingPartnerApiForAmazonWarehousingAndDistribution.SkuEligibility();
  } catch (e) {
    //Handle the cases when this model extends another model by using Model.call(this);
    instance = Object.create(TheSellingPartnerApiForAmazonWarehousingAndDistribution.SkuEligibility.prototype);
  }
});

afterEach(() => {
  instance = null;
});

describe('SkuEligibility', () => {
  it('should create an instance of SkuEligibility', () => {
    expect(instance).to.be.a(TheSellingPartnerApiForAmazonWarehousingAndDistribution.SkuEligibility);
  });

  it('should have the property ineligibilityReasons', () => {
    // verify property exists
    expect(instance).to.have.property('ineligibilityReasons');

    // set and verify value
    const expectedValue = generateMockData('SkuIneligibilityReason', true);
    instance.ineligibilityReasons = expectedValue;
    expect(instance.ineligibilityReasons).to.equal(expectedValue);
  });

  it('should have the property packageQuantity', () => {
    // verify property exists
    expect(instance).to.have.property('packageQuantity');

    // set and verify value
    const expectedValue = generateMockData('DistributionPackageQuantity');
    instance.packageQuantity = expectedValue;
    expect(instance.packageQuantity).to.equal(expectedValue);
  });

  it('should have the property status', () => {
    // verify property exists
    expect(instance).to.have.property('status');

    // set and verify value
    const expectedValue = generateMockData('InboundEligibilityStatus');
    instance.status = expectedValue;
    expect(instance.status).to.equal(expectedValue);
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
        const ModelClass = TheSellingPartnerApiForAmazonWarehousingAndDistribution[dataType];
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
