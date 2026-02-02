/**
 * The Recipient model module.
 * @module orders_v2026_01_01/model/Recipient
 * @version 2026-01-01
 */
export class Recipient {
    /**
     * Constructs a <code>Recipient</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {Recipient} obj Optional instance to populate.
     * @return {Recipient} The populated <code>Recipient</code> instance.
     */
    static constructFromObject(data: any, obj: Recipient): Recipient;
    /**
     * @member {CustomerAddress} deliveryAddress
     * @type {CustomerAddress}
     */
    deliveryAddress: CustomerAddress;
    /**
     * @member {DeliveryPreference} deliveryPreference
     * @type {DeliveryPreference}
     */
    deliveryPreference: DeliveryPreference;
}
import { CustomerAddress } from './CustomerAddress.js';
import { DeliveryPreference } from './DeliveryPreference.js';
//# sourceMappingURL=Recipient.d.ts.map