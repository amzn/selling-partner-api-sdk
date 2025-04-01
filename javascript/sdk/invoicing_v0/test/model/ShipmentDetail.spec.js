/**
 * Selling Partner API for Shipment Invoicing
 * The Selling Partner API for Shipment Invoicing helps you programmatically retrieve shipment invoice information in the Brazil marketplace for a selling partner’s Fulfillment by Amazon (FBA) orders.
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
    factory(root.expect, root.SellingPartnerApiForShipmentInvoicing);
  }
}(this, function(expect, SellingPartnerApiForShipmentInvoicing) {
  'use strict';

  var instance;

  beforeEach(function() {
    try{
     instance = new SellingPartnerApiForShipmentInvoicing.ShipmentDetail();
    } catch (e) {
     //Handle the cases when this model extends another model by using Model.call(this);
     instance = Object.create(SellingPartnerApiForShipmentInvoicing.ShipmentDetail.prototype);
    }
  });

  afterEach(function() {
    instance = null;
  })

  describe('ShipmentDetail', function() {
    it('should create an instance of ShipmentDetail', function() {
      expect(instance).to.be.a(SellingPartnerApiForShipmentInvoicing.ShipmentDetail);
    });

    it('should have the property warehouseId (base name: "WarehouseId")', function() {
      // verify property exists
      expect(instance).to.have.property('warehouseId');

      // set and verify value
      var validValue = generateMockData('String');
      instance.warehouseId = validValue;
      expect(instance.warehouseId).to.equal(validValue);
    });

    it('should have the property amazonOrderId (base name: "AmazonOrderId")', function() {
      // verify property exists
      expect(instance).to.have.property('amazonOrderId');

      // set and verify value
      var validValue = generateMockData('String');
      instance.amazonOrderId = validValue;
      expect(instance.amazonOrderId).to.equal(validValue);
    });

    it('should have the property amazonShipmentId (base name: "AmazonShipmentId")', function() {
      // verify property exists
      expect(instance).to.have.property('amazonShipmentId');

      // set and verify value
      var validValue = generateMockData('String');
      instance.amazonShipmentId = validValue;
      expect(instance.amazonShipmentId).to.equal(validValue);
    });

    it('should have the property purchaseDate (base name: "PurchaseDate")', function() {
      // verify property exists
      expect(instance).to.have.property('purchaseDate');

      // set and verify value
      var validValue = generateMockData('Date');
      instance.purchaseDate = validValue;
      expect(instance.purchaseDate).to.equal(validValue);
    });

    it('should have the property shippingAddress (base name: "ShippingAddress")', function() {
      // verify property exists
      expect(instance).to.have.property('shippingAddress');

      // set and verify value
      var validValue = generateMockData('Address');
      instance.shippingAddress = validValue;
      expect(instance.shippingAddress).to.equal(validValue);
    });

    it('should have the property paymentMethodDetails (base name: "PaymentMethodDetails")', function() {
      // verify property exists
      expect(instance).to.have.property('paymentMethodDetails');

      // set and verify value
      var validValue = generateMockData('[String]', true);
      instance.paymentMethodDetails = validValue;
      expect(instance.paymentMethodDetails).to.equal(validValue);
    });

    it('should have the property marketplaceId (base name: "MarketplaceId")', function() {
      // verify property exists
      expect(instance).to.have.property('marketplaceId');

      // set and verify value
      var validValue = generateMockData('String');
      instance.marketplaceId = validValue;
      expect(instance.marketplaceId).to.equal(validValue);
    });

    it('should have the property sellerId (base name: "SellerId")', function() {
      // verify property exists
      expect(instance).to.have.property('sellerId');

      // set and verify value
      var validValue = generateMockData('String');
      instance.sellerId = validValue;
      expect(instance.sellerId).to.equal(validValue);
    });

    it('should have the property buyerName (base name: "BuyerName")', function() {
      // verify property exists
      expect(instance).to.have.property('buyerName');

      // set and verify value
      var validValue = generateMockData('String');
      instance.buyerName = validValue;
      expect(instance.buyerName).to.equal(validValue);
    });

    it('should have the property buyerCounty (base name: "BuyerCounty")', function() {
      // verify property exists
      expect(instance).to.have.property('buyerCounty');

      // set and verify value
      var validValue = generateMockData('String');
      instance.buyerCounty = validValue;
      expect(instance.buyerCounty).to.equal(validValue);
    });

    it('should have the property buyerTaxInfo (base name: "BuyerTaxInfo")', function() {
      // verify property exists
      expect(instance).to.have.property('buyerTaxInfo');

      // set and verify value
      var validValue = generateMockData('BuyerTaxInfo');
      instance.buyerTaxInfo = validValue;
      expect(instance.buyerTaxInfo).to.equal(validValue);
    });

    it('should have the property marketplaceTaxInfo (base name: "MarketplaceTaxInfo")', function() {
      // verify property exists
      expect(instance).to.have.property('marketplaceTaxInfo');

      // set and verify value
      var validValue = generateMockData('MarketplaceTaxInfo');
      instance.marketplaceTaxInfo = validValue;
      expect(instance.marketplaceTaxInfo).to.equal(validValue);
    });

    it('should have the property sellerDisplayName (base name: "SellerDisplayName")', function() {
      // verify property exists
      expect(instance).to.have.property('sellerDisplayName');

      // set and verify value
      var validValue = generateMockData('String');
      instance.sellerDisplayName = validValue;
      expect(instance.sellerDisplayName).to.equal(validValue);
    });

    it('should have the property shipmentItems (base name: "ShipmentItems")', function() {
      // verify property exists
      expect(instance).to.have.property('shipmentItems');

      // set and verify value
      var validValue = generateMockData('[ShipmentItem]', true);
      instance.shipmentItems = validValue;
      expect(instance.shipmentItems).to.equal(validValue);
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
          const ModelClass = SellingPartnerApiForShipmentInvoicing[dataType];
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
