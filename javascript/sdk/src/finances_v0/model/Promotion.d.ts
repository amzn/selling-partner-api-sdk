/**
 * The Promotion model module.
 * @module finances_v0/model/Promotion
 * @version v0
 */
export class Promotion {
    /**
     * Constructs a <code>Promotion</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {Promotion} obj Optional instance to populate.
     * @return {Promotion} The populated <code>Promotion</code> instance.
     */
    static constructFromObject(data: any, obj: Promotion): Promotion;
    /**
     * The type of promotion.
     * @member {String} promotionType
     * @type {String}
     */
    promotionType: string;
    /**
     * The seller-specified identifier for the promotion.
     * @member {String} promotionId
     * @type {String}
     */
    promotionId: string;
    /**
     * @member {Currency} promotionAmount
     * @type {Currency}
     */
    promotionAmount: Currency;
}
import { Currency } from './Currency.js';
//# sourceMappingURL=Promotion.d.ts.map