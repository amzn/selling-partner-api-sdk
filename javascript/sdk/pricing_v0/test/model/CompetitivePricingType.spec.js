/**
 * Selling Partner API for Pricing
 * The Selling Partner API for Pricing helps you programmatically retrieve product pricing and offer information for Amazon Marketplace products.
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
    factory(root.expect, root.SellingPartnerApiForPricing);
  }
}(this, function(expect, SellingPartnerApiForPricing) {
  'use strict';

  var instance;

  beforeEach(function() {
    try{
     instance = new SellingPartnerApiForPricing.CompetitivePricingType();
    } catch (e) {
     //Handle the cases when this model extends another model by using Model.call(this);
     instance = Object.create(SellingPartnerApiForPricing.CompetitivePricingType.prototype);
    }
  });

  afterEach(function() {
    instance = null;
  })

  describe('CompetitivePricingType', function() {
    it('should create an instance of CompetitivePricingType', function() {
      expect(instance).to.be.a(SellingPartnerApiForPricing.CompetitivePricingType);
    });

    it('should have the property competitivePrices', function() {
      // verify property exists
      expect(instance).to.have.property('competitivePrices');

      // set and verify value
      var expectedValue = generateMockData('CompetitivePriceType', true);
      instance.competitivePrices = expectedValue;
      expect(instance.competitivePrices).to.equal(expectedValue);
    });

    it('should have the property numberOfOfferListings', function() {
      // verify property exists
      expect(instance).to.have.property('numberOfOfferListings');

      // set and verify value
      var expectedValue = generateMockData('OfferListingCountType', true);
      instance.numberOfOfferListings = expectedValue;
      expect(instance.numberOfOfferListings).to.equal(expectedValue);
    });

    it('should have the property tradeInValue', function() {
      // verify property exists
      expect(instance).to.have.property('tradeInValue');

      // set and verify value
      var expectedValue = generateMockData('MoneyType');
      instance.tradeInValue = expectedValue;
      expect(instance.tradeInValue).to.equal(expectedValue);
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
          const ModelClass = SellingPartnerApiForPricing[dataType];
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
