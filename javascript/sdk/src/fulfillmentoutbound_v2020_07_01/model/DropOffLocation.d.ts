/**
 * The DropOffLocation model module.
 * @module fulfillmentoutbound_v2020_07_01/model/DropOffLocation
 * @version 2020-07-01
 */
export class DropOffLocation {
    /**
     * Constructs a <code>DropOffLocation</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {DropOffLocation} obj Optional instance to populate.
     * @return {DropOffLocation} The populated <code>DropOffLocation</code> instance.
     */
    static constructFromObject(data: Object, obj: DropOffLocation): DropOffLocation;
    /**
     * Constructs a new <code>DropOffLocation</code>.
     * The drop-off location at the destination address.
     * @alias module:fulfillmentoutbound_v2020_07_01/model/DropOffLocation
     * @class
     * @param type {String} The drop-off location type at the destination address.
     */
    constructor(type: string);
    type: string;
    /**
     * Additional information about the drop-off location. This information can vary depending on the type of drop-off location specified in the `type` field.  If the `type` is set to `FALLBACK_NEIGHBOR_DELIVERY`, the `attributes` object must include the keys `neighborName` and `houseNumber` to provide the name and house number of the designated neighbor.  For `RECEPTIONIST` type, the `attributes` object may include a `recipientName` field that contains the name of the person who received or will receive the package.
     * @member {Object} attributes
     * @type {Object}
     */
    attributes: Object;
}
export namespace DropOffLocation {
    namespace TypeEnum {
        let FRONT_DOOR: string;
        let DELIVERY_BOX: string;
        let GAS_METER_BOX: string;
        let BICYCLE_BASKET: string;
        let GARAGE: string;
        let RECEPTIONIST: string;
        let FALLBACK_NEIGHBOR_DELIVERY: string;
        let DO_NOT_LEAVE_UNATTENDED: string;
    }
    /**
     * *
     */
    type TypeEnum = string;
}
//# sourceMappingURL=DropOffLocation.d.ts.map