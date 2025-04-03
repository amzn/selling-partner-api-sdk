/**
 * Selling Partner API for Merchant Fulfillment
 * With the Selling Partner API for Merchant Fulfillment, you can build applications that sellers can use to purchase shipping for non-Prime and Prime orders using Amazon's Buy Shipping Services.
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
    factory(root.expect, root.SellingPartnerApiForMerchantFulfillment);
  }
}(this, function(expect, SellingPartnerApiForMerchantFulfillment) {
  'use strict';

  var instance;

  beforeEach(function() {
    try{
     instance = new SellingPartnerApiForMerchantFulfillment.AdditionalSellerInput();
    } catch (e) {
     //Handle the cases when this model extends another model by using Model.call(this);
     instance = Object.create(SellingPartnerApiForMerchantFulfillment.AdditionalSellerInput.prototype);
    }
  });

  afterEach(function() {
    instance = null;
  })

  describe('AdditionalSellerInput', function() {
    it('should create an instance of AdditionalSellerInput', function() {
      expect(instance).to.be.a(SellingPartnerApiForMerchantFulfillment.AdditionalSellerInput);
    });

    it('should have the property dataType', function() {
      // verify property exists
      expect(instance).to.have.property('dataType');

      // set and verify value
      var expectedValue = generateMockData('String');
      instance.dataType = expectedValue;
      expect(instance.dataType).to.equal(expectedValue);
    });

    it('should have the property valueAsString', function() {
      // verify property exists
      expect(instance).to.have.property('valueAsString');

      // set and verify value
      var expectedValue = generateMockData('String');
      instance.valueAsString = expectedValue;
      expect(instance.valueAsString).to.equal(expectedValue);
    });

    it('should have the property valueAsBoolean', function() {
      // verify property exists
      expect(instance).to.have.property('valueAsBoolean');

      // set and verify value
      var expectedValue = generateMockData('Boolean');
      instance.valueAsBoolean = expectedValue;
      expect(instance.valueAsBoolean).to.equal(expectedValue);
    });

    it('should have the property valueAsInteger', function() {
      // verify property exists
      expect(instance).to.have.property('valueAsInteger');

      // set and verify value
      var expectedValue = generateMockData('Number');
      instance.valueAsInteger = expectedValue;
      expect(instance.valueAsInteger).to.equal(expectedValue);
    });

    it('should have the property valueAsTimestamp', function() {
      // verify property exists
      expect(instance).to.have.property('valueAsTimestamp');

      // set and verify value
      var expectedValue = generateMockData('Date');
      instance.valueAsTimestamp = expectedValue;
      expect(instance.valueAsTimestamp).to.equal(expectedValue);
    });

    it('should have the property valueAsAddress', function() {
      // verify property exists
      expect(instance).to.have.property('valueAsAddress');

      // set and verify value
      var expectedValue = generateMockData('Address');
      instance.valueAsAddress = expectedValue;
      expect(instance.valueAsAddress).to.equal(expectedValue);
    });

    it('should have the property valueAsWeight', function() {
      // verify property exists
      expect(instance).to.have.property('valueAsWeight');

      // set and verify value
      var expectedValue = generateMockData('Weight');
      instance.valueAsWeight = expectedValue;
      expect(instance.valueAsWeight).to.equal(expectedValue);
    });

    it('should have the property valueAsDimension', function() {
      // verify property exists
      expect(instance).to.have.property('valueAsDimension');

      // set and verify value
      var expectedValue = generateMockData('Length');
      instance.valueAsDimension = expectedValue;
      expect(instance.valueAsDimension).to.equal(expectedValue);
    });

    it('should have the property valueAsCurrency', function() {
      // verify property exists
      expect(instance).to.have.property('valueAsCurrency');

      // set and verify value
      var expectedValue = generateMockData('CurrencyAmount');
      instance.valueAsCurrency = expectedValue;
      expect(instance.valueAsCurrency).to.equal(expectedValue);
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
          const ModelClass = SellingPartnerApiForMerchantFulfillment[dataType];
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
