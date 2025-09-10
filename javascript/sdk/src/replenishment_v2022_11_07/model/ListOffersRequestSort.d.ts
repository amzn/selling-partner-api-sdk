/**
 * The ListOffersRequestSort model module.
 * @module replenishment_v2022_11_07/model/ListOffersRequestSort
 * @version 2022-11-07
 */
export class ListOffersRequestSort {
    /**
     * Constructs a <code>ListOffersRequestSort</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {ListOffersRequestSort} obj Optional instance to populate.
     * @return {ListOffersRequestSort} The populated <code>ListOffersRequestSort</code> instance.
     */
    static constructFromObject(data: any, obj: ListOffersRequestSort): ListOffersRequestSort;
    /**
     * Constructs a new <code>ListOffersRequestSort</code>.
     * Use these parameters to sort the response.
     * @alias module:replenishment_v2022_11_07/model/ListOffersRequestSort
     * @class
     * @param order {SortOrder}
     * @param key {ListOffersSortKey}
     */
    constructor(order: SortOrder, key: ListOffersSortKey);
    order: SortOrder;
    key: ListOffersSortKey;
}
import { SortOrder } from './SortOrder.js';
import { ListOffersSortKey } from './ListOffersSortKey.js';
//# sourceMappingURL=ListOffersRequestSort.d.ts.map