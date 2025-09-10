/**
 * The DeleteInventoryItemResponse model module.
 * @module fbainventory_v1/model/DeleteInventoryItemResponse
 * @version v1
 */
export class DeleteInventoryItemResponse {
    /**
     * Constructs a <code>DeleteInventoryItemResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {DeleteInventoryItemResponse} obj Optional instance to populate.
     * @return {DeleteInventoryItemResponse} The populated <code>DeleteInventoryItemResponse</code> instance.
     */
    static constructFromObject(data: any, obj: DeleteInventoryItemResponse): DeleteInventoryItemResponse;
    /**
     * A list of error responses returned when a request is unsuccessful.
     * @member {[Error]} errors
     * @type {[Error]}
     */
    errors: [Error];
}
import { Error } from './Error.js';
//# sourceMappingURL=DeleteInventoryItemResponse.d.ts.map