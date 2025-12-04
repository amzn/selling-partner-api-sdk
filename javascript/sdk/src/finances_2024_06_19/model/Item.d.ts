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
     * @member {[ItemRelatedIdentifier]} relatedIdentifiers
     * @type {[ItemRelatedIdentifier]}
     */
    relatedIdentifiers: [ItemRelatedIdentifier];
    /**
     * @member {Currency} totalAmount
     * @type {Currency}
     */
    totalAmount: Currency;
    /**
     * A list of breakdowns that detail how the total amount is calculated for the transaction.
     * @member {[Breakdown]} breakdowns
     * @type {[Breakdown]}
     */
    breakdowns: [Breakdown];
    /**
     * A list of additional information about the item.
     * @member {[Context]} contexts
     * @type {[Context]}
     */
    contexts: [Context];
}
import { ItemRelatedIdentifier } from './ItemRelatedIdentifier.js';
import { Currency } from './Currency.js';
import { Breakdown } from './Breakdown.js';
import { Context } from './Context.js';
//# sourceMappingURL=Item.d.ts.map