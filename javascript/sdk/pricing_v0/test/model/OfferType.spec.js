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
     instance = new SellingPartnerApiForPricing.OfferType();
    } catch (e) {
     //Handle the cases when this model extends another model by using Model.call(this);
     instance = Object.create(SellingPartnerApiForPricing.OfferType.prototype);
    }
  });

  afterEach(function() {
    instance = null;
  })

  describe('OfferType', function() {
    it('should create an instance of OfferType', function() {
      expect(instance).to.be.a(SellingPartnerApiForPricing.OfferType);
    });

    it('should have the property offerType (base name: "offerType")', function() {
      // verify property exists
      expect(instance).to.have.property('offerType');

      // set and verify value
      var validValue = generateMockData('OfferCustomerType');
      instance.offerType = validValue;
      expect(instance.offerType).to.equal(validValue);
    });

    it('should have the property buyingPrice (base name: "BuyingPrice")', function() {
      // verify property exists
      expect(instance).to.have.property('buyingPrice');

      // set and verify value
      var validValue = generateMockData('PriceType');
      instance.buyingPrice = validValue;
      expect(instance.buyingPrice).to.equal(validValue);
    });

    it('should have the property regularPrice (base name: "RegularPrice")', function() {
      // verify property exists
      expect(instance).to.have.property('regularPrice');

      // set and verify value
      var validValue = generateMockData('MoneyType');
      instance.regularPrice = validValue;
      expect(instance.regularPrice).to.equal(validValue);
    });

    it('should have the property businessPrice (base name: "businessPrice")', function() {
      // verify property exists
      expect(instance).to.have.property('businessPrice');

      // set and verify value
      var validValue = generateMockData('MoneyType');
      instance.businessPrice = validValue;
      expect(instance.businessPrice).to.equal(validValue);
    });

    it('should have the property quantityDiscountPrices (base name: "quantityDiscountPrices")', function() {
      // verify property exists
      expect(instance).to.have.property('quantityDiscountPrices');

      // set and verify value
      var validValue = generateMockData('[QuantityDiscountPriceType]', true);
      instance.quantityDiscountPrices = validValue;
      expect(instance.quantityDiscountPrices).to.equal(validValue);
    });

    it('should have the property fulfillmentChannel (base name: "FulfillmentChannel")', function() {
      // verify property exists
      expect(instance).to.have.property('fulfillmentChannel');

      // set and verify value
      var validValue = generateMockData('String');
      instance.fulfillmentChannel = validValue;
      expect(instance.fulfillmentChannel).to.equal(validValue);
    });

    it('should have the property itemCondition (base name: "ItemCondition")', function() {
      // verify property exists
      expect(instance).to.have.property('itemCondition');

      // set and verify value
      var validValue = generateMockData('String');
      instance.itemCondition = validValue;
      expect(instance.itemCondition).to.equal(validValue);
    });

    it('should have the property itemSubCondition (base name: "ItemSubCondition")', function() {
      // verify property exists
      expect(instance).to.have.property('itemSubCondition');

      // set and verify value
      var validValue = generateMockData('String');
      instance.itemSubCondition = validValue;
      expect(instance.itemSubCondition).to.equal(validValue);
    });

    it('should have the property sellerSKU (base name: "SellerSKU")', function() {
      // verify property exists
      expect(instance).to.have.property('sellerSKU');

      // set and verify value
      var validValue = generateMockData('String');
      instance.sellerSKU = validValue;
      expect(instance.sellerSKU).to.equal(validValue);
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
