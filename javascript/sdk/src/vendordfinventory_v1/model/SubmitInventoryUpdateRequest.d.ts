/**
 * The SubmitInventoryUpdateRequest model module.
 * @module vendordfinventory_v1/model/SubmitInventoryUpdateRequest
 * @version v1
 */
export class SubmitInventoryUpdateRequest {
    /**
     * Constructs a <code>SubmitInventoryUpdateRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {SubmitInventoryUpdateRequest} obj Optional instance to populate.
     * @return {SubmitInventoryUpdateRequest} The populated <code>SubmitInventoryUpdateRequest</code> instance.
     */
    static constructFromObject(data: any, obj: SubmitInventoryUpdateRequest): SubmitInventoryUpdateRequest;
    /**
     * @member {InventoryUpdate} inventory
     * @type {InventoryUpdate}
     */
    inventory: InventoryUpdate;
}
import { InventoryUpdate } from './InventoryUpdate.js';
//# sourceMappingURL=SubmitInventoryUpdateRequest.d.ts.map