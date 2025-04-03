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
     instance = new SellingPartnerApiForReports.CreateReportScheduleSpecification();
    } catch (e) {
     //Handle the cases when this model extends another model by using Model.call(this);
     instance = Object.create(SellingPartnerApiForReports.CreateReportScheduleSpecification.prototype);
    }
  });

  afterEach(function() {
    instance = null;
  })

  describe('CreateReportScheduleSpecification', function() {
    it('should create an instance of CreateReportScheduleSpecification', function() {
      expect(instance).to.be.a(SellingPartnerApiForReports.CreateReportScheduleSpecification);
    });

    it('should have the property reportType', function() {
      // verify property exists
      expect(instance).to.have.property('reportType');

      // set and verify value
      var expectedValue = generateMockData('String');
      instance.reportType = expectedValue;
      expect(instance.reportType).to.equal(expectedValue);
    });

    it('should have the property marketplaceIds', function() {
      // verify property exists
      expect(instance).to.have.property('marketplaceIds');

      // set and verify value
      var expectedValue = generateMockData('String', true);
      instance.marketplaceIds = expectedValue;
      expect(instance.marketplaceIds).to.equal(expectedValue);
    });

    it('should have the property reportOptions', function() {
      // verify property exists
      expect(instance).to.have.property('reportOptions');

      // set and verify value
      var expectedValue = generateMockData('{String: String}');
      instance.reportOptions = expectedValue;
      expect(instance.reportOptions).to.equal(expectedValue);
    });

    it('should have the property period', function() {
      // verify property exists
      expect(instance).to.have.property('period');

      // set and verify value
      var expectedValue = ['PT5M', 'PT15M', 'PT30M', 'PT1H', 'PT2H', 'PT4H', 'PT8H', 'PT12H', 'P1D', 'P2D', 'P3D', 'PT84H', 'P7D', 'P14D', 'P15D', 'P18D', 'P30D', 'P1M', ][0];
      instance.period = expectedValue;
      expect(instance.period).to.equal(expectedValue);
    });

    it('should have the property nextReportCreationTime', function() {
      // verify property exists
      expect(instance).to.have.property('nextReportCreationTime');

      // set and verify value
      var expectedValue = generateMockData('Date');
      instance.nextReportCreationTime = expectedValue;
      expect(instance.nextReportCreationTime).to.equal(expectedValue);
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
