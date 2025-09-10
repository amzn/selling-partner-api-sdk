/**
 * The PostContentDocumentApprovalSubmissionResponse model module.
 * @module apluscontent_v2020_11_01/model/PostContentDocumentApprovalSubmissionResponse
 * @version 2020-11-01
 */
export class PostContentDocumentApprovalSubmissionResponse {
    /**
     * Constructs a <code>PostContentDocumentApprovalSubmissionResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {PostContentDocumentApprovalSubmissionResponse} obj Optional instance to populate.
     * @return {PostContentDocumentApprovalSubmissionResponse} The populated <code>PostContentDocumentApprovalSubmissionResponse</code> instance.
     */
    static constructFromObject(data: any, obj: PostContentDocumentApprovalSubmissionResponse): PostContentDocumentApprovalSubmissionResponse;
    /**
     * A set of messages to the user, such as warnings or comments.
     * @member {[Error]} warnings
     * @type {[Error]}
     */
    warnings: [Error];
}
import { Error } from './Error.js';
//# sourceMappingURL=PostContentDocumentApprovalSubmissionResponse.d.ts.map