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
    instance = new SellingPartnerApiForFinances.ShipmentItem();
  } catch (e) {
    //Handle the cases when this model extends another model by using Model.call(this);
    instance = Object.create(SellingPartnerApiForFinances.ShipmentItem.prototype);
  }
});

afterEach(() => {
  instance = null;
});

describe('ShipmentItem', () => {
  it('should create an instance of ShipmentItem', () => {
    expect(instance).to.be.a(SellingPartnerApiForFinances.ShipmentItem);
  });

  it('should have the property sellerSKU', () => {
    // verify property exists
    expect(instance).to.have.property('sellerSKU');

    // set and verify value
    const expectedValue = generateMockData('String');
    instance.sellerSKU = expectedValue;
    expect(instance.sellerSKU).to.equal(expectedValue);
  });

  it('should have the property orderItemId', () => {
    // verify property exists
    expect(instance).to.have.property('orderItemId');

    // set and verify value
    const expectedValue = generateMockData('String');
    instance.orderItemId = expectedValue;
    expect(instance.orderItemId).to.equal(expectedValue);
  });

  it('should have the property orderAdjustmentItemId', () => {
    // verify property exists
    expect(instance).to.have.property('orderAdjustmentItemId');

    // set and verify value
    const expectedValue = generateMockData('String');
    instance.orderAdjustmentItemId = expectedValue;
    expect(instance.orderAdjustmentItemId).to.equal(expectedValue);
  });

  it('should have the property quantityShipped', () => {
    // verify property exists
    expect(instance).to.have.property('quantityShipped');

    // set and verify value
    const expectedValue = generateMockData('Number');
    instance.quantityShipped = expectedValue;
    expect(instance.quantityShipped).to.equal(expectedValue);
  });

  it('should have the property itemChargeList', () => {
    // verify property exists
    expect(instance).to.have.property('itemChargeList');

    // set and verify value
    const expectedValue = generateMockData('ChargeComponent', true);
    instance.itemChargeList = expectedValue;
    expect(instance.itemChargeList).to.equal(expectedValue);
  });

  it('should have the property itemChargeAdjustmentList', () => {
    // verify property exists
    expect(instance).to.have.property('itemChargeAdjustmentList');

    // set and verify value
    const expectedValue = generateMockData('ChargeComponent', true);
    instance.itemChargeAdjustmentList = expectedValue;
    expect(instance.itemChargeAdjustmentList).to.equal(expectedValue);
  });

  it('should have the property itemFeeList', () => {
    // verify property exists
    expect(instance).to.have.property('itemFeeList');

    // set and verify value
    const expectedValue = generateMockData('FeeComponent', true);
    instance.itemFeeList = expectedValue;
    expect(instance.itemFeeList).to.equal(expectedValue);
  });

  it('should have the property itemFeeAdjustmentList', () => {
    // verify property exists
    expect(instance).to.have.property('itemFeeAdjustmentList');

    // set and verify value
    const expectedValue = generateMockData('FeeComponent', true);
    instance.itemFeeAdjustmentList = expectedValue;
    expect(instance.itemFeeAdjustmentList).to.equal(expectedValue);
  });

  it('should have the property itemTaxWithheldList', () => {
    // verify property exists
    expect(instance).to.have.property('itemTaxWithheldList');

    // set and verify value
    const expectedValue = generateMockData('TaxWithheldComponent', true);
    instance.itemTaxWithheldList = expectedValue;
    expect(instance.itemTaxWithheldList).to.equal(expectedValue);
  });

  it('should have the property promotionList', () => {
    // verify property exists
    expect(instance).to.have.property('promotionList');

    // set and verify value
    const expectedValue = generateMockData('Promotion', true);
    instance.promotionList = expectedValue;
    expect(instance.promotionList).to.equal(expectedValue);
  });

  it('should have the property promotionAdjustmentList', () => {
    // verify property exists
    expect(instance).to.have.property('promotionAdjustmentList');

    // set and verify value
    const expectedValue = generateMockData('Promotion', true);
    instance.promotionAdjustmentList = expectedValue;
    expect(instance.promotionAdjustmentList).to.equal(expectedValue);
  });

  it('should have the property costOfPointsGranted', () => {
    // verify property exists
    expect(instance).to.have.property('costOfPointsGranted');

    // set and verify value
    const expectedValue = generateMockData('Currency');
    instance.costOfPointsGranted = expectedValue;
    expect(instance.costOfPointsGranted).to.equal(expectedValue);
  });

  it('should have the property costOfPointsReturned', () => {
    // verify property exists
    expect(instance).to.have.property('costOfPointsReturned');

    // set and verify value
    const expectedValue = generateMockData('Currency');
    instance.costOfPointsReturned = expectedValue;
    expect(instance.costOfPointsReturned).to.equal(expectedValue);
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
