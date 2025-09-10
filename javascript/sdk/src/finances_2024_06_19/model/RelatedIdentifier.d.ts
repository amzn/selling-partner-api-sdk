/**
 * The RelatedIdentifier model module.
 * @module finances_2024_06_19/model/RelatedIdentifier
 * @version 2024-06-19
 */
export class RelatedIdentifier {
    /**
     * Constructs a <code>RelatedIdentifier</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {RelatedIdentifier} obj Optional instance to populate.
     * @return {RelatedIdentifier} The populated <code>RelatedIdentifier</code> instance.
     */
    static constructFromObject(data: any, obj: RelatedIdentifier): RelatedIdentifier;
    /**
     * Enumerated set of related business identifier names.
     * @member {String} relatedIdentifierName
     * @type {String}
     */
    relatedIdentifierName: string;
    /**
     * Corresponding value of RelatedIdentifierName
     * @member {String} relatedIdentifierValue
     * @type {String}
     */
    relatedIdentifierValue: string;
}
export namespace RelatedIdentifier {
    namespace RelatedIdentifierNameEnum {
        let ORDER_ID: string;
        let SHIPMENT_ID: string;
        let FINANCIAL_EVENT_GROUP_ID: string;
        let REFUND_ID: string;
        let INVOICE_ID: string;
        let DISBURSEMENT_ID: string;
        let TRANSFER_ID: string;
        let DEFERRED_TRANSACTION_ID: string;
        let RELEASE_TRANSACTION_ID: string;
        let SETTLEMENT_ID: string;
    }
    /**
     * *
     */
    type RelatedIdentifierNameEnum = string;
}
//# sourceMappingURL=RelatedIdentifier.d.ts.map