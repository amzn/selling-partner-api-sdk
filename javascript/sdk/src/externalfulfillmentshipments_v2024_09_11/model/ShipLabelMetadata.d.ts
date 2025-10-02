/**
 * The ShipLabelMetadata model module.
 * @module externalfulfillmentshipments_v2024_09_11/model/ShipLabelMetadata
 * @version 2024-09-11
 */
export class ShipLabelMetadata {
    /**
     * Constructs a <code>ShipLabelMetadata</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {ShipLabelMetadata} obj Optional instance to populate.
     * @return {ShipLabelMetadata} The populated <code>ShipLabelMetadata</code> instance.
     */
    static constructFromObject(data: any, obj: ShipLabelMetadata): ShipLabelMetadata;
    /**
     * Constructs a new <code>ShipLabelMetadata</code>.
     * Metadata for a ship label document.
     * @alias module:externalfulfillmentshipments_v2024_09_11/model/ShipLabelMetadata
     * @class
     * @param carrierName {String} The name of the carrier.
     * @param trackingId {String} The tracking number of the package.
     */
    constructor(carrierName: string, trackingId: string);
    carrierName: string;
    trackingId: string;
    /**
     * The selected slot for the ship label.
     * @member {String} shippingOptionId
     * @type {String}
     */
    shippingOptionId: string;
    /**
     * @member {TimeWindow} pickupWindow
     * @type {TimeWindow}
     */
    pickupWindow: TimeWindow;
    /**
     * @member {TimeWindow} timeSlot
     * @type {TimeWindow}
     */
    timeSlot: TimeWindow;
}
import { TimeWindow } from './TimeWindow.js';
//# sourceMappingURL=ShipLabelMetadata.d.ts.map