/**
 * The OutboundOrderReference model module.
 * @module awd_v2024_05_09/model/OutboundOrderReference
 * @version 2024-05-09
 */
export class OutboundOrderReference {
    /**
     * Constructs a <code>OutboundOrderReference</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {OutboundOrderReference} obj Optional instance to populate.
     * @return {OutboundOrderReference} The populated <code>OutboundOrderReference</code> instance.
     */
    static constructFromObject(data: Object, obj: OutboundOrderReference): OutboundOrderReference;
    /**
     * Constructs a new <code>OutboundOrderReference</code>.
     * A response that contains the reference identifier for the newly created or updated outbound order. This includes an order ID.
     * @alias module:awd_v2024_05_09/model/OutboundOrderReference
     * @class
     * @param orderId {String} outbound order ID.
     */
    constructor(orderId: string);
    orderId: string;
}
//# sourceMappingURL=OutboundOrderReference.d.ts.map