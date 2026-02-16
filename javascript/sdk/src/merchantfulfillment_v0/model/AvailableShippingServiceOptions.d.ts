/**
 * The AvailableShippingServiceOptions model module.
 * @module merchantfulfillment_v0/model/AvailableShippingServiceOptions
 * @version v0
 */
export class AvailableShippingServiceOptions {
    /**
     * Constructs a <code>AvailableShippingServiceOptions</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {AvailableShippingServiceOptions} obj Optional instance to populate.
     * @return {AvailableShippingServiceOptions} The populated <code>AvailableShippingServiceOptions</code> instance.
     */
    static constructFromObject(data: any, obj: AvailableShippingServiceOptions): AvailableShippingServiceOptions;
    /**
     * Constructs a new <code>AvailableShippingServiceOptions</code>.
     * The available shipping service options.
     * @alias module:merchantfulfillment_v0/model/AvailableShippingServiceOptions
     * @class
     * @param availableCarrierWillPickUpOptions {AvailableCarrierWillPickUpOption[]} List of available carrier pickup options.
     * @param availableDeliveryExperienceOptions {AvailableDeliveryExperienceOption[]} List of available delivery experience options.
     */
    constructor(availableCarrierWillPickUpOptions: AvailableCarrierWillPickUpOption[], availableDeliveryExperienceOptions: AvailableDeliveryExperienceOption[]);
    availableCarrierWillPickUpOptions: AvailableCarrierWillPickUpOption[];
    availableDeliveryExperienceOptions: AvailableDeliveryExperienceOption[];
}
import { AvailableCarrierWillPickUpOption } from './AvailableCarrierWillPickUpOption.js';
import { AvailableDeliveryExperienceOption } from './AvailableDeliveryExperienceOption.js';
//# sourceMappingURL=AvailableShippingServiceOptions.d.ts.map