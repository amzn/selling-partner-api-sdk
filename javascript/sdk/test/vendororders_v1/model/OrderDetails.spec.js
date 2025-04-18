/**
 * Selling Partner API for Retail Procurement Orders
 * The Selling Partner API for Retail Procurement Orders provides programmatic access to vendor orders data.
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

const modulePath = join(process.cwd(), 'src', 'vendororders_v1', 'index.js');
const SellingPartnerApiForRetailProcurementOrders = await import(modulePath);

let instance;

beforeEach(() => {
  try {
    instance = new SellingPartnerApiForRetailProcurementOrders.OrderDetails();
  } catch (e) {
    //Handle the cases when this model extends another model by using Model.call(this);
    instance = Object.create(SellingPartnerApiForRetailProcurementOrders.OrderDetails.prototype);
  }
});

afterEach(() => {
  instance = null;
});

describe('OrderDetails', () => {
  it('should create an instance of OrderDetails', () => {
    expect(instance).to.be.a(SellingPartnerApiForRetailProcurementOrders.OrderDetails);
  });

  it('should have the property purchaseOrderDate', () => {
    // verify property exists
    expect(instance).to.have.property('purchaseOrderDate');

    // set and verify value
    const expectedValue = generateMockData('Date');
    instance.purchaseOrderDate = expectedValue;
    expect(instance.purchaseOrderDate).to.equal(expectedValue);
  });

  it('should have the property purchaseOrderChangedDate', () => {
    // verify property exists
    expect(instance).to.have.property('purchaseOrderChangedDate');

    // set and verify value
    const expectedValue = generateMockData('Date');
    instance.purchaseOrderChangedDate = expectedValue;
    expect(instance.purchaseOrderChangedDate).to.equal(expectedValue);
  });

  it('should have the property purchaseOrderStateChangedDate', () => {
    // verify property exists
    expect(instance).to.have.property('purchaseOrderStateChangedDate');

    // set and verify value
    const expectedValue = generateMockData('Date');
    instance.purchaseOrderStateChangedDate = expectedValue;
    expect(instance.purchaseOrderStateChangedDate).to.equal(expectedValue);
  });

  it('should have the property purchaseOrderType', () => {
    // verify property exists
    expect(instance).to.have.property('purchaseOrderType');

    // set and verify value
    const expectedValue = ['RegularOrder', 'ConsignedOrder', 'NewProductIntroduction', 'RushOrder', ][0];
    instance.purchaseOrderType = expectedValue;
    expect(instance.purchaseOrderType).to.equal(expectedValue);
  });

  it('should have the property importDetails', () => {
    // verify property exists
    expect(instance).to.have.property('importDetails');

    // set and verify value
    const expectedValue = generateMockData('ImportDetails');
    instance.importDetails = expectedValue;
    expect(instance.importDetails).to.equal(expectedValue);
  });

  it('should have the property dealCode', () => {
    // verify property exists
    expect(instance).to.have.property('dealCode');

    // set and verify value
    const expectedValue = generateMockData('String');
    instance.dealCode = expectedValue;
    expect(instance.dealCode).to.equal(expectedValue);
  });

  it('should have the property paymentMethod', () => {
    // verify property exists
    expect(instance).to.have.property('paymentMethod');

    // set and verify value
    const expectedValue = ['Invoice', 'Consignment', 'CreditCard', 'Prepaid', ][0];
    instance.paymentMethod = expectedValue;
    expect(instance.paymentMethod).to.equal(expectedValue);
  });

  it('should have the property buyingParty', () => {
    // verify property exists
    expect(instance).to.have.property('buyingParty');

    // set and verify value
    const expectedValue = generateMockData('PartyIdentification');
    instance.buyingParty = expectedValue;
    expect(instance.buyingParty).to.equal(expectedValue);
  });

  it('should have the property sellingParty', () => {
    // verify property exists
    expect(instance).to.have.property('sellingParty');

    // set and verify value
    const expectedValue = generateMockData('PartyIdentification');
    instance.sellingParty = expectedValue;
    expect(instance.sellingParty).to.equal(expectedValue);
  });

  it('should have the property shipToParty', () => {
    // verify property exists
    expect(instance).to.have.property('shipToParty');

    // set and verify value
    const expectedValue = generateMockData('PartyIdentification');
    instance.shipToParty = expectedValue;
    expect(instance.shipToParty).to.equal(expectedValue);
  });

  it('should have the property billToParty', () => {
    // verify property exists
    expect(instance).to.have.property('billToParty');

    // set and verify value
    const expectedValue = generateMockData('PartyIdentification');
    instance.billToParty = expectedValue;
    expect(instance.billToParty).to.equal(expectedValue);
  });

  it('should have the property shipWindow', () => {
    // verify property exists
    expect(instance).to.have.property('shipWindow');

    // set and verify value
    const expectedValue = generateMockData('String');
    instance.shipWindow = expectedValue;
    expect(instance.shipWindow).to.equal(expectedValue);
  });

  it('should have the property deliveryWindow', () => {
    // verify property exists
    expect(instance).to.have.property('deliveryWindow');

    // set and verify value
    const expectedValue = generateMockData('String');
    instance.deliveryWindow = expectedValue;
    expect(instance.deliveryWindow).to.equal(expectedValue);
  });

  it('should have the property items', () => {
    // verify property exists
    expect(instance).to.have.property('items');

    // set and verify value
    const expectedValue = generateMockData('OrderItem', true);
    instance.items = expectedValue;
    expect(instance.items).to.equal(expectedValue);
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
        const ModelClass = SellingPartnerApiForRetailProcurementOrders[dataType];
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
