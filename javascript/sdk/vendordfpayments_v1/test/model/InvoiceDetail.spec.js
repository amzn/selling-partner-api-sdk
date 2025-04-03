/**
 * Selling Partner API for Direct Fulfillment Payments
 * The Selling Partner API for Direct Fulfillment Payments provides programmatic access to a direct fulfillment vendor's invoice data.
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
    factory(root.expect, root.SellingPartnerApiForDirectFulfillmentPayments);
  }
}(this, function(expect, SellingPartnerApiForDirectFulfillmentPayments) {
  'use strict';

  var instance;

  beforeEach(function() {
    try{
     instance = new SellingPartnerApiForDirectFulfillmentPayments.InvoiceDetail();
    } catch (e) {
     //Handle the cases when this model extends another model by using Model.call(this);
     instance = Object.create(SellingPartnerApiForDirectFulfillmentPayments.InvoiceDetail.prototype);
    }
  });

  afterEach(function() {
    instance = null;
  })

  describe('InvoiceDetail', function() {
    it('should create an instance of InvoiceDetail', function() {
      expect(instance).to.be.a(SellingPartnerApiForDirectFulfillmentPayments.InvoiceDetail);
    });

    it('should have the property invoiceNumber', function() {
      // verify property exists
      expect(instance).to.have.property('invoiceNumber');

      // set and verify value
      var expectedValue = generateMockData('String');
      instance.invoiceNumber = expectedValue;
      expect(instance.invoiceNumber).to.equal(expectedValue);
    });

    it('should have the property invoiceDate', function() {
      // verify property exists
      expect(instance).to.have.property('invoiceDate');

      // set and verify value
      var expectedValue = generateMockData('Date');
      instance.invoiceDate = expectedValue;
      expect(instance.invoiceDate).to.equal(expectedValue);
    });

    it('should have the property referenceNumber', function() {
      // verify property exists
      expect(instance).to.have.property('referenceNumber');

      // set and verify value
      var expectedValue = generateMockData('String');
      instance.referenceNumber = expectedValue;
      expect(instance.referenceNumber).to.equal(expectedValue);
    });

    it('should have the property remitToParty', function() {
      // verify property exists
      expect(instance).to.have.property('remitToParty');

      // set and verify value
      var expectedValue = generateMockData('PartyIdentification');
      instance.remitToParty = expectedValue;
      expect(instance.remitToParty).to.equal(expectedValue);
    });

    it('should have the property shipFromParty', function() {
      // verify property exists
      expect(instance).to.have.property('shipFromParty');

      // set and verify value
      var expectedValue = generateMockData('PartyIdentification');
      instance.shipFromParty = expectedValue;
      expect(instance.shipFromParty).to.equal(expectedValue);
    });

    it('should have the property billToParty', function() {
      // verify property exists
      expect(instance).to.have.property('billToParty');

      // set and verify value
      var expectedValue = generateMockData('PartyIdentification');
      instance.billToParty = expectedValue;
      expect(instance.billToParty).to.equal(expectedValue);
    });

    it('should have the property shipToCountryCode', function() {
      // verify property exists
      expect(instance).to.have.property('shipToCountryCode');

      // set and verify value
      var expectedValue = generateMockData('String');
      instance.shipToCountryCode = expectedValue;
      expect(instance.shipToCountryCode).to.equal(expectedValue);
    });

    it('should have the property paymentTermsCode', function() {
      // verify property exists
      expect(instance).to.have.property('paymentTermsCode');

      // set and verify value
      var expectedValue = generateMockData('String');
      instance.paymentTermsCode = expectedValue;
      expect(instance.paymentTermsCode).to.equal(expectedValue);
    });

    it('should have the property invoiceTotal', function() {
      // verify property exists
      expect(instance).to.have.property('invoiceTotal');

      // set and verify value
      var expectedValue = generateMockData('Money');
      instance.invoiceTotal = expectedValue;
      expect(instance.invoiceTotal).to.equal(expectedValue);
    });

    it('should have the property taxTotals', function() {
      // verify property exists
      expect(instance).to.have.property('taxTotals');

      // set and verify value
      var expectedValue = generateMockData('TaxDetail', true);
      instance.taxTotals = expectedValue;
      expect(instance.taxTotals).to.equal(expectedValue);
    });

    it('should have the property additionalDetails', function() {
      // verify property exists
      expect(instance).to.have.property('additionalDetails');

      // set and verify value
      var expectedValue = generateMockData('AdditionalDetails', true);
      instance.additionalDetails = expectedValue;
      expect(instance.additionalDetails).to.equal(expectedValue);
    });

    it('should have the property chargeDetails', function() {
      // verify property exists
      expect(instance).to.have.property('chargeDetails');

      // set and verify value
      var expectedValue = generateMockData('ChargeDetails', true);
      instance.chargeDetails = expectedValue;
      expect(instance.chargeDetails).to.equal(expectedValue);
    });

    it('should have the property items', function() {
      // verify property exists
      expect(instance).to.have.property('items');

      // set and verify value
      var expectedValue = generateMockData('InvoiceItem', true);
      instance.items = expectedValue;
      expect(instance.items).to.equal(expectedValue);
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
          const ModelClass = SellingPartnerApiForDirectFulfillmentPayments[dataType];
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
