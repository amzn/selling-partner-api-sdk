/**
 * The LtlTrackingDetail model module.
 * @module fulfillmentinbound_v2024_03_20/model/LtlTrackingDetail
 * @version 2024-03-20
 */
export class LtlTrackingDetail {
    /**
     * Constructs a <code>LtlTrackingDetail</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {LtlTrackingDetail} obj Optional instance to populate.
     * @return {LtlTrackingDetail} The populated <code>LtlTrackingDetail</code> instance.
     */
    static constructFromObject(data: any, obj: LtlTrackingDetail): LtlTrackingDetail;
    /**
     * The number of the carrier shipment acknowledgement document.
     * @member {String} billOfLadingNumber
     * @type {String}
     */
    billOfLadingNumber: string;
    /**
     * The number associated with the freight bill.
     * @member {[String]} freightBillNumber
     * @type {[String]}
     */
    freightBillNumber: [string];
}
//# sourceMappingURL=LtlTrackingDetail.d.ts.map