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
    instance = new TheSellingPartnerApiForFinances.Context();
  } catch (e) {
    //Handle the cases when this model extends another model by using Model.call(this);
    instance = Object.create(TheSellingPartnerApiForFinances.Context.prototype);
  }
});

afterEach(() => {
  instance = null;
});

describe('Context', () => {
  it('should create an instance of Context', () => {
    expect(instance).to.be.a(TheSellingPartnerApiForFinances.Context);
  });

  it('should have the property storeName', () => {
    // verify property exists
    expect(instance).to.have.property('storeName');

    // set and verify value
    const expectedValue = generateMockData('String');
    instance.storeName = expectedValue;
    expect(instance.storeName).to.equal(expectedValue);
  });

  it('should have the property orderType', () => {
    // verify property exists
    expect(instance).to.have.property('orderType');

    // set and verify value
    const expectedValue = generateMockData('String');
    instance.orderType = expectedValue;
    expect(instance.orderType).to.equal(expectedValue);
  });

  it('should have the property channel', () => {
    // verify property exists
    expect(instance).to.have.property('channel');

    // set and verify value
    const expectedValue = generateMockData('String');
    instance.channel = expectedValue;
    expect(instance.channel).to.equal(expectedValue);
  });

  it('should have the property asin', () => {
    // verify property exists
    expect(instance).to.have.property('asin');

    // set and verify value
    const expectedValue = generateMockData('String');
    instance.asin = expectedValue;
    expect(instance.asin).to.equal(expectedValue);
  });

  it('should have the property sku', () => {
    // verify property exists
    expect(instance).to.have.property('sku');

    // set and verify value
    const expectedValue = generateMockData('String');
    instance.sku = expectedValue;
    expect(instance.sku).to.equal(expectedValue);
  });

  it('should have the property quantityShipped', () => {
    // verify property exists
    expect(instance).to.have.property('quantityShipped');

    // set and verify value
    const expectedValue = generateMockData('Number');
    instance.quantityShipped = expectedValue;
    expect(instance.quantityShipped).to.equal(expectedValue);
  });

  it('should have the property fulfillmentNetwork', () => {
    // verify property exists
    expect(instance).to.have.property('fulfillmentNetwork');

    // set and verify value
    const expectedValue = generateMockData('String');
    instance.fulfillmentNetwork = expectedValue;
    expect(instance.fulfillmentNetwork).to.equal(expectedValue);
  });

  it('should have the property paymentType', () => {
    // verify property exists
    expect(instance).to.have.property('paymentType');

    // set and verify value
    const expectedValue = generateMockData('String');
    instance.paymentType = expectedValue;
    expect(instance.paymentType).to.equal(expectedValue);
  });

  it('should have the property paymentMethod', () => {
    // verify property exists
    expect(instance).to.have.property('paymentMethod');

    // set and verify value
    const expectedValue = generateMockData('String');
    instance.paymentMethod = expectedValue;
    expect(instance.paymentMethod).to.equal(expectedValue);
  });

  it('should have the property paymentReference', () => {
    // verify property exists
    expect(instance).to.have.property('paymentReference');

    // set and verify value
    const expectedValue = generateMockData('String');
    instance.paymentReference = expectedValue;
    expect(instance.paymentReference).to.equal(expectedValue);
  });

  it('should have the property paymentDate', () => {
    // verify property exists
    expect(instance).to.have.property('paymentDate');

    // set and verify value
    const expectedValue = generateMockData('Date');
    instance.paymentDate = expectedValue;
    expect(instance.paymentDate).to.equal(expectedValue);
  });

  it('should have the property deferralReason', () => {
    // verify property exists
    expect(instance).to.have.property('deferralReason');

    // set and verify value
    const expectedValue = generateMockData('String');
    instance.deferralReason = expectedValue;
    expect(instance.deferralReason).to.equal(expectedValue);
  });

  it('should have the property maturityDate', () => {
    // verify property exists
    expect(instance).to.have.property('maturityDate');

    // set and verify value
    const expectedValue = generateMockData('Date');
    instance.maturityDate = expectedValue;
    expect(instance.maturityDate).to.equal(expectedValue);
  });

  it('should have the property deferralStatus', () => {
    // verify property exists
    expect(instance).to.have.property('deferralStatus');

    // set and verify value
    const expectedValue = generateMockData('String');
    instance.deferralStatus = expectedValue;
    expect(instance.deferralStatus).to.equal(expectedValue);
  });

  it('should have the property startTime', () => {
    // verify property exists
    expect(instance).to.have.property('startTime');

    // set and verify value
    const expectedValue = generateMockData('Date');
    instance.startTime = expectedValue;
    expect(instance.startTime).to.equal(expectedValue);
  });

  it('should have the property endTime', () => {
    // verify property exists
    expect(instance).to.have.property('endTime');

    // set and verify value
    const expectedValue = generateMockData('Date');
    instance.endTime = expectedValue;
    expect(instance.endTime).to.equal(expectedValue);
  });

  it('should have the property contextType', () => {
    // verify property exists
    expect(instance).to.have.property('contextType');

    // set and verify value
    const expectedValue = generateMockData('String');
    instance.contextType = expectedValue;
    expect(instance.contextType).to.equal(expectedValue);
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
