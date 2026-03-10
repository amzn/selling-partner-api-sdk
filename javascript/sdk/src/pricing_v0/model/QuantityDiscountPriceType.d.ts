/**
 * The QuantityDiscountPriceType model module.
 * @module pricing_v0/model/QuantityDiscountPriceType
 * @version v0
 */
export class QuantityDiscountPriceType {
    /**
     * Constructs a <code>QuantityDiscountPriceType</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {QuantityDiscountPriceType} obj Optional instance to populate.
     * @return {QuantityDiscountPriceType} The populated <code>QuantityDiscountPriceType</code> instance.
     */
    static constructFromObject(data: any, obj: QuantityDiscountPriceType): QuantityDiscountPriceType;
    /**
     * Constructs a new <code>QuantityDiscountPriceType</code>.
     * Contains pricing information that includes special pricing when buying in bulk.
     * @alias module:pricing_v0/model/QuantityDiscountPriceType
     * @class
     * @param quantityTier {Number} Indicates at what quantity this price becomes active.
     * @param quantityDiscountType {QuantityDiscountType}
     * @param listingPrice {MoneyType}
     */
    constructor(quantityTier: number, quantityDiscountType: QuantityDiscountType, listingPrice: MoneyType);
    quantityTier: number;
    quantityDiscountType: QuantityDiscountType;
    listingPrice: MoneyType;
}
import { QuantityDiscountType } from './QuantityDiscountType.js';
import { MoneyType } from './MoneyType.js';
//# sourceMappingURL=QuantityDiscountPriceType.d.ts.map