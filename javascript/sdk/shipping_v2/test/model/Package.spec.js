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
     instance = new AmazonShippingApi.Package();
    } catch (e) {
     //Handle the cases when this model extends another model by using Model.call(this);
     instance = Object.create(AmazonShippingApi.Package.prototype);
    }
  });

  afterEach(function() {
    instance = null;
  })

  describe('Package', function() {
    it('should create an instance of Package', function() {
      expect(instance).to.be.a(AmazonShippingApi.Package);
    });

    it('should have the property dimensions (base name: "dimensions")', function() {
      // verify property exists
      expect(instance).to.have.property('dimensions');

      // set and verify value
      var validValue = generateMockData('Dimensions');
      instance.dimensions = validValue;
      expect(instance.dimensions).to.equal(validValue);
    });

    it('should have the property weight (base name: "weight")', function() {
      // verify property exists
      expect(instance).to.have.property('weight');

      // set and verify value
      var validValue = generateMockData('Weight');
      instance.weight = validValue;
      expect(instance.weight).to.equal(validValue);
    });

    it('should have the property insuredValue (base name: "insuredValue")', function() {
      // verify property exists
      expect(instance).to.have.property('insuredValue');

      // set and verify value
      var validValue = generateMockData('Currency');
      instance.insuredValue = validValue;
      expect(instance.insuredValue).to.equal(validValue);
    });

    it('should have the property isHazmat (base name: "isHazmat")', function() {
      // verify property exists
      expect(instance).to.have.property('isHazmat');

      // set and verify value
      var validValue = generateMockData('Boolean');
      instance.isHazmat = validValue;
      expect(instance.isHazmat).to.equal(validValue);
    });

    it('should have the property sellerDisplayName (base name: "sellerDisplayName")', function() {
      // verify property exists
      expect(instance).to.have.property('sellerDisplayName');

      // set and verify value
      var validValue = generateMockData('String');
      instance.sellerDisplayName = validValue;
      expect(instance.sellerDisplayName).to.equal(validValue);
    });

    it('should have the property charges (base name: "charges")', function() {
      // verify property exists
      expect(instance).to.have.property('charges');

      // set and verify value
      var validValue = generateMockData('[ChargeComponent]', true);
      instance.charges = validValue;
      expect(instance.charges).to.equal(validValue);
    });

    it('should have the property packageClientReferenceId (base name: "packageClientReferenceId")', function() {
      // verify property exists
      expect(instance).to.have.property('packageClientReferenceId');

      // set and verify value
      var validValue = generateMockData('String');
      instance.packageClientReferenceId = validValue;
      expect(instance.packageClientReferenceId).to.equal(validValue);
    });

    it('should have the property items (base name: "items")', function() {
      // verify property exists
      expect(instance).to.have.property('items');

      // set and verify value
      var validValue = generateMockData('[Item]', true);
      instance.items = validValue;
      expect(instance.items).to.equal(validValue);
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
