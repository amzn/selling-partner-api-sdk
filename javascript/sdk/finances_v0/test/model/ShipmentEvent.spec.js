/**
 * Selling Partner API for Finances
 * The Selling Partner API for Finances helps you obtain financial information relevant to a seller's business. You can obtain financial events for a given order, financial event group, or date range without having to wait until a statement period closes. You can also obtain financial event groups for a given date range.
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
    factory(root.expect, root.SellingPartnerApiForFinances);
  }
}(this, function(expect, SellingPartnerApiForFinances) {
  'use strict';

  var instance;

  beforeEach(function() {
    try{
     instance = new SellingPartnerApiForFinances.ShipmentEvent();
    } catch (e) {
     //Handle the cases when this model extends another model by using Model.call(this);
     instance = Object.create(SellingPartnerApiForFinances.ShipmentEvent.prototype);
    }
  });

  afterEach(function() {
    instance = null;
  })

  describe('ShipmentEvent', function() {
    it('should create an instance of ShipmentEvent', function() {
      expect(instance).to.be.a(SellingPartnerApiForFinances.ShipmentEvent);
    });

    it('should have the property amazonOrderId (base name: "AmazonOrderId")', function() {
      // verify property exists
      expect(instance).to.have.property('amazonOrderId');

      // set and verify value
      var validValue = generateMockData('String');
      instance.amazonOrderId = validValue;
      expect(instance.amazonOrderId).to.equal(validValue);
    });

    it('should have the property sellerOrderId (base name: "SellerOrderId")', function() {
      // verify property exists
      expect(instance).to.have.property('sellerOrderId');

      // set and verify value
      var validValue = generateMockData('String');
      instance.sellerOrderId = validValue;
      expect(instance.sellerOrderId).to.equal(validValue);
    });

    it('should have the property marketplaceName (base name: "MarketplaceName")', function() {
      // verify property exists
      expect(instance).to.have.property('marketplaceName');

      // set and verify value
      var validValue = generateMockData('String');
      instance.marketplaceName = validValue;
      expect(instance.marketplaceName).to.equal(validValue);
    });

    it('should have the property storeName (base name: "StoreName")', function() {
      // verify property exists
      expect(instance).to.have.property('storeName');

      // set and verify value
      var validValue = generateMockData('String');
      instance.storeName = validValue;
      expect(instance.storeName).to.equal(validValue);
    });

    it('should have the property orderChargeList (base name: "OrderChargeList")', function() {
      // verify property exists
      expect(instance).to.have.property('orderChargeList');

      // set and verify value
      var validValue = generateMockData('[ChargeComponent]', true);
      instance.orderChargeList = validValue;
      expect(instance.orderChargeList).to.equal(validValue);
    });

    it('should have the property orderChargeAdjustmentList (base name: "OrderChargeAdjustmentList")', function() {
      // verify property exists
      expect(instance).to.have.property('orderChargeAdjustmentList');

      // set and verify value
      var validValue = generateMockData('[ChargeComponent]', true);
      instance.orderChargeAdjustmentList = validValue;
      expect(instance.orderChargeAdjustmentList).to.equal(validValue);
    });

    it('should have the property shipmentFeeList (base name: "ShipmentFeeList")', function() {
      // verify property exists
      expect(instance).to.have.property('shipmentFeeList');

      // set and verify value
      var validValue = generateMockData('[FeeComponent]', true);
      instance.shipmentFeeList = validValue;
      expect(instance.shipmentFeeList).to.equal(validValue);
    });

    it('should have the property shipmentFeeAdjustmentList (base name: "ShipmentFeeAdjustmentList")', function() {
      // verify property exists
      expect(instance).to.have.property('shipmentFeeAdjustmentList');

      // set and verify value
      var validValue = generateMockData('[FeeComponent]', true);
      instance.shipmentFeeAdjustmentList = validValue;
      expect(instance.shipmentFeeAdjustmentList).to.equal(validValue);
    });

    it('should have the property orderFeeList (base name: "OrderFeeList")', function() {
      // verify property exists
      expect(instance).to.have.property('orderFeeList');

      // set and verify value
      var validValue = generateMockData('[FeeComponent]', true);
      instance.orderFeeList = validValue;
      expect(instance.orderFeeList).to.equal(validValue);
    });

    it('should have the property orderFeeAdjustmentList (base name: "OrderFeeAdjustmentList")', function() {
      // verify property exists
      expect(instance).to.have.property('orderFeeAdjustmentList');

      // set and verify value
      var validValue = generateMockData('[FeeComponent]', true);
      instance.orderFeeAdjustmentList = validValue;
      expect(instance.orderFeeAdjustmentList).to.equal(validValue);
    });

    it('should have the property directPaymentList (base name: "DirectPaymentList")', function() {
      // verify property exists
      expect(instance).to.have.property('directPaymentList');

      // set and verify value
      var validValue = generateMockData('[DirectPayment]', true);
      instance.directPaymentList = validValue;
      expect(instance.directPaymentList).to.equal(validValue);
    });

    it('should have the property postedDate (base name: "PostedDate")', function() {
      // verify property exists
      expect(instance).to.have.property('postedDate');

      // set and verify value
      var validValue = generateMockData('Date');
      instance.postedDate = validValue;
      expect(instance.postedDate).to.equal(validValue);
    });

    it('should have the property shipmentItemList (base name: "ShipmentItemList")', function() {
      // verify property exists
      expect(instance).to.have.property('shipmentItemList');

      // set and verify value
      var validValue = generateMockData('[ShipmentItem]', true);
      instance.shipmentItemList = validValue;
      expect(instance.shipmentItemList).to.equal(validValue);
    });

    it('should have the property shipmentItemAdjustmentList (base name: "ShipmentItemAdjustmentList")', function() {
      // verify property exists
      expect(instance).to.have.property('shipmentItemAdjustmentList');

      // set and verify value
      var validValue = generateMockData('[ShipmentItem]', true);
      instance.shipmentItemAdjustmentList = validValue;
      expect(instance.shipmentItemAdjustmentList).to.equal(validValue);
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
          const ModelClass = SellingPartnerApiForFinances[dataType];
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
