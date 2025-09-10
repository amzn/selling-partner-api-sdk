/**
 * The CreateConfirmServiceDetailsRequest model module.
 * @module messaging_v1/model/CreateConfirmServiceDetailsRequest
 * @version v1
 */
export class CreateConfirmServiceDetailsRequest {
    /**
     * Constructs a <code>CreateConfirmServiceDetailsRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {CreateConfirmServiceDetailsRequest} obj Optional instance to populate.
     * @return {CreateConfirmServiceDetailsRequest} The populated <code>CreateConfirmServiceDetailsRequest</code> instance.
     */
    static constructFromObject(data: any, obj: CreateConfirmServiceDetailsRequest): CreateConfirmServiceDetailsRequest;
    /**
     * The text to be sent to the buyer. Only links related to Home Service calls are allowed. Do not include HTML or email addresses. The text must be written in the buyer's language of preference, which can be retrieved from the GetAttributes operation.
     * @member {String} text
     * @type {String}
     */
    text: string;
}
//# sourceMappingURL=CreateConfirmServiceDetailsRequest.d.ts.map