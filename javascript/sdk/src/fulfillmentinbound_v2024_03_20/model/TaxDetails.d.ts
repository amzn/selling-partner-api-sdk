/**
 * The TaxDetails model module.
 * @module fulfillmentinbound_v2024_03_20/model/TaxDetails
 * @version 2024-03-20
 */
export class TaxDetails {
    /**
     * Constructs a <code>TaxDetails</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {TaxDetails} obj Optional instance to populate.
     * @return {TaxDetails} The populated <code>TaxDetails</code> instance.
     */
    static constructFromObject(data: any, obj: TaxDetails): TaxDetails;
    /**
     * @member {Currency} declaredValue
     * @type {Currency}
     */
    declaredValue: Currency;
    /**
     * Harmonized System of Nomenclature code.
     * @member {String} hsnCode
     * @type {String}
     */
    hsnCode: string;
    /**
     * List of tax rates.
     * @member {Array[]} taxRates
     * @type {Array[]}
     */
    taxRates: any[][];
}
import { Currency } from './Currency.js';
//# sourceMappingURL=TaxDetails.d.ts.map