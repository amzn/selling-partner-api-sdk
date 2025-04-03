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
     instance = new SellingPartnerApiForRetailProcurementOrders.OrderStatus();
    } catch (e) {
     //Handle the cases when this model extends another model by using Model.call(this);
     instance = Object.create(SellingPartnerApiForRetailProcurementOrders.OrderStatus.prototype);
    }
  });

  afterEach(function() {
    instance = null;
  })

  describe('OrderStatus', function() {
    it('should create an instance of OrderStatus', function() {
      expect(instance).to.be.a(SellingPartnerApiForRetailProcurementOrders.OrderStatus);
    });

    it('should have the property purchaseOrderNumber', function() {
      // verify property exists
      expect(instance).to.have.property('purchaseOrderNumber');

      // set and verify value
      var expectedValue = generateMockData('String');
      instance.purchaseOrderNumber = expectedValue;
      expect(instance.purchaseOrderNumber).to.equal(expectedValue);
    });

    it('should have the property purchaseOrderStatus', function() {
      // verify property exists
      expect(instance).to.have.property('purchaseOrderStatus');

      // set and verify value
      var expectedValue = ['OPEN', 'CLOSED', ][0];
      instance.purchaseOrderStatus = expectedValue;
      expect(instance.purchaseOrderStatus).to.equal(expectedValue);
    });

    it('should have the property purchaseOrderDate', function() {
      // verify property exists
      expect(instance).to.have.property('purchaseOrderDate');

      // set and verify value
      var expectedValue = generateMockData('Date');
      instance.purchaseOrderDate = expectedValue;
      expect(instance.purchaseOrderDate).to.equal(expectedValue);
    });

    it('should have the property lastUpdatedDate', function() {
      // verify property exists
      expect(instance).to.have.property('lastUpdatedDate');

      // set and verify value
      var expectedValue = generateMockData('Date');
      instance.lastUpdatedDate = expectedValue;
      expect(instance.lastUpdatedDate).to.equal(expectedValue);
    });

    it('should have the property sellingParty', function() {
      // verify property exists
      expect(instance).to.have.property('sellingParty');

      // set and verify value
      var expectedValue = generateMockData('PartyIdentification');
      instance.sellingParty = expectedValue;
      expect(instance.sellingParty).to.equal(expectedValue);
    });

    it('should have the property shipToParty', function() {
      // verify property exists
      expect(instance).to.have.property('shipToParty');

      // set and verify value
      var expectedValue = generateMockData('PartyIdentification');
      instance.shipToParty = expectedValue;
      expect(instance.shipToParty).to.equal(expectedValue);
    });

    it('should have the property itemStatus', function() {
      // verify property exists
      expect(instance).to.have.property('itemStatus');

      // set and verify value
      var expectedValue = generateMockData('OrderItemStatus', true);
      instance.itemStatus = expectedValue;
      expect(instance.itemStatus).to.equal(expectedValue);
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
