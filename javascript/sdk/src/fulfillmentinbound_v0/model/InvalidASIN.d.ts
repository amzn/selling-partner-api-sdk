/**
 * The InvalidASIN model module.
 * @module fulfillmentinbound_v0/model/InvalidASIN
 * @version v0
 */
export class InvalidASIN {
    /**
     * Constructs a <code>InvalidASIN</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {InvalidASIN} obj Optional instance to populate.
     * @return {InvalidASIN} The populated <code>InvalidASIN</code> instance.
     */
    static constructFromObject(data: any, obj: InvalidASIN): InvalidASIN;
    /**
     * The Amazon Standard Identification Number (ASIN) of the item.
     * @member {String} ASIN
     * @type {String}
     */
    ASIN: string;
    /**
     * @member {ErrorReason} errorReason
     * @type {ErrorReason}
     */
    errorReason: ErrorReason;
}
import { ErrorReason } from './ErrorReason.js';
//# sourceMappingURL=InvalidASIN.d.ts.map