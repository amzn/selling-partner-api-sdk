/**
 * The InitiatePayoutRequest model module.
 * @module transfers_v2024_06_01/model/InitiatePayoutRequest
 * @version 2024-06-01
 */
export class InitiatePayoutRequest {
    /**
     * Constructs a <code>InitiatePayoutRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {InitiatePayoutRequest} obj Optional instance to populate.
     * @return {InitiatePayoutRequest} The populated <code>InitiatePayoutRequest</code> instance.
     */
    static constructFromObject(data: any, obj: InitiatePayoutRequest): InitiatePayoutRequest;
    /**
     * Constructs a new <code>InitiatePayoutRequest</code>.
     * The request schema for the &#x60;initiatePayout&#x60; operation.
     * @alias module:transfers_v2024_06_01/model/InitiatePayoutRequest
     * @class
     * @param marketplaceId {String} The identifier of the Amazon marketplace. For the list of all marketplace IDs, refer to [Marketplace IDs](https://developer-docs.amazon.com/sp-api/docs/marketplace-ids).
     * @param accountType {String} The account type in the selected marketplace for which a payout must be initiated. For supported EU marketplaces, the only account type is `Standard Orders`.
     */
    constructor(marketplaceId: string, accountType: string);
    marketplaceId: string;
    accountType: string;
}
//# sourceMappingURL=InitiatePayoutRequest.d.ts.map