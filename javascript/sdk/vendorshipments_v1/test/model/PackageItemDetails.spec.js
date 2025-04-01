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

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', process.cwd()+'/src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require(process.cwd()+'/src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.SellingPartnerApiForRetailProcurementShipments);
  }
}(this, function(expect, SellingPartnerApiForRetailProcurementShipments) {
  'use strict';

  var instance;

  beforeEach(function() {
    try{
     instance = new SellingPartnerApiForRetailProcurementShipments.PackageItemDetails();
    } catch (e) {
     //Handle the cases when this model extends another model by using Model.call(this);
     instance = Object.create(SellingPartnerApiForRetailProcurementShipments.PackageItemDetails.prototype);
    }
  });

  afterEach(function() {
    instance = null;
  })

  describe('PackageItemDetails', function() {
    it('should create an instance of PackageItemDetails', function() {
      expect(instance).to.be.a(SellingPartnerApiForRetailProcurementShipments.PackageItemDetails);
    });

    it('should have the property purchaseOrderNumber (base name: "purchaseOrderNumber")', function() {
      // verify property exists
      expect(instance).to.have.property('purchaseOrderNumber');

      // set and verify value
      var validValue = generateMockData('String');
      instance.purchaseOrderNumber = validValue;
      expect(instance.purchaseOrderNumber).to.equal(validValue);
    });

    it('should have the property lotNumber (base name: "lotNumber")', function() {
      // verify property exists
      expect(instance).to.have.property('lotNumber');

      // set and verify value
      var validValue = generateMockData('String');
      instance.lotNumber = validValue;
      expect(instance.lotNumber).to.equal(validValue);
    });

    it('should have the property expiry (base name: "expiry")', function() {
      // verify property exists
      expect(instance).to.have.property('expiry');

      // set and verify value
      var validValue = generateMockData('Expiry');
      instance.expiry = validValue;
      expect(instance.expiry).to.equal(validValue);
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

}));
