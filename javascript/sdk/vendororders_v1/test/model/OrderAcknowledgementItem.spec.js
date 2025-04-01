/**
 * Selling Partner API for Retail Procurement Orders
 * The Selling Partner API for Retail Procurement Orders provides programmatic access to vendor orders data.
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
    factory(root.expect, root.SellingPartnerApiForRetailProcurementOrders);
  }
}(this, function(expect, SellingPartnerApiForRetailProcurementOrders) {
  'use strict';

  var instance;

  beforeEach(function() {
    try{
     instance = new SellingPartnerApiForRetailProcurementOrders.OrderAcknowledgementItem();
    } catch (e) {
     //Handle the cases when this model extends another model by using Model.call(this);
     instance = Object.create(SellingPartnerApiForRetailProcurementOrders.OrderAcknowledgementItem.prototype);
    }
  });

  afterEach(function() {
    instance = null;
  })

  describe('OrderAcknowledgementItem', function() {
    it('should create an instance of OrderAcknowledgementItem', function() {
      expect(instance).to.be.a(SellingPartnerApiForRetailProcurementOrders.OrderAcknowledgementItem);
    });

    it('should have the property itemSequenceNumber (base name: "itemSequenceNumber")', function() {
      // verify property exists
      expect(instance).to.have.property('itemSequenceNumber');

      // set and verify value
      var validValue = generateMockData('String');
      instance.itemSequenceNumber = validValue;
      expect(instance.itemSequenceNumber).to.equal(validValue);
    });

    it('should have the property amazonProductIdentifier (base name: "amazonProductIdentifier")', function() {
      // verify property exists
      expect(instance).to.have.property('amazonProductIdentifier');

      // set and verify value
      var validValue = generateMockData('String');
      instance.amazonProductIdentifier = validValue;
      expect(instance.amazonProductIdentifier).to.equal(validValue);
    });

    it('should have the property vendorProductIdentifier (base name: "vendorProductIdentifier")', function() {
      // verify property exists
      expect(instance).to.have.property('vendorProductIdentifier');

      // set and verify value
      var validValue = generateMockData('String');
      instance.vendorProductIdentifier = validValue;
      expect(instance.vendorProductIdentifier).to.equal(validValue);
    });

    it('should have the property orderedQuantity (base name: "orderedQuantity")', function() {
      // verify property exists
      expect(instance).to.have.property('orderedQuantity');

      // set and verify value
      var validValue = generateMockData('ItemQuantity');
      instance.orderedQuantity = validValue;
      expect(instance.orderedQuantity).to.equal(validValue);
    });

    it('should have the property netCost (base name: "netCost")', function() {
      // verify property exists
      expect(instance).to.have.property('netCost');

      // set and verify value
      var validValue = generateMockData('Money');
      instance.netCost = validValue;
      expect(instance.netCost).to.equal(validValue);
    });

    it('should have the property listPrice (base name: "listPrice")', function() {
      // verify property exists
      expect(instance).to.have.property('listPrice');

      // set and verify value
      var validValue = generateMockData('Money');
      instance.listPrice = validValue;
      expect(instance.listPrice).to.equal(validValue);
    });

    it('should have the property discountMultiplier (base name: "discountMultiplier")', function() {
      // verify property exists
      expect(instance).to.have.property('discountMultiplier');

      // set and verify value
      var validValue = generateMockData('String');
      instance.discountMultiplier = validValue;
      expect(instance.discountMultiplier).to.equal(validValue);
    });

    it('should have the property itemAcknowledgements (base name: "itemAcknowledgements")', function() {
      // verify property exists
      expect(instance).to.have.property('itemAcknowledgements');

      // set and verify value
      var validValue = generateMockData('[OrderItemAcknowledgement]', true);
      instance.itemAcknowledgements = validValue;
      expect(instance.itemAcknowledgements).to.equal(validValue);
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
          const ModelClass = SellingPartnerApiForRetailProcurementOrders[dataType];
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
