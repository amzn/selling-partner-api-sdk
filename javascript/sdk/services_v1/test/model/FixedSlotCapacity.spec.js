/**
 * Selling Partner API for Services
 * With the Services API, you can build applications that help service providers get and modify their service orders and manage their resources.
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
    factory(root.expect, root.SellingPartnerApiForServices);
  }
}(this, function(expect, SellingPartnerApiForServices) {
  'use strict';

  var instance;

  beforeEach(function() {
    try{
     instance = new SellingPartnerApiForServices.FixedSlotCapacity();
    } catch (e) {
     //Handle the cases when this model extends another model by using Model.call(this);
     instance = Object.create(SellingPartnerApiForServices.FixedSlotCapacity.prototype);
    }
  });

  afterEach(function() {
    instance = null;
  })

  describe('FixedSlotCapacity', function() {
    it('should create an instance of FixedSlotCapacity', function() {
      expect(instance).to.be.a(SellingPartnerApiForServices.FixedSlotCapacity);
    });

    it('should have the property resourceId (base name: "resourceId")', function() {
      // verify property exists
      expect(instance).to.have.property('resourceId');

      // set and verify value
      var validValue = generateMockData('String');
      instance.resourceId = validValue;
      expect(instance.resourceId).to.equal(validValue);
    });

    it('should have the property slotDuration (base name: "slotDuration")', function() {
      // verify property exists
      expect(instance).to.have.property('slotDuration');

      // set and verify value
      var validValue = generateMockData('Number');
      instance.slotDuration = validValue;
      expect(instance.slotDuration).to.equal(validValue);
    });

    it('should have the property capacities (base name: "capacities")', function() {
      // verify property exists
      expect(instance).to.have.property('capacities');

      // set and verify value
      var validValue = generateMockData('[FixedSlot]', true);
      instance.capacities = validValue;
      expect(instance.capacities).to.equal(validValue);
    });

    it('should have the property nextPageToken (base name: "nextPageToken")', function() {
      // verify property exists
      expect(instance).to.have.property('nextPageToken');

      // set and verify value
      var validValue = generateMockData('String');
      instance.nextPageToken = validValue;
      expect(instance.nextPageToken).to.equal(validValue);
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
          const ModelClass = SellingPartnerApiForServices[dataType];
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
