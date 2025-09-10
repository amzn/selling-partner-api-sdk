/**
 * The SubmitInventoryUpdateResponse model module.
 * @module vendordfinventory_v1/model/SubmitInventoryUpdateResponse
 * @version v1
 */
export class SubmitInventoryUpdateResponse {
    /**
     * Constructs a <code>SubmitInventoryUpdateResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {SubmitInventoryUpdateResponse} obj Optional instance to populate.
     * @return {SubmitInventoryUpdateResponse} The populated <code>SubmitInventoryUpdateResponse</code> instance.
     */
    static constructFromObject(data: any, obj: SubmitInventoryUpdateResponse): SubmitInventoryUpdateResponse;
    /**
     * @member {TransactionReference} payload
     * @type {TransactionReference}
     */
    payload: TransactionReference;
    /**
     * A list of error responses returned when a request is unsuccessful.
     * @member {[Error]} errors
     * @type {[Error]}
     */
    errors: [Error];
}
import { TransactionReference } from './TransactionReference.js';
import { Error } from './Error.js';
//# sourceMappingURL=SubmitInventoryUpdateResponse.d.ts.map