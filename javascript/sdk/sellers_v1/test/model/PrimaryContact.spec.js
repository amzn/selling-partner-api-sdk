/**
 * The Selling Partner API for Sellers
 * The [Selling Partner API for Sellers](https://developer-docs.amazon.com/sp-api/docs/sellers-api-v1-reference) (Sellers API) provides essential information about seller accounts, such as:  - The marketplaces a seller can list in - The default language and currency of a marketplace - Whether the seller has suspended listings  Refer to the [Sellers API reference](https://developer-docs.amazon.com/sp-api/docs/sellers-api-v1-reference) for details about this API's operations, data types, and schemas.
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
    factory(root.expect, root.TheSellingPartnerApiForSellers);
  }
}(this, function(expect, TheSellingPartnerApiForSellers) {
  'use strict';

  var instance;

  beforeEach(function() {
    try{
     instance = new TheSellingPartnerApiForSellers.PrimaryContact();
    } catch (e) {
     //Handle the cases when this model extends another model by using Model.call(this);
     instance = Object.create(TheSellingPartnerApiForSellers.PrimaryContact.prototype);
    }
  });

  afterEach(function() {
    instance = null;
  })

  describe('PrimaryContact', function() {
    it('should create an instance of PrimaryContact', function() {
      expect(instance).to.be.a(TheSellingPartnerApiForSellers.PrimaryContact);
    });

    it('should have the property name (base name: "name")', function() {
      // verify property exists
      expect(instance).to.have.property('name');

      // set and verify value
      var validValue = generateMockData('String');
      instance.name = validValue;
      expect(instance.name).to.equal(validValue);
    });

    it('should have the property address (base name: "address")', function() {
      // verify property exists
      expect(instance).to.have.property('address');

      // set and verify value
      var validValue = generateMockData('Address');
      instance.address = validValue;
      expect(instance.address).to.equal(validValue);
    });

    it('should have the property nonLatinName (base name: "nonLatinName")', function() {
      // verify property exists
      expect(instance).to.have.property('nonLatinName');

      // set and verify value
      var validValue = generateMockData('String');
      instance.nonLatinName = validValue;
      expect(instance.nonLatinName).to.equal(validValue);
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
          const ModelClass = TheSellingPartnerApiForSellers[dataType];
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
