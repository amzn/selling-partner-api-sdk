/**
 * The ShippingLabelList model module.
 * @module vendordfshipping_v2021_12_28/model/ShippingLabelList
 * @version 2021-12-28
 */
export class ShippingLabelList {
    /**
     * Constructs a <code>ShippingLabelList</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {ShippingLabelList} obj Optional instance to populate.
     * @return {ShippingLabelList} The populated <code>ShippingLabelList</code> instance.
     */
    static constructFromObject(data: any, obj: ShippingLabelList): ShippingLabelList;
    /**
     * @member {Pagination} pagination
     * @type {Pagination}
     */
    pagination: Pagination;
    /**
     * An array containing the details of the generated shipping labels.
     * @member {Array[]} shippingLabels
     * @type {Array[]}
     */
    shippingLabels: any[][];
}
import { Pagination } from './Pagination.js';
//# sourceMappingURL=ShippingLabelList.d.ts.map