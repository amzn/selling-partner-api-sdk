/**
 * The LineItemWithReason model module.
 * @module externalfulfillmentshipments_v2024_09_11/model/LineItemWithReason
 * @version 2024-09-11
 */
export class LineItemWithReason {
    /**
     * Constructs a <code>LineItemWithReason</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {LineItemWithReason} obj Optional instance to populate.
     * @return {LineItemWithReason} The populated <code>LineItemWithReason</code> instance.
     */
    static constructFromObject(data: any, obj: LineItemWithReason): LineItemWithReason;
    /**
     * Constructs a new <code>LineItemWithReason</code>.
     * Information about the line item being confirmed or rejected and the reason for the rejection.
     * @alias module:externalfulfillmentshipments_v2024_09_11/model/LineItemWithReason
     * @class
     * @param lineItem {LineItem}
     */
    constructor(lineItem: LineItem);
    lineItem: LineItem;
    /**
     * The reason for the rejection of the line item.
     * @member {String} reason
     * @type {String}
     */
    reason: string;
}
export namespace LineItemWithReason {
    namespace ReasonEnum {
        let OUT_OF_STOCK: string;
        let CUSTOMER_REQUESTED: string;
    }
    /**
     * *
     */
    type ReasonEnum = string;
}
import { LineItem } from './LineItem.js';
//# sourceMappingURL=LineItemWithReason.d.ts.map