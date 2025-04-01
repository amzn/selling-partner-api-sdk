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
     instance = new AmazonShippingApi.CarrierAccountInput();
    } catch (e) {
     //Handle the cases when this model extends another model by using Model.call(this);
     instance = Object.create(AmazonShippingApi.CarrierAccountInput.prototype);
    }
  });

  afterEach(function() {
    instance = null;
  })

  describe('CarrierAccountInput', function() {
    it('should create an instance of CarrierAccountInput', function() {
      expect(instance).to.be.a(AmazonShippingApi.CarrierAccountInput);
    });

    it('should have the property descriptionLocalizationKey (base name: "descriptionLocalizationKey")', function() {
      // verify property exists
      expect(instance).to.have.property('descriptionLocalizationKey');

      // set and verify value
      var validValue = generateMockData('String');
      instance.descriptionLocalizationKey = validValue;
      expect(instance.descriptionLocalizationKey).to.equal(validValue);
    });

    it('should have the property name (base name: "name")', function() {
      // verify property exists
      expect(instance).to.have.property('name');

      // set and verify value
      var validValue = generateMockData('String');
      instance.name = validValue;
      expect(instance.name).to.equal(validValue);
    });

    it('should have the property groupName (base name: "groupName")', function() {
      // verify property exists
      expect(instance).to.have.property('groupName');

      // set and verify value
      var validValue = generateMockData('String');
      instance.groupName = validValue;
      expect(instance.groupName).to.equal(validValue);
    });

    it('should have the property inputType (base name: "inputType")', function() {
      // verify property exists
      expect(instance).to.have.property('inputType');

      // set and verify value
      var validValue = generateMockData('InputType');
      instance.inputType = validValue;
      expect(instance.inputType).to.equal(validValue);
    });

    it('should have the property isMandatory (base name: "isMandatory")', function() {
      // verify property exists
      expect(instance).to.have.property('isMandatory');

      // set and verify value
      var validValue = generateMockData('Boolean');
      instance.isMandatory = validValue;
      expect(instance.isMandatory).to.equal(validValue);
    });

    it('should have the property isConfidential (base name: "isConfidential")', function() {
      // verify property exists
      expect(instance).to.have.property('isConfidential');

      // set and verify value
      var validValue = generateMockData('Boolean');
      instance.isConfidential = validValue;
      expect(instance.isConfidential).to.equal(validValue);
    });

    it('should have the property isHidden (base name: "isHidden")', function() {
      // verify property exists
      expect(instance).to.have.property('isHidden');

      // set and verify value
      var validValue = generateMockData('Boolean');
      instance.isHidden = validValue;
      expect(instance.isHidden).to.equal(validValue);
    });

    it('should have the property validationMetadata (base name: "validationMetadata")', function() {
      // verify property exists
      expect(instance).to.have.property('validationMetadata');

      // set and verify value
      var validValue = generateMockData('[ValidationMetadata]', true);
      instance.validationMetadata = validValue;
      expect(instance.validationMetadata).to.equal(validValue);
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
