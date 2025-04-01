/**
 * Selling Partner API for Direct Fulfillment Orders
 * The Selling Partner API for Direct Fulfillment Orders provides programmatic access to a direct fulfillment vendor's order data.
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
    factory(root.expect, root.SellingPartnerApiForDirectFulfillmentOrders);
  }
}(this, function(expect, SellingPartnerApiForDirectFulfillmentOrders) {
  'use strict';

  var instance;

  beforeEach(function() {
    try{
     instance = new SellingPartnerApiForDirectFulfillmentOrders.AcknowledgementStatus();
    } catch (e) {
     //Handle the cases when this model extends another model by using Model.call(this);
     instance = Object.create(SellingPartnerApiForDirectFulfillmentOrders.AcknowledgementStatus.prototype);
    }
  });

  afterEach(function() {
    instance = null;
  })

  describe('AcknowledgementStatus', function() {
    it('should create an instance of AcknowledgementStatus', function() {
      expect(instance).to.be.a(SellingPartnerApiForDirectFulfillmentOrders.AcknowledgementStatus);
    });

    it('should have the property code (base name: "code")', function() {
      // verify property exists
      expect(instance).to.have.property('code');

      // set and verify value
      var validValue = generateMockData('String');
      instance.code = validValue;
      expect(instance.code).to.equal(validValue);
    });

    it('should have the property description (base name: "description")', function() {
      // verify property exists
      expect(instance).to.have.property('description');

      // set and verify value
      var validValue = generateMockData('String');
      instance.description = validValue;
      expect(instance.description).to.equal(validValue);
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
          const ModelClass = SellingPartnerApiForDirectFulfillmentOrders[dataType];
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
