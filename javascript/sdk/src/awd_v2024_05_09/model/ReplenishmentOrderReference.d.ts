/**
 * The ReplenishmentOrderReference model module.
 * @module awd_v2024_05_09/model/ReplenishmentOrderReference
 * @version 2024-05-09
 */
export class ReplenishmentOrderReference {
    /**
     * Constructs a <code>ReplenishmentOrderReference</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {ReplenishmentOrderReference} obj Optional instance to populate.
     * @return {ReplenishmentOrderReference} The populated <code>ReplenishmentOrderReference</code> instance.
     */
    static constructFromObject(data: any, obj: ReplenishmentOrderReference): ReplenishmentOrderReference;
    /**
     * Constructs a new <code>ReplenishmentOrderReference</code>.
     * Response containing the reference identifier for the newly created/updated replenishment order consisting of the order ID.
     * @alias module:awd_v2024_05_09/model/ReplenishmentOrderReference
     * @class
     * @param orderId {String} Order ID of the Replenishment order.
     */
    constructor(orderId: string);
    orderId: string;
}
//# sourceMappingURL=ReplenishmentOrderReference.d.ts.map