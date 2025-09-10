/**
 * The SubstitutionOption model module.
 * @module orders_v0/model/SubstitutionOption
 * @version v0
 */
export class SubstitutionOption {
    /**
     * Constructs a <code>SubstitutionOption</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {SubstitutionOption} obj Optional instance to populate.
     * @return {SubstitutionOption} The populated <code>SubstitutionOption</code> instance.
     */
    static constructFromObject(data: any, obj: SubstitutionOption): SubstitutionOption;
    /**
     * The item's Amazon Standard Identification Number (ASIN).
     * @member {String} ASIN
     * @type {String}
     */
    ASIN: string;
    /**
     * The number of items to be picked for this substitution option.
     * @member {Number} quantityOrdered
     * @type {Number}
     */
    quantityOrdered: number;
    /**
     * The item's seller stock keeping unit (SKU).
     * @member {String} sellerSKU
     * @type {String}
     */
    sellerSKU: string;
    /**
     * The item's title.
     * @member {String} title
     * @type {String}
     */
    title: string;
    /**
     * @member {Measurement} measurement
     * @type {Measurement}
     */
    measurement: Measurement;
}
import { Measurement } from './Measurement.js';
//# sourceMappingURL=SubstitutionOption.d.ts.map