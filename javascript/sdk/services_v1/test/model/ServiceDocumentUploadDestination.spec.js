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
     instance = new SellingPartnerApiForServices.ServiceDocumentUploadDestination();
    } catch (e) {
     //Handle the cases when this model extends another model by using Model.call(this);
     instance = Object.create(SellingPartnerApiForServices.ServiceDocumentUploadDestination.prototype);
    }
  });

  afterEach(function() {
    instance = null;
  })

  describe('ServiceDocumentUploadDestination', function() {
    it('should create an instance of ServiceDocumentUploadDestination', function() {
      expect(instance).to.be.a(SellingPartnerApiForServices.ServiceDocumentUploadDestination);
    });

    it('should have the property uploadDestinationId (base name: "uploadDestinationId")', function() {
      // verify property exists
      expect(instance).to.have.property('uploadDestinationId');

      // set and verify value
      var validValue = generateMockData('String');
      instance.uploadDestinationId = validValue;
      expect(instance.uploadDestinationId).to.equal(validValue);
    });

    it('should have the property url (base name: "url")', function() {
      // verify property exists
      expect(instance).to.have.property('url');

      // set and verify value
      var validValue = generateMockData('String');
      instance.url = validValue;
      expect(instance.url).to.equal(validValue);
    });

    it('should have the property encryptionDetails (base name: "encryptionDetails")', function() {
      // verify property exists
      expect(instance).to.have.property('encryptionDetails');

      // set and verify value
      var validValue = generateMockData('EncryptionDetails');
      instance.encryptionDetails = validValue;
      expect(instance.encryptionDetails).to.equal(validValue);
    });

    it('should have the property headers (base name: "headers")', function() {
      // verify property exists
      expect(instance).to.have.property('headers');

      // set and verify value
      var validValue = generateMockData('Object');
      instance.headers = validValue;
      expect(instance.headers).to.equal(validValue);
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
