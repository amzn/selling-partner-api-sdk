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

    it('should have the property dataType (base name: "DataType")', function() {
      // verify property exists
      expect(instance).to.have.property('dataType');

      // set and verify value
      var validValue = generateMockData('String');
      instance.dataType = validValue;
      expect(instance.dataType).to.equal(validValue);
    });

    it('should have the property valueAsString (base name: "ValueAsString")', function() {
      // verify property exists
      expect(instance).to.have.property('valueAsString');

      // set and verify value
      var validValue = generateMockData('String');
      instance.valueAsString = validValue;
      expect(instance.valueAsString).to.equal(validValue);
    });

    it('should have the property valueAsBoolean (base name: "ValueAsBoolean")', function() {
      // verify property exists
      expect(instance).to.have.property('valueAsBoolean');

      // set and verify value
      var validValue = generateMockData('Boolean');
      instance.valueAsBoolean = validValue;
      expect(instance.valueAsBoolean).to.equal(validValue);
    });

    it('should have the property valueAsInteger (base name: "ValueAsInteger")', function() {
      // verify property exists
      expect(instance).to.have.property('valueAsInteger');

      // set and verify value
      var validValue = generateMockData('Number');
      instance.valueAsInteger = validValue;
      expect(instance.valueAsInteger).to.equal(validValue);
    });

    it('should have the property valueAsTimestamp (base name: "ValueAsTimestamp")', function() {
      // verify property exists
      expect(instance).to.have.property('valueAsTimestamp');

      // set and verify value
      var validValue = generateMockData('Date');
      instance.valueAsTimestamp = validValue;
      expect(instance.valueAsTimestamp).to.equal(validValue);
    });

    it('should have the property valueAsAddress (base name: "ValueAsAddress")', function() {
      // verify property exists
      expect(instance).to.have.property('valueAsAddress');

      // set and verify value
      var validValue = generateMockData('Address');
      instance.valueAsAddress = validValue;
      expect(instance.valueAsAddress).to.equal(validValue);
    });

    it('should have the property valueAsWeight (base name: "ValueAsWeight")', function() {
      // verify property exists
      expect(instance).to.have.property('valueAsWeight');

      // set and verify value
      var validValue = generateMockData('Weight');
      instance.valueAsWeight = validValue;
      expect(instance.valueAsWeight).to.equal(validValue);
    });

    it('should have the property valueAsDimension (base name: "ValueAsDimension")', function() {
      // verify property exists
      expect(instance).to.have.property('valueAsDimension');

      // set and verify value
      var validValue = generateMockData('Length');
      instance.valueAsDimension = validValue;
      expect(instance.valueAsDimension).to.equal(validValue);
    });

    it('should have the property valueAsCurrency (base name: "ValueAsCurrency")', function() {
      // verify property exists
      expect(instance).to.have.property('valueAsCurrency');

      // set and verify value
      var validValue = generateMockData('CurrencyAmount');
      instance.valueAsCurrency = validValue;
      expect(instance.valueAsCurrency).to.equal(validValue);
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
