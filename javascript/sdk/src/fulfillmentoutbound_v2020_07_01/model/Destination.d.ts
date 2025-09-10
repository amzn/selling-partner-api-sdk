/**
 * The Destination model module.
 * @module fulfillmentoutbound_v2020_07_01/model/Destination
 * @version 2020-07-01
 */
export class Destination {
    /**
     * Constructs a <code>Destination</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {Destination} obj Optional instance to populate.
     * @return {Destination} The populated <code>Destination</code> instance.
     */
    static constructFromObject(data: any, obj: Destination): Destination;
    /**
     * @member {VariablePrecisionAddress} deliveryAddress
     * @type {VariablePrecisionAddress}
     */
    deliveryAddress: VariablePrecisionAddress;
    /**
     * An IP Address.
     * @member {String} ipAddress
     * @type {String}
     */
    ipAddress: string;
}
import { VariablePrecisionAddress } from './VariablePrecisionAddress.js';
//# sourceMappingURL=Destination.d.ts.map