/**
 * The Item model module.
 * @module merchantfulfillment_v0/model/Item
 * @version v0
 */
export class Item {
    /**
     * Constructs a <code>Item</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {Item} obj Optional instance to populate.
     * @return {Item} The populated <code>Item</code> instance.
     */
    static constructFromObject(data: any, obj: Item): Item;
    /**
     * Constructs a new <code>Item</code>.
     * An Amazon order item identifier and a quantity.
     * @alias module:merchantfulfillment_v0/model/Item
     * @class
     * @param orderItemId {String} An Amazon-defined identifier for an individual item in an order.
     * @param quantity {Number} The number of items.
     */
    constructor(orderItemId: string, quantity: number);
    orderItemId: string;
    quantity: number;
    /**
     * @member {Weight} itemWeight
     * @type {Weight}
     */
    itemWeight: Weight;
    /**
     * The description of the item.
     * @member {String} itemDescription
     * @type {String}
     */
    itemDescription: string;
    /**
     * A list of transparency codes.
     * @member {Array[]} transparencyCodeList
     * @type {Array[]}
     */
    transparencyCodeList: any[][];
    /**
     * A list of additional seller input pairs required to purchase shipping.
     * @member {Array[]} itemLevelSellerInputsList
     * @type {Array[]}
     */
    itemLevelSellerInputsList: any[][];
    /**
     * @member {LiquidVolume} liquidVolume
     * @type {LiquidVolume}
     */
    liquidVolume: LiquidVolume;
    /**
     * When true, the item qualifies as hazardous materials (hazmat). Defaults to false.
     * @member {Boolean} isHazmat
     * @type {Boolean}
     */
    isHazmat: boolean;
    /**
     * @member {DangerousGoodsDetails} dangerousGoodsDetails
     * @type {DangerousGoodsDetails}
     */
    dangerousGoodsDetails: DangerousGoodsDetails;
}
import { Weight } from './Weight.js';
import { LiquidVolume } from './LiquidVolume.js';
import { DangerousGoodsDetails } from './DangerousGoodsDetails.js';
//# sourceMappingURL=Item.d.ts.map