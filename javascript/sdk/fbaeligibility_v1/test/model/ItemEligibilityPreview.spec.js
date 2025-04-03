/**
 * Selling Partner API for FBA Inbound Eligibilty
 * With the FBA Inbound Eligibility API, you can build applications that let sellers get eligibility previews for items before shipping them to Amazon's fulfillment centers. With this API you can find out if an item is eligible for inbound shipment to Amazon's fulfillment centers in a specific marketplace. You can also find out if an item is eligible for using the manufacturer barcode for FBA inventory tracking. Sellers can use this information to inform their decisions about which items to ship Amazon's fulfillment centers.
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
    factory(root.expect, root.SellingPartnerApiForFbaInboundEligibilty);
  }
}(this, function(expect, SellingPartnerApiForFbaInboundEligibilty) {
  'use strict';

  var instance;

  beforeEach(function() {
    try{
     instance = new SellingPartnerApiForFbaInboundEligibilty.ItemEligibilityPreview();
    } catch (e) {
     //Handle the cases when this model extends another model by using Model.call(this);
     instance = Object.create(SellingPartnerApiForFbaInboundEligibilty.ItemEligibilityPreview.prototype);
    }
  });

  afterEach(function() {
    instance = null;
  })

  describe('ItemEligibilityPreview', function() {
    it('should create an instance of ItemEligibilityPreview', function() {
      expect(instance).to.be.a(SellingPartnerApiForFbaInboundEligibilty.ItemEligibilityPreview);
    });

    it('should have the property asin', function() {
      // verify property exists
      expect(instance).to.have.property('asin');

      // set and verify value
      var expectedValue = generateMockData('String');
      instance.asin = expectedValue;
      expect(instance.asin).to.equal(expectedValue);
    });

    it('should have the property marketplaceId', function() {
      // verify property exists
      expect(instance).to.have.property('marketplaceId');

      // set and verify value
      var expectedValue = generateMockData('String');
      instance.marketplaceId = expectedValue;
      expect(instance.marketplaceId).to.equal(expectedValue);
    });

    it('should have the property program', function() {
      // verify property exists
      expect(instance).to.have.property('program');

      // set and verify value
      var expectedValue = ['INBOUND', 'COMMINGLING', ][0];
      instance.program = expectedValue;
      expect(instance.program).to.equal(expectedValue);
    });

    it('should have the property isEligibleForProgram', function() {
      // verify property exists
      expect(instance).to.have.property('isEligibleForProgram');

      // set and verify value
      var expectedValue = generateMockData('Boolean');
      instance.isEligibleForProgram = expectedValue;
      expect(instance.isEligibleForProgram).to.equal(expectedValue);
    });

    it('should have the property ineligibilityReasonList', function() {
      // verify property exists
      expect(instance).to.have.property('ineligibilityReasonList');

      // set and verify value
      var expectedValue = ['FBA_INB_0004', 'FBA_INB_0006', 'FBA_INB_0007', 'FBA_INB_0008', 'FBA_INB_0009', 'FBA_INB_0010', 'FBA_INB_0011', 'FBA_INB_0012', 'FBA_INB_0013', 'FBA_INB_0014', 'FBA_INB_0015', 'FBA_INB_0016', 'FBA_INB_0017', 'FBA_INB_0018', 'FBA_INB_0019', 'FBA_INB_0034', 'FBA_INB_0035', 'FBA_INB_0036', 'FBA_INB_0037', 'FBA_INB_0038', 'FBA_INB_0050', 'FBA_INB_0051', 'FBA_INB_0053', 'FBA_INB_0055', 'FBA_INB_0056', 'FBA_INB_0059', 'FBA_INB_0065', 'FBA_INB_0066', 'FBA_INB_0067', 'FBA_INB_0068', 'FBA_INB_0095', 'FBA_INB_0097', 'FBA_INB_0098', 'FBA_INB_0099', 'FBA_INB_0100', 'FBA_INB_0103', 'FBA_INB_0104', 'FBA_INB_0197', 'UNKNOWN_INB_ERROR_CODE', ][0];
      instance.ineligibilityReasonList = expectedValue;
      expect(instance.ineligibilityReasonList).to.equal(expectedValue);
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
          const ModelClass = SellingPartnerApiForFbaInboundEligibilty[dataType];
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
