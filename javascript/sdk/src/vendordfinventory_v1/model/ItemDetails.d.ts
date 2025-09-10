/**
 * The ItemDetails model module.
 * @module vendordfinventory_v1/model/ItemDetails
 * @version v1
 */
export class ItemDetails {
    /**
     * Constructs a <code>ItemDetails</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {ItemDetails} obj Optional instance to populate.
     * @return {ItemDetails} The populated <code>ItemDetails</code> instance.
     */
    static constructFromObject(data: any, obj: ItemDetails): ItemDetails;
    /**
     * Constructs a new <code>ItemDetails</code>.
     * Updated inventory details for an item.
     * @alias module:vendordfinventory_v1/model/ItemDetails
     * @class
     * @param availableQuantity {ItemQuantity}
     */
    constructor(availableQuantity: ItemQuantity);
    availableQuantity: ItemQuantity;
    /**
     * The buyer selected product identification of the item. Either buyerProductIdentifier or vendorProductIdentifier should be submitted.
     * @member {String} buyerProductIdentifier
     * @type {String}
     */
    buyerProductIdentifier: string;
    /**
     * The vendor selected product identification of the item. Either buyerProductIdentifier or vendorProductIdentifier should be submitted.
     * @member {String} vendorProductIdentifier
     * @type {String}
     */
    vendorProductIdentifier: string;
    /**
     * When true, the item is permanently unavailable.
     * @member {Boolean} isObsolete
     * @type {Boolean}
     */
    isObsolete: boolean;
}
import { ItemQuantity } from './ItemQuantity.js';
//# sourceMappingURL=ItemDetails.d.ts.map