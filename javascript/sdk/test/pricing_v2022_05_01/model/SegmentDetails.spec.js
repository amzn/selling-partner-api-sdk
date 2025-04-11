/**
 * Selling Partner API for Pricing
 * The Selling Partner API for Pricing helps you programmatically retrieve product pricing and offer pricing information for Amazon Marketplace products.  For more information, refer to the [Product Pricing v2022-05-01 Use Case Guide](https://developer-docs.amazon.com/sp-api/docs/product-pricing-api-v2022-05-01-use-case-guide).
 *
 * The version of the OpenAPI document: 2022-05-01
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import expect from 'expect.js';
import { join } from 'path';

const modulePath = join(process.cwd(), 'src', 'pricing_v2022_05_01', 'index.js');
const SellingPartnerApiForPricing = await import(modulePath);

let instance;

beforeEach(() => {
  try {
    instance = new SellingPartnerApiForPricing.SegmentDetails();
  } catch (e) {
    //Handle the cases when this model extends another model by using Model.call(this);
    instance = Object.create(SellingPartnerApiForPricing.SegmentDetails.prototype);
  }
});

afterEach(() => {
  instance = null;
});

describe('SegmentDetails', () => {
  it('should create an instance of SegmentDetails', () => {
    expect(instance).to.be.a(SellingPartnerApiForPricing.SegmentDetails);
  });

  it('should have the property glanceViewWeightPercentage', () => {
    // verify property exists
    expect(instance).to.have.property('glanceViewWeightPercentage');

    // set and verify value
    const expectedValue = generateMockData('Number');
    instance.glanceViewWeightPercentage = expectedValue;
    expect(instance.glanceViewWeightPercentage).to.equal(expectedValue);
  });

  it('should have the property sampleLocation', () => {
    // verify property exists
    expect(instance).to.have.property('sampleLocation');

    // set and verify value
    const expectedValue = generateMockData('SampleLocation');
    instance.sampleLocation = expectedValue;
    expect(instance.sampleLocation).to.equal(expectedValue);
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
        const ModelClass = SellingPartnerApiForPricing[dataType];
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
