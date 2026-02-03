/**
 * The Item model module.
 * @module shipping_v2/model/Item
 * @version v2
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
     * An item in a package.
     * @alias module:shipping_v2/model/Item
     * @class
     * @param quantity {Number} The number of units. This value is required.
     */
    constructor(quantity: number);
    quantity: number;
    /**
     * @member {Currency} itemValue
     * @type {Currency}
     */
    itemValue: Currency;
    /**
     * The product description of the item.
     * @member {String} description
     * @type {String}
     */
    description: string;
    /**
     * A unique identifier for an item provided by the client.
     * @member {String} itemIdentifier
     * @type {String}
     */
    itemIdentifier: string;
    /**
     * @member {Weight} weight
     * @type {Weight}
     */
    weight: Weight;
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
    /**
     * The product type of the item.
     * @member {String} productType
     * @type {String}
     */
    productType: string;
    /**
     * @member {InvoiceDetails} invoiceDetails
     * @type {InvoiceDetails}
     */
    invoiceDetails: InvoiceDetails;
    /**
     * A list of unique serial numbers in an Amazon package that can be used to guarantee non-fraudulent items. The number of serial numbers in the list must be less than or equal to the quantity of items being shipped. Only applicable when channel source is Amazon.
     * @member {Array[]} serialNumbers
     * @type {Array[]}
     */
    serialNumbers: any[][];
    /**
     * @member {DirectFulfillmentItemIdentifiers} directFulfillmentItemIdentifiers
     * @type {DirectFulfillmentItemIdentifiers}
     */
    directFulfillmentItemIdentifiers: DirectFulfillmentItemIdentifiers;
}
import { Currency } from './Currency.js';
import { Weight } from './Weight.js';
import { LiquidVolume } from './LiquidVolume.js';
import { DangerousGoodsDetails } from './DangerousGoodsDetails.js';
import { InvoiceDetails } from './InvoiceDetails.js';
import { DirectFulfillmentItemIdentifiers } from './DirectFulfillmentItemIdentifiers.js';
//# sourceMappingURL=Item.d.ts.map