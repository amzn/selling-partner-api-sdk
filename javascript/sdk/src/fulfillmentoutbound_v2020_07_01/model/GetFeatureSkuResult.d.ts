/**
 * The GetFeatureSkuResult model module.
 * @module fulfillmentoutbound_v2020_07_01/model/GetFeatureSkuResult
 * @version 2020-07-01
 */
export class GetFeatureSkuResult {
    /**
     * Constructs a <code>GetFeatureSkuResult</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {GetFeatureSkuResult} obj Optional instance to populate.
     * @return {GetFeatureSkuResult} The populated <code>GetFeatureSkuResult</code> instance.
     */
    static constructFromObject(data: any, obj: GetFeatureSkuResult): GetFeatureSkuResult;
    /**
     * Constructs a new <code>GetFeatureSkuResult</code>.
     * The payload for the &#x60;getFeatureSKU&#x60; operation.
     * @alias module:fulfillmentoutbound_v2020_07_01/model/GetFeatureSkuResult
     * @class
     * @param marketplaceId {String} The requested marketplace.
     * @param featureName {String} The name of the feature.
     * @param isEligible {Boolean} When true, the seller SKU is eligible for the requested feature.
     */
    constructor(marketplaceId: string, featureName: string, isEligible: boolean);
    marketplaceId: string;
    featureName: string;
    isEligible: boolean;
    /**
     * A list of one or more reasons that the seller SKU is ineligible for the feature.  Possible values: * `MERCHANT_NOT_ENROLLED`: The merchant isn't enrolled for the feature. * `SKU_NOT_ELIGIBLE`: The SKU doesn't reside in a warehouse that supports the feature. * `INVALID_SKU`: There is an issue with the SKU provided.
     * @member {String[]} ineligibleReasons
     * @type {String[]}
     */
    ineligibleReasons: string[];
    /**
     * @member {FeatureSku} skuInfo
     * @type {FeatureSku}
     */
    skuInfo: FeatureSku;
}
import { FeatureSku } from './FeatureSku.js';
//# sourceMappingURL=GetFeatureSkuResult.d.ts.map