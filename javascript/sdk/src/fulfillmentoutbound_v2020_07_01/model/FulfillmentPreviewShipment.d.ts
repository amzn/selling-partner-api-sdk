/**
 * The FulfillmentPreviewShipment model module.
 * @module fulfillmentoutbound_v2020_07_01/model/FulfillmentPreviewShipment
 * @version 2020-07-01
 */
export class FulfillmentPreviewShipment {
    /**
     * Constructs a <code>FulfillmentPreviewShipment</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {FulfillmentPreviewShipment} obj Optional instance to populate.
     * @return {FulfillmentPreviewShipment} The populated <code>FulfillmentPreviewShipment</code> instance.
     */
    static constructFromObject(data: any, obj: FulfillmentPreviewShipment): FulfillmentPreviewShipment;
    /**
     * Constructs a new <code>FulfillmentPreviewShipment</code>.
     * Delivery and item information for a shipment in a fulfillment order preview.
     * @alias module:fulfillmentoutbound_v2020_07_01/model/FulfillmentPreviewShipment
     * @class
     * @param fulfillmentPreviewItems {FulfillmentPreviewItem[]} An array of fulfillment preview item information.
     */
    constructor(fulfillmentPreviewItems: FulfillmentPreviewItem[]);
    fulfillmentPreviewItems: FulfillmentPreviewItem[];
    /**
     * Date timestamp
     * @member {Date} earliestShipDate
     * @type {Date}
     */
    earliestShipDate: Date;
    /**
     * Date timestamp
     * @member {Date} latestShipDate
     * @type {Date}
     */
    latestShipDate: Date;
    /**
     * Date timestamp
     * @member {Date} earliestArrivalDate
     * @type {Date}
     */
    earliestArrivalDate: Date;
    /**
     * Date timestamp
     * @member {Date} latestArrivalDate
     * @type {Date}
     */
    latestArrivalDate: Date;
    /**
     * Provides additional insight into the shipment timeline when exact delivery dates are not able to be precomputed.
     * @member {String[]} shippingNotes
     * @type {String[]}
     */
    shippingNotes: string[];
}
import { FulfillmentPreviewItem } from './FulfillmentPreviewItem.js';
//# sourceMappingURL=FulfillmentPreviewShipment.d.ts.map