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
     instance = new TheSellingPartnerApiForFbaInboundOperations.CreateMarketplaceItemLabelsRequest();
    } catch (e) {
     //Handle the cases when this model extends another model by using Model.call(this);
     instance = Object.create(TheSellingPartnerApiForFbaInboundOperations.CreateMarketplaceItemLabelsRequest.prototype);
    }
  });

  afterEach(function() {
    instance = null;
  })

  describe('CreateMarketplaceItemLabelsRequest', function() {
    it('should create an instance of CreateMarketplaceItemLabelsRequest', function() {
      expect(instance).to.be.a(TheSellingPartnerApiForFbaInboundOperations.CreateMarketplaceItemLabelsRequest);
    });

    it('should have the property height (base name: "height")', function() {
      // verify property exists
      expect(instance).to.have.property('height');

      // set and verify value
      var validValue = generateMockData('Number');
      instance.height = validValue;
      expect(instance.height).to.equal(validValue);
    });

    it('should have the property labelType (base name: "labelType")', function() {
      // verify property exists
      expect(instance).to.have.property('labelType');

      // set and verify value
      var validValue = generateMockData('LabelPrintType');
      instance.labelType = validValue;
      expect(instance.labelType).to.equal(validValue);
    });

    it('should have the property localeCode (base name: "localeCode")', function() {
      // verify property exists
      expect(instance).to.have.property('localeCode');

      // set and verify value
      var validValue = generateMockData('String');
      instance.localeCode = validValue;
      expect(instance.localeCode).to.equal(validValue);
    });

    it('should have the property marketplaceId (base name: "marketplaceId")', function() {
      // verify property exists
      expect(instance).to.have.property('marketplaceId');

      // set and verify value
      var validValue = generateMockData('String');
      instance.marketplaceId = validValue;
      expect(instance.marketplaceId).to.equal(validValue);
    });

    it('should have the property mskuQuantities (base name: "mskuQuantities")', function() {
      // verify property exists
      expect(instance).to.have.property('mskuQuantities');

      // set and verify value
      var validValue = generateMockData('[MskuQuantity]', true);
      instance.mskuQuantities = validValue;
      expect(instance.mskuQuantities).to.equal(validValue);
    });

    it('should have the property pageType (base name: "pageType")', function() {
      // verify property exists
      expect(instance).to.have.property('pageType');

      // set and verify value
      var validValue = generateMockData('ItemLabelPageType');
      instance.pageType = validValue;
      expect(instance.pageType).to.equal(validValue);
    });

    it('should have the property width (base name: "width")', function() {
      // verify property exists
      expect(instance).to.have.property('width');

      // set and verify value
      var validValue = generateMockData('Number');
      instance.width = validValue;
      expect(instance.width).to.equal(validValue);
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
