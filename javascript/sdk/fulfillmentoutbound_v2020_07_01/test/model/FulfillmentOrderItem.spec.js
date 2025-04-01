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
     instance = new SellingPartnerApisForFulfillmentOutbound.FulfillmentOrderItem();
    } catch (e) {
     //Handle the cases when this model extends another model by using Model.call(this);
     instance = Object.create(SellingPartnerApisForFulfillmentOutbound.FulfillmentOrderItem.prototype);
    }
  });

  afterEach(function() {
    instance = null;
  })

  describe('FulfillmentOrderItem', function() {
    it('should create an instance of FulfillmentOrderItem', function() {
      expect(instance).to.be.a(SellingPartnerApisForFulfillmentOutbound.FulfillmentOrderItem);
    });

    it('should have the property sellerSku (base name: "sellerSku")', function() {
      // verify property exists
      expect(instance).to.have.property('sellerSku');

      // set and verify value
      var validValue = generateMockData('String');
      instance.sellerSku = validValue;
      expect(instance.sellerSku).to.equal(validValue);
    });

    it('should have the property sellerFulfillmentOrderItemId (base name: "sellerFulfillmentOrderItemId")', function() {
      // verify property exists
      expect(instance).to.have.property('sellerFulfillmentOrderItemId');

      // set and verify value
      var validValue = generateMockData('String');
      instance.sellerFulfillmentOrderItemId = validValue;
      expect(instance.sellerFulfillmentOrderItemId).to.equal(validValue);
    });

    it('should have the property quantity (base name: "quantity")', function() {
      // verify property exists
      expect(instance).to.have.property('quantity');

      // set and verify value
      var validValue = generateMockData('Number');
      instance.quantity = validValue;
      expect(instance.quantity).to.equal(validValue);
    });

    it('should have the property giftMessage (base name: "giftMessage")', function() {
      // verify property exists
      expect(instance).to.have.property('giftMessage');

      // set and verify value
      var validValue = generateMockData('String');
      instance.giftMessage = validValue;
      expect(instance.giftMessage).to.equal(validValue);
    });

    it('should have the property displayableComment (base name: "displayableComment")', function() {
      // verify property exists
      expect(instance).to.have.property('displayableComment');

      // set and verify value
      var validValue = generateMockData('String');
      instance.displayableComment = validValue;
      expect(instance.displayableComment).to.equal(validValue);
    });

    it('should have the property fulfillmentNetworkSku (base name: "fulfillmentNetworkSku")', function() {
      // verify property exists
      expect(instance).to.have.property('fulfillmentNetworkSku');

      // set and verify value
      var validValue = generateMockData('String');
      instance.fulfillmentNetworkSku = validValue;
      expect(instance.fulfillmentNetworkSku).to.equal(validValue);
    });

    it('should have the property orderItemDisposition (base name: "orderItemDisposition")', function() {
      // verify property exists
      expect(instance).to.have.property('orderItemDisposition');

      // set and verify value
      var validValue = generateMockData('String');
      instance.orderItemDisposition = validValue;
      expect(instance.orderItemDisposition).to.equal(validValue);
    });

    it('should have the property cancelledQuantity (base name: "cancelledQuantity")', function() {
      // verify property exists
      expect(instance).to.have.property('cancelledQuantity');

      // set and verify value
      var validValue = generateMockData('Number');
      instance.cancelledQuantity = validValue;
      expect(instance.cancelledQuantity).to.equal(validValue);
    });

    it('should have the property unfulfillableQuantity (base name: "unfulfillableQuantity")', function() {
      // verify property exists
      expect(instance).to.have.property('unfulfillableQuantity');

      // set and verify value
      var validValue = generateMockData('Number');
      instance.unfulfillableQuantity = validValue;
      expect(instance.unfulfillableQuantity).to.equal(validValue);
    });

    it('should have the property estimatedShipDate (base name: "estimatedShipDate")', function() {
      // verify property exists
      expect(instance).to.have.property('estimatedShipDate');

      // set and verify value
      var validValue = generateMockData('Date');
      instance.estimatedShipDate = validValue;
      expect(instance.estimatedShipDate).to.equal(validValue);
    });

    it('should have the property estimatedArrivalDate (base name: "estimatedArrivalDate")', function() {
      // verify property exists
      expect(instance).to.have.property('estimatedArrivalDate');

      // set and verify value
      var validValue = generateMockData('Date');
      instance.estimatedArrivalDate = validValue;
      expect(instance.estimatedArrivalDate).to.equal(validValue);
    });

    it('should have the property perUnitPrice (base name: "perUnitPrice")', function() {
      // verify property exists
      expect(instance).to.have.property('perUnitPrice');

      // set and verify value
      var validValue = generateMockData('Money');
      instance.perUnitPrice = validValue;
      expect(instance.perUnitPrice).to.equal(validValue);
    });

    it('should have the property perUnitTax (base name: "perUnitTax")', function() {
      // verify property exists
      expect(instance).to.have.property('perUnitTax');

      // set and verify value
      var validValue = generateMockData('Money');
      instance.perUnitTax = validValue;
      expect(instance.perUnitTax).to.equal(validValue);
    });

    it('should have the property perUnitDeclaredValue (base name: "perUnitDeclaredValue")', function() {
      // verify property exists
      expect(instance).to.have.property('perUnitDeclaredValue');

      // set and verify value
      var validValue = generateMockData('Money');
      instance.perUnitDeclaredValue = validValue;
      expect(instance.perUnitDeclaredValue).to.equal(validValue);
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
