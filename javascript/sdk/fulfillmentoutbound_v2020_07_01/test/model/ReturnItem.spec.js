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
     instance = new SellingPartnerApisForFulfillmentOutbound.ReturnItem();
    } catch (e) {
     //Handle the cases when this model extends another model by using Model.call(this);
     instance = Object.create(SellingPartnerApisForFulfillmentOutbound.ReturnItem.prototype);
    }
  });

  afterEach(function() {
    instance = null;
  })

  describe('ReturnItem', function() {
    it('should create an instance of ReturnItem', function() {
      expect(instance).to.be.a(SellingPartnerApisForFulfillmentOutbound.ReturnItem);
    });

    it('should have the property sellerReturnItemId (base name: "sellerReturnItemId")', function() {
      // verify property exists
      expect(instance).to.have.property('sellerReturnItemId');

      // set and verify value
      var validValue = generateMockData('String');
      instance.sellerReturnItemId = validValue;
      expect(instance.sellerReturnItemId).to.equal(validValue);
    });

    it('should have the property sellerFulfillmentOrderItemId (base name: "sellerFulfillmentOrderItemId")', function() {
      // verify property exists
      expect(instance).to.have.property('sellerFulfillmentOrderItemId');

      // set and verify value
      var validValue = generateMockData('String');
      instance.sellerFulfillmentOrderItemId = validValue;
      expect(instance.sellerFulfillmentOrderItemId).to.equal(validValue);
    });

    it('should have the property amazonShipmentId (base name: "amazonShipmentId")', function() {
      // verify property exists
      expect(instance).to.have.property('amazonShipmentId');

      // set and verify value
      var validValue = generateMockData('String');
      instance.amazonShipmentId = validValue;
      expect(instance.amazonShipmentId).to.equal(validValue);
    });

    it('should have the property sellerReturnReasonCode (base name: "sellerReturnReasonCode")', function() {
      // verify property exists
      expect(instance).to.have.property('sellerReturnReasonCode');

      // set and verify value
      var validValue = generateMockData('String');
      instance.sellerReturnReasonCode = validValue;
      expect(instance.sellerReturnReasonCode).to.equal(validValue);
    });

    it('should have the property returnComment (base name: "returnComment")', function() {
      // verify property exists
      expect(instance).to.have.property('returnComment');

      // set and verify value
      var validValue = generateMockData('String');
      instance.returnComment = validValue;
      expect(instance.returnComment).to.equal(validValue);
    });

    it('should have the property amazonReturnReasonCode (base name: "amazonReturnReasonCode")', function() {
      // verify property exists
      expect(instance).to.have.property('amazonReturnReasonCode');

      // set and verify value
      var validValue = generateMockData('String');
      instance.amazonReturnReasonCode = validValue;
      expect(instance.amazonReturnReasonCode).to.equal(validValue);
    });

    it('should have the property status (base name: "status")', function() {
      // verify property exists
      expect(instance).to.have.property('status');

      // set and verify value
      var validValue = generateMockData('FulfillmentReturnItemStatus');
      instance.status = validValue;
      expect(instance.status).to.equal(validValue);
    });

    it('should have the property statusChangedDate (base name: "statusChangedDate")', function() {
      // verify property exists
      expect(instance).to.have.property('statusChangedDate');

      // set and verify value
      var validValue = generateMockData('Date');
      instance.statusChangedDate = validValue;
      expect(instance.statusChangedDate).to.equal(validValue);
    });

    it('should have the property returnAuthorizationId (base name: "returnAuthorizationId")', function() {
      // verify property exists
      expect(instance).to.have.property('returnAuthorizationId');

      // set and verify value
      var validValue = generateMockData('String');
      instance.returnAuthorizationId = validValue;
      expect(instance.returnAuthorizationId).to.equal(validValue);
    });

    it('should have the property returnReceivedCondition (base name: "returnReceivedCondition")', function() {
      // verify property exists
      expect(instance).to.have.property('returnReceivedCondition');

      // set and verify value
      var validValue = generateMockData('ReturnItemDisposition');
      instance.returnReceivedCondition = validValue;
      expect(instance.returnReceivedCondition).to.equal(validValue);
    });

    it('should have the property fulfillmentCenterId (base name: "fulfillmentCenterId")', function() {
      // verify property exists
      expect(instance).to.have.property('fulfillmentCenterId');

      // set and verify value
      var validValue = generateMockData('String');
      instance.fulfillmentCenterId = validValue;
      expect(instance.fulfillmentCenterId).to.equal(validValue);
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
