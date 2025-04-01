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
     instance = new SellingPartnerApiForDirectFulfillmentShipping.ShipmentDetails();
    } catch (e) {
     //Handle the cases when this model extends another model by using Model.call(this);
     instance = Object.create(SellingPartnerApiForDirectFulfillmentShipping.ShipmentDetails.prototype);
    }
  });

  afterEach(function() {
    instance = null;
  })

  describe('ShipmentDetails', function() {
    it('should create an instance of ShipmentDetails', function() {
      expect(instance).to.be.a(SellingPartnerApiForDirectFulfillmentShipping.ShipmentDetails);
    });

    it('should have the property shippedDate (base name: "shippedDate")', function() {
      // verify property exists
      expect(instance).to.have.property('shippedDate');

      // set and verify value
      var validValue = generateMockData('Date');
      instance.shippedDate = validValue;
      expect(instance.shippedDate).to.equal(validValue);
    });

    it('should have the property shipmentStatus (base name: "shipmentStatus")', function() {
      // verify property exists
      expect(instance).to.have.property('shipmentStatus');

      // set and verify value
      var validValue = ['SHIPPED', 'FLOOR_DENIAL', ][0];
      instance.shipmentStatus = validValue;
      expect(instance.shipmentStatus).to.equal(validValue);
    });

    it('should have the property isPriorityShipment (base name: "isPriorityShipment")', function() {
      // verify property exists
      expect(instance).to.have.property('isPriorityShipment');

      // set and verify value
      var validValue = generateMockData('Boolean');
      instance.isPriorityShipment = validValue;
      expect(instance.isPriorityShipment).to.equal(validValue);
    });

    it('should have the property vendorOrderNumber (base name: "vendorOrderNumber")', function() {
      // verify property exists
      expect(instance).to.have.property('vendorOrderNumber');

      // set and verify value
      var validValue = generateMockData('String');
      instance.vendorOrderNumber = validValue;
      expect(instance.vendorOrderNumber).to.equal(validValue);
    });

    it('should have the property estimatedDeliveryDate (base name: "estimatedDeliveryDate")', function() {
      // verify property exists
      expect(instance).to.have.property('estimatedDeliveryDate');

      // set and verify value
      var validValue = generateMockData('Date');
      instance.estimatedDeliveryDate = validValue;
      expect(instance.estimatedDeliveryDate).to.equal(validValue);
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
