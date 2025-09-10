/**
 * The ShippingOfferingFilter model module.
 * @module merchantfulfillment_v0/model/ShippingOfferingFilter
 * @version v0
 */
export class ShippingOfferingFilter {
    /**
     * Constructs a <code>ShippingOfferingFilter</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {ShippingOfferingFilter} obj Optional instance to populate.
     * @return {ShippingOfferingFilter} The populated <code>ShippingOfferingFilter</code> instance.
     */
    static constructFromObject(data: any, obj: ShippingOfferingFilter): ShippingOfferingFilter;
    /**
     * When true, include a packing slip with the label.
     * @member {Boolean} includePackingSlipWithLabel
     * @type {Boolean}
     */
    includePackingSlipWithLabel: boolean;
    /**
     * When true, include complex shipping options.
     * @member {Boolean} includeComplexShippingOptions
     * @type {Boolean}
     */
    includeComplexShippingOptions: boolean;
    /**
     * @member {CarrierWillPickUpOption} carrierWillPickUp
     * @type {CarrierWillPickUpOption}
     */
    carrierWillPickUp: CarrierWillPickUpOption;
    /**
     * @member {DeliveryExperienceOption} deliveryExperience
     * @type {DeliveryExperienceOption}
     */
    deliveryExperience: DeliveryExperienceOption;
}
import { CarrierWillPickUpOption } from './CarrierWillPickUpOption.js';
import { DeliveryExperienceOption } from './DeliveryExperienceOption.js';
//# sourceMappingURL=ShippingOfferingFilter.d.ts.map