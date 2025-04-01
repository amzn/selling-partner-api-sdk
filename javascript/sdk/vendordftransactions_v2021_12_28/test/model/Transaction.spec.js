/**
 * Selling Partner API for Direct Fulfillment Transaction Status
 * The Selling Partner API for Direct Fulfillment Transaction Status provides programmatic access to a direct fulfillment vendor's transaction status.
 *
 * The version of the OpenAPI document: 2021-12-28
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
    factory(root.expect, root.SellingPartnerApiForDirectFulfillmentTransactionStatus);
  }
}(this, function(expect, SellingPartnerApiForDirectFulfillmentTransactionStatus) {
  'use strict';

  var instance;

  beforeEach(function() {
    try{
     instance = new SellingPartnerApiForDirectFulfillmentTransactionStatus.Transaction();
    } catch (e) {
     //Handle the cases when this model extends another model by using Model.call(this);
     instance = Object.create(SellingPartnerApiForDirectFulfillmentTransactionStatus.Transaction.prototype);
    }
  });

  afterEach(function() {
    instance = null;
  })

  describe('Transaction', function() {
    it('should create an instance of Transaction', function() {
      expect(instance).to.be.a(SellingPartnerApiForDirectFulfillmentTransactionStatus.Transaction);
    });

    it('should have the property transactionId (base name: "transactionId")', function() {
      // verify property exists
      expect(instance).to.have.property('transactionId');

      // set and verify value
      var validValue = generateMockData('String');
      instance.transactionId = validValue;
      expect(instance.transactionId).to.equal(validValue);
    });

    it('should have the property status (base name: "status")', function() {
      // verify property exists
      expect(instance).to.have.property('status');

      // set and verify value
      var validValue = ['Failure', 'Processing', 'Success', ][0];
      instance.status = validValue;
      expect(instance.status).to.equal(validValue);
    });

    it('should have the property errors (base name: "errors")', function() {
      // verify property exists
      expect(instance).to.have.property('errors');

      // set and verify value
      var validValue = generateMockData('ErrorList');
      instance.errors = validValue;
      expect(instance.errors).to.equal(validValue);
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
          const ModelClass = SellingPartnerApiForDirectFulfillmentTransactionStatus[dataType];
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
