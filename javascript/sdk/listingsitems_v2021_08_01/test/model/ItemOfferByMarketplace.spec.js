/**
 * Selling Partner API for Listings Items
 * The Selling Partner API for Listings Items (Listings Items API) provides programmatic access to selling partner listings on Amazon. Use this API in collaboration with the Selling Partner API for Product Type Definitions, which you use to retrieve the information about Amazon product types needed to use the Listings Items API.  For more information, see the [Listings Items API Use Case Guide](https://developer-docs.amazon.com/sp-api/docs/listings-items-api-v2021-08-01-use-case-guide).
 *
 * The version of the OpenAPI document: 2021-08-01
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
    factory(root.expect, root.SellingPartnerApiForListingsItems);
  }
}(this, function(expect, SellingPartnerApiForListingsItems) {
  'use strict';

  var instance;

  beforeEach(function() {
    try{
     instance = new SellingPartnerApiForListingsItems.ItemOfferByMarketplace();
    } catch (e) {
     //Handle the cases when this model extends another model by using Model.call(this);
     instance = Object.create(SellingPartnerApiForListingsItems.ItemOfferByMarketplace.prototype);
    }
  });

  afterEach(function() {
    instance = null;
  })

  describe('ItemOfferByMarketplace', function() {
    it('should create an instance of ItemOfferByMarketplace', function() {
      expect(instance).to.be.a(SellingPartnerApiForListingsItems.ItemOfferByMarketplace);
    });

    it('should have the property marketplaceId (base name: "marketplaceId")', function() {
      // verify property exists
      expect(instance).to.have.property('marketplaceId');

      // set and verify value
      var validValue = generateMockData('String');
      instance.marketplaceId = validValue;
      expect(instance.marketplaceId).to.equal(validValue);
    });

    it('should have the property offerType (base name: "offerType")', function() {
      // verify property exists
      expect(instance).to.have.property('offerType');

      // set and verify value
      var validValue = ['B2C', 'B2B', ][0];
      instance.offerType = validValue;
      expect(instance.offerType).to.equal(validValue);
    });

    it('should have the property price (base name: "price")', function() {
      // verify property exists
      expect(instance).to.have.property('price');

      // set and verify value
      var validValue = generateMockData('Money');
      instance.price = validValue;
      expect(instance.price).to.equal(validValue);
    });

    it('should have the property points (base name: "points")', function() {
      // verify property exists
      expect(instance).to.have.property('points');

      // set and verify value
      var validValue = generateMockData('Points');
      instance.points = validValue;
      expect(instance.points).to.equal(validValue);
    });

    it('should have the property audience (base name: "audience")', function() {
      // verify property exists
      expect(instance).to.have.property('audience');

      // set and verify value
      var validValue = generateMockData('Audience');
      instance.audience = validValue;
      expect(instance.audience).to.equal(validValue);
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
          const ModelClass = SellingPartnerApiForListingsItems[dataType];
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
