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
     * @member {Array[]} shipmentEventList
     * @type {Array[]}
     */
    shipmentEventList: any[][];
    /**
     * A list of `ShipmentEvent` items.
     * @member {Array[]} shipmentSettleEventList
     * @type {Array[]}
     */
    shipmentSettleEventList: any[][];
    /**
     * A list of shipment event information.
     * @member {Array[]} refundEventList
     * @type {Array[]}
     */
    refundEventList: any[][];
    /**
     * A list of shipment event information.
     * @member {Array[]} guaranteeClaimEventList
     * @type {Array[]}
     */
    guaranteeClaimEventList: any[][];
    /**
     * A list of EBT refund reimbursement events.
     * @member {Array[]} eBTRefundReimbursementOnlyEventList
     * @type {Array[]}
     */
    eBTRefundReimbursementOnlyEventList: any[][];
    /**
     * A list of shipment event information.
     * @member {Array[]} chargebackEventList
     * @type {Array[]}
     */
    chargebackEventList: any[][];
    /**
     * A list of events related to the seller's Pay with Amazon account.
     * @member {Array[]} payWithAmazonEventList
     * @type {Array[]}
     */
    payWithAmazonEventList: any[][];
    /**
     * A list of `SolutionProviderCreditEvent`.
     * @member {Array[]} serviceProviderCreditEventList
     * @type {Array[]}
     */
    serviceProviderCreditEventList: any[][];
    /**
     * A list of information about `Retrocharge` or `RetrochargeReversal` events.
     * @member {Array[]} retrochargeEventList
     * @type {Array[]}
     */
    retrochargeEventList: any[][];
    /**
     * A list of rental transaction event information.
     * @member {Array[]} rentalTransactionEventList
     * @type {Array[]}
     */
    rentalTransactionEventList: any[][];
    /**
     * A list of sponsored products payment events.
     * @member {Array[]} productAdsPaymentEventList
     * @type {Array[]}
     */
    productAdsPaymentEventList: any[][];
    /**
     * A list of information about service fee events.
     * @member {Array[]} serviceFeeEventList
     * @type {Array[]}
     */
    serviceFeeEventList: any[][];
    /**
     * A list of payment events for deal-related fees.
     * @member {Array[]} sellerDealPaymentEventList
     * @type {Array[]}
     */
    sellerDealPaymentEventList: any[][];
    /**
     * A list of debt recovery event information.
     * @member {Array[]} debtRecoveryEventList
     * @type {Array[]}
     */
    debtRecoveryEventList: any[][];
    /**
     * A list of loan servicing events.
     * @member {Array[]} loanServicingEventList
     * @type {Array[]}
     */
    loanServicingEventList: any[][];
    /**
     * A list of adjustment event information for the seller's account.
     * @member {Array[]} adjustmentEventList
     * @type {Array[]}
     */
    adjustmentEventList: any[][];
    /**
     * A list of `SAFETReimbursementEvent`.
     * @member {Array[]} sAFETReimbursementEventList
     * @type {Array[]}
     */
    sAFETReimbursementEventList: any[][];
    /**
     * A list of information about fee events for the Early Reviewer Program.
     * @member {Array[]} sellerReviewEnrollmentPaymentEventList
     * @type {Array[]}
     */
    sellerReviewEnrollmentPaymentEventList: any[][];
    /**
     * A list of FBA inventory liquidation payment events.
     * @member {Array[]} fBALiquidationEventList
     * @type {Array[]}
     */
    fBALiquidationEventList: any[][];
    /**
     * A list of coupon payment event information.
     * @member {Array[]} couponPaymentEventList
     * @type {Array[]}
     */
    couponPaymentEventList: any[][];
    /**
     * A list of fee events related to Amazon Imaging services.
     * @member {Array[]} imagingServicesFeeEventList
     * @type {Array[]}
     */
    imagingServicesFeeEventList: any[][];
    /**
     * A list of network commingling transaction events.
     * @member {Array[]} networkComminglingTransactionEventList
     * @type {Array[]}
     */
    networkComminglingTransactionEventList: any[][];
    /**
     * A list of expense information related to an affordability promotion.
     * @member {Array[]} affordabilityExpenseEventList
     * @type {Array[]}
     */
    affordabilityExpenseEventList: any[][];
    /**
     * A list of expense information related to an affordability promotion.
     * @member {Array[]} affordabilityExpenseReversalEventList
     * @type {Array[]}
     */
    affordabilityExpenseReversalEventList: any[][];
    /**
     * A list of removal shipment event information.
     * @member {Array[]} removalShipmentEventList
     * @type {Array[]}
     */
    removalShipmentEventList: any[][];
    /**
     * A comma-delimited list of `RemovalShipmentAdjustment` details for FBA inventory.
     * @member {Array[]} removalShipmentAdjustmentEventList
     * @type {Array[]}
     */
    removalShipmentAdjustmentEventList: any[][];
    /**
     * A list of information about trial shipment financial events.
     * @member {Array[]} trialShipmentEventList
     * @type {Array[]}
     */
    trialShipmentEventList: any[][];
    /**
     * A list of `TDSReimbursementEvent` items.
     * @member {Array[]} tDSReimbursementEventList
     * @type {Array[]}
     */
    tDSReimbursementEventList: any[][];
    /**
     * A list of `AdhocDisbursement` events.
     * @member {Array[]} adhocDisbursementEventList
     * @type {Array[]}
     */
    adhocDisbursementEventList: any[][];
    /**
     * A list of tax withholding events.
     * @member {Array[]} taxWithholdingEventList
     * @type {Array[]}
     */
    taxWithholdingEventList: any[][];
    /**
     * A list of charge refund events.
     * @member {Array[]} chargeRefundEventList
     * @type {Array[]}
     */
    chargeRefundEventList: any[][];
    /**
     * A list of `FailedAdhocDisbursementEvent`.
     * @member {Array[]} failedAdhocDisbursementEventList
     * @type {Array[]}
     */
    failedAdhocDisbursementEventList: any[][];
    /**
     * A list of `ValueAddedServiceCharge` events.
     * @member {Array[]} valueAddedServiceChargeEventList
     * @type {Array[]}
     */
    valueAddedServiceChargeEventList: any[][];
    /**
     * A list of `CapacityReservationBillingEvent` events.
     * @member {Array[]} capacityReservationBillingEventList
     * @type {Array[]}
     */
    capacityReservationBillingEventList: any[][];
}
//# sourceMappingURL=FinancialEvents.d.ts.map