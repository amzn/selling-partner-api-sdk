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
     instance = new SellingPartnerApiForMerchantFulfillment.CreateShipmentRequest();
    } catch (e) {
     //Handle the cases when this model extends another model by using Model.call(this);
     instance = Object.create(SellingPartnerApiForMerchantFulfillment.CreateShipmentRequest.prototype);
    }
  });

  afterEach(function() {
    instance = null;
  })

  describe('CreateShipmentRequest', function() {
    it('should create an instance of CreateShipmentRequest', function() {
      expect(instance).to.be.a(SellingPartnerApiForMerchantFulfillment.CreateShipmentRequest);
    });

    it('should have the property shipmentRequestDetails (base name: "ShipmentRequestDetails")', function() {
      // verify property exists
      expect(instance).to.have.property('shipmentRequestDetails');

      // set and verify value
      var validValue = generateMockData('ShipmentRequestDetails');
      instance.shipmentRequestDetails = validValue;
      expect(instance.shipmentRequestDetails).to.equal(validValue);
    });

    it('should have the property shippingServiceId (base name: "ShippingServiceId")', function() {
      // verify property exists
      expect(instance).to.have.property('shippingServiceId');

      // set and verify value
      var validValue = generateMockData('String');
      instance.shippingServiceId = validValue;
      expect(instance.shippingServiceId).to.equal(validValue);
    });

    it('should have the property shippingServiceOfferId (base name: "ShippingServiceOfferId")', function() {
      // verify property exists
      expect(instance).to.have.property('shippingServiceOfferId');

      // set and verify value
      var validValue = generateMockData('String');
      instance.shippingServiceOfferId = validValue;
      expect(instance.shippingServiceOfferId).to.equal(validValue);
    });

    it('should have the property hazmatType (base name: "HazmatType")', function() {
      // verify property exists
      expect(instance).to.have.property('hazmatType');

      // set and verify value
      var validValue = generateMockData('HazmatType');
      instance.hazmatType = validValue;
      expect(instance.hazmatType).to.equal(validValue);
    });

    it('should have the property labelFormatOption (base name: "LabelFormatOption")', function() {
      // verify property exists
      expect(instance).to.have.property('labelFormatOption');

      // set and verify value
      var validValue = generateMockData('LabelFormatOptionRequest');
      instance.labelFormatOption = validValue;
      expect(instance.labelFormatOption).to.equal(validValue);
    });

    it('should have the property shipmentLevelSellerInputsList (base name: "ShipmentLevelSellerInputsList")', function() {
      // verify property exists
      expect(instance).to.have.property('shipmentLevelSellerInputsList');

      // set and verify value
      var validValue = generateMockData('[AdditionalSellerInputs]', true);
      instance.shipmentLevelSellerInputsList = validValue;
      expect(instance.shipmentLevelSellerInputsList).to.equal(validValue);
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
