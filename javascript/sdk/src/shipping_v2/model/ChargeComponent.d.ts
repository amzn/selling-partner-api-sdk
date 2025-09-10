/**
 * The ChargeComponent model module.
 * @module shipping_v2/model/ChargeComponent
 * @version v2
 */
export class ChargeComponent {
    /**
     * Constructs a <code>ChargeComponent</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {ChargeComponent} obj Optional instance to populate.
     * @return {ChargeComponent} The populated <code>ChargeComponent</code> instance.
     */
    static constructFromObject(data: any, obj: ChargeComponent): ChargeComponent;
    /**
     * @member {Currency} amount
     * @type {Currency}
     */
    amount: Currency;
    /**
     * The type of charge.
     * @member {String} chargeType
     * @type {String}
     */
    chargeType: string;
}
export namespace ChargeComponent {
    namespace ChargeTypeEnum {
        let TAX: string;
        let DISCOUNT: string;
    }
    /**
     * *
     */
    type ChargeTypeEnum = string;
}
import { Currency } from './Currency.js';
//# sourceMappingURL=ChargeComponent.d.ts.map