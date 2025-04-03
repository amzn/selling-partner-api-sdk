/**
 * Selling Partner API for Finances
 * The Selling Partner API for Finances helps you obtain financial information relevant to a seller's business. You can obtain financial events for a given order, financial event group, or date range without having to wait until a statement period closes. You can also obtain financial event groups for a given date range.
 *
 * The version of the OpenAPI document: v0
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
    factory(root.expect, root.SellingPartnerApiForFinances);
  }
}(this, function(expect, SellingPartnerApiForFinances) {
  'use strict';

  var instance;

  beforeEach(function() {
    try{
     instance = new SellingPartnerApiForFinances.FinancialEvents();
    } catch (e) {
     //Handle the cases when this model extends another model by using Model.call(this);
     instance = Object.create(SellingPartnerApiForFinances.FinancialEvents.prototype);
    }
  });

  afterEach(function() {
    instance = null;
  })

  describe('FinancialEvents', function() {
    it('should create an instance of FinancialEvents', function() {
      expect(instance).to.be.a(SellingPartnerApiForFinances.FinancialEvents);
    });

    it('should have the property shipmentEventList', function() {
      // verify property exists
      expect(instance).to.have.property('shipmentEventList');

      // set and verify value
      var expectedValue = generateMockData('ShipmentEvent', true);
      instance.shipmentEventList = expectedValue;
      expect(instance.shipmentEventList).to.equal(expectedValue);
    });

    it('should have the property shipmentSettleEventList', function() {
      // verify property exists
      expect(instance).to.have.property('shipmentSettleEventList');

      // set and verify value
      var expectedValue = generateMockData('ShipmentEvent', true);
      instance.shipmentSettleEventList = expectedValue;
      expect(instance.shipmentSettleEventList).to.equal(expectedValue);
    });

    it('should have the property refundEventList', function() {
      // verify property exists
      expect(instance).to.have.property('refundEventList');

      // set and verify value
      var expectedValue = generateMockData('ShipmentEvent', true);
      instance.refundEventList = expectedValue;
      expect(instance.refundEventList).to.equal(expectedValue);
    });

    it('should have the property guaranteeClaimEventList', function() {
      // verify property exists
      expect(instance).to.have.property('guaranteeClaimEventList');

      // set and verify value
      var expectedValue = generateMockData('ShipmentEvent', true);
      instance.guaranteeClaimEventList = expectedValue;
      expect(instance.guaranteeClaimEventList).to.equal(expectedValue);
    });

    it('should have the property chargebackEventList', function() {
      // verify property exists
      expect(instance).to.have.property('chargebackEventList');

      // set and verify value
      var expectedValue = generateMockData('ShipmentEvent', true);
      instance.chargebackEventList = expectedValue;
      expect(instance.chargebackEventList).to.equal(expectedValue);
    });

    it('should have the property payWithAmazonEventList', function() {
      // verify property exists
      expect(instance).to.have.property('payWithAmazonEventList');

      // set and verify value
      var expectedValue = generateMockData('PayWithAmazonEvent', true);
      instance.payWithAmazonEventList = expectedValue;
      expect(instance.payWithAmazonEventList).to.equal(expectedValue);
    });

    it('should have the property serviceProviderCreditEventList', function() {
      // verify property exists
      expect(instance).to.have.property('serviceProviderCreditEventList');

      // set and verify value
      var expectedValue = generateMockData('SolutionProviderCreditEvent', true);
      instance.serviceProviderCreditEventList = expectedValue;
      expect(instance.serviceProviderCreditEventList).to.equal(expectedValue);
    });

    it('should have the property retrochargeEventList', function() {
      // verify property exists
      expect(instance).to.have.property('retrochargeEventList');

      // set and verify value
      var expectedValue = generateMockData('RetrochargeEvent', true);
      instance.retrochargeEventList = expectedValue;
      expect(instance.retrochargeEventList).to.equal(expectedValue);
    });

    it('should have the property rentalTransactionEventList', function() {
      // verify property exists
      expect(instance).to.have.property('rentalTransactionEventList');

      // set and verify value
      var expectedValue = generateMockData('RentalTransactionEvent', true);
      instance.rentalTransactionEventList = expectedValue;
      expect(instance.rentalTransactionEventList).to.equal(expectedValue);
    });

    it('should have the property productAdsPaymentEventList', function() {
      // verify property exists
      expect(instance).to.have.property('productAdsPaymentEventList');

      // set and verify value
      var expectedValue = generateMockData('ProductAdsPaymentEvent', true);
      instance.productAdsPaymentEventList = expectedValue;
      expect(instance.productAdsPaymentEventList).to.equal(expectedValue);
    });

    it('should have the property serviceFeeEventList', function() {
      // verify property exists
      expect(instance).to.have.property('serviceFeeEventList');

      // set and verify value
      var expectedValue = generateMockData('ServiceFeeEvent', true);
      instance.serviceFeeEventList = expectedValue;
      expect(instance.serviceFeeEventList).to.equal(expectedValue);
    });

    it('should have the property sellerDealPaymentEventList', function() {
      // verify property exists
      expect(instance).to.have.property('sellerDealPaymentEventList');

      // set and verify value
      var expectedValue = generateMockData('SellerDealPaymentEvent', true);
      instance.sellerDealPaymentEventList = expectedValue;
      expect(instance.sellerDealPaymentEventList).to.equal(expectedValue);
    });

    it('should have the property debtRecoveryEventList', function() {
      // verify property exists
      expect(instance).to.have.property('debtRecoveryEventList');

      // set and verify value
      var expectedValue = generateMockData('DebtRecoveryEvent', true);
      instance.debtRecoveryEventList = expectedValue;
      expect(instance.debtRecoveryEventList).to.equal(expectedValue);
    });

    it('should have the property loanServicingEventList', function() {
      // verify property exists
      expect(instance).to.have.property('loanServicingEventList');

      // set and verify value
      var expectedValue = generateMockData('LoanServicingEvent', true);
      instance.loanServicingEventList = expectedValue;
      expect(instance.loanServicingEventList).to.equal(expectedValue);
    });

    it('should have the property adjustmentEventList', function() {
      // verify property exists
      expect(instance).to.have.property('adjustmentEventList');

      // set and verify value
      var expectedValue = generateMockData('AdjustmentEvent', true);
      instance.adjustmentEventList = expectedValue;
      expect(instance.adjustmentEventList).to.equal(expectedValue);
    });

    it('should have the property sAFETReimbursementEventList', function() {
      // verify property exists
      expect(instance).to.have.property('sAFETReimbursementEventList');

      // set and verify value
      var expectedValue = generateMockData('SAFETReimbursementEvent', true);
      instance.sAFETReimbursementEventList = expectedValue;
      expect(instance.sAFETReimbursementEventList).to.equal(expectedValue);
    });

    it('should have the property sellerReviewEnrollmentPaymentEventList', function() {
      // verify property exists
      expect(instance).to.have.property('sellerReviewEnrollmentPaymentEventList');

      // set and verify value
      var expectedValue = generateMockData('SellerReviewEnrollmentPaymentEvent', true);
      instance.sellerReviewEnrollmentPaymentEventList = expectedValue;
      expect(instance.sellerReviewEnrollmentPaymentEventList).to.equal(expectedValue);
    });

    it('should have the property fBALiquidationEventList', function() {
      // verify property exists
      expect(instance).to.have.property('fBALiquidationEventList');

      // set and verify value
      var expectedValue = generateMockData('FBALiquidationEvent', true);
      instance.fBALiquidationEventList = expectedValue;
      expect(instance.fBALiquidationEventList).to.equal(expectedValue);
    });

    it('should have the property couponPaymentEventList', function() {
      // verify property exists
      expect(instance).to.have.property('couponPaymentEventList');

      // set and verify value
      var expectedValue = generateMockData('CouponPaymentEvent', true);
      instance.couponPaymentEventList = expectedValue;
      expect(instance.couponPaymentEventList).to.equal(expectedValue);
    });

    it('should have the property imagingServicesFeeEventList', function() {
      // verify property exists
      expect(instance).to.have.property('imagingServicesFeeEventList');

      // set and verify value
      var expectedValue = generateMockData('ImagingServicesFeeEvent', true);
      instance.imagingServicesFeeEventList = expectedValue;
      expect(instance.imagingServicesFeeEventList).to.equal(expectedValue);
    });

    it('should have the property networkComminglingTransactionEventList', function() {
      // verify property exists
      expect(instance).to.have.property('networkComminglingTransactionEventList');

      // set and verify value
      var expectedValue = generateMockData('NetworkComminglingTransactionEvent', true);
      instance.networkComminglingTransactionEventList = expectedValue;
      expect(instance.networkComminglingTransactionEventList).to.equal(expectedValue);
    });

    it('should have the property affordabilityExpenseEventList', function() {
      // verify property exists
      expect(instance).to.have.property('affordabilityExpenseEventList');

      // set and verify value
      var expectedValue = generateMockData('AffordabilityExpenseEvent', true);
      instance.affordabilityExpenseEventList = expectedValue;
      expect(instance.affordabilityExpenseEventList).to.equal(expectedValue);
    });

    it('should have the property affordabilityExpenseReversalEventList', function() {
      // verify property exists
      expect(instance).to.have.property('affordabilityExpenseReversalEventList');

      // set and verify value
      var expectedValue = generateMockData('AffordabilityExpenseEvent', true);
      instance.affordabilityExpenseReversalEventList = expectedValue;
      expect(instance.affordabilityExpenseReversalEventList).to.equal(expectedValue);
    });

    it('should have the property removalShipmentEventList', function() {
      // verify property exists
      expect(instance).to.have.property('removalShipmentEventList');

      // set and verify value
      var expectedValue = generateMockData('RemovalShipmentEvent', true);
      instance.removalShipmentEventList = expectedValue;
      expect(instance.removalShipmentEventList).to.equal(expectedValue);
    });

    it('should have the property removalShipmentAdjustmentEventList', function() {
      // verify property exists
      expect(instance).to.have.property('removalShipmentAdjustmentEventList');

      // set and verify value
      var expectedValue = generateMockData('RemovalShipmentAdjustmentEvent', true);
      instance.removalShipmentAdjustmentEventList = expectedValue;
      expect(instance.removalShipmentAdjustmentEventList).to.equal(expectedValue);
    });

    it('should have the property trialShipmentEventList', function() {
      // verify property exists
      expect(instance).to.have.property('trialShipmentEventList');

      // set and verify value
      var expectedValue = generateMockData('TrialShipmentEvent', true);
      instance.trialShipmentEventList = expectedValue;
      expect(instance.trialShipmentEventList).to.equal(expectedValue);
    });

    it('should have the property tDSReimbursementEventList', function() {
      // verify property exists
      expect(instance).to.have.property('tDSReimbursementEventList');

      // set and verify value
      var expectedValue = generateMockData('TDSReimbursementEvent', true);
      instance.tDSReimbursementEventList = expectedValue;
      expect(instance.tDSReimbursementEventList).to.equal(expectedValue);
    });

    it('should have the property adhocDisbursementEventList', function() {
      // verify property exists
      expect(instance).to.have.property('adhocDisbursementEventList');

      // set and verify value
      var expectedValue = generateMockData('AdhocDisbursementEvent', true);
      instance.adhocDisbursementEventList = expectedValue;
      expect(instance.adhocDisbursementEventList).to.equal(expectedValue);
    });

    it('should have the property taxWithholdingEventList', function() {
      // verify property exists
      expect(instance).to.have.property('taxWithholdingEventList');

      // set and verify value
      var expectedValue = generateMockData('TaxWithholdingEvent', true);
      instance.taxWithholdingEventList = expectedValue;
      expect(instance.taxWithholdingEventList).to.equal(expectedValue);
    });

    it('should have the property chargeRefundEventList', function() {
      // verify property exists
      expect(instance).to.have.property('chargeRefundEventList');

      // set and verify value
      var expectedValue = generateMockData('ChargeRefundEvent', true);
      instance.chargeRefundEventList = expectedValue;
      expect(instance.chargeRefundEventList).to.equal(expectedValue);
    });

    it('should have the property failedAdhocDisbursementEventList', function() {
      // verify property exists
      expect(instance).to.have.property('failedAdhocDisbursementEventList');

      // set and verify value
      var expectedValue = generateMockData('FailedAdhocDisbursementEvent', true);
      instance.failedAdhocDisbursementEventList = expectedValue;
      expect(instance.failedAdhocDisbursementEventList).to.equal(expectedValue);
    });

    it('should have the property valueAddedServiceChargeEventList', function() {
      // verify property exists
      expect(instance).to.have.property('valueAddedServiceChargeEventList');

      // set and verify value
      var expectedValue = generateMockData('ValueAddedServiceChargeEvent', true);
      instance.valueAddedServiceChargeEventList = expectedValue;
      expect(instance.valueAddedServiceChargeEventList).to.equal(expectedValue);
    });

    it('should have the property capacityReservationBillingEventList', function() {
      // verify property exists
      expect(instance).to.have.property('capacityReservationBillingEventList');

      // set and verify value
      var expectedValue = generateMockData('CapacityReservationBillingEvent', true);
      instance.capacityReservationBillingEventList = expectedValue;
      expect(instance.capacityReservationBillingEventList).to.equal(expectedValue);
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
          const ModelClass = SellingPartnerApiForFinances[dataType];
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
