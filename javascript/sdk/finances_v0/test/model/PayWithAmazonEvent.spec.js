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
     instance = new SellingPartnerApiForFinances.PayWithAmazonEvent();
    } catch (e) {
     //Handle the cases when this model extends another model by using Model.call(this);
     instance = Object.create(SellingPartnerApiForFinances.PayWithAmazonEvent.prototype);
    }
  });

  afterEach(function() {
    instance = null;
  })

  describe('PayWithAmazonEvent', function() {
    it('should create an instance of PayWithAmazonEvent', function() {
      expect(instance).to.be.a(SellingPartnerApiForFinances.PayWithAmazonEvent);
    });

    it('should have the property sellerOrderId (base name: "SellerOrderId")', function() {
      // verify property exists
      expect(instance).to.have.property('sellerOrderId');

      // set and verify value
      var validValue = generateMockData('String');
      instance.sellerOrderId = validValue;
      expect(instance.sellerOrderId).to.equal(validValue);
    });

    it('should have the property transactionPostedDate (base name: "TransactionPostedDate")', function() {
      // verify property exists
      expect(instance).to.have.property('transactionPostedDate');

      // set and verify value
      var validValue = generateMockData('Date');
      instance.transactionPostedDate = validValue;
      expect(instance.transactionPostedDate).to.equal(validValue);
    });

    it('should have the property businessObjectType (base name: "BusinessObjectType")', function() {
      // verify property exists
      expect(instance).to.have.property('businessObjectType');

      // set and verify value
      var validValue = generateMockData('String');
      instance.businessObjectType = validValue;
      expect(instance.businessObjectType).to.equal(validValue);
    });

    it('should have the property salesChannel (base name: "SalesChannel")', function() {
      // verify property exists
      expect(instance).to.have.property('salesChannel');

      // set and verify value
      var validValue = generateMockData('String');
      instance.salesChannel = validValue;
      expect(instance.salesChannel).to.equal(validValue);
    });

    it('should have the property charge (base name: "Charge")', function() {
      // verify property exists
      expect(instance).to.have.property('charge');

      // set and verify value
      var validValue = generateMockData('ChargeComponent');
      instance.charge = validValue;
      expect(instance.charge).to.equal(validValue);
    });

    it('should have the property feeList (base name: "FeeList")', function() {
      // verify property exists
      expect(instance).to.have.property('feeList');

      // set and verify value
      var validValue = generateMockData('[FeeComponent]', true);
      instance.feeList = validValue;
      expect(instance.feeList).to.equal(validValue);
    });

    it('should have the property paymentAmountType (base name: "PaymentAmountType")', function() {
      // verify property exists
      expect(instance).to.have.property('paymentAmountType');

      // set and verify value
      var validValue = generateMockData('String');
      instance.paymentAmountType = validValue;
      expect(instance.paymentAmountType).to.equal(validValue);
    });

    it('should have the property amountDescription (base name: "AmountDescription")', function() {
      // verify property exists
      expect(instance).to.have.property('amountDescription');

      // set and verify value
      var validValue = generateMockData('String');
      instance.amountDescription = validValue;
      expect(instance.amountDescription).to.equal(validValue);
    });

    it('should have the property fulfillmentChannel (base name: "FulfillmentChannel")', function() {
      // verify property exists
      expect(instance).to.have.property('fulfillmentChannel');

      // set and verify value
      var validValue = generateMockData('String');
      instance.fulfillmentChannel = validValue;
      expect(instance.fulfillmentChannel).to.equal(validValue);
    });

    it('should have the property storeName (base name: "StoreName")', function() {
      // verify property exists
      expect(instance).to.have.property('storeName');

      // set and verify value
      var validValue = generateMockData('String');
      instance.storeName = validValue;
      expect(instance.storeName).to.equal(validValue);
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
