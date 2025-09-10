/**
 * The CreateProductReviewAndSellerFeedbackSolicitationResponse model module.
 * @module solicitations_v1/model/CreateProductReviewAndSellerFeedbackSolicitationResponse
 * @version v1
 */
export class CreateProductReviewAndSellerFeedbackSolicitationResponse {
    /**
     * Constructs a <code>CreateProductReviewAndSellerFeedbackSolicitationResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {CreateProductReviewAndSellerFeedbackSolicitationResponse} obj Optional instance to populate.
     * @return {CreateProductReviewAndSellerFeedbackSolicitationResponse} The populated <code>CreateProductReviewAndSellerFeedbackSolicitationResponse</code> instance.
     */
    static constructFromObject(data: any, obj: CreateProductReviewAndSellerFeedbackSolicitationResponse): CreateProductReviewAndSellerFeedbackSolicitationResponse;
    /**
     * A list of error responses returned when a request is unsuccessful.
     * @member {[Error]} errors
     * @type {[Error]}
     */
    errors: [Error];
}
import { Error } from './Error.js';
//# sourceMappingURL=CreateProductReviewAndSellerFeedbackSolicitationResponse.d.ts.map