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
     instance = new SellingPartnerApiForFinances.ListFinancialEventGroupsPayload();
    } catch (e) {
     //Handle the cases when this model extends another model by using Model.call(this);
     instance = Object.create(SellingPartnerApiForFinances.ListFinancialEventGroupsPayload.prototype);
    }
  });

  afterEach(function() {
    instance = null;
  })

  describe('ListFinancialEventGroupsPayload', function() {
    it('should create an instance of ListFinancialEventGroupsPayload', function() {
      expect(instance).to.be.a(SellingPartnerApiForFinances.ListFinancialEventGroupsPayload);
    });

    it('should have the property nextToken (base name: "NextToken")', function() {
      // verify property exists
      expect(instance).to.have.property('nextToken');

      // set and verify value
      var validValue = generateMockData('String');
      instance.nextToken = validValue;
      expect(instance.nextToken).to.equal(validValue);
    });

    it('should have the property financialEventGroupList (base name: "FinancialEventGroupList")', function() {
      // verify property exists
      expect(instance).to.have.property('financialEventGroupList');

      // set and verify value
      var validValue = generateMockData('[FinancialEventGroup]', true);
      instance.financialEventGroupList = validValue;
      expect(instance.financialEventGroupList).to.equal(validValue);
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
