/**
 * The GetOrderAddressResponse model module.
 * @module orders_v0/model/GetOrderAddressResponse
 * @version v0
 */
export class GetOrderAddressResponse {
    /**
     * Constructs a <code>GetOrderAddressResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {GetOrderAddressResponse} obj Optional instance to populate.
     * @return {GetOrderAddressResponse} The populated <code>GetOrderAddressResponse</code> instance.
     */
    static constructFromObject(data: any, obj: GetOrderAddressResponse): GetOrderAddressResponse;
    /**
     * @member {OrderAddress} payload
     * @type {OrderAddress}
     */
    payload: OrderAddress;
    /**
     * A list of error responses returned when a request is unsuccessful.
     * @member {[Error]} errors
     * @type {[Error]}
     */
    errors: [Error];
}
import { OrderAddress } from './OrderAddress.js';
import { Error } from './Error.js';
//# sourceMappingURL=GetOrderAddressResponse.d.ts.map