/**
 * The CreateRestrictedDataTokenResponse model module.
 * @module tokens_v2021_03_01/model/CreateRestrictedDataTokenResponse
 * @version 2021-03-01
 */
export class CreateRestrictedDataTokenResponse {
    /**
     * Constructs a <code>CreateRestrictedDataTokenResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {CreateRestrictedDataTokenResponse} obj Optional instance to populate.
     * @return {CreateRestrictedDataTokenResponse} The populated <code>CreateRestrictedDataTokenResponse</code> instance.
     */
    static constructFromObject(data: any, obj: CreateRestrictedDataTokenResponse): CreateRestrictedDataTokenResponse;
    /**
     * A Restricted Data Token (RDT). This is a short-lived access token that authorizes calls to restricted operations. Pass this value with the x-amz-access-token header when making subsequent calls to these restricted resources.
     * @member {String} restrictedDataToken
     * @type {String}
     */
    restrictedDataToken: string;
    /**
     * The lifetime of the Restricted Data Token, in seconds.
     * @member {Number} expiresIn
     * @type {Number}
     */
    expiresIn: number;
}
//# sourceMappingURL=CreateRestrictedDataTokenResponse.d.ts.map