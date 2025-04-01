/**
 * Selling Partner API for Messaging
 * With the Messaging API you can build applications that send messages to buyers. You can get a list of message types that are available for an order that you specify, then call an operation that sends a message to the buyer for that order. The Messaging API returns responses that are formed according to the <a href=https://tools.ietf.org/html/draft-kelly-json-hal-08>JSON Hypertext Application Language</a> (HAL) standard.
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
    factory(root.expect, root.SellingPartnerApiForMessaging);
  }
}(this, function(expect, SellingPartnerApiForMessaging) {
  'use strict';

  var instance;

  beforeEach(function() {
    try{
     instance = new SellingPartnerApiForMessaging.CreateConfirmCustomizationDetailsRequest();
    } catch (e) {
     //Handle the cases when this model extends another model by using Model.call(this);
     instance = Object.create(SellingPartnerApiForMessaging.CreateConfirmCustomizationDetailsRequest.prototype);
    }
  });

  afterEach(function() {
    instance = null;
  })

  describe('CreateConfirmCustomizationDetailsRequest', function() {
    it('should create an instance of CreateConfirmCustomizationDetailsRequest', function() {
      expect(instance).to.be.a(SellingPartnerApiForMessaging.CreateConfirmCustomizationDetailsRequest);
    });

    it('should have the property text (base name: "text")', function() {
      // verify property exists
      expect(instance).to.have.property('text');

      // set and verify value
      var validValue = generateMockData('String');
      instance.text = validValue;
      expect(instance.text).to.equal(validValue);
    });

    it('should have the property attachments (base name: "attachments")', function() {
      // verify property exists
      expect(instance).to.have.property('attachments');

      // set and verify value
      var validValue = generateMockData('[Attachment]', true);
      instance.attachments = validValue;
      expect(instance.attachments).to.equal(validValue);
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
          const ModelClass = SellingPartnerApiForMessaging[dataType];
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
