/**
 * The SubmitAcknowledgementRequest model module.
 * @module vendororders_v1/model/SubmitAcknowledgementRequest
 * @version v1
 */
export class SubmitAcknowledgementRequest {
    /**
     * Constructs a <code>SubmitAcknowledgementRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {SubmitAcknowledgementRequest} obj Optional instance to populate.
     * @return {SubmitAcknowledgementRequest} The populated <code>SubmitAcknowledgementRequest</code> instance.
     */
    static constructFromObject(data: any, obj: SubmitAcknowledgementRequest): SubmitAcknowledgementRequest;
    /**
     * An array of order acknowledgements to be submitted.
     * @member {Array[]} acknowledgements
     * @type {Array[]}
     */
    acknowledgements: any[][];
}
//# sourceMappingURL=SubmitAcknowledgementRequest.d.ts.map