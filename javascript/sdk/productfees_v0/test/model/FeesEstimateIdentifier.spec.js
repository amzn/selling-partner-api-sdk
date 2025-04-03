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

    it('should have the property marketplaceId', function() {
      // verify property exists
      expect(instance).to.have.property('marketplaceId');

      // set and verify value
      var expectedValue = generateMockData('String');
      instance.marketplaceId = expectedValue;
      expect(instance.marketplaceId).to.equal(expectedValue);
    });

    it('should have the property sellerId', function() {
      // verify property exists
      expect(instance).to.have.property('sellerId');

      // set and verify value
      var expectedValue = generateMockData('String');
      instance.sellerId = expectedValue;
      expect(instance.sellerId).to.equal(expectedValue);
    });

    it('should have the property idType', function() {
      // verify property exists
      expect(instance).to.have.property('idType');

      // set and verify value
      var expectedValue = generateMockData('IdType');
      instance.idType = expectedValue;
      expect(instance.idType).to.equal(expectedValue);
    });

    it('should have the property idValue', function() {
      // verify property exists
      expect(instance).to.have.property('idValue');

      // set and verify value
      var expectedValue = generateMockData('String');
      instance.idValue = expectedValue;
      expect(instance.idValue).to.equal(expectedValue);
    });

    it('should have the property isAmazonFulfilled', function() {
      // verify property exists
      expect(instance).to.have.property('isAmazonFulfilled');

      // set and verify value
      var expectedValue = generateMockData('Boolean');
      instance.isAmazonFulfilled = expectedValue;
      expect(instance.isAmazonFulfilled).to.equal(expectedValue);
    });

    it('should have the property priceToEstimateFees', function() {
      // verify property exists
      expect(instance).to.have.property('priceToEstimateFees');

      // set and verify value
      var expectedValue = generateMockData('PriceToEstimateFees');
      instance.priceToEstimateFees = expectedValue;
      expect(instance.priceToEstimateFees).to.equal(expectedValue);
    });

    it('should have the property sellerInputIdentifier', function() {
      // verify property exists
      expect(instance).to.have.property('sellerInputIdentifier');

      // set and verify value
      var expectedValue = generateMockData('String');
      instance.sellerInputIdentifier = expectedValue;
      expect(instance.sellerInputIdentifier).to.equal(expectedValue);
    });

    it('should have the property optionalFulfillmentProgram', function() {
      // verify property exists
      expect(instance).to.have.property('optionalFulfillmentProgram');

      // set and verify value
      var expectedValue = generateMockData('OptionalFulfillmentProgram');
      instance.optionalFulfillmentProgram = expectedValue;
      expect(instance.optionalFulfillmentProgram).to.equal(expectedValue);
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
