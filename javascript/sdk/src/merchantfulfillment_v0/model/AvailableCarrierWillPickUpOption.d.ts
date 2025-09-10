/**
 * The AvailableCarrierWillPickUpOption model module.
 * @module merchantfulfillment_v0/model/AvailableCarrierWillPickUpOption
 * @version v0
 */
export class AvailableCarrierWillPickUpOption {
    /**
     * Constructs a <code>AvailableCarrierWillPickUpOption</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {AvailableCarrierWillPickUpOption} obj Optional instance to populate.
     * @return {AvailableCarrierWillPickUpOption} The populated <code>AvailableCarrierWillPickUpOption</code> instance.
     */
    static constructFromObject(data: any, obj: AvailableCarrierWillPickUpOption): AvailableCarrierWillPickUpOption;
    /**
     * Constructs a new <code>AvailableCarrierWillPickUpOption</code>.
     * Indicates whether the carrier will pick up the package, and what fee is charged, if any.
     * @alias module:merchantfulfillment_v0/model/AvailableCarrierWillPickUpOption
     * @class
     * @param carrierWillPickUpOption {CarrierWillPickUpOption}
     * @param charge {CurrencyAmount}
     */
    constructor(carrierWillPickUpOption: CarrierWillPickUpOption, charge: CurrencyAmount);
    carrierWillPickUpOption: CarrierWillPickUpOption;
    charge: CurrencyAmount;
}
import { CarrierWillPickUpOption } from './CarrierWillPickUpOption.js';
import { CurrencyAmount } from './CurrencyAmount.js';
//# sourceMappingURL=AvailableCarrierWillPickUpOption.d.ts.map