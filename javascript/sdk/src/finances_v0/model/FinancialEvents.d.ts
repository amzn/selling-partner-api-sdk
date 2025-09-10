/**
 * The FinancialEvents model module.
 * @module finances_v0/model/FinancialEvents
 * @version v0
 */
export class FinancialEvents {
    /**
     * Constructs a <code>FinancialEvents</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {FinancialEvents} obj Optional instance to populate.
     * @return {FinancialEvents} The populated <code>FinancialEvents</code> instance.
     */
    static constructFromObject(data: any, obj: FinancialEvents): FinancialEvents;
    /**
     * A list of shipment event information.
     * @member {[ShipmentEvent]} shipmentEventList
     * @type {[ShipmentEvent]}
     */
    shipmentEventList: [ShipmentEvent];
    /**
     * A list of `ShipmentEvent` items.
     * @member {[ShipmentEvent]} shipmentSettleEventList
     * @type {[ShipmentEvent]}
     */
    shipmentSettleEventList: [ShipmentEvent];
    /**
     * A list of shipment event information.
     * @member {[ShipmentEvent]} refundEventList
     * @type {[ShipmentEvent]}
     */
    refundEventList: [ShipmentEvent];
    /**
     * A list of shipment event information.
     * @member {[ShipmentEvent]} guaranteeClaimEventList
     * @type {[ShipmentEvent]}
     */
    guaranteeClaimEventList: [ShipmentEvent];
    /**
     * A list of shipment event information.
     * @member {[ShipmentEvent]} chargebackEventList
     * @type {[ShipmentEvent]}
     */
    chargebackEventList: [ShipmentEvent];
    /**
     * A list of events related to the seller's Pay with Amazon account.
     * @member {[PayWithAmazonEvent]} payWithAmazonEventList
     * @type {[PayWithAmazonEvent]}
     */
    payWithAmazonEventList: [PayWithAmazonEvent];
    /**
     * A list of information about solution provider credits.
     * @member {[SolutionProviderCreditEvent]} serviceProviderCreditEventList
     * @type {[SolutionProviderCreditEvent]}
     */
    serviceProviderCreditEventList: [SolutionProviderCreditEvent];
    /**
     * A list of information about Retrocharge or RetrochargeReversal events.
     * @member {[RetrochargeEvent]} retrochargeEventList
     * @type {[RetrochargeEvent]}
     */
    retrochargeEventList: [RetrochargeEvent];
    /**
     * A list of rental transaction event information.
     * @member {[RentalTransactionEvent]} rentalTransactionEventList
     * @type {[RentalTransactionEvent]}
     */
    rentalTransactionEventList: [RentalTransactionEvent];
    /**
     * A list of sponsored products payment events.
     * @member {[ProductAdsPaymentEvent]} productAdsPaymentEventList
     * @type {[ProductAdsPaymentEvent]}
     */
    productAdsPaymentEventList: [ProductAdsPaymentEvent];
    /**
     * A list of information about service fee events.
     * @member {[ServiceFeeEvent]} serviceFeeEventList
     * @type {[ServiceFeeEvent]}
     */
    serviceFeeEventList: [ServiceFeeEvent];
    /**
     * A list of payment events for deal-related fees.
     * @member {[SellerDealPaymentEvent]} sellerDealPaymentEventList
     * @type {[SellerDealPaymentEvent]}
     */
    sellerDealPaymentEventList: [SellerDealPaymentEvent];
    /**
     * A list of debt recovery event information.
     * @member {[DebtRecoveryEvent]} debtRecoveryEventList
     * @type {[DebtRecoveryEvent]}
     */
    debtRecoveryEventList: [DebtRecoveryEvent];
    /**
     * A list of loan servicing events.
     * @member {[LoanServicingEvent]} loanServicingEventList
     * @type {[LoanServicingEvent]}
     */
    loanServicingEventList: [LoanServicingEvent];
    /**
     * A list of adjustment event information for the seller's account.
     * @member {[AdjustmentEvent]} adjustmentEventList
     * @type {[AdjustmentEvent]}
     */
    adjustmentEventList: [AdjustmentEvent];
    /**
     * A list of SAFETReimbursementEvents.
     * @member {[SAFETReimbursementEvent]} sAFETReimbursementEventList
     * @type {[SAFETReimbursementEvent]}
     */
    sAFETReimbursementEventList: [SAFETReimbursementEvent];
    /**
     * A list of information about fee events for the Early Reviewer Program.
     * @member {[SellerReviewEnrollmentPaymentEvent]} sellerReviewEnrollmentPaymentEventList
     * @type {[SellerReviewEnrollmentPaymentEvent]}
     */
    sellerReviewEnrollmentPaymentEventList: [SellerReviewEnrollmentPaymentEvent];
    /**
     * A list of FBA inventory liquidation payment events.
     * @member {[FBALiquidationEvent]} fBALiquidationEventList
     * @type {[FBALiquidationEvent]}
     */
    fBALiquidationEventList: [FBALiquidationEvent];
    /**
     * A list of coupon payment event information.
     * @member {[CouponPaymentEvent]} couponPaymentEventList
     * @type {[CouponPaymentEvent]}
     */
    couponPaymentEventList: [CouponPaymentEvent];
    /**
     * A list of fee events related to Amazon Imaging services.
     * @member {[ImagingServicesFeeEvent]} imagingServicesFeeEventList
     * @type {[ImagingServicesFeeEvent]}
     */
    imagingServicesFeeEventList: [ImagingServicesFeeEvent];
    /**
     * A list of network commingling transaction events.
     * @member {[NetworkComminglingTransactionEvent]} networkComminglingTransactionEventList
     * @type {[NetworkComminglingTransactionEvent]}
     */
    networkComminglingTransactionEventList: [NetworkComminglingTransactionEvent];
    /**
     * A list of expense information related to an affordability promotion.
     * @member {[AffordabilityExpenseEvent]} affordabilityExpenseEventList
     * @type {[AffordabilityExpenseEvent]}
     */
    affordabilityExpenseEventList: [AffordabilityExpenseEvent];
    /**
     * A list of expense information related to an affordability promotion.
     * @member {[AffordabilityExpenseEvent]} affordabilityExpenseReversalEventList
     * @type {[AffordabilityExpenseEvent]}
     */
    affordabilityExpenseReversalEventList: [AffordabilityExpenseEvent];
    /**
     * A list of removal shipment event information.
     * @member {[RemovalShipmentEvent]} removalShipmentEventList
     * @type {[RemovalShipmentEvent]}
     */
    removalShipmentEventList: [RemovalShipmentEvent];
    /**
     * A comma-delimited list of Removal shipmentAdjustment details for FBA inventory.
     * @member {[RemovalShipmentAdjustmentEvent]} removalShipmentAdjustmentEventList
     * @type {[RemovalShipmentAdjustmentEvent]}
     */
    removalShipmentAdjustmentEventList: [RemovalShipmentAdjustmentEvent];
    /**
     * A list of information about trial shipment financial events.
     * @member {[TrialShipmentEvent]} trialShipmentEventList
     * @type {[TrialShipmentEvent]}
     */
    trialShipmentEventList: [TrialShipmentEvent];
    /**
     * A list of `TDSReimbursementEvent` items.
     * @member {[TDSReimbursementEvent]} tDSReimbursementEventList
     * @type {[TDSReimbursementEvent]}
     */
    tDSReimbursementEventList: [TDSReimbursementEvent];
    /**
     * A list of `AdhocDisbursement` events.
     * @member {[AdhocDisbursementEvent]} adhocDisbursementEventList
     * @type {[AdhocDisbursementEvent]}
     */
    adhocDisbursementEventList: [AdhocDisbursementEvent];
    /**
     * A list of `TaxWithholding` events.
     * @member {[TaxWithholdingEvent]} taxWithholdingEventList
     * @type {[TaxWithholdingEvent]}
     */
    taxWithholdingEventList: [TaxWithholdingEvent];
    /**
     * A list of charge refund events.
     * @member {[ChargeRefundEvent]} chargeRefundEventList
     * @type {[ChargeRefundEvent]}
     */
    chargeRefundEventList: [ChargeRefundEvent];
    /**
     * A list of `FailedAdhocDisbursementEvent`s.
     * @member {[FailedAdhocDisbursementEvent]} failedAdhocDisbursementEventList
     * @type {[FailedAdhocDisbursementEvent]}
     */
    failedAdhocDisbursementEventList: [FailedAdhocDisbursementEvent];
    /**
     * A list of `ValueAddedServiceCharge` events.
     * @member {[ValueAddedServiceChargeEvent]} valueAddedServiceChargeEventList
     * @type {[ValueAddedServiceChargeEvent]}
     */
    valueAddedServiceChargeEventList: [ValueAddedServiceChargeEvent];
    /**
     * A list of `CapacityReservationBillingEvent` events.
     * @member {[CapacityReservationBillingEvent]} capacityReservationBillingEventList
     * @type {[CapacityReservationBillingEvent]}
     */
    capacityReservationBillingEventList: [CapacityReservationBillingEvent];
}
import { ShipmentEvent } from './ShipmentEvent.js';
import { PayWithAmazonEvent } from './PayWithAmazonEvent.js';
import { SolutionProviderCreditEvent } from './SolutionProviderCreditEvent.js';
import { RetrochargeEvent } from './RetrochargeEvent.js';
import { RentalTransactionEvent } from './RentalTransactionEvent.js';
import { ProductAdsPaymentEvent } from './ProductAdsPaymentEvent.js';
import { ServiceFeeEvent } from './ServiceFeeEvent.js';
import { SellerDealPaymentEvent } from './SellerDealPaymentEvent.js';
import { DebtRecoveryEvent } from './DebtRecoveryEvent.js';
import { LoanServicingEvent } from './LoanServicingEvent.js';
import { AdjustmentEvent } from './AdjustmentEvent.js';
import { SAFETReimbursementEvent } from './SAFETReimbursementEvent.js';
import { SellerReviewEnrollmentPaymentEvent } from './SellerReviewEnrollmentPaymentEvent.js';
import { FBALiquidationEvent } from './FBALiquidationEvent.js';
import { CouponPaymentEvent } from './CouponPaymentEvent.js';
import { ImagingServicesFeeEvent } from './ImagingServicesFeeEvent.js';
import { NetworkComminglingTransactionEvent } from './NetworkComminglingTransactionEvent.js';
import { AffordabilityExpenseEvent } from './AffordabilityExpenseEvent.js';
import { RemovalShipmentEvent } from './RemovalShipmentEvent.js';
import { RemovalShipmentAdjustmentEvent } from './RemovalShipmentAdjustmentEvent.js';
import { TrialShipmentEvent } from './TrialShipmentEvent.js';
import { TDSReimbursementEvent } from './TDSReimbursementEvent.js';
import { AdhocDisbursementEvent } from './AdhocDisbursementEvent.js';
import { TaxWithholdingEvent } from './TaxWithholdingEvent.js';
import { ChargeRefundEvent } from './ChargeRefundEvent.js';
import { FailedAdhocDisbursementEvent } from './FailedAdhocDisbursementEvent.js';
import { ValueAddedServiceChargeEvent } from './ValueAddedServiceChargeEvent.js';
import { CapacityReservationBillingEvent } from './CapacityReservationBillingEvent.js';
//# sourceMappingURL=FinancialEvents.d.ts.map