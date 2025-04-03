/**
 * Selling Partner API for Replenishment
 * The Selling Partner API for Replenishment (Replenishment API) provides programmatic access to replenishment program metrics and offers. These programs provide recurring delivery of any replenishable item at a frequency chosen by the customer.  The Replenishment API is available worldwide wherever Amazon Subscribe & Save is available or is supported. The API is available to vendors and FBA selling partners.
 *
 * The version of the OpenAPI document: 2022-11-07
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
    factory(root.expect, root.SellingPartnerApiForReplenishment);
  }
}(this, function(expect, SellingPartnerApiForReplenishment) {
  'use strict';

  var instance;

  beforeEach(function() {
    try{
     instance = new SellingPartnerApiForReplenishment.Error();
    } catch (e) {
     //Handle the cases when this model extends another model by using Model.call(this);
     instance = Object.create(SellingPartnerApiForReplenishment.Error.prototype);
    }
  });

  afterEach(function() {
    instance = null;
  })

  describe('Error', function() {
    it('should create an instance of Error', function() {
      expect(instance).to.be.a(SellingPartnerApiForReplenishment.Error);
    });

    it('should have the property code', function() {
      // verify property exists
      expect(instance).to.have.property('code');

      // set and verify value
      var expectedValue = generateMockData('String');
      instance.code = expectedValue;
      expect(instance.code).to.equal(expectedValue);
    });

    it('should have the property message', function() {
      // verify property exists
      expect(instance).to.have.property('message');

      // set and verify value
      var expectedValue = generateMockData('String');
      instance.message = expectedValue;
      expect(instance.message).to.equal(expectedValue);
    });

    it('should have the property details', function() {
      // verify property exists
      expect(instance).to.have.property('details');

      // set and verify value
      var expectedValue = generateMockData('String');
      instance.details = expectedValue;
      expect(instance.details).to.equal(expectedValue);
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
          const ModelClass = SellingPartnerApiForReplenishment[dataType];
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
