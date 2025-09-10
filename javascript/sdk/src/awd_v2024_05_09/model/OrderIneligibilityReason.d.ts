/**
 * The OrderIneligibilityReason model module.
 * @module awd_v2024_05_09/model/OrderIneligibilityReason
 * @version 2024-05-09
 */
export class OrderIneligibilityReason {
    /**
     * Constructs a <code>OrderIneligibilityReason</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {OrderIneligibilityReason} obj Optional instance to populate.
     * @return {OrderIneligibilityReason} The populated <code>OrderIneligibilityReason</code> instance.
     */
    static constructFromObject(data: any, obj: OrderIneligibilityReason): OrderIneligibilityReason;
    /**
     * Constructs a new <code>OrderIneligibilityReason</code>.
     * Represents one ineligibility reason for the order (there can be multiple reasons).
     * @alias module:awd_v2024_05_09/model/OrderIneligibilityReason
     * @class
     * @param code {String} Code for the order ineligibility.
     * @param description {String} Description detailing the ineligibility reason of the order.
     */
    constructor(code: string, description: string);
    code: string;
    description: string;
}
//# sourceMappingURL=OrderIneligibilityReason.d.ts.map