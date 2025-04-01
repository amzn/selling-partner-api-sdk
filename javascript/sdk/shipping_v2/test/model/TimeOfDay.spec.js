/**
 * Amazon Shipping API
 * The Amazon Shipping API is designed to support outbound shipping use cases both for orders originating on Amazon-owned marketplaces as well as external channels/marketplaces. With these APIs, you can request shipping rates, create shipments, cancel shipments, and track shipments.
 *
 * The version of the OpenAPI document: v2
 * Contact: swa-api-core@amazon.com
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
    factory(root.expect, root.AmazonShippingApi);
  }
}(this, function(expect, AmazonShippingApi) {
  'use strict';

  var instance;

  beforeEach(function() {
    try{
     instance = new AmazonShippingApi.TimeOfDay();
    } catch (e) {
     //Handle the cases when this model extends another model by using Model.call(this);
     instance = Object.create(AmazonShippingApi.TimeOfDay.prototype);
    }
  });

  afterEach(function() {
    instance = null;
  })

  describe('TimeOfDay', function() {
    it('should create an instance of TimeOfDay', function() {
      expect(instance).to.be.a(AmazonShippingApi.TimeOfDay);
    });

    it('should have the property hourOfDay (base name: "hourOfDay")', function() {
      // verify property exists
      expect(instance).to.have.property('hourOfDay');

      // set and verify value
      var validValue = generateMockData('Number');
      instance.hourOfDay = validValue;
      expect(instance.hourOfDay).to.equal(validValue);
    });

    it('should have the property minuteOfHour (base name: "minuteOfHour")', function() {
      // verify property exists
      expect(instance).to.have.property('minuteOfHour');

      // set and verify value
      var validValue = generateMockData('Number');
      instance.minuteOfHour = validValue;
      expect(instance.minuteOfHour).to.equal(validValue);
    });

    it('should have the property secondOfMinute (base name: "secondOfMinute")', function() {
      // verify property exists
      expect(instance).to.have.property('secondOfMinute');

      // set and verify value
      var validValue = generateMockData('Number');
      instance.secondOfMinute = validValue;
      expect(instance.secondOfMinute).to.equal(validValue);
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
          const ModelClass = AmazonShippingApi[dataType];
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
