/**
 * The CreateClaimResponse model module.
 * @module shipping_v2/model/CreateClaimResponse
 * @version v2
 */
export class CreateClaimResponse {
    /**
     * Constructs a <code>CreateClaimResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {CreateClaimResponse} obj Optional instance to populate.
     * @return {CreateClaimResponse} The populated <code>CreateClaimResponse</code> instance.
     */
    static constructFromObject(data: any, obj: CreateClaimResponse): CreateClaimResponse;
    /**
     * The claim identifier originally returned by the createClaim operation.
     * @member {String} claimId
     * @type {String}
     */
    claimId: string;
}
//# sourceMappingURL=CreateClaimResponse.d.ts.map