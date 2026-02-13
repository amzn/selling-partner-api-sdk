/**
 * The ItemSearchResults model module.
 * @module listingsitems_v2021_08_01/model/ItemSearchResults
 * @version 2021-08-01
 */
export class ItemSearchResults {
    /**
     * Constructs a <code>ItemSearchResults</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {ItemSearchResults} obj Optional instance to populate.
     * @return {ItemSearchResults} The populated <code>ItemSearchResults</code> instance.
     */
    static constructFromObject(data: any, obj: ItemSearchResults): ItemSearchResults;
    /**
     * Constructs a new <code>ItemSearchResults</code>.
     * Selling partner listings items and search related metadata.
     * @alias module:listingsitems_v2021_08_01/model/ItemSearchResults
     * @class
     * @param numberOfResults {Number} The total number of selling partner listings items found for the search criteria (only results up to the page count limit is returned per request regardless of the number found).  Note: The maximum number of items (SKUs) that can be returned and paged through is 1000.
     * @param items {Item[]} A list of listings items.
     */
    constructor(numberOfResults: number, items: Item[]);
    numberOfResults: number;
    items: Item[];
    /**
     * @member {Pagination} pagination
     * @type {Pagination}
     */
    pagination: Pagination;
}
import { Item } from './Item.js';
import { Pagination } from './Pagination.js';
//# sourceMappingURL=ItemSearchResults.d.ts.map