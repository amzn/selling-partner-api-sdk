/**
 * The ShipmentLabelPageTypes model module.
 * @module awd_v2024_05_09/model/ShipmentLabelPageTypes
 * @version 2024-05-09
 */
export class ShipmentLabelPageTypes {
    /**
     * Constructs a <code>ShipmentLabelPageTypes</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {ShipmentLabelPageTypes} obj Optional instance to populate.
     * @return {ShipmentLabelPageTypes} The populated <code>ShipmentLabelPageTypes</code> instance.
     */
    static constructFromObject(data: Object, obj: ShipmentLabelPageTypes): ShipmentLabelPageTypes;
    /**
     * Constructs a new <code>ShipmentLabelPageTypes</code>.
     * Shipment label page types.
     * @alias module:awd_v2024_05_09/model/ShipmentLabelPageTypes
     * @class
     * @param labelStatus {LabelStatus}
     */
    constructor(labelStatus: LabelStatus);
    labelStatus: LabelStatus;
    /**
     * List of available page types.
     * @member {PageType[]} pageTypes
     * @type {PageType[]}
     */
    pageTypes: PageType[];
}
import { LabelStatus } from './LabelStatus.js';
import { PageType } from './PageType.js';
//# sourceMappingURL=ShipmentLabelPageTypes.d.ts.map