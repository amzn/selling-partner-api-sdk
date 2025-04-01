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
     instance = new SellingPartnerApiForPricing.LowestPriceType();
    } catch (e) {
     //Handle the cases when this model extends another model by using Model.call(this);
     instance = Object.create(SellingPartnerApiForPricing.LowestPriceType.prototype);
    }
  });

  afterEach(function() {
    instance = null;
  })

  describe('LowestPriceType', function() {
    it('should create an instance of LowestPriceType', function() {
      expect(instance).to.be.a(SellingPartnerApiForPricing.LowestPriceType);
    });

    it('should have the property condition (base name: "condition")', function() {
      // verify property exists
      expect(instance).to.have.property('condition');

      // set and verify value
      var validValue = generateMockData('String');
      instance.condition = validValue;
      expect(instance.condition).to.equal(validValue);
    });

    it('should have the property fulfillmentChannel (base name: "fulfillmentChannel")', function() {
      // verify property exists
      expect(instance).to.have.property('fulfillmentChannel');

      // set and verify value
      var validValue = generateMockData('String');
      instance.fulfillmentChannel = validValue;
      expect(instance.fulfillmentChannel).to.equal(validValue);
    });

    it('should have the property offerType (base name: "offerType")', function() {
      // verify property exists
      expect(instance).to.have.property('offerType');

      // set and verify value
      var validValue = generateMockData('OfferCustomerType');
      instance.offerType = validValue;
      expect(instance.offerType).to.equal(validValue);
    });

    it('should have the property quantityTier (base name: "quantityTier")', function() {
      // verify property exists
      expect(instance).to.have.property('quantityTier');

      // set and verify value
      var validValue = generateMockData('Number');
      instance.quantityTier = validValue;
      expect(instance.quantityTier).to.equal(validValue);
    });

    it('should have the property quantityDiscountType (base name: "quantityDiscountType")', function() {
      // verify property exists
      expect(instance).to.have.property('quantityDiscountType');

      // set and verify value
      var validValue = generateMockData('QuantityDiscountType');
      instance.quantityDiscountType = validValue;
      expect(instance.quantityDiscountType).to.equal(validValue);
    });

    it('should have the property landedPrice (base name: "LandedPrice")', function() {
      // verify property exists
      expect(instance).to.have.property('landedPrice');

      // set and verify value
      var validValue = generateMockData('MoneyType');
      instance.landedPrice = validValue;
      expect(instance.landedPrice).to.equal(validValue);
    });

    it('should have the property listingPrice (base name: "ListingPrice")', function() {
      // verify property exists
      expect(instance).to.have.property('listingPrice');

      // set and verify value
      var validValue = generateMockData('MoneyType');
      instance.listingPrice = validValue;
      expect(instance.listingPrice).to.equal(validValue);
    });

    it('should have the property shipping (base name: "Shipping")', function() {
      // verify property exists
      expect(instance).to.have.property('shipping');

      // set and verify value
      var validValue = generateMockData('MoneyType');
      instance.shipping = validValue;
      expect(instance.shipping).to.equal(validValue);
    });

    it('should have the property points (base name: "Points")', function() {
      // verify property exists
      expect(instance).to.have.property('points');

      // set and verify value
      var validValue = generateMockData('Points');
      instance.points = validValue;
      expect(instance.points).to.equal(validValue);
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
