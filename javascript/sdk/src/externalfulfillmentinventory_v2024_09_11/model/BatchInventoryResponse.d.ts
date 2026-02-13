/**
 * The BatchInventoryResponse model module.
 * @module externalfulfillmentinventory_v2024_09_11/model/BatchInventoryResponse
 * @version 2024-09-11
 */
export class BatchInventoryResponse {
    /**
     * Constructs a <code>BatchInventoryResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {BatchInventoryResponse} obj Optional instance to populate.
     * @return {BatchInventoryResponse} The populated <code>BatchInventoryResponse</code> instance.
     */
    static constructFromObject(data: any, obj: BatchInventoryResponse): BatchInventoryResponse;
    /**
     * A list of inventory request responses.
     * @member {InventoryResponse[]} responses
     * @type {InventoryResponse[]}
     */
    responses: InventoryResponse[];
}
import { InventoryResponse } from './InventoryResponse.js';
//# sourceMappingURL=BatchInventoryResponse.d.ts.map