/**
 * The GetFeatureInventoryResult model module.
 * @module fulfillmentoutbound_v2020_07_01/model/GetFeatureInventoryResult
 * @version 2020-07-01
 */
export class GetFeatureInventoryResult {
    /**
     * Constructs a <code>GetFeatureInventoryResult</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {GetFeatureInventoryResult} obj Optional instance to populate.
     * @return {GetFeatureInventoryResult} The populated <code>GetFeatureInventoryResult</code> instance.
     */
    static constructFromObject(data: any, obj: GetFeatureInventoryResult): GetFeatureInventoryResult;
    /**
     * Constructs a new <code>GetFeatureInventoryResult</code>.
     * The payload for the &#x60;getEligibleInventory&#x60; operation.
     * @alias module:fulfillmentoutbound_v2020_07_01/model/GetFeatureInventoryResult
     * @class
     * @param marketplaceId {String} The requested marketplace.
     * @param featureName {String} The name of the feature.
     */
    constructor(marketplaceId: string, featureName: string);
    marketplaceId: string;
    featureName: string;
    /**
     * When present and not empty, pass this string token in the next request to return the next response page.
     * @member {String} nextToken
     * @type {String}
     */
    nextToken: string;
    /**
     * An array of SKUs eligible for this feature and the quantity available.
     * @member {Array[]} featureSkus
     * @type {Array[]}
     */
    featureSkus: any[][];
}
//# sourceMappingURL=GetFeatureInventoryResult.d.ts.map