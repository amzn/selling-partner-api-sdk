/**
 * Selling Partner API for Retail Procurement Payments
 * The Selling Partner API for Retail Procurement Payments provides programmatic access to vendors payments data.
 *
 * The version of the OpenAPI document: v1
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import expect from 'expect.js';
import { join } from 'path';

const modulePath = join(process.cwd(), 'src', 'vendorinvoices_v1', 'index.js');
const SellingPartnerApiForRetailProcurementPayments = await import(modulePath);

let instance;

beforeEach(() => {
  try {
    instance = new SellingPartnerApiForRetailProcurementPayments.PaymentTerms();
  } catch (e) {
    //Handle the cases when this model extends another model by using Model.call(this);
    instance = Object.create(SellingPartnerApiForRetailProcurementPayments.PaymentTerms.prototype);
  }
});

afterEach(() => {
  instance = null;
});

describe('PaymentTerms', () => {
  it('should create an instance of PaymentTerms', () => {
    expect(instance).to.be.a(SellingPartnerApiForRetailProcurementPayments.PaymentTerms);
  });

  it('should have the property type', () => {
    // verify property exists
    expect(instance).to.have.property('type');

    // set and verify value
    const expectedValue = ['Basic', 'EndOfMonth', 'FixedDate', 'Proximo', 'PaymentDueUponReceiptOfInvoice', 'LetterofCredit', ][0];
    instance.type = expectedValue;
    expect(instance.type).to.equal(expectedValue);
  });

  it('should have the property discountPercent', () => {
    // verify property exists
    expect(instance).to.have.property('discountPercent');

    // set and verify value
    const expectedValue = generateMockData('String');
    instance.discountPercent = expectedValue;
    expect(instance.discountPercent).to.equal(expectedValue);
  });

  it('should have the property discountDueDays', () => {
    // verify property exists
    expect(instance).to.have.property('discountDueDays');

    // set and verify value
    const expectedValue = generateMockData('Number');
    instance.discountDueDays = expectedValue;
    expect(instance.discountDueDays).to.equal(expectedValue);
  });

  it('should have the property netDueDays', () => {
    // verify property exists
    expect(instance).to.have.property('netDueDays');

    // set and verify value
    const expectedValue = generateMockData('Number');
    instance.netDueDays = expectedValue;
    expect(instance.netDueDays).to.equal(expectedValue);
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
        const ModelClass = SellingPartnerApiForRetailProcurementPayments[dataType];
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
