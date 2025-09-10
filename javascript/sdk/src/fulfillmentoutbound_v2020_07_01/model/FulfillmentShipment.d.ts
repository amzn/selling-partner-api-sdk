/**
 * The FulfillmentShipment model module.
 * @module fulfillmentoutbound_v2020_07_01/model/FulfillmentShipment
 * @version 2020-07-01
 */
export class FulfillmentShipment {
    /**
     * Constructs a <code>FulfillmentShipment</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {FulfillmentShipment} obj Optional instance to populate.
     * @return {FulfillmentShipment} The populated <code>FulfillmentShipment</code> instance.
     */
    static constructFromObject(data: any, obj: FulfillmentShipment): FulfillmentShipment;
    /**
     * Constructs a new <code>FulfillmentShipment</code>.
     * Delivery and item information for a shipment in a fulfillment order.
     * @alias module:fulfillmentoutbound_v2020_07_01/model/FulfillmentShipment
     * @class
     * @param amazonShipmentId {String} A shipment identifier assigned by Amazon.
     * @param fulfillmentCenterId {String} An identifier for the fulfillment center from which the shipment is sent.
     * @param fulfillmentShipmentStatus {String} The current status of the shipment.
     * @param fulfillmentShipmentItem {[FulfillmentShipmentItem]} An array of fulfillment shipment item information.
     */
    constructor(amazonShipmentId: string, fulfillmentCenterId: string, fulfillmentShipmentStatus: string, fulfillmentShipmentItem: [FulfillmentShipmentItem]);
    amazonShipmentId: string;
    fulfillmentCenterId: string;
    fulfillmentShipmentStatus: string;
    fulfillmentShipmentItem: [FulfillmentShipmentItem];
    /**
     * Date timestamp
     * @member {Date} shippingDate
     * @type {Date}
     */
    shippingDate: Date;
    /**
     * Date timestamp
     * @member {Date} estimatedArrivalDate
     * @type {Date}
     */
    estimatedArrivalDate: Date;
    /**
     * Provides additional insight into shipment timeline. Primarily used to communicate that actual delivery dates aren't available.
     * @member {[String]} shippingNotes
     * @type {[String]}
     */
    shippingNotes: [string];
    /**
     * An array of fulfillment shipment package information.
     * @member {[FulfillmentShipmentPackage]} fulfillmentShipmentPackage
     * @type {[FulfillmentShipmentPackage]}
     */
    fulfillmentShipmentPackage: [FulfillmentShipmentPackage];
}
export namespace FulfillmentShipment {
    namespace FulfillmentShipmentStatusEnum {
        let PENDING: string;
        let SHIPPED: string;
        let CANCELLED_BY_FULFILLER: string;
        let CANCELLED_BY_SELLER: string;
    }
    /**
     * *
     */
    type FulfillmentShipmentStatusEnum = string;
}
import { FulfillmentShipmentItem } from './FulfillmentShipmentItem.js';
import { FulfillmentShipmentPackage } from './FulfillmentShipmentPackage.js';
//# sourceMappingURL=FulfillmentShipment.d.ts.map