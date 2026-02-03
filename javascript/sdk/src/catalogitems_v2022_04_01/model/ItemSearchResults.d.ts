/**
 * The ItemSearchResults model module.
 * @module catalogitems_v2022_04_01/model/ItemSearchResults
 * @version 2022-04-01
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
     * Items in the Amazon catalog and search-related metadata.
     * @alias module:catalogitems_v2022_04_01/model/ItemSearchResults
     * @class
     * @param numberOfResults {Number} For searches that are based on `identifiers`, `numberOfResults` is the total number of Amazon catalog items found. For searches that are based on `keywords`, `numberOfResults` is the estimated total number of Amazon catalog items that are matched by the search query. Only results up to the page count limit are returned per request regardless of the number found.  **Note:** The maximum number of items (ASINs) that can be returned and paged through is 1,000.
     * @param items {Array[]} A list of items from the Amazon catalog.
     */
    constructor(numberOfResults: number, items: any[][]);
    numberOfResults: number;
    items: any[][];
    /**
     * @member {Pagination} pagination
     * @type {Pagination}
     */
    pagination: Pagination;
    /**
     * @member {Refinements} refinements
     * @type {Refinements}
     */
    refinements: Refinements;
}
import { Pagination } from './Pagination.js';
import { Refinements } from './Refinements.js';
//# sourceMappingURL=ItemSearchResults.d.ts.map