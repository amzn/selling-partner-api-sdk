/**
 * Selling Partner API for Retail Procurement Payments
 * The Selling Partner API for Retail Procurement Payments provides programmatic access to vendors payments data.
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
    factory(root.expect, root.SellingPartnerApiForRetailProcurementPayments);
  }
}(this, function(expect, SellingPartnerApiForRetailProcurementPayments) {
  'use strict';

  var instance;

  beforeEach(function() {
    try{
     instance = new SellingPartnerApiForRetailProcurementPayments.Invoice();
    } catch (e) {
     //Handle the cases when this model extends another model by using Model.call(this);
     instance = Object.create(SellingPartnerApiForRetailProcurementPayments.Invoice.prototype);
    }
  });

  afterEach(function() {
    instance = null;
  })

  describe('Invoice', function() {
    it('should create an instance of Invoice', function() {
      expect(instance).to.be.a(SellingPartnerApiForRetailProcurementPayments.Invoice);
    });

    it('should have the property invoiceType (base name: "invoiceType")', function() {
      // verify property exists
      expect(instance).to.have.property('invoiceType');

      // set and verify value
      var validValue = ['Invoice', 'CreditNote', ][0];
      instance.invoiceType = validValue;
      expect(instance.invoiceType).to.equal(validValue);
    });

    it('should have the property id (base name: "id")', function() {
      // verify property exists
      expect(instance).to.have.property('id');

      // set and verify value
      var validValue = generateMockData('String');
      instance.id = validValue;
      expect(instance.id).to.equal(validValue);
    });

    it('should have the property referenceNumber (base name: "referenceNumber")', function() {
      // verify property exists
      expect(instance).to.have.property('referenceNumber');

      // set and verify value
      var validValue = generateMockData('String');
      instance.referenceNumber = validValue;
      expect(instance.referenceNumber).to.equal(validValue);
    });

    it('should have the property date (base name: "date")', function() {
      // verify property exists
      expect(instance).to.have.property('date');

      // set and verify value
      var validValue = generateMockData('Date');
      instance.date = validValue;
      expect(instance.date).to.equal(validValue);
    });

    it('should have the property remitToParty (base name: "remitToParty")', function() {
      // verify property exists
      expect(instance).to.have.property('remitToParty');

      // set and verify value
      var validValue = generateMockData('PartyIdentification');
      instance.remitToParty = validValue;
      expect(instance.remitToParty).to.equal(validValue);
    });

    it('should have the property shipToParty (base name: "shipToParty")', function() {
      // verify property exists
      expect(instance).to.have.property('shipToParty');

      // set and verify value
      var validValue = generateMockData('PartyIdentification');
      instance.shipToParty = validValue;
      expect(instance.shipToParty).to.equal(validValue);
    });

    it('should have the property shipFromParty (base name: "shipFromParty")', function() {
      // verify property exists
      expect(instance).to.have.property('shipFromParty');

      // set and verify value
      var validValue = generateMockData('PartyIdentification');
      instance.shipFromParty = validValue;
      expect(instance.shipFromParty).to.equal(validValue);
    });

    it('should have the property billToParty (base name: "billToParty")', function() {
      // verify property exists
      expect(instance).to.have.property('billToParty');

      // set and verify value
      var validValue = generateMockData('PartyIdentification');
      instance.billToParty = validValue;
      expect(instance.billToParty).to.equal(validValue);
    });

    it('should have the property paymentTerms (base name: "paymentTerms")', function() {
      // verify property exists
      expect(instance).to.have.property('paymentTerms');

      // set and verify value
      var validValue = generateMockData('PaymentTerms');
      instance.paymentTerms = validValue;
      expect(instance.paymentTerms).to.equal(validValue);
    });

    it('should have the property invoiceTotal (base name: "invoiceTotal")', function() {
      // verify property exists
      expect(instance).to.have.property('invoiceTotal');

      // set and verify value
      var validValue = generateMockData('Money');
      instance.invoiceTotal = validValue;
      expect(instance.invoiceTotal).to.equal(validValue);
    });

    it('should have the property taxDetails (base name: "taxDetails")', function() {
      // verify property exists
      expect(instance).to.have.property('taxDetails');

      // set and verify value
      var validValue = generateMockData('[TaxDetails]', true);
      instance.taxDetails = validValue;
      expect(instance.taxDetails).to.equal(validValue);
    });

    it('should have the property additionalDetails (base name: "additionalDetails")', function() {
      // verify property exists
      expect(instance).to.have.property('additionalDetails');

      // set and verify value
      var validValue = generateMockData('[AdditionalDetails]', true);
      instance.additionalDetails = validValue;
      expect(instance.additionalDetails).to.equal(validValue);
    });

    it('should have the property chargeDetails (base name: "chargeDetails")', function() {
      // verify property exists
      expect(instance).to.have.property('chargeDetails');

      // set and verify value
      var validValue = generateMockData('[ChargeDetails]', true);
      instance.chargeDetails = validValue;
      expect(instance.chargeDetails).to.equal(validValue);
    });

    it('should have the property allowanceDetails (base name: "allowanceDetails")', function() {
      // verify property exists
      expect(instance).to.have.property('allowanceDetails');

      // set and verify value
      var validValue = generateMockData('[AllowanceDetails]', true);
      instance.allowanceDetails = validValue;
      expect(instance.allowanceDetails).to.equal(validValue);
    });

    it('should have the property items (base name: "items")', function() {
      // verify property exists
      expect(instance).to.have.property('items');

      // set and verify value
      var validValue = generateMockData('[InvoiceItem]', true);
      instance.items = validValue;
      expect(instance.items).to.equal(validValue);
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
          const ModelClass = SellingPartnerApiForRetailProcurementPayments[dataType];
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
