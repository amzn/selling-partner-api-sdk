/**
 * The MarketplaceDetails model module.
 * @module finances_2024_06_19/model/MarketplaceDetails
 * @version 2024-06-19
 */
export class MarketplaceDetails {
    /**
     * Constructs a <code>MarketplaceDetails</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {MarketplaceDetails} obj Optional instance to populate.
     * @return {MarketplaceDetails} The populated <code>MarketplaceDetails</code> instance.
     */
    static constructFromObject(data: any, obj: MarketplaceDetails): MarketplaceDetails;
    /**
     * The identifier of the marketplace where the transaction occurred. The marketplace ID is the globally unique identifier of a marketplace. To find the ID for your marketplace, refer to [Marketplace IDs](https://developer-docs.amazon.com/sp-api/docs/marketplace-ids).
     * @member {String} marketplaceId
     * @type {String}
     */
    marketplaceId: string;
    /**
     * The name of the marketplace where the transaction occurred.   Example: 'Amazon.com','Amazon.in'
     * @member {String} marketplaceName
     * @type {String}
     */
    marketplaceName: string;
}
//# sourceMappingURL=MarketplaceDetails.d.ts.map