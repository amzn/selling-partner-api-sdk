/**
 * Selling Partner API for Catalog Items
 * Use the Selling Partner API for Catalog Items to retrieve information about items in the Amazon catalog.  For more information, refer to the [Catalog Items API Use Case Guide](https://developer-docs.amazon.com/sp-api/docs/:catalog-items-api-v2022-04-01-use-case-guide).
 *
 * The version of the OpenAPI document: 2022-04-01
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
    factory(root.expect, root.SellingPartnerApiForCatalogItems);
  }
}(this, function(expect, SellingPartnerApiForCatalogItems) {
  'use strict';

  var instance;

  beforeEach(function() {
    try{
     instance = new SellingPartnerApiForCatalogItems.ItemSearchResults();
    } catch (e) {
     //Handle the cases when this model extends another model by using Model.call(this);
     instance = Object.create(SellingPartnerApiForCatalogItems.ItemSearchResults.prototype);
    }
  });

  afterEach(function() {
    instance = null;
  })

  describe('ItemSearchResults', function() {
    it('should create an instance of ItemSearchResults', function() {
      expect(instance).to.be.a(SellingPartnerApiForCatalogItems.ItemSearchResults);
    });

    it('should have the property numberOfResults (base name: "numberOfResults")', function() {
      // verify property exists
      expect(instance).to.have.property('numberOfResults');

      // set and verify value
      var validValue = generateMockData('Number');
      instance.numberOfResults = validValue;
      expect(instance.numberOfResults).to.equal(validValue);
    });

    it('should have the property pagination (base name: "pagination")', function() {
      // verify property exists
      expect(instance).to.have.property('pagination');

      // set and verify value
      var validValue = generateMockData('Pagination');
      instance.pagination = validValue;
      expect(instance.pagination).to.equal(validValue);
    });

    it('should have the property refinements (base name: "refinements")', function() {
      // verify property exists
      expect(instance).to.have.property('refinements');

      // set and verify value
      var validValue = generateMockData('Refinements');
      instance.refinements = validValue;
      expect(instance.refinements).to.equal(validValue);
    });

    it('should have the property items (base name: "items")', function() {
      // verify property exists
      expect(instance).to.have.property('items');

      // set and verify value
      var validValue = generateMockData('[Item]', true);
      instance.items = validValue;
      expect(instance.items).to.equal(validValue);
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
          const ModelClass = SellingPartnerApiForCatalogItems[dataType];
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
