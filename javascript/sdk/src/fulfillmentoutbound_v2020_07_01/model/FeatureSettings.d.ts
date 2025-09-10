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
     * The name of the feature.
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