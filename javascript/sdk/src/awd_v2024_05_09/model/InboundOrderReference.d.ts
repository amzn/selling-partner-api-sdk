/**
 * The InboundOrderReference model module.
 * @module awd_v2024_05_09/model/InboundOrderReference
 * @version 2024-05-09
 */
export class InboundOrderReference {
    /**
     * Constructs a <code>InboundOrderReference</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {InboundOrderReference} obj Optional instance to populate.
     * @return {InboundOrderReference} The populated <code>InboundOrderReference</code> instance.
     */
    static constructFromObject(data: any, obj: InboundOrderReference): InboundOrderReference;
    /**
     * Constructs a new <code>InboundOrderReference</code>.
     * A response that contains the reference identifiers for the newly created or updated inbound order. Consists of an order ID and version.
     * @alias module:awd_v2024_05_09/model/InboundOrderReference
     * @class
     * @param orderId {String} Order ID of the inbound order.
     */
    constructor(orderId: string);
    orderId: string;
}
//# sourceMappingURL=InboundOrderReference.d.ts.map