/**
 * Selling Partner API for Retail Procurement Orders
 * The Selling Partner API for Retail Procurement Orders provides programmatic access to vendor orders data.
 *
 * The version of the OpenAPI document: v1
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
    factory(root.expect, root.SellingPartnerApiForRetailProcurementOrders);
  }
}(this, function(expect, SellingPartnerApiForRetailProcurementOrders) {
  'use strict';

  var instance;

  beforeEach(function() {
    try{
     instance = new SellingPartnerApiForRetailProcurementOrders.Address();
    } catch (e) {
     //Handle the cases when this model extends another model by using Model.call(this);
     instance = Object.create(SellingPartnerApiForRetailProcurementOrders.Address.prototype);
    }
  });

  afterEach(function() {
    instance = null;
  })

  describe('Address', function() {
    it('should create an instance of Address', function() {
      expect(instance).to.be.a(SellingPartnerApiForRetailProcurementOrders.Address);
    });

    it('should have the property name (base name: "name")', function() {
      // verify property exists
      expect(instance).to.have.property('name');

      // set and verify value
      var validValue = generateMockData('String');
      instance.name = validValue;
      expect(instance.name).to.equal(validValue);
    });

    it('should have the property addressLine1 (base name: "addressLine1")', function() {
      // verify property exists
      expect(instance).to.have.property('addressLine1');

      // set and verify value
      var validValue = generateMockData('String');
      instance.addressLine1 = validValue;
      expect(instance.addressLine1).to.equal(validValue);
    });

    it('should have the property addressLine2 (base name: "addressLine2")', function() {
      // verify property exists
      expect(instance).to.have.property('addressLine2');

      // set and verify value
      var validValue = generateMockData('String');
      instance.addressLine2 = validValue;
      expect(instance.addressLine2).to.equal(validValue);
    });

    it('should have the property addressLine3 (base name: "addressLine3")', function() {
      // verify property exists
      expect(instance).to.have.property('addressLine3');

      // set and verify value
      var validValue = generateMockData('String');
      instance.addressLine3 = validValue;
      expect(instance.addressLine3).to.equal(validValue);
    });

    it('should have the property city (base name: "city")', function() {
      // verify property exists
      expect(instance).to.have.property('city');

      // set and verify value
      var validValue = generateMockData('String');
      instance.city = validValue;
      expect(instance.city).to.equal(validValue);
    });

    it('should have the property county (base name: "county")', function() {
      // verify property exists
      expect(instance).to.have.property('county');

      // set and verify value
      var validValue = generateMockData('String');
      instance.county = validValue;
      expect(instance.county).to.equal(validValue);
    });

    it('should have the property district (base name: "district")', function() {
      // verify property exists
      expect(instance).to.have.property('district');

      // set and verify value
      var validValue = generateMockData('String');
      instance.district = validValue;
      expect(instance.district).to.equal(validValue);
    });

    it('should have the property stateOrRegion (base name: "stateOrRegion")', function() {
      // verify property exists
      expect(instance).to.have.property('stateOrRegion');

      // set and verify value
      var validValue = generateMockData('String');
      instance.stateOrRegion = validValue;
      expect(instance.stateOrRegion).to.equal(validValue);
    });

    it('should have the property postalCode (base name: "postalCode")', function() {
      // verify property exists
      expect(instance).to.have.property('postalCode');

      // set and verify value
      var validValue = generateMockData('String');
      instance.postalCode = validValue;
      expect(instance.postalCode).to.equal(validValue);
    });

    it('should have the property countryCode (base name: "countryCode")', function() {
      // verify property exists
      expect(instance).to.have.property('countryCode');

      // set and verify value
      var validValue = generateMockData('String');
      instance.countryCode = validValue;
      expect(instance.countryCode).to.equal(validValue);
    });

    it('should have the property phone (base name: "phone")', function() {
      // verify property exists
      expect(instance).to.have.property('phone');

      // set and verify value
      var validValue = generateMockData('String');
      instance.phone = validValue;
      expect(instance.phone).to.equal(validValue);
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
          const ModelClass = SellingPartnerApiForRetailProcurementOrders[dataType];
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
