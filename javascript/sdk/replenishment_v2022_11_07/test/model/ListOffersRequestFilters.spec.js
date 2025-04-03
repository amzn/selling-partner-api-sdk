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
     instance = new SellingPartnerApiForReplenishment.ListOffersRequestFilters();
    } catch (e) {
     //Handle the cases when this model extends another model by using Model.call(this);
     instance = Object.create(SellingPartnerApiForReplenishment.ListOffersRequestFilters.prototype);
    }
  });

  afterEach(function() {
    instance = null;
  })

  describe('ListOffersRequestFilters', function() {
    it('should create an instance of ListOffersRequestFilters', function() {
      expect(instance).to.be.a(SellingPartnerApiForReplenishment.ListOffersRequestFilters);
    });

    it('should have the property marketplaceId', function() {
      // verify property exists
      expect(instance).to.have.property('marketplaceId');

      // set and verify value
      var expectedValue = generateMockData('String');
      instance.marketplaceId = expectedValue;
      expect(instance.marketplaceId).to.equal(expectedValue);
    });

    it('should have the property skus', function() {
      // verify property exists
      expect(instance).to.have.property('skus');

      // set and verify value
      var expectedValue = generateMockData('String', true);
      instance.skus = expectedValue;
      expect(instance.skus).to.equal(expectedValue);
    });

    it('should have the property asins', function() {
      // verify property exists
      expect(instance).to.have.property('asins');

      // set and verify value
      var expectedValue = generateMockData('String', true);
      instance.asins = expectedValue;
      expect(instance.asins).to.equal(expectedValue);
    });

    it('should have the property eligibilities', function() {
      // verify property exists
      expect(instance).to.have.property('eligibilities');

      // set and verify value
      var expectedValue = generateMockData('EligibilityStatus', true);
      instance.eligibilities = expectedValue;
      expect(instance.eligibilities).to.equal(expectedValue);
    });

    it('should have the property preferences', function() {
      // verify property exists
      expect(instance).to.have.property('preferences');

      // set and verify value
      var expectedValue = generateMockData('Preference');
      instance.preferences = expectedValue;
      expect(instance.preferences).to.equal(expectedValue);
    });

    it('should have the property promotions', function() {
      // verify property exists
      expect(instance).to.have.property('promotions');

      // set and verify value
      var expectedValue = generateMockData('Promotion');
      instance.promotions = expectedValue;
      expect(instance.promotions).to.equal(expectedValue);
    });

    it('should have the property programTypes', function() {
      // verify property exists
      expect(instance).to.have.property('programTypes');

      // set and verify value
      var expectedValue = generateMockData('ProgramType', true);
      instance.programTypes = expectedValue;
      expect(instance.programTypes).to.equal(expectedValue);
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
