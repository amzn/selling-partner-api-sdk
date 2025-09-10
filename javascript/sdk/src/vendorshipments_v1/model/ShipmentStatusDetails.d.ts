/**
 * The ShipmentStatusDetails model module.
 * @module vendorshipments_v1/model/ShipmentStatusDetails
 * @version v1
 */
export class ShipmentStatusDetails {
    /**
     * Constructs a <code>ShipmentStatusDetails</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {ShipmentStatusDetails} obj Optional instance to populate.
     * @return {ShipmentStatusDetails} The populated <code>ShipmentStatusDetails</code> instance.
     */
    static constructFromObject(data: any, obj: ShipmentStatusDetails): ShipmentStatusDetails;
    /**
     * Current status of the shipment on whether it is picked up or scheduled.
     * @member {String} shipmentStatus
     * @type {String}
     */
    shipmentStatus: string;
    /**
     * Date and time on last status update received for the shipment
     * @member {Date} shipmentStatusDate
     * @type {Date}
     */
    shipmentStatusDate: Date;
}
export namespace ShipmentStatusDetails {
    namespace ShipmentStatusEnum {
        let Created: string;
        let TransportationRequested: string;
        let CarrierAssigned: string;
        let Shipped: string;
    }
    /**
     * *
     */
    type ShipmentStatusEnum = string;
}
//# sourceMappingURL=ShipmentStatusDetails.d.ts.map