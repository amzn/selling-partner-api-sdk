/**
 * Selling Partner API for Notifications
 * The Selling Partner API for Notifications lets you subscribe to notifications that are relevant to a selling partner's business. Using this API you can create a destination to receive notifications, subscribe to notifications, delete notification subscriptions, and more.  For more information, refer to the [Notifications Use Case Guide](https://developer-docs.amazon.com/sp-api/docs/notifications-api-v1-use-case-guide).
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
    factory(root.expect, root.SellingPartnerApiForNotifications);
  }
}(this, function(expect, SellingPartnerApiForNotifications) {
  'use strict';

  var instance;

  beforeEach(function() {
    try{
     instance = new SellingPartnerApiForNotifications.EventBridgeResource();
    } catch (e) {
     //Handle the cases when this model extends another model by using Model.call(this);
     instance = Object.create(SellingPartnerApiForNotifications.EventBridgeResource.prototype);
    }
  });

  afterEach(function() {
    instance = null;
  })

  describe('EventBridgeResource', function() {
    it('should create an instance of EventBridgeResource', function() {
      expect(instance).to.be.a(SellingPartnerApiForNotifications.EventBridgeResource);
    });

    it('should have the property name', function() {
      // verify property exists
      expect(instance).to.have.property('name');

      // set and verify value
      var expectedValue = generateMockData('String');
      instance.name = expectedValue;
      expect(instance.name).to.equal(expectedValue);
    });

    it('should have the property region', function() {
      // verify property exists
      expect(instance).to.have.property('region');

      // set and verify value
      var expectedValue = generateMockData('String');
      instance.region = expectedValue;
      expect(instance.region).to.equal(expectedValue);
    });

    it('should have the property accountId', function() {
      // verify property exists
      expect(instance).to.have.property('accountId');

      // set and verify value
      var expectedValue = generateMockData('String');
      instance.accountId = expectedValue;
      expect(instance.accountId).to.equal(expectedValue);
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
          const ModelClass = SellingPartnerApiForNotifications[dataType];
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
