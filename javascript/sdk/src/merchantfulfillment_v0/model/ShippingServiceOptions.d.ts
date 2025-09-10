/**
 * The ShippingServiceOptions model module.
 * @module merchantfulfillment_v0/model/ShippingServiceOptions
 * @version v0
 */
export class ShippingServiceOptions {
    /**
     * Constructs a <code>ShippingServiceOptions</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {ShippingServiceOptions} obj Optional instance to populate.
     * @return {ShippingServiceOptions} The populated <code>ShippingServiceOptions</code> instance.
     */
    static constructFromObject(data: any, obj: ShippingServiceOptions): ShippingServiceOptions;
    /**
     * Constructs a new <code>ShippingServiceOptions</code>.
     * Extra services provided by a carrier.
     * @alias module:merchantfulfillment_v0/model/ShippingServiceOptions
     * @class
     * @param deliveryExperience {DeliveryExperienceType}
     * @param carrierWillPickUp {Boolean} When true, the carrier will pick up the package. Note: Scheduled carrier pickup is available only using Dynamex (US), DPD (UK), and Royal Mail (UK).
     */
    constructor(deliveryExperience: DeliveryExperienceType, carrierWillPickUp: boolean);
    deliveryExperience: DeliveryExperienceType;
    carrierWillPickUp: boolean;
    /**
     * @member {CurrencyAmount} declaredValue
     * @type {CurrencyAmount}
     */
    declaredValue: CurrencyAmount;
    /**
     * @member {CarrierWillPickUpOption} carrierWillPickUpOption
     * @type {CarrierWillPickUpOption}
     */
    carrierWillPickUpOption: CarrierWillPickUpOption;
    /**
     * @member {LabelFormat} labelFormat
     * @type {LabelFormat}
     */
    labelFormat: LabelFormat;
}
import { DeliveryExperienceType } from './DeliveryExperienceType.js';
import { CurrencyAmount } from './CurrencyAmount.js';
import { CarrierWillPickUpOption } from './CarrierWillPickUpOption.js';
import { LabelFormat } from './LabelFormat.js';
//# sourceMappingURL=ShippingServiceOptions.d.ts.map