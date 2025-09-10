/**
 * The SetPrepDetailsRequest model module.
 * @module fulfillmentinbound_v2024_03_20/model/SetPrepDetailsRequest
 * @version 2024-03-20
 */
export class SetPrepDetailsRequest {
    /**
     * Constructs a <code>SetPrepDetailsRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {SetPrepDetailsRequest} obj Optional instance to populate.
     * @return {SetPrepDetailsRequest} The populated <code>SetPrepDetailsRequest</code> instance.
     */
    static constructFromObject(data: any, obj: SetPrepDetailsRequest): SetPrepDetailsRequest;
    /**
     * Constructs a new <code>SetPrepDetailsRequest</code>.
     * The &#x60;setPrepDetails&#x60; request.
     * @alias module:fulfillmentinbound_v2024_03_20/model/SetPrepDetailsRequest
     * @class
     * @param marketplaceId {String} The marketplace ID. For a list of possible values, refer to [Marketplace IDs](https://developer-docs.amazon.com/sp-api/docs/marketplace-ids).
     * @param mskuPrepDetails {[MskuPrepDetailInput]} A list of MSKUs and related prep details.
     */
    constructor(marketplaceId: string, mskuPrepDetails: [MskuPrepDetailInput]);
    marketplaceId: string;
    mskuPrepDetails: [MskuPrepDetailInput];
}
import { MskuPrepDetailInput } from './MskuPrepDetailInput.js';
//# sourceMappingURL=SetPrepDetailsRequest.d.ts.map