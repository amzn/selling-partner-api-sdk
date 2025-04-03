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

    it('should have the property providerTransactionType', function() {
      // verify property exists
      expect(instance).to.have.property('providerTransactionType');

      // set and verify value
      var expectedValue = generateMockData('String');
      instance.providerTransactionType = expectedValue;
      expect(instance.providerTransactionType).to.equal(expectedValue);
    });

    it('should have the property sellerOrderId', function() {
      // verify property exists
      expect(instance).to.have.property('sellerOrderId');

      // set and verify value
      var expectedValue = generateMockData('String');
      instance.sellerOrderId = expectedValue;
      expect(instance.sellerOrderId).to.equal(expectedValue);
    });

    it('should have the property marketplaceId', function() {
      // verify property exists
      expect(instance).to.have.property('marketplaceId');

      // set and verify value
      var expectedValue = generateMockData('String');
      instance.marketplaceId = expectedValue;
      expect(instance.marketplaceId).to.equal(expectedValue);
    });

    it('should have the property marketplaceCountryCode', function() {
      // verify property exists
      expect(instance).to.have.property('marketplaceCountryCode');

      // set and verify value
      var expectedValue = generateMockData('String');
      instance.marketplaceCountryCode = expectedValue;
      expect(instance.marketplaceCountryCode).to.equal(expectedValue);
    });

    it('should have the property sellerId', function() {
      // verify property exists
      expect(instance).to.have.property('sellerId');

      // set and verify value
      var expectedValue = generateMockData('String');
      instance.sellerId = expectedValue;
      expect(instance.sellerId).to.equal(expectedValue);
    });

    it('should have the property sellerStoreName', function() {
      // verify property exists
      expect(instance).to.have.property('sellerStoreName');

      // set and verify value
      var expectedValue = generateMockData('String');
      instance.sellerStoreName = expectedValue;
      expect(instance.sellerStoreName).to.equal(expectedValue);
    });

    it('should have the property providerId', function() {
      // verify property exists
      expect(instance).to.have.property('providerId');

      // set and verify value
      var expectedValue = generateMockData('String');
      instance.providerId = expectedValue;
      expect(instance.providerId).to.equal(expectedValue);
    });

    it('should have the property providerStoreName', function() {
      // verify property exists
      expect(instance).to.have.property('providerStoreName');

      // set and verify value
      var expectedValue = generateMockData('String');
      instance.providerStoreName = expectedValue;
      expect(instance.providerStoreName).to.equal(expectedValue);
    });

    it('should have the property transactionAmount', function() {
      // verify property exists
      expect(instance).to.have.property('transactionAmount');

      // set and verify value
      var expectedValue = generateMockData('Currency');
      instance.transactionAmount = expectedValue;
      expect(instance.transactionAmount).to.equal(expectedValue);
    });

    it('should have the property transactionCreationDate', function() {
      // verify property exists
      expect(instance).to.have.property('transactionCreationDate');

      // set and verify value
      var expectedValue = generateMockData('Date');
      instance.transactionCreationDate = expectedValue;
      expect(instance.transactionCreationDate).to.equal(expectedValue);
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
