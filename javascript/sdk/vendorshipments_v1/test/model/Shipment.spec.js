/**
 * Selling Partner API for Retail Procurement Shipments
 * The Selling Partner API for Retail Procurement Shipments provides programmatic access to retail shipping data for vendors.
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
    factory(root.expect, root.SellingPartnerApiForRetailProcurementShipments);
  }
}(this, function(expect, SellingPartnerApiForRetailProcurementShipments) {
  'use strict';

  var instance;

  beforeEach(function() {
    try{
     instance = new SellingPartnerApiForRetailProcurementShipments.Shipment();
    } catch (e) {
     //Handle the cases when this model extends another model by using Model.call(this);
     instance = Object.create(SellingPartnerApiForRetailProcurementShipments.Shipment.prototype);
    }
  });

  afterEach(function() {
    instance = null;
  })

  describe('Shipment', function() {
    it('should create an instance of Shipment', function() {
      expect(instance).to.be.a(SellingPartnerApiForRetailProcurementShipments.Shipment);
    });

    it('should have the property vendorShipmentIdentifier (base name: "vendorShipmentIdentifier")', function() {
      // verify property exists
      expect(instance).to.have.property('vendorShipmentIdentifier');

      // set and verify value
      var validValue = generateMockData('String');
      instance.vendorShipmentIdentifier = validValue;
      expect(instance.vendorShipmentIdentifier).to.equal(validValue);
    });

    it('should have the property transactionType (base name: "transactionType")', function() {
      // verify property exists
      expect(instance).to.have.property('transactionType');

      // set and verify value
      var validValue = ['New', 'Cancel', ][0];
      instance.transactionType = validValue;
      expect(instance.transactionType).to.equal(validValue);
    });

    it('should have the property buyerReferenceNumber (base name: "buyerReferenceNumber")', function() {
      // verify property exists
      expect(instance).to.have.property('buyerReferenceNumber');

      // set and verify value
      var validValue = generateMockData('String');
      instance.buyerReferenceNumber = validValue;
      expect(instance.buyerReferenceNumber).to.equal(validValue);
    });

    it('should have the property transactionDate (base name: "transactionDate")', function() {
      // verify property exists
      expect(instance).to.have.property('transactionDate');

      // set and verify value
      var validValue = generateMockData('Date');
      instance.transactionDate = validValue;
      expect(instance.transactionDate).to.equal(validValue);
    });

    it('should have the property currentShipmentStatus (base name: "currentShipmentStatus")', function() {
      // verify property exists
      expect(instance).to.have.property('currentShipmentStatus');

      // set and verify value
      var validValue = ['Created', 'TransportationRequested', 'CarrierAssigned', 'Shipped', ][0];
      instance.currentShipmentStatus = validValue;
      expect(instance.currentShipmentStatus).to.equal(validValue);
    });

    it('should have the property currentshipmentStatusDate (base name: "currentshipmentStatusDate")', function() {
      // verify property exists
      expect(instance).to.have.property('currentshipmentStatusDate');

      // set and verify value
      var validValue = generateMockData('Date');
      instance.currentshipmentStatusDate = validValue;
      expect(instance.currentshipmentStatusDate).to.equal(validValue);
    });

    it('should have the property shipmentStatusDetails (base name: "shipmentStatusDetails")', function() {
      // verify property exists
      expect(instance).to.have.property('shipmentStatusDetails');

      // set and verify value
      var validValue = generateMockData('[ShipmentStatusDetails]', true);
      instance.shipmentStatusDetails = validValue;
      expect(instance.shipmentStatusDetails).to.equal(validValue);
    });

    it('should have the property shipmentCreateDate (base name: "shipmentCreateDate")', function() {
      // verify property exists
      expect(instance).to.have.property('shipmentCreateDate');

      // set and verify value
      var validValue = generateMockData('Date');
      instance.shipmentCreateDate = validValue;
      expect(instance.shipmentCreateDate).to.equal(validValue);
    });

    it('should have the property shipmentConfirmDate (base name: "shipmentConfirmDate")', function() {
      // verify property exists
      expect(instance).to.have.property('shipmentConfirmDate');

      // set and verify value
      var validValue = generateMockData('Date');
      instance.shipmentConfirmDate = validValue;
      expect(instance.shipmentConfirmDate).to.equal(validValue);
    });

    it('should have the property packageLabelCreateDate (base name: "packageLabelCreateDate")', function() {
      // verify property exists
      expect(instance).to.have.property('packageLabelCreateDate');

      // set and verify value
      var validValue = generateMockData('Date');
      instance.packageLabelCreateDate = validValue;
      expect(instance.packageLabelCreateDate).to.equal(validValue);
    });

    it('should have the property shipmentFreightTerm (base name: "shipmentFreightTerm")', function() {
      // verify property exists
      expect(instance).to.have.property('shipmentFreightTerm');

      // set and verify value
      var validValue = ['Collect', 'Prepaid', ][0];
      instance.shipmentFreightTerm = validValue;
      expect(instance.shipmentFreightTerm).to.equal(validValue);
    });

    it('should have the property sellingParty (base name: "sellingParty")', function() {
      // verify property exists
      expect(instance).to.have.property('sellingParty');

      // set and verify value
      var validValue = generateMockData('PartyIdentification');
      instance.sellingParty = validValue;
      expect(instance.sellingParty).to.equal(validValue);
    });

    it('should have the property shipFromParty (base name: "shipFromParty")', function() {
      // verify property exists
      expect(instance).to.have.property('shipFromParty');

      // set and verify value
      var validValue = generateMockData('PartyIdentification');
      instance.shipFromParty = validValue;
      expect(instance.shipFromParty).to.equal(validValue);
    });

    it('should have the property shipToParty (base name: "shipToParty")', function() {
      // verify property exists
      expect(instance).to.have.property('shipToParty');

      // set and verify value
      var validValue = generateMockData('PartyIdentification');
      instance.shipToParty = validValue;
      expect(instance.shipToParty).to.equal(validValue);
    });

    it('should have the property shipmentMeasurements (base name: "shipmentMeasurements")', function() {
      // verify property exists
      expect(instance).to.have.property('shipmentMeasurements');

      // set and verify value
      var validValue = generateMockData('TransportShipmentMeasurements');
      instance.shipmentMeasurements = validValue;
      expect(instance.shipmentMeasurements).to.equal(validValue);
    });

    it('should have the property collectFreightPickupDetails (base name: "collectFreightPickupDetails")', function() {
      // verify property exists
      expect(instance).to.have.property('collectFreightPickupDetails');

      // set and verify value
      var validValue = generateMockData('CollectFreightPickupDetails');
      instance.collectFreightPickupDetails = validValue;
      expect(instance.collectFreightPickupDetails).to.equal(validValue);
    });

    it('should have the property purchaseOrders (base name: "purchaseOrders")', function() {
      // verify property exists
      expect(instance).to.have.property('purchaseOrders');

      // set and verify value
      var validValue = generateMockData('[PurchaseOrders]', true);
      instance.purchaseOrders = validValue;
      expect(instance.purchaseOrders).to.equal(validValue);
    });

    it('should have the property importDetails (base name: "importDetails")', function() {
      // verify property exists
      expect(instance).to.have.property('importDetails');

      // set and verify value
      var validValue = generateMockData('ImportDetails');
      instance.importDetails = validValue;
      expect(instance.importDetails).to.equal(validValue);
    });

    it('should have the property containers (base name: "containers")', function() {
      // verify property exists
      expect(instance).to.have.property('containers');

      // set and verify value
      var validValue = generateMockData('[Containers]', true);
      instance.containers = validValue;
      expect(instance.containers).to.equal(validValue);
    });

    it('should have the property transportationDetails (base name: "transportationDetails")', function() {
      // verify property exists
      expect(instance).to.have.property('transportationDetails');

      // set and verify value
      var validValue = generateMockData('TransportationDetails');
      instance.transportationDetails = validValue;
      expect(instance.transportationDetails).to.equal(validValue);
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
          const ModelClass = SellingPartnerApiForRetailProcurementShipments[dataType];
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
