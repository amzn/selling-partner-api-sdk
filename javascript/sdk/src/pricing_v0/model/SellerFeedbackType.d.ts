/**
 * The SellerFeedbackType model module.
 * @module pricing_v0/model/SellerFeedbackType
 * @version v0
 */
export class SellerFeedbackType {
    /**
     * Constructs a <code>SellerFeedbackType</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {SellerFeedbackType} obj Optional instance to populate.
     * @return {SellerFeedbackType} The populated <code>SellerFeedbackType</code> instance.
     */
    static constructFromObject(data: any, obj: SellerFeedbackType): SellerFeedbackType;
    /**
     * Constructs a new <code>SellerFeedbackType</code>.
     * Information about the seller&#39;s feedback, including the percentage of positive feedback, and the total number of ratings received.
     * @alias module:pricing_v0/model/SellerFeedbackType
     * @class
     * @param feedbackCount {Number} The number of ratings received about the seller.
     */
    constructor(feedbackCount: number);
    feedbackCount: number;
    /**
     * The percentage of positive feedback for the seller in the past 365 days.
     * @member {Number} sellerPositiveFeedbackRating
     * @type {Number}
     */
    sellerPositiveFeedbackRating: number;
}
//# sourceMappingURL=SellerFeedbackType.d.ts.map