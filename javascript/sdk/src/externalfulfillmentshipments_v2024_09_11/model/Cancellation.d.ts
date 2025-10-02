/**
 * The Cancellation model module.
 * @module externalfulfillmentshipments_v2024_09_11/model/Cancellation
 * @version 2024-09-11
 */
export class Cancellation {
    /**
     * Constructs a <code>Cancellation</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {Cancellation} obj Optional instance to populate.
     * @return {Cancellation} The populated <code>Cancellation</code> instance.
     */
    static constructFromObject(data: any, obj: Cancellation): Cancellation;
    /**
     * Constructs a new <code>Cancellation</code>.
     * A shipment item&#39;s cancellation details.
     * @alias module:externalfulfillmentshipments_v2024_09_11/model/Cancellation
     * @class
     * @param cancelledQuantity {Number} The number of items of this particular item which have been cancelled.
     * @param cancelledTimestamp {String} A date and time in [ISO 8601](https://developer-docs.amazon.com/sp-api/docs/iso-8601) format.
     * @param cancellationType {String} The type of cancellation of the item in the shipment.
     */
    constructor(cancelledQuantity: number, cancelledTimestamp: string, cancellationType: string);
    cancelledQuantity: number;
    cancelledTimestamp: string;
    cancellationType: string;
    /**
     * The reason for the cancellation of the shipment.
     * @member {String} cancellationReason
     * @type {String}
     */
    cancellationReason: string;
}
export namespace Cancellation {
    namespace CancellationTypeEnum {
        let SELLER_REJECTED: string;
        let MARKETPLACE_CANCELLED: string;
        let SYSTEM_CANCELLED: string;
    }
    /**
     * *
     */
    type CancellationTypeEnum = string;
}
//# sourceMappingURL=Cancellation.d.ts.map