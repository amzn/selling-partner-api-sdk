/**
 * The Selling Partner API for Transfers.
 * The Selling Partner API for Transfers enables selling partners to retrieve payment methods and initiate payouts for their seller accounts. This API supports the following marketplaces: DE, FR, IT, ES, SE, NL, PL, and BE.
 *
 * The version of the OpenAPI document: 2024-06-01
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import expect from 'expect.js';
import { join } from 'path';

const modulePath = join(process.cwd(), 'src', 'transfers_v2024_06_01', 'index.js');
const TheSellingPartnerApiForTransfers = await import(modulePath);

let instance;

beforeEach(() => {
  try {
    instance = new TheSellingPartnerApiForTransfers.InitiatePayoutResponse();
  } catch (e) {
    //Handle the cases when this model extends another model by using Model.call(this);
    instance = Object.create(TheSellingPartnerApiForTransfers.InitiatePayoutResponse.prototype);
  }
});

afterEach(() => {
  instance = null;
});

describe('InitiatePayoutResponse', () => {
  it('should create an instance of InitiatePayoutResponse', () => {
    expect(instance).to.be.a(TheSellingPartnerApiForTransfers.InitiatePayoutResponse);
  });

  it('should have the property payoutReferenceId', () => {
    // verify property exists
    expect(instance).to.have.property('payoutReferenceId');

    // set and verify value
    const expectedValue = generateMockData('String');
    instance.payoutReferenceId = expectedValue;
    expect(instance.payoutReferenceId).to.equal(expectedValue);
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
        const ModelClass = TheSellingPartnerApiForTransfers[dataType];
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
