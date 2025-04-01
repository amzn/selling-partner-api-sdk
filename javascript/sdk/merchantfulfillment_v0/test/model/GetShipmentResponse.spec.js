/**
 * Selling Partner API for Merchant Fulfillment
 * With the Selling Partner API for Merchant Fulfillment, you can build applications that sellers can use to purchase shipping for non-Prime and Prime orders using Amazon's Buy Shipping Services.
 *
 * The version of the OpenAPI document: v0
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
    factory(root.expect, root.SellingPartnerApiForMerchantFulfillment);
  }
}(this, function(expect, SellingPartnerApiForMerchantFulfillment) {
  'use strict';

  var instance;

  beforeEach(function() {
    try{
     instance = new SellingPartnerApiForMerchantFulfillment.GetShipmentResponse();
    } catch (e) {
     //Handle the cases when this model extends another model by using Model.call(this);
     instance = Object.create(SellingPartnerApiForMerchantFulfillment.GetShipmentResponse.prototype);
    }
  });

  afterEach(function() {
    instance = null;
  })

  describe('GetShipmentResponse', function() {
    it('should create an instance of GetShipmentResponse', function() {
      expect(instance).to.be.a(SellingPartnerApiForMerchantFulfillment.GetShipmentResponse);
    });

    it('should have the property payload (base name: "payload")', function() {
      // verify property exists
      expect(instance).to.have.property('payload');

      // set and verify value
      var validValue = generateMockData('Shipment');
      instance.payload = validValue;
      expect(instance.payload).to.equal(validValue);
    });

    it('should have the property errors (base name: "errors")', function() {
      // verify property exists
      expect(instance).to.have.property('errors');

      // set and verify value
      var validValue = generateMockData('[Error]', true);
      instance.errors = validValue;
      expect(instance.errors).to.equal(validValue);
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
          const ModelClass = SellingPartnerApiForMerchantFulfillment[dataType];
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
