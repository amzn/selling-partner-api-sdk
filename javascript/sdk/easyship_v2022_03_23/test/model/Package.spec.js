/**
 * Selling Partner API for Easy Ship
 * Use the Selling Partner API for Easy Ship to build applications for sellers to manage and ship Amazon Easy Ship orders. With this API, you can get available time slots, schedule and reschedule Easy Ship orders, and print shipping labels, invoices, and warranties. To review the differences in Easy Ship operations by marketplace, refer to [Marketplace support](https://developer-docs.amazon.com/sp-api/docs/easyship-api-v2022-03-23-use-case-guide#marketplace-support).
 *
 * The version of the OpenAPI document: 2022-03-23
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
    factory(root.expect, root.SellingPartnerApiForEasyShip);
  }
}(this, function(expect, SellingPartnerApiForEasyShip) {
  'use strict';

  var instance;

  beforeEach(function() {
    try{
     instance = new SellingPartnerApiForEasyShip.Package();
    } catch (e) {
     //Handle the cases when this model extends another model by using Model.call(this);
     instance = Object.create(SellingPartnerApiForEasyShip.Package.prototype);
    }
  });

  afterEach(function() {
    instance = null;
  })

  describe('Package', function() {
    it('should create an instance of Package', function() {
      expect(instance).to.be.a(SellingPartnerApiForEasyShip.Package);
    });

    it('should have the property scheduledPackageId (base name: "scheduledPackageId")', function() {
      // verify property exists
      expect(instance).to.have.property('scheduledPackageId');

      // set and verify value
      var validValue = generateMockData('ScheduledPackageId');
      instance.scheduledPackageId = validValue;
      expect(instance.scheduledPackageId).to.equal(validValue);
    });

    it('should have the property packageDimensions (base name: "packageDimensions")', function() {
      // verify property exists
      expect(instance).to.have.property('packageDimensions');

      // set and verify value
      var validValue = generateMockData('Dimensions');
      instance.packageDimensions = validValue;
      expect(instance.packageDimensions).to.equal(validValue);
    });

    it('should have the property packageWeight (base name: "packageWeight")', function() {
      // verify property exists
      expect(instance).to.have.property('packageWeight');

      // set and verify value
      var validValue = generateMockData('Weight');
      instance.packageWeight = validValue;
      expect(instance.packageWeight).to.equal(validValue);
    });

    it('should have the property packageItems (base name: "packageItems")', function() {
      // verify property exists
      expect(instance).to.have.property('packageItems');

      // set and verify value
      var validValue = generateMockData('[Item]', true);
      instance.packageItems = validValue;
      expect(instance.packageItems).to.equal(validValue);
    });

    it('should have the property packageTimeSlot (base name: "packageTimeSlot")', function() {
      // verify property exists
      expect(instance).to.have.property('packageTimeSlot');

      // set and verify value
      var validValue = generateMockData('TimeSlot');
      instance.packageTimeSlot = validValue;
      expect(instance.packageTimeSlot).to.equal(validValue);
    });

    it('should have the property packageIdentifier (base name: "packageIdentifier")', function() {
      // verify property exists
      expect(instance).to.have.property('packageIdentifier');

      // set and verify value
      var validValue = generateMockData('String');
      instance.packageIdentifier = validValue;
      expect(instance.packageIdentifier).to.equal(validValue);
    });

    it('should have the property invoice (base name: "invoice")', function() {
      // verify property exists
      expect(instance).to.have.property('invoice');

      // set and verify value
      var validValue = generateMockData('InvoiceData');
      instance.invoice = validValue;
      expect(instance.invoice).to.equal(validValue);
    });

    it('should have the property packageStatus (base name: "packageStatus")', function() {
      // verify property exists
      expect(instance).to.have.property('packageStatus');

      // set and verify value
      var validValue = generateMockData('PackageStatus');
      instance.packageStatus = validValue;
      expect(instance.packageStatus).to.equal(validValue);
    });

    it('should have the property trackingDetails (base name: "trackingDetails")', function() {
      // verify property exists
      expect(instance).to.have.property('trackingDetails');

      // set and verify value
      var validValue = generateMockData('TrackingDetails');
      instance.trackingDetails = validValue;
      expect(instance.trackingDetails).to.equal(validValue);
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
          const ModelClass = SellingPartnerApiForEasyShip[dataType];
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
