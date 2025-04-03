/**
 * Selling Partner API for Orders
 * Use the Orders Selling Partner API to programmatically retrieve order information. With this API, you can develop fast, flexible, and custom applications to manage order synchronization, perform order research, and create demand-based decision support tools.   _Note:_ For the JP, AU, and SG marketplaces, the Orders API supports orders from 2016 onward. For all other marketplaces, the Orders API supports orders for the last two years (orders older than this don't show up in the response).
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
    factory(root.expect, root.SellingPartnerApiForOrders);
  }
}(this, function(expect, SellingPartnerApiForOrders) {
  'use strict';

  var instance;

  beforeEach(function() {
    try{
     instance = new SellingPartnerApiForOrders.PackageDetail();
    } catch (e) {
     //Handle the cases when this model extends another model by using Model.call(this);
     instance = Object.create(SellingPartnerApiForOrders.PackageDetail.prototype);
    }
  });

  afterEach(function() {
    instance = null;
  })

  describe('PackageDetail', function() {
    it('should create an instance of PackageDetail', function() {
      expect(instance).to.be.a(SellingPartnerApiForOrders.PackageDetail);
    });

    it('should have the property packageReferenceId', function() {
      // verify property exists
      expect(instance).to.have.property('packageReferenceId');

      // set and verify value
      var expectedValue = generateMockData('String');
      instance.packageReferenceId = expectedValue;
      expect(instance.packageReferenceId).to.equal(expectedValue);
    });

    it('should have the property carrierCode', function() {
      // verify property exists
      expect(instance).to.have.property('carrierCode');

      // set and verify value
      var expectedValue = generateMockData('String');
      instance.carrierCode = expectedValue;
      expect(instance.carrierCode).to.equal(expectedValue);
    });

    it('should have the property carrierName', function() {
      // verify property exists
      expect(instance).to.have.property('carrierName');

      // set and verify value
      var expectedValue = generateMockData('String');
      instance.carrierName = expectedValue;
      expect(instance.carrierName).to.equal(expectedValue);
    });

    it('should have the property shippingMethod', function() {
      // verify property exists
      expect(instance).to.have.property('shippingMethod');

      // set and verify value
      var expectedValue = generateMockData('String');
      instance.shippingMethod = expectedValue;
      expect(instance.shippingMethod).to.equal(expectedValue);
    });

    it('should have the property trackingNumber', function() {
      // verify property exists
      expect(instance).to.have.property('trackingNumber');

      // set and verify value
      var expectedValue = generateMockData('String');
      instance.trackingNumber = expectedValue;
      expect(instance.trackingNumber).to.equal(expectedValue);
    });

    it('should have the property shipDate', function() {
      // verify property exists
      expect(instance).to.have.property('shipDate');

      // set and verify value
      var expectedValue = generateMockData('Date');
      instance.shipDate = expectedValue;
      expect(instance.shipDate).to.equal(expectedValue);
    });

    it('should have the property shipFromSupplySourceId', function() {
      // verify property exists
      expect(instance).to.have.property('shipFromSupplySourceId');

      // set and verify value
      var expectedValue = generateMockData('String');
      instance.shipFromSupplySourceId = expectedValue;
      expect(instance.shipFromSupplySourceId).to.equal(expectedValue);
    });

    it('should have the property orderItems', function() {
      // verify property exists
      expect(instance).to.have.property('orderItems');

      // set and verify value
      var expectedValue = generateMockData('ConfirmShipmentOrderItem', true);
      instance.orderItems = expectedValue;
      expect(instance.orderItems).to.equal(expectedValue);
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
          const ModelClass = SellingPartnerApiForOrders[dataType];
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
