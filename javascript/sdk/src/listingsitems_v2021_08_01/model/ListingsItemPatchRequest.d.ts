/**
 * The ListingsItemPatchRequest model module.
 * @module listingsitems_v2021_08_01/model/ListingsItemPatchRequest
 * @version 2021-08-01
 */
export class ListingsItemPatchRequest {
    /**
     * Constructs a <code>ListingsItemPatchRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {ListingsItemPatchRequest} obj Optional instance to populate.
     * @return {ListingsItemPatchRequest} The populated <code>ListingsItemPatchRequest</code> instance.
     */
    static constructFromObject(data: any, obj: ListingsItemPatchRequest): ListingsItemPatchRequest;
    /**
     * Constructs a new <code>ListingsItemPatchRequest</code>.
     * The request body schema for the &#x60;patchListingsItem&#x60; operation.
     * @alias module:listingsitems_v2021_08_01/model/ListingsItemPatchRequest
     * @class
     * @param productType {String} The Amazon product type of the listings item.
     * @param patches {[PatchOperation]} One or more JSON Patch operations to perform on the listings item.
     */
    constructor(productType: string, patches: [PatchOperation]);
    productType: string;
    patches: PatchOperation[];
}
import { PatchOperation } from './PatchOperation.js';
//# sourceMappingURL=ListingsItemPatchRequest.d.ts.map