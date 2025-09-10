/**
 * The ASINIdentifier model module.
 * @module pricing_v0/model/ASINIdentifier
 * @version v0
 */
export class ASINIdentifier {
    /**
     * Constructs a <code>ASINIdentifier</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {ASINIdentifier} obj Optional instance to populate.
     * @return {ASINIdentifier} The populated <code>ASINIdentifier</code> instance.
     */
    static constructFromObject(data: any, obj: ASINIdentifier): ASINIdentifier;
    /**
     * Constructs a new <code>ASINIdentifier</code>.
     * Schema to identify an item by MarketPlaceId and ASIN.
     * @alias module:pricing_v0/model/ASINIdentifier
     * @class
     * @param marketplaceId {String} A marketplace identifier.
     * @param ASIN {String} The Amazon Standard Identification Number (ASIN) of the item.
     */
    constructor(marketplaceId: string, ASIN: string);
    marketplaceId: string;
    ASIN: string;
}
//# sourceMappingURL=ASINIdentifier.d.ts.map