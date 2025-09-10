/**
 * The CreateInventoryItemResponse model module.
 * @module fbainventory_v1/model/CreateInventoryItemResponse
 * @version v1
 */
export class CreateInventoryItemResponse {
    /**
     * Constructs a <code>CreateInventoryItemResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {CreateInventoryItemResponse} obj Optional instance to populate.
     * @return {CreateInventoryItemResponse} The populated <code>CreateInventoryItemResponse</code> instance.
     */
    static constructFromObject(data: any, obj: CreateInventoryItemResponse): CreateInventoryItemResponse;
    /**
     * A list of error responses returned when a request is unsuccessful.
     * @member {[Error]} errors
     * @type {[Error]}
     */
    errors: [Error];
}
import { Error } from './Error.js';
//# sourceMappingURL=CreateInventoryItemResponse.d.ts.map