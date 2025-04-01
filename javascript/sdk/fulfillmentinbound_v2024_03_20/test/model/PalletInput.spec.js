/**
 * The Selling Partner API for FBA inbound operations.
 * The Selling Partner API for Fulfillment By Amazon (FBA) Inbound. The FBA Inbound API enables building inbound workflows to create, manage, and send shipments into Amazon's fulfillment network. The API has interoperability with the Send-to-Amazon user interface.
 *
 * The version of the OpenAPI document: 2024-03-20
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
    factory(root.expect, root.TheSellingPartnerApiForFbaInboundOperations);
  }
}(this, function(expect, TheSellingPartnerApiForFbaInboundOperations) {
  'use strict';

  var instance;

  beforeEach(function() {
    try{
     instance = new TheSellingPartnerApiForFbaInboundOperations.PalletInput();
    } catch (e) {
     //Handle the cases when this model extends another model by using Model.call(this);
     instance = Object.create(TheSellingPartnerApiForFbaInboundOperations.PalletInput.prototype);
    }
  });

  afterEach(function() {
    instance = null;
  })

  describe('PalletInput', function() {
    it('should create an instance of PalletInput', function() {
      expect(instance).to.be.a(TheSellingPartnerApiForFbaInboundOperations.PalletInput);
    });

    it('should have the property dimensions (base name: "dimensions")', function() {
      // verify property exists
      expect(instance).to.have.property('dimensions');

      // set and verify value
      var validValue = generateMockData('Dimensions');
      instance.dimensions = validValue;
      expect(instance.dimensions).to.equal(validValue);
    });

    it('should have the property quantity (base name: "quantity")', function() {
      // verify property exists
      expect(instance).to.have.property('quantity');

      // set and verify value
      var validValue = generateMockData('Number');
      instance.quantity = validValue;
      expect(instance.quantity).to.equal(validValue);
    });

    it('should have the property stackability (base name: "stackability")', function() {
      // verify property exists
      expect(instance).to.have.property('stackability');

      // set and verify value
      var validValue = generateMockData('Stackability');
      instance.stackability = validValue;
      expect(instance.stackability).to.equal(validValue);
    });

    it('should have the property weight (base name: "weight")', function() {
      // verify property exists
      expect(instance).to.have.property('weight');

      // set and verify value
      var validValue = generateMockData('Weight');
      instance.weight = validValue;
      expect(instance.weight).to.equal(validValue);
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
          const ModelClass = TheSellingPartnerApiForFbaInboundOperations[dataType];
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
