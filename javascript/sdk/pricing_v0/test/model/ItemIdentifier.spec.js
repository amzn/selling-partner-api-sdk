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
     instance = new SellingPartnerApiForPricing.ItemIdentifier();
    } catch (e) {
     //Handle the cases when this model extends another model by using Model.call(this);
     instance = Object.create(SellingPartnerApiForPricing.ItemIdentifier.prototype);
    }
  });

  afterEach(function() {
    instance = null;
  })

  describe('ItemIdentifier', function() {
    it('should create an instance of ItemIdentifier', function() {
      expect(instance).to.be.a(SellingPartnerApiForPricing.ItemIdentifier);
    });

    it('should have the property marketplaceId', function() {
      // verify property exists
      expect(instance).to.have.property('marketplaceId');

      // set and verify value
      var expectedValue = generateMockData('String');
      instance.marketplaceId = expectedValue;
      expect(instance.marketplaceId).to.equal(expectedValue);
    });

    it('should have the property ASIN', function() {
      // verify property exists
      expect(instance).to.have.property('ASIN');

      // set and verify value
      var expectedValue = generateMockData('String');
      instance.ASIN = expectedValue;
      expect(instance.ASIN).to.equal(expectedValue);
    });

    it('should have the property sellerSKU', function() {
      // verify property exists
      expect(instance).to.have.property('sellerSKU');

      // set and verify value
      var expectedValue = generateMockData('String');
      instance.sellerSKU = expectedValue;
      expect(instance.sellerSKU).to.equal(expectedValue);
    });

    it('should have the property itemCondition', function() {
      // verify property exists
      expect(instance).to.have.property('itemCondition');

      // set and verify value
      var expectedValue = generateMockData('ConditionType');
      instance.itemCondition = expectedValue;
      expect(instance.itemCondition).to.equal(expectedValue);
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
