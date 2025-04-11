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
    instance = new SellingPartnerApiForFinances.LoanServicingEvent();
  } catch (e) {
    //Handle the cases when this model extends another model by using Model.call(this);
    instance = Object.create(SellingPartnerApiForFinances.LoanServicingEvent.prototype);
  }
});

afterEach(() => {
  instance = null;
});

describe('LoanServicingEvent', () => {
  it('should create an instance of LoanServicingEvent', () => {
    expect(instance).to.be.a(SellingPartnerApiForFinances.LoanServicingEvent);
  });

  it('should have the property loanAmount', () => {
    // verify property exists
    expect(instance).to.have.property('loanAmount');

    // set and verify value
    const expectedValue = generateMockData('Currency');
    instance.loanAmount = expectedValue;
    expect(instance.loanAmount).to.equal(expectedValue);
  });

  it('should have the property sourceBusinessEventType', () => {
    // verify property exists
    expect(instance).to.have.property('sourceBusinessEventType');

    // set and verify value
    const expectedValue = generateMockData('String');
    instance.sourceBusinessEventType = expectedValue;
    expect(instance.sourceBusinessEventType).to.equal(expectedValue);
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
