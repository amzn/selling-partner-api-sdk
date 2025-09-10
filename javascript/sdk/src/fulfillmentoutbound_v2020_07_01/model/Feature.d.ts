/**
 * The Feature model module.
 * @module fulfillmentoutbound_v2020_07_01/model/Feature
 * @version 2020-07-01
 */
export class Feature {
    /**
     * Constructs a <code>Feature</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {Feature} obj Optional instance to populate.
     * @return {Feature} The populated <code>Feature</code> instance.
     */
    static constructFromObject(data: any, obj: Feature): Feature;
    /**
     * Constructs a new <code>Feature</code>.
     * A Multi-Channel Fulfillment feature.
     * @alias module:fulfillmentoutbound_v2020_07_01/model/Feature
     * @class
     * @param featureName {String} The feature name.
     * @param featureDescription {String} The feature description.
     */
    constructor(featureName: string, featureDescription: string);
    featureName: string;
    featureDescription: string;
    /**
     * When true, indicates that the seller is eligible to use the feature.
     * @member {Boolean} sellerEligible
     * @type {Boolean}
     */
    sellerEligible: boolean;
}
//# sourceMappingURL=Feature.d.ts.map