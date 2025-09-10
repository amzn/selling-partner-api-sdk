/**
 * The PackingOption model module.
 * @module fulfillmentinbound_v2024_03_20/model/PackingOption
 * @version 2024-03-20
 */
export class PackingOption {
    /**
     * Constructs a <code>PackingOption</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {PackingOption} obj Optional instance to populate.
     * @return {PackingOption} The populated <code>PackingOption</code> instance.
     */
    static constructFromObject(data: any, obj: PackingOption): PackingOption;
    /**
     * Constructs a new <code>PackingOption</code>.
     * A packing option contains a set of pack groups plus additional information about the packing option, such as any discounts or fees if it&#39;s selected.
     * @alias module:fulfillmentinbound_v2024_03_20/model/PackingOption
     * @class
     * @param discounts {[Incentive]} Discount for the offered option.
     * @param fees {[Incentive]} Fee for the offered option.
     * @param packingGroups {[String]} Packing group IDs.
     * @param packingOptionId {String} Identifier of a packing option.
     * @param status {String} The status of the packing option. Possible values: `OFFERED`, `ACCEPTED`, `EXPIRED`.
     * @param supportedConfigurations {[PackingConfiguration]} A list of possible configurations for this option.
     * @param supportedShippingConfigurations {[ShippingConfiguration]} **This field is deprecated**. Use the `shippingRequirements` property under `supportedConfigurations` instead. List of supported shipping modes.
     */
    constructor(discounts: [Incentive], fees: [Incentive], packingGroups: [string], packingOptionId: string, status: string, supportedConfigurations: [PackingConfiguration], supportedShippingConfigurations: [ShippingConfiguration]);
    discounts: [Incentive];
    fees: [Incentive];
    packingGroups: [string];
    packingOptionId: string;
    status: string;
    supportedConfigurations: [PackingConfiguration];
    supportedShippingConfigurations: [ShippingConfiguration];
    /**
     * The time at which this packing option is no longer valid. In [ISO 8601](https://developer-docs.amazon.com/sp-api/docs/iso-8601) datetime format with pattern `yyyy-MM-ddTHH:mm:ss.sssZ`.
     * @member {Date} expiration
     * @type {Date}
     */
    expiration: Date;
}
import { Incentive } from './Incentive.js';
import { PackingConfiguration } from './PackingConfiguration.js';
import { ShippingConfiguration } from './ShippingConfiguration.js';
//# sourceMappingURL=PackingOption.d.ts.map