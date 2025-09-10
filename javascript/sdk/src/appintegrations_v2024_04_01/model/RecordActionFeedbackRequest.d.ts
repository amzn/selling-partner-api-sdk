/**
 * The RecordActionFeedbackRequest model module.
 * @module appintegrations_v2024_04_01/model/RecordActionFeedbackRequest
 * @version 2024-04-01
 */
export class RecordActionFeedbackRequest {
    /**
     * Constructs a <code>RecordActionFeedbackRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {RecordActionFeedbackRequest} obj Optional instance to populate.
     * @return {RecordActionFeedbackRequest} The populated <code>RecordActionFeedbackRequest</code> instance.
     */
    static constructFromObject(data: any, obj: RecordActionFeedbackRequest): RecordActionFeedbackRequest;
    /**
     * Constructs a new <code>RecordActionFeedbackRequest</code>.
     * The request for the &#x60;recordActionFeedback&#x60; operation.
     * @alias module:appintegrations_v2024_04_01/model/RecordActionFeedbackRequest
     * @class
     * @param feedbackActionCode {String} The unique identifier for each notification status.
     */
    constructor(feedbackActionCode: string);
    feedbackActionCode: string;
}
export namespace RecordActionFeedbackRequest {
    namespace FeedbackActionCodeEnum {
        let SELLER_ACTION_COMPLETED: string;
    }
    /**
     * *
     */
    type FeedbackActionCodeEnum = string;
}
//# sourceMappingURL=RecordActionFeedbackRequest.d.ts.map