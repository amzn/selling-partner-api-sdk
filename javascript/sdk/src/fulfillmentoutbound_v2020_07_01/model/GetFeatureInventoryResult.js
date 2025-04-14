/**
 * Selling Partner APIs for Fulfillment Outbound
 * The Selling Partner API for Fulfillment Outbound lets you create applications that help a seller fulfill Multi-Channel Fulfillment orders using their inventory in Amazon's fulfillment network. You can get information on both potential and existing fulfillment orders.
 *
 * The version of the OpenAPI document: 2020-07-01
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import {ApiClient} from '../ApiClient.js';
import {FeatureSku} from './FeatureSku.js';

/**
 * The GetFeatureInventoryResult model module.
 * @module fulfillmentoutbound_v2020_07_01/model/GetFeatureInventoryResult
 * @version 2020-07-01
 */
export class GetFeatureInventoryResult {
  /**
   * Constructs a new <code>GetFeatureInventoryResult</code>.
   * The payload for the &#x60;getEligibileInventory&#x60; operation.
   * @alias module:fulfillmentoutbound_v2020_07_01/model/GetFeatureInventoryResult
   * @class
   * @param marketplaceId {String} The requested marketplace.
   * @param featureName {String} The name of the feature.
   */
  constructor(marketplaceId, featureName) {
    this.marketplaceId = marketplaceId;
    this.featureName = featureName;
  }

  /**
   * Constructs a <code>GetFeatureInventoryResult</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:fulfillmentoutbound_v2020_07_01/model/GetFeatureInventoryResult} obj Optional instance to populate.
   * @return {module:fulfillmentoutbound_v2020_07_01/model/GetFeatureInventoryResult} The populated <code>GetFeatureInventoryResult</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      switch(typeof data) {
        case 'string':
          obj = String(data);
          break;
        case 'number':
          obj = Number(data);
          break;
        case 'boolean':
          obj = Boolean(data);
          break;
      }
      obj = obj || new GetFeatureInventoryResult();
      if (data.hasOwnProperty('marketplaceId'))
        obj.marketplaceId = ApiClient.convertToType(data['marketplaceId'], 'String');
      if (data.hasOwnProperty('featureName'))
        obj.featureName = ApiClient.convertToType(data['featureName'], 'String');
      if (data.hasOwnProperty('nextToken'))
        obj.nextToken = ApiClient.convertToType(data['nextToken'], 'String');
      if (data.hasOwnProperty('featureSkus'))
        obj.featureSkus = ApiClient.convertToType(data['featureSkus'], [FeatureSku]);
    }
    return obj;
  }
}

/**
 * The requested marketplace.
 * @member {String} marketplaceId
 */
GetFeatureInventoryResult.prototype.marketplaceId = undefined;

/**
 * The name of the feature.
 * @member {String} featureName
 */
GetFeatureInventoryResult.prototype.featureName = undefined;

/**
 * When present and not empty, pass this string token in the next request to return the next response page.
 * @member {String} nextToken
 */
GetFeatureInventoryResult.prototype.nextToken = undefined;

/**
 * An array of SKUs eligible for this feature and the quantity available.
 * @member {Array.<module:fulfillmentoutbound_v2020_07_01/model/FeatureSku>} featureSkus
 */
GetFeatureInventoryResult.prototype.featureSkus = undefined;


