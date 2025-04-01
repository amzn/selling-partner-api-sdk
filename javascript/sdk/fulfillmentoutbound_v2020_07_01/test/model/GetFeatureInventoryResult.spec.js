/**
 * Selling Partner APIs for Fulfillment Outbound
 * The Selling Partner API for Fulfillment Outbound lets you create applications that help a seller fulfill Multi-Channel Fulfillment orders using their inventory in Amazon's fulfillment network. You can get information on both potential and existing fulfillment orders.
 *
 * The version of the OpenAPI document: 2020-07-01
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
    factory(root.expect, root.SellingPartnerApisForFulfillmentOutbound);
  }
}(this, function(expect, SellingPartnerApisForFulfillmentOutbound) {
  'use strict';

  var instance;

  beforeEach(function() {
    try{
     instance = new SellingPartnerApisForFulfillmentOutbound.GetFeatureInventoryResult();
    } catch (e) {
     //Handle the cases when this model extends another model by using Model.call(this);
     instance = Object.create(SellingPartnerApisForFulfillmentOutbound.GetFeatureInventoryResult.prototype);
    }
  });

  afterEach(function() {
    instance = null;
  })

  describe('GetFeatureInventoryResult', function() {
    it('should create an instance of GetFeatureInventoryResult', function() {
      expect(instance).to.be.a(SellingPartnerApisForFulfillmentOutbound.GetFeatureInventoryResult);
    });

    it('should have the property marketplaceId (base name: "marketplaceId")', function() {
      // verify property exists
      expect(instance).to.have.property('marketplaceId');

      // set and verify value
      var validValue = generateMockData('String');
      instance.marketplaceId = validValue;
      expect(instance.marketplaceId).to.equal(validValue);
    });

    it('should have the property featureName (base name: "featureName")', function() {
      // verify property exists
      expect(instance).to.have.property('featureName');

      // set and verify value
      var validValue = generateMockData('String');
      instance.featureName = validValue;
      expect(instance.featureName).to.equal(validValue);
    });

    it('should have the property nextToken (base name: "nextToken")', function() {
      // verify property exists
      expect(instance).to.have.property('nextToken');

      // set and verify value
      var validValue = generateMockData('String');
      instance.nextToken = validValue;
      expect(instance.nextToken).to.equal(validValue);
    });

    it('should have the property featureSkus (base name: "featureSkus")', function() {
      // verify property exists
      expect(instance).to.have.property('featureSkus');

      // set and verify value
      var validValue = generateMockData('[FeatureSku]', true);
      instance.featureSkus = validValue;
      expect(instance.featureSkus).to.equal(validValue);
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
          const ModelClass = SellingPartnerApisForFulfillmentOutbound[dataType];
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
