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
     instance = new SellingPartnerApiForFinances.RemovalShipmentItemAdjustment();
    } catch (e) {
     //Handle the cases when this model extends another model by using Model.call(this);
     instance = Object.create(SellingPartnerApiForFinances.RemovalShipmentItemAdjustment.prototype);
    }
  });

  afterEach(function() {
    instance = null;
  })

  describe('RemovalShipmentItemAdjustment', function() {
    it('should create an instance of RemovalShipmentItemAdjustment', function() {
      expect(instance).to.be.a(SellingPartnerApiForFinances.RemovalShipmentItemAdjustment);
    });

    it('should have the property removalShipmentItemId (base name: "RemovalShipmentItemId")', function() {
      // verify property exists
      expect(instance).to.have.property('removalShipmentItemId');

      // set and verify value
      var validValue = generateMockData('String');
      instance.removalShipmentItemId = validValue;
      expect(instance.removalShipmentItemId).to.equal(validValue);
    });

    it('should have the property taxCollectionModel (base name: "TaxCollectionModel")', function() {
      // verify property exists
      expect(instance).to.have.property('taxCollectionModel');

      // set and verify value
      var validValue = generateMockData('String');
      instance.taxCollectionModel = validValue;
      expect(instance.taxCollectionModel).to.equal(validValue);
    });

    it('should have the property fulfillmentNetworkSKU (base name: "FulfillmentNetworkSKU")', function() {
      // verify property exists
      expect(instance).to.have.property('fulfillmentNetworkSKU');

      // set and verify value
      var validValue = generateMockData('String');
      instance.fulfillmentNetworkSKU = validValue;
      expect(instance.fulfillmentNetworkSKU).to.equal(validValue);
    });

    it('should have the property adjustedQuantity (base name: "AdjustedQuantity")', function() {
      // verify property exists
      expect(instance).to.have.property('adjustedQuantity');

      // set and verify value
      var validValue = generateMockData('Number');
      instance.adjustedQuantity = validValue;
      expect(instance.adjustedQuantity).to.equal(validValue);
    });

    it('should have the property revenueAdjustment (base name: "RevenueAdjustment")', function() {
      // verify property exists
      expect(instance).to.have.property('revenueAdjustment');

      // set and verify value
      var validValue = generateMockData('Currency');
      instance.revenueAdjustment = validValue;
      expect(instance.revenueAdjustment).to.equal(validValue);
    });

    it('should have the property taxAmountAdjustment (base name: "TaxAmountAdjustment")', function() {
      // verify property exists
      expect(instance).to.have.property('taxAmountAdjustment');

      // set and verify value
      var validValue = generateMockData('Currency');
      instance.taxAmountAdjustment = validValue;
      expect(instance.taxAmountAdjustment).to.equal(validValue);
    });

    it('should have the property taxWithheldAdjustment (base name: "TaxWithheldAdjustment")', function() {
      // verify property exists
      expect(instance).to.have.property('taxWithheldAdjustment');

      // set and verify value
      var validValue = generateMockData('Currency');
      instance.taxWithheldAdjustment = validValue;
      expect(instance.taxWithheldAdjustment).to.equal(validValue);
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
