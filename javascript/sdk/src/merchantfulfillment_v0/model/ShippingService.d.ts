/**
 * The ShippingService model module.
 * @module merchantfulfillment_v0/model/ShippingService
 * @version v0
 */
export class ShippingService {
    /**
     * Constructs a <code>ShippingService</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {ShippingService} obj Optional instance to populate.
     * @return {ShippingService} The populated <code>ShippingService</code> instance.
     */
    static constructFromObject(data: any, obj: ShippingService): ShippingService;
    /**
     * Constructs a new <code>ShippingService</code>.
     * A shipping service offer made by a carrier.
     * @alias module:merchantfulfillment_v0/model/ShippingService
     * @class
     * @param shippingServiceName {String} A plain text representation of a carrier's shipping service. For example, \"UPS Ground\" or \"FedEx Standard Overnight\".
     * @param carrierName {String} The name of the carrier.
     * @param shippingServiceId {String} An Amazon-defined shipping service identifier.
     * @param shippingServiceOfferId {String} An Amazon-defined shipping service offer identifier.
     * @param shipDate {Date} Date-time formatted timestamp.
     * @param rate {CurrencyAmount}
     * @param rateWithAdjustments {CurrencyAmount}
     * @param shippingServiceOptions {ShippingServiceOptions}
     * @param requiresAdditionalSellerInputs {Boolean} When true, additional seller inputs are required.
     */
    constructor(shippingServiceName: string, carrierName: string, shippingServiceId: string, shippingServiceOfferId: string, shipDate: Date, rate: CurrencyAmount, rateWithAdjustments: CurrencyAmount, shippingServiceOptions: ShippingServiceOptions, requiresAdditionalSellerInputs: boolean);
    shippingServiceName: string;
    carrierName: string;
    shippingServiceId: string;
    shippingServiceOfferId: string;
    shipDate: Date;
    rate: CurrencyAmount;
    rateWithAdjustments: CurrencyAmount;
    shippingServiceOptions: ShippingServiceOptions;
    requiresAdditionalSellerInputs: boolean;
    /**
     * Date-time formatted timestamp.
     * @member {Date} earliestEstimatedDeliveryDate
     * @type {Date}
     */
    earliestEstimatedDeliveryDate: Date;
    /**
     * Date-time formatted timestamp.
     * @member {Date} latestEstimatedDeliveryDate
     * @type {Date}
     */
    latestEstimatedDeliveryDate: Date;
    /**
     * List of adjustments.
     * @member {[RateItem]} adjustmentItemList
     * @type {[RateItem]}
     */
    adjustmentItemList: [RateItem];
    /**
     * @member {AvailableShippingServiceOptions} availableShippingServiceOptions
     * @type {AvailableShippingServiceOptions}
     */
    availableShippingServiceOptions: AvailableShippingServiceOptions;
    /**
     * List of label formats.
     * @member {[LabelFormat]} availableLabelFormats
     * @type {[LabelFormat]}
     */
    availableLabelFormats: [LabelFormat];
    /**
     * The available label formats.
     * @member {[LabelFormatOption]} availableFormatOptionsForLabel
     * @type {[LabelFormatOption]}
     */
    availableFormatOptionsForLabel: [LabelFormatOption];
    /**
     * @member {Benefits} benefits
     * @type {Benefits}
     */
    benefits: Benefits;
}
import { CurrencyAmount } from './CurrencyAmount.js';
import { ShippingServiceOptions } from './ShippingServiceOptions.js';
import { RateItem } from './RateItem.js';
import { AvailableShippingServiceOptions } from './AvailableShippingServiceOptions.js';
import { LabelFormat } from './LabelFormat.js';
import { LabelFormatOption } from './LabelFormatOption.js';
import { Benefits } from './Benefits.js';
//# sourceMappingURL=ShippingService.d.ts.map