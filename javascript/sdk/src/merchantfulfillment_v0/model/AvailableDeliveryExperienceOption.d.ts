/**
 * The AvailableDeliveryExperienceOption model module.
 * @module merchantfulfillment_v0/model/AvailableDeliveryExperienceOption
 * @version v0
 */
export class AvailableDeliveryExperienceOption {
    /**
     * Constructs a <code>AvailableDeliveryExperienceOption</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {AvailableDeliveryExperienceOption} obj Optional instance to populate.
     * @return {AvailableDeliveryExperienceOption} The populated <code>AvailableDeliveryExperienceOption</code> instance.
     */
    static constructFromObject(data: any, obj: AvailableDeliveryExperienceOption): AvailableDeliveryExperienceOption;
    /**
     * Constructs a new <code>AvailableDeliveryExperienceOption</code>.
     * The available delivery confirmation options, and the fee charged, if any.
     * @alias module:merchantfulfillment_v0/model/AvailableDeliveryExperienceOption
     * @class
     * @param deliveryExperienceOption {DeliveryExperienceOption}
     * @param charge {CurrencyAmount}
     */
    constructor(deliveryExperienceOption: DeliveryExperienceOption, charge: CurrencyAmount);
    deliveryExperienceOption: DeliveryExperienceOption;
    charge: CurrencyAmount;
}
import { DeliveryExperienceOption } from './DeliveryExperienceOption.js';
import { CurrencyAmount } from './CurrencyAmount.js';
//# sourceMappingURL=AvailableDeliveryExperienceOption.d.ts.map