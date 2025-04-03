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
     instance = new SellingPartnerApiForFinances.SAFETReimbursementEvent();
    } catch (e) {
     //Handle the cases when this model extends another model by using Model.call(this);
     instance = Object.create(SellingPartnerApiForFinances.SAFETReimbursementEvent.prototype);
    }
  });

  afterEach(function() {
    instance = null;
  })

  describe('SAFETReimbursementEvent', function() {
    it('should create an instance of SAFETReimbursementEvent', function() {
      expect(instance).to.be.a(SellingPartnerApiForFinances.SAFETReimbursementEvent);
    });

    it('should have the property postedDate', function() {
      // verify property exists
      expect(instance).to.have.property('postedDate');

      // set and verify value
      var expectedValue = generateMockData('Date');
      instance.postedDate = expectedValue;
      expect(instance.postedDate).to.equal(expectedValue);
    });

    it('should have the property sAFETClaimId', function() {
      // verify property exists
      expect(instance).to.have.property('sAFETClaimId');

      // set and verify value
      var expectedValue = generateMockData('String');
      instance.sAFETClaimId = expectedValue;
      expect(instance.sAFETClaimId).to.equal(expectedValue);
    });

    it('should have the property reimbursedAmount', function() {
      // verify property exists
      expect(instance).to.have.property('reimbursedAmount');

      // set and verify value
      var expectedValue = generateMockData('Currency');
      instance.reimbursedAmount = expectedValue;
      expect(instance.reimbursedAmount).to.equal(expectedValue);
    });

    it('should have the property reasonCode', function() {
      // verify property exists
      expect(instance).to.have.property('reasonCode');

      // set and verify value
      var expectedValue = generateMockData('String');
      instance.reasonCode = expectedValue;
      expect(instance.reasonCode).to.equal(expectedValue);
    });

    it('should have the property sAFETReimbursementItemList', function() {
      // verify property exists
      expect(instance).to.have.property('sAFETReimbursementItemList');

      // set and verify value
      var expectedValue = generateMockData('SAFETReimbursementItem', true);
      instance.sAFETReimbursementItemList = expectedValue;
      expect(instance.sAFETReimbursementItemList).to.equal(expectedValue);
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
