/**
 * The InventoryResponseBody model module.
 * @module externalfulfillmentinventory_v2024_09_11/model/InventoryResponseBody
 * @version 2024-09-11
 */
export class InventoryResponseBody {
    /**
     * Constructs a <code>InventoryResponseBody</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {InventoryResponseBody} obj Optional instance to populate.
     * @return {InventoryResponseBody} The populated <code>InventoryResponseBody</code> instance.
     */
    static constructFromObject(data: any, obj: InventoryResponseBody): InventoryResponseBody;
    /**
     * Latest sequence number for an inventory update.
     * @member {Number} clientSequenceNumber
     * @type {Number}
     */
    clientSequenceNumber: number;
    /**
     * The location where inventory is updated or retrieved.
     * @member {String} locationId
     * @type {String}
     */
    locationId: string;
    /**
     * The SKU ID for which inventory is updated or retrieved
     * @member {String} skuId
     * @type {String}
     */
    skuId: string;
    /**
     * The number of items of the specified SKU that are available for purchase.
     * @member {Number} sellableQuantity
     * @type {Number}
     */
    sellableQuantity: number;
    /**
     * The number of items of the specified SKU created in any marketplace that are reserved for shipment and yet to be fulfilled.
     * @member {Number} reservedQuantity
     * @type {Number}
     */
    reservedQuantity: number;
    /**
     * @member {MarketplaceAttributes} marketplaceAttributes
     * @type {MarketplaceAttributes}
     */
    marketplaceAttributes: MarketplaceAttributes;
    /**
     * Inventory operation errors that require seller action before retrying the inventory request.
     * @member {ActionableError[]} actionableErrors
     * @type {ActionableError[]}
     */
    actionableErrors: ActionableError[];
}
import { MarketplaceAttributes } from './MarketplaceAttributes.js';
import { ActionableError } from './ActionableError.js';
//# sourceMappingURL=InventoryResponseBody.d.ts.map