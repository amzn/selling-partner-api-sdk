/**
 * The BatchInventoryRequest model module.
 * @module externalfulfillmentinventory_v2024_09_11/model/BatchInventoryRequest
 * @version 2024-09-11
 */
export class BatchInventoryRequest {
    /**
     * Constructs a <code>BatchInventoryRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {BatchInventoryRequest} obj Optional instance to populate.
     * @return {BatchInventoryRequest} The populated <code>BatchInventoryRequest</code> instance.
     */
    static constructFromObject(data: any, obj: BatchInventoryRequest): BatchInventoryRequest;
    /**
     * A list of inventory requests.
     * @member {[InventoryRequest]} requests
     * @type {[InventoryRequest]}
     */
    requests: [InventoryRequest];
}
import { InventoryRequest } from './InventoryRequest.js';
//# sourceMappingURL=BatchInventoryRequest.d.ts.map