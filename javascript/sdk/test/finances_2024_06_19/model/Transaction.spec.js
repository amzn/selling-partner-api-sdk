/**
 * The Selling Partner API for Finances
 * The Selling Partner API for Finances helps you obtain financial information relevant to a seller's business. You can obtain financial events for a given order or date range without having to wait until a statement period closes.
 *
 * The version of the OpenAPI document: 2024-06-19
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import expect from 'expect.js';
import { join } from 'path';

const modulePath = join(process.cwd(), 'src', 'finances_2024_06_19', 'index.js');
const TheSellingPartnerApiForFinances = await import(modulePath);

let instance;

beforeEach(() => {
  try {
    instance = new TheSellingPartnerApiForFinances.Transaction();
  } catch (e) {
    //Handle the cases when this model extends another model by using Model.call(this);
    instance = Object.create(TheSellingPartnerApiForFinances.Transaction.prototype);
  }
});

afterEach(() => {
  instance = null;
});

describe('Transaction', () => {
  it('should create an instance of Transaction', () => {
    expect(instance).to.be.a(TheSellingPartnerApiForFinances.Transaction);
  });

  it('should have the property sellingPartnerMetadata', () => {
    // verify property exists
    expect(instance).to.have.property('sellingPartnerMetadata');

    // set and verify value
    const expectedValue = generateMockData('SellingPartnerMetadata');
    instance.sellingPartnerMetadata = expectedValue;
    expect(instance.sellingPartnerMetadata).to.equal(expectedValue);
  });

  it('should have the property relatedIdentifiers', () => {
    // verify property exists
    expect(instance).to.have.property('relatedIdentifiers');

    // set and verify value
    const expectedValue = generateMockData('RelatedIdentifier', true);
    instance.relatedIdentifiers = expectedValue;
    expect(instance.relatedIdentifiers).to.equal(expectedValue);
  });

  it('should have the property transactionType', () => {
    // verify property exists
    expect(instance).to.have.property('transactionType');

    // set and verify value
    const expectedValue = generateMockData('String');
    instance.transactionType = expectedValue;
    expect(instance.transactionType).to.equal(expectedValue);
  });

  it('should have the property transactionId', () => {
    // verify property exists
    expect(instance).to.have.property('transactionId');

    // set and verify value
    const expectedValue = generateMockData('String');
    instance.transactionId = expectedValue;
    expect(instance.transactionId).to.equal(expectedValue);
  });

  it('should have the property transactionStatus', () => {
    // verify property exists
    expect(instance).to.have.property('transactionStatus');

    // set and verify value
    const expectedValue = generateMockData('String');
    instance.transactionStatus = expectedValue;
    expect(instance.transactionStatus).to.equal(expectedValue);
  });

  it('should have the property description', () => {
    // verify property exists
    expect(instance).to.have.property('description');

    // set and verify value
    const expectedValue = generateMockData('String');
    instance.description = expectedValue;
    expect(instance.description).to.equal(expectedValue);
  });

  it('should have the property postedDate', () => {
    // verify property exists
    expect(instance).to.have.property('postedDate');

    // set and verify value
    const expectedValue = generateMockData('Date');
    instance.postedDate = expectedValue;
    expect(instance.postedDate).to.equal(expectedValue);
  });

  it('should have the property totalAmount', () => {
    // verify property exists
    expect(instance).to.have.property('totalAmount');

    // set and verify value
    const expectedValue = generateMockData('Currency');
    instance.totalAmount = expectedValue;
    expect(instance.totalAmount).to.equal(expectedValue);
  });

  it('should have the property marketplaceDetails', () => {
    // verify property exists
    expect(instance).to.have.property('marketplaceDetails');

    // set and verify value
    const expectedValue = generateMockData('MarketplaceDetails');
    instance.marketplaceDetails = expectedValue;
    expect(instance.marketplaceDetails).to.equal(expectedValue);
  });

  it('should have the property items', () => {
    // verify property exists
    expect(instance).to.have.property('items');

    // set and verify value
    const expectedValue = generateMockData('Item', true);
    instance.items = expectedValue;
    expect(instance.items).to.equal(expectedValue);
  });

  it('should have the property contexts', () => {
    // verify property exists
    expect(instance).to.have.property('contexts');

    // set and verify value
    const expectedValue = generateMockData('Context', true);
    instance.contexts = expectedValue;
    expect(instance.contexts).to.equal(expectedValue);
  });

  it('should have the property breakdowns', () => {
    // verify property exists
    expect(instance).to.have.property('breakdowns');

    // set and verify value
    const expectedValue = generateMockData('Breakdown', true);
    instance.breakdowns = expectedValue;
    expect(instance.breakdowns).to.equal(expectedValue);
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
        const ModelClass = TheSellingPartnerApiForFinances[dataType];
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
