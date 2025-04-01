/**
 * Selling Partner API for FBA Inventory
 * The Selling Partner API for FBA Inventory lets you programmatically retrieve information about inventory in Amazon's fulfillment network.
 *
 * The version of the OpenAPI document: v1
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
    factory(root.expect, root.SellingPartnerApiForFbaInventory);
  }
}(this, function(expect, SellingPartnerApiForFbaInventory) {
  'use strict';

  var instance;

  beforeEach(function() {
    try{
     instance = new SellingPartnerApiForFbaInventory.ResearchingQuantity();
    } catch (e) {
     //Handle the cases when this model extends another model by using Model.call(this);
     instance = Object.create(SellingPartnerApiForFbaInventory.ResearchingQuantity.prototype);
    }
  });

  afterEach(function() {
    instance = null;
  })

  describe('ResearchingQuantity', function() {
    it('should create an instance of ResearchingQuantity', function() {
      expect(instance).to.be.a(SellingPartnerApiForFbaInventory.ResearchingQuantity);
    });

    it('should have the property totalResearchingQuantity (base name: "totalResearchingQuantity")', function() {
      // verify property exists
      expect(instance).to.have.property('totalResearchingQuantity');

      // set and verify value
      var validValue = generateMockData('Number');
      instance.totalResearchingQuantity = validValue;
      expect(instance.totalResearchingQuantity).to.equal(validValue);
    });

    it('should have the property researchingQuantityBreakdown (base name: "researchingQuantityBreakdown")', function() {
      // verify property exists
      expect(instance).to.have.property('researchingQuantityBreakdown');

      // set and verify value
      var validValue = generateMockData('[ResearchingQuantityEntry]', true);
      instance.researchingQuantityBreakdown = validValue;
      expect(instance.researchingQuantityBreakdown).to.equal(validValue);
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
          const ModelClass = SellingPartnerApiForFbaInventory[dataType];
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
