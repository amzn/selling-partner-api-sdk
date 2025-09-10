/**
 * The BuyerInfo model module.
 * @module orders_v0/model/BuyerInfo
 * @version v0
 */
export class BuyerInfo {
    /**
     * Constructs a <code>BuyerInfo</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {BuyerInfo} obj Optional instance to populate.
     * @return {BuyerInfo} The populated <code>BuyerInfo</code> instance.
     */
    static constructFromObject(data: any, obj: BuyerInfo): BuyerInfo;
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
//# sourceMappingURL=BuyerInfo.d.ts.map