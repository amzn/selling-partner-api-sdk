/**
 * The InvalidItemReason model module.
 * @module fulfillmentoutbound_v2020_07_01/model/InvalidItemReason
 * @version 2020-07-01
 */
export class InvalidItemReason {
    /**
     * Constructs a <code>InvalidItemReason</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {InvalidItemReason} obj Optional instance to populate.
     * @return {InvalidItemReason} The populated <code>InvalidItemReason</code> instance.
     */
    static constructFromObject(data: any, obj: InvalidItemReason): InvalidItemReason;
    /**
     * Constructs a new <code>InvalidItemReason</code>.
     * The reason that the item is invalid for return.
     * @alias module:fulfillmentoutbound_v2020_07_01/model/InvalidItemReason
     * @class
     * @param invalidItemReasonCode {InvalidItemReasonCode}
     * @param description {String} A human readable description of the invalid item reason code.
     */
    constructor(invalidItemReasonCode: InvalidItemReasonCode, description: string);
    invalidItemReasonCode: InvalidItemReasonCode;
    description: string;
}
import { InvalidItemReasonCode } from './InvalidItemReasonCode.js';
//# sourceMappingURL=InvalidItemReason.d.ts.map