/**
 * The GetCollectionFormHistoryRequest model module.
 * @module shipping_v2/model/GetCollectionFormHistoryRequest
 * @version v2
 */
export class GetCollectionFormHistoryRequest {
    /**
     * Constructs a <code>GetCollectionFormHistoryRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {GetCollectionFormHistoryRequest} obj Optional instance to populate.
     * @return {GetCollectionFormHistoryRequest} The populated <code>GetCollectionFormHistoryRequest</code> instance.
     */
    static constructFromObject(data: any, obj: GetCollectionFormHistoryRequest): GetCollectionFormHistoryRequest;
    /**
     * Object to pass additional information about the MCI Integrator shipperType: List of ClientReferenceDetail
     * @member {ClientReferenceDetail[]} clientReferenceDetails
     * @type {ClientReferenceDetail[]}
     */
    clientReferenceDetails: ClientReferenceDetail[];
    /**
     * max Number of Results for query .
     * @member {Number} maxResults
     * @type {Number}
     */
    maxResults: number;
    /**
     * The carrier identifier for the offering, provided by the carrier.
     * @member {String} carrierId
     * @type {String}
     */
    carrierId: string;
    /**
     * @member {Address} shipFromAddress
     * @type {Address}
     */
    shipFromAddress: Address;
    /**
     * @member {DateRange} dateRange
     * @type {DateRange}
     */
    dateRange: DateRange;
}
import { ClientReferenceDetail } from './ClientReferenceDetail.js';
import { Address } from './Address.js';
import { DateRange } from './DateRange.js';
//# sourceMappingURL=GetCollectionFormHistoryRequest.d.ts.map