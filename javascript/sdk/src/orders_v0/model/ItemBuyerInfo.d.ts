/**
 * The ItemBuyerInfo model module.
 * @module orders_v0/model/ItemBuyerInfo
 * @version v0
 */
export class ItemBuyerInfo {
    /**
     * Constructs a <code>ItemBuyerInfo</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {ItemBuyerInfo} obj Optional instance to populate.
     * @return {ItemBuyerInfo} The populated <code>ItemBuyerInfo</code> instance.
     */
    static constructFromObject(data: any, obj: ItemBuyerInfo): ItemBuyerInfo;
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
//# sourceMappingURL=ItemBuyerInfo.d.ts.map