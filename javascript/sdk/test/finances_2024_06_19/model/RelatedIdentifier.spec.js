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
    instance = new TheSellingPartnerApiForFinances.RelatedIdentifier();
  } catch (e) {
    //Handle the cases when this model extends another model by using Model.call(this);
    instance = Object.create(TheSellingPartnerApiForFinances.RelatedIdentifier.prototype);
  }
});

afterEach(() => {
  instance = null;
});

describe('RelatedIdentifier', () => {
  it('should create an instance of RelatedIdentifier', () => {
    expect(instance).to.be.a(TheSellingPartnerApiForFinances.RelatedIdentifier);
  });

  it('should have the property relatedIdentifierName', () => {
    // verify property exists
    expect(instance).to.have.property('relatedIdentifierName');

    // set and verify value
    const expectedValue = ['ORDER_ID', 'SHIPMENT_ID', 'EVENT_GROUP_ID', 'REFUND_ID', 'INVOICE_ID', 'DISBURSEMENT_ID', 'TRANSFER_ID', ][0];
    instance.relatedIdentifierName = expectedValue;
    expect(instance.relatedIdentifierName).to.equal(expectedValue);
  });

  it('should have the property relatedIdentifierValue', () => {
    // verify property exists
    expect(instance).to.have.property('relatedIdentifierValue');

    // set and verify value
    const expectedValue = generateMockData('String');
    instance.relatedIdentifierValue = expectedValue;
    expect(instance.relatedIdentifierValue).to.equal(expectedValue);
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
