/**
 * The AcknowledgementStatus model module.
 * @module vendordforders_v2021_12_28/model/AcknowledgementStatus
 * @version 2021-12-28
 */
export class AcknowledgementStatus {
    /**
     * Constructs a <code>AcknowledgementStatus</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {AcknowledgementStatus} obj Optional instance to populate.
     * @return {AcknowledgementStatus} The populated <code>AcknowledgementStatus</code> instance.
     */
    static constructFromObject(data: any, obj: AcknowledgementStatus): AcknowledgementStatus;
    /**
     * Acknowledgement code is a unique two digit value which indicates the status of the acknowledgement. For a list of acknowledgement codes that Amazon supports, see the Vendor Direct Fulfillment APIs Use Case Guide.
     * @member {String} code
     * @type {String}
     */
    code: string;
    /**
     * Reason for the acknowledgement code.
     * @member {String} description
     * @type {String}
     */
    description: string;
}
//# sourceMappingURL=AcknowledgementStatus.d.ts.map