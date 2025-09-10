/**
 * The PackingSlipList model module.
 * @module vendordfshipping_v2021_12_28/model/PackingSlipList
 * @version 2021-12-28
 */
export class PackingSlipList {
    /**
     * Constructs a <code>PackingSlipList</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {PackingSlipList} obj Optional instance to populate.
     * @return {PackingSlipList} The populated <code>PackingSlipList</code> instance.
     */
    static constructFromObject(data: any, obj: PackingSlipList): PackingSlipList;
    /**
     * @member {Pagination} pagination
     * @type {Pagination}
     */
    pagination: Pagination;
    /**
     * An array of packing slip objects.
     * @member {[PackingSlip]} packingSlips
     * @type {[PackingSlip]}
     */
    packingSlips: [PackingSlip];
}
import { Pagination } from './Pagination.js';
import { PackingSlip } from './PackingSlip.js';
//# sourceMappingURL=PackingSlipList.d.ts.map