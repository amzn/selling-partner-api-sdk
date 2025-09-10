/**
 * The AddInventoryRequest model module.
 * @module fbainventory_v1/model/AddInventoryRequest
 * @version v1
 */
export class AddInventoryRequest {
    /**
     * Constructs a <code>AddInventoryRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {AddInventoryRequest} obj Optional instance to populate.
     * @return {AddInventoryRequest} The populated <code>AddInventoryRequest</code> instance.
     */
    static constructFromObject(data: any, obj: AddInventoryRequest): AddInventoryRequest;
    /**
     * List of Inventory to be added
     * @member {[InventoryItem]} inventoryItems
     * @type {[InventoryItem]}
     */
    inventoryItems: [InventoryItem];
}
import { InventoryItem } from './InventoryItem.js';
//# sourceMappingURL=AddInventoryRequest.d.ts.map