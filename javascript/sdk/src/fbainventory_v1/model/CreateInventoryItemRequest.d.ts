/**
 * The CreateInventoryItemRequest model module.
 * @module fbainventory_v1/model/CreateInventoryItemRequest
 * @version v1
 */
export class CreateInventoryItemRequest {
    /**
     * Constructs a <code>CreateInventoryItemRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {CreateInventoryItemRequest} obj Optional instance to populate.
     * @return {CreateInventoryItemRequest} The populated <code>CreateInventoryItemRequest</code> instance.
     */
    static constructFromObject(data: any, obj: CreateInventoryItemRequest): CreateInventoryItemRequest;
    /**
     * Constructs a new <code>CreateInventoryItemRequest</code>.
     * An item to be created in the inventory.
     * @alias module:fbainventory_v1/model/CreateInventoryItemRequest
     * @class
     * @param sellerSku {String} The seller SKU of the item.
     * @param marketplaceId {String} The marketplaceId.
     * @param productName {String} The name of the item.
     */
    constructor(sellerSku: string, marketplaceId: string, productName: string);
    sellerSku: string;
    marketplaceId: string;
    productName: string;
}
//# sourceMappingURL=CreateInventoryItemRequest.d.ts.map