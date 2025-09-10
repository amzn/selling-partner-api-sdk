/**
 * The ShipmentDates model module.
 * @module vendordforders_v2021_12_28/model/ShipmentDates
 * @version 2021-12-28
 */
export class ShipmentDates {
    /**
     * Constructs a <code>ShipmentDates</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {ShipmentDates} obj Optional instance to populate.
     * @return {ShipmentDates} The populated <code>ShipmentDates</code> instance.
     */
    static constructFromObject(data: any, obj: ShipmentDates): ShipmentDates;
    /**
     * Constructs a new <code>ShipmentDates</code>.
     * Shipment dates.
     * @alias module:vendordforders_v2021_12_28/model/ShipmentDates
     * @class
     * @param requiredShipDate {Date} Time by which the vendor is required to ship the order.
     */
    constructor(requiredShipDate: Date);
    requiredShipDate: Date;
    /**
     * Delivery date promised to the Amazon customer.
     * @member {Date} promisedDeliveryDate
     * @type {Date}
     */
    promisedDeliveryDate: Date;
}
//# sourceMappingURL=ShipmentDates.d.ts.map