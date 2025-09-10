/**
 * The TransportLabel model module.
 * @module vendorshipments_v1/model/TransportLabel
 * @version v1
 */
export class TransportLabel {
    /**
     * Constructs a <code>TransportLabel</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {TransportLabel} obj Optional instance to populate.
     * @return {TransportLabel} The populated <code>TransportLabel</code> instance.
     */
    static constructFromObject(data: any, obj: TransportLabel): TransportLabel;
    /**
     * Date on which label is created.
     * @member {Date} labelCreateDateTime
     * @type {Date}
     */
    labelCreateDateTime: Date;
    /**
     * @member {ShipmentInformation} shipmentInformation
     * @type {ShipmentInformation}
     */
    shipmentInformation: ShipmentInformation;
    /**
     * Indicates the label data,format and type associated .
     * @member {[LabelData]} labelData
     * @type {[LabelData]}
     */
    labelData: [LabelData];
}
import { ShipmentInformation } from './ShipmentInformation.js';
import { LabelData } from './LabelData.js';
//# sourceMappingURL=TransportLabel.d.ts.map