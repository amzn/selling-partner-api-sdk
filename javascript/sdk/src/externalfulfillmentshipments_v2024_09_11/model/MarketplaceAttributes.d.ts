/**
 * The MarketplaceAttributes model module.
 * @module externalfulfillmentshipments_v2024_09_11/model/MarketplaceAttributes
 * @version 2024-09-11
 */
export class MarketplaceAttributes {
    /**
     * Constructs a <code>MarketplaceAttributes</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {MarketplaceAttributes} obj Optional instance to populate.
     * @return {MarketplaceAttributes} The populated <code>MarketplaceAttributes</code> instance.
     */
    static constructFromObject(data: any, obj: MarketplaceAttributes): MarketplaceAttributes;
    /**
     * Constructs a new <code>MarketplaceAttributes</code>.
     * The marketplace attributes associated with the location.
     * @alias module:externalfulfillmentshipments_v2024_09_11/model/MarketplaceAttributes
     * @class
     * @param marketplaceId {String} The marketplace ID associated with the location. To find the ID for your marketplace, refer to [Marketplace IDs](https://developer-docs.amazon.com/sp-api/docs/marketplace-ids).
     * @param channelName {String} The channel name associated with the location.
     */
    constructor(marketplaceId: string, channelName: string);
    marketplaceId: string;
    channelName: string;
    /**
     * The ID of the merchant or seller to whom this order is created.
     * @member {String} merchantId
     * @type {String}
     */
    merchantId: string;
    /**
     * Marketplace channel-specific attribute value.
     * @member {[String]} customAttributes
     * @type {[String]}
     */
    customAttributes: [string];
}
export namespace MarketplaceAttributes {
    namespace CustomAttributesEnum {
        let PRIME: string;
        let FASTTRACK: string;
    }
    /**
     * *
     */
    type CustomAttributesEnum = string;
}
//# sourceMappingURL=MarketplaceAttributes.d.ts.map