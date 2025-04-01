/**
 * Selling Partner API for Fulfillment Inbound
 * The Selling Partner API for Fulfillment Inbound lets you create applications that create and update inbound shipments of inventory to Amazon's fulfillment network.
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
    factory(root.expect, root.SellingPartnerApiForFulfillmentInbound);
  }
}(this, function(expect, SellingPartnerApiForFulfillmentInbound) {
  'use strict';

  var instance;

  beforeEach(function() {
    try{
     instance = new SellingPartnerApiForFulfillmentInbound.InboundShipmentItem();
    } catch (e) {
     //Handle the cases when this model extends another model by using Model.call(this);
     instance = Object.create(SellingPartnerApiForFulfillmentInbound.InboundShipmentItem.prototype);
    }
  });

  afterEach(function() {
    instance = null;
  })

  describe('InboundShipmentItem', function() {
    it('should create an instance of InboundShipmentItem', function() {
      expect(instance).to.be.a(SellingPartnerApiForFulfillmentInbound.InboundShipmentItem);
    });

    it('should have the property shipmentId (base name: "ShipmentId")', function() {
      // verify property exists
      expect(instance).to.have.property('shipmentId');

      // set and verify value
      var validValue = generateMockData('String');
      instance.shipmentId = validValue;
      expect(instance.shipmentId).to.equal(validValue);
    });

    it('should have the property sellerSKU (base name: "SellerSKU")', function() {
      // verify property exists
      expect(instance).to.have.property('sellerSKU');

      // set and verify value
      var validValue = generateMockData('String');
      instance.sellerSKU = validValue;
      expect(instance.sellerSKU).to.equal(validValue);
    });

    it('should have the property fulfillmentNetworkSKU (base name: "FulfillmentNetworkSKU")', function() {
      // verify property exists
      expect(instance).to.have.property('fulfillmentNetworkSKU');

      // set and verify value
      var validValue = generateMockData('String');
      instance.fulfillmentNetworkSKU = validValue;
      expect(instance.fulfillmentNetworkSKU).to.equal(validValue);
    });

    it('should have the property quantityShipped (base name: "QuantityShipped")', function() {
      // verify property exists
      expect(instance).to.have.property('quantityShipped');

      // set and verify value
      var validValue = generateMockData('Number');
      instance.quantityShipped = validValue;
      expect(instance.quantityShipped).to.equal(validValue);
    });

    it('should have the property quantityReceived (base name: "QuantityReceived")', function() {
      // verify property exists
      expect(instance).to.have.property('quantityReceived');

      // set and verify value
      var validValue = generateMockData('Number');
      instance.quantityReceived = validValue;
      expect(instance.quantityReceived).to.equal(validValue);
    });

    it('should have the property quantityInCase (base name: "QuantityInCase")', function() {
      // verify property exists
      expect(instance).to.have.property('quantityInCase');

      // set and verify value
      var validValue = generateMockData('Number');
      instance.quantityInCase = validValue;
      expect(instance.quantityInCase).to.equal(validValue);
    });

    it('should have the property releaseDate (base name: "ReleaseDate")', function() {
      // verify property exists
      expect(instance).to.have.property('releaseDate');

      // set and verify value
      var validValue = generateMockData('Date');
      instance.releaseDate = validValue;
      expect(instance.releaseDate).to.equal(validValue);
    });

    it('should have the property prepDetailsList (base name: "PrepDetailsList")', function() {
      // verify property exists
      expect(instance).to.have.property('prepDetailsList');

      // set and verify value
      var validValue = generateMockData('[PrepDetails]', true);
      instance.prepDetailsList = validValue;
      expect(instance.prepDetailsList).to.equal(validValue);
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
          const ModelClass = SellingPartnerApiForFulfillmentInbound[dataType];
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
