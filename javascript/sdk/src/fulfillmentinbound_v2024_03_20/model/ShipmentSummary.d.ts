/**
 * The ShipmentSummary model module.
 * @module fulfillmentinbound_v2024_03_20/model/ShipmentSummary
 * @version 2024-03-20
 */
export class ShipmentSummary {
    /**
     * Constructs a <code>ShipmentSummary</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {ShipmentSummary} obj Optional instance to populate.
     * @return {ShipmentSummary} The populated <code>ShipmentSummary</code> instance.
     */
    static constructFromObject(data: any, obj: ShipmentSummary): ShipmentSummary;
    /**
     * Constructs a new <code>ShipmentSummary</code>.
     * Summary information about a shipment.
     * @alias module:fulfillmentinbound_v2024_03_20/model/ShipmentSummary
     * @class
     * @param shipmentId {String} Identifier of a shipment. A shipment contains the boxes and units being inbounded.
     * @param status {String} The status of a shipment. The state of the shipment will typically start as `UNCONFIRMED`, then transition to `WORKING` after a placement option has been confirmed, and then to `READY_TO_SHIP` once labels are generated.  Possible values: `ABANDONED`, `CANCELLED`, `CHECKED_IN`, `CLOSED`, `DELETED`, `DELIVERED`, `IN_TRANSIT`, `MIXED`, `READY_TO_SHIP`, `RECEIVING`, `SHIPPED`, `UNCONFIRMED`, `WORKING`
     */
    constructor(shipmentId: string, status: string);
    shipmentId: string;
    status: string;
}
//# sourceMappingURL=ShipmentSummary.d.ts.map