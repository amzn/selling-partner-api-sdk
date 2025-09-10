/**
 * The ItemDelivery model module.
 * @module services_v1/model/ItemDelivery
 * @version v1
 */
export class ItemDelivery {
    /**
     * Constructs a <code>ItemDelivery</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {ItemDelivery} obj Optional instance to populate.
     * @return {ItemDelivery} The populated <code>ItemDelivery</code> instance.
     */
    static constructFromObject(data: any, obj: ItemDelivery): ItemDelivery;
    /**
     * The date and time of the latest Estimated Delivery Date (EDD) of all the items with an EDD. In ISO 8601 format.
     * @member {Date} estimatedDeliveryDate
     * @type {Date}
     */
    estimatedDeliveryDate: Date;
    /**
     * @member {ItemDeliveryPromise} itemDeliveryPromise
     * @type {ItemDeliveryPromise}
     */
    itemDeliveryPromise: ItemDeliveryPromise;
}
import { ItemDeliveryPromise } from './ItemDeliveryPromise.js';
//# sourceMappingURL=ItemDelivery.d.ts.map