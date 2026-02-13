/**
 * The InventoryListing model module.
 * @module awd_v2024_05_09/model/InventoryListing
 * @version 2024-05-09
 */
export class InventoryListing {
    /**
     * Constructs a <code>InventoryListing</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {InventoryListing} obj Optional instance to populate.
     * @return {InventoryListing} The populated <code>InventoryListing</code> instance.
     */
    static constructFromObject(data: any, obj: InventoryListing): InventoryListing;
    /**
     * Constructs a new <code>InventoryListing</code>.
     * AWD inventory payload.
     * @alias module:awd_v2024_05_09/model/InventoryListing
     * @class
     * @param inventory {[InventorySummary]} List of inventory summaries.
     */
    constructor(inventory: [InventorySummary]);
    inventory: InventorySummary[];
    /**
     * A token that is used to retrieve the next page of results. The response includes `nextToken` when the number of results exceeds the specified `maxResults` value. To get the next page of results, call the operation with this token and include the same arguments as the call that produced the token. To get a complete list, call this operation until `nextToken` is null. Note that this operation can return empty pages.
     * @member {String} nextToken
     * @type {String}
     */
    nextToken: string;
}
import { InventorySummary } from './InventorySummary.js';
//# sourceMappingURL=InventoryListing.d.ts.map