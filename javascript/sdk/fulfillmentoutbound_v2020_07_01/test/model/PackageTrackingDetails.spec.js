/**
 * Selling Partner APIs for Fulfillment Outbound
 * The Selling Partner API for Fulfillment Outbound lets you create applications that help a seller fulfill Multi-Channel Fulfillment orders using their inventory in Amazon's fulfillment network. You can get information on both potential and existing fulfillment orders.
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
    factory(root.expect, root.SellingPartnerApisForFulfillmentOutbound);
  }
}(this, function(expect, SellingPartnerApisForFulfillmentOutbound) {
  'use strict';

  var instance;

  beforeEach(function() {
    try{
     instance = new SellingPartnerApisForFulfillmentOutbound.PackageTrackingDetails();
    } catch (e) {
     //Handle the cases when this model extends another model by using Model.call(this);
     instance = Object.create(SellingPartnerApisForFulfillmentOutbound.PackageTrackingDetails.prototype);
    }
  });

  afterEach(function() {
    instance = null;
  })

  describe('PackageTrackingDetails', function() {
    it('should create an instance of PackageTrackingDetails', function() {
      expect(instance).to.be.a(SellingPartnerApisForFulfillmentOutbound.PackageTrackingDetails);
    });

    it('should have the property packageNumber (base name: "packageNumber")', function() {
      // verify property exists
      expect(instance).to.have.property('packageNumber');

      // set and verify value
      var validValue = generateMockData('Number');
      instance.packageNumber = validValue;
      expect(instance.packageNumber).to.equal(validValue);
    });

    it('should have the property trackingNumber (base name: "trackingNumber")', function() {
      // verify property exists
      expect(instance).to.have.property('trackingNumber');

      // set and verify value
      var validValue = generateMockData('String');
      instance.trackingNumber = validValue;
      expect(instance.trackingNumber).to.equal(validValue);
    });

    it('should have the property customerTrackingLink (base name: "customerTrackingLink")', function() {
      // verify property exists
      expect(instance).to.have.property('customerTrackingLink');

      // set and verify value
      var validValue = generateMockData('String');
      instance.customerTrackingLink = validValue;
      expect(instance.customerTrackingLink).to.equal(validValue);
    });

    it('should have the property carrierCode (base name: "carrierCode")', function() {
      // verify property exists
      expect(instance).to.have.property('carrierCode');

      // set and verify value
      var validValue = generateMockData('String');
      instance.carrierCode = validValue;
      expect(instance.carrierCode).to.equal(validValue);
    });

    it('should have the property carrierPhoneNumber (base name: "carrierPhoneNumber")', function() {
      // verify property exists
      expect(instance).to.have.property('carrierPhoneNumber');

      // set and verify value
      var validValue = generateMockData('String');
      instance.carrierPhoneNumber = validValue;
      expect(instance.carrierPhoneNumber).to.equal(validValue);
    });

    it('should have the property carrierURL (base name: "carrierURL")', function() {
      // verify property exists
      expect(instance).to.have.property('carrierURL');

      // set and verify value
      var validValue = generateMockData('String');
      instance.carrierURL = validValue;
      expect(instance.carrierURL).to.equal(validValue);
    });

    it('should have the property shipDate (base name: "shipDate")', function() {
      // verify property exists
      expect(instance).to.have.property('shipDate');

      // set and verify value
      var validValue = generateMockData('Date');
      instance.shipDate = validValue;
      expect(instance.shipDate).to.equal(validValue);
    });

    it('should have the property estimatedArrivalDate (base name: "estimatedArrivalDate")', function() {
      // verify property exists
      expect(instance).to.have.property('estimatedArrivalDate');

      // set and verify value
      var validValue = generateMockData('Date');
      instance.estimatedArrivalDate = validValue;
      expect(instance.estimatedArrivalDate).to.equal(validValue);
    });

    it('should have the property shipToAddress (base name: "shipToAddress")', function() {
      // verify property exists
      expect(instance).to.have.property('shipToAddress');

      // set and verify value
      var validValue = generateMockData('TrackingAddress');
      instance.shipToAddress = validValue;
      expect(instance.shipToAddress).to.equal(validValue);
    });

    it('should have the property currentStatus (base name: "currentStatus")', function() {
      // verify property exists
      expect(instance).to.have.property('currentStatus');

      // set and verify value
      var validValue = generateMockData('CurrentStatus');
      instance.currentStatus = validValue;
      expect(instance.currentStatus).to.equal(validValue);
    });

    it('should have the property currentStatusDescription (base name: "currentStatusDescription")', function() {
      // verify property exists
      expect(instance).to.have.property('currentStatusDescription');

      // set and verify value
      var validValue = generateMockData('String');
      instance.currentStatusDescription = validValue;
      expect(instance.currentStatusDescription).to.equal(validValue);
    });

    it('should have the property deliveryWindow (base name: "deliveryWindow")', function() {
      // verify property exists
      expect(instance).to.have.property('deliveryWindow');

      // set and verify value
      var validValue = generateMockData('DateRange');
      instance.deliveryWindow = validValue;
      expect(instance.deliveryWindow).to.equal(validValue);
    });

    it('should have the property signedForBy (base name: "signedForBy")', function() {
      // verify property exists
      expect(instance).to.have.property('signedForBy');

      // set and verify value
      var validValue = generateMockData('String');
      instance.signedForBy = validValue;
      expect(instance.signedForBy).to.equal(validValue);
    });

    it('should have the property additionalLocationInfo (base name: "additionalLocationInfo")', function() {
      // verify property exists
      expect(instance).to.have.property('additionalLocationInfo');

      // set and verify value
      var validValue = generateMockData('AdditionalLocationInfo');
      instance.additionalLocationInfo = validValue;
      expect(instance.additionalLocationInfo).to.equal(validValue);
    });

    it('should have the property trackingEvents (base name: "trackingEvents")', function() {
      // verify property exists
      expect(instance).to.have.property('trackingEvents');

      // set and verify value
      var validValue = generateMockData('[TrackingEvent]', true);
      instance.trackingEvents = validValue;
      expect(instance.trackingEvents).to.equal(validValue);
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
          const ModelClass = SellingPartnerApisForFulfillmentOutbound[dataType];
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
