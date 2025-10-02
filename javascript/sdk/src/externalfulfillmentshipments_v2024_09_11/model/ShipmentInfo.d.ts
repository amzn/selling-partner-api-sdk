/**
 * The ShipmentInfo model module.
 * @module externalfulfillmentshipments_v2024_09_11/model/ShipmentInfo
 * @version 2024-09-11
 */
export class ShipmentInfo {
    /**
     * Constructs a <code>ShipmentInfo</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {ShipmentInfo} obj Optional instance to populate.
     * @return {ShipmentInfo} The populated <code>ShipmentInfo</code> instance.
     */
    static constructFromObject(data: any, obj: ShipmentInfo): ShipmentInfo;
    /**
     * Constructs a new <code>ShipmentInfo</code>.
     * High-level details of the shipment.
     * @alias module:externalfulfillmentshipments_v2024_09_11/model/ShipmentInfo
     * @class
     * @param shipmentType {String} The type of shipment.
     * @param numberOfUnits {Number} Total number of units in the shipment.
     * @param priority {Priority}
     * @param buyerOrderId {String} The buyer's order ID.
     */
    constructor(shipmentType: string, numberOfUnits: number, priority: Priority, buyerOrderId: string);
    shipmentType: string;
    numberOfUnits: number;
    priority: Priority;
    buyerOrderId: string;
    /**
     * @member {ReplacedShipmentInfo} originalShipmentInfo
     * @type {ReplacedShipmentInfo}
     */
    originalShipmentInfo: ReplacedShipmentInfo;
    /**
     * A list of order statuses for which the marketplace allows order rejection (seller cancellation). If the order has a status that does not belong to this list, then seller cancellation is not possible.
     * @member {[String]} orderStatesEligibleForRejection
     * @type {[String]}
     */
    orderStatesEligibleForRejection: [string];
    /**
     * The timestamp of when the order was placed, in UTC
     * @member {String} orderPlacedTimestamp
     * @type {String}
     */
    orderPlacedTimestamp: string;
    /**
     * The source of the order operation.
     * @member {String} processingSource
     * @type {String}
     */
    processingSource: string;
}
export namespace ShipmentInfo {
    namespace ShipmentTypeEnum {
        let NEW: string;
        let EXCHANGE: string;
        let REPLACEMENT: string;
    }
    /**
     * *
     */
    type ShipmentTypeEnum = string;
    namespace ProcessingSourceEnum {
        let EXTERNAL_PLATFORM: string;
        let INTERNAL_PLATFORM: string;
    }
    /**
     * *
     */
    type ProcessingSourceEnum = string;
}
import { Priority } from './Priority.js';
import { ReplacedShipmentInfo } from './ReplacedShipmentInfo.js';
//# sourceMappingURL=ShipmentInfo.d.ts.map