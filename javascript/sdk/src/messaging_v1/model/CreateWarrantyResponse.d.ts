/**
 * The CreateWarrantyResponse model module.
 * @module messaging_v1/model/CreateWarrantyResponse
 * @version v1
 */
export class CreateWarrantyResponse {
    /**
     * Constructs a <code>CreateWarrantyResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {CreateWarrantyResponse} obj Optional instance to populate.
     * @return {CreateWarrantyResponse} The populated <code>CreateWarrantyResponse</code> instance.
     */
    static constructFromObject(data: any, obj: CreateWarrantyResponse): CreateWarrantyResponse;
    /**
     * A list of error responses returned when a request is unsuccessful.
     * @member {[Error]} errors
     * @type {[Error]}
     */
    errors: [Error];
}
import { Error } from './Error.js';
//# sourceMappingURL=CreateWarrantyResponse.d.ts.map