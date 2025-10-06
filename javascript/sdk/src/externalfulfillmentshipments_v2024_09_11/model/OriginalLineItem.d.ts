/**
 * The OriginalLineItem model module.
 * @module externalfulfillmentshipments_v2024_09_11/model/OriginalLineItem
 * @version 2024-09-11
 */
export class OriginalLineItem {
    /**
     * Constructs a <code>OriginalLineItem</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {OriginalLineItem} obj Optional instance to populate.
     * @return {OriginalLineItem} The populated <code>OriginalLineItem</code> instance.
     */
    static constructFromObject(data: any, obj: OriginalLineItem): OriginalLineItem;
    /**
     * Constructs a new <code>OriginalLineItem</code>.
     * A line item from the original shipment that corresponds to this shipment.
     * @alias module:externalfulfillmentshipments_v2024_09_11/model/OriginalLineItem
     * @class
     * @param replacingSku {String} The SKU ID for this shipment
     * @param originalSku {String} The SKU ID for the original shipment.
     * @param charges {[Charge]} The charges associated with the shipment.
     */
    constructor(replacingSku: string, originalSku: string, charges: [Charge]);
    replacingSku: string;
    originalSku: string;
    charges: [Charge];
}
import { Charge } from './Charge.js';
//# sourceMappingURL=OriginalLineItem.d.ts.map