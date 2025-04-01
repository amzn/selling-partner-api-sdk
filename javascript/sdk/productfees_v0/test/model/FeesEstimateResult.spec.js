/**
 * Selling Partner API for Product Fees
 * The Selling Partner API for Product Fees lets you programmatically retrieve estimated fees for a product. You can then account for those fees in your pricing.
 *
 * The version of the OpenAPI document: v0
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
    factory(root.expect, root.SellingPartnerApiForProductFees);
  }
}(this, function(expect, SellingPartnerApiForProductFees) {
  'use strict';

  var instance;

  beforeEach(function() {
    try{
     instance = new SellingPartnerApiForProductFees.FeesEstimateResult();
    } catch (e) {
     //Handle the cases when this model extends another model by using Model.call(this);
     instance = Object.create(SellingPartnerApiForProductFees.FeesEstimateResult.prototype);
    }
  });

  afterEach(function() {
    instance = null;
  })

  describe('FeesEstimateResult', function() {
    it('should create an instance of FeesEstimateResult', function() {
      expect(instance).to.be.a(SellingPartnerApiForProductFees.FeesEstimateResult);
    });

    it('should have the property status (base name: "Status")', function() {
      // verify property exists
      expect(instance).to.have.property('status');

      // set and verify value
      var validValue = generateMockData('String');
      instance.status = validValue;
      expect(instance.status).to.equal(validValue);
    });

    it('should have the property feesEstimateIdentifier (base name: "FeesEstimateIdentifier")', function() {
      // verify property exists
      expect(instance).to.have.property('feesEstimateIdentifier');

      // set and verify value
      var validValue = generateMockData('FeesEstimateIdentifier');
      instance.feesEstimateIdentifier = validValue;
      expect(instance.feesEstimateIdentifier).to.equal(validValue);
    });

    it('should have the property feesEstimate (base name: "FeesEstimate")', function() {
      // verify property exists
      expect(instance).to.have.property('feesEstimate');

      // set and verify value
      var validValue = generateMockData('FeesEstimate');
      instance.feesEstimate = validValue;
      expect(instance.feesEstimate).to.equal(validValue);
    });

    it('should have the property error (base name: "Error")', function() {
      // verify property exists
      expect(instance).to.have.property('error');

      // set and verify value
      var validValue = generateMockData('FeesEstimateError');
      instance.error = validValue;
      expect(instance.error).to.equal(validValue);
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
          const ModelClass = SellingPartnerApiForProductFees[dataType];
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
