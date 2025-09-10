/**
 * The OrderBuyerInfo model module.
 * @module orders_v0/model/OrderBuyerInfo
 * @version v0
 */
export class OrderBuyerInfo {
    /**
     * Constructs a <code>OrderBuyerInfo</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {OrderBuyerInfo} obj Optional instance to populate.
     * @return {OrderBuyerInfo} The populated <code>OrderBuyerInfo</code> instance.
     */
    static constructFromObject(data: any, obj: OrderBuyerInfo): OrderBuyerInfo;
    /**
     * Constructs a new <code>OrderBuyerInfo</code>.
     * Buyer information for an order.
     * @alias module:orders_v0/model/OrderBuyerInfo
     * @class
     * @param amazonOrderId {String} An Amazon-defined order identifier, in 3-7-7 format.
     */
    constructor(amazonOrderId: string);
    amazonOrderId: string;
    /**
     * The anonymized email address of the buyer.
     * @member {String} buyerEmail
     * @type {String}
     */
    buyerEmail: string;
    /**
     * The buyer name or the recipient name.
     * @member {String} buyerName
     * @type {String}
     */
    buyerName: string;
    /**
     * The county of the buyer.  **Note**: This attribute is only available in the Brazil marketplace.
     * @member {String} buyerCounty
     * @type {String}
     */
    buyerCounty: string;
    /**
     * @member {BuyerTaxInfo} buyerTaxInfo
     * @type {BuyerTaxInfo}
     */
    buyerTaxInfo: BuyerTaxInfo;
    /**
     * The purchase order (PO) number entered by the buyer at checkout. Only returned for orders where the buyer entered a PO number at checkout.
     * @member {String} purchaseOrderNumber
     * @type {String}
     */
    purchaseOrderNumber: string;
}
import { BuyerTaxInfo } from './BuyerTaxInfo.js';
//# sourceMappingURL=OrderBuyerInfo.d.ts.map