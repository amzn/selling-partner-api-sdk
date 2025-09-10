/**
 * The OrderItemBuyerInfo model module.
 * @module orders_v0/model/OrderItemBuyerInfo
 * @version v0
 */
export class OrderItemBuyerInfo {
    /**
     * Constructs a <code>OrderItemBuyerInfo</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {OrderItemBuyerInfo} obj Optional instance to populate.
     * @return {OrderItemBuyerInfo} The populated <code>OrderItemBuyerInfo</code> instance.
     */
    static constructFromObject(data: any, obj: OrderItemBuyerInfo): OrderItemBuyerInfo;
    /**
     * Constructs a new <code>OrderItemBuyerInfo</code>.
     * A single order item&#39;s buyer information.
     * @alias module:orders_v0/model/OrderItemBuyerInfo
     * @class
     * @param orderItemId {String} An Amazon-defined order item identifier.
     */
    constructor(orderItemId: string);
    orderItemId: string;
    /**
     * @member {BuyerCustomizedInfoDetail} buyerCustomizedInfo
     * @type {BuyerCustomizedInfoDetail}
     */
    buyerCustomizedInfo: BuyerCustomizedInfoDetail;
    /**
     * @member {Money} giftWrapPrice
     * @type {Money}
     */
    giftWrapPrice: Money;
    /**
     * @member {Money} giftWrapTax
     * @type {Money}
     */
    giftWrapTax: Money;
    /**
     * A gift message provided by the buyer.  **Note**: This attribute is only available for MFN (fulfilled by seller) orders.
     * @member {String} giftMessageText
     * @type {String}
     */
    giftMessageText: string;
    /**
     * The gift wrap level specified by the buyer.
     * @member {String} giftWrapLevel
     * @type {String}
     */
    giftWrapLevel: string;
}
import { BuyerCustomizedInfoDetail } from './BuyerCustomizedInfoDetail.js';
import { Money } from './Money.js';
//# sourceMappingURL=OrderItemBuyerInfo.d.ts.map