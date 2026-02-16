/**
 * The ListingsItemSubmissionResponse model module.
 * @module listingsitems_v2021_08_01/model/ListingsItemSubmissionResponse
 * @version 2021-08-01
 */
export class ListingsItemSubmissionResponse {
    /**
     * Constructs a <code>ListingsItemSubmissionResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {ListingsItemSubmissionResponse} obj Optional instance to populate.
     * @return {ListingsItemSubmissionResponse} The populated <code>ListingsItemSubmissionResponse</code> instance.
     */
    static constructFromObject(data: any, obj: ListingsItemSubmissionResponse): ListingsItemSubmissionResponse;
    /**
     * Constructs a new <code>ListingsItemSubmissionResponse</code>.
     * Response containing the results of a submission to the Selling Partner API for Listings Items.
     * @alias module:listingsitems_v2021_08_01/model/ListingsItemSubmissionResponse
     * @class
     * @param sku {String} A selling partner provided identifier for an Amazon listing.
     * @param status {String} The status of the listings item submission.
     * @param submissionId {String} The unique identifier of the listings item submission.
     */
    constructor(sku: string, status: string, submissionId: string);
    sku: string;
    status: string;
    submissionId: string;
    /**
     * Listings item issues related to the listings item submission.
     * @member {Issue[]} issues
     * @type {Issue[]}
     */
    issues: Issue[];
    /**
     * Identity attributes associated with the item in the Amazon catalog, such as the ASIN.
     * @member {ItemIdentifiersByMarketplace[]} identifiers
     * @type {ItemIdentifiersByMarketplace[]}
     */
    identifiers: ItemIdentifiersByMarketplace[];
}
export namespace ListingsItemSubmissionResponse {
    namespace StatusEnum {
        let ACCEPTED: string;
        let INVALID: string;
        let VALID: string;
    }
    /**
     * *
     */
    type StatusEnum = string;
}
import { Issue } from './Issue.js';
import { ItemIdentifiersByMarketplace } from './ItemIdentifiersByMarketplace.js';
//# sourceMappingURL=ListingsItemSubmissionResponse.d.ts.map