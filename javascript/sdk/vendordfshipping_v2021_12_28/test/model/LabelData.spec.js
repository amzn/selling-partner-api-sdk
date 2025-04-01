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
     instance = new SellingPartnerApiForDirectFulfillmentShipping.LabelData();
    } catch (e) {
     //Handle the cases when this model extends another model by using Model.call(this);
     instance = Object.create(SellingPartnerApiForDirectFulfillmentShipping.LabelData.prototype);
    }
  });

  afterEach(function() {
    instance = null;
  })

  describe('LabelData', function() {
    it('should create an instance of LabelData', function() {
      expect(instance).to.be.a(SellingPartnerApiForDirectFulfillmentShipping.LabelData);
    });

    it('should have the property packageIdentifier (base name: "packageIdentifier")', function() {
      // verify property exists
      expect(instance).to.have.property('packageIdentifier');

      // set and verify value
      var validValue = generateMockData('String');
      instance.packageIdentifier = validValue;
      expect(instance.packageIdentifier).to.equal(validValue);
    });

    it('should have the property trackingNumber (base name: "trackingNumber")', function() {
      // verify property exists
      expect(instance).to.have.property('trackingNumber');

      // set and verify value
      var validValue = generateMockData('String');
      instance.trackingNumber = validValue;
      expect(instance.trackingNumber).to.equal(validValue);
    });

    it('should have the property shipMethod (base name: "shipMethod")', function() {
      // verify property exists
      expect(instance).to.have.property('shipMethod');

      // set and verify value
      var validValue = generateMockData('String');
      instance.shipMethod = validValue;
      expect(instance.shipMethod).to.equal(validValue);
    });

    it('should have the property shipMethodName (base name: "shipMethodName")', function() {
      // verify property exists
      expect(instance).to.have.property('shipMethodName');

      // set and verify value
      var validValue = generateMockData('String');
      instance.shipMethodName = validValue;
      expect(instance.shipMethodName).to.equal(validValue);
    });

    it('should have the property content (base name: "content")', function() {
      // verify property exists
      expect(instance).to.have.property('content');

      // set and verify value
      var validValue = generateMockData('String');
      instance.content = validValue;
      expect(instance.content).to.equal(validValue);
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
