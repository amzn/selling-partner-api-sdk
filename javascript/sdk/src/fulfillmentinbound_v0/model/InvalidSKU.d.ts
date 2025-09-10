/**
 * The InvalidSKU model module.
 * @module fulfillmentinbound_v0/model/InvalidSKU
 * @version v0
 */
export class InvalidSKU {
    /**
     * Constructs a <code>InvalidSKU</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {InvalidSKU} obj Optional instance to populate.
     * @return {InvalidSKU} The populated <code>InvalidSKU</code> instance.
     */
    static constructFromObject(data: any, obj: InvalidSKU): InvalidSKU;
    /**
     * The seller SKU of the item.
     * @member {String} sellerSKU
     * @type {String}
     */
    sellerSKU: string;
    /**
     * @member {ErrorReason} errorReason
     * @type {ErrorReason}
     */
    errorReason: ErrorReason;
}
import { ErrorReason } from './ErrorReason.js';
//# sourceMappingURL=InvalidSKU.d.ts.map