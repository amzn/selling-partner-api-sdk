/**
 * The LtlTrackingDetailInput model module.
 * @module fulfillmentinbound_v2024_03_20/model/LtlTrackingDetailInput
 * @version 2024-03-20
 */
export class LtlTrackingDetailInput {
    /**
     * Constructs a <code>LtlTrackingDetailInput</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {LtlTrackingDetailInput} obj Optional instance to populate.
     * @return {LtlTrackingDetailInput} The populated <code>LtlTrackingDetailInput</code> instance.
     */
    static constructFromObject(data: any, obj: LtlTrackingDetailInput): LtlTrackingDetailInput;
    /**
     * Constructs a new <code>LtlTrackingDetailInput</code>.
     * Contains input information to update Less-Than-Truckload (LTL) tracking information.
     * @alias module:fulfillmentinbound_v2024_03_20/model/LtlTrackingDetailInput
     * @class
     * @param freightBillNumber {[String]} Number associated with the freight bill.
     */
    constructor(freightBillNumber: [string]);
    freightBillNumber: [string];
    /**
     * The number of the carrier shipment acknowledgement document.
     * @member {String} billOfLadingNumber
     * @type {String}
     */
    billOfLadingNumber: string;
}
//# sourceMappingURL=LtlTrackingDetailInput.d.ts.map