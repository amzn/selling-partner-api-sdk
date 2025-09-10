/**
 * The CreateUnexpectedProblemRequest model module.
 * @module messaging_v1/model/CreateUnexpectedProblemRequest
 * @version v1
 */
export class CreateUnexpectedProblemRequest {
    /**
     * Constructs a <code>CreateUnexpectedProblemRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {CreateUnexpectedProblemRequest} obj Optional instance to populate.
     * @return {CreateUnexpectedProblemRequest} The populated <code>CreateUnexpectedProblemRequest</code> instance.
     */
    static constructFromObject(data: any, obj: CreateUnexpectedProblemRequest): CreateUnexpectedProblemRequest;
    /**
     * The text to be sent to the buyer. Only links related to unexpected problem calls are allowed. Do not include HTML or email addresses. The text must be written in the buyer's language of preference, which can be retrieved from the GetAttributes operation.
     * @member {String} text
     * @type {String}
     */
    text: string;
}
//# sourceMappingURL=CreateUnexpectedProblemRequest.d.ts.map