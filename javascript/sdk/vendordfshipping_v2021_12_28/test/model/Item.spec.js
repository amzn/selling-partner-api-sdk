/**
 * Selling Partner API for Direct Fulfillment Shipping
 * Use the Selling Partner API for Direct Fulfillment Shipping to access a direct fulfillment vendor's shipping data.
 *
 * The version of the OpenAPI document: 2021-12-28
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
    factory(root.expect, root.SellingPartnerApiForDirectFulfillmentShipping);
  }
}(this, function(expect, SellingPartnerApiForDirectFulfillmentShipping) {
  'use strict';

  var instance;

  beforeEach(function() {
    try{
     instance = new SellingPartnerApiForDirectFulfillmentShipping.Item();
    } catch (e) {
     //Handle the cases when this model extends another model by using Model.call(this);
     instance = Object.create(SellingPartnerApiForDirectFulfillmentShipping.Item.prototype);
    }
  });

  afterEach(function() {
    instance = null;
  })

  describe('Item', function() {
    it('should create an instance of Item', function() {
      expect(instance).to.be.a(SellingPartnerApiForDirectFulfillmentShipping.Item);
    });

    it('should have the property itemSequenceNumber (base name: "itemSequenceNumber")', function() {
      // verify property exists
      expect(instance).to.have.property('itemSequenceNumber');

      // set and verify value
      var validValue = generateMockData('Number');
      instance.itemSequenceNumber = validValue;
      expect(instance.itemSequenceNumber).to.equal(validValue);
    });

    it('should have the property buyerProductIdentifier (base name: "buyerProductIdentifier")', function() {
      // verify property exists
      expect(instance).to.have.property('buyerProductIdentifier');

      // set and verify value
      var validValue = generateMockData('String');
      instance.buyerProductIdentifier = validValue;
      expect(instance.buyerProductIdentifier).to.equal(validValue);
    });

    it('should have the property vendorProductIdentifier (base name: "vendorProductIdentifier")', function() {
      // verify property exists
      expect(instance).to.have.property('vendorProductIdentifier');

      // set and verify value
      var validValue = generateMockData('String');
      instance.vendorProductIdentifier = validValue;
      expect(instance.vendorProductIdentifier).to.equal(validValue);
    });

    it('should have the property shippedQuantity (base name: "shippedQuantity")', function() {
      // verify property exists
      expect(instance).to.have.property('shippedQuantity');

      // set and verify value
      var validValue = generateMockData('ItemQuantity');
      instance.shippedQuantity = validValue;
      expect(instance.shippedQuantity).to.equal(validValue);
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
          const ModelClass = SellingPartnerApiForDirectFulfillmentShipping[dataType];
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
