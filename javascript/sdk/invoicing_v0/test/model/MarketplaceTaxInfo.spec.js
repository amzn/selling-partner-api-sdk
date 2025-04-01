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
     instance = new SellingPartnerApiForShipmentInvoicing.MarketplaceTaxInfo();
    } catch (e) {
     //Handle the cases when this model extends another model by using Model.call(this);
     instance = Object.create(SellingPartnerApiForShipmentInvoicing.MarketplaceTaxInfo.prototype);
    }
  });

  afterEach(function() {
    instance = null;
  })

  describe('MarketplaceTaxInfo', function() {
    it('should create an instance of MarketplaceTaxInfo', function() {
      expect(instance).to.be.a(SellingPartnerApiForShipmentInvoicing.MarketplaceTaxInfo);
    });

    it('should have the property companyLegalName (base name: "CompanyLegalName")', function() {
      // verify property exists
      expect(instance).to.have.property('companyLegalName');

      // set and verify value
      var validValue = generateMockData('String');
      instance.companyLegalName = validValue;
      expect(instance.companyLegalName).to.equal(validValue);
    });

    it('should have the property taxingRegion (base name: "TaxingRegion")', function() {
      // verify property exists
      expect(instance).to.have.property('taxingRegion');

      // set and verify value
      var validValue = generateMockData('String');
      instance.taxingRegion = validValue;
      expect(instance.taxingRegion).to.equal(validValue);
    });

    it('should have the property taxClassifications (base name: "TaxClassifications")', function() {
      // verify property exists
      expect(instance).to.have.property('taxClassifications');

      // set and verify value
      var validValue = generateMockData('[TaxClassification]', true);
      instance.taxClassifications = validValue;
      expect(instance.taxClassifications).to.equal(validValue);
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
