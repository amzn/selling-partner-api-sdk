/**
 * The InventoryRequestParams model module.
 * @module externalfulfillmentinventory_v2024_09_11/model/InventoryRequestParams
 * @version 2024-09-11
 */
export class InventoryRequestParams {
    /**
     * Constructs a <code>InventoryRequestParams</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {InventoryRequestParams} obj Optional instance to populate.
     * @return {InventoryRequestParams} The populated <code>InventoryRequestParams</code> instance.
     */
    static constructFromObject(data: any, obj: InventoryRequestParams): InventoryRequestParams;
    /**
     * The latest sequence number for the inventory update operation. You find this value in the `clientSequenceNumber` property in the response to the `batchInventory` operation.
     * @member {Number} clientSequenceNumber
     * @type {Number}
     */
    clientSequenceNumber: number;
    /**
     * The absolute inventory quantity.
     * @member {Number} quantity
     * @type {Number}
     */
    quantity: number;
    /**
     * @member {MarketplaceAttributes} marketplaceAttributes
     * @type {MarketplaceAttributes}
     */
    marketplaceAttributes: MarketplaceAttributes;
}
import { MarketplaceAttributes } from './MarketplaceAttributes.js';
//# sourceMappingURL=InventoryRequestParams.d.ts.map