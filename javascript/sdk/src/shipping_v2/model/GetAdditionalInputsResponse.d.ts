/**
 * The GetAdditionalInputsResponse model module.
 * @module shipping_v2/model/GetAdditionalInputsResponse
 * @version v2
 */
export class GetAdditionalInputsResponse {
    /**
     * Constructs a <code>GetAdditionalInputsResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {GetAdditionalInputsResponse} obj Optional instance to populate.
     * @return {GetAdditionalInputsResponse} The populated <code>GetAdditionalInputsResponse</code> instance.
     */
    static constructFromObject(data: any, obj: GetAdditionalInputsResponse): GetAdditionalInputsResponse;
    /**
     * The JSON schema to use to provide additional inputs when required to purchase a shipping offering.
     * @member {{String: Object}} payload
     * @type {{String: Object}}
     */
    payload: {
        String: any;
    };
}
//# sourceMappingURL=GetAdditionalInputsResponse.d.ts.map