/**
 * The ShippingOption model module.
 * @module pricing_v2022_05_01/model/ShippingOption
 * @version 2022-05-01
 */
export class ShippingOption {
    /**
     * Constructs a <code>ShippingOption</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {ShippingOption} obj Optional instance to populate.
     * @return {ShippingOption} The populated <code>ShippingOption</code> instance.
     */
    static constructFromObject(data: any, obj: ShippingOption): ShippingOption;
    /**
     * Constructs a new <code>ShippingOption</code>.
     * The shipping option available for the offer.
     * @alias module:pricing_v2022_05_01/model/ShippingOption
     * @class
     * @param shippingOptionType {String} The type of shipping option.
     * @param price {MoneyType}
     */
    constructor(shippingOptionType: string, price: MoneyType);
    shippingOptionType: string;
    price: MoneyType;
}
export namespace ShippingOption {
    namespace ShippingOptionTypeEnum {
        let DEFAULT: string;
    }
    /**
     * *
     */
    type ShippingOptionTypeEnum = string;
}
import { MoneyType } from './MoneyType.js';
//# sourceMappingURL=ShippingOption.d.ts.map