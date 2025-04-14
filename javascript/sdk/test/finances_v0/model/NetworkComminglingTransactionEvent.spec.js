/**
 * Selling Partner API for Finances
 * The Selling Partner API for Finances helps you obtain financial information relevant to a seller's business. You can obtain financial events for a given order, financial event group, or date range without having to wait until a statement period closes. You can also obtain financial event groups for a given date range.
 *
 * The version of the OpenAPI document: v0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import expect from 'expect.js';
import { join } from 'path';

const modulePath = join(process.cwd(), 'src', 'finances_v0', 'index.js');
const SellingPartnerApiForFinances = await import(modulePath);

let instance;

beforeEach(() => {
  try {
    instance = new SellingPartnerApiForFinances.NetworkComminglingTransactionEvent();
  } catch (e) {
    //Handle the cases when this model extends another model by using Model.call(this);
    instance = Object.create(SellingPartnerApiForFinances.NetworkComminglingTransactionEvent.prototype);
  }
});

afterEach(() => {
  instance = null;
});

describe('NetworkComminglingTransactionEvent', () => {
  it('should create an instance of NetworkComminglingTransactionEvent', () => {
    expect(instance).to.be.a(SellingPartnerApiForFinances.NetworkComminglingTransactionEvent);
  });

  it('should have the property transactionType', () => {
    // verify property exists
    expect(instance).to.have.property('transactionType');

    // set and verify value
    const expectedValue = generateMockData('String');
    instance.transactionType = expectedValue;
    expect(instance.transactionType).to.equal(expectedValue);
  });

  it('should have the property postedDate', () => {
    // verify property exists
    expect(instance).to.have.property('postedDate');

    // set and verify value
    const expectedValue = generateMockData('Date');
    instance.postedDate = expectedValue;
    expect(instance.postedDate).to.equal(expectedValue);
  });

  it('should have the property netCoTransactionID', () => {
    // verify property exists
    expect(instance).to.have.property('netCoTransactionID');

    // set and verify value
    const expectedValue = generateMockData('String');
    instance.netCoTransactionID = expectedValue;
    expect(instance.netCoTransactionID).to.equal(expectedValue);
  });

  it('should have the property swapReason', () => {
    // verify property exists
    expect(instance).to.have.property('swapReason');

    // set and verify value
    const expectedValue = generateMockData('String');
    instance.swapReason = expectedValue;
    expect(instance.swapReason).to.equal(expectedValue);
  });

  it('should have the property ASIN', () => {
    // verify property exists
    expect(instance).to.have.property('ASIN');

    // set and verify value
    const expectedValue = generateMockData('String');
    instance.ASIN = expectedValue;
    expect(instance.ASIN).to.equal(expectedValue);
  });

  it('should have the property marketplaceId', () => {
    // verify property exists
    expect(instance).to.have.property('marketplaceId');

    // set and verify value
    const expectedValue = generateMockData('String');
    instance.marketplaceId = expectedValue;
    expect(instance.marketplaceId).to.equal(expectedValue);
  });

  it('should have the property taxExclusiveAmount', () => {
    // verify property exists
    expect(instance).to.have.property('taxExclusiveAmount');

    // set and verify value
    const expectedValue = generateMockData('Currency');
    instance.taxExclusiveAmount = expectedValue;
    expect(instance.taxExclusiveAmount).to.equal(expectedValue);
  });

  it('should have the property taxAmount', () => {
    // verify property exists
    expect(instance).to.have.property('taxAmount');

    // set and verify value
    const expectedValue = generateMockData('Currency');
    instance.taxAmount = expectedValue;
    expect(instance.taxAmount).to.equal(expectedValue);
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
        const ModelClass = SellingPartnerApiForFinances[dataType];
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
