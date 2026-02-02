/**
 * The ReplenishmentOrderListing model module.
 * @module awd_v2024_05_09/model/ReplenishmentOrderListing
 * @version 2024-05-09
 */
export class ReplenishmentOrderListing {
    /**
     * Constructs a <code>ReplenishmentOrderListing</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {ReplenishmentOrderListing} obj Optional instance to populate.
     * @return {ReplenishmentOrderListing} The populated <code>ReplenishmentOrderListing</code> instance.
     */
    static constructFromObject(data: any, obj: ReplenishmentOrderListing): ReplenishmentOrderListing;
    /**
     * A token that is used to retrieve the next page of results. The response includes `nextToken` when the number of results exceeds the specified `maxResults` value. To get the next page of results, call the operation with this token and include the same arguments as the call that produced the token. To get a complete list, call this operation until `nextToken` is null. Note that this operation can return empty pages.
     * @member {String} nextToken
     * @type {String}
     */
    nextToken: string;
    /**
     * List of replenishment orders.
     * @member {[ReplenishmentOrder]} orders
     * @type {[ReplenishmentOrder]}
     */
    orders: [ReplenishmentOrder];
}
import { ReplenishmentOrder } from './ReplenishmentOrder.js';
//# sourceMappingURL=ReplenishmentOrderListing.d.ts.map