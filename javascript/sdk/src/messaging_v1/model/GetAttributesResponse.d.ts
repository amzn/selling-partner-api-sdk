/**
 * The GetAttributesResponse model module.
 * @module messaging_v1/model/GetAttributesResponse
 * @version v1
 */
export class GetAttributesResponse {
    /**
     * Constructs a <code>GetAttributesResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {GetAttributesResponse} obj Optional instance to populate.
     * @return {GetAttributesResponse} The populated <code>GetAttributesResponse</code> instance.
     */
    static constructFromObject(data: any, obj: GetAttributesResponse): GetAttributesResponse;
    /**
     * @member {GetAttributesResponseBuyer} buyer
     * @type {GetAttributesResponseBuyer}
     */
    buyer: GetAttributesResponseBuyer;
    /**
     * A list of error responses returned when a request is unsuccessful.
     * @member {Array[]} errors
     * @type {Array[]}
     */
    errors: any[][];
}
import { GetAttributesResponseBuyer } from './GetAttributesResponseBuyer.js';
//# sourceMappingURL=GetAttributesResponse.d.ts.map