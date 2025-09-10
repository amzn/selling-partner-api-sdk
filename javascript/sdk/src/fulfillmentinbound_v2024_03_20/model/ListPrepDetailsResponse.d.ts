/**
 * The ListPrepDetailsResponse model module.
 * @module fulfillmentinbound_v2024_03_20/model/ListPrepDetailsResponse
 * @version 2024-03-20
 */
export class ListPrepDetailsResponse {
    /**
     * Constructs a <code>ListPrepDetailsResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {ListPrepDetailsResponse} obj Optional instance to populate.
     * @return {ListPrepDetailsResponse} The populated <code>ListPrepDetailsResponse</code> instance.
     */
    static constructFromObject(data: any, obj: ListPrepDetailsResponse): ListPrepDetailsResponse;
    /**
     * Constructs a new <code>ListPrepDetailsResponse</code>.
     * The response to the &#x60;listPrepDetails&#x60; operation.
     * @alias module:fulfillmentinbound_v2024_03_20/model/ListPrepDetailsResponse
     * @class
     * @param mskuPrepDetails {[MskuPrepDetail]} A list of MSKUs and related prep details.
     */
    constructor(mskuPrepDetails: [MskuPrepDetail]);
    mskuPrepDetails: [MskuPrepDetail];
}
import { MskuPrepDetail } from './MskuPrepDetail.js';
//# sourceMappingURL=ListPrepDetailsResponse.d.ts.map