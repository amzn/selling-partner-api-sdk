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
     instance = new TheSellingPartnerApiForFbaInboundOperations.TransportationOption();
    } catch (e) {
     //Handle the cases when this model extends another model by using Model.call(this);
     instance = Object.create(TheSellingPartnerApiForFbaInboundOperations.TransportationOption.prototype);
    }
  });

  afterEach(function() {
    instance = null;
  })

  describe('TransportationOption', function() {
    it('should create an instance of TransportationOption', function() {
      expect(instance).to.be.a(TheSellingPartnerApiForFbaInboundOperations.TransportationOption);
    });

    it('should have the property carrier', function() {
      // verify property exists
      expect(instance).to.have.property('carrier');

      // set and verify value
      var expectedValue = generateMockData('Carrier');
      instance.carrier = expectedValue;
      expect(instance.carrier).to.equal(expectedValue);
    });

    it('should have the property carrierAppointment', function() {
      // verify property exists
      expect(instance).to.have.property('carrierAppointment');

      // set and verify value
      var expectedValue = generateMockData('CarrierAppointment');
      instance.carrierAppointment = expectedValue;
      expect(instance.carrierAppointment).to.equal(expectedValue);
    });

    it('should have the property preconditions', function() {
      // verify property exists
      expect(instance).to.have.property('preconditions');

      // set and verify value
      var expectedValue = generateMockData('String', true);
      instance.preconditions = expectedValue;
      expect(instance.preconditions).to.equal(expectedValue);
    });

    it('should have the property quote', function() {
      // verify property exists
      expect(instance).to.have.property('quote');

      // set and verify value
      var expectedValue = generateMockData('Quote');
      instance.quote = expectedValue;
      expect(instance.quote).to.equal(expectedValue);
    });

    it('should have the property shipmentId', function() {
      // verify property exists
      expect(instance).to.have.property('shipmentId');

      // set and verify value
      var expectedValue = generateMockData('String');
      instance.shipmentId = expectedValue;
      expect(instance.shipmentId).to.equal(expectedValue);
    });

    it('should have the property shippingMode', function() {
      // verify property exists
      expect(instance).to.have.property('shippingMode');

      // set and verify value
      var expectedValue = generateMockData('String');
      instance.shippingMode = expectedValue;
      expect(instance.shippingMode).to.equal(expectedValue);
    });

    it('should have the property shippingSolution', function() {
      // verify property exists
      expect(instance).to.have.property('shippingSolution');

      // set and verify value
      var expectedValue = generateMockData('String');
      instance.shippingSolution = expectedValue;
      expect(instance.shippingSolution).to.equal(expectedValue);
    });

    it('should have the property transportationOptionId', function() {
      // verify property exists
      expect(instance).to.have.property('transportationOptionId');

      // set and verify value
      var expectedValue = generateMockData('String');
      instance.transportationOptionId = expectedValue;
      expect(instance.transportationOptionId).to.equal(expectedValue);
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
