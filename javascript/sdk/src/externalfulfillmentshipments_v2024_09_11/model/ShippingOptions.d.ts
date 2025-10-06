/**
 * The ShippingOptions model module.
 * @module externalfulfillmentshipments_v2024_09_11/model/ShippingOptions
 * @version 2024-09-11
 */
export class ShippingOptions {
    /**
     * Constructs a <code>ShippingOptions</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {ShippingOptions} obj Optional instance to populate.
     * @return {ShippingOptions} The populated <code>ShippingOptions</code> instance.
     */
    static constructFromObject(data: any, obj: ShippingOptions): ShippingOptions;
    /**
     * Constructs a new <code>ShippingOptions</code>.
     * Shipping options for a single package.
     * @alias module:externalfulfillmentshipments_v2024_09_11/model/ShippingOptions
     * @class
     * @param shippingOptionId {String} An identifier for the shipping option.
     * @param shipBy {String} The shipper type.
     */
    constructor(shippingOptionId: string, shipBy: string);
    shippingOptionId: string;
    shipBy: string;
    /**
     * The carrier name for the offering.
     * @member {String} carrierName
     * @type {String}
     */
    carrierName: string;
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
export namespace ShippingOptions {
    namespace ShipByEnum {
        let MARKETPLACE: string;
        let SELLER: string;
        let THIRD_PARTY_CARRIER: string;
        let OTHER: string;
    }
    /**
     * *
     */
    type ShipByEnum = string;
}
import { TimeWindow } from './TimeWindow.js';
//# sourceMappingURL=ShippingOptions.d.ts.map