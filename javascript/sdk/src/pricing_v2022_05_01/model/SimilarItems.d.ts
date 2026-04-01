/**
 * The SimilarItems model module.
 * @module pricing_v2022_05_01/model/SimilarItems
 * @version 2022-05-01
 */
export class SimilarItems {
    /**
     * Constructs a <code>SimilarItems</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {SimilarItems} obj Optional instance to populate.
     * @return {SimilarItems} The populated <code>SimilarItems</code> instance.
     */
    static constructFromObject(data: Object, obj: SimilarItems): SimilarItems;
    /**
     * A list of similar items for the specified ASIN `marketplaceId` combination.
     * @member {Item[]} items
     * @type {Item[]}
     */
    items: Item[];
}
import { Item } from './Item.js';
//# sourceMappingURL=SimilarItems.d.ts.map