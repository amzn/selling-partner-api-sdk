/**
 * The ItemIdentifier model module.
 * @module pricing_v0/model/ItemIdentifier
 * @version v0
 */
export class ItemIdentifier {
    /**
     * Constructs a <code>ItemIdentifier</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {ItemIdentifier} obj Optional instance to populate.
     * @return {ItemIdentifier} The populated <code>ItemIdentifier</code> instance.
     */
    static constructFromObject(data: any, obj: ItemIdentifier): ItemIdentifier;
    /**
     * Constructs a new <code>ItemIdentifier</code>.
     * Information that identifies an item.
     * @alias module:pricing_v0/model/ItemIdentifier
     * @class
     * @param marketplaceId {String} A marketplace identifier. Specifies the marketplace from which prices are returned.
     * @param itemCondition {ConditionType}
     */
    constructor(marketplaceId: string, itemCondition: ConditionType);
    marketplaceId: string;
    itemCondition: ConditionType;
    /**
     * The Amazon Standard Identification Number (ASIN) of the item.
     * @member {String} ASIN
     * @type {String}
     */
    ASIN: string;
    /**
     * The seller stock keeping unit (SKU) of the item.
     * @member {String} sellerSKU
     * @type {String}
     */
    sellerSKU: string;
}
import { ConditionType } from './ConditionType.js';
//# sourceMappingURL=ItemIdentifier.d.ts.map