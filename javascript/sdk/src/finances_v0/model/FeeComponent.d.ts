/**
 * The FeeComponent model module.
 * @module finances_v0/model/FeeComponent
 * @version v0
 */
export class FeeComponent {
    /**
     * Constructs a <code>FeeComponent</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {FeeComponent} obj Optional instance to populate.
     * @return {FeeComponent} The populated <code>FeeComponent</code> instance.
     */
    static constructFromObject(data: any, obj: FeeComponent): FeeComponent;
    /**
     * The type of fee. For more information about Selling on Amazon fees, see [Selling on Amazon Fee Schedule](https://sellercentral.amazon.com/gp/help/200336920) on Seller Central. For more information about Fulfillment by Amazon fees, see [FBA features, services and fees](https://sellercentral.amazon.com/gp/help/201074400) on Seller Central.
     * @member {String} feeType
     * @type {String}
     */
    feeType: string;
    /**
     * @member {Currency} feeAmount
     * @type {Currency}
     */
    feeAmount: Currency;
}
import { Currency } from './Currency.js';
//# sourceMappingURL=FeeComponent.d.ts.map