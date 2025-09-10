/**
 * The ReferencePrice model module.
 * @module pricing_v2022_05_01/model/ReferencePrice
 * @version 2022-05-01
 */
export class ReferencePrice {
    /**
     * Constructs a <code>ReferencePrice</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {ReferencePrice} obj Optional instance to populate.
     * @return {ReferencePrice} The populated <code>ReferencePrice</code> instance.
     */
    static constructFromObject(data: any, obj: ReferencePrice): ReferencePrice;
    /**
     * Constructs a new <code>ReferencePrice</code>.
     * The reference price for the specified ASIN &#x60;marketplaceId&#x60; combination.
     * @alias module:pricing_v2022_05_01/model/ReferencePrice
     * @class
     * @param name {String} Reference price type (e.g., `CompetitivePriceThreshold`, `WasPrice`, `CompetitivePrice`). For definitions, see the [Product Pricing API Use Case Guide](https://developer-docs.amazon.com/sp-api/docs/product-pricing-api-v2022-05-01-use-case-guide).
     * @param price {MoneyType}
     */
    constructor(name: string, price: MoneyType);
    name: string;
    price: MoneyType;
}
import { MoneyType } from './MoneyType.js';
//# sourceMappingURL=ReferencePrice.d.ts.map