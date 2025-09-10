/**
 * The InitiatePayoutResponse model module.
 * @module transfers_v2024_06_01/model/InitiatePayoutResponse
 * @version 2024-06-01
 */
export class InitiatePayoutResponse {
    /**
     * Constructs a <code>InitiatePayoutResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {InitiatePayoutResponse} obj Optional instance to populate.
     * @return {InitiatePayoutResponse} The populated <code>InitiatePayoutResponse</code> instance.
     */
    static constructFromObject(data: any, obj: InitiatePayoutResponse): InitiatePayoutResponse;
    /**
     * Constructs a new <code>InitiatePayoutResponse</code>.
     * The response schema for the &#x60;initiatePayout&#x60; operation.
     * @alias module:transfers_v2024_06_01/model/InitiatePayoutResponse
     * @class
     * @param payoutReferenceId {String} The financial event group ID for a successfully initiated payout. You can use this ID to track payout information.
     */
    constructor(payoutReferenceId: string);
    payoutReferenceId: string;
}
//# sourceMappingURL=InitiatePayoutResponse.d.ts.map