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
     instance = new SellingPartnerApiForEasyShip.Dimensions();
    } catch (e) {
     //Handle the cases when this model extends another model by using Model.call(this);
     instance = Object.create(SellingPartnerApiForEasyShip.Dimensions.prototype);
    }
  });

  afterEach(function() {
    instance = null;
  })

  describe('Dimensions', function() {
    it('should create an instance of Dimensions', function() {
      expect(instance).to.be.a(SellingPartnerApiForEasyShip.Dimensions);
    });

    it('should have the property length', function() {
      // verify property exists
      expect(instance).to.have.property('length');

      // set and verify value
      var expectedValue = generateMockData('Number');
      instance.length = expectedValue;
      expect(instance.length).to.equal(expectedValue);
    });

    it('should have the property width', function() {
      // verify property exists
      expect(instance).to.have.property('width');

      // set and verify value
      var expectedValue = generateMockData('Number');
      instance.width = expectedValue;
      expect(instance.width).to.equal(expectedValue);
    });

    it('should have the property height', function() {
      // verify property exists
      expect(instance).to.have.property('height');

      // set and verify value
      var expectedValue = generateMockData('Number');
      instance.height = expectedValue;
      expect(instance.height).to.equal(expectedValue);
    });

    it('should have the property unit', function() {
      // verify property exists
      expect(instance).to.have.property('unit');

      // set and verify value
      var expectedValue = generateMockData('UnitOfLength');
      instance.unit = expectedValue;
      expect(instance.unit).to.equal(expectedValue);
    });

    it('should have the property identifier', function() {
      // verify property exists
      expect(instance).to.have.property('identifier');

      // set and verify value
      var expectedValue = generateMockData('String');
      instance.identifier = expectedValue;
      expect(instance.identifier).to.equal(expectedValue);
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
