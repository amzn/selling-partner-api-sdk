/**
 * The ItemRelatedIdentifier model module.
 * @module finances_2024_06_19/model/ItemRelatedIdentifier
 * @version 2024-06-19
 */
export class ItemRelatedIdentifier {
    /**
     * Constructs a <code>ItemRelatedIdentifier</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {ItemRelatedIdentifier} obj Optional instance to populate.
     * @return {ItemRelatedIdentifier} The populated <code>ItemRelatedIdentifier</code> instance.
     */
    static constructFromObject(data: any, obj: ItemRelatedIdentifier): ItemRelatedIdentifier;
    /**
     * Enumerated set of related item identifier names for the item.
     * @member {String} itemRelatedIdentifierName
     * @type {String}
     */
    itemRelatedIdentifierName: string;
    /**
     * Corresponding value of ItemRelatedIdentifierName
     * @member {String} itemRelatedIdentifierValue
     * @type {String}
     */
    itemRelatedIdentifierValue: string;
}
export namespace ItemRelatedIdentifier {
    namespace ItemRelatedIdentifierNameEnum {
        let ORDER_ADJUSTMENT_ITEM_ID: string;
        let COUPON_ID: string;
        let REMOVAL_SHIPMENT_ITEM_ID: string;
        let TRANSACTION_ID: string;
    }
    /**
     * *
     */
    type ItemRelatedIdentifierNameEnum = string;
}
//# sourceMappingURL=ItemRelatedIdentifier.d.ts.map