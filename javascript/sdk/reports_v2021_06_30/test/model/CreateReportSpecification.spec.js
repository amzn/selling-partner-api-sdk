/**
 * Selling Partner API for Reports
 * The Selling Partner API for Reports lets you retrieve and manage a variety of reports that can help selling partners manage their businesses.
 *
 * The version of the OpenAPI document: 2021-06-30
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
    factory(root.expect, root.SellingPartnerApiForReports);
  }
}(this, function(expect, SellingPartnerApiForReports) {
  'use strict';

  var instance;

  beforeEach(function() {
    try{
     instance = new SellingPartnerApiForReports.CreateReportSpecification();
    } catch (e) {
     //Handle the cases when this model extends another model by using Model.call(this);
     instance = Object.create(SellingPartnerApiForReports.CreateReportSpecification.prototype);
    }
  });

  afterEach(function() {
    instance = null;
  })

  describe('CreateReportSpecification', function() {
    it('should create an instance of CreateReportSpecification', function() {
      expect(instance).to.be.a(SellingPartnerApiForReports.CreateReportSpecification);
    });

    it('should have the property reportOptions', function() {
      // verify property exists
      expect(instance).to.have.property('reportOptions');

      // set and verify value
      var expectedValue = generateMockData('{String: String}');
      instance.reportOptions = expectedValue;
      expect(instance.reportOptions).to.equal(expectedValue);
    });

    it('should have the property reportType', function() {
      // verify property exists
      expect(instance).to.have.property('reportType');

      // set and verify value
      var expectedValue = generateMockData('String');
      instance.reportType = expectedValue;
      expect(instance.reportType).to.equal(expectedValue);
    });

    it('should have the property dataStartTime', function() {
      // verify property exists
      expect(instance).to.have.property('dataStartTime');

      // set and verify value
      var expectedValue = generateMockData('Date');
      instance.dataStartTime = expectedValue;
      expect(instance.dataStartTime).to.equal(expectedValue);
    });

    it('should have the property dataEndTime', function() {
      // verify property exists
      expect(instance).to.have.property('dataEndTime');

      // set and verify value
      var expectedValue = generateMockData('Date');
      instance.dataEndTime = expectedValue;
      expect(instance.dataEndTime).to.equal(expectedValue);
    });

    it('should have the property marketplaceIds', function() {
      // verify property exists
      expect(instance).to.have.property('marketplaceIds');

      // set and verify value
      var expectedValue = generateMockData('String', true);
      instance.marketplaceIds = expectedValue;
      expect(instance.marketplaceIds).to.equal(expectedValue);
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
          const ModelClass = SellingPartnerApiForReports[dataType];
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
