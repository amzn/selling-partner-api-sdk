/**
 * The AddInventoryResponse model module.
 * @module fbainventory_v1/model/AddInventoryResponse
 * @version v1
 */
export class AddInventoryResponse {
    /**
     * Constructs a <code>AddInventoryResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {AddInventoryResponse} obj Optional instance to populate.
     * @return {AddInventoryResponse} The populated <code>AddInventoryResponse</code> instance.
     */
    static constructFromObject(data: any, obj: AddInventoryResponse): AddInventoryResponse;
    /**
     * A list of error responses returned when a request is unsuccessful.
     * @member {[Error]} errors
     * @type {[Error]}
     */
    errors: [Error];
}
import { Error } from './Error.js';
//# sourceMappingURL=AddInventoryResponse.d.ts.map