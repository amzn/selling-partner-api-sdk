/**
 * Selling Partner API for Direct Fulfillment Payments
 * The Selling Partner API for Direct Fulfillment Payments provides programmatic access to a direct fulfillment vendor's invoice data.
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
    factory(root.expect, root.SellingPartnerApiForDirectFulfillmentPayments);
  }
}(this, function(expect, SellingPartnerApiForDirectFulfillmentPayments) {
  'use strict';

  var instance;

  beforeEach(function() {
    try{
     instance = new SellingPartnerApiForDirectFulfillmentPayments.Error();
    } catch (e) {
     //Handle the cases when this model extends another model by using Model.call(this);
     instance = Object.create(SellingPartnerApiForDirectFulfillmentPayments.Error.prototype);
    }
  });

  afterEach(function() {
    instance = null;
  })

  describe('Error', function() {
    it('should create an instance of Error', function() {
      expect(instance).to.be.a(SellingPartnerApiForDirectFulfillmentPayments.Error);
    });

    it('should have the property code (base name: "code")', function() {
      // verify property exists
      expect(instance).to.have.property('code');

      // set and verify value
      var validValue = generateMockData('String');
      instance.code = validValue;
      expect(instance.code).to.equal(validValue);
    });

    it('should have the property message (base name: "message")', function() {
      // verify property exists
      expect(instance).to.have.property('message');

      // set and verify value
      var validValue = generateMockData('String');
      instance.message = validValue;
      expect(instance.message).to.equal(validValue);
    });

    it('should have the property details (base name: "details")', function() {
      // verify property exists
      expect(instance).to.have.property('details');

      // set and verify value
      var validValue = generateMockData('String');
      instance.details = validValue;
      expect(instance.details).to.equal(validValue);
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
          const ModelClass = SellingPartnerApiForDirectFulfillmentPayments[dataType];
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
