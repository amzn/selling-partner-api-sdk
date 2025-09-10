/**
 * The ItemProcurement model module.
 * @module listingsitems_v2021_08_01/model/ItemProcurement
 * @version 2021-08-01
 */
export class ItemProcurement {
    /**
     * Constructs a <code>ItemProcurement</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {ItemProcurement} obj Optional instance to populate.
     * @return {ItemProcurement} The populated <code>ItemProcurement</code> instance.
     */
    static constructFromObject(data: any, obj: ItemProcurement): ItemProcurement;
    /**
     * Constructs a new <code>ItemProcurement</code>.
     * The vendor procurement information for the listings item.
     * @alias module:listingsitems_v2021_08_01/model/ItemProcurement
     * @class
     * @param costPrice {Money}
     */
    constructor(costPrice: Money);
    costPrice: Money;
}
import { Money } from './Money.js';
//# sourceMappingURL=ItemProcurement.d.ts.map