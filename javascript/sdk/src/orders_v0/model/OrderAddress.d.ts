/**
 * The OrderAddress model module.
 * @module orders_v0/model/OrderAddress
 * @version v0
 */
export class OrderAddress {
    /**
     * Constructs a <code>OrderAddress</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {OrderAddress} obj Optional instance to populate.
     * @return {OrderAddress} The populated <code>OrderAddress</code> instance.
     */
    static constructFromObject(data: any, obj: OrderAddress): OrderAddress;
    /**
     * Constructs a new <code>OrderAddress</code>.
     * The shipping address for the order.
     * @alias module:orders_v0/model/OrderAddress
     * @class
     * @param amazonOrderId {String} An Amazon-defined order identifier, in 3-7-7 format.
     */
    constructor(amazonOrderId: string);
    amazonOrderId: string;
    /**
     * The company name of the contact buyer. For IBA orders, the buyer company must be Amazon entities.
     * @member {String} buyerCompanyName
     * @type {String}
     */
    buyerCompanyName: string;
    /**
     * @member {Address} shippingAddress
     * @type {Address}
     */
    shippingAddress: Address;
    /**
     * @member {DeliveryPreferences} deliveryPreferences
     * @type {DeliveryPreferences}
     */
    deliveryPreferences: DeliveryPreferences;
}
import { Address } from './Address.js';
import { DeliveryPreferences } from './DeliveryPreferences.js';
//# sourceMappingURL=OrderAddress.d.ts.map