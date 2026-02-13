/**
 * The GetFeaturesResult model module.
 * @module fulfillmentoutbound_v2020_07_01/model/GetFeaturesResult
 * @version 2020-07-01
 */
export class GetFeaturesResult {
    /**
     * Constructs a <code>GetFeaturesResult</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {GetFeaturesResult} obj Optional instance to populate.
     * @return {GetFeaturesResult} The populated <code>GetFeaturesResult</code> instance.
     */
    static constructFromObject(data: any, obj: GetFeaturesResult): GetFeaturesResult;
    /**
     * Constructs a new <code>GetFeaturesResult</code>.
     * The payload for the &#x60;getFeatures&#x60; operation.
     * @alias module:fulfillmentoutbound_v2020_07_01/model/GetFeaturesResult
     * @class
     * @param features {[Feature]} An array of features.
     */
    constructor(features: [Feature]);
    features: Feature[];
}
import { Feature } from './Feature.js';
//# sourceMappingURL=GetFeaturesResult.d.ts.map