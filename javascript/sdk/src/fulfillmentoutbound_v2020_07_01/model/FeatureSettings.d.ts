/**
 * The FeatureSettings model module.
 * @module fulfillmentoutbound_v2020_07_01/model/FeatureSettings
 * @version 2020-07-01
 */
export class FeatureSettings {
    /**
     * Constructs a <code>FeatureSettings</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {FeatureSettings} obj Optional instance to populate.
     * @return {FeatureSettings} The populated <code>FeatureSettings</code> instance.
     */
    static constructFromObject(data: any, obj: FeatureSettings): FeatureSettings;
    /**
     * The name of the feature. Valid feature names are:  - `BLOCK_AMZL`: Blocks orders from being shipped using Amazon Logistics (AMZL).   - Note: Using this feature will incur additional fee surcharges on MCF orders and may increase the risk of unfulfilled or delayed deliveries if alternative carriers are unavailable. Using `BLOCK_AMZL` in an order request will take precedence over your Seller Central account setting. - `BLANK_BOX`: Ships orders in non-Amazon branded packaging (blank boxes). - `SIGNATURE_CONFIRMATION`: Requires a signature from the recipient upon delivery.    - Note: Using signature confirmation features will incur additional fees on MCF orders and are currently supported only in the US marketplace.
     * @member {String} featureName
     * @type {String}
     */
    featureName: string;
    /**
     * Specifies the policy to use when fulfilling an order.
     * @member {String} featureFulfillmentPolicy
     * @type {String}
     */
    featureFulfillmentPolicy: string;
}
export namespace FeatureSettings {
    namespace FeatureFulfillmentPolicyEnum {
        let Required: string;
        let NotRequired: string;
    }
    /**
     * *
     */
    type FeatureFulfillmentPolicyEnum = string;
}
//# sourceMappingURL=FeatureSettings.d.ts.map