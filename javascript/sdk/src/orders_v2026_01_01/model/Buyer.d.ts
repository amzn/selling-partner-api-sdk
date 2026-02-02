/**
 * The Buyer model module.
 * @module orders_v2026_01_01/model/Buyer
 * @version 2026-01-01
 */
export class Buyer {
    /**
     * Constructs a <code>Buyer</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {Buyer} obj Optional instance to populate.
     * @return {Buyer} The populated <code>Buyer</code> instance.
     */
    static constructFromObject(data: any, obj: Buyer): Buyer;
    /**
     * The full name of the customer who placed the order.
     * @member {String} buyerName
     * @type {String}
     */
    buyerName: string;
    /**
     * The anonymized email address of the buyer. **Note:** Only available for merchant-fulfilled (FBM) orders.
     * @member {String} buyerEmail
     * @type {String}
     */
    buyerEmail: string;
    /**
     * The name of the company or organization for a business order.
     * @member {String} buyerCompanyName
     * @type {String}
     */
    buyerCompanyName: string;
    /**
     * The purchase order (PO) number entered by the buyer at checkout. Only returned for orders where the buyer entered a PO number at checkout.
     * @member {String} buyerPurchaseOrderNumber
     * @type {String}
     */
    buyerPurchaseOrderNumber: string;
}
//# sourceMappingURL=Buyer.d.ts.map