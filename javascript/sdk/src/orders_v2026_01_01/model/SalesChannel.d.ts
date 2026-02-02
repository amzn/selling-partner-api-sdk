/**
 * The SalesChannel model module.
 * @module orders_v2026_01_01/model/SalesChannel
 * @version 2026-01-01
 */
export class SalesChannel {
    /**
     * Constructs a <code>SalesChannel</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {SalesChannel} obj Optional instance to populate.
     * @return {SalesChannel} The populated <code>SalesChannel</code> instance.
     */
    static constructFromObject(data: any, obj: SalesChannel): SalesChannel;
    /**
     * Constructs a new <code>SalesChannel</code>.
     * Information about where the customer placed this order.
     * @alias module:orders_v2026_01_01/model/SalesChannel
     * @class
     * @param channelName {String} The name of the sales platform or channel where the customer placed this order.  **Possible values**: `AMAZON`, `NON_AMAZON`
     */
    constructor(channelName: string);
    channelName: string;
    /**
     * The unique identifier for the specific marketplace within the sales channel where this order was placed.
     * @member {String} marketplaceId
     * @type {String}
     */
    marketplaceId: string;
    /**
     * The human-readable name of the marketplace where this order was placed.
     * @member {String} marketplaceName
     * @type {String}
     */
    marketplaceName: string;
}
//# sourceMappingURL=SalesChannel.d.ts.map