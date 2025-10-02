/**
 * The ShippingOptionsResponse model module.
 * @module externalfulfillmentshipments_v2024_09_11/model/ShippingOptionsResponse
 * @version 2024-09-11
 */
export class ShippingOptionsResponse {
    /**
     * Constructs a <code>ShippingOptionsResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {ShippingOptionsResponse} obj Optional instance to populate.
     * @return {ShippingOptionsResponse} The populated <code>ShippingOptionsResponse</code> instance.
     */
    static constructFromObject(data: any, obj: ShippingOptionsResponse): ShippingOptionsResponse;
    /**
     * A list of shipping options.
     * @member {[ShippingOptions]} shippingOptions
     * @type {[ShippingOptions]}
     */
    shippingOptions: [ShippingOptions];
    /**
     * @member {ShippingOptions} recommendedShippingOption
     * @type {ShippingOptions}
     */
    recommendedShippingOption: ShippingOptions;
}
import { ShippingOptions } from './ShippingOptions.js';
//# sourceMappingURL=ShippingOptionsResponse.d.ts.map