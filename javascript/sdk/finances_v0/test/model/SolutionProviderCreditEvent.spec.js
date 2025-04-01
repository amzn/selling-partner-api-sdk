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
     instance = new SellingPartnerApiForFinances.SolutionProviderCreditEvent();
    } catch (e) {
     //Handle the cases when this model extends another model by using Model.call(this);
     instance = Object.create(SellingPartnerApiForFinances.SolutionProviderCreditEvent.prototype);
    }
  });

  afterEach(function() {
    instance = null;
  })

  describe('SolutionProviderCreditEvent', function() {
    it('should create an instance of SolutionProviderCreditEvent', function() {
      expect(instance).to.be.a(SellingPartnerApiForFinances.SolutionProviderCreditEvent);
    });

    it('should have the property providerTransactionType (base name: "ProviderTransactionType")', function() {
      // verify property exists
      expect(instance).to.have.property('providerTransactionType');

      // set and verify value
      var validValue = generateMockData('String');
      instance.providerTransactionType = validValue;
      expect(instance.providerTransactionType).to.equal(validValue);
    });

    it('should have the property sellerOrderId (base name: "SellerOrderId")', function() {
      // verify property exists
      expect(instance).to.have.property('sellerOrderId');

      // set and verify value
      var validValue = generateMockData('String');
      instance.sellerOrderId = validValue;
      expect(instance.sellerOrderId).to.equal(validValue);
    });

    it('should have the property marketplaceId (base name: "MarketplaceId")', function() {
      // verify property exists
      expect(instance).to.have.property('marketplaceId');

      // set and verify value
      var validValue = generateMockData('String');
      instance.marketplaceId = validValue;
      expect(instance.marketplaceId).to.equal(validValue);
    });

    it('should have the property marketplaceCountryCode (base name: "MarketplaceCountryCode")', function() {
      // verify property exists
      expect(instance).to.have.property('marketplaceCountryCode');

      // set and verify value
      var validValue = generateMockData('String');
      instance.marketplaceCountryCode = validValue;
      expect(instance.marketplaceCountryCode).to.equal(validValue);
    });

    it('should have the property sellerId (base name: "SellerId")', function() {
      // verify property exists
      expect(instance).to.have.property('sellerId');

      // set and verify value
      var validValue = generateMockData('String');
      instance.sellerId = validValue;
      expect(instance.sellerId).to.equal(validValue);
    });

    it('should have the property sellerStoreName (base name: "SellerStoreName")', function() {
      // verify property exists
      expect(instance).to.have.property('sellerStoreName');

      // set and verify value
      var validValue = generateMockData('String');
      instance.sellerStoreName = validValue;
      expect(instance.sellerStoreName).to.equal(validValue);
    });

    it('should have the property providerId (base name: "ProviderId")', function() {
      // verify property exists
      expect(instance).to.have.property('providerId');

      // set and verify value
      var validValue = generateMockData('String');
      instance.providerId = validValue;
      expect(instance.providerId).to.equal(validValue);
    });

    it('should have the property providerStoreName (base name: "ProviderStoreName")', function() {
      // verify property exists
      expect(instance).to.have.property('providerStoreName');

      // set and verify value
      var validValue = generateMockData('String');
      instance.providerStoreName = validValue;
      expect(instance.providerStoreName).to.equal(validValue);
    });

    it('should have the property transactionAmount (base name: "TransactionAmount")', function() {
      // verify property exists
      expect(instance).to.have.property('transactionAmount');

      // set and verify value
      var validValue = generateMockData('Currency');
      instance.transactionAmount = validValue;
      expect(instance.transactionAmount).to.equal(validValue);
    });

    it('should have the property transactionCreationDate (base name: "TransactionCreationDate")', function() {
      // verify property exists
      expect(instance).to.have.property('transactionCreationDate');

      // set and verify value
      var validValue = generateMockData('Date');
      instance.transactionCreationDate = validValue;
      expect(instance.transactionCreationDate).to.equal(validValue);
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
