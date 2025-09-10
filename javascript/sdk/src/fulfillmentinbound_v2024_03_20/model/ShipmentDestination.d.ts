/**
 * The ShipmentDestination model module.
 * @module fulfillmentinbound_v2024_03_20/model/ShipmentDestination
 * @version 2024-03-20
 */
export class ShipmentDestination {
    /**
     * Constructs a <code>ShipmentDestination</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {ShipmentDestination} obj Optional instance to populate.
     * @return {ShipmentDestination} The populated <code>ShipmentDestination</code> instance.
     */
    static constructFromObject(data: any, obj: ShipmentDestination): ShipmentDestination;
    /**
     * Constructs a new <code>ShipmentDestination</code>.
     * The Amazon fulfillment center address and warehouse ID.
     * @alias module:fulfillmentinbound_v2024_03_20/model/ShipmentDestination
     * @class
     * @param destinationType {String} The type of destination for this shipment. Possible values: `AMAZON_OPTIMIZED`, `AMAZON_WAREHOUSE`.
     */
    constructor(destinationType: string);
    destinationType: string;
    /**
     * @member {Address} address
     * @type {Address}
     */
    address: Address;
    /**
     * The warehouse that the shipment should be sent to. This can be empty if the destination type is `AMAZON_OPTIMIZED`.
     * @member {String} warehouseId
     * @type {String}
     */
    warehouseId: string;
}
import { Address } from './Address.js';
//# sourceMappingURL=ShipmentDestination.d.ts.map