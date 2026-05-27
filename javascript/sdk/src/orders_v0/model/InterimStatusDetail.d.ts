/**
 * The InterimStatusDetail model module.
 * @module orders_v0/model/InterimStatusDetail
 * @version v0
 */
export class InterimStatusDetail {
    /**
     * Constructs a <code>InterimStatusDetail</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {InterimStatusDetail} obj Optional instance to populate.
     * @return {InterimStatusDetail} The populated <code>InterimStatusDetail</code> instance.
     */
    static constructFromObject(data: Object, obj: InterimStatusDetail): InterimStatusDetail;
    /**
     * Constructs a new <code>InterimStatusDetail</code>.
     * Interim status information provided during the verification process to share granular progress updates while an order is pending verification (for example, vet contacted through email).
     * @alias module:orders_v0/model/InterimStatusDetail
     * @class
     * @param statusCode {String} The identifier for the interim status type. Must be one of the `ValidInterimStatusCodes` values returned by the `getOrderRegulatedInfo` operation.
     * @param statusDateTime {Date} The date and time when this interim status was set, in [ISO 8601](https://developer-docs.amazon.com/sp-api/docs/iso-8601) date and time format.
     */
    constructor(statusCode: string, statusDateTime: Date);
    statusCode: string;
    statusDateTime: Date;
}
//# sourceMappingURL=InterimStatusDetail.d.ts.map