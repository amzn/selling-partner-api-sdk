/**
 * The MarketplaceAttributes model module.
 * @module externalfulfillmentinventory_v2024_09_11/model/MarketplaceAttributes
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
     * The name of the fulfillment channel in which to update inventory.
     * @member {String} channelName
     * @type {String}
     */
    channelName: string;
    /**
     * The marketplace ID of the marketplace where you want to update inventory.
     * @member {String} marketplaceId
     * @type {String}
     */
    marketplaceId: string;
}
export namespace MarketplaceAttributes {
    namespace ChannelNameEnum {
        let FBA: string;
        let MFN: string;
        let DF: string;
    }
    /**
     * *
     */
    type ChannelNameEnum = string;
}
//# sourceMappingURL=MarketplaceAttributes.d.ts.map