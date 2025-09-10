/**
 * The CreateConfirmOrderDetailsRequest model module.
 * @module messaging_v1/model/CreateConfirmOrderDetailsRequest
 * @version v1
 */
export class CreateConfirmOrderDetailsRequest {
    /**
     * Constructs a <code>CreateConfirmOrderDetailsRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {CreateConfirmOrderDetailsRequest} obj Optional instance to populate.
     * @return {CreateConfirmOrderDetailsRequest} The populated <code>CreateConfirmOrderDetailsRequest</code> instance.
     */
    static constructFromObject(data: any, obj: CreateConfirmOrderDetailsRequest): CreateConfirmOrderDetailsRequest;
    /**
     * The text to be sent to the buyer. Only links related to order completion are allowed. Do not include HTML or email addresses. The text must be written in the buyer's language of preference, which can be retrieved from the GetAttributes operation.
     * @member {String} text
     * @type {String}
     */
    text: string;
}
//# sourceMappingURL=CreateConfirmOrderDetailsRequest.d.ts.map