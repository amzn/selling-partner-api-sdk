/**
 * The SellerSKUIdentifier model module.
 * @module pricing_v0/model/SellerSKUIdentifier
 * @version v0
 */
export class SellerSKUIdentifier {
    /**
     * Constructs a <code>SellerSKUIdentifier</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {SellerSKUIdentifier} obj Optional instance to populate.
     * @return {SellerSKUIdentifier} The populated <code>SellerSKUIdentifier</code> instance.
     */
    static constructFromObject(data: any, obj: SellerSKUIdentifier): SellerSKUIdentifier;
    /**
     * Constructs a new <code>SellerSKUIdentifier</code>.
     * Schema to identify an item by MarketPlaceId, SellerId, and SellerSKU.
     * @alias module:pricing_v0/model/SellerSKUIdentifier
     * @class
     * @param marketplaceId {String} A marketplace identifier.
     * @param sellerId {String} The seller identifier submitted for the operation.
     * @param sellerSKU {String} The seller stock keeping unit (SKU) of the item.
     */
    constructor(marketplaceId: string, sellerId: string, sellerSKU: string);
    marketplaceId: string;
    sellerId: string;
    sellerSKU: string;
}
//# sourceMappingURL=SellerSKUIdentifier.d.ts.map