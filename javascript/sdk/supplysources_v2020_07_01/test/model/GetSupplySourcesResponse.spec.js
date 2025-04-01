/**
 * Selling Partner API for Supply Sources
 * Manage configurations and capabilities of seller supply sources.
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
    factory(root.expect, root.SellingPartnerApiForSupplySources);
  }
}(this, function(expect, SellingPartnerApiForSupplySources) {
  'use strict';

  var instance;

  beforeEach(function() {
    try{
     instance = new SellingPartnerApiForSupplySources.GetSupplySourcesResponse();
    } catch (e) {
     //Handle the cases when this model extends another model by using Model.call(this);
     instance = Object.create(SellingPartnerApiForSupplySources.GetSupplySourcesResponse.prototype);
    }
  });

  afterEach(function() {
    instance = null;
  })

  describe('GetSupplySourcesResponse', function() {
    it('should create an instance of GetSupplySourcesResponse', function() {
      expect(instance).to.be.a(SellingPartnerApiForSupplySources.GetSupplySourcesResponse);
    });

    it('should have the property supplySources (base name: "supplySources")', function() {
      // verify property exists
      expect(instance).to.have.property('supplySources');

      // set and verify value
      var validValue = generateMockData('[SupplySourceListInner]', true);
      instance.supplySources = validValue;
      expect(instance.supplySources).to.equal(validValue);
    });

    it('should have the property nextPageToken (base name: "nextPageToken")', function() {
      // verify property exists
      expect(instance).to.have.property('nextPageToken');

      // set and verify value
      var validValue = generateMockData('String');
      instance.nextPageToken = validValue;
      expect(instance.nextPageToken).to.equal(validValue);
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
          const ModelClass = SellingPartnerApiForSupplySources[dataType];
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
