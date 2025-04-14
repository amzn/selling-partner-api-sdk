/**
 * Selling Partner API for Retail Procurement Shipments
 * The Selling Partner API for Retail Procurement Shipments provides programmatic access to retail shipping data for vendors.
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

const modulePath = join(process.cwd(), 'src', 'vendorshipments_v1', 'index.js');
const SellingPartnerApiForRetailProcurementShipments = await import(modulePath);

let instance;

beforeEach(() => {
  try {
    instance = new SellingPartnerApiForRetailProcurementShipments.ShipmentInformation();
  } catch (e) {
    //Handle the cases when this model extends another model by using Model.call(this);
    instance = Object.create(SellingPartnerApiForRetailProcurementShipments.ShipmentInformation.prototype);
  }
});

afterEach(() => {
  instance = null;
});

describe('ShipmentInformation', () => {
  it('should create an instance of ShipmentInformation', () => {
    expect(instance).to.be.a(SellingPartnerApiForRetailProcurementShipments.ShipmentInformation);
  });

  it('should have the property vendorDetails', () => {
    // verify property exists
    expect(instance).to.have.property('vendorDetails');

    // set and verify value
    const expectedValue = generateMockData('VendorDetails');
    instance.vendorDetails = expectedValue;
    expect(instance.vendorDetails).to.equal(expectedValue);
  });

  it('should have the property buyerReferenceNumber', () => {
    // verify property exists
    expect(instance).to.have.property('buyerReferenceNumber');

    // set and verify value
    const expectedValue = generateMockData('String');
    instance.buyerReferenceNumber = expectedValue;
    expect(instance.buyerReferenceNumber).to.equal(expectedValue);
  });

  it('should have the property shipToParty', () => {
    // verify property exists
    expect(instance).to.have.property('shipToParty');

    // set and verify value
    const expectedValue = generateMockData('PartyIdentification');
    instance.shipToParty = expectedValue;
    expect(instance.shipToParty).to.equal(expectedValue);
  });

  it('should have the property shipFromParty', () => {
    // verify property exists
    expect(instance).to.have.property('shipFromParty');

    // set and verify value
    const expectedValue = generateMockData('PartyIdentification');
    instance.shipFromParty = expectedValue;
    expect(instance.shipFromParty).to.equal(expectedValue);
  });

  it('should have the property warehouseId', () => {
    // verify property exists
    expect(instance).to.have.property('warehouseId');

    // set and verify value
    const expectedValue = generateMockData('String');
    instance.warehouseId = expectedValue;
    expect(instance.warehouseId).to.equal(expectedValue);
  });

  it('should have the property masterTrackingId', () => {
    // verify property exists
    expect(instance).to.have.property('masterTrackingId');

    // set and verify value
    const expectedValue = generateMockData('String');
    instance.masterTrackingId = expectedValue;
    expect(instance.masterTrackingId).to.equal(expectedValue);
  });

  it('should have the property totalLabelCount', () => {
    // verify property exists
    expect(instance).to.have.property('totalLabelCount');

    // set and verify value
    const expectedValue = generateMockData('Number');
    instance.totalLabelCount = expectedValue;
    expect(instance.totalLabelCount).to.equal(expectedValue);
  });

  it('should have the property shipMode', () => {
    // verify property exists
    expect(instance).to.have.property('shipMode');

    // set and verify value
    const expectedValue = ['SmallParcel', 'LTL', ][0];
    instance.shipMode = expectedValue;
    expect(instance.shipMode).to.equal(expectedValue);
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
        const ModelClass = SellingPartnerApiForRetailProcurementShipments[dataType];
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
