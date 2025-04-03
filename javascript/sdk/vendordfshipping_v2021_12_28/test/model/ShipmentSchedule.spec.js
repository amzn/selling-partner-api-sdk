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
     instance = new SellingPartnerApiForDirectFulfillmentShipping.ShipmentSchedule();
    } catch (e) {
     //Handle the cases when this model extends another model by using Model.call(this);
     instance = Object.create(SellingPartnerApiForDirectFulfillmentShipping.ShipmentSchedule.prototype);
    }
  });

  afterEach(function() {
    instance = null;
  })

  describe('ShipmentSchedule', function() {
    it('should create an instance of ShipmentSchedule', function() {
      expect(instance).to.be.a(SellingPartnerApiForDirectFulfillmentShipping.ShipmentSchedule);
    });

    it('should have the property estimatedDeliveryDateTime', function() {
      // verify property exists
      expect(instance).to.have.property('estimatedDeliveryDateTime');

      // set and verify value
      var expectedValue = generateMockData('Date');
      instance.estimatedDeliveryDateTime = expectedValue;
      expect(instance.estimatedDeliveryDateTime).to.equal(expectedValue);
    });

    it('should have the property apptWindowStartDateTime', function() {
      // verify property exists
      expect(instance).to.have.property('apptWindowStartDateTime');

      // set and verify value
      var expectedValue = generateMockData('Date');
      instance.apptWindowStartDateTime = expectedValue;
      expect(instance.apptWindowStartDateTime).to.equal(expectedValue);
    });

    it('should have the property apptWindowEndDateTime', function() {
      // verify property exists
      expect(instance).to.have.property('apptWindowEndDateTime');

      // set and verify value
      var expectedValue = generateMockData('Date');
      instance.apptWindowEndDateTime = expectedValue;
      expect(instance.apptWindowEndDateTime).to.equal(expectedValue);
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
