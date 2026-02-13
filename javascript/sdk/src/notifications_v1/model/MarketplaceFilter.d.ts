/**
 * The MarketplaceFilter model module.
 * @module notifications_v1/model/MarketplaceFilter
 * @version v1
 */
export class MarketplaceFilter {
    /**
     * Constructs a <code>MarketplaceFilter</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {MarketplaceFilter} obj Optional instance to populate.
     * @return {MarketplaceFilter} The populated <code>MarketplaceFilter</code> instance.
     */
    static constructFromObject(data: any, obj: MarketplaceFilter): MarketplaceFilter;
    /**
     * A list of marketplace identifiers to subscribe to (for example: ATVPDKIKX0DER). To receive notifications in every marketplace, do not provide this list.
     * @member {String[]} marketplaceIds
     * @type {String[]}
     */
    marketplaceIds: string[];
}
//# sourceMappingURL=MarketplaceFilter.d.ts.map