/**
 * Selling Partner API for Pricing
 * The Selling Partner API for Pricing helps you programmatically retrieve product pricing and offer pricing information for Amazon Marketplace products.  For more information, refer to the [Product Pricing v2022-05-01 Use Case Guide](https://developer-docs.amazon.com/sp-api/docs/product-pricing-api-v2022-05-01-use-case-guide).
 *
 * The version of the OpenAPI document: 2022-05-01
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
     instance = new SellingPartnerApiForPricing.FeaturedOfferExpectedPriceRequest();
    } catch (e) {
     //Handle the cases when this model extends another model by using Model.call(this);
     instance = Object.create(SellingPartnerApiForPricing.FeaturedOfferExpectedPriceRequest.prototype);
    }
  });

  afterEach(function() {
    instance = null;
  })

  describe('FeaturedOfferExpectedPriceRequest', function() {
    it('should create an instance of FeaturedOfferExpectedPriceRequest', function() {
      expect(instance).to.be.a(SellingPartnerApiForPricing.FeaturedOfferExpectedPriceRequest);
    });

    it('should have the property uri (base name: "uri")', function() {
      // verify property exists
      expect(instance).to.have.property('uri');

      // set and verify value
      var validValue = generateMockData('String');
      instance.uri = validValue;
      expect(instance.uri).to.equal(validValue);
    });

    it('should have the property method (base name: "method")', function() {
      // verify property exists
      expect(instance).to.have.property('method');

      // set and verify value
      var validValue = generateMockData('HttpMethod');
      instance.method = validValue;
      expect(instance.method).to.equal(validValue);
    });

    it('should have the property body (base name: "body")', function() {
      // verify property exists
      expect(instance).to.have.property('body');

      // set and verify value
      var validValue = generateMockData('{String: Object}');
      instance.body = validValue;
      expect(instance.body).to.equal(validValue);
    });

    it('should have the property headers (base name: "headers")', function() {
      // verify property exists
      expect(instance).to.have.property('headers');

      // set and verify value
      var validValue = generateMockData('{String: String}');
      instance.headers = validValue;
      expect(instance.headers).to.equal(validValue);
    });

    it('should have the property marketplaceId (base name: "marketplaceId")', function() {
      // verify property exists
      expect(instance).to.have.property('marketplaceId');

      // set and verify value
      var validValue = generateMockData('String');
      instance.marketplaceId = validValue;
      expect(instance.marketplaceId).to.equal(validValue);
    });

    it('should have the property sku (base name: "sku")', function() {
      // verify property exists
      expect(instance).to.have.property('sku');

      // set and verify value
      var validValue = generateMockData('String');
      instance.sku = validValue;
      expect(instance.sku).to.equal(validValue);
    });

    it('should have the property segment (base name: "segment")', function() {
      // verify property exists
      expect(instance).to.have.property('segment');

      // set and verify value
      var validValue = generateMockData('Segment');
      instance.segment = validValue;
      expect(instance.segment).to.equal(validValue);
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
