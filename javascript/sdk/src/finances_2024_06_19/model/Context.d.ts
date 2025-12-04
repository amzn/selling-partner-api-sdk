/**
 * The Context model module.
 * @module finances_2024_06_19/model/Context
 * @version 2024-06-19
 */
export class Context {
    /**
     * Constructs a <code>Context</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {Context} obj Optional instance to populate.
     * @return {Context} The populated <code>Context</code> instance.
     */
    static constructFromObject(data: any, obj: Context): Context;
    /**
     * Constructs a new <code>Context</code>.
     * Additional Information about the item.
     * @alias module:finances_2024_06_19/model/Context
     * @class
     * @implements module:finances_2024_06_19/model/AmazonPayContext
     * @implements module:finances_2024_06_19/model/ProductContext
     * @implements module:finances_2024_06_19/model/PaymentsContext
     * @implements module:finances_2024_06_19/model/DeferredContext
     * @implements module:finances_2024_06_19/model/BusinessContext
     * @implements module:finances_2024_06_19/model/TimeRangeContext
     * @param contextType {String}
     */
    constructor(contextType: string);
    contextType: string;
    /**
     * The store name associated with the transaction.
     * @member {String} storeName
     * @type {String}
     */
    storeName: string;
    /**
     * The transaction's order type.
     * @member {String} orderType
     * @type {String}
     */
    orderType: string;
    /**
     * Channel details of related transaction.
     * @member {String} channel
     * @type {String}
     */
    channel: string;
    /**
     * The Amazon Standard Identification Number (ASIN) of the item.
     * @member {String} asin
     * @type {String}
     */
    asin: string;
    /**
     * The Stock Keeping Unit (SKU) of the item.
     * @member {String} sku
     * @type {String}
     */
    sku: string;
    /**
     * The quantity of the item shipped.
     * @member {Number} quantityShipped
     * @type {Number}
     */
    quantityShipped: number;
    /**
     * The fulfillment network of the item.
     * @member {String} fulfillmentNetwork
     * @type {String}
     */
    fulfillmentNetwork: string;
    /**
     * The type of payment.
     * @member {String} paymentType
     * @type {String}
     */
    paymentType: string;
    /**
     * The method of payment.
     * @member {String} paymentMethod
     * @type {String}
     */
    paymentMethod: string;
    /**
     * The reference number of the payment.
     * @member {String} paymentReference
     * @type {String}
     */
    paymentReference: string;
    /**
     * A date in [ISO 8601](https://developer-docs.amazon.com/sp-api/docs/iso-8601) date-time format.
     * @member {Date} paymentDate
     * @type {Date}
     */
    paymentDate: Date;
    /**
     * The deferral policy applied to the transaction.  **Examples:** `B2B` (invoiced orders), `DD7` (delivery date policy)
     * @member {String} deferralReason
     * @type {String}
     */
    deferralReason: string;
    /**
     * A date in [ISO 8601](https://developer-docs.amazon.com/sp-api/docs/iso-8601) date-time format.
     * @member {Date} maturityDate
     * @type {Date}
     */
    maturityDate: Date;
    /**
     * A date in [ISO 8601](https://developer-docs.amazon.com/sp-api/docs/iso-8601) date-time format.
     * @member {Date} startTime
     * @type {Date}
     */
    startTime: Date;
    /**
     * A date in [ISO 8601](https://developer-docs.amazon.com/sp-api/docs/iso-8601) date-time format.
     * @member {Date} endTime
     * @type {Date}
     */
    endTime: Date;
}
export namespace Context {
    namespace StoreNameEnum {
        let AMAZON_HAUL: string;
    }
    /**
     * *
     */
    type StoreNameEnum = string;
}
//# sourceMappingURL=Context.d.ts.map