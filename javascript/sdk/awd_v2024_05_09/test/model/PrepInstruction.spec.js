/**
 * The Selling Partner API for Amazon Warehousing and Distribution
 * The Selling Partner API for Amazon Warehousing and Distribution (AWD) provides programmatic access to information about AWD shipments and inventory.
 *
 * The version of the OpenAPI document: 2024-05-09
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
    factory(root.expect, root.TheSellingPartnerApiForAmazonWarehousingAndDistribution);
  }
}(this, function(expect, TheSellingPartnerApiForAmazonWarehousingAndDistribution) {
  'use strict';

  var instance;

  beforeEach(function() {
    try{
     instance = new TheSellingPartnerApiForAmazonWarehousingAndDistribution.PrepInstruction();
    } catch (e) {
     //Handle the cases when this model extends another model by using Model.call(this);
     instance = Object.create(TheSellingPartnerApiForAmazonWarehousingAndDistribution.PrepInstruction.prototype);
    }
  });

  afterEach(function() {
    instance = null;
  })

  describe('PrepInstruction', function() {
    it('should create an instance of PrepInstruction', function() {
      expect(instance).to.be.a(TheSellingPartnerApiForAmazonWarehousingAndDistribution.PrepInstruction);
    });

    it('should have the property prepOwner', function() {
      // verify property exists
      expect(instance).to.have.property('prepOwner');

      // set and verify value
      var expectedValue = generateMockData('PrepOwner');
      instance.prepOwner = expectedValue;
      expect(instance.prepOwner).to.equal(expectedValue);
    });

    it('should have the property prepType', function() {
      // verify property exists
      expect(instance).to.have.property('prepType');

      // set and verify value
      var expectedValue = generateMockData('String');
      instance.prepType = expectedValue;
      expect(instance.prepType).to.equal(expectedValue);
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
          const ModelClass = TheSellingPartnerApiForAmazonWarehousingAndDistribution[dataType];
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
