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
     instance = new SellingPartnerApiForProductFees.FeesEstimateIdentifier();
    } catch (e) {
     //Handle the cases when this model extends another model by using Model.call(this);
     instance = Object.create(SellingPartnerApiForProductFees.FeesEstimateIdentifier.prototype);
    }
  });

  afterEach(function() {
    instance = null;
  })

  describe('FeesEstimateIdentifier', function() {
    it('should create an instance of FeesEstimateIdentifier', function() {
      expect(instance).to.be.a(SellingPartnerApiForProductFees.FeesEstimateIdentifier);
    });

    it('should have the property marketplaceId (base name: "MarketplaceId")', function() {
      // verify property exists
      expect(instance).to.have.property('marketplaceId');

      // set and verify value
      var validValue = generateMockData('String');
      instance.marketplaceId = validValue;
      expect(instance.marketplaceId).to.equal(validValue);
    });

    it('should have the property sellerId (base name: "SellerId")', function() {
      // verify property exists
      expect(instance).to.have.property('sellerId');

      // set and verify value
      var validValue = generateMockData('String');
      instance.sellerId = validValue;
      expect(instance.sellerId).to.equal(validValue);
    });

    it('should have the property idType (base name: "IdType")', function() {
      // verify property exists
      expect(instance).to.have.property('idType');

      // set and verify value
      var validValue = generateMockData('IdType');
      instance.idType = validValue;
      expect(instance.idType).to.equal(validValue);
    });

    it('should have the property idValue (base name: "IdValue")', function() {
      // verify property exists
      expect(instance).to.have.property('idValue');

      // set and verify value
      var validValue = generateMockData('String');
      instance.idValue = validValue;
      expect(instance.idValue).to.equal(validValue);
    });

    it('should have the property isAmazonFulfilled (base name: "IsAmazonFulfilled")', function() {
      // verify property exists
      expect(instance).to.have.property('isAmazonFulfilled');

      // set and verify value
      var validValue = generateMockData('Boolean');
      instance.isAmazonFulfilled = validValue;
      expect(instance.isAmazonFulfilled).to.equal(validValue);
    });

    it('should have the property priceToEstimateFees (base name: "PriceToEstimateFees")', function() {
      // verify property exists
      expect(instance).to.have.property('priceToEstimateFees');

      // set and verify value
      var validValue = generateMockData('PriceToEstimateFees');
      instance.priceToEstimateFees = validValue;
      expect(instance.priceToEstimateFees).to.equal(validValue);
    });

    it('should have the property sellerInputIdentifier (base name: "SellerInputIdentifier")', function() {
      // verify property exists
      expect(instance).to.have.property('sellerInputIdentifier');

      // set and verify value
      var validValue = generateMockData('String');
      instance.sellerInputIdentifier = validValue;
      expect(instance.sellerInputIdentifier).to.equal(validValue);
    });

    it('should have the property optionalFulfillmentProgram (base name: "OptionalFulfillmentProgram")', function() {
      // verify property exists
      expect(instance).to.have.property('optionalFulfillmentProgram');

      // set and verify value
      var validValue = generateMockData('OptionalFulfillmentProgram');
      instance.optionalFulfillmentProgram = validValue;
      expect(instance.optionalFulfillmentProgram).to.equal(validValue);
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
