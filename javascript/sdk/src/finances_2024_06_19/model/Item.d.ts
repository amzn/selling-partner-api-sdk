/**
 * The Item model module.
 * @module finances_2024_06_19/model/Item
 * @version 2024-06-19
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
     * A description of the items in a transaction.
     * @member {String} description
     * @type {String}
     */
    description: string;
    /**
     * Related business identifiers of the item in the transaction.
     * @member {Array[]} relatedIdentifiers
     * @type {Array[]}
     */
    relatedIdentifiers: any[][];
    /**
     * @member {Currency} totalAmount
     * @type {Currency}
     */
    totalAmount: Currency;
    /**
     * A list of breakdowns that detail how the total amount is calculated for the transaction.
     * @member {Array[]} breakdowns
     * @type {Array[]}
     */
    breakdowns: any[][];
    /**
     * A list of additional information about the item.
     * @member {Array[]} contexts
     * @type {Array[]}
     */
    contexts: any[][];
}
import { Currency } from './Currency.js';
//# sourceMappingURL=Item.d.ts.map