/**
 * Amazon Shipping API
 * The Amazon Shipping API is designed to support outbound shipping use cases both for orders originating on Amazon-owned marketplaces as well as external channels/marketplaces. With these APIs, you can request shipping rates, create shipments, cancel shipments, and track shipments.
 *
 * The version of the OpenAPI document: v2
 * Contact: swa-api-core@amazon.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import {ApiClient} from '../ApiClient.js';
import {Currency} from './Currency.js';
import {RateItemID} from './RateItemID.js';
import {RateItemType} from './RateItemType.js';

/**
 * The RateItem model module.
 * @module shipping_v2/model/RateItem
 * @version v2
 */
export class RateItem {
  /**
   * Constructs a new <code>RateItem</code>.
   * Rate Item for shipping (base cost, transaction fee, confirmation, insurance, etc.) Data source definition: 
   * @alias module:shipping_v2/model/RateItem
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>RateItem</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:shipping_v2/model/RateItem} obj Optional instance to populate.
   * @return {module:shipping_v2/model/RateItem} The populated <code>RateItem</code> instance.
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
      obj = obj || new RateItem();
      if (data.hasOwnProperty('rateItemID'))
        obj.rateItemID = RateItemID.constructFromObject(data['rateItemID']);
      if (data.hasOwnProperty('rateItemType'))
        obj.rateItemType = RateItemType.constructFromObject(data['rateItemType']);
      if (data.hasOwnProperty('rateItemCharge'))
        obj.rateItemCharge = Currency.constructFromObject(data['rateItemCharge']);
      if (data.hasOwnProperty('rateItemNameLocalization'))
        obj.rateItemNameLocalization = ApiClient.convertToType(data['rateItemNameLocalization'], 'String');
    }
    return obj;
  }
}

/**
 * @member {module:shipping_v2/model/RateItemID} rateItemID
 */
RateItem.prototype.rateItemID = undefined;

/**
 * @member {module:shipping_v2/model/RateItemType} rateItemType
 */
RateItem.prototype.rateItemType = undefined;

/**
 * @member {module:shipping_v2/model/Currency} rateItemCharge
 */
RateItem.prototype.rateItemCharge = undefined;

/**
 * Used for the localization.
 * @member {String} rateItemNameLocalization
 */
RateItem.prototype.rateItemNameLocalization = undefined;


