/**
 * Selling Partner APIs for Fulfillment Outbound
 * The Selling Partner API for Fulfillment Outbound lets you create applications that help a seller fulfill Multi-Channel Fulfillment orders using their inventory in Amazon's fulfillment network. You can get information on both potential and existing fulfillment orders.
 *
 * The version of the OpenAPI document: 2020-07-01
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
    factory(root.expect, root.SellingPartnerApisForFulfillmentOutbound);
  }
}(this, function(expect, SellingPartnerApisForFulfillmentOutbound) {
  'use strict';

  var instance;

  beforeEach(function() {
    try{
     instance = new SellingPartnerApisForFulfillmentOutbound.VariablePrecisionAddress();
    } catch (e) {
     //Handle the cases when this model extends another model by using Model.call(this);
     instance = Object.create(SellingPartnerApisForFulfillmentOutbound.VariablePrecisionAddress.prototype);
    }
  });

  afterEach(function() {
    instance = null;
  })

  describe('VariablePrecisionAddress', function() {
    it('should create an instance of VariablePrecisionAddress', function() {
      expect(instance).to.be.a(SellingPartnerApisForFulfillmentOutbound.VariablePrecisionAddress);
    });

    it('should have the property addressLine1', function() {
      // verify property exists
      expect(instance).to.have.property('addressLine1');

      // set and verify value
      var expectedValue = generateMockData('String');
      instance.addressLine1 = expectedValue;
      expect(instance.addressLine1).to.equal(expectedValue);
    });

    it('should have the property addressLine2', function() {
      // verify property exists
      expect(instance).to.have.property('addressLine2');

      // set and verify value
      var expectedValue = generateMockData('String');
      instance.addressLine2 = expectedValue;
      expect(instance.addressLine2).to.equal(expectedValue);
    });

    it('should have the property addressLine3', function() {
      // verify property exists
      expect(instance).to.have.property('addressLine3');

      // set and verify value
      var expectedValue = generateMockData('String');
      instance.addressLine3 = expectedValue;
      expect(instance.addressLine3).to.equal(expectedValue);
    });

    it('should have the property city', function() {
      // verify property exists
      expect(instance).to.have.property('city');

      // set and verify value
      var expectedValue = generateMockData('String');
      instance.city = expectedValue;
      expect(instance.city).to.equal(expectedValue);
    });

    it('should have the property districtOrCounty', function() {
      // verify property exists
      expect(instance).to.have.property('districtOrCounty');

      // set and verify value
      var expectedValue = generateMockData('String');
      instance.districtOrCounty = expectedValue;
      expect(instance.districtOrCounty).to.equal(expectedValue);
    });

    it('should have the property stateOrRegion', function() {
      // verify property exists
      expect(instance).to.have.property('stateOrRegion');

      // set and verify value
      var expectedValue = generateMockData('String');
      instance.stateOrRegion = expectedValue;
      expect(instance.stateOrRegion).to.equal(expectedValue);
    });

    it('should have the property postalCode', function() {
      // verify property exists
      expect(instance).to.have.property('postalCode');

      // set and verify value
      var expectedValue = generateMockData('String');
      instance.postalCode = expectedValue;
      expect(instance.postalCode).to.equal(expectedValue);
    });

    it('should have the property countryCode', function() {
      // verify property exists
      expect(instance).to.have.property('countryCode');

      // set and verify value
      var expectedValue = generateMockData('String');
      instance.countryCode = expectedValue;
      expect(instance.countryCode).to.equal(expectedValue);
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
          const ModelClass = SellingPartnerApisForFulfillmentOutbound[dataType];
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
