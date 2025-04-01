/**
 * The Selling Partner API for Invoices.
 * Use the Selling Partner API for Invoices to retrieve and manage invoice-related operations, which can help selling partners manage their bookkeeping processes.
 *
 * The version of the OpenAPI document: 2024-06-19
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
    factory(root.expect, root.TheSellingPartnerApiForInvoices);
  }
}(this, function(expect, TheSellingPartnerApiForInvoices) {
  'use strict';

  var instance;

  beforeEach(function() {
    try{
     instance = new TheSellingPartnerApiForInvoices.Export();
    } catch (e) {
     //Handle the cases when this model extends another model by using Model.call(this);
     instance = Object.create(TheSellingPartnerApiForInvoices.Export.prototype);
    }
  });

  afterEach(function() {
    instance = null;
  })

  describe('Export', function() {
    it('should create an instance of Export', function() {
      expect(instance).to.be.a(TheSellingPartnerApiForInvoices.Export);
    });

    it('should have the property errorMessage (base name: "errorMessage")', function() {
      // verify property exists
      expect(instance).to.have.property('errorMessage');

      // set and verify value
      var validValue = generateMockData('String');
      instance.errorMessage = validValue;
      expect(instance.errorMessage).to.equal(validValue);
    });

    it('should have the property exportId (base name: "exportId")', function() {
      // verify property exists
      expect(instance).to.have.property('exportId');

      // set and verify value
      var validValue = generateMockData('String');
      instance.exportId = validValue;
      expect(instance.exportId).to.equal(validValue);
    });

    it('should have the property generateExportFinishedAt (base name: "generateExportFinishedAt")', function() {
      // verify property exists
      expect(instance).to.have.property('generateExportFinishedAt');

      // set and verify value
      var validValue = generateMockData('Date');
      instance.generateExportFinishedAt = validValue;
      expect(instance.generateExportFinishedAt).to.equal(validValue);
    });

    it('should have the property generateExportStartedAt (base name: "generateExportStartedAt")', function() {
      // verify property exists
      expect(instance).to.have.property('generateExportStartedAt');

      // set and verify value
      var validValue = generateMockData('Date');
      instance.generateExportStartedAt = validValue;
      expect(instance.generateExportStartedAt).to.equal(validValue);
    });

    it('should have the property invoicesDocumentIds (base name: "invoicesDocumentIds")', function() {
      // verify property exists
      expect(instance).to.have.property('invoicesDocumentIds');

      // set and verify value
      var validValue = generateMockData('[String]', true);
      instance.invoicesDocumentIds = validValue;
      expect(instance.invoicesDocumentIds).to.equal(validValue);
    });

    it('should have the property status (base name: "status")', function() {
      // verify property exists
      expect(instance).to.have.property('status');

      // set and verify value
      var validValue = generateMockData('ExportStatus');
      instance.status = validValue;
      expect(instance.status).to.equal(validValue);
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
          const ModelClass = TheSellingPartnerApiForInvoices[dataType];
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
