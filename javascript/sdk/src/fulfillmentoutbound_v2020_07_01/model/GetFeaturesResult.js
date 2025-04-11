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
import {Feature} from './Feature.js';

/**
 * The GetFeaturesResult model module.
 * @module fulfillmentoutbound_v2020_07_01/model/GetFeaturesResult
 * @version 2020-07-01
 */
export class GetFeaturesResult {
  /**
   * Constructs a new <code>GetFeaturesResult</code>.
   * The payload for the &#x60;getFeatures&#x60; operation.
   * @alias module:fulfillmentoutbound_v2020_07_01/model/GetFeaturesResult
   * @class
   * @param features {Array.<module:fulfillmentoutbound_v2020_07_01/model/Feature>} An array of features.
   */
  constructor(features) {
    this.features = features;
  }

  /**
   * Constructs a <code>GetFeaturesResult</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:fulfillmentoutbound_v2020_07_01/model/GetFeaturesResult} obj Optional instance to populate.
   * @return {module:fulfillmentoutbound_v2020_07_01/model/GetFeaturesResult} The populated <code>GetFeaturesResult</code> instance.
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
      obj = obj || new GetFeaturesResult();
      if (data.hasOwnProperty('features'))
        obj.features = ApiClient.convertToType(data['features'], [Feature]);
    }
    return obj;
  }
}

/**
 * An array of features.
 * @member {Array.<module:fulfillmentoutbound_v2020_07_01/model/Feature>} features
 */
GetFeaturesResult.prototype.features = undefined;


