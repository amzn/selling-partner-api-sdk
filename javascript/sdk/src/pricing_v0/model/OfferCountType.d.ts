/**
 * The OfferCountType model module.
 * @module pricing_v0/model/OfferCountType
 * @version v0
 */
export class OfferCountType {
    /**
     * Constructs a <code>OfferCountType</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {OfferCountType} obj Optional instance to populate.
     * @return {OfferCountType} The populated <code>OfferCountType</code> instance.
     */
    static constructFromObject(data: any, obj: OfferCountType): OfferCountType;
    /**
     * Indicates the condition of the item. For example: New, Used, Collectible, Refurbished, or Club.
     * @member {String} condition
     * @type {String}
     */
    condition: string;
    /**
     * @member {FulfillmentChannelType} fulfillmentChannel
     * @type {FulfillmentChannelType}
     */
    fulfillmentChannel: FulfillmentChannelType;
    /**
     * The number of offers in a fulfillment channel that meet a specific condition.
     * @member {Number} offerCount
     * @type {Number}
     */
    offerCount: number;
}
import { FulfillmentChannelType } from './FulfillmentChannelType.js';
//# sourceMappingURL=OfferCountType.d.ts.map