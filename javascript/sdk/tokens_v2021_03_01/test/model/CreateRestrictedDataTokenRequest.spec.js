/**
 * Selling Partner API for Tokens 
 * The Selling Partner API for Tokens provides a secure way to access a customer's PII (Personally Identifiable Information). You can call the Tokens API to get a Restricted Data Token (RDT) for one or more restricted resources that you specify. The RDT authorizes subsequent calls to restricted operations that correspond to the restricted resources that you specified.  For more information, see the [Tokens API Use Case Guide](doc:tokens-api-use-case-guide).
 *
 * The version of the OpenAPI document: 2021-03-01
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
    factory(root.expect, root.SellingPartnerApiForTokens);
  }
}(this, function(expect, SellingPartnerApiForTokens) {
  'use strict';

  var instance;

  beforeEach(function() {
    try{
     instance = new SellingPartnerApiForTokens.CreateRestrictedDataTokenRequest();
    } catch (e) {
     //Handle the cases when this model extends another model by using Model.call(this);
     instance = Object.create(SellingPartnerApiForTokens.CreateRestrictedDataTokenRequest.prototype);
    }
  });

  afterEach(function() {
    instance = null;
  })

  describe('CreateRestrictedDataTokenRequest', function() {
    it('should create an instance of CreateRestrictedDataTokenRequest', function() {
      expect(instance).to.be.a(SellingPartnerApiForTokens.CreateRestrictedDataTokenRequest);
    });

    it('should have the property targetApplication', function() {
      // verify property exists
      expect(instance).to.have.property('targetApplication');

      // set and verify value
      var expectedValue = generateMockData('String');
      instance.targetApplication = expectedValue;
      expect(instance.targetApplication).to.equal(expectedValue);
    });

    it('should have the property restrictedResources', function() {
      // verify property exists
      expect(instance).to.have.property('restrictedResources');

      // set and verify value
      var expectedValue = generateMockData('RestrictedResource', true);
      instance.restrictedResources = expectedValue;
      expect(instance.restrictedResources).to.equal(expectedValue);
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
          const ModelClass = SellingPartnerApiForTokens[dataType];
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
