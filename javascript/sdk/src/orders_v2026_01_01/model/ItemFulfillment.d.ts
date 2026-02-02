/**
 * The ItemFulfillment model module.
 * @module orders_v2026_01_01/model/ItemFulfillment
 * @version 2026-01-01
 */
export class ItemFulfillment {
    /**
     * Constructs a <code>ItemFulfillment</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {ItemFulfillment} obj Optional instance to populate.
     * @return {ItemFulfillment} The populated <code>ItemFulfillment</code> instance.
     */
    static constructFromObject(data: any, obj: ItemFulfillment): ItemFulfillment;
    /**
     * The number of units of this item that have been successfully processed and shipped.
     * @member {Number} quantityFulfilled
     * @type {Number}
     */
    quantityFulfilled: number;
    /**
     * The number of units of this item that remain to be processed and shipped.
     * @member {Number} quantityUnfulfilled
     * @type {Number}
     */
    quantityUnfulfilled: number;
    /**
     * @member {ItemPicking} picking
     * @type {ItemPicking}
     */
    picking: ItemPicking;
    /**
     * @member {ItemPacking} packing
     * @type {ItemPacking}
     */
    packing: ItemPacking;
    /**
     * @member {ItemShipping} shipping
     * @type {ItemShipping}
     */
    shipping: ItemShipping;
}
import { ItemPicking } from './ItemPicking.js';
import { ItemPacking } from './ItemPacking.js';
import { ItemShipping } from './ItemShipping.js';
//# sourceMappingURL=ItemFulfillment.d.ts.map