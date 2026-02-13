/**
 * The TaxItemDetails model module.
 * @module vendordforders_v2021_12_28/model/TaxItemDetails
 * @version 2021-12-28
 */
export class TaxItemDetails {
    /**
     * Constructs a <code>TaxItemDetails</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {TaxItemDetails} obj Optional instance to populate.
     * @return {TaxItemDetails} The populated <code>TaxItemDetails</code> instance.
     */
    static constructFromObject(data: any, obj: TaxItemDetails): TaxItemDetails;
    /**
     * A list of tax line items.
     * @member {TaxDetails[]} taxLineItem
     * @type {TaxDetails[]}
     */
    taxLineItem: TaxDetails[];
}
import { TaxDetails } from './TaxDetails.js';
//# sourceMappingURL=TaxItemDetails.d.ts.map