/**
 * The RejectionReason model module.
 * @module orders_v0/model/RejectionReason
 * @version v0
 */
export class RejectionReason {
    /**
     * Constructs a <code>RejectionReason</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {RejectionReason} obj Optional instance to populate.
     * @return {RejectionReason} The populated <code>RejectionReason</code> instance.
     */
    static constructFromObject(data: any, obj: RejectionReason): RejectionReason;
    /**
     * Constructs a new <code>RejectionReason</code>.
     * The reason for rejecting the order&#39;s regulated information. This is only present if the order is rejected.
     * @alias module:orders_v0/model/RejectionReason
     * @class
     * @param rejectionReasonId {String} The unique identifier for the rejection reason.
     * @param rejectionReasonDescription {String} The description of this rejection reason.
     */
    constructor(rejectionReasonId: string, rejectionReasonDescription: string);
    rejectionReasonId: string;
    rejectionReasonDescription: string;
}
//# sourceMappingURL=RejectionReason.d.ts.map