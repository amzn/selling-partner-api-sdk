/**
 * The ItemSubstitutionOption model module.
 * @module orders_v2026_01_01/model/ItemSubstitutionOption
 * @version 2026-01-01
 */
export class ItemSubstitutionOption {
    /**
     * Constructs a <code>ItemSubstitutionOption</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {ItemSubstitutionOption} obj Optional instance to populate.
     * @return {ItemSubstitutionOption} The populated <code>ItemSubstitutionOption</code> instance.
     */
    static constructFromObject(data: any, obj: ItemSubstitutionOption): ItemSubstitutionOption;
    /**
     * Amazon Standard Identification Number of the substitute product.
     * @member {String} asin
     * @type {String}
     */
    asin: string;
    /**
     * Number of units of the substitute item to be selected if substitution occurs.
     * @member {Number} quantityOrdered
     * @type {Number}
     */
    quantityOrdered: number;
    /**
     * The item's seller stock keeping unit (SKU).
     * @member {String} sellerSku
     * @type {String}
     */
    sellerSku: string;
    /**
     * Product name or title of the substitute item as displayed to customers.
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
//# sourceMappingURL=ItemSubstitutionOption.d.ts.map