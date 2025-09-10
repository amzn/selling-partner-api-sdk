/**
 * The LabelData model module.
 * @module vendorshipments_v1/model/LabelData
 * @version v1
 */
export class LabelData {
    /**
     * Constructs a <code>LabelData</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {LabelData} obj Optional instance to populate.
     * @return {LabelData} The populated <code>LabelData</code> instance.
     */
    static constructFromObject(data: any, obj: LabelData): LabelData;
    /**
     * A sequential number assigned to each label within a shipment.
     * @member {Number} labelSequenceNumber
     * @type {Number}
     */
    labelSequenceNumber: number;
    /**
     * The format of the label.
     * @member {String} labelFormat
     * @type {String}
     */
    labelFormat: string;
    /**
     * Unique identification of the carrier.
     * @member {String} carrierCode
     * @type {String}
     */
    carrierCode: string;
    /**
     * Tracking Id for the transportation.
     * @member {String} trackingId
     * @type {String}
     */
    trackingId: string;
    /**
     * The base-64 encoded string that represents the shipment label.
     * @member {String} label
     * @type {String}
     */
    label: string;
}
export namespace LabelData {
    namespace LabelFormatEnum {
        let PDF: string;
    }
    /**
     * *
     */
    type LabelFormatEnum = string;
}
//# sourceMappingURL=LabelData.d.ts.map