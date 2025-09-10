/**
 * The ShipmentSource model module.
 * @module fulfillmentinbound_v2024_03_20/model/ShipmentSource
 * @version 2024-03-20
 */
export class ShipmentSource {
    /**
     * Constructs a <code>ShipmentSource</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {ShipmentSource} obj Optional instance to populate.
     * @return {ShipmentSource} The populated <code>ShipmentSource</code> instance.
     */
    static constructFromObject(data: any, obj: ShipmentSource): ShipmentSource;
    /**
     * Constructs a new <code>ShipmentSource</code>.
     * Specifies the &#39;ship from&#39; address for the shipment.
     * @alias module:fulfillmentinbound_v2024_03_20/model/ShipmentSource
     * @class
     * @param sourceType {String} The type of source for this shipment. Possible values: `SELLER_FACILITY`.
     */
    constructor(sourceType: string);
    sourceType: string;
    /**
     * @member {Address} address
     * @type {Address}
     */
    address: Address;
}
import { Address } from './Address.js';
//# sourceMappingURL=ShipmentSource.d.ts.map