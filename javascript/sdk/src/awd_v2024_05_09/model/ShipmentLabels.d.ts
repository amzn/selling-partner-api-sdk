/**
 * The ShipmentLabels model module.
 * @module awd_v2024_05_09/model/ShipmentLabels
 * @version 2024-05-09
 */
export class ShipmentLabels {
    /**
     * Constructs a <code>ShipmentLabels</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {ShipmentLabels} obj Optional instance to populate.
     * @return {ShipmentLabels} The populated <code>ShipmentLabels</code> instance.
     */
    static constructFromObject(data: any, obj: ShipmentLabels): ShipmentLabels;
    /**
     * Constructs a new <code>ShipmentLabels</code>.
     * Shipment labels.
     * @alias module:awd_v2024_05_09/model/ShipmentLabels
     * @class
     * @param labelStatus {LabelStatus}
     */
    constructor(labelStatus: LabelStatus);
    labelStatus: LabelStatus;
    /**
     * The URL to download shipment labels. The URL is active for 600 seconds from generation.
     * @member {String} labelDownloadURL
     * @type {String}
     */
    labelDownloadURL: string;
}
import { LabelStatus } from './LabelStatus.js';
//# sourceMappingURL=ShipmentLabels.d.ts.map