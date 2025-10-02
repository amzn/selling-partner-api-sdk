/**
 * The MarketplaceChannelDetails model module.
 * @module externalfulfillmentreturns_v2024_09_11/model/MarketplaceChannelDetails
 * @version 2024-09-11
 */
export class MarketplaceChannelDetails {
    /**
     * Constructs a <code>MarketplaceChannelDetails</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {MarketplaceChannelDetails} obj Optional instance to populate.
     * @return {MarketplaceChannelDetails} The populated <code>MarketplaceChannelDetails</code> instance.
     */
    static constructFromObject(data: any, obj: MarketplaceChannelDetails): MarketplaceChannelDetails;
    /**
     * @member {MarketplaceChannel} marketplaceChannel
     * @type {MarketplaceChannel}
     */
    marketplaceChannel: MarketplaceChannel;
    /**
     * The ID of the merchant or seller to whom this return is created in the marketplace.
     * @member {String} merchantId
     * @type {String}
     */
    merchantId: string;
    /**
     * The marketplace-specific shipment ID.
     * @member {String} shipmentId
     * @type {String}
     */
    shipmentId: string;
    /**
     * The marketplace-specific customer order ID.
     * @member {String} customerOrderId
     * @type {String}
     */
    customerOrderId: string;
    /**
     * The Amazon SmartConnect ID of the location to which this return is created.
     * @member {String} returnLocationId
     * @type {String}
     */
    returnLocationId: string;
    /**
     * The Amazon SmartConnect SKU of the channel.
     * @member {String} channelSku
     * @type {String}
     */
    channelSku: string;
    /**
     * The Amazon SmartConnect ID of the exchange order.
     * @member {String} exchangeOrderId
     * @type {String}
     */
    exchangeOrderId: string;
}
import { MarketplaceChannel } from './MarketplaceChannel.js';
//# sourceMappingURL=MarketplaceChannelDetails.d.ts.map