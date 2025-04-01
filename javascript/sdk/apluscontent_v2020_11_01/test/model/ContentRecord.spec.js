/**
 * Selling Partner API for A+ Content Management
 * Use the A+ Content API to build applications that help selling partners add rich marketing content to their Amazon product detail pages. Selling partners can use A+ content to share their brand and product story, which helps buyers make informed purchasing decisions. Selling partners use content modules to add images and text.
 *
 * The version of the OpenAPI document: 2020-11-01
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
    factory(root.expect, root.SellingPartnerApiForAContentManagement);
  }
}(this, function(expect, SellingPartnerApiForAContentManagement) {
  'use strict';

  var instance;

  beforeEach(function() {
    try{
     instance = new SellingPartnerApiForAContentManagement.ContentRecord();
    } catch (e) {
     //Handle the cases when this model extends another model by using Model.call(this);
     instance = Object.create(SellingPartnerApiForAContentManagement.ContentRecord.prototype);
    }
  });

  afterEach(function() {
    instance = null;
  })

  describe('ContentRecord', function() {
    it('should create an instance of ContentRecord', function() {
      expect(instance).to.be.a(SellingPartnerApiForAContentManagement.ContentRecord);
    });

    it('should have the property contentReferenceKey (base name: "contentReferenceKey")', function() {
      // verify property exists
      expect(instance).to.have.property('contentReferenceKey');

      // set and verify value
      var validValue = generateMockData('String');
      instance.contentReferenceKey = validValue;
      expect(instance.contentReferenceKey).to.equal(validValue);
    });

    it('should have the property contentMetadata (base name: "contentMetadata")', function() {
      // verify property exists
      expect(instance).to.have.property('contentMetadata');

      // set and verify value
      var validValue = generateMockData('ContentMetadata');
      instance.contentMetadata = validValue;
      expect(instance.contentMetadata).to.equal(validValue);
    });

    it('should have the property contentDocument (base name: "contentDocument")', function() {
      // verify property exists
      expect(instance).to.have.property('contentDocument');

      // set and verify value
      var validValue = generateMockData('ContentDocument');
      instance.contentDocument = validValue;
      expect(instance.contentDocument).to.equal(validValue);
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
          const ModelClass = SellingPartnerApiForAContentManagement[dataType];
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
