/**
 * The ItemPrice model module.
 * @module orders_v2026_01_01/model/ItemPrice
 * @version 2026-01-01
 */
export class ItemPrice {
    /**
     * Constructs a <code>ItemPrice</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {ItemPrice} obj Optional instance to populate.
     * @return {ItemPrice} The populated <code>ItemPrice</code> instance.
     */
    static constructFromObject(data: any, obj: ItemPrice): ItemPrice;
    /**
     * @member {Money} unitPrice
     * @type {Money}
     */
    unitPrice: Money;
    /**
     * Indicates that the selling price is a special price that is only available for Amazon Business orders. For more information about the Amazon Business Seller Program, refer to the [Amazon Business website](https://www.amazon.com/b2b/info/amazon-business).  **Possible value**: `BUSINESS_PRICE`
     * @member {String} priceDesignation
     * @type {String}
     */
    priceDesignation: string;
}
import { Money } from './Money.js';
//# sourceMappingURL=ItemPrice.d.ts.map