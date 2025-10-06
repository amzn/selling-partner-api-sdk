/**
 * The MarketplaceChannel model module.
 * @module externalfulfillmentreturns_v2024_09_11/model/MarketplaceChannel
 * @version 2024-09-11
 */
export class MarketplaceChannel {
    /**
     * Constructs a <code>MarketplaceChannel</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {MarketplaceChannel} obj Optional instance to populate.
     * @return {MarketplaceChannel} The populated <code>MarketplaceChannel</code> instance.
     */
    static constructFromObject(data: any, obj: MarketplaceChannel): MarketplaceChannel;
    /**
     * The name of the marketplace.
     * @member {String} marketplaceName
     * @type {String}
     */
    marketplaceName: string;
    /**
     * The name of the channel within the marketplace.
     * @member {String} channelName
     * @type {String}
     */
    channelName: string;
}
//# sourceMappingURL=MarketplaceChannel.d.ts.map