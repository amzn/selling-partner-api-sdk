/**
 * Selling Partner API for Feeds
 * The Selling Partner API for Feeds lets you upload data to Amazon on behalf of a selling partner.
 *
 * The version of the OpenAPI document: 2021-06-30
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import expect from 'expect.js';
import { join } from 'path';

const modulePath = join(process.cwd(), 'src', 'feeds_v2021_06_30', 'index.js');
const SellingPartnerApiForFeeds = await import(modulePath);

let instance;

beforeEach(() => {
  try {
    instance = new SellingPartnerApiForFeeds.CreateFeedSpecification();
  } catch (e) {
    //Handle the cases when this model extends another model by using Model.call(this);
    instance = Object.create(SellingPartnerApiForFeeds.CreateFeedSpecification.prototype);
  }
});

afterEach(() => {
  instance = null;
});

describe('CreateFeedSpecification', () => {
  it('should create an instance of CreateFeedSpecification', () => {
    expect(instance).to.be.a(SellingPartnerApiForFeeds.CreateFeedSpecification);
  });

  it('should have the property feedType', () => {
    // verify property exists
    expect(instance).to.have.property('feedType');

    // set and verify value
    const expectedValue = generateMockData('String');
    instance.feedType = expectedValue;
    expect(instance.feedType).to.equal(expectedValue);
  });

  it('should have the property marketplaceIds', () => {
    // verify property exists
    expect(instance).to.have.property('marketplaceIds');

    // set and verify value
    const expectedValue = generateMockData('String', true);
    instance.marketplaceIds = expectedValue;
    expect(instance.marketplaceIds).to.equal(expectedValue);
  });

  it('should have the property inputFeedDocumentId', () => {
    // verify property exists
    expect(instance).to.have.property('inputFeedDocumentId');

    // set and verify value
    const expectedValue = generateMockData('String');
    instance.inputFeedDocumentId = expectedValue;
    expect(instance.inputFeedDocumentId).to.equal(expectedValue);
  });

  it('should have the property feedOptions', () => {
    // verify property exists
    expect(instance).to.have.property('feedOptions');

    // set and verify value
    const expectedValue = generateMockData('{String: String}');
    instance.feedOptions = expectedValue;
    expect(instance.feedOptions).to.equal(expectedValue);
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
        const ModelClass = SellingPartnerApiForFeeds[dataType];
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
