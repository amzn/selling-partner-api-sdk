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

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', process.cwd()+'/src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require(process.cwd()+'/src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.SellingPartnerApiForRetailProcurementPayments);
  }
}(this, function(expect, SellingPartnerApiForRetailProcurementPayments) {
  'use strict';

  var instance;

  beforeEach(function() {
    try{
     instance = new SellingPartnerApiForRetailProcurementPayments.ChargeDetails();
    } catch (e) {
     //Handle the cases when this model extends another model by using Model.call(this);
     instance = Object.create(SellingPartnerApiForRetailProcurementPayments.ChargeDetails.prototype);
    }
  });

  afterEach(function() {
    instance = null;
  })

  describe('ChargeDetails', function() {
    it('should create an instance of ChargeDetails', function() {
      expect(instance).to.be.a(SellingPartnerApiForRetailProcurementPayments.ChargeDetails);
    });

    it('should have the property type', function() {
      // verify property exists
      expect(instance).to.have.property('type');

      // set and verify value
      var expectedValue = ['Freight', 'Packing', 'Duty', 'Service', 'SmallOrder', 'InsurancePlacementCost', 'InsuranceFee', 'SpecialHandlingService', 'CollectionAndRecyclingService', 'EnvironmentalProtectionService', 'TaxCollectedAtSource', ][0];
      instance.type = expectedValue;
      expect(instance.type).to.equal(expectedValue);
    });

    it('should have the property description', function() {
      // verify property exists
      expect(instance).to.have.property('description');

      // set and verify value
      var expectedValue = generateMockData('String');
      instance.description = expectedValue;
      expect(instance.description).to.equal(expectedValue);
    });

    it('should have the property chargeAmount', function() {
      // verify property exists
      expect(instance).to.have.property('chargeAmount');

      // set and verify value
      var expectedValue = generateMockData('Money');
      instance.chargeAmount = expectedValue;
      expect(instance.chargeAmount).to.equal(expectedValue);
    });

    it('should have the property taxDetails', function() {
      // verify property exists
      expect(instance).to.have.property('taxDetails');

      // set and verify value
      var expectedValue = generateMockData('TaxDetails', true);
      instance.taxDetails = expectedValue;
      expect(instance.taxDetails).to.equal(expectedValue);
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

}));
